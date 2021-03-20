import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Sprite = ({ img, width, height, scale, cycle, frameLimit }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawFrame = (frameX, frameY, canvasX, canvasY) => {
      const scaledWidth = scale * width;
      const scaledHeight = scale * height;
      ctx.drawImage(
        img,
        frameX * width,
        frameY * height,
        width,
        height,
        canvasX,
        canvasY,
        scaledWidth,
        scaledHeight);
    }

    let frameCount = 0;
    let currentLoopIndex = 0;
    const cycleLoop = [...Array(cycle).keys()];

    const step = () => {
      frameCount += 1;
      if (frameCount < frameLimit) {
        window.requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
      currentLoopIndex += 1;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  });

  return (
    <canvas ref={canvasRef} height={window.innerHeight} width={window.innerWidth} />
  );
}

Sprite.propTypes = {
  img: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  frameLimit: PropTypes.number.isRequired,
};

export default Sprite;
