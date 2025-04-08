import { FC, useEffect, useRef, useState } from "react";

interface Props {
  label: string
}

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtx = useRef<CanvasRenderingContext2D | null>(null);
  const [ drawing, toggleDraw ] = useState(false);

  const drawEvent = () => {
    // if ()
    // https://blog.csdn.net/zxo_apple/article/details/136229149
    // https://blog.epoch.tw/2022/06/%E4%BD%BF%E7%94%A8-TypeScript-%E6%93%8D%E4%BD%9C-Canvas-%E7%95%AB%E5%B8%83/
    // https://koenvangilst.nl/blog/react-hooks-with-canvas
    // https://gcdeng.com/blog/react-hooks#useref
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtx.current = canvasRef.current.getContext('2d');

      if (canvasCtx.current) {
        canvasCtx.current.fillStyle = '#e0e0e0';
        canvasCtx.current.fillRect(0, 0, 200, 100);
      }
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef}
              onMouseDown={toggleDraw(true)}
              onMouseUp={toggleDraw(false)}
              onMouseMove={drawEvent}
      ></canvas>
    </>
  );
};

const ScratchCard: FC<Props> = ({ label }) => {
  return (
    <>
      <div>{label}</div>
      <Canvas />
    </>
  );
};

export default ScratchCard;