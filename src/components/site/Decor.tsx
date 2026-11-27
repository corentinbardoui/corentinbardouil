/** Dégradé givre et pêche, posé en fond d'un bloc positionné. */
export function Gradient({ variant }: { variant: "haut" | "panneau" | "fenetre" }) {
  return (
    <>
      <div aria-hidden="true" className={`degrade givre-${variant}`} />
      <div aria-hidden="true" className={`degrade peche-${variant}`} />
    </>
  );
}

/** Les quatre coins du cadre de visée. */
export function Corners() {
  return (
    <>
      <span aria-hidden="true" className="coin coin-hg" />
      <span aria-hidden="true" className="coin coin-hd" />
      <span aria-hidden="true" className="coin coin-bg" />
      <span aria-hidden="true" className="coin coin-bd" />
    </>
  );
}
