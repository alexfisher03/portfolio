import { useEffect, useRef } from "react";

export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const spacing = 42;
    const lineWidth = 0.35;
    const angle = -(3 * Math.PI) / 4;
    const dx = Math.cos(angle);  
    const dy = Math.sin(angle);      

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = (t: number) => {
        const width = canvas.width;
        const height = canvas.height;
        const diag = -Math.sqrt(width ** 2 + height ** 2);

        ctx.clearRect(0, 0, width, height);
        ctx.lineWidth = lineWidth;

        const count = Math.ceil((width + height) / spacing) * 2;
        const speed = 0.75; 

        for (let i = -count; i < count; i+=2) {
            const offset = i * spacing;
            const x0 = offset * dx;
            const y0 = offset * dy;

            const projected = (offset + diag) / (2 * diag); 
            const wave = Math.sin(2 * Math.PI * (projected - (t / 2000) * speed));
            const opacity = 0.15 * Math.max(0, wave); 

            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(x0 + dy * 3000, y0 - dx * 3000);
            ctx.lineTo(x0 - dy * 3000, y0 + dx * 3000);
            ctx.stroke();
        }

        animationFrameId = requestAnimationFrame(draw);
        };


    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
