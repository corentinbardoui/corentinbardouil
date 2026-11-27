import Image from "next/image";
import type { ReactNode } from "react";
import { Arrow } from "./Arrows";
import { BookingButton } from "./BookingButton";
import { CompanyButton } from "./CompanyDialog";
import { Corners, Gradient } from "./Decor";
import { ScrollHint } from "./Scroll";
import { SiteShell } from "./SiteShell";
import { chrome } from "@/data/chrome";
import { home } from "@/data/home";
import { PROFILES, SHOW_CONTENT, type Lang } from "@/data/site";

function DoorBody({ num, tag, arrow, title, desc }: { num: string; tag: string; arrow: "droite" | "bas" | "ext"; title: string; desc: string }) {
  return (
    <>
      <span className="porte-tete">
        <span>{num}</span>
        <span>
          {tag}
          <Arrow type={arrow} />
        </span>
      </span>
      <span className="porte-corps">
        <span className="porte-titre">{title}</span>
        <span className="porte-desc">{desc}</span>
      </span>
    </>
  );
}

/** Carte de contenu : un lien dès que son adresse est renseignée. */
function ContentCard({ url, className, children }: { url: string; className: string; children: ReactNode }) {
  return url ? (
    <a className={className} href={url}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

export function Home({ lang }: { lang: Lang }) {
  const t = home[lang];
  const { sharing, band, session } = t;

  return (
    <SiteShell lang={lang} page="home">
      <section className="hero-zone">
        <div className="hero-panneau">
          <Gradient variant="haut" />
          <div className="hero-contenu">
            <div className="hero-grille">
              <div className="nom-bloc">
                <Corners />
                <h1 className="nom">
                  corentin <br />
                  bardouil
                </h1>
              </div>
              <div className="hero-textes">
                <p className="accroche">{t.accroche}</p>
                <p className="sous-accroche">{t.sousAccroche}</p>
              </div>
            </div>
            <nav className="portes" aria-label={t.doorsLabel}>
              {SHOW_CONTENT ? (
                <a className="porte" href="#contenus">
                  <DoorBody num="01" tag={t.contentTag} arrow="bas" {...t.doors.content} />
                </a>
              ) : (
                <a className="porte" href={PROFILES.linkedin} target="_blank" rel="noopener">
                  <DoorBody num="01" tag="LinkedIn" arrow="ext" {...t.doors.content} />
                </a>
              )}
              <CompanyButton className="porte">
                <DoorBody num="02" tag={t.firstCallTag} arrow="droite" {...t.doors.company} />
              </CompanyButton>
              <a className="porte" href="#echange">
                <DoorBody num="03" tag={t.price} arrow="droite" {...t.doors.session} />
              </a>
            </nav>
          </div>
        </div>
      </section>

      <div className="espace-hero">
        <ScrollHint href="#qui" label={chrome[lang].toAbout} />
      </div>

      <section id="qui" className="section">
        <div className="wrap qui">
          <div className="portrait">
            <div aria-hidden="true" className="portrait-fond">
              <Gradient variant="haut" />
            </div>
            <div className="portrait-image">
              <Image
                src="/images/portrait-corentin.jpg"
                alt={t.portraitAlt}
                width={1000}
                height={1250}
                sizes="(max-width: 760px) 100vw, 480px"
              />
            </div>
          </div>
          <div className="qui-tete">
            <h2 className="titre-l">{t.aboutTitle}</h2>
            <p className="chapo">{t.aboutLead}</p>
          </div>
          <div className="recit">
            {t.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <div className="citation">
              <Corners />
              <p>{t.quote}</p>
            </div>
            <p>{t.today}</p>
          </div>
        </div>
      </section>

      {SHOW_CONTENT && (
        <section id="contenus" className="section contenus">
          <div className="wrap colonne">
            <div className="contenus-tete">
              <h2 className="titre-l">{sharing.title}</h2>
              <p className="chapo">{sharing.lead}</p>
            </div>
            <div className="linkedin">
              <div>
                <span>{sharing.linkedinTitle}</span>
                <span>{sharing.linkedinText}</span>
              </div>
              <a className="cta cta-nuit ext" href={PROFILES.linkedin}>
                {sharing.follow}
                <Arrow type="suivre" />
              </a>
            </div>
            <ContentCard url={sharing.featured.url} className="carte une">
              <div className="une-couverture">
                <span>{sharing.featured.kicker}</span>
                <span className="couverture-une">{sharing.featured.coverTitle}</span>
                <span className="une-bas">
                  <span className="signature">corentin bardouil</span>
                  <span className="une-lecture" aria-hidden="true">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path d="M2 1.8L14 9L2 16.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="une-texte">
                <span className="format">{sharing.featured.format}</span>
                <span className="titre-carte une-titre">{sharing.featured.title}</span>
                <span className="resume">{sharing.featured.text}</span>
                <span className="ext">
                  {sharing.featured.cta}
                  <Arrow type="voir" />
                </span>
              </div>
            </ContentCard>
            <div className="cartes">
              {sharing.cards.map((card) => (
                <ContentCard key={card.title} url={card.url} className="carte">
                  <div className="couverture">
                    <span className="couverture-titre">{card.cover}</span>
                    <span className="signature">corentin bardouil</span>
                  </div>
                  <span className="format">{card.format}</span>
                  <span className="titre-carte">{card.title}</span>
                </ContentCard>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section nuit entreprise">
        <div className="wrap bande">
          <div className="bande-texte">
            <span className="surtitre">{chrome[lang].company}</span>
            <h2 className="titre-l">{band.title}</h2>
            <p className="chapo">{band.problem}</p>
            <p className="chapo">
              {band.method} <span>{band.answer}</span>
            </p>
          </div>
          <div className="reserver bande-cta">
            <CompanyButton className="bouton-clair">
              {band.cta}
              <Arrow type="droite" />
            </CompanyButton>
            <span>{band.note}</span>
          </div>
          <ul className="cas" aria-label={band.examplesLabel}>
            {band.examples.map((e) => (
              <li key={e.title}>
                <span>{e.label}</span>
                <span>{e.title}</span>
                <span>{e.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="echange" className="section echange">
        <div className="wrap colonne">
          <div className="echange-tete">
            <h2 className="titre-l">{session.title}</h2>
            <p className="chapo">{session.lead}</p>
            <ul aria-label={session.formatLabel} className="formats">
              {session.format.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="themes">
            <div className="sujets">
              {session.topics.map((topic) => (
                <div key={topic.title}>
                  <h3>{topic.title}</h3>
                  <ul>
                    {topic.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p>
              {session.outside}{" "}
              <CompanyButton className="lien-fl">
                {session.talk}
                <Arrow type="droite" />
              </CompanyButton>
            </p>
          </div>

          <div className="panneau">
            <Gradient variant="panneau" />
            <div className="reserver-panneau">
              <h3>{session.howTitle}</h3>
              <ol className="etapes">
                {session.steps.map((step, i) => (
                  <li key={step.title}>
                    <span className="numero">{i + 1}</span>
                    <span>
                      <span>{step.title}</span>
                      <span>{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="reserver">
                <BookingButton className="cta cta-nuit">
                  {session.book}
                  <Arrow type="reserver" />
                </BookingButton>
                <p>{session.priceNote}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
