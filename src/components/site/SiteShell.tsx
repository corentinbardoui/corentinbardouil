import Link from "next/link";
import type { ReactNode } from "react";
import { CompanyButton, CompanyDialogProvider } from "./CompanyDialog";
import { MobileMenu } from "./MobileMenu";
import { chrome } from "@/data/chrome";
import { EMAIL, PROFILES, SHOW_CONTENT, pages, type Lang, type PageKey } from "@/data/site";

/** En-tête, pied de page et fenêtre entreprise, communs à toutes les pages. */
export function SiteShell({ lang, page, children }: { lang: Lang; page: PageKey; children: ReactNode }) {
  const t = chrome[lang];
  const other: Lang = lang === "fr" ? "en" : "fr";
  const otherPath = pages[page][other].path;
  const home = pages.home[lang].path;
  // Depuis une sous-page, les ancres renvoient vers l'accueil.
  const anchor = (id: string) => (page === "home" ? `#${id}` : `${home}#${id}`);
  const links = [
    { href: anchor("qui"), label: t.about },
    ...(SHOW_CONTENT ? [{ href: anchor("contenus"), label: t.content }] : []),
    { href: anchor("echange"), label: t.session },
  ];

  return (
    <CompanyDialogProvider lang={lang}>
      <header className="wrap entete">
        <a href={home} className="marque">
          corentin bardouil
        </a>
        <nav aria-label={t.nav}>
          <span className="nav-liens">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            {/* Changement de mise en page racine : navigation complète, donc <a>. */}
            <a href={otherPath} hrefLang={other} lang={other} aria-label={t.otherLabel} className="langue">
              {t.otherCode}
            </a>
          </span>
          <CompanyButton className="entete-entreprise">{t.company}</CompanyButton>
          <MobileMenu>
            <summary>
              Menu
              <svg aria-hidden="true" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M0 1H16" stroke="currentColor" strokeWidth="1.8" />
                <path d="M0 9H16" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </summary>
            <div className="menu-liste">
              {links.map((l) => (
                <a key={l.href} className="menu-lien" href={l.href}>
                  {l.label}
                </a>
              ))}
              <a className="menu-lien" href={otherPath} hrefLang={other} lang={other}>
                {t.otherName}
              </a>
              <CompanyButton className="menu-lien menu-entreprise">{t.company}</CompanyButton>
            </div>
          </MobileMenu>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="nuit pied" aria-label={t.footer}>
        <div className="wrap">
          <div className="pied-cols">
            <div className="pied-contact">
              <span className="marque">corentin bardouil</span>
              <span>
                {t.contact} <a href={`mailto:${EMAIL}`}>{t.write}</a>.
              </span>
            </div>
            <div className="pied-liens">
              <div>
                <span>{t.follow}</span>
                <a href={PROFILES.linkedin}>LinkedIn</a>
                <a href={PROFILES.github}>GitHub</a>
              </div>
              <div>
                <span>{t.work}</span>
                <CompanyButton>{t.company}</CompanyButton>
                <a href={anchor("echange")}>{t.session}</a>
              </div>
            </div>
          </div>
          <div className="pied-bas">
            <span>{t.places}</span>
            <span>
              <Link href={pages.legal[lang].path}>{t.legal}</Link>
              <Link href={pages.privacy[lang].path}>{t.privacy}</Link>
              <Link href={pages.terms[lang].path}>{t.terms}</Link>
            </span>
          </div>
        </div>
      </footer>
    </CompanyDialogProvider>
  );
}
