import { TRANSLATIONS } from "../data/translations";
import { useReveal } from "../hooks/useReveal";

export default function Skills({ lang }) {
  const d = TRANSLATIONS[lang].skills;
  const [ref, revealed] = useReveal();
  return (
    <section id="skills" style={{padding:"120px 0",position:"relative",zIndex:1}}>
      <div className="wrap">
        <div ref={ref} data-reveal className={revealed ? "in" : ""} style={{marginBottom:64,maxWidth:680}}>
          <div className="eyebrow">{d.eyebrow}</div>
          <h2 className="section-title">{d.title}</h2>
        </div>
        <div className="skills-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:1,background:"var(--line)",border:"1px solid var(--line)"}}>
          {d.categories.map((cat, i) => (
            <div key={i} style={{background:"var(--surface)",padding:"40px 36px"}}>
              <h3 style={{fontSize:19,marginBottom:22,display:"flex",alignItems:"center",gap:10}}>
                <span style={{width:7,height:7,background:"var(--accent)",borderRadius:"50%",flexShrink:0,display:"inline-block"}}/>
                {cat.name}
              </h3>
              <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
                {cat.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
