import { useEffect } from "react";
import { TRANSLATIONS } from "../data/translations";
import { PROJECTS } from "../data/projects";

export default function Modal({ lang, index, onClose }) {
  const d = TRANSLATIONS[lang].projects;
  const p = PROJECTS[index];
  const c = p[lang];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if(e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [onClose]);

  return (
    <div
      onClick={(e) => { if(e.target === e.currentTarget) onClose(); }}
      style={{position:"fixed",inset:0,background:"rgba(0,0,0,.75)",backdropFilter:"blur(6px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:24}}
    >
      <div style={{background:"var(--surface)",border:"1px solid var(--line)",borderRadius:6,maxWidth:760,width:"100%",maxHeight:"84vh",overflowY:"auto"}}>
        {/* Head */}
        <div style={{padding:"36px 40px 0",position:"relative"}}>
          <button onClick={onClose} style={{position:"absolute",top:28,right:28,width:34,height:34,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid var(--line)",borderRadius:"50%",color:"var(--text-dim)",transition:"all .2s var(--ease)"}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round"/></svg>
          </button>
          <div style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--accent)",letterSpacing:".1em",marginBottom:14}}>
            {p.num} / {String(PROJECTS.length).padStart(2,"0")}
          </div>
          <h3 style={{fontSize:"clamp(22px,3vw,30px)",marginBottom:18,maxWidth:"90%"}}>{c.title}</h3>
          <div style={{display:"flex",gap:12,marginBottom:8,flexWrap:"wrap"}}>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{padding:"9px 18px",fontSize:13}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:6}}>
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2Z"/>
                </svg>
                GitHub
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{padding:"9px 18px",fontSize:13}}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{marginRight:6}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
                {d.demo}
              </a>
            )}
          </div>
        </div>
        {/* Body */}
        <div style={{padding:"28px 40px 44px"}}>
          <div style={{marginBottom:30}}>
            <h4 style={{fontFamily:"var(--font-mono)",fontSize:11.5,textTransform:"uppercase",letterSpacing:".12em",color:"var(--text-faint)",marginBottom:14}}>{d.context}</h4>
            <p style={{color:"var(--text-dim)",fontSize:15}}>{c.context}</p>
          </div>
          <div style={{marginBottom:30}}>
            <h4 style={{fontFamily:"var(--font-mono)",fontSize:11.5,textTransform:"uppercase",letterSpacing:".12em",color:"var(--text-faint)",marginBottom:14}}>{d.features}</h4>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {c.features.map((f, i) => (
                <li key={i} style={{fontSize:14.5,color:"var(--text-dim)",paddingLeft:20,position:"relative"}}>
                  <span style={{position:"absolute",left:0,color:"var(--accent)",fontFamily:"var(--font-mono)"}}>›</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{fontFamily:"var(--font-mono)",fontSize:11.5,textTransform:"uppercase",letterSpacing:".12em",color:"var(--text-faint)",marginBottom:14}}>{d.tech}</h4>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {c.tech.map(tc => <span key={tc} className="tag">{tc}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
