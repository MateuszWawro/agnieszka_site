#!/bin/bash
set -e

echo "🚀 Starting deployment to VPS..."

# Check if docker and docker-compose are available
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

if ! docker compose version &> /dev/null; then
    echo "❌ docker compose is not available. Please install Docker Compose plugin."
    exit 1
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker compose down || true

# Build and start new containers
echo "🔨 Building and starting containers..."
docker compose up -d --build

# Wait for the container to be healthy
echo "⏳ Waiting for the application to be ready..."
sleep 10

# Check if container is running
if docker ps | grep -q agnieszka-portfolio; then
    echo "✅ Deployment successful!"
    echo "🌐 Application is running on port 3001"
    echo ""
    echo "Container status:"
    docker ps | grep agnieszka-portfolio
    echo ""
    echo "To view logs: docker compose logs -f"
    echo "To stop: docker compose down"
else
    echo "❌ Deployment failed. Container is not running."
    echo "Check logs with: docker compose logs"
    exit 1
fi
