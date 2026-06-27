import { useEffect, useRef, useState } from "react";
import { TRANSLATIONS } from "../data/translations";

const TARGETS = { projects:10, langs:6, years:3, consoles:15 };

function Counter({ end }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = Math.max(1, Math.round(end / 30));
        const iv = setInterval(() => {
          cur += step;
          if(cur >= end){ cur = end; clearInterval(iv); }
          setVal(cur);
        }, 30);
      }
    }, { threshold:.4 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}+</span>;
}

export default function Stats({ lang }) {
  const d = TRANSLATIONS[lang].stats;
  const items = [
    { key:"projects", label:d.projects },
    { key:"langs",    label:d.langs },
    { key:"years",    label:d.years },
    { key:"consoles", label:d.consoles },
  ];
  return (
    <section id="stats" style={{borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",position:"relative",zIndex:1}}>
      <div className="wrap stats-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",padding:"48px 0"}}>
        {items.map((item,i) => (
          <div key={item.key} style={{textAlign:"left",borderLeft:i===0?"none":"1px solid var(--line)",paddingLeft:i===0?0:24}}>
            <div style={{fontFamily:"var(--font-display)",fontSize:"clamp(30px,4vw,46px)",color:"var(--accent)",lineHeight:1}}>
              <Counter end={TARGETS[item.key]} />
            </div>
            <div style={{fontSize:13,color:"var(--text-dim)",marginTop:8}}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
