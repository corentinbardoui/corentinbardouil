"use client";
// Généré depuis la page « Prendre rendez-vous » (nouveau design).
import Cal from "@calcom/embed-react";
import Link from "next/link";
import { useState } from "react";
import { calLinks } from "@/data/booking";

type Format = "echange" | "regard";

export function RendezVousEn({ initialFormat = "echange" }: { initialFormat?: Format }) {
  const [format, setFormat] = useState<Format>(initialFormat);
  const calLink = format === "regard" ? calLinks.regard : calLinks.echange;
  return (
    <div className="p-rdv">
      
<div className="bandeau">
<img src="/images/verre-rdv.jpg" alt="" aria-hidden="true" />
<div className="cal"><header className="tete"><Link className="logo" href="/en">corentin bardouil</Link><Link href="/en">Back to the site</Link></header></div>
<div className="cal" style={{ paddingBlock: "40px 72px", display: "flex", flexDirection: "column", gap: "16px" }}><h1>Book a call</h1><p className="chapo">Choose a format, then pick a time.</p></div>
</div>
<main className="cal">
<section className="bloc" style={{ gap: "24px" }}>
<h2>1. Choose a format</h2>
<div className="formats">
<button className="format" type="button" aria-pressed={format === "echange"} onClick={() => setFormat("echange")}>
<span className="haut"><span className="nom"><span className="coche"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2 5 8.6 9.6 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Intro call</span><span className="chip"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M6 3.2V6L7.8 7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>30 minutes, free</span></span>
<span className="corps"><span className="titre">You have a project in mind</span><span className="texte">To walk through your needs, with no commitment. You then receive a tailored quote within 48 hours.</span></span>
</button>
<button className="format" type="button" aria-pressed={format === "regard"} onClick={() => setFormat("regard")}>
<span className="haut"><span className="nom"><span className="coche"><svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2.5 6.2 5 8.6 9.6 3.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Second opinion</span><span className="chip"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M6 3.2V6L7.8 7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>1 hour, €199</span></span>
<span className="corps"><span className="titre">You need advice, not an engagement</span><span className="texte">One hour on video about a specific decision or project, with a one-page summary within 24 hours. For businesses only.</span></span>
</button>
</div>
<p className="note">Not sure? Start with the intro call. If a one-hour second opinion is enough, I will tell you.</p>
</section>
<section className="bloc" style={{ gap: "24px" }}>
<h2>2. Pick a time</h2>
<div className="creneau">
{calLink ? (
          <div className="agenda agenda-live"><Cal key={format} namespace={format} calLink={calLink} title={format === "regard" ? 'Calendar: second opinion, 1 hour' : 'Calendar: intro call, 30 minutes'} style={{ width: "100%", height: "100%", overflow: "auto" }} config={{ layout: "month_view", theme: "light" }} /></div>
        ) : (
          <div className="agenda" aria-live="polite">
            <strong>{format === "regard" ? 'Calendar: second opinion, 1 hour' : 'Calendar: intro call, 30 minutes'}</strong>
            <p>Online booking is coming very soon. In the meantime, email me: <a href="mailto:corentin.bardouil@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>corentin.bardouil@gmail.com</a></p>
            {format === "regard" && <p>Secure payment by Stripe happens right after you pick a time.</p>}
          </div>
        )}
<aside className="etapes">
<div className="bloc">
<h3>After you pick a time, we ask for</h3>
<ul hidden={format !== "echange"}><li>Your name and email</li><li>Your company</li><li>Your topic, in one sentence</li></ul>
<ul hidden={format !== "regard"}><li>Your name and email</li><li>Your company</li><li>The decision or project to review</li><li>A link to your documents, if needed</li><li style={{ fontWeight: "500" }}>Secure payment of €199</li></ul>
</div>
<div className="bloc">
<h3>What happens next</h3>
<p>You receive a confirmation email with the video link.</p>
<p hidden={format !== "regard"}>Your invoice is sent by email.</p>
</div>
<div className="bas">
<h3>Can’t make it?</h3>
<p hidden={format !== "echange"}>The confirmation email includes a link to reschedule or cancel.</p>
<p hidden={format !== "regard"}>Free rescheduling or a full refund up to 24 hours before the session, from the confirmation email.{" "}<Link href="/en/terms" style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}>Terms of sale</Link></p>
</div>
</aside>
</div>
</section>
</main>
<footer>
<div className="cal" style={{ paddingTop: "32px" }}><span className="logo">corentin bardouil</span></div>
<div className="cal" style={{ paddingBlock: "16px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px 16px", fontSize: "15px" }}>
<span style={{ color: "var(--gris)" }}>Paris and Brittany, France</span>
<div className="pied"><a href="https://www.linkedin.com/in/corentin-bardouil">LinkedIn</a><a href="https://github.com/corentinbardouil">GitHub</a><a href="mailto:corentin.bardouil@gmail.com">Email</a><Link href="/en/terms">Terms of sale</Link></div>
</div>
</footer>

    </div>
  );
}
