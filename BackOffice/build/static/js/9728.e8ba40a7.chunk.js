"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9728],{31225:(t,e,a)=>{a.d(e,{Z:()=>l});var i=a(28789),r=a(14161),o=a(25606),n=a(80184);const s=i.ZP.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${r.iH[14]};
  color: ${r.O9.blue};
  line-height: 1;
  transition: color var(--transition);
  width: fit-content;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover, &:focus {
    color: ${(0,o._j)(.1,r.O9.blue)};
  }

  .icon {
    font-size: ${r.iH[12]};
    color: ${r.O9.gray};
  }
`,l=t=>{let{href:e="#",title:a}=t;return(0,n.jsxs)(s,{href:e,children:[(0,n.jsx)("i",{className:"icon icon-link"}),(0,n.jsx)("span",{children:a})]})}},6438:(t,e,a)=>{a.d(e,{Z:()=>s});var i=a(28789),r=a(14161),o=a(80184);const n=i.ZP.button`
  font-size: ${r.iH[16]};
  color: ${r.R2.text};
  transition: color var(--transition);
  line-height: 1;
  
  &:hover, &:focus {
    color: ${r.O9.blue};
  }
`,s=t=>{let{onClick:e,onFocus:a,onBlur:i}=t;return(0,o.jsx)(n,{className:"dots","aria-label":"Open menu",onClick:e,onFocus:a,onBlur:i,children:(0,o.jsx)("i",{className:"icon-dots icon"})})}},13902:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(85521),r=a(80184);const o=t=>{let{text:e,handler:a,prevDisabled:o,nextDisabled:n,...s}=t;return(0,r.jsxs)(i.i,{className:"navigator",...s,children:[(0,r.jsx)("button",{className:o?"disabled":"",onClick:a,"data-direction":"prev","aria-label":"Previous",children:(0,r.jsx)("i",{className:"icon icon-chevron-left"})}),(0,r.jsx)("span",{className:"label",children:e}),(0,r.jsx)("button",{className:n?"disabled":"",onClick:a,"data-direction":"next","aria-label":"Next",children:(0,r.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(t,e,a)=>{a.d(e,{i:()=>s});var i=a(28789),r=a(65484),o=a.n(r),n=a(14161);const s=i.ZP.div`
  display: flex;
  ${n.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${n.iH[14]};
  border-radius: 8px;
  background-color: ${o()("theme",{light:n.R2.bodyBg,dark:n._4.bodyBg})};

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
`},30133:(t,e,a)=>{a.d(e,{Z:()=>c});var i=a(28789),r=a(65484),o=a.n(r),n=a(72791);const s=(t,e)=>{const[a,i]=(0,n.useState)(void 0),[r,o]=(0,n.useState)(void 0),s=()=>{const{current:e}=t;0===e.children[0].scrollTop?e.classList.add("is-top"):e.classList.remove("is-top");e.children[0].scrollHeight===Math.ceil(e.children[0].scrollTop)+e.children[0].clientHeight||e.children[0].scrollHeight===Math.floor(e.children[0].scrollTop)+e.children[0].clientHeight?e.classList.add("is-bottom"):e.classList.remove("is-bottom")};return(0,n.useEffect)((()=>{const{current:a}=t,r=()=>{o(a.children[0].scrollHeight);const t=a.children[0].scrollHeight>a.children[0].clientHeight;i(t),null===a||void 0===a||a.classList.toggle("has-overflow",t),a.children[0].addEventListener("scroll",s),e&&e(t)};a&&("ResizeObserver"in window&&new ResizeObserver(r).observe(a),r())}),[t,e,r]),a};var l=a(80184);const d=i.ZP.div`
  height: calc(100% - ${t=>t.height}px);
  position: relative;
  flex-grow: 1;

  &.has-overflow {
    &:before, &:after {
      content: '';
      display: block;
      height: ${t=>"small"===t.size?40:80}px;
      position: absolute;
      width: 100%;;
      background: ${o()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
      left: 0;
      z-index: 300;
      transition: height var(--transition);
    }

    &:before {
      top: 0;
      transform: scaleY(-1);
    }

    &:after {
      bottom: 0;
    }

    &.is-top:before,
    &.is-bottom:after {
      height: 0;
    }
  }

  .track {
    height: 100%;
    overflow-y: auto;
  }
`,c=t=>{let{children:e,height:a,size:i}=t;const r=(0,n.useRef)(null),o=s(r);return(0,l.jsx)(d,{className:o?"is-top has-overflow":"",height:a,ref:r,size:i,children:e})}},64290:(t,e,a)=>{a.d(e,{Z:()=>b});var i=a(28789),r=a(14161),o=a(65484),n=a.n(o);const s=i.ZP.li`
  ${r.fU.col};
  padding: 20px;
  gap: 20px;
  border-radius: 8px;
  background-color: ${n()("theme",{light:r.R2.highlight,dark:r._4.highlight})};
  transform-origin: center center;
  will-change: transform;
`,l=i.ZP.div`
  display: flex;
  ${r.fU.between};
  border-bottom: ${n()("theme",{light:r.Sz.dashedLight,dark:r.Sz.dashedDark})};
  padding-bottom: 20px;
  gap: 20px;
`,d=i.ZP.div`
  ${r.fU.col};
  gap: 20px;

  .info {
    ${r.fU.col};
    gap: 10px;

    .title {
      font-weight: 500;
    }

    .timestamp {
      font-size: ${r.iH[12]};
      font-family: ${r.Rq.accent};
    }
  }
  
  ${r.AV.tablet} {
    flex-direction: row;
    ${r.fU.between};
  }
`,c=i.ZP.button`
  height: 40px;
  border-radius: 20px;
  background-color: ${n()("theme",{light:r.R2.widgetBg,dark:r._4.widgetBg})};
  color: ${n()("theme",{light:r.O9.blue,dark:"#fff"})};
  font-size: ${r.iH[14]};
  font-family: ${r.Rq.accent};
  padding: 0 25px;
  transition: background-color var(--transition), color var(--transition);

  &:hover, &:focus {
    background-color: ${r.O9.blue};
    color: #fff;
  }
`;var h=a(31225),p=a(6438),f=a(71856),m=a(34909),y=a(72426),u=a.n(y),g=a(1705),x=a(80184);const b=t=>{let{data:e}=t;const{doctor:a,title:i,date:r}=e;return(0,x.jsx)(f.M,{children:(0,x.jsxs)(s,{as:m.E.div,...g.f,children:[(0,x.jsxs)(l,{children:[(0,x.jsx)(h.Z,{title:`Dr. ${a}`}),(0,x.jsx)(p.Z,{})]}),(0,x.jsxs)(d,{children:[(0,x.jsxs)("div",{className:"info",children:[(0,x.jsx)("span",{className:"title",children:i}),(0,x.jsx)("span",{className:"timestamp",children:u()(r).format("hh:mm A")})]}),(0,x.jsx)(c,{children:"View result"})]})]})})}},20760:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(51899),r=a(80184);const o=t=>{let{children:e,style:a,sidePadding:o=!1,elRef:n,...s}=t;return(0,r.jsx)(i.uT,{ref:n,sidePadding:o,style:a,...s,children:e})}},66150:(t,e,a)=>{a.d(e,{Z:()=>o});var i=a(51899),r=a(80184);const o=t=>{let{title:e,children:a,sidePadding:o=!1,flex:n="row",elRef:s,...l}=t;return(0,r.jsxs)(i.h4,{className:l.className?l.className:"",sidePadding:o,flex:n,ref:s,style:l.style,children:[(0,r.jsx)("h2",{className:"title",children:e}),a]})}},30447:(t,e,a)=>{a.d(e,{A:()=>o});var i=a(72426),r=a.n(i);const o=[{id:"LRmwlkTmRiv",type:"blood",date:r()().subtract(2,"hour"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"EDkfK2u",type:"prenatal",date:r()().subtract(2,"hour"),doctor:"Adam Reynolds",title:"Mammography"},{id:"97SbXo",type:"blood",date:r()().subtract(3,"hour"),doctor:"Jeffery Nichols",title:"Hepatitis B surface antigen"},{id:"RYXnQSf",type:"blood",date:r()(),doctor:"Bella Levine",title:"Allergy testing"},{id:"VeOJuSBvq",type:"blood",date:r()(),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"aN6wcKSaUMgY",type:"mri",date:r()(),doctor:"Jeffery Nichols",title:"MRI"},{id:"ukMuBJSL",type:"prenatal",date:r()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"wMch17",type:"ct",date:r()().subtract(1,"day"),doctor:"Anna Richardson",title:"CT Scan"},{id:"pkMHKe",type:"ultrasound",date:r()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"5EkV9OZ",type:"xray",date:r()().subtract(1,"day"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"vYMB5V564wE",type:"ecg",date:r()().subtract(1,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"WdUbK4OW4Vn",type:"mri",date:r()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"MRI"},{id:"kLYqsk",type:"mri",date:r()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"MRI"},{id:"IftpHTw4p",type:"xray",date:r()().subtract(1,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"oCnZPQKY",type:"ultrasound",date:r()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"Y4RjFwyJn3y",type:"ct",date:r()().subtract(1,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"JojvuH7",type:"prenatal",date:r()().subtract(1,"month").subtract(2,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"Si1B9W",type:"blood",date:r()().subtract(1,"month").subtract(2,"day"),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"6zXfLNFdo",type:"blood",date:r()().subtract(1,"month").subtract(4,"day"),doctor:"Bella Levine",title:"Allergy testing"},{id:"nPE75vNSE1Ya",type:"ecg",date:r()().subtract(1,"month").subtract(4,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"hEUJrTG",type:"prenatal",date:r()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"WCHC85b2on2",type:"ct",date:r()().subtract(2,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"0zVMPZO8s",type:"blood",date:r()().subtract(2,"month").subtract(3,"day"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"g0ral9eA",type:"prenatal",date:r()().subtract(2,"month").subtract(3,"day"),doctor:"Herbert Reynolds",title:"Mammography"},{id:"SyUtrFzCKe",type:"xray",date:r()().subtract(2,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"NjQR8EIcGBR",type:"ultrasound",date:r()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"}]},54561:(t,e,a)=>{a.d(e,{Z:()=>r});var i=a(72791);const r=t=>{const[e,a]=(0,i.useState)(0);return{index:e,setIndex:a,navigate:i=>{const{direction:r}=i.currentTarget.dataset;"next"===r?e+1===t.length?a(0):a(e+1):"prev"===r&&a(e-1<0?t.length-1:e-1)}}}},84483:(t,e,a)=>{a.d(e,{Z:()=>r});var i=a(72791);const r=(t,e)=>{const[a,r]=(0,i.useState)(0);return(0,i.useEffect)((()=>{if(null!==t&&null!==e){const a=t.current?t.current.clientHeight:0,i=e&&e.current?e.current.clientHeight:0;r(a+i)}}),[t,e]),a}},17711:(t,e,a)=>{a.d(e,{Gn:()=>n,T2:()=>o,Uo:()=>s});var i=a(72426),r=a.n(i);const o=()=>{const t=r()().year(),e=[],a=r()().year(r()().year()).endOf("year").diff(r()().year(r()().year()).startOf("year"),"days")+1;for(let i=1;i<=a;i++){let a=r()().year(t).dayOfYear(i);e.push({date:a,long:a.format("dddd, MMMM DD"),short:a.format("DD/MM/YYYY")})}return e},n=()=>{const t=r()().year(),e=[];for(let a=1;a<=12;a++){let i=r()().year(t).month(a-1);e.push({month:i,formatted:i.format("MMMM, YYYY")})}return e},s=()=>{const t=r()().year(),e=[],a=r()().year(r()().year()).endOf("year").diff(r()().year(r()().year()).startOf("year"),"weeks")+1;for(let i=1;i<=a;i++){let a=r()().year(t).week(i);e.push({week:i,startShort:a.startOf("week").format("MMM, DD"),endShort:a.endOf("week").format("MMM, DD"),startLong:a.startOf("week").format("MMMM, DD"),endLong:a.endOf("week").format("MMMM, DD")})}return e}},82243:(t,e,a)=>{a.d(e,{Z:()=>H});var i=a(28789),r=a(14161),o=a(249),n=a(66150),s=a(20760),l=a(65484),d=a.n(l);const c=i.ZP.div`
  border-bottom: ${d()("theme",{light:r.Sz.dashedLight,dark:r.Sz.dashedDark})};
  padding-bottom: 20px;

  &:not(.bordered):last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`,h=i.ZP.div`
  display: flex;
  ${r.fU.between};
  margin-bottom: 12px;
  gap: 20px;

  .main {
    ${r.fU.col};
    gap: 8px;

    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 500;
    }
  }

  .payment {
    align-self: flex-end;
    font-family: ${r.Rq.accent};
    font-weight: 500;
    display: flex;
    gap: 8px;
    font-size: ${r.iH[14]};
  }
`,p=i.ZP.div`
  display: flex;
  ${r.fU.between};
`,f=i.ZP.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .date {
    font-size: ${r.iH[14]};
  }

  .icon {
    color: ${r.O9.gray};
  }
`;var m=a(31225),y=a(6438),u=a(72426),g=a.n(u),x=a(80184);const b=t=>{let{data:e,className:a}=t;const{doctor:i,title:r,payment:o,date:n}=e,s=g()(n).format("dddd, DD MMMM");return(0,x.jsxs)(c,{className:`list-item ${a||""}`,children:[(0,x.jsxs)(h,{children:[(0,x.jsxs)("div",{className:"main",children:[(0,x.jsx)(m.Z,{title:`Dr. ${i}`}),(0,x.jsx)("span",{className:"title",children:r})]}),(0,x.jsxs)("span",{className:"payment",children:[(0,x.jsx)("span",{className:"icon",children:"\u20ac"})," ",o.toFixed(2)]})]}),(0,x.jsxs)(p,{children:[(0,x.jsxs)(f,{children:[(0,x.jsx)("i",{className:"icon icon-clock"}),(0,x.jsx)("span",{className:"date",children:s})]}),(0,x.jsx)(y.Z,{})]})]})};var v=a(13902),j=a(30133),w=a(25277),Z=a(25984),M=a(17711),N=a(54561),$=a(72791),k=a(84483),R=a(94397);const D=new Date((new Date).getTime()-864e5),S=new Date((new Date).getTime()-1728e5),C=[{doctor:"John Doe",title:"USG + Consultation",payment:40.15,date:new Date},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:new Date},{doctor:"Caren Smith",title:"MRI",payment:99.3,date:new Date},{doctor:"Elizabeth Jones",title:"USG + Consultation",payment:35,date:new Date},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:new Date},{doctor:"Caren Smith",title:"Keeney Test",payment:150.95,date:new Date},{doctor:"Robert Miller",title:"Family Planning",payment:540,date:D},{doctor:"Elizabeth Jones",title:"USG + Consultation",payment:40.15,date:D},{doctor:"Elizabeth Jones",title:"X-Ray",payment:70,date:D},{doctor:"Samantha Berry",title:"Psychotherapy",payment:200,date:D},{doctor:"Samantha Berry",title:"Art therapy session",payment:80.5,date:D},{doctor:"Lucas Bell",title:"Gastroscopy",payment:50.9,date:D},{doctor:"Elizabeth Jones",title:"Consultation",payment:15,date:S},{doctor:"Kimbra Lee",title:"Vision Test",payment:20.9,date:S},{doctor:"Kimbra Lee",title:"Glaucoma Test",payment:90.95,date:S},{doctor:"Robert Miller",title:"Family Planning",payment:450.87,date:S},{doctor:"John Doe",title:"USG + Consultation",payment:40.15,date:S},{doctor:"Caren Smith",title:"Blood Test",payment:12.7,date:S}],T=i.ZP.div`
  .list {
    ${r.fU.col};
    gap: 20px 24px;
    padding: 20px 24px;

    .column {
      ${r.fU.col};
      gap: 20px;
    }
  }

  ${r.AV.tablet} {
    .list {
      ${t=>"large"===t.variant&&"\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n      "}
    }
  }
`,H=t=>{let{variant:e}=t;const a=(0,M.T2)(),i=g()().diff(g()().startOf("year"),"days"),{index:r,setIndex:l,navigate:d}=(0,N.Z)(a),c=C.filter((t=>g()(t.date).isSame(a[r].date,"day"))),h="large"===e?c:C,p=(0,R.Z)().width>=768,f=(0,$.useRef)(null),m=(0,$.useRef)(null),y=(0,k.Z)(f,m);return(0,$.useEffect)((()=>{l(i)}),[i]),(0,x.jsxs)(o.Z,{name:"PaymentsHistory",mobile:600,children:["compact"===e&&(0,x.jsx)(n.Z,{title:"Payments history",elRef:f,style:{paddingBottom:0}}),(0,x.jsxs)(s.Z,{style:{padding:0},children:[(0,x.jsx)(j.Z,{height:y,children:(0,x.jsx)(T,{className:"track",variant:e,children:0!==h.length?(0,x.jsx)("div",{className:"list",children:h.map(((t,a)=>a%3===0&&(0,x.jsx)("div",{className:"column",children:h.slice(a,a+3).map((t=>(0,x.jsx)(b,{data:t,className:p&&"large"===e},(0,Z.x0)())))},(0,Z.x0)())))}):(0,x.jsx)(w.Z,{})})}),"large"===e&&(0,x.jsx)("div",{ref:m,style:{padding:"0 2px 2px"},children:(0,x.jsx)(v.Z,{text:a[r].long,handler:t=>d(t),nextDisabled:r===i})})]})]})}},75406:(t,e,a)=>{a.d(e,{Z:()=>w});var i=a(28789),r=a(14161),o=a(249),n=a(66150),s=a(20760),l=a(13902),d=a(64290),c=a(25277),h=a(30133),p=a(17711),f=a(72426),m=a.n(f),y=a(54561),u=a(72791),g=a(84483),x=a(94397),b=a(30447),v=a(80184);const j=i.ZP.div`
  ${r.fU.col};
  gap: 20px;
`,w=()=>{const t=(0,x.Z)().width<414,e=(0,p.T2)(),a=m()().diff(m()().startOf("year"),"days"),{index:i,setIndex:r,navigate:f}=(0,y.Z)(e),w=(0,u.useRef)(null),Z=(0,u.useRef)(null),M=(0,g.Z)(w);(0,u.useEffect)((()=>{r(a)}),[a]),(0,u.useEffect)((()=>{Z.current&&Z.current.scrollTo(0,0)}),[i]);const N=b.A.filter((t=>m()(t.date).diff(m()().startOf("year"),"days")===i));return(0,v.jsxs)(o.Z,{name:"RecentTests",mobile:600,children:[(0,v.jsx)(n.Z,{title:"Recent laboratory tests",flex:"column",elRef:w,children:(0,v.jsx)(l.Z,{text:t?e[i].short:e[i].long,handler:f,nextDisabled:i===a})}),(0,v.jsx)(s.Z,{children:(0,v.jsx)(h.Z,{height:M,children:(0,v.jsx)(j,{className:"track",ref:Z,children:0!==N.length?N.map((t=>(0,v.jsx)(d.Z,{data:t},t.id))):(0,v.jsx)(c.Z,{})})})})]})}}}]);
//# sourceMappingURL=9728.e8ba40a7.chunk.js.map