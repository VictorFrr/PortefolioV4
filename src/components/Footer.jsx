import { TRANSLATIONS } from "../data/translations";
export default function Footer({ lang }) {
  const d = TRANSLATIONS[lang].footer;
  return (
    <footer style={{borderTop:"1px solid var(--line)",padding:"36px 0",position:"relative",zIndex:1}}>
      <div className="wrap" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{fontSize:13,color:"var(--text-faint)"}}>{d.copy}</span>
        <a href="#hero" style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--text-dim)",transition:"color .25s var(--ease)"}}
          onMouseEnter={e => e.currentTarget.style.color="var(--accent)"}
          onMouseLeave={e => e.currentTarget.style.color="var(--text-dim)"}
        >
          {d.back_top}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </footer>
  );
}
