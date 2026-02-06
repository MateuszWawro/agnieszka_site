# Agnieszka Wawro - Portfolio Website

Nowoczesna strona portfolio dla Agnieszki Wawro - inżyniera architekta, studentki Politechniki Gdańskiej.

## 🚀 Stack technologiczny

- **Next.js 16** - Framework React z App Router
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Stylowanie
- **Docker** - Konteneryzacja

## 📋 Wymagania

- Node.js 20 lub nowszy
- npm lub yarn
- Docker i Docker Compose (opcjonalnie)

## 🛠️ Instalacja i uruchomienie

### Lokalnie (bez Docker)

1. **Sklonuj repozytorium:**
   ```bash
   git clone https://github.com/MateuszWawro/agnieszka_site.git
   cd agnieszka_site
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom w trybie deweloperskim:**
   ```bash
   npm run dev
   ```

4. **Otwórz przeglądarkę:**
   ```
   http://localhost:3000
   ```

### Budowanie wersji produkcyjnej

```bash
npm run build
npm start
```

## 🐳 Docker

### Uruchomienie z Docker Compose (zalecane)

```bash
docker-compose up --build
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

### Zatrzymanie kontenera

```bash
docker-compose down
```

### Ręczne budowanie Docker image

```bash
# Zbuduj obraz
docker build -t agnieszka-portfolio .

# Uruchom kontener
docker run -p 3000:3000 agnieszka-portfolio
```

## 📦 Struktura projektu

```
/
├── app/
│   ├── components/       # Komponenty React
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Interests.tsx
│   │   └── Contact.tsx
│   ├── layout.tsx       # Layout główny z metadanymi
│   ├── page.tsx         # Strona główna
│   └── globals.css      # Style globalne
├── public/              # Pliki statyczne
├── Dockerfile           # Konfiguracja Docker
├── docker-compose.yml   # Konfiguracja Docker Compose
├── next.config.js       # Konfiguracja Next.js
├── tailwind.config.ts   # Konfiguracja Tailwind
└── package.json         # Zależności projektu
```

## 🎨 Customizacja

### Zmiana kolorów

Kolory można dostosować w pliku `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#F5C2C7',  // Róż podstawowy
    dark: '#E89BA3',     // Róż ciemny
  },
  // ...
}
```

### Aktualizacja treści

Treść strony można edytować w plikach komponentów w katalogu `app/components/`:

- **Hero.tsx** - Sekcja główna i "O mnie"
- **Education.tsx** - Wykształcenie
- **Experience.tsx** - Doświadczenie zawodowe
- **Skills.tsx** - Umiejętności
- **Interests.tsx** - Zainteresowania
- **Contact.tsx** - Dane kontaktowe

### Zmiana zdjęcia

W pliku `app/components/Hero.tsx` zamień URL placeholder na ścieżkę do właściwego zdjęcia:

```typescript
<Image
  src="/your-photo.jpg"  // Umieść zdjęcie w katalogu /public
  alt="Agnieszka Wawro"
  // ...
/>
```

## 🌐 Deployment

### Cloudflare Tunnel

1. **Zainstaluj cloudflared:**
   ```bash
   # Linux
   wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
   sudo dpkg -i cloudflared-linux-amd64.deb
   ```

2. **Uruchom aplikację:**
   ```bash
   docker-compose up -d
   ```

3. **Utwórz tunel:**
   ```bash
   cloudflared tunnel --url http://localhost:3000
   ```

4. **Dla stałego tunelu:**
   ```bash
   # Zaloguj się
   cloudflared tunnel login
   
   # Utwórz tunel
   cloudflared tunnel create agnieszka-portfolio
   
   # Skonfiguruj routing
   cloudflared tunnel route dns agnieszka-portfolio twoja-domena.pl
   
   # Uruchom tunel
   cloudflared tunnel run agnieszka-portfolio
   ```

### Inne opcje deploymentu

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Podłącz repozytorium GitHub
- **VPS**: Użyj Docker Compose na serwerze

## 📱 Funkcjonalności

- ✅ Responsywny design (mobile, tablet, desktop)
- ✅ Smooth scrolling między sekcjami
- ✅ Sticky navigation
- ✅ Animacje hover
- ✅ SEO-friendly
- ✅ Accessibility (semantic HTML, ARIA labels)
- ✅ Optymalizacja wydajności
- ✅ Docker support

## 🔧 Komendy npm

```bash
npm run dev      # Uruchom w trybie deweloperskim
npm run build    # Zbuduj wersję produkcyjną
npm start        # Uruchom wersję produkcyjną
npm run lint     # Sprawdź kod (linting)
```

## 📄 Licencja

© 2024 Agnieszka Wawro. Wszystkie prawa zastrzeżone.

## 📞 Kontakt

- **Email**: agnieszka.wawro02@gmail.com
- **Telefon**: +48 724 23 22 21
- **Lokalizacja**: Elbląg / Gdańsk

## 🤝 Współpraca

Projekt otwarty na propozycje ulepszeń. W razie pytań lub sugestii, skontaktuj się mailowo.
