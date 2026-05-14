import { footerData } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="relative px-6 py-10">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.63 0.22 265 / 20%), transparent)" }}
      />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">{footerData.name}</span>
          {" · "}
          {footerData.tagline}
        </div>
        <div className="flex gap-6">
          {footerData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
