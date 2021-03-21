import React, { useEffect, useRef } from 'react';

interface CanvasProps {
  width: number;
  height: number;
  numOfPoints: number;
  multiplier: number;
}

const Canvas = ({ width, height, numOfPoints, multiplier }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // x and y marks centre of circle
    const x: number = width / 2;
    const y: number = height / 2;
    const radius: number = width / 2 - 10;

    const getPointPositions = (points: any, angle: number, distance: number) => {
      const pointX = x + radius * Math.cos(-angle * Math.PI / 180) * distance;
      const pointY = y + radius * Math.sin(-angle * Math.PI / 180) * distance;
      points.push({ x: pointX, y: pointY });
      return points;
    }

    const drawCircle = (ctx: CanvasRenderingContext2D) => {
      let points: any[] = [];
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);

      var gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#FC6C85");
      gradient.addColorStop(1, "#2B60DE");
      ctx.strokeStyle = gradient;
      ctx.stroke();

      const angleBetweenPoints: number = 360 / numOfPoints;
      for (let i = 0; i < numOfPoints; i += 1) {
        getPointPositions(points, i * angleBetweenPoints, 1);
      }

      for (let i = 0; i < points.length; i += 1) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        if (i < points.length / multiplier) {
          ctx.lineTo(points[i * multiplier].x, points[i * multiplier].y);
        } else {
          ctx.lineTo(points[i * multiplier % points.length].x, points[i * multiplier % points.length].y);
        }
        ctx.stroke();
      }
    }

    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawCircle(ctx);
    } else {
      throw new Error('Context is null')
    }
  }, [height, multiplier, numOfPoints, width]);

  return (
    <canvas ref={canvasRef} width={width} height={height} />
  );
}

export default Canvas;