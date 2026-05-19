import { personalFooter } from "@/data/personal-content";

export function PersonalFooter() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-xs font-mono text-muted-foreground/40">
          {personalFooter.name} · {new Date().getFullYear()}
        </p>

        <nav className="flex items-center gap-5">
          {personalFooter.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={link.label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <img
                src={link.icon}
                alt={link.label}
                className="size-5 invert opacity-40 hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
