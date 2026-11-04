import React from 'react';
export function Button({variant='primary',href,children,onClick}){
  const base={display:'inline-flex',alignItems:'center',gap:10,fontFamily:'var(--font-mono)',fontSize:11,letterSpacing:'.14em',textTransform:'uppercase',whiteSpace:'nowrap',textDecoration:'none',cursor:'pointer',transition:'transform .25s var(--ease-out),gap .25s var(--ease-out),opacity .25s'};
  const v=variant==='primary'?{background:'var(--rd-orange)',color:'#fff',padding:'11px 24px',borderRadius:2,border:0}:{background:'none',color:'var(--rd-orange)',padding:'6px 0',border:0};
  const Tag=href?'a':'button';
  return <Tag href={href} onClick={onClick} style={{...base,...v}}>{children}{variant==='text'&&<span aria-hidden="true">↗</span>}</Tag>;
}
