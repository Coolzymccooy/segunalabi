export default function ArrowIcon({
  external = false,
  className = "",
}: {
  external?: boolean;
  className?: string;
}) {
  return external ? (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M5 11 11 5M6 5h5v5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ) : (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M2.5 8h10M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
