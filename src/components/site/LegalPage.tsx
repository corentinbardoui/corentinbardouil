import { readFileSync } from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "./SiteShell";
import { LEGAL_DATE, type Lang, type PageKey } from "@/data/site";

type LegalKey = Exclude<PageKey, "home">;

function formattedDate(lang: Lang) {
  return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${LEGAL_DATE}T00:00:00Z`),
  );
}

// Mise en forme en ligne : **gras**, [liens](/chemin) et adresses e-mail.
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|[\w.+-]+@[\w-]+\.\w+(?:\.\w+)*)/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <Link key={i} href={link[2]}>{link[1]}</Link>;
    if (/^[\w.+-]+@/.test(part)) return <a key={i} href={`mailto:${part}`}>{part}</a>;
    return part;
  });
}

/**
 * Pages légales : le texte vient de src/content/legal/<page>.<langue>.md, lu à la construction du site.
 * Seuls sont reconnus : « # », « ## », paragraphes, listes « - » et la mise en forme en ligne.
 */
export function LegalPage({ page, lang }: { page: LegalKey; lang: Lang }) {
  const source = readFileSync(path.join(process.cwd(), "src/content/legal", `${page}.${lang}.md`), "utf8")
    .replace("{{date}}", formattedDate(lang))
    .trim();

  return (
    <SiteShell lang={lang} page={page}>
      <article className="wrap legal">
        {source.split(/\n{2,}/).map((block, i) => {
          if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
          if (block.startsWith("# ")) return <h1 key={i} className="titre-l">{block.slice(2)}</h1>;
          if (block.startsWith("- ")) {
            return (
              <ul key={i}>
                {block.split("\n").map((line) => (
                  <li key={line}>{inline(line.slice(2))}</li>
                ))}
              </ul>
            );
          }
          return <p key={i}>{inline(block)}</p>;
        })}
      </article>
    </SiteShell>
  );
}
