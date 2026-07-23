import { useEffect, useRef } from 'react';
import { useSite } from '../context/SiteContext';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useSite();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    let animationId: number;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const canvasEl = canvasRef.current!;
      width = canvasEl.clientWidth;
      height = canvasEl.clientHeight;
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function onMove(e: MouseEvent) {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const lineColor = theme === 'dark' ? '212, 167, 44' : '43, 79, 216';
    const nodeColor = theme === 'dark' ? '227, 190, 82' : '43, 79, 216';

    function frame() {
      ctx!.clearRect(0, 0, width, height);
      const linkDist = 130;
      const mouseDist = 160;

      for (const n of nodes) {
        if (!reducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          const dxm = n.x - mouse.x;
          const dym = n.y - mouse.y;
          const dm = Math.hypot(dxm, dym);
          if (dm < mouseDist) {
            const force = (1 - dm / mouseDist) * 0.6;
            n.x += (dxm / (dm || 1)) * force;
            n.y += (dym / (dm || 1)) * force;
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDist) {
            ctx!.strokeStyle = `rgba(${lineColor}, ${0.22 * (1 - d / linkDist)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${nodeColor}, 0.85)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      animationId = requestAnimationFrame(frame);
    }

    resize();
    frame();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}
