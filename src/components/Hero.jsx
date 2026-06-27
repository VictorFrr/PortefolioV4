import { TRANSLATIONS } from "../data/translations";

export default function Hero({ lang }) {
  const d = TRANSLATIONS[lang].hero;
  return (
    <header id="hero" style={{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden"}}>
      {/* CSS 3D grid background */}
      <div style={{position:"absolute",inset:0,perspective:"900px",pointerEvents:"none",overflow:"hidden"}}>
        <div style={{
          position:"absolute", width:"200%", height:"200%",
          left:"-50%", top:"30%",
          transform:"rotateX(65deg) translateZ(0)",
          transformOrigin:"50% 0%",
          backgroundImage:"linear-gradient(var(--line) 1px,transparent 1px),linear-gradient(90deg,var(--line) 1px,transparent 1px)",
          backgroundSize:"60px 60px",
          opacity:.6,
          maskImage:"radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%)",
          WebkitMaskImage:"radial-gradient(ellipse 80% 60% at 50% 0%,black 40%,transparent 100%)",
        }}/>
      </div>

      {/* Orbs */}
      <div style={{position:"absolute",width:600,height:600,borderRadius:"50%",top:"-10%",right:"-5%",background:"radial-gradient(circle,rgba(74,222,128,.07) 0%,transparent 70%)",filter:"blur(90px)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",width:500,height:500,borderRadius:"50%",bottom:"5%",left:"-8%",background:"radial-gradient(circle,rgba(74,222,128,.04) 0%,transparent 70%)",filter:"blur(90px)",pointerEvents:"none"}}/>
      {/* Accent line */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,var(--accent),transparent)",opacity:.25,pointerEvents:"none"}}/>

      {/* Content */}
      <div style={{position:"relative",zIndex:2}}>
        <div className="wrap">
          <div style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-dim)",letterSpacing:".08em",marginBottom:28,maxWidth:480}}>
            {d.tag}
          </div>
          <div style={{fontSize:"clamp(15px,1.6vw,18px)",color:"var(--text-dim)",marginBottom:6}}>{d.greeting}</div>
          <h1 style={{fontSize:"clamp(54px,10vw,128px)",lineHeight:.94,marginBottom:28,letterSpacing:"-0.02em"}}>{d.name}</h1>
          <p style={{fontSize:"clamp(15px,1.7vw,18px)",color:"var(--text-dim)",maxWidth:520,marginBottom:44}}>{d.sub}</p>
          <div className="hero-ctas" style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a href="#projects" className="btn btn-primary">{d.cta_projects}</a>
            <a href="#contact" className="btn btn-ghost">{d.cta_contact}</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{position:"absolute",bottom:40,left:"var(--pad)",zIndex:2,display:"flex",alignItems:"center",gap:10,fontFamily:"var(--font-mono)",fontSize:11,letterSpacing:".12em",color:"var(--text-faint)"}}>
        <div style={{width:1,height:38,background:"linear-gradient(to bottom,var(--accent),transparent)",position:"relative",overflow:"hidden"}}>
          <style>{`@keyframes scrollmove{0%{top:-100%}100%{top:100%}}`}</style>
          <div style={{position:"absolute",top:"-100%",left:0,width:"100%",height:"100%",background:"var(--accent)",animation:"scrollmove 1.8s ease-in-out infinite"}}/>
        </div>
        {d.scroll}
      </div>
    </header>
  );
}
