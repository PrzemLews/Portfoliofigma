import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
};

const MIN_SCALE = 1;
const MAX_SCALE = 6;

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function Lightbox({ src, alt = "", caption, className }: Props) {
  const dialogRef   = useRef<HTMLDialogElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep zoom/pan state in refs so event handlers never go stale
  const scaleRef = useRef(1);
  const posRef   = useRef({ x: 0, y: 0 });

  // Trigger re-render for transform changes
  const [transformStr, setTransformStr] = useState("translate(0px,0px) scale(1)");
  const [isDragging, setIsDragging]     = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const posStart  = useRef({ x: 0, y: 0 });

  // Touch pinch
  const lastPinchDist = useRef<number | null>(null);
  const lastPinchMid  = useRef<{ x: number; y: number } | null>(null);

  // ── helpers ─────────────────────────────────────────────────────────────
  function apply(scale: number, x: number, y: number) {
    scaleRef.current  = scale;
    posRef.current    = { x, y };
    setTransformStr(`translate(${x}px,${y}px) scale(${scale})`);
  }

  function reset() { apply(1, 0, 0); }

  // ── open / close ─────────────────────────────────────────────────────────
  function open() {
    reset();
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function close() {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  }

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) close();
  }

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onClose = () => { document.body.style.overflow = ""; };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  // ── wheel zoom (centred on cursor) ────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect      = el.getBoundingClientRect();
      const cursorX   = e.clientX - rect.left;
      const cursorY   = e.clientY - rect.top;
      const prevScale = scaleRef.current;
      const { x: px, y: py } = posRef.current;

      const factor   = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const newScale = clamp(prevScale * factor, MIN_SCALE, MAX_SCALE);

      // Keep the point under the cursor fixed
      const imgX = (cursorX - px) / prevScale;
      const imgY = (cursorY - py) / prevScale;
      apply(newScale, cursorX - imgX * newScale, cursorY - imgY * newScale);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ── mouse drag ────────────────────────────────────────────────────────────
  function handleMouseDown(e: React.MouseEvent) {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current  = { ...posRef.current };
  }

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragStart.current || !isDragging) return;
      apply(
        scaleRef.current,
        posStart.current.x + (e.clientX - dragStart.current.x),
        posStart.current.y + (e.clientY - dragStart.current.y),
      );
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup",   onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [isDragging]);

  // ── touch (drag + pinch) ──────────────────────────────────────────────────
  function pinchDist(t: React.TouchList) {
    const dx = t[0].clientX - t[1].clientX;
    const dy = t[0].clientY - t[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function pinchMid(t: React.TouchList) {
    return { x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 };
  }

  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      lastPinchDist.current = pinchDist(e.touches);
      lastPinchMid.current  = pinchMid(e.touches);
    } else {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      posStart.current  = { ...posRef.current };
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    if (e.touches.length === 2 && lastPinchDist.current !== null && lastPinchMid.current !== null) {
      const newDist  = pinchDist(e.touches);
      const newMid   = pinchMid(e.touches);
      const prevMid  = lastPinchMid.current;
      const prevScale = scaleRef.current;
      const { x: px, y: py } = posRef.current;

      const newScale = clamp(prevScale * (newDist / lastPinchDist.current), MIN_SCALE, MAX_SCALE);
      const cursorX  = newMid.x - rect.left;
      const cursorY  = newMid.y - rect.top;
      const imgX = (cursorX - px) / prevScale;
      const imgY = (cursorY - py) / prevScale;

      apply(
        newScale,
        cursorX - imgX * newScale + (newMid.x - prevMid.x),
        cursorY - imgY * newScale + (newMid.y - prevMid.y),
      );
      lastPinchDist.current = newDist;
      lastPinchMid.current  = newMid;
    } else if (e.touches.length === 1 && isDragging) {
      apply(
        scaleRef.current,
        posStart.current.x + (e.touches[0].clientX - dragStart.current.x),
        posStart.current.y + (e.touches[0].clientY - dragStart.current.y),
      );
    }
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (e.touches.length < 2) { lastPinchDist.current = null; lastPinchMid.current = null; }
    if (e.touches.length === 0) setIsDragging(false);
  }

  // ── double-click to toggle 2.5× zoom ─────────────────────────────────────
  function handleDoubleClick(e: React.MouseEvent) {
    if (scaleRef.current > 1) { reset(); return; }
    const el = containerRef.current;
    if (!el) return;
    const rect    = el.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;
    const s = 2.5;
    apply(s, cursorX - (cursorX / 1) * s, cursorY - (cursorY / 1) * s);
  }

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Thumbnail button */}
      <button
        type="button"
        onClick={open}
        className="group relative block w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC133]"
        aria-label="Zoom image"
      >
        <ImageWithFallback src={src} alt={alt} className={className ?? "w-full h-auto object-cover"} />
        <span className="absolute bottom-[10px] right-[10px] pointer-events-none bg-[#FFC133] border-4 border-[#374151] p-2 group-hover:bg-[#FF8A5B] transition-colors duration-200">
          <ZoomIn size={16} className="text-[#374151]" strokeWidth={2.5} />
        </span>
      </button>

      {/* Lightbox dialog */}
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="fixed inset-0 m-auto max-w-[90vw] max-h-[90vh] w-auto h-auto p-0 bg-transparent border-none outline-none backdrop:bg-[#FFC133]/80"
      >
        <div className="relative border-4 border-[#374151] bg-white shadow-[8px_8px_0px_#374151] max-w-[88vw] max-h-[88vh] flex flex-col">

          {/* Zoomable / pannable image area */}
          <div
            ref={containerRef}
            className={`overflow-hidden relative select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ touchAction: "none" }}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="block max-w-[84vw] max-h-[75vh] w-auto h-auto object-contain pointer-events-none"
              style={{ transform: transformStr, transformOrigin: "0 0" }}
            />

            {/* Close button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); close(); }}
              className="absolute top-[10px] right-[10px] z-10 p-2 bg-[#FFC133] border-4 border-[#374151] text-[#374151] hover:bg-[#F09065] transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Caption */}
          {caption && (
            <p
              className="px-4 py-3 text-sm text-gray-500 italic border-t-4 border-[#374151] bg-white shrink-0"
              dangerouslySetInnerHTML={{ __html: caption }}
            />
          )}
        </div>
      </dialog>
    </>
  );
}
