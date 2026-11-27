// Flèches des maquettes. Au survol, « droite » glisse vers la droite, « ext » en diagonale, « bas » vers le bas.
const shapes = {
  droite: { w: 22, h: 14, box: "0 0 26 16", stroke: 2, d: ["M1 8H23", "M16 1.5L23.5 8L16 14.5"] },
  reserver: { w: 24, h: 14, box: "0 0 24 14", stroke: 2.2, d: ["M1 7H21", "M15 1.5L21.5 7L15 12.5"] },
  bas: { w: 14, h: 16, box: "0 0 14 16", stroke: 1.8, d: ["M7 1V14", "M1.5 8.5L7 14L12.5 8.5"] },
  ext: { w: 14, h: 14, box: "0 0 14 14", stroke: 1.8, d: ["M2.5 11.5L11 3", "M4 2.5H11.5V10"] },
  suivre: { w: 13, h: 13, box: "0 0 14 14", stroke: 1.8, d: ["M3 11L11 3", "M4.5 3H11V9.5"] },
  voir: { w: 12, h: 12, box: "0 0 14 14", stroke: 1.8, d: ["M3 11L11 3", "M4.5 3H11V9.5"] },
};

export function Arrow({ type }: { type: keyof typeof shapes }) {
  const s = shapes[type];
  const extra = type === "ext" ? " fl-ext" : type === "bas" ? " fl-bas" : "";
  return (
    <span className={`fl${extra}`} aria-hidden="true">
      <svg width={s.w} height={s.h} viewBox={s.box} fill="none">
        {s.d.map((d) => (
          <path key={d} d={d} stroke="currentColor" strokeWidth={s.stroke} />
        ))}
      </svg>
    </span>
  );
}
