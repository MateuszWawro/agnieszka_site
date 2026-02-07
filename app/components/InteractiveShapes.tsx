'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetVx: number;
  targetVy: number;
}

const InteractiveShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize particles - increased from 12 to 35
    const particleCount = 35;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        targetVx: (Math.random() - 0.5) * 0.5,
        targetVy: (Math.random() - 0.5) * 0.5,
      });
    }
    
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const maxDistance = 150; // Maximum distance to draw lines

      // Update particle positions
      particles.forEach((particle) => {
        // Smoothly transition to target velocity for more organic movement
        particle.vx += (particle.targetVx - particle.vx) * 0.02;
        particle.vy += (particle.targetVy - particle.vy) * 0.02;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.targetVx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.targetVy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Randomly change target velocity occasionally for more interesting movement
        if (Math.random() < 0.01) {
          particle.targetVx = (Math.random() - 0.5) * 0.8;
          particle.targetVy = (Math.random() - 0.5) * 0.8;
        }
      });

      // Draw lines between nearby particles
      ctx.strokeStyle = 'rgba(232, 155, 163, 0.3)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Fade line opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.4;
            ctx.strokeStyle = `rgba(232, 155, 163, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = 'rgba(245, 194, 199, 0.7)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow effect
        ctx.fillStyle = 'rgba(232, 155, 163, 0.3)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default InteractiveShapes;
