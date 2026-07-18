'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollOverlays from './ScrollOverlays';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 163;

function getFramePath(index: number): string {
  const frameNumber = String(index + 1).padStart(3, '0');
  return `/frames/ezgif-frame-${frameNumber}.jpg`;
}

export default function ScrollCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Cover-fit draw helper
  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;

    if (canvasRatio > imgRatio) {
      // Canvas is wider — fit to width
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
    } else {
      // Canvas is taller — fit to height
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
    }

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Render a specific frame to canvas
  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const img = imagesRef.current[frameIndex];
    if (!img) return;

    requestAnimationFrame(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawImageCover(ctx, img, canvas.width, canvas.height);
    });
  };

  // Preload all images progressively
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;
    const images: HTMLImageElement[] = [];
    const CRITICAL_FRAMES = 15; // Number of initial frames to load before revealing site
    let loaded = 0;
    let criticalLoaded = 0;

    const loadFrame = (i: number, isCritical: boolean) => {
      const img = new Image();
      img.src = getFramePath(i);
      
      const handleLoad = () => {
        if (!isMounted) return;
        loaded++;
        setLoadedCount(loaded);
        
        if (isCritical) {
          criticalLoaded++;
          if (criticalLoaded === CRITICAL_FRAMES) {
            setIsLoaded(true);
            // Load remaining frames in background after initial page reveal
            setTimeout(loadRemaining, 100);
          }
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad;
      images[i] = img;
    };

    // Stage 1: Load critical frames
    for (let i = 0; i < CRITICAL_FRAMES; i++) {
      loadFrame(i, true);
    }

    // Stage 2: Load remaining frames in the background
    const loadRemaining = () => {
      for (let i = CRITICAL_FRAMES; i < TOTAL_FRAMES; i++) {
        if (!isMounted) break;
        loadFrame(i, false);
      }
    };

    imagesRef.current = images;

    return () => {
      isMounted = false;
    };
  }, []);

  // Canvas setup + ScrollTrigger after images loaded
  useEffect(() => {
    if (!isLoaded) return;
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameRef.current);
    };

    setCanvasSize();

    // Draw first frame
    renderFrame(0);

    // Handle resize
    window.addEventListener('resize', setCanvasSize);

    // ScrollTrigger for frame scrubbing
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
      onUpdate: (self) => {
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.floor(self.progress * TOTAL_FRAMES)
        );
        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          renderFrame(frameIndex);
        }
      },
    });

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      trigger.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  // Progress percentage based on critical frames (first 15) to transition loader quickly
  const progress = Math.min(100, Math.round((loadedCount / 15) * 100));

  return (
    <>
      {/* Loading Overlay */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          backgroundColor: '#050505',
          opacity: isLoaded ? 0 : 1,
          pointerEvents: isLoaded ? 'none' : 'auto',
          transition: 'opacity 700ms ease',
        }}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="text-3xl tracking-tight">
            <span
              className="font-bold"
              style={{
                background: 'linear-gradient(135deg, #FF6A00, #FFD000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              iQOO
            </span>{' '}
            <span className="text-white/60">Neo 7</span>
          </div>

          <div
            className="w-48 overflow-hidden rounded-full"
            style={{ height: '2px', backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(to right, #FF6A00, #FFD000)',
                transition: 'width 150ms ease',
              }}
            />
          </div>

          <span className="text-sm text-white/40">{progress}%</span>
        </div>
      </div>

      {/* Scroll Canvas Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: '500vh' }}
        id="scroll-experience"
      >
        <div className="sticky top-0 h-screen w-screen overflow-hidden">
          <canvas
            ref={canvasRef}
            className="block h-full w-full"
          />
        </div>
        <ScrollOverlays />
      </div>
    </>
  );
}
