import { useEffect, useState } from "react";
import { TRANSLATIONS } from "../data/translations";

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="4.2"/>
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" strokeLinecap="round"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>
  </svg>
);

export default function Nav({ lang, theme, onToggleTheme, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false);
  const d = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position:"fixed", top:0, left:0, right:0, zIndex:500,
    display:"flex", alignItems:"center", justifyContent:"space-between",
    padding: scrolled ? "14px var(--pad)" : "22px var(--pad)",
    background: scrolled ? "color-mix(in srgb,var(--bg) 86%,transparent)" : "transparent",
    backdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    transition:"all .35s var(--ease)",
  };

  return (
    <nav style={navStyle}>
      <div style={{fontFamily:"var(--font-mono)",fontSize:15,letterSpacing:".02em"}}>
        VP<span style={{color:"var(--accent)"}}>.</span>
      </div>
      <div className="nav-links" style={{display:"flex",alignItems:"center",gap:36}}>
        {[
          ["#skills", d.skills],
          ["#projects", d.projects],
          ["#about", d.about],
          ["#contact", d.contact],
        ].map(([href, label]) => (
          <a key={href} href={href} style={{fontSize:14,color:"var(--text-dim)",position:"relative",padding:"4px 0",transition:"color .25s var(--ease)"}}>
            {label}
          </a>
        ))}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:14}}>
        <button onClick={onToggleLang} style={{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--line)",borderRadius:"50%",color:"var(--text-dim)",fontFamily:"var(--font-mono)",fontSize:12,letterSpacing:".04em",transition:"all .25s var(--ease)"}}>
          {lang.toUpperCase()}
        </button>
        <button onClick={onToggleTheme} style={{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--line)",borderRadius:"50%",color:"var(--text-dim)",transition:"all .25s var(--ease)"}}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
