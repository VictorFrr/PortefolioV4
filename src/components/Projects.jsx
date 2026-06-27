import { TRANSLATIONS } from "../data/translations";
import { PROJECTS } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 19 19 5M9 5h10v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function ProjectCard({ project, lang, index, onOpen }) {
  const c = project[lang];
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onOpen(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:"var(--surface)",
        border:`1px solid ${hovered ? "var(--accent-dim)" : "var(--line)"}`,
        borderRadius:6,
        padding:"40px 36px",
        cursor:"pointer",
        transition:"border-color .3s var(--ease),transform .3s var(--ease),box-shadow .3s var(--ease)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 48px rgba(0,0,0,.3)" : "none",
        position:"relative",
        overflow:"hidden",
      }}
    >
      {/* Top accent line on hover */}
      <div style={{
        position:"absolute",top:0,left:0,right:0,height:1,
        background:"linear-gradient(90deg,transparent,var(--accent-dim),transparent)",
        opacity: hovered ? 1 : 0,
        transition:"opacity .3s var(--ease)",
      }}/>
      <div style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--accent)",letterSpacing:".12em",marginBottom:20}}>
        {project.num}
      </div>
      <div style={{fontFamily:"var(--font-display)",fontSize:"clamp(16px,1.5vw,20px)",marginBottom:12,lineHeight:1.2}}>
        {c.title}
      </div>
      <p style={{fontSize:14,color:"var(--text-dim)",lineHeight:1.6,marginBottom:28,display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>
        {c.short}
      </p>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:28}}>
        {c.tech.slice(0,3).map(tc => (
          <span key={tc} style={{fontFamily:"var(--font-mono)",fontSize:11,color:"var(--text-faint)",border:"1px solid var(--line)",padding:"4px 10px",borderRadius:2}}>
            {tc}
          </span>
        ))}
      </div>
      <div style={{display:"flex",alignItems:"center",gap: hovered ? 14 : 8,fontFamily:"var(--font-mono)",fontSize:11.5,letterSpacing:".08em",color: hovered ? "var(--accent)" : "var(--text-faint)",transition:"all .25s var(--ease)"}}>
        <span>{TRANSLATIONS[lang].projects.details}</span>
        <ArrowIcon />
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Projects({ lang, onOpenModal }) {
  const d = TRANSLATIONS[lang].projects;
  const [ref, revealed] = useReveal();
  return (
    <section id="projects" style={{padding:"120px 0",position:"relative",zIndex:1}}>
      <div className="wrap">
        <div ref={ref} data-reveal className={revealed ? "in" : ""} style={{marginBottom:64,maxWidth:680}}>
          <div className="eyebrow">{d.eyebrow}</div>
          <h2 className="section-title">{d.title}</h2>
        </div>
        <div className="projects-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} index={i} onOpen={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
}
