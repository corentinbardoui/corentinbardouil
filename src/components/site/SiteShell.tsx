import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { CompanyButton, CompanyDialogProvider } from "./CompanyDialog";
import { MobileMenu } from "./MobileMenu";
import { Header } from "./Scroll";
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

  // Sur l'accueil, le nom ramène en haut de page. Ailleurs, il mène à l'accueil.
  const nameHref = page === "home" ? "#top" : home;

  // « FR | EN » : la langue de la page est mise en avant, l'autre mène à la page équivalente.
  const languages = (
    <span className="langues">
      {(["fr", "en"] as const).map((code, i) => (
        <Fragment key={code}>
          {i > 0 && (
            <span className="separateur" aria-hidden="true">
              |
            </span>
          )}
          {code === lang ? (
            <span className="active" aria-current="true">
              {code.toUpperCase()}
            </span>
          ) : (
            // Changement de mise en page racine : navigation complète, donc <a>.
            <a href={otherPath} hrefLang={other} lang={other} aria-label={`${code.toUpperCase()}, ${t.otherLabel}`}>
              {code.toUpperCase()}
            </a>
          )}
        </Fragment>
      ))}
    </span>
  );

  return (
    <CompanyDialogProvider lang={lang}>
      <Header>
        <a href={nameHref} className="marque">
          corentin bardouil
        </a>
        <nav aria-label={t.nav}>
          <span className="nav-liens">
            {links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            {languages}
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
              <div className="menu-langues">{languages}</div>
              <CompanyButton className="menu-lien menu-entreprise">{t.company}</CompanyButton>
            </div>
          </MobileMenu>
        </nav>
      </Header>

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
