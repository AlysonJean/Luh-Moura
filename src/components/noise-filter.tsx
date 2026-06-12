export function NoiseFilter() {
  return (
    <svg className="hidden">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
    </svg>
  );
}
