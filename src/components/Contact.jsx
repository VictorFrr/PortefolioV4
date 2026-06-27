import { useState } from "react";
import { TRANSLATIONS } from "../data/translations";
import { useReveal } from "../hooks/useReveal";

export default function Contact({ lang }) {
  const d = TRANSLATIONS[lang].contact;
  const [status, setStatus] = useState(null);
  const [ref, revealed] = useReveal();
  const [ref2, revealed2] = useReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const action = form.action;
    if (!action || action.includes("YOUR_FORM_ID")) { setStatus("error"); return; }
    try {
      const r = await fetch(action, { method:"POST", body:new FormData(form), headers:{ Accept:"application/json" } });
      if (r.ok) { setStatus("ok"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" style={{padding:"120px 0",position:"relative",zIndex:1}}>
      <div className="wrap contact-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80}}>
        <div ref={ref} data-reveal className={revealed ? "in" : ""}>
          <div className="eyebrow">{d.eyebrow}</div>
          <h2 style={{fontSize:"clamp(30px,4vw,46px)",marginBottom:18}}>{d.heading}</h2>
          <p style={{color:"var(--text-dim)",marginBottom:32,maxWidth:420,fontSize:15}}>{d.sub}</p>
          <a href="mailto:contact@victorponthus.dev" style={{fontFamily:"var(--font-mono)",fontSize:18,color:"var(--accent)",display:"inline-flex",alignItems:"center",gap:10,borderBottom:"1px solid var(--accent-dim)",paddingBottom:6}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
            contact@victorponthus.dev
          </a>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginTop:36,fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-dim)"}}>
            <style>{`@keyframes livedot{0%{box-shadow:0 0 0 0 rgba(74,222,128,.5)}70%{box-shadow:0 0 0 8px rgba(74,222,128,0)}100%{box-shadow:0 0 0 0 rgba(74,222,128,0)}}`}</style>
            <span style={{width:7,height:7,borderRadius:"50%",background:"var(--accent)",boxShadow:"0 0 0 0 rgba(74,222,128,.6)",animation:"livedot 2s infinite",display:"inline-block"}}/>
            {d.availability}
          </div>
        </div>
        <form ref={ref2} data-reveal className={revealed2 ? "in" : ""} onSubmit={handleSubmit} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          {[
            { id:"name",    label:d.name,    type:"text",  ph:d.name_ph },
            { id:"email",   label:d.email,   type:"email", ph:d.email_ph },
          ].map(f => (
            <div key={f.id} style={{marginBottom:22}}>
              <label htmlFor={f.id} style={{display:"block",fontFamily:"var(--font-mono)",fontSize:11.5,textTransform:"uppercase",letterSpacing:".1em",color:"var(--text-faint)",marginBottom:10}}>{f.label}</label>
              <input type={f.type} id={f.id} name={f.id} placeholder={f.ph} required
                style={{width:"100%",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"var(--radius)",padding:"14px 16px",color:"var(--text)",fontSize:14.5,outline:"none",transition:"border-color .25s var(--ease)"}}
                onFocus={e => e.target.style.borderColor="var(--accent)"}
                onBlur={e => e.target.style.borderColor="var(--line)"}
              />
            </div>
          ))}
          <div style={{marginBottom:22}}>
            <label htmlFor="message" style={{display:"block",fontFamily:"var(--font-mono)",fontSize:11.5,textTransform:"uppercase",letterSpacing:".1em",color:"var(--text-faint)",marginBottom:10}}>{d.message}</label>
            <textarea id="message" name="message" placeholder={d.msg_ph} required rows={5}
              style={{width:"100%",background:"var(--surface)",border:"1px solid var(--line)",borderRadius:"var(--radius)",padding:"14px 16px",color:"var(--text)",fontSize:14.5,resize:"vertical",outline:"none",transition:"border-color .25s var(--ease)"}}
              onFocus={e => e.target.style.borderColor="var(--accent)"}
              onBlur={e => e.target.style.borderColor="var(--line)"}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{width:"100%",justifyContent:"center"}} disabled={status==="loading"}>
            {status === "loading" ? "..." : d.send}
          </button>
          {status === "ok"    && <div style={{fontSize:13,marginTop:14,fontFamily:"var(--font-mono)",color:"var(--accent)"}}>{d.success}</div>}
          {status === "error" && <div style={{fontSize:13,marginTop:14,fontFamily:"var(--font-mono)",color:"#f87171"}}>{d.error}</div>}
        </form>
      </div>
    </section>
  );
}
