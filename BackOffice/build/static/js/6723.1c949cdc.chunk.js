"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[6723],{3748:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(14161),r=i(20068),n=i(48980),s=i(80184);const l=e=>{let{title:t,placement:i="right",children:l}=e;return(0,s.jsx)(r.Z,{TransitionComponent:n.Z,TransitionProps:{timeout:350},title:t,placement:i,enterTouchDelay:0,PopperProps:{sx:{"& .MuiTooltip-tooltip":{color:"#fff",backgroundColor:a.R2.text,fontSize:a.iH[10],boxShadow:"0 1px 8px rgba(65, 77, 85, 0.4)",textTransform:"uppercase",borderRadius:8},"& .MuiTooltip-arrow:before":{backgroundColor:a.R2.text}}},arrow:!0,children:l})}},36038:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(31843),r=i(85335),n=i(80184);const s=e=>{let{color:t,legend:i}=e;return(0,n.jsxs)(a.H,{children:[(0,n.jsx)(r.Lm,{color:t})," ",i]})}},47242:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(31843),r=i(80184);const n=e=>{let{children:t,overlay:i}=e;return(0,r.jsx)(a.a,{overlay:i,children:t})}},31843:(e,t,i)=>{i.d(t,{H:()=>s,a:()=>n});var a=i(28789),r=i(14161);const n=a.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,s=a.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
`},13902:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(85521),r=i(80184);const n=e=>{let{text:t,handler:i,prevDisabled:n,nextDisabled:s,...l}=e;return(0,r.jsxs)(a.i,{className:"navigator",...l,children:[(0,r.jsx)("button",{className:n?"disabled":"",onClick:i,"data-direction":"prev","aria-label":"Previous",children:(0,r.jsx)("i",{className:"icon icon-chevron-left"})}),(0,r.jsx)("span",{className:"label",children:t}),(0,r.jsx)("button",{className:s?"disabled":"",onClick:i,"data-direction":"next","aria-label":"Next",children:(0,r.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,t,i)=>{i.d(t,{i:()=>l});var a=i(28789),r=i(65484),n=i.n(r),s=i(14161);const l=a.ZP.div`
  display: flex;
  ${s.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${s.iH[14]};
  border-radius: 8px;
  background-color: ${n()("theme",{light:s.R2.bodyBg,dark:s._4.bodyBg})};

  .label {
    user-select: none;
  }

  button {
    transition: opacity var(--transition);

    &:hover, &:focus {
      opacity: .8;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0;
    }
  }
`},22426:(e,t,i)=>{i.d(t,{Z:()=>l,m:()=>s});var a=i(28789),r=i(14161),n=i(80184);const s=a.ZP.div`
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${r.R2.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${r.fU.center}
  line-height: 1;
  position: relative;
  text-transform: uppercase;
  
  &.multiple {
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    height: auto;
    
    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      
      .color {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -3px;
    transform: translateX(-50%) rotate(-45deg);
    width: 8px;
    height: 8px;
    background-color: ${r.R2.text};
    display: ${e=>e.arrow?"block":"none"};
  }
`,l=e=>{let{active:t,payload:i,tooltip:a,arrow:r=!1,multi:l=!1,...o}=e;if(l){if(!t||!a)return null;for(const e of i)if(e.dataKey===a)return(0,n.jsx)(s,{arrow:r,children:e.value});return null}return t&&i[0]?(0,n.jsxs)(s,{arrow:r,children:[" ",i[0].value," ",o.right&&i[0].dataKey]}):null}},20760:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(51899),r=i(80184);const n=e=>{let{children:t,style:i,sidePadding:n=!1,elRef:s,...l}=e;return(0,r.jsx)(a.uT,{ref:s,sidePadding:n,style:i,...l,children:t})}},66150:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(51899),r=i(80184);const n=e=>{let{title:t,children:i,sidePadding:n=!1,flex:s="row",elRef:l,...o}=e;return(0,r.jsxs)(a.h4,{className:o.className?o.className:"",sidePadding:n,flex:s,ref:l,style:o.style,children:[(0,r.jsx)("h2",{className:"title",children:t}),i]})}},90004:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(51899),r=i(66150),n=i(80184);const s=e=>{let{title:t,handler:i,sidePadding:s,children:l,disabled:o,...d}=e;return(0,n.jsxs)(r.Z,{title:t,sidePadding:s,style:d.style,className:"nav",children:[(0,n.jsxs)(a.JL,{children:[(0,n.jsx)("button",{onClick:i,"data-direction":"prev",className:o?"disabled":"","aria-label":"Previous",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("button",{onClick:i,"data-direction":"next",className:o?"disabled":"","aria-label":"Next",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]}),l]})}},249:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(51899),r=i(34909),n=i(79591),s=i(80184);const l=e=>{let{name:t,children:i,style:l,shadow:o=!1,...d}=e;const{direction:c}=(0,n.jt)();return(0,s.jsx)(a.W2,{as:r.E.div,"data-widget":t,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:l,className:o?"shadow":"",dir:c,mobile:d.mobile,children:i})}},51899:(e,t,i)=>{i.d(t,{JL:()=>u,Pz:()=>x,W2:()=>p,h4:()=>h,iz:()=>m,uT:()=>g,wp:()=>f});var a=i(28789),r=i(65484),n=i.n(r),s=i(14161);const l=n()("theme",{light:s.R2.widgetBg,dark:s._4.widgetBg}),o=n()("theme",{light:s.R2.bodyBg,dark:s._4.bodyBg}),d=n()("theme",{light:s.R2.shadow,dark:s._4.shadow}),c=n()("theme",{light:s.R2.highlight,dark:s._4.highlight}),p=a.ZP.div`
  box-shadow: ${s.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${l};
  overflow: hidden;
  ${s.fU.col};
  min-height: 182px;
  flex-grow: 1;
  ${e=>e.mobile&&`height: ${e.mobile}px`};
  // iOS fix
  transform: translate3d(0, 0, 0);
  
  &.shadow {
    &:before, &:after {
      display: block;
    }
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    background: ${d};
    height: 100%;
    width: 24px;
    z-index: 3;
    filter: blur(1px);
    display: none;
  }

  &:before {
    left: -2px;
    transform: ${e=>"rtl"===e.dir?"scaleX(-1)":"scaleX(1)"};
  }

  &:after {
    right: -2px;
    transform: rotate(180deg) ${e=>"rtl"===e.dir?"scaleX(-1)":"scaleX(1)"};
  }
  
  ${s.AV.tablet} {
    height: 100%;
  }
`,h=a.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":s.fU.between};
  padding: ${e=>e.sidePadding?"24px 0 20px":"24px 24px 20px"};
  flex-wrap: wrap;
  gap: 20px 10px;
  position: relative;
  z-index: 10;

  .title {
    margin: ${e=>e.sidePadding?"0 24px":"0"};
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &.nav .title {
    max-width: calc(100% - 60px);
    display: block;
  }
`,x=a.ZP.div`
  ${s.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${c};
  }
`,g=a.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${s.fU.col};
  flex-grow: 1;
`,u=a.ZP.div`
  font-size: ${s.iH[14]};
  display: flex;
  align-items: center;
  color: ${s.O9.gray};
  margin-right: -9px;

  button {
    opacity: 0.5;
    transition: opacity var(--transition);
    padding: 0 9px;

    &:hover, &:focus {
      opacity: 1;
    }
    
    &.disabled {
      visibility: hidden;
      pointer-events: none;
    }
  }
`,f=a.ZP.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${o};
  flex-grow: 1;
`,m=a.ZP.div`
  height: 2px;
  background-color: ${o};
  width: 100%;
`},54561:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=e=>{const[t,i]=(0,a.useState)(0);return{index:t,setIndex:i,navigate:a=>{const{direction:r}=a.currentTarget.dataset;"next"===r?t+1===e.length?i(0):i(t+1):"prev"===r&&i(t-1<0?e.length-1:t-1)}}}},17350:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=()=>{const e=["year","month","week"],[t,i]=(0,a.useState)(e[0]);return{period:t,periods:e,setPeriod:i,setPeriodIndex:t=>i(e[t])}}},39314:(e,t,i)=>{i.d(t,{Z:()=>z});var a=i(28789),r=i(14161);const n=a.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${r.AV.tablet} {
    padding: 20px 30px 30px;
    ${r.fU.col};
  }

  ${r.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,s=a.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,l=a.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${r.AV.laptopL} {
    margin-top: 40px;
  }

  ${r.AV.desktop} {
    flex-direction: row;
    ${r.fU.between};
  }
`,o=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,d=a.ZP.div`
  ${r.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=i(85335),p=i(59242),h=i(54270),x=i(44165),g=i(73457),u=i(10586),f=i(79591),m=i(59434),v=i(74037),y=i(94397),b=i(80184);const j=(0,u.withSize)()((0,g.WidthProvider)(g.Responsive)),w=a.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$=e=>{let{layouts:t,children:i,id:a,desktop:r}=e;const{isLayoutEditable:n,fontScale:s}=(0,f.jt)(),l=(0,m.I0)(),o=(0,y.Z)().width<768;return(0,b.jsx)(b.Fragment,{children:o?(0,b.jsx)(w,{children:i}):(0,b.jsx)(j,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===s?182:182+11*s,isDraggable:n,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:r?e=>{n&&(l((0,v.fc)({id:a,layouts:e})),l((0,v.m8)()))}:void 0,children:i})})};var Z=i(34909),k=i(62773),P=i.n(k),R=i(57689),N=i(72791);const z=e=>{let{title:t,children:i,hasBadge:a,hasTitle:r=!0,qty:g}=e;const u=(0,N.useRef)(null),f=P()(),{width:v}=(0,y.Z)(),j=v>767.98,{pathname:w}=(0,R.TH)(),k=w.includes("dashboard"),z=w.replace("/",""),C=(0,m.v9)((e=>e.layout.layout))[z];return(0,N.useEffect)((()=>{u.current&&(u.current.scrollTop=0)}),[w]),(0,b.jsxs)(n,{ref:u,children:[(0,b.jsx)(h.q,{children:(0,b.jsx)("title",{children:`Smart190 | ${t}`})}),(0,b.jsxs)(d,{children:[(0,b.jsxs)(l,{as:Z.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[r&&(0,b.jsxs)(s,{children:[t," ",a&&g&&g>0&&(0,b.jsxs)(c.GS,{children:["+",g]})]}),j&&(0,b.jsxs)(o,{children:[f.isDesktop()&&(0,b.jsxs)(b.Fragment,{children:[k&&(0,b.jsx)(p.t,{children:(0,b.jsx)(x.XO,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(x.ot,{})})]}),(0,b.jsx)(p.t,{children:(0,b.jsx)(x.t7,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(x.zj,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(x.vm,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(x.jf,{})})]})]}),C?(0,b.jsx)($,{id:z,layouts:C,desktop:f.isDesktop(),children:i}):i]})]})}},16945:(e,t,i)=>{function a(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function r(e){return e<10?"0"+e:e}i.d(t,{t:()=>a,v:()=>r})},30872:(e,t,i)=>{i.d(t,{Z:()=>k});var a=i(28789),r=i(14161),n=i(249),s=i(90004),l=i(20760),o=i(47242),d=i(36038),c=i(42),p=i(21041),h=i(41048),x=i(71827),g=i(16945),u=i(3748),f=i(80184);const m=a.ZP.div`
  ${r.fU.col};
  ${r.fU.center};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${r.iH[14]};
  user-select: none;

  span {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    will-change: transform;
    transition: transform .5s ease-in-out, opacity .5s ease-in-out;
    visibility: hidden;

    &.visible {
      position: relative;
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }
  }
`,v=e=>{let{periods:t,values:i,index:a}=e;return(0,f.jsx)(u.Z,{title:`Per ${t[a]}`,placement:"top",children:(0,f.jsxs)(m,{children:[i.map(((e,t)=>{const i=t===a;return(0,f.jsx)("span",{className:i?"visible h1":"h1",children:(0,g.t)(e)},e)}))," patients"]})})};var y=i(22426),b=i(54561),j=i(94397);i(72791);const w=i.p+"static/media/rays.f2479e66e89ea397e59bebfff48be434.svg";const $=i.p+"static/media/rays_xl.dbe6c6eea700ea1a6d54a1ad1b6e1ba1.svg",Z=a.ZP.div`
  min-height: 265px;
  ${r.fU.col};
  ${r.fU.between};
  gap: 20px;
  height: 100%;

  .chart {
    position: relative;
    margin: auto 0;

    &-rays {
      .recharts-wrapper .recharts-surface {
        mask: url("${w}") no-repeat center;
      }
    }

    &-wide {
      .recharts-wrapper .recharts-surface {
        mask: url("${$}") no-repeat center;
      }
    }
  }
`,k=e=>{let{variant:t}=e;const{theme:i}=(0,a.Fg)(),g="light"===i?r.R2.widgetBg:r._4.widgetBg,u=(0,j.Z)().width<413.98;let m,w=(u?220:265)/2;const $=u?240:275,k=["year","month","week"],{index:P,navigate:R}=(0,b.Z)(k),N=[{name:"cold",color:"orange",value:{year:642,month:456,week:52}},{name:"infection",color:"yellow",value:{year:255,month:241,week:33}},{name:"other",color:"purple",value:{year:698,month:374,week:92}}],z=[{start:"#FF715B",end:"#FFA15B"},{start:"#FDCA40",end:"#FDCA40"},{start:"#6665DD",end:"#6610F2"}];switch(t){default:case"basic":m=u?80:100;break;case"rays":m=75;break;case"wide":m=25}return(0,f.jsxs)(n.Z,{name:"DiagnosesDonut",children:[(0,f.jsx)(s.Z,{title:"Diagnoses",handler:R,style:{paddingBottom:14}}),(0,f.jsx)(l.Z,{style:{paddingBottom:22},children:(0,f.jsxs)(Z,{children:[(0,f.jsxs)("div",{className:`chart chart-${t}`,children:[(0,f.jsxs)(c.u,{width:u?280:330,height:$,children:[(0,f.jsx)("defs",{children:N.map(((e,t)=>(0,f.jsxs)("linearGradient",{id:`gradient${t}`,children:[(0,f.jsx)("stop",{offset:"0%",stopColor:z[t%z.length].start}),(0,f.jsx)("stop",{offset:"100%",stopColor:z[t%z.length].end})]},`gradient${t}`)))}),(0,f.jsx)(p.b,{data:N,innerRadius:m,outerRadius:w,dataKey:`value.${k[P]}`,stroke:"basic"===t?g:null,strokeWidth:"basic"===t?4:null,children:N.map(((e,t)=>(0,f.jsx)(h.b,{fill:`url(#gradient${t})`},`cell-${t}`)))}),(0,f.jsx)(x.u,{content:(0,f.jsx)(y.Z,{})})]}),"wide"!==t&&(0,f.jsx)(v,{periods:k,values:(()=>{let e=[],t=[],i=[];return k.forEach(((a,r)=>{e.push(N.map((e=>e.value[a])).reduce(((e,t)=>e+t))),i.push(N.map((e=>e.value[a]))),t.push(i[r].map((t=>(t/(e[r]/100)).toFixed())))})),{total:e,percent:t}})().total,index:P})]}),(0,f.jsx)(o.Z,{children:N.map((e=>(0,f.jsx)(d.Z,{color:e.color,legend:e.name},e.name)))})]})})]})}},96027:(e,t,i)=>{i.d(t,{Z:()=>b});var a=i(28789),r=i(14161),n=i(249),s=i(13902),l=i(77514),o=i(19913),d=i(64621),c=i(36846),p=i(87997),h=i(5618),x=i(71827),g=i(22426),u=i(54561),f=i(17350),m=i(94397),v=i(80184);const y=a.ZP.div`
  ${r.fU.col};
  gap: 14px;
  justify-content: flex-end;
  height: 100%;

  .chart {
    height: 250px;
    flex-grow: 1;
    padding: 24px 24px 0;
  }

  .navigator {
    margin: 0 2px 2px;
  }
  
  ${r.AV.mobileL} {
    .chart {
      height: 300px;
    }
  }
`,b=()=>{const{periods:e}=(0,f.Z)(),{index:t,navigate:i}=(0,u.Z)(e),{theme:b}=(0,a.Fg)(),{width:j}=(0,m.Z)();return(0,v.jsx)(n.Z,{name:"RadarAreaChart",children:(0,v.jsxs)(y,{children:[(0,v.jsx)("div",{className:"chart",children:(0,v.jsx)(o.h,{height:"100%",width:"100%",children:(0,v.jsxs)(d.H,{data:[{type:"diagnostics",value:[40,54,65]},{type:"checkup",value:[70,22,46]},{type:"tests",value:[18,41,60]},{type:"consultation",value:[70,25,67]},{type:"injury",value:[30,70,50]},{type:"viruses",value:[40,19,80]}],outerRadius:j<414?80:110,height:250,children:[(0,v.jsx)(c.n,{stroke:"light"===b?r.O9.light_gray:r.O9.dark}),(0,v.jsx)(p.I,{dataKey:"type",tick:e=>function(e){let{payload:t,x:i,y:a,cx:n,cy:s,...o}=e;return(0,v.jsx)(l.x,{...o,verticalAnchor:"middle",textAnchor:"middle",y:a+(a-s)/9,x:i+(i-n)/9,fill:"light"===b?r.R2.text:r._4.text,children:t.value})}(e),style:{textTransform:"uppercase",fontFamily:r.Rq.accent,fontSize:r.iH[10]},cx:"50%",cy:"50%"}),(0,v.jsx)(h.F,{dataKey:`value[${t}]`,strokeWidth:4,stroke:r.O9.azure,fill:r.O9.azure,fillOpacity:.1,activeDot:{r:4,fill:r.O9.azure,stroke:r.O9.azure}}),(0,v.jsx)(x.u,{content:(0,v.jsx)(g.Z,{}),cursor:!1})]})})}),(0,v.jsx)(s.Z,{handler:i,text:e[t],style:{textTransform:"capitalize"}})]})})}}}]);
//# sourceMappingURL=6723.1c949cdc.chunk.js.map