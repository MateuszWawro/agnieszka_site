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

// Animation configuration constants
const PARTICLE_COUNT = 35;
const MAX_CONNECTION_DISTANCE = 150;
const PARTICLE_RADIUS = 3;
const PARTICLE_GLOW_RADIUS = 6;
const MAX_VELOCITY = 0.5;
const MAX_TARGET_VELOCITY = 0.8;
const VELOCITY_SMOOTHING = 0.02;
const VELOCITY_CHANGE_PROBABILITY = 0.01;
const LINE_OPACITY = 0.4;
const PARTICLE_COLOR = 'rgba(245, 194, 199, 0.7)';
const PARTICLE_GLOW_COLOR = 'rgba(232, 155, 163, 0.3)';
const LINE_COLOR_RGB = '232, 155, 163';

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

    // Initialize particles
    const particles: Particle[] = [];
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * MAX_VELOCITY,
        vy: (Math.random() - 0.5) * MAX_VELOCITY,
        targetVx: (Math.random() - 0.5) * MAX_VELOCITY,
        targetVy: (Math.random() - 0.5) * MAX_VELOCITY,
      });
    }
    
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update particle positions
      particles.forEach((particle) => {
        // Smoothly transition to target velocity for more organic movement
        particle.vx += (particle.targetVx - particle.vx) * VELOCITY_SMOOTHING;
        particle.vy += (particle.targetVy - particle.vy) * VELOCITY_SMOOTHING;

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
        if (Math.random() < VELOCITY_CHANGE_PROBABILITY) {
          particle.targetVx = (Math.random() - 0.5) * MAX_TARGET_VELOCITY;
          particle.targetVy = (Math.random() - 0.5) * MAX_TARGET_VELOCITY;
        }
      });

      // Draw lines between nearby particles
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < MAX_CONNECTION_DISTANCE) {
            // Fade line opacity based on distance
            const opacity = (1 - distance / MAX_CONNECTION_DISTANCE) * LINE_OPACITY;
            ctx.strokeStyle = `rgba(${LINE_COLOR_RGB}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((particle) => {
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, PARTICLE_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow effect
        ctx.fillStyle = PARTICLE_GLOW_COLOR;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, PARTICLE_GLOW_RADIUS, 0, Math.PI * 2);
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
