"use client";
// Généré depuis la page « Prendre rendez-vous » (nouveau design).
import Link from "next/link";
import { useState } from "react";
import { calLinks } from "@/data/booking";

type Format = "echange" | "regard";

export function RendezVousFr({ initialFormat = "echange" }: { initialFormat?: Format }) {
  const [format, setFormat] = useState<Format>(initialFormat);
  const calUrl = format === "regard" ? calLinks.regard : calLinks.echange;
  return (
    <div className="p-rdv">
      
<div className="bandeau">
<img src="/images/verre-rdv.jpg" alt="" aria-hidden="true" />
<div className="cal"><header className="tete"><Link className="logo" href="/">corentin bardouil</Link><Link href="/">Retour au site</Link></header></div>
<div className="cal" style={{ paddingBlock: "40px 72px", display: "flex", flexDirection: "column", gap: "16px" }}><h1>Prendre rendez-vous</h1><p className="chapo">Choisissez le format, puis votre créneau.</p></div>
</div>
<main className="cal">
<section className="bloc" style={{ gap: "24px" }}>
<h2>1. Choisissez le format</h2>
<div className="formats">
<button className="format" type="button" aria-pressed={format === "echange"} onClick={() => setFormat("echange")}>
<span className="haut"><span className="nom"><span className="coche"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2 5 8.6 9.6 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Premier échange</span><span className="chip"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M6 3.2V6L7.8 7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>30 minutes, gratuit</span></span>
<span className="corps"><span className="titre">Vous avez un projet de mission</span><span className="texte">Pour présenter votre besoin, sans engagement. Vous recevez ensuite un devis sur mesure sous 48 heures.</span></span>
</button>
<button className="format" type="button" aria-pressed={format === "regard"} onClick={() => setFormat("regard")}>
<span className="haut"><span className="nom"><span className="coche"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2 5 8.6 9.6 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Regard extérieur</span><span className="chip"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M6 3.2V6L7.8 7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>1 heure, 199 €</span></span>
<span className="corps"><span className="titre">Vous avez besoin d’un avis, pas d’une mission</span><span className="texte">Une heure en visio sur une décision ou un projet précis, et un compte rendu d’une page sous 24 heures. Réservé aux professionnels.</span></span>
</button>
</div>
<p className="note">Vous hésitez ? Commencez par le premier échange. Si une heure de regard extérieur suffit, je vous le dirai.</p>
</section>
<section className="bloc" style={{ gap: "24px" }}>
<h2>2. Choisissez votre créneau</h2>
<div className="creneau">
{calUrl ? (
          <div className="agenda agenda-live"><iframe src={calUrl} title={format === "regard" ? 'Agenda : regard extérieur, 1 heure' : 'Agenda : premier échange, 30 minutes'} loading="lazy" /></div>
        ) : (
          <div className="agenda" aria-live="polite">
            <strong>{format === "regard" ? 'Agenda : regard extérieur, 1 heure' : 'Agenda : premier échange, 30 minutes'}</strong>
            <p>La réservation en ligne arrive très bientôt. En attendant, écrivez-moi : <a href="mailto:corentin.bardouil@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>corentin.bardouil@gmail.com</a></p>
            {format === "regard" && <p>Le paiement sécurisé par Stripe se fait juste après le choix du créneau.</p>}
          </div>
        )}
<aside className="etapes">
<div className="bloc">
<h3>Après le créneau, on vous demande</h3>
<ul hidden={format !== "echange"}><li>Votre nom et votre e-mail</li><li>Votre entreprise</li><li>Votre sujet, en une phrase</li></ul>
<ul hidden={format !== "regard"}><li>Votre nom et votre e-mail</li><li>Votre entreprise</li><li>La décision ou le projet à examiner</li><li>Un lien vers vos documents, si besoin</li><li style={{ fontWeight: "500" }}>Le paiement sécurisé de 199 €</li></ul>
</div>
<div className="bloc">
<h3>Ensuite</h3>
<p>Vous recevez un e-mail de confirmation avec le lien de la visio.</p>
<p hidden={format !== "regard"}>La facture vous est envoyée par e-mail.</p>
</div>
<div className="bas">
<h3>Un empêchement ?</h3>
<p hidden={format !== "echange"}>L’e-mail de confirmation contient un lien pour changer de créneau ou annuler.</p>
<p hidden={format !== "regard"}>Report gratuit ou remboursement intégral jusqu’à 24 heures avant le rendez-vous, depuis l’e-mail de confirmation.{" "}<Link href="/conditions-de-vente" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Conditions de vente</Link></p>
</div>
</aside>
</div>
</section>
</main>
<footer>
<div className="cal" style={{ paddingTop: "32px" }}><span className="logo">corentin bardouil</span></div>
<div className="cal" style={{ paddingBlock: "16px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px 16px", fontSize: "15px" }}>
<span style={{ color: "var(--gris)" }}>Paris, Bretagne</span>
<div className="pied"><a href="https://www.linkedin.com/in/corentin-bardouil">LinkedIn</a><a href="https://github.com/corentinbardouil">GitHub</a><a href="mailto:corentin.bardouil@gmail.com">E-mail</a><Link href="/conditions-de-vente">Conditions de vente</Link></div>
</div>
</footer>

    </div>
  );
}
