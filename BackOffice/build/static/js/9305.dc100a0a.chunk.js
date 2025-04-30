"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9305],{27137:(e,t,r)=>{r.d(t,{Z:()=>f});var a,n=r(28789),i=r(12332),o=r(72791);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(null,arguments)}function l(e,t){let{title:r,titleId:n,...i}=e;return o.createElement("svg",s({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?o.createElement("title",{id:n},r):null,a||(a=o.createElement("rect",{width:16,height:4,rx:2,fill:"currentColor"})))}const d=o.forwardRef(l);r.p;var c;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(null,arguments)}function u(e,t){let{title:r,titleId:a,...n}=e;return o.createElement("svg",h({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?o.createElement("title",{id:a},r):null,c||(c=o.createElement("rect",{x:.5,y:.5,width:15,height:3,rx:1.5,stroke:"currentColor"})))}const x=o.forwardRef(u);r.p;var p=r(13967),m=r(80184);const g=(0,n.ZP)(i.Z)({display:"flex !important",gap:4,marginTop:"-8px","& svg.empty":{color:"#A2C0D4"},"& svg.filled":{color:"#7ED321"}}),f=e=>{let{value:t}=e;const r=(0,p.Z)().direction;return(0,m.jsx)(g,{className:"styled-rating",initialRating:t,direction:r,emptySymbol:(0,m.jsx)(x,{className:"empty"}),fullSymbol:(0,m.jsx)(d,{className:"filled"}),readonly:!0})}},87025:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(28789),n=r(65484),i=r.n(n),o=r(14161),s=r(80184);const l=a.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${i()("theme",{light:o.Sz.dashedLight,dark:o.Sz.dashedDark})};
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`,d=a.ZP.span`
  text-transform: uppercase;
  padding: 0 6px;
  position: relative;
  z-index: 2;
  margin-left: 17px;
  font-size: ${o.iH[10]};
  font-weight: 500;
  font-family: ${o.Rq.accent};
  background-color: ${i()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg})};
})
`,c=e=>{let{text:t}=e;return(0,s.jsx)(l,{className:"separator",children:(0,s.jsx)(d,{children:t})})}},2614:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(13902),n=r(80184);const i=e=>{let{state:t,handler:r,loop:i=!0}=e;return(0,n.jsx)(a.Z,{handler:e=>{const a=e.currentTarget.dataset.direction;let n=t.number;"prev"===a?0!==n?n--:n=11:11!==n?n++:n=0,r((e=>({...e,number:n})));let i=(new Date).getMonth(),o=i-1,s=i+1,l="";const d=new Date(2022,n,1);l=n===i?"This month":n===o?"Previous month":n===s?"Next month":d.toLocaleString("en-US",{month:"long"}),r((e=>({...e,label:l})))},text:t.label,prevDisabled:!i&&0===t.number,nextDisabled:!i&&t.number===(new Date).getMonth()})}},13902:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(85521),n=r(80184);const i=e=>{let{text:t,handler:r,prevDisabled:i,nextDisabled:o,...s}=e;return(0,n.jsxs)(a.i,{className:"navigator",...s,children:[(0,n.jsx)("button",{className:i?"disabled":"",onClick:r,"data-direction":"prev","aria-label":"Previous",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("span",{className:"label",children:t}),(0,n.jsx)("button",{className:o?"disabled":"",onClick:r,"data-direction":"next","aria-label":"Next",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,t,r)=>{r.d(t,{i:()=>s});var a=r(28789),n=r(65484),i=r.n(n),o=r(14161);const s=a.ZP.div`
  display: flex;
  ${o.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${o.iH[14]};
  border-radius: 8px;
  background-color: ${i()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg})};

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
`},33926:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(14161),n=r(57482),i=r(28789),o=r(80184);const s=e=>{let{color:t=a.O9.blue,value:r,style:s={}}=e;const{theme:l}=(0,i.Fg)();return(0,o.jsx)(n.Z,{className:"progressbar",variant:"determinate","aria-label":r,value:r,sx:{backgroundColor:"light"===l?"#E4EAF0":a._4.highlight,height:6,borderRadius:2,...s,"& .MuiLinearProgress-bar":{backgroundColor:t,borderRadius:2}}})}},57408:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(28789),n=r(14161),i=r(57770),o=r(80184);const s=a.ZP.button`
  display: flex;
  ${n.fU.center};
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: ${n.iH[14]};
  gap: 10px;
  background-color: ${e=>n.O9[i.U.find((t=>t.cat===e.reminder)).color]};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,l=e=>{let{reminder:t,handler:r}=e;const{text:a,type:n}=t;return(0,o.jsxs)(s,{className:"reminder",onClick:r,reminder:n,children:[(0,o.jsx)("i",{className:"icon icon-clock"}),(0,o.jsx)("span",{children:a})]})}},62014:(e,t,r)=>{r.d(t,{W2:()=>l,ck:()=>c,zx:()=>d});var a=r(28789),n=r(65484),i=r.n(n),o=r(14161);const s=i()("theme",{light:o.R2.bodyBg,dark:o.R2.text}),l=a.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,d=a.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${o.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${i()("theme",{light:`\n        color: ${o.O9.blue};\n        background-color: ${o.R2.highlight};\n    `,dark:`\n        color: ${o.O9.secondary};\n        background-color: ${o._4.highlight};\n    `})};
  display: flex;
  ${o.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${s};
  }
`,c=a.ZP.div`
  &.active .nav-link {
    background-color: ${s};
  };
`},6378:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(62014),n=r(25984),i=r(80184);const o=e=>{let{state:t,filter:r,handler:n}=e;const o=t.value===r.value;return(0,i.jsx)(a.zx,{className:o?"active":"",onClick:()=>n({value:r.value,label:r.label}),children:r.label})},s=e=>{let{state:t,handler:r}=e;return(0,i.jsx)(a.W2,{as:"ul",className:"gender",children:[{value:"all",label:"all"},{value:"male",label:"Men"},{value:"female",label:"Women"}].map((e=>(0,i.jsx)(a.ck,{children:(0,i.jsx)(o,{state:t,filter:e,handler:r})},(0,n.x0)(3))))})}},20760:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(51899),n=r(80184);const i=e=>{let{children:t,style:r,sidePadding:i=!1,elRef:o,...s}=e;return(0,n.jsx)(a.uT,{ref:o,sidePadding:i,style:r,...s,children:t})}},57770:(e,t,r)=>{r.d(t,{U:()=>a,z:()=>n});const a=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],n=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},84628:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(72791);const n=e=>{const[t,r]=(0,a.useState)({value:"all",label:"All"});return{genderArr:t=>"all"===t.value?e:e.filter((e=>{var r;return(null===(r=e.sex)||void 0===r?void 0:r.toLowerCase())===t.value})),gender:t,setGender:r}}},79305:(e,t,r)=>{r.r(t),r.d(t,{default:()=>_e});var a=r(72791),n=r(1788),i=r(39314),o=r(51899),s=r(28789),l=r(65484),d=r.n(l),c=r(14161);const h=(0,s.ZP)(o.Pz)`
  ${c.AV.tablet} {
    flex-direction: row;
    ${c.fU.between};

    .gender {
      max-width: 300px;
    }
  }
`,u=s.ZP.ul`
  display: flex;
  margin: 0 2px;
  gap: 1px;
  height: 80px;
  align-items: center;
  border-radius: 8px;
  padding: 0 18px;
  overflow-x: auto;
  background-color: ${d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})};
`,x=s.ZP.div`
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  width: 100%;

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    background: ${d()("theme",{light:c.R2.shadow,dark:c._4.shadowDarker})};
    height: 100%;
    width: 24px;
    z-index: 1;
    filter: blur(1px);
    display: block;
  }

  &:before {
    left: 2px;
  }

  &:after {
    right: 2px;
    transform: scaleX(-1);
  }
`,p=s.ZP.a`
  display: flex;
  ${c.fU.center};
  width: 44px;
  height: 40px;
  text-transform: uppercase;
  color: ${c.O9.blue};
  border-radius: 8px;
  background: ${d()("theme",{light:c.R2.widgetBg,dark:c._4.widgetBg})};
  transition: color var(--transition), background var(--transition);

  &:hover, &:focus {
    background-color: ${c.O9.blue};
    color: #fff;
  }

  &:not(&.active) {
    pointer-events: none;
    background-color: transparent;
    color: ${d()("theme",{light:c.R2.text,dark:c._4.text})};
  }
`;var m=r(249),g=r(20760),f=r(6378),v=r(2614),j=r(87025),b=r(25984);const y=s.ZP.div`
  display: flex;
  gap: 20px;

  .main {
    ${c.fU.col}
    justify-content: space-between;

    .name {
      font-weight: 500;
    }

    .age {
      font-size: ${c.iH[14]};
    }
  }

  .wrapper {
    flex-grow: 1;
  }

  @media screen and (min-width: 666.98px) {
    flex-grow: 1;
    &.actions {
      justify-content: flex-end;
    }

    .wrapper {
      flex-grow: unset;
    }
  }
`,w=s.ZP.div`
  ${c.fU.col}
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${d()("theme",{light:c.R2.highlight,dark:c._4.highlight})};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})};
  }
  
  .overview {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main {
    width: calc(100% - 40px);

    .department {
      font-size: ${c.iH[14]};
      margin-top: 2px;
    }
  }

  .rating, .booked {
    ${c.fU.col};
    gap: 7px;
    font-size: ${c.iH[12]};
    font-family: ${c.Rq.accent};
  }
  
  .styled-rating {
    margin-top: -5px;
  }
  
  .contacts {
    display: flex;
    gap: 20px;
  }

  button {
    transition: background-color var(--transition), color var(--transition);

    &.booking {
      font-size: ${c.iH[14]};
      font-family: ${c.Rq.accent};
      border-radius: 20px;
      padding: 12px 16px;
      color: ${d()("theme",{light:c.O9.blue,dark:"#fff"})};
      
      &:hover, &:focus {
        color: #fff;
      }
    }
  }

  button:not(.reminder) {
    background-color: ${d()("theme",{light:c.R2.widgetBg,dark:c._4.widgetBg})};

    &:hover, &:focus {
      background-color: ${c.O9.blue};
      color:${c.O9.white};
    }
  }

  @media screen and (min-width: 666.98px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;

    button.reminder {
      order: 3;
      width: 100%;
    }
    
    &.doctor, &.staff {
      justify-content: space-between;
      ${y} {
        width: 100%;
      }
    }
  }
  
  ${c.AV.tablet} {
    &.doctor .avatar {
      width: 60px;
    }
  }

  ${c.AV.laptop} {
    align-items: center;
    gap: 20px;
    button.reminder {
      order: unset;
      width: fit-content;
    }

    &.doctor, &.staff {
      justify-content: space-between;
      gap: 40px;
      ${y} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${y} {
      &.actions {
        flex-grow: unset;
      }
    }
  }
  
  ${c.AV.desktop} {
    .booked {
      width: 275px;
    }
  }
`,k=s.ZP.button`
  display: flex;
  ${c.fU.center};
  gap: 8px;
  border-radius: 20px;
  font-size: ${c.iH[14]};
  height: 40px;
  width: 40px;
  color: ${c.R2.text};
  transition: color var(--transition), background-color var(--transition);

  .icon {
    color: ${c.O9.gray};
    transition: color var(--transition);
  }

  .text {
    display: none;
  }

  &:hover, &:focus {
    background-color: ${c.O9.blue};
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  ${c.AV.mobileL} {
    width: fit-content;
    padding: 0 16px;
    .text {
      display: block;
    }
  }
`,Z=s.ZP.div`
  position: relative;
  display: inline-block;
`,$=s.ZP.ul`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  list-style: none;
  padding: 8px 0;
  min-width: 160px;
  z-index: 100;
`,P=s.ZP.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  &:last-child {
    border-top: 1px solid #ddd;
    color: red;
  }
`;var C=r(51909),N=r(12202),S=r(13974),E=r(64869),A=r(83687),I=r(36862),O=r(57408),z=(r(33926),r(27137),r(71856)),_=r(34909),R=r(57689),F=r(1705),D=r(85335),U=r(80184);const B=d()("theme",{light:c.R2.bodyBg,dark:c._4.highlight}),L=s.ZP.button`
  width: 40px;
  aspect-ratio: 1;
  background-color: ${B};
  color: ${c.O9.gray};
  ${c.fU.col}
  ${c.fU.center}
  position: relative;
  transition: color var(--transition), background-color var(--transition);
  
  &:hover, &:focus {
    background-color: ${c.O9.blue};
    color: #fff;
  }
  
  .badge {
    position: absolute;
  }
  
  &.square {
    border-radius: 8px;
    .badge {
        top: -6px;
        right: -6px;
    }
  }
  
  &.round {
    border-radius: 50%;
    .badge {
        top: 0;
        right: 0;
    }
  }
`,M=e=>{let{hasNotification:t,Icon:r,handler:a,label:n,shape:i,...o}=e;return(0,U.jsxs)(L,{className:i,onClick:a,"aria-label":n,ref:o.ref,...o,children:[r&&(0,U.jsx)(r,{size:24}),"  ",t&&(0,U.jsx)(D.Ct,{className:"badge",color:"yellow"})]})};var q=r(39725),H=r(12903);const T=s.ZP.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`,V=s.ZP.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
  animation: fade-in-down 0.3s ease-out;
`,W=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  background-color: ${e=>e.bgColor||"#f8d7da"};
  border-radius: 50%;
  margin: 0 auto 1rem;

  svg {
    font-size: 1.5rem;
    color: ${e=>e.iconColor||"#e53e3e"};
  }
`,G=s.ZP.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #1a202c;
  margin-bottom: 0.5rem;
  text-align: center;
    display: flex;
  align-items: center;
  justify-content:center;
`,X=s.ZP.p`
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
`,K=s.ZP.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`,Y=s.ZP.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;

  &.confirm {
    background-color: ${e=>e.bgColor||"#e53e3e"};
    color: white;

    &:hover {
      background-color: ${e=>e.bgColorHover||"#c53030"};
    }
  }

  &.cancel {
    background-color: white;
    border: 1px solid #e2e8f0;
    color: #4a5568;

    &:hover {
      background-color: #edf2f7;
    }
  }
`,J=s.ZP.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;

  .close-icon {
    font-size: 1.5rem;
    color: #4a5568;

    &:hover {
      color: #2d3748;
    }
  }
`,Q=e=>{let{icon:t,actionType:r,onConfirm:a,onCancel:n,message:i,bgColor:o,iconColor:s}=e;const l=r.charAt(0).toUpperCase()+r.slice(1);return(0,U.jsx)(T,{children:(0,U.jsxs)(V,{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:[(0,U.jsx)(J,{onClick:n,children:(0,U.jsx)(N.aHS,{className:"close-icon"})}),(0,U.jsx)(W,{bgColor:o,iconColor:s,children:t}),(0,U.jsxs)(G,{id:"modal-headline",children:["Confirm ",l]}),(0,U.jsx)(X,{children:i||`Are you sure you want to ${r.toLowerCase()} this item? This action cannot be undone.`}),(0,U.jsxs)(K,{children:[(0,U.jsx)(Y,{onClick:n,className:"cancel",children:"Cancel"}),(0,U.jsx)(Y,{onClick:a,className:"confirm",bgColor:s,bgColorHover:o,children:l})]})]})})};var ee=r(61134),te=r(80848),re=r(60874);const ae=re.Ry({firstName:re.Z_().min(2,{message:"First Name is required (min 2 caract\xe8res)"}),lastName:re.Z_().min(2,{message:"Last Name is required (min 2 caract\xe8res)"}),sex:re.Km(["Male","Female"],{message:"Select a valid gender"}),age:re.dj((e=>Number(e)),re.Rx().min(1,{message:"Age must be at least 1"}).max(120,{message:"Invalid age"})),phone:re.Z_().min(8,{message:"Phone number must be at least 8 digits"}),address:re.Z_().min(5,{message:"Address is required"})}),ne=[{number:1,label:"User Information"},{number:2,label:"Personal Information"}],ie=e=>{var t,r,i,o,s,l;let{isOpen:d,onClose:c,data:h}=e;const[u,x]=(0,a.useState)(1);console.log(h);const{register:p,handleSubmit:m,setValue:g,getValues:f,formState:{errors:v}}=(0,ee.cI)({resolver:(0,te.F)(ae),defaultValues:{}});(0,a.useEffect)((()=>{h&&Object.keys(h).forEach((e=>{var t,r;"user"===e?(g("firstName",(null===(t=h.user)||void 0===t?void 0:t.firstName)||""),g("lastName",(null===(r=h.user)||void 0===r?void 0:r.lastName)||"")):g(e,h[e])}))}),[h,g]);return d?(0,U.jsx)(n.ZA,{children:(0,U.jsxs)(n.hz,{as:_.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,U.jsx)(n.PZ,{onClick:c,children:"\u2716"}),(0,U.jsx)(n.Dx,{children:"Update Patient"}),(0,U.jsx)(n.ko,{children:ne.map(((e,t)=>{let{number:r,label:i}=e;return(0,U.jsxs)(a.Fragment,{children:[(0,U.jsxs)(n.o3,{children:[(0,U.jsx)(n.h8,{active:u>=r,children:r}),(0,U.jsx)("span",{children:i})]}),t<ne.length-1&&(0,U.jsx)(n.x1,{})]},t)}))}),(0,U.jsxs)(n.l0,{onSubmit:m((async()=>{try{var e,t;const r={};f("firstName")!==(null===(e=h.user)||void 0===e?void 0:e.firstName)&&(r.firstName=f("firstName")),f("lastName")!==(null===(t=h.user)||void 0===t?void 0:t.lastName)&&(r.lastName=f("lastName")),Object.keys(h||{}).forEach((e=>{"user"!==e&&f(e)!==h[e]&&(r[e]=f(e))})),Object.keys(r).length>0?(await q.Z.updateSimplePatient(h._id,r),alert("\u2705 Patient mis \xe0 jour avec succ\xe8s !")):alert("Aucune modification d\xe9tect\xe9e."),c()}catch(a){var r;alert("\u274c Erreur lors de la mise \xe0 jour du patient."),console.error("D\xe9tails de l'erreur :",null===(r=a.response)||void 0===r?void 0:r.data)}})),children:[1===u&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n.vw,{children:"User Information"}),(0,U.jsxs)(n.Aq,{children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("firstName"),placeholder:"First Name"}),(0,U.jsx)(n.jj,{children:null===(t=v.firstName)||void 0===t?void 0:t.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("lastName"),placeholder:"Last Name"}),(0,U.jsx)(n.jj,{children:null===(r=v.lastName)||void 0===r?void 0:r.message})]})]})]}),2===u&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n.vw,{children:"Personal Information"}),(0,U.jsxs)(n.Aq,{children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"number",...p("age"),placeholder:"Age"}),(0,U.jsx)(n.jj,{children:null===(i=v.age)||void 0===i?void 0:i.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("phone"),placeholder:"Phone"}),(0,U.jsx)(n.jj,{children:null===(o=v.phone)||void 0===o?void 0:o.message})]})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("address"),placeholder:"Address"}),(0,U.jsx)(n.jj,{children:null===(s=v.address)||void 0===s?void 0:s.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsxs)(n.Ph,{...p("sex"),children:[(0,U.jsx)("option",{value:"",children:"Select Gender"}),(0,U.jsx)("option",{value:"Male",children:"Male"}),(0,U.jsx)("option",{value:"Female",children:"Female"})]}),(0,U.jsx)(n.jj,{children:null===(l=v.sex)||void 0===l?void 0:l.message})]})]}),(0,U.jsxs)(n.qO,{children:[u>1&&(0,U.jsx)(n.fe,{type:"button",onClick:()=>x(u-1),children:"Back"}),u<ne.length?(0,U.jsx)(n.aW,{type:"button",style:1===u?{marginLeft:"auto"}:{},onClick:()=>x(u+1),children:"Next \u2192"}):(0,U.jsx)(n.Mm,{type:"submit",children:"Submit"})]})]})]})}):null};var oe=r(44330);const se=s.ZP.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  transition: opacity 0.3s;
`,le=s.ZP.div`
  width: 200%;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transform: scale(${e=>e.isOpen?"1":"0.95"});
  transition: transform 0.3s ease-in-out;
`,de=s.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgba(65, 77, 85, 0.79);
  color: #fff;
`,ce=s.ZP.h2`
  margin: 0;
  font-size: 18px;
`,he=s.ZP.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`,ue=s.ZP.div`
  padding: 20px;
  max-height: 70vh;
  overflow-y: auto;
`,xe=s.ZP.div`
  text-align: center;
  color: #888;
  font-size: 16px;
`,pe=s.ZP.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
`,me=s.ZP.th`
  background: rgba(65, 77, 85, 0.79);
  color: #fff;
  padding: 10px;
  text-align: left;
`,ge=s.ZP.td`
  padding: 10px;
  border: 1px solid #ddd;
`,fe=s.ZP.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,ve=s.ZP.div`
  background: #f1f1f1;
  padding: 8px 12px;
  border-radius: 5px;
`,je=(0,a.memo)((e=>{let{isOpen:t,onClose:r,data:n}=e;const[i,o]=(0,a.useState)(!1),[s,l]=(0,a.useState)(null);(0,a.useEffect)((()=>{null!==n&&void 0!==n&&n._id&&(async()=>{try{const e=await q.Z.getPatientInfoById(n._id);l(e)}catch(e){console.error("Error fetching patient info:",e)}})()}),[n._id]),(0,a.useEffect)((()=>(t?(o(!0),document.body.style.overflow="hidden"):setTimeout((()=>o(!1)),300),()=>{document.body.style.overflow="unset"})),[t]);const d=(0,a.useCallback)((()=>{if(!s)return(0,U.jsxs)(xe,{children:[(0,U.jsx)(oe.ZtL,{size:30}),(0,U.jsx)("p",{children:"No data available"})]});const e=t=>Array.isArray(t)?(0,U.jsx)(fe,{children:t.map(((t,r)=>(0,U.jsx)(ve,{children:e(t)},r)))}):"object"===typeof t&&null!==t?(0,U.jsx)(pe,{children:(0,U.jsx)("tbody",{children:Object.entries(t).filter((e=>{let[t]=e;return"_id"!==t&&"patient"!==t})).map((t=>{let[r,a]=t;return(0,U.jsxs)("tr",{children:[(0,U.jsx)(me,{children:r}),(0,U.jsx)(ge,{children:e(a)})]},r)}))})}):t;return(0,U.jsx)(pe,{children:(0,U.jsx)("tbody",{children:Object.entries(s).filter((e=>{let[t]=e;return"_id"!==t})).map((t=>{let[r,a]=t;return(0,U.jsxs)("tr",{children:[(0,U.jsx)(me,{children:r}),(0,U.jsx)(ge,{children:e(a)})]},r)}))})})}),[s]);return i?(0,U.jsx)(se,{onClick:r,children:(0,U.jsxs)(le,{isOpen:t,onClick:e=>e.stopPropagation(),children:[(0,U.jsxs)(de,{children:[(0,U.jsx)(ce,{children:"Details"}),(0,U.jsx)(he,{onClick:r,children:(0,U.jsx)(S.q5L,{})})]}),(0,U.jsx)(ue,{children:d()})]})}):null}));je.displayName="DetailsModal";const be=je,ye=(0,s.ZP)(E.LAY)`
  color: rgb(129, 135, 139);
  font-size: 20px;
  &:hover {
    color: white;
  }
`,we=s.ZP.span`
  color: rgb(129, 135, 139);
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`,ke=e=>{let{isOpen:t,toggleMenu:r,onDelete:n,onOpen:i,onDetails:o,onUpdate:s,onToggleStatus:l,isActive:d}=e;const c=(0,a.useRef)(null);(0,a.useEffect)((()=>{const e=e=>{c.current&&!c.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[r]);const h=[{id:"edit",icon:(0,U.jsx)(N.fmQ,{}),label:"Edit",onClick:s},{id:"open",icon:(0,U.jsx)(S.AlO,{}),label:"Open",onClick:i},{id:"view",icon:(0,U.jsx)(N.dSq,{}),label:"View Details",onClick:o},{id:"toggle",icon:d?(0,U.jsx)(N.fRM,{}):(0,U.jsx)(N.Bj$,{}),label:d?"Deactivate":"Activate",onClick:()=>l(d)},{id:"delete",icon:(0,U.jsx)(N.Xm5,{}),label:"Delete",onClick:n}];return t&&(0,U.jsx)($,{ref:c,children:h.map((e=>{let{id:t,icon:r,label:a,onClick:n}=e;return(0,U.jsxs)(P,{onClick:n,children:[r," ",a]},t)}))})},Ze=e=>{let{type:t,data:r}=e;const[n,i]=(0,a.useState)({}),[o,s]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),[c,h]=(0,a.useState)(!1),[u,x]=(0,a.useState)(!1),[p,m]=(0,a.useState)(!1),[g,f]=(0,a.useState)(r.user.isActive),v=(0,R.s0)(),j=e=>{s(void 0!==e?e:!o)},{user:b,online:$,avatar:P,phone:S}=r,E=async()=>{d(!0)},D=async()=>{m(!0)},B=async()=>{v("/dashboard_f",{state:{data:r}})},L=async()=>{h(!0)},T=async()=>{x(!0)},V=e=>{let{type:t}=e;return(0,U.jsxs)(y,{children:[(0,U.jsx)(A.Z,{avatar:P,alt:`${b.lastName} ${b.firstName}`,online:$}),(0,U.jsxs)("div",{className:"main",children:[(0,U.jsxs)("span",{className:"name",children:[" ",b.lastName," ",b.firstName]}),"patient"===t?(0,U.jsxs)("span",{className:"age",children:[r.age," years"]}):(0,U.jsx)("span",{className:"department",children:r.department.map((e=>e.label)).join(", ")})]})]})},W=()=>"patient"===t?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(V,{type:t}),r.reminder&&(0,U.jsx)(O.Z,{reminder:r.reminder}),(0,U.jsxs)(y,{className:"actions",children:[(0,U.jsxs)(k,{className:"btn-action",onClick:()=>v("/dashboard_f",{state:{data:r}}),children:[(0,U.jsx)(ye,{}),(0,U.jsx)(we,{children:"Case history"})]}),(0,U.jsx)(I.Z,{icon:"comment-text",label:"Message",shape:"round",hasNotification:r.message}),(0,U.jsx)(I.Z,{icon:"phone",label:"Call",shape:"round",onClick:()=>{return e=r._id,void i((t=>({...t,[e]:!t[e]})));var e}}),n[r._id]&&S&&(0,U.jsx)("div",{className:"phone-number",children:S}),(0,U.jsx)(M,{Icon:C.rgS,label:"Options",shape:"round",onClick:()=>j()}),(0,U.jsx)(Z,{children:(0,U.jsx)(ke,{isOpen:o,toggleMenu:j,onDelete:E,onUpdate:L,onOpen:B,onDetails:D,onToggleStatus:T,isActive:g})})]})]}):(0,U.jsx)(V,{type:t});return(0,U.jsxs)(z.M,{children:[(0,U.jsx)(w,{className:t,as:_.E.li,...F.f,children:(0,U.jsx)(W,{})},r._id),l&&(0,U.jsx)(Q,{icon:(0,U.jsx)(N.Xm5,{}),actionType:"delete",onConfirm:async()=>{try{await q.Z.deletePatient(r._id)}catch(e){console.error("Error deleting patient:",e)}d(!1)},onCancel:()=>{d(!1)},message:"Are you sure you want to delete this item?",bgColor:" #FEE2E2",iconColor:" #e53e3e"}),u&&(0,U.jsx)(Q,{icon:g?(0,U.jsx)(N.fRM,{}):(0,U.jsx)(N.Bj$,{}),actionType:""+(g?"deactivate":"activate"),onConfirm:async()=>{try{var e;const t=await H.Z.put(`http://localhost:5000/patient/toggle-status/${r.user._id}`,{},{withCredentials:!0});void 0!==(null===(e=t.data)||void 0===e?void 0:e.isActive)&&f(t.data.isActive)}catch(t){console.error("Error toggling patient status:",t)}x(!1)},onCancel:()=>{x(!1)},message:`Are you sure you want to ${g?"deactivate":"activate"} this patient?`,bgColor:g?"#FEE2E2":"#E6FFFA",iconColor:g?"#e53e3e":"#38B2AC"}),c&&(0,U.jsx)(ie,{isOpen:c,onClose:()=>{h(!1)},data:r}),p&&(0,U.jsx)(be,{isOpen:p,onClose:()=>{m(!1)},data:r})]})},$e=s.ZP.ul`
  ${c.fU.col};
  gap: 20px;
  margin: 20px;
`,Pe=e=>{let{arr:t,type:r,gender:a,deps:n}=e;const{search:i,category:o}=n||{search:"",category:""};return(0,U.jsx)($e,{children:t.map(((e,t)=>(0,U.jsx)(Ze,{data:{...e,phone:String(e.phone)},type:r},e.id||(0,b.x0)())))})},Ce=e=>{let{char:t,arr:r,type:a,gender:n}=e;const i=r.filter((e=>{var r;return(null===(r=e.user)||void 0===r?void 0:r.lastName[0].toLowerCase())===t}));return(0,U.jsx)(U.Fragment,{children:0!==i.length?(0,U.jsxs)("div",{id:t,children:[(0,U.jsx)(j.Z,{text:t}),(0,U.jsx)(Pe,{arr:i,type:a,gender:n})]}):null})};var Ne=r(25277),Se=r(44238),Ee=r(84628);const Ae=()=>{const e=(0,a.useRef)(null),[t,r]=(0,a.useState)([]),[n,i]=(0,a.useState)(null),[s,l]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const e=await q.Z.getAllPatients();r(e),console.log("widgets"),console.log(e)}catch(e){console.error("Failed to fetch patients",e)}})()}),[]);const[d,c]=(0,a.useState)({label:"This month",number:(new Date).getMonth()}),j=t,{gender:y,setGender:w,genderArr:k}=(0,Ee.Z)(j),Z=k(y),$=n?Z.filter((e=>{var t,r,a;return(null===(t=e.user)||void 0===t||null===(r=t.lastName)||void 0===r||null===(a=r[0])||void 0===a?void 0:a.toLowerCase())===n})):Z,P=(0,Se.J)(),C=(e,t)=>t.some((t=>{var r;return(null===(r=t.user)||void 0===r?void 0:r.lastName[0].toLowerCase())===e}));return(0,a.useEffect)((()=>{var t;null===(t=e.current)||void 0===t||t.scrollTo({top:0,behavior:"smooth"})}),[d,y]),(0,U.jsxs)(m.Z,{name:"PatientsList",children:[(0,U.jsxs)(o.h4,{sidePadding:!0,children:[(0,U.jsxs)(h,{children:[(0,U.jsx)(f.Z,{state:y,handler:w}),(0,U.jsx)(v.Z,{state:d,handler:c})]}),(0,U.jsx)(x,{children:(0,U.jsx)(u,{children:P.map((e=>(0,U.jsx)("li",{children:(0,U.jsx)(p,{className:`${C(e,Z)?"active":""} ${n===e?"selected":""}`,href:`#${e}`,onClick:()=>(e=>{i((t=>t===e?null:e))})(e),children:e})},(0,b.x0)(3))))})})]}),(0,U.jsx)(g.Z,{style:{padding:0},elRef:e,children:0!==j.length?(0,U.jsx)(U.Fragment,{children:n?(0,U.jsx)(Ce,{gender:y.value,char:n,type:"patient",arr:$},`patients-${n}`):P.map((e=>(0,U.jsx)(Ce,{gender:y.value,char:e,type:"patient",arr:Z.filter((t=>{var r,a,n;return(null===(r=t.user)||void 0===r||null===(a=r.lastName)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.toLowerCase())===e}))},`patients-${e}`)))}):(0,U.jsx)(Ne.Z,{})})]})},Ie=re.Ry({firstName:re.Z_().min(2,{message:"First Name is required (min 2 caract\xe8res)"}),lastName:re.Z_().min(2,{message:"Last Name is required (min 2 caract\xe8res)"}),email:re.Z_().email({message:"Invalid email format"}),sex:re.Km(["Male","Female"],{message:"Select a valid gender"}),age:re.dj((e=>Number(e)),re.Rx().min(1,{message:"Age must be at least 1"}).max(120,{message:"Invalid age"})),phone:re.Z_().min(8,{message:"Phone number must be at least 8 digits"}),address:re.Z_().min(5,{message:"Address is required"})}),Oe=[{number:1,label:"User Information"},{number:2,label:"Personal Information"}],ze=e=>{var t,r,i,o,s,l,d;let{isOpen:c,onClose:h}=e;const[u,x]=(0,a.useState)(1),{register:p,handleSubmit:m,formState:{errors:g}}=(0,ee.cI)({resolver:(0,te.F)(Ie)});return c?(0,U.jsx)(n.ZA,{children:(0,U.jsxs)(n.hz,{as:_.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,U.jsx)(n.PZ,{onClick:h,children:"\u2716"}),(0,U.jsx)(n.Dx,{children:"Add NEW Patient"}),(0,U.jsx)(n.ko,{children:Oe.map(((e,t)=>{let{number:r,label:i}=e;return(0,U.jsxs)(a.Fragment,{children:[(0,U.jsxs)(n.o3,{children:[(0,U.jsx)(n.h8,{active:u>=r,children:r}),(0,U.jsx)("span",{children:i})]}),t<Oe.length-1&&(0,U.jsx)(n.x1,{})]},t)}))}),(0,U.jsxs)(n.l0,{onSubmit:m((async e=>{try{await q.Z.createSimplePatient(e),alert("\u2705 Patient ajout\xe9 avec succ\xe8s !"),h()}catch(r){var t;alert("\u274c Erreur lors de l'ajout du patient."),console.error("D\xe9tails de l'erreur :",null===(t=r.response)||void 0===t?void 0:t.data)}})),children:[1===u&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n.vw,{children:"User Information"}),(0,U.jsxs)(n.Aq,{children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("firstName"),placeholder:"First Name"}),(0,U.jsx)(n.jj,{children:null===(t=g.firstName)||void 0===t?void 0:t.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("lastName"),placeholder:"Last Name"}),(0,U.jsx)(n.jj,{children:null===(r=g.lastName)||void 0===r?void 0:r.message})]})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("email"),placeholder:"Email"}),(0,U.jsx)(n.jj,{children:null===(i=g.email)||void 0===i?void 0:i.message})]})]}),2===u&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(n.vw,{children:"Personal Information"}),(0,U.jsx)(n.Aq,{}),(0,U.jsxs)(n.Aq,{children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"number",...p("age"),placeholder:"Age"}),(0,U.jsx)(n.jj,{children:null===(o=g.age)||void 0===o?void 0:o.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("phone"),placeholder:"Phone"}),(0,U.jsx)(n.jj,{children:null===(s=g.phone)||void 0===s?void 0:s.message})]})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(n.II,{type:"text",...p("address"),placeholder:"Address"}),(0,U.jsx)(n.jj,{children:null===(l=g.address)||void 0===l?void 0:l.message})]}),(0,U.jsxs)("div",{children:[(0,U.jsxs)(n.Ph,{...p("sex"),children:[(0,U.jsx)("option",{value:"",children:"Select Gender"}),(0,U.jsx)("option",{value:"Male",children:"Male"}),(0,U.jsx)("option",{value:"Female",children:"Female"})]}),(0,U.jsx)(n.jj,{children:null===(d=g.sex)||void 0===d?void 0:d.message})]})]}),(0,U.jsxs)(n.qO,{children:[u>1&&(0,U.jsx)(n.fe,{type:"button",onClick:()=>x((e=>Math.max(e-1,1))),children:"Back"}),u<Oe.length?(0,U.jsx)(n.aW,{type:"button",style:1===u?{marginLeft:"auto"}:{},onClick:()=>x((e=>Math.min(e+1,Oe.length))),children:"Next \u2192"}):(0,U.jsx)(n.Mm,{type:"submit",children:"Submit"})]})]})]})}):null},_e=()=>{const[e,t]=(0,a.useState)(!1),[r,o]=(0,a.useState)(!1),s=(0,R.s0)();return(0,U.jsxs)(i.Z,{title:"Patients List",children:[(0,U.jsx)(n.nz,{}),(0,U.jsx)(n.W2,{children:(0,U.jsx)(n.HS,{onClick:()=>t(!0),children:"+ Add new Patient"})}),e&&(0,U.jsx)(n.ZA,{children:(0,U.jsxs)(n.hz,{children:[(0,U.jsx)(n.PZ,{onClick:()=>t(!1),children:"\u2716"}),(0,U.jsx)("h2",{children:"Choose Patient Type"}),(0,U.jsxs)(n.hE,{children:[(0,U.jsx)(n.mH,{variant:"simple",onClick:()=>{t(!1),o(!0)},children:"Simple Patient"}),(0,U.jsx)(n.mH,{variant:"medical",onClick:()=>{t(!1),s("/medical_form")},children:"Patient with Medical Record"})]})]})}),(0,U.jsx)(ze,{isOpen:r,onClose:()=>o(!1)}),(0,U.jsx)(n.LU,{isOpen:r||e,children:(0,U.jsx)(Ae,{})})]})}},39725:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(12903);const n="http://localhost:5000/patient",i={getAllPatients:async()=>{try{return(await a.Z.get(n)).data}catch(e){throw console.error("Erreur lors du chargement des patients:",e),e}},getPatientById:async e=>{try{return(await a.Z.get(`${n}/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du patient:",t),t}},getPatientInfoById:async e=>{try{return(await a.Z.get(`${n}/details/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du patient:",t),t}},createPatient:async e=>{try{return(await a.Z.post(n,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du patient:",t),t}},createSimplePatient:async e=>{try{return(await a.Z.post(`${n}/createSimplePatient`,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du patient:",t),t}},updateSimplePatient:async(e,t)=>{try{return(await a.Z.put(`${n}/updateSimplePatient/${e}`,t)).data}catch(r){throw console.error("Erreur lors de la mise \xe0 jour du patient:",r),r}},updatePatient:async(e,t)=>{try{return(await a.Z.put(`${n}/${e}`,t)).data}catch(r){throw console.error("Erreur lors de la mise \xe0 jour du patient:",r),r}},deletePatient:async e=>{try{await a.Z.delete(`${n}/${e}`)}catch(t){throw console.error("Erreur lors de la suppression du patient:",t),t}},toggleUserStatus:async e=>{try{console.log("ID envoy\xe9 \xe0 l'API:",e);return await a.Z.put(`${n}/toggle-status/${e}`,{},{withCredentials:!0})}catch(t){throw console.error("Erreur lors de la d\xe9sactivation / activation du patient:",t),t}},getAllDoctors:async()=>{try{return(await a.Z.get(`${n}/listDoctors`)).data}catch(e){throw console.error("Erreur lors du chargement des doctors:",e),e}}}}}]);
//# sourceMappingURL=9305.dc100a0a.chunk.js.map