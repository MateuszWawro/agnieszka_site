const Contact = () => {
  const contactInfo = [
    {
      icon: '📱',
      label: 'Telefon',
      value: '+48 724 23 22 21',
      href: 'tel:+48724232221',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'agnieszka.wawro02@gmail.com',
      href: 'mailto:agnieszka.wawro02@gmail.com',
    },
    {
      icon: '📍',
      label: 'Lokalizacja',
      value: 'Elbląg / Gdańsk',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-primary-dark">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Kontakt
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">{item.label}</h3>
              <p className="text-dark font-bold group-hover:text-primary-dark transition-colors duration-200">
                {item.value}
              </p>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white text-lg">
            Zapraszam do kontaktu w sprawie współpracy lub projektów architektonicznych
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-white/20 text-center text-white/80">
        <p>&copy; {new Date().getFullYear()} Agnieszka Wawro. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </section>
  );
};

export default Contact;
