import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const fps = 60;
    const minVelocity = Math.random() * 50 + 5;
    const maxVelocity = Math.random() * 100 + minVelocity;
    const numOfStars = Math.random() * 80 + 5;
  
    class Star {
      constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
      }
    }
  
    let stars = [];
    for (let i = 0; i < numOfStars; i++) {
      stars.push(new Star(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() * 2 + 1,
        Math.random() * (maxVelocity - minVelocity) + minVelocity
      ));
    }

    function draw(ctx) {
      const canvas = ctx.canvas;
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#ffffff';
      for (let star of stars) {
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
    }

    const updateStars = () => {
      const dt = 1 / fps;
      for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.y += dt * star.speed;
  
        if (star.y > window.innerHeight) {
          stars[i] = new Star(
            Math.random() * window.innerWidth,
            0,
            Math.random() * 3 + 1,
            Math.random() * (maxVelocity - minVelocity) + minVelocity
          );
        }
      }
    }
    const resizeCanvas = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawStars = setInterval(() => {
      updateStars();
      draw(ctx);
    }, 1000/fps);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearInterval(drawStars);
    };
  });

  return (
    <canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth} />
  )
}

export default Starfield;
