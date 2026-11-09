export function BedMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 48 40"
    >
      <path d="M5 34V19.5c0-2 1.6-3.5 3.5-3.5h31c2 0 3.5 1.5 3.5 3.5V34M8 16V9c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v7M5 25h38M5 34h38" />
    </svg>
  );
}
