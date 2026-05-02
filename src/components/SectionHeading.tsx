interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
}

export const SectionHeading = ({ eyebrow, title }: SectionHeadingProps) => (
  <div className="mb-10">
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary mb-2">
      {eyebrow}
    </p>
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
      {title}
      <span className="text-highlight">.</span>
    </h2>
  </div>
);
