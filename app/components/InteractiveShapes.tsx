'use client';

import { useEffect, useRef, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'square' | 'triangle';
  velocity: { x: number; y: number };
  color: string;
}

const InteractiveShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Initialize shapes
  useEffect(() => {
    const createShapes = () => {
      const newShapes: Shape[] = [];
      const shapeTypes: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
      const colors = ['bg-primary-dark/40', 'bg-primary/60', 'bg-primary-dark/30', 'bg-primary/50'];

      for (let i = 0; i < 12; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 30 + 20,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          velocity: { x: 0, y: 0 },
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setShapes(newShapes);
    };

    createShapes();
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate shapes away from mouse
  useEffect(() => {
    const animate = () => {
      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          const dx = shape.x - mousePos.x;
          const dy = shape.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const pushRadius = 15; // Distance at which shapes start moving away

          let newVelocity = { ...shape.velocity };
          let newX = shape.x;
          let newY = shape.y;

          if (distance < pushRadius && distance > 0) {
            // Push away from mouse
            const force = (pushRadius - distance) / pushRadius;
            newVelocity.x = (dx / distance) * force * 2;
            newVelocity.y = (dy / distance) * force * 2;
          } else {
            // Gradually slow down
            newVelocity.x *= 0.95;
            newVelocity.y *= 0.95;
          }

          newX += newVelocity.x;
          newY += newVelocity.y;

          // Keep shapes within bounds
          if (newX < 0) {
            newX = 0;
            newVelocity.x = 0;
          } else if (newX > 100) {
            newX = 100;
            newVelocity.x = 0;
          }

          if (newY < 0) {
            newY = 0;
            newVelocity.y = 0;
          } else if (newY > 100) {
            newY = 100;
            newVelocity.y = 0;
          }

          return {
            ...shape,
            x: newX,
            y: newY,
            velocity: newVelocity,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  const renderShape = (shape: Shape) => {
    const baseClasses = `absolute transition-all duration-100 ${shape.color}`;
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
    };

    if (shape.type === 'circle') {
      return (
        <div
          key={shape.id}
          className={`${baseClasses} rounded-full`}
          style={style}
        />
      );
    } else if (shape.type === 'square') {
      return (
        <div
          key={shape.id}
          className={`${baseClasses} rotate-45`}
          style={style}
        />
      );
    } else {
      // Triangle
      return (
        <div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: 0,
            height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid`,
          }}
        >
          <div className={`w-0 h-0 ${shape.color}`} style={{
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid currentColor`,
          }} />
        </div>
      );
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => renderShape(shape))}
    </div>
  );
};

export default InteractiveShapes;
