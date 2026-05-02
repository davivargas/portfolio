interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => (
  <div className="max-w-2xl mb-12">
    <p className="font-mono text-sm text-primary mb-2">{eyebrow}</p>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-base sm:text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);
