type Props = {
  className?: string;
  title?: string;
};

/**
 * Lightweight line mark suggesting the Discobolus stance — a single arc
 * (the discus arm) crossing a vertical plumb line. Used as a recurring
 * brand motif beside section headings.
 */
export default function DiscobolusMark({ className, title = "Akribeia Discobolus mark" }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <title>{title}</title>
      {/* plumb line */}
      <line x1="24" y1="4" x2="24" y2="44" />
      {/* discus arc — the swing */}
      <path d="M6 30 Q 24 6 42 22" />
      {/* tension dot — the discus */}
      <circle cx="42" cy="22" r="1.4" fill="currentColor" stroke="none" />
      {/* base */}
      <line x1="14" y1="44" x2="34" y2="44" />
    </svg>
  );
}
