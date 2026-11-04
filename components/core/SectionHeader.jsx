import React from 'react';
export function SectionHeader({title,index}){
  return <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',marginBottom:56,borderBottom:'1px solid var(--rd-line)',paddingBottom:20}}>
    <h2 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-h1)',lineHeight:.95,color:'var(--text-primary)'}}>{title}</h2>
    {index&&<span style={{fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',color:'var(--rd-slate)'}}>{index}</span>}
  </div>;
}
