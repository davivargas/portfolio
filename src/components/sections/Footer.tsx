export const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
      <p className="font-mono">
        © {new Date().getFullYear()} Alex Carter
      </p>
      <p className="font-mono">Designed & built with care.</p>
    </div>
  </footer>
);
