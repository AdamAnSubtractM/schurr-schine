import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altText: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  altText,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let position = ((clientX - left) / width) * 100;

    // Restrict position between 0 and 100
    position = Math.max(0, Math.min(100, position));

    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    calculatePosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    calculatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("mouseup", handleGlobalMouseUp);
      window.addEventListener("touchend", handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-ew-resize shadow-lg"
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={afterImage}
          alt={`After ${altText}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`Before ${altText}`}
          className="w-full h-full object-cover absolute right-0 transform translate-x-0"
          style={{
            width: `${100 / (sliderPosition / 100)}%`,
            minWidth: "100%",
          }}
        />
      </div>

      {/* Slider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="h-1 w-1 bg-amber rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div
        className={`absolute bottom-4 right-4 bg-navy/80 text-white px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-200 ${
          sliderPosition > 95 ? "opacity-0" : "opacity-100"
        }`}
      >
        After
      </div>
      <div
        className={`absolute bottom-4 left-4 bg-amber/80 text-navy px-3 py-1 rounded-full text-sm font-medium transition-opacity duration-200 ${
          sliderPosition < 5 ? "opacity-0" : "opacity-100"
        }`}
      >
        Before
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
