import React from 'react';
export function WorkCard({image,title,tags,year,href='#'}){
  return <a href={href} style={{position:'relative',display:'block',aspectRatio:'4/3',overflow:'hidden',background:'#eee',color:'#fff',textDecoration:'none'}}>
    <img src={image} alt={title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
    <div style={{position:'absolute',right:16,top:16,width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,.3)',fontSize:12}}>+</div>
    <div style={{position:'absolute',left:0,bottom:0,padding:'10px 16px 12px',maxWidth:'70%'}}>
      <div style={{fontSize:'var(--fs-card-title)',lineHeight:1.2,fontFamily:'var(--font-body)'}}>{title}</div>
      <div style={{display:'flex',gap:16,marginTop:6,fontSize:12}}><span>{tags}</span><span style={{fontWeight:500}}>{year}</span></div>
    </div>
  </a>;
}
