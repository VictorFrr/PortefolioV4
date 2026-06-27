import { TRANSLATIONS, COUNTRIES } from "../data/translations";
import { useReveal } from "../hooks/useReveal";

export default function About({ lang }) {
  const d = TRANSLATIONS[lang].about;
  const [ref, revealed] = useReveal();
  const [ref2, revealed2] = useReveal();
  return (
    <section id="about" style={{padding:"120px 0",position:"relative",zIndex:1}}>
      <div className="wrap">
        <div ref={ref} data-reveal className={revealed ? "in" : ""} style={{marginBottom:64,maxWidth:680}}>
          <div className="eyebrow">{d.eyebrow}</div>
          <h2 className="section-title">{d.title}</h2>
        </div>
        <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"start"}}>
          <div ref={ref2} data-reveal className={revealed2 ? "in" : ""}>
            <p style={{fontSize:"clamp(20px,2.4vw,28px)",fontFamily:"var(--font-display)",fontWeight:500,lineHeight:1.35,marginBottom:26}}>
              {d.lead}
            </p>
            <p style={{color:"var(--text-dim)",marginBottom:20,fontSize:15}}>{d.sub}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {COUNTRIES.map(c => (
                <span key={c.en} style={{fontSize:13,border:"1px solid var(--line)",padding:"7px 14px",borderRadius:20,color:"var(--text-dim)",display:"flex",alignItems:"center",gap:7}}>
                  {c.flag} {c[lang]}
                </span>
              ))}
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:1,background:"var(--line)",border:"1px solid var(--line)"}}>
            {[
              { title:d.cooking.title, desc:d.cooking.desc },
              { title:d.cinema.title,  desc:d.cinema.desc,  extras:[d.cinema.fav1, d.cinema.fav2] },
              { title:d.sport.title,   desc:d.sport.desc },
            ].map((card, i) => (
              <div key={i} style={{background:"var(--surface)",padding:"28px 30px"}}>
                <h3 style={{fontSize:16,marginBottom:10}}>{card.title}</h3>
                <p style={{color:"var(--text-dim)",fontSize:14}}>{card.desc}</p>
                {card.extras?.map(e => (
                  <div key={e} style={{fontFamily:"var(--font-mono)",fontSize:12,color:"var(--text-faint)",marginTop:10}}>{e}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
