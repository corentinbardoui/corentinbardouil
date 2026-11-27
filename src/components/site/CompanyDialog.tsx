"use client";

import Link from "next/link";
import { createContext, useContext, useRef, useState, type FormEvent, type KeyboardEvent, type ReactNode } from "react";
import { Gradient } from "./Decor";
import { companyForm, chrome } from "@/data/chrome";
import { FORMSPREE_ID } from "@/data/forms";
import { EMAIL, pages, type Lang } from "@/data/site";

const OpenContext = createContext<(opener: HTMLElement) => void>(() => {});

/** Tout bouton qui ouvre la fenêtre « Pour votre entreprise ». */
export function CompanyButton({ className, children }: { className?: string; children: ReactNode }) {
  const open = useContext(OpenContext);
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={(e) => open(e.currentTarget)}>
      {children}
    </button>
  );
}

type Status = "idle" | "sending" | "sent" | "error";

export function CompanyDialogProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = companyForm[lang];
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  // Le clic ne ferme la fenêtre que s'il commence et finit sur le voile (pas lors d'une sélection de texte).
  const pressedOnVeil = useRef(false);
  const [status, setStatus] = useState<Status>("idle");

  const open = (from: HTMLElement) => {
    // Depuis le menu téléphone, le focus reviendra sur le bouton Menu, le menu étant refermé.
    const menu = from.closest("details");
    if (menu) menu.open = false;
    opener.current = menu?.querySelector("summary") ?? from;
    if (status === "sent") setStatus("idle");
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  // La tabulation reste dans la fenêtre.
  const trapFocus = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([tabindex="-1"]), textarea'),
    ).filter((el) => el.offsetParent !== null);
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  };

  const send = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      if (!FORMSPREE_ID) throw new Error("Identifiant Formspree manquant");
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(`Formspree ${response.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <OpenContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        className="voile-modale"
        aria-labelledby="modale-titre"
        onKeyDown={trapFocus}
        onClose={() => opener.current?.focus()}
        onMouseDown={(e) => (pressedOnVeil.current = e.target === e.currentTarget)}
        onClick={(e) => pressedOnVeil.current && e.target === e.currentTarget && close()}
      >
        <div className="modale">
          <div className="modale-tete">
            <Gradient variant="fenetre" />
            <div className="modale-titres">
              <span>{chrome[lang].company}</span>
              <h2 id="modale-titre">{t.title}</h2>
            </div>
            <button type="button" className="modale-fermer" aria-label={t.close} onClick={close}>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3L15 15" stroke="currentColor" strokeWidth="1.8" />
                <path d="M15 3L3 15" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          {status === "sent" ? (
            <div className="modale-corps merci" role="status">
              <span className="merci-coche" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.5 9.5L7.5 13.5L14.5 4.5" stroke="#0A1633" strokeWidth="1.8" />
                </svg>
              </span>
              <p className="merci-titre">{t.thanks}</p>
              <p className="merci-texte">{t.next}</p>
              {/* Le formulaire disparaît : le focus passe sur ce bouton. */}
              <button type="button" className="merci-fermer" onClick={close} ref={(el) => el?.focus()}>
                {t.close}
              </button>
            </div>
          ) : (
            <form className="modale-corps" onSubmit={send}>
              <p className="modale-intro">{t.intro}</p>
              <div className="champs">
                <label>
                  {t.name}
                  <input name="nom" type="text" required autoComplete="name" />
                </label>
                <label>
                  {t.company}
                  <input name="entreprise" type="text" required autoComplete="organization" />
                </label>
                <label>
                  {t.email}
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  <span>
                    {t.phone}
                    <span className="facultatif">{t.optional}</span>
                  </span>
                  <input name="telephone" type="tel" autoComplete="tel" />
                </label>
              </div>
              <label>
                <span>
                  {t.topic}
                  <span className="facultatif">{t.optional}</span>
                </span>
                <textarea name="sujet" rows={2} />
              </label>
              {/* Champ caché anti-spam de Formspree : un robot le remplit, une personne ne le voit pas. */}
              <input className="piege" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <input type="hidden" name="_subject" value={t.subject} />
              <input type="hidden" name="langue" value={lang} />
              {status === "error" && (
                <p className="modale-erreur" role="alert">
                  {t.error} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </p>
              )}
              <button type="submit" className="cta cta-nuit envoyer" aria-disabled={status === "sending"}>
                {t.submit}
              </button>
              <p className="modale-mention">
                {t.privacyNote} <Link href={pages.privacy[lang].path}>{chrome[lang].privacy}</Link>
              </p>
            </form>
          )}
        </div>
      </dialog>
    </OpenContext.Provider>
  );
}
