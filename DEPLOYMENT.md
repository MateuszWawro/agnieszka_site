# Deployment Guide - VPS with Self-Hosted Runner

This guide explains how to deploy the Agnieszka Portfolio website to a VPS using Docker and GitHub Actions with a self-hosted runner.

## Prerequisites

### On the VPS:
1. Docker installed and running
2. docker compose installed
3. GitHub Actions self-hosted runner configured and running
4. Port 3001 available for the application

### Installation Commands (Ubuntu/Debian):
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install docker compose
sudo apt-get update
sudo apt-get install docker compose-plugin

# Verify installations
docker --version
docker compose version
```

## Configuration

### Port Mapping
The application runs on:
- **Internal port**: 3000 (inside the container)
- **External port**: 3001 (accessible from VPS)

This is configured in `docker compose.yml`:
```yaml
ports:
  - "3001:3000"
```

## Deployment Methods

### 1. Automatic Deployment (GitHub Actions)

The application automatically deploys when code is pushed to the `main` branch.

**Workflow file**: `.github/workflows/deploy.yml`

The workflow:
1. Runs on the self-hosted runner
2. Checks out the latest code
3. Stops existing containers
4. Builds and starts new containers
5. Cleans up old Docker images
6. Verifies the deployment

**Manual trigger**:
You can also trigger the deployment manually from GitHub Actions:
1. Go to Actions tab in GitHub
2. Select "Deploy to VPS" workflow
3. Click "Run workflow"

### 2. Manual Deployment (SSH)

SSH into your VPS and run:

```bash
# Navigate to the repository directory
cd /path/to/agnieszka_site

# Pull latest changes (if needed)
git pull

# Run the deployment script
./deploy.sh
```

Or manually:
```bash
# Stop existing containers
docker compose down

# Build and start new containers
docker compose up -d --build

# Check status
docker ps | grep agnieszka-portfolio
```

## Post-Deployment

### Access the Application
After deployment, the application is accessible at:
- `http://your-vps-ip:3001`
- `http://your-domain:3001` (if you have a domain configured)

### View Logs
```bash
# Follow logs in real-time
docker compose logs -f

# View specific service logs
docker compose logs -f nextjs
```

### Check Container Status
```bash
# List running containers
docker ps

# Check health status
docker compose ps
```

### Stop the Application
```bash
docker compose down
```

### Restart the Application
```bash
docker compose restart
```

## Troubleshooting

### Container won't start
```bash
# Check logs for errors
docker compose logs

# Check if port 3001 is already in use
sudo lsof -i :3001

# Rebuild from scratch
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Out of disk space
```bash
# Clean up unused Docker resources
docker system prune -a

# Remove old images (done automatically in GitHub Actions)
docker image prune -af
```

### Self-hosted runner issues
```bash
# Check runner status
cd /path/to/actions-runner
./run.sh --check

# Restart runner
./run.sh
```

## Production Recommendations

### 1. Set up a reverse proxy (Nginx)
Configure Nginx to proxy port 80/443 to port 3001:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Set up SSL/HTTPS with Let's Encrypt
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 3. Configure firewall
```bash
# Allow port 3001 (or just 80/443 if using reverse proxy)
sudo ufw allow 3001/tcp
sudo ufw enable
```

### 4. Set up monitoring
Consider using:
- Docker health checks (already configured in docker compose.yml)
- Uptime monitoring services
- Log aggregation tools

## Security Notes

1. The application runs as a non-root user inside the container
2. Only production dependencies are included in the final image
3. Health checks ensure the application is responding
4. Regular cleanup of old Docker images prevents disk space issues

## Support

For issues or questions:
- Check the logs: `docker compose logs`
- Review GitHub Actions workflow runs
- Check container health: `docker ps`
