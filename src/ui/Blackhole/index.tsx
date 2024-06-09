"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";

class Star {
  x: number;
  y: number;
  size: number;
  color: string;
  originalX: number;
  originalY: number;
  angle: number;
  speed: number;

  constructor(x: number, y: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.originalX = x;
    this.originalY = y;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 0.5 + 0.5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size * 2, this.size, 0, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  reset() {
    this.x = this.originalX;
    this.y = this.originalY;
    this.angle = Math.random() * 2 * Math.PI;
  }

  update(centerX: number, centerY: number) {
    this.angle += this.speed * 0.01;
    this.x =
      centerX +
      (this.originalX - centerX) * Math.cos(this.angle) -
      (this.originalY - centerY) * Math.sin(this.angle);
    this.y =
      centerY +
      (this.originalX - centerX) * Math.sin(this.angle) +
      (this.originalY - centerY) * Math.cos(this.angle);
  }
}

class BlackHole {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.shadowColor = "white";
    ctx.shadowBlur = 30;
    ctx.fill();
  }

  distort(star: Star) {
    const dx = star.x - this.x;
    const dy = star.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.radius * 3) {
      const angle = Math.atan2(dy, dx);
      const distortion = this.radius / distance;
      star.x += Math.cos(angle) * distortion;
      star.y += Math.sin(angle) * distortion;
      star.size = Math.max(0.5, this.radius / distance);
    }
  }
}

const BlackHoleSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const generateStarColor = () => {
      const hueRange = [200, 60]; // Blue to Red
      const saturationRange = [70, 100]; // Saturation range
      const lightnessRange = [70, 90]; // Lightness range

      const hue = Math.random() * (hueRange[1] - hueRange[0]) + hueRange[0];
      const saturation =
        Math.random() * (saturationRange[1] - saturationRange[0]) +
        saturationRange[0];
      const lightness =
        Math.random() * (lightnessRange[1] - lightnessRange[0]) +
        lightnessRange[0];

      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2 + 1;
      const color = generateStarColor();
      stars.push(new Star(x, y, size, color));
    }

    const blackHole = new BlackHole(canvas.width / 2, canvas.height / 2, 50);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blackHole.draw(ctx);
      stars.forEach((star) => {
        star.update(blackHole.x, blackHole.y);
        blackHole.distort(star);
        star.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      blackHole.x = canvas.width / 2;
      blackHole.y = canvas.height / 2;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="blackHoleCanvas"
      className={styles.canvas}
    ></canvas>
  );
};

export default BlackHoleSimulation;
