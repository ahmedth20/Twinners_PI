"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[8597],{27137:(e,t,r)=>{r.d(t,{Z:()=>m});var a,n=r(28789),o=r(12332),i=r(72791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(null,arguments)}function s(e,t){let{title:r,titleId:n,...o}=e;return i.createElement("svg",l({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?i.createElement("title",{id:n},r):null,a||(a=i.createElement("rect",{width:16,height:4,rx:2,fill:"currentColor"})))}const d=i.forwardRef(s);r.p;var c;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(null,arguments)}function u(e,t){let{title:r,titleId:a,...n}=e;return i.createElement("svg",p({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?i.createElement("title",{id:a},r):null,c||(c=i.createElement("rect",{x:.5,y:.5,width:15,height:3,rx:1.5,stroke:"currentColor"})))}const x=i.forwardRef(u);r.p;var h=r(13967),g=r(80184);const f=(0,n.ZP)(o.Z)({display:"flex !important",gap:4,marginTop:"-8px","& svg.empty":{color:"#A2C0D4"},"& svg.filled":{color:"#7ED321"}}),m=e=>{let{value:t}=e;const r=(0,h.Z)().direction;return(0,g.jsx)(f,{className:"styled-rating",initialRating:t,direction:r,emptySymbol:(0,g.jsx)(x,{className:"empty"}),fullSymbol:(0,g.jsx)(d,{className:"filled"}),readonly:!0})}},87025:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(28789),n=r(65484),o=r.n(n),i=r(14161),l=r(80184);const s=a.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${o()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})};
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
  font-size: ${i.iH[10]};
  font-weight: 500;
  font-family: ${i.Rq.accent};
  background-color: ${o()("theme",{light:i.R2.widgetBg,dark:i._4.widgetBg})};
})
`,c=e=>{let{text:t}=e;return(0,l.jsx)(s,{className:"separator",children:(0,l.jsx)(d,{children:t})})}},2614:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(13902),n=r(80184);const o=e=>{let{state:t,handler:r,loop:o=!0}=e;return(0,n.jsx)(a.Z,{handler:e=>{const a=e.currentTarget.dataset.direction;let n=t.number;"prev"===a?0!==n?n--:n=11:11!==n?n++:n=0,r((e=>({...e,number:n})));let o=(new Date).getMonth(),i=o-1,l=o+1,s="";const d=new Date(2022,n,1);s=n===o?"This month":n===i?"Previous month":n===l?"Next month":d.toLocaleString("en-US",{month:"long"}),r((e=>({...e,label:s})))},text:t.label,prevDisabled:!o&&0===t.number,nextDisabled:!o&&t.number===(new Date).getMonth()})}},13902:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(85521),n=r(80184);const o=e=>{let{text:t,handler:r,prevDisabled:o,nextDisabled:i,...l}=e;return(0,n.jsxs)(a.i,{className:"navigator",...l,children:[(0,n.jsx)("button",{className:o?"disabled":"",onClick:r,"data-direction":"prev","aria-label":"Previous",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("span",{className:"label",children:t}),(0,n.jsx)("button",{className:i?"disabled":"",onClick:r,"data-direction":"next","aria-label":"Next",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,t,r)=>{r.d(t,{i:()=>l});var a=r(28789),n=r(65484),o=r.n(n),i=r(14161);const l=a.ZP.div`
  display: flex;
  ${i.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${i.iH[14]};
  border-radius: 8px;
  background-color: ${o()("theme",{light:i.R2.bodyBg,dark:i._4.bodyBg})};

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
`},33926:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(14161),n=r(57482),o=r(28789),i=r(80184);const l=e=>{let{color:t=a.O9.blue,value:r,style:l={}}=e;const{theme:s}=(0,o.Fg)();return(0,i.jsx)(n.Z,{className:"progressbar",variant:"determinate","aria-label":r,value:r,sx:{backgroundColor:"light"===s?"#E4EAF0":a._4.highlight,height:6,borderRadius:2,...l,"& .MuiLinearProgress-bar":{backgroundColor:t,borderRadius:2}}})}},57408:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(28789),n=r(14161),o=r(57770),i=r(80184);const l=a.ZP.button`
  display: flex;
  ${n.fU.center};
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: ${n.iH[14]};
  gap: 10px;
  background-color: ${e=>n.O9[o.U.find((t=>t.cat===e.reminder)).color]};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,s=e=>{let{reminder:t,handler:r}=e;const{text:a,type:n}=t;return(0,i.jsxs)(l,{className:"reminder",onClick:r,reminder:n,children:[(0,i.jsx)("i",{className:"icon icon-clock"}),(0,i.jsx)("span",{children:a})]})}},62014:(e,t,r)=>{r.d(t,{W2:()=>s,ck:()=>c,zx:()=>d});var a=r(28789),n=r(65484),o=r.n(n),i=r(14161);const l=o()("theme",{light:i.R2.bodyBg,dark:i.R2.text}),s=a.ZP.div`
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
  font-size: ${i.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${o()("theme",{light:`\n        color: ${i.O9.blue};\n        background-color: ${i.R2.highlight};\n    `,dark:`\n        color: ${i.O9.secondary};\n        background-color: ${i._4.highlight};\n    `})};
  display: flex;
  ${i.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${l};
  }
`,c=a.ZP.div`
  &.active .nav-link {
    background-color: ${l};
  };
`},6378:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(62014),n=r(25984),o=r(80184);const i=e=>{let{state:t,filter:r,handler:n}=e;const i=t.value===r.value;return(0,o.jsx)(a.zx,{className:i?"active":"",onClick:()=>n({value:r.value,label:r.label}),children:r.label})},l=e=>{let{state:t,handler:r}=e;return(0,o.jsx)(a.W2,{as:"ul",className:"gender",children:[{value:"all",label:"all"},{value:"male",label:"Men"},{value:"female",label:"Women"}].map((e=>(0,o.jsx)(a.ck,{children:(0,o.jsx)(i,{state:t,filter:e,handler:r})},(0,n.x0)(3))))})}},74885:(e,t,r)=>{r(12625),r(83687),r(36862),r(57408),r(33926),r(27137),r(72791),r(1705),r(80184)},12625:(e,t,r)=>{var a=r(28789),n=r(65484),o=r.n(n),i=r(14161);const l=a.ZP.div`
  display: flex;
  gap: 20px;

  .main {
    ${i.fU.col}
    justify-content: space-between;

    .name {
      font-weight: 500;
    }

    .age {
      font-size: ${i.iH[14]};
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
`;a.ZP.div`
  ${i.fU.col}
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${o()("theme",{light:i.R2.highlight,dark:i._4.highlight})};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${o()("theme",{light:i.R2.bodyBg,dark:i._4.bodyBg})};
  }
  
  .overview {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main {
    width: calc(100% - 40px);

    .department {
      font-size: ${i.iH[14]};
      margin-top: 2px;
    }
  }

  .rating, .booked {
    ${i.fU.col};
    gap: 7px;
    font-size: ${i.iH[12]};
    font-family: ${i.Rq.accent};
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
      font-size: ${i.iH[14]};
      font-family: ${i.Rq.accent};
      border-radius: 20px;
      padding: 12px 16px;
      color: ${o()("theme",{light:i.O9.blue,dark:"#fff"})};
      
      &:hover, &:focus {
        color: #fff;
      }
    }
  }

  button:not(.reminder) {
    background-color: ${o()("theme",{light:i.R2.widgetBg,dark:i._4.widgetBg})};

    &:hover, &:focus {
      background-color: ${i.O9.blue};
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
      ${l} {
        width: 100%;
      }
    }
  }
  
  ${i.AV.tablet} {
    &.doctor .avatar {
      width: 60px;
    }
  }

  ${i.AV.laptop} {
    align-items: center;
    gap: 20px;
    button.reminder {
      order: unset;
      width: fit-content;
    }

    &.doctor, &.staff {
      justify-content: space-between;
      gap: 40px;
      ${l} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${l} {
      &.actions {
        flex-grow: unset;
      }
    }
  }
  
  ${i.AV.desktop} {
    .booked {
      width: 275px;
    }
  }
`,a.ZP.button`
  display: flex;
  ${i.fU.center};
  gap: 8px;
  border-radius: 20px;
  font-size: ${i.iH[14]};
  height: 40px;
  width: 40px;
  color: ${i.R2.text};
  transition: color var(--transition), background-color var(--transition);

  .icon {
    color: ${i.O9.gray};
    transition: color var(--transition);
  }

  .text {
    display: none;
  }

  &:hover, &:focus {
    background-color: ${i.O9.blue};
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  ${i.AV.mobileL} {
    width: fit-content;
    padding: 0 16px;
    .text {
      display: block;
    }
  }
`},48611:(e,t,r)=>{var a=r(28789),n=r(14161);r(74885),r(80184);a.ZP.ul`
  ${n.fU.col};
  gap: 20px;
  margin: 20px;
`},20760:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(51899),n=r(80184);const o=e=>{let{children:t,style:r,sidePadding:o=!1,elRef:i,...l}=e;return(0,n.jsx)(a.uT,{ref:i,sidePadding:o,style:r,...l,children:t})}},57770:(e,t,r)=>{r.d(t,{U:()=>a,z:()=>n});const a=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],n=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},84628:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(72791);const n=e=>{const[t,r]=(0,a.useState)({value:"all",label:"All"});return{genderArr:t=>"all"===t.value?e:e.filter((e=>{var r;return(null===(r=e.sex)||void 0===r?void 0:r.toLowerCase())===t.value})),gender:t,setGender:r}}},48597:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var a=r(72791),n=r(34909),o=r(39314),i=r(51899),l=r(28789),s=r(65484),d=r.n(s),c=r(14161);const p=(0,l.ZP)(i.Pz).withConfig({componentId:"sc-17xil0f-0"})(["","{flex-direction:row;",";.gender{max-width:300px;}}"],c.AV.tablet,c.fU.between),u=l.ZP.ul.withConfig({componentId:"sc-17xil0f-1"})(["display:flex;margin:0 2px;gap:1px;height:80px;align-items:center;border-radius:8px;padding:0 18px;overflow-x:auto;background-color:",";"],d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})),x=l.ZP.div.withConfig({componentId:"sc-17xil0f-2"})(["overflow:hidden;border-radius:8px;position:relative;width:100%;&:before,&:after{content:'';position:absolute;top:0;background:",";height:100%;width:24px;z-index:1;filter:blur(1px);display:block;}&:before{left:2px;}&:after{right:2px;transform:scaleX(-1);}"],d()("theme",{light:c.R2.shadow,dark:c._4.shadowDarker})),h=l.ZP.a.withConfig({componentId:"sc-17xil0f-3"})(["display:flex;",";width:44px;height:40px;text-transform:uppercase;color:",";border-radius:8px;background:",";transition:color var(--transition),background var(--transition);&:hover,&:focus{background-color:",";color:#fff;}&:not(&.active){pointer-events:none;background-color:transparent;color:",";}"],c.fU.center,c.O9.blue,d()("theme",{light:c.R2.widgetBg,dark:c._4.widgetBg}),c.O9.blue,d()("theme",{light:c.R2.text,dark:c._4.text}));var g=r(249),f=r(20760),m=r(6378),b=r(2614),v=r(87025);r(48611);const w=l.ZP.div.withConfig({componentId:"sc-1hgde2a-0"})(["display:flex;gap:20px;.main{"," justify-content:space-between;.name{font-weight:500;}.age{font-size:",";}}.wrapper{flex-grow:1;}@media screen and (min-width:666.98px){flex-grow:1;&.actions{justify-content:flex-end;}.wrapper{flex-grow:unset;}}"],c.fU.col,c.iH[14]),j=l.ZP.div.withConfig({componentId:"sc-1hgde2a-1"})([""," border-radius:8px;width:100%;padding:20px;gap:20px 0;background-color:",";transition:background-color var(--transition);cursor:pointer;&:hover{background-color:",";}.overview{display:flex;flex-wrap:wrap;gap:20px;}.main{width:calc(100% - 40px);.department{font-size:",";margin-top:2px;}}.rating,.booked{",";gap:7px;font-size:",";font-family:",";}.styled-rating{margin-top:-5px;}.contacts{display:flex;gap:20px;}button{transition:background-color var(--transition),color var(--transition);&.booking{font-size:",";font-family:",";border-radius:20px;padding:12px 16px;color:",";&:hover,&:focus{color:#fff;}}}button:not(.reminder){background-color:",";&:hover,&:focus{background-color:",";color:",";}}@media screen and (min-width:666.98px){flex-direction:row;flex-wrap:wrap;justify-content:flex-end;button.reminder{order:3;width:100%;}&.doctor,&.staff{justify-content:space-between;","{width:100%;}}}","{&.doctor .avatar{width:60px;}}","{align-items:center;gap:20px;button.reminder{order:unset;width:fit-content;}&.doctor,&.staff{justify-content:space-between;gap:40px;","{width:fit-content;}.overview{gap:40px;}}","{&.actions{flex-grow:unset;}}}","{.booked{width:275px;}}"],c.fU.col,d()("theme",{light:c.R2.highlight,dark:c._4.highlight}),d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg}),c.iH[14],c.fU.col,c.iH[12],c.Rq.accent,c.iH[14],c.Rq.accent,d()("theme",{light:c.O9.blue,dark:"#fff"}),d()("theme",{light:c.R2.widgetBg,dark:c._4.widgetBg}),c.O9.blue,c.O9.white,w,c.AV.tablet,c.AV.laptop,w,w,c.AV.desktop),y=l.ZP.button.withConfig({componentId:"sc-1hgde2a-2"})(["display:flex;",";gap:8px;border-radius:20px;font-size:",";height:40px;width:40px;color:",";transition:color var(--transition),background-color var(--transition);.icon{color:",";transition:color var(--transition);}.text{display:none;}&:hover,&:focus{background-color:",";color:#fff;.icon{color:#fff;}}","{width:fit-content;padding:0 16px;.text{display:block;}}"],c.fU.center,c.iH[14],c.R2.text,c.O9.gray,c.O9.blue,c.AV.mobileL);l.ZP.div.withConfig({componentId:"sc-1hgde2a-3"})(["position:relative;display:inline-block;"]),l.ZP.ul.withConfig({componentId:"sc-1hgde2a-4"})(["position:absolute;top:40px;right:0;background:white;box-shadow:0px 4px 6px rgba(0,0,0,0.1);border-radius:8px;list-style:none;padding:8px 0;min-width:160px;z-index:100;"]),l.ZP.li.withConfig({componentId:"sc-1hgde2a-5"})(["display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;font-size:14px;color:#333;transition:background 0.2s;&:hover{background:#f5f5f5;}&:last-child{border-top:1px solid #ddd;color:red;}"]);var k=r(83687),N=r(36862),Z=r(71856),$=r(57689),P=r(12903);const C="http://localhost:5000/staff",S={getAllStaff:async()=>{try{return(await P.Z.get(C)).data}catch(e){throw console.error("Erreur lors du chargement du personnel:",e),e}},getStaffById:async e=>{try{return(await P.Z.get(`${C}/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du personnel:",t),t}},createStaff:async e=>{try{return(await P.Z.post(C,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du personnel:",t),t}},updateStaff:async(e,t)=>{try{return(await P.Z.put(`${C}/${e}`,t)).data}catch(r){throw console.error("Erreur lors de la mise \xe0 jour du staff:",r),r}},deleteStaff:async e=>{try{await P.Z.delete(`${C}/${e}`)}catch(t){throw console.error("Erreur lors de la suppression du personnel:",t),t}}},z=(l.F4`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,l.ZP.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,l.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,l.ZP.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  background: ${e=>"simple"===e.variant?"#3498db":"#2ecc71"};
  color: white;

  &:hover {
    background: ${e=>"simple"===e.variant?"#2980b9":"#27ae60"};
  }
`,l.vJ`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`),E=l.ZP.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 10px;
`,R=l.ZP.button`
  padding: 12px 24px;
  background-color: ${e=>e.gray?"#ccc":"#2563eb"};
  color: ${e=>e.gray?"#000":"white"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  &:hover {
    background-color: ${e=>e.gray?"#bbb":"#1d4ed8"};
  }
`,B=(0,l.ZP)(R)`
  && {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    &:hover {
      background-color: #0056b3;
    }
  }
`,F=l.ZP.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8000;
`,I=l.ZP.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
  text-align: center;
`,O=l.ZP.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`,D=l.ZP.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3px;
  margin-top: 7px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`,_=l.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,q=l.ZP.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${e=>e.active?"#2563eb":"#e5e7eb"};
  color: ${e=>e.active?"#fff":"#000"};
  font-weight: bold;
  font-size: 16px;
  margin: 0 0px;
`,A=l.ZP.div`
  height: 4px;
  width: 300px;
  background: #e5e7eb;
  margin: 0 0px;
`,L=l.ZP.form`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.15);
  width: 80%;
  max-height: 1650px; 
  max-width: 650px; 
  height: 180; 
  text-align: center;
  margin: 0 auto; 
`,U=(l.ZP.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`,l.ZP.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-buttom:8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`),H=l.ZP.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`,M=(l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`),V=l.ZP.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`,T=l.ZP.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`,J=l.ZP.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`,W=l.ZP.div`
  filter: ${e=>e.isOpen?"blur(3px)":"none"};
  pointer-events: ${e=>e.isOpen?"none":"auto"};
`,G=(l.ZP.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color:grey;
  margin-top: 8px;
  margin-buttom:8px;
`,l.ZP.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`,l.ZP.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  input {
    margin-right: 5px;
  }
`,l.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`),X=l.ZP.h2`
 font-size: 19px;
  text-align: center;
  margin-bottom: 10px;
   justify-content: center;
  align-items: center;
  margin-left: 30px;
`;var Y=r(80184);const K=[{number:1,label:"Personal Information"},{number:2,label:"Job Information"},{number:3,label:"Final Submission"}],Q=e=>{var t,r,i;let{staffData:l,closeForm:s}=e;const[d,c]=(0,a.useState)(1),[p,u]=(0,a.useState)({firstName:(null===l||void 0===l||null===(t=l.user)||void 0===t?void 0:t.firstName)||"",lastName:(null===l||void 0===l||null===(r=l.user)||void 0===r?void 0:r.lastName)||"",email:(null===l||void 0===l||null===(i=l.user)||void 0===i?void 0:i.email)||"",password:"",badgeNumber:(null===l||void 0===l?void 0:l.badgeNumber)||"",service:(null===l||void 0===l?void 0:l.service)||""}),x=e=>{u({...p,[e.target.name]:e.target.value})};return(0,Y.jsxs)(o.Z,{title:"Edit Staff",children:[(0,Y.jsx)(z,{}),(0,Y.jsx)(E,{children:(0,Y.jsx)(B,{onClick:()=>c(1),children:"+ Edit Staff"})}),(0,Y.jsx)(F,{children:(0,Y.jsxs)(I,{as:n.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,Y.jsx)(O,{onClick:s,children:"\u2716"}),(0,Y.jsx)(D,{children:"Edit Staff"}),(0,Y.jsx)(_,{children:K.map(((e,t)=>{let{number:r,label:n}=e;return(0,Y.jsxs)(a.Fragment,{children:[(0,Y.jsxs)(G,{children:[(0,Y.jsx)(q,{active:d>=r,children:r}),(0,Y.jsx)("span",{children:n})]}),t<K.length-1&&(0,Y.jsx)(A,{})]},t)}))}),(0,Y.jsxs)(L,{onSubmit:async e=>{if(e.preventDefault(),p.firstName&&p.lastName&&p.email)if(p.badgeNumber&&p.service)try{var t;if(null===l||void 0===l||!l._id||null===(t=l.user)||void 0===t||!t._id)return console.error("Erreur : L'ID du personnel ou de l'utilisateur est manquant ou invalide !"),void alert("Erreur : L'ID du personnel ou de l'utilisateur est manquant ou invalide !");console.log("staffData",l);const e=await S.updateStaff(l._id,{firstName:p.firstName,lastName:p.lastName,email:p.email,badgeNumber:p.badgeNumber,service:p.service,userId:l.user._id});console.log("Personnel mis \xe0 jour",e),alert("Mise \xe0 jour r\xe9ussie !"),s(),window.location.reload()}catch(o){var r,a,n;console.error("Erreur lors de la mise \xe0 jour :",(null===(r=o.response)||void 0===r?void 0:r.data)||o.message),alert("\xc9chec de la mise \xe0 jour : "+((null===(a=o.response)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||o.message))}else alert("Les informations li\xe9es au travail sont requises.");else alert("Tous les champs d'information personnelle sont requis.")},children:[1===d&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Personal Information"}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{type:"text",name:"firstName",placeholder:"First Name",value:p.firstName,onChange:x,required:!0}),(0,Y.jsx)(U,{type:"text",name:"lastName",placeholder:"Last Name",value:p.lastName,onChange:x,required:!0})]}),(0,Y.jsx)(H,{children:(0,Y.jsx)(U,{type:"email",name:"email",placeholder:"Email",value:p.email,onChange:x,required:!0})}),(0,Y.jsx)(U,{type:"password",name:"password",placeholder:"Password",value:p.password,onChange:x,required:!0})]}),2===d&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Job Information"}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{type:"text",name:"badgeNumber",placeholder:"Badge Number",value:p.badgeNumber,onChange:x,required:!0}),(0,Y.jsx)(U,{type:"text",name:"service",placeholder:"Service",value:p.service,onChange:x,required:!0})]})]}),3===d&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Final Submission"}),(0,Y.jsx)("p",{children:"Review all details before submitting."})]}),(0,Y.jsxs)(M,{children:[d>1&&(0,Y.jsx)(V,{type:"button",onClick:()=>c((e=>Math.max(e-1,1))),children:"Back"}),d<K.length?(0,Y.jsx)(T,{type:"button",onClick:()=>c((e=>Math.min(e+1,K.length))),children:"Next \u2192"}):(0,Y.jsx)(J,{type:"submit",children:"Submit"})]})]})]})})]})};var ee=r(57408);const te=e=>{let{type:t,data:r,onEdit:o,onDelete:i}=e;const[l,s]=(0,a.useState)({}),[d,c]=(0,a.useState)(!1),p=(0,$.s0)(),u=()=>{c(!0),o&&o(r)},x=async()=>{try{await S.deleteStaff(r._id),alert("Staff deleted successfully!"),window.location.reload()}catch(e){alert("Failed to delete staff.")}},{user:h,online:g,avatar:f,phone:m,role:b}=r,[v,P]=(0,a.useState)(!1),C=()=>(0,Y.jsxs)(w,{children:[(0,Y.jsx)(k.Z,{avatar:f,alt:`${null===h||void 0===h?void 0:h.lastName} ${null===h||void 0===h?void 0:h.firstName}`,online:g}),(0,Y.jsxs)("div",{className:"main",children:[(0,Y.jsxs)("span",{className:"name",children:[null===h||void 0===h?void 0:h.lastName," ",null===h||void 0===h?void 0:h.firstName]}),(0,Y.jsxs)("span",{className:"age",children:[r.service," "]}),"patient"===t&&(0,Y.jsxs)("span",{className:"age",children:[r.age," years"]}),"doctor"===t&&r.department&&(0,Y.jsx)("span",{className:"department",children:r.department.map((e=>e.label)).join(", ")}),"staff"===t&&b&&(0,Y.jsx)("span",{className:"role",children:b})]})]}),z=()=>{switch(t){case"doctor":return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{}),(0,Y.jsxs)("div",{className:"overview",children:[(0,Y.jsx)("div",{className:"rating",children:(0,Y.jsx)("span",{children:"Doctor rating"})}),(0,Y.jsx)("div",{className:"booked",children:(0,Y.jsx)("span",{children:"Booked appointments"})})]}),(0,Y.jsx)("button",{className:"booking",children:"Make an appointment"})]});case"staff":return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{}),(0,Y.jsx)(N.Z,{icon:"edit",shape:"round",label:"Edit",onClick:u})," ",(0,Y.jsx)(N.Z,{icon:"trash",shape:"round",label:"Delete",onClick:x})]});case"patient":return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(C,{}),r.reminder&&(0,Y.jsx)(ee.Z,{reminder:r.reminder}),(0,Y.jsxs)(w,{className:"actions",children:[(0,Y.jsx)("div",{className:"wrapper",children:(0,Y.jsxs)(y,{className:"btn-action",onClick:()=>p("/dashboard_f",{state:{data:r}}),children:[(0,Y.jsx)("i",{className:"icon icon-doctor"}),(0,Y.jsx)("span",{className:"text",children:"Case history"})]})}),(0,Y.jsx)(N.Z,{icon:"comment-text",label:"Message",shape:"round",hasNotification:r.message}),(0,Y.jsx)(N.Z,{icon:"phone",label:"Call",shape:"round",onClick:()=>{return e=r._id,void s((t=>({...t,[e]:!t[e]})));var e}}),l[r._id]&&m&&(0,Y.jsx)("div",{className:"phone-number",children:m})]})]});default:return(0,Y.jsx)(C,{})}};return(0,Y.jsxs)(Z.M,{children:[(0,Y.jsx)(j,{className:t,as:n.E.li,children:(0,Y.jsx)(z,{})}),d&&(0,Y.jsx)(Q,{staffData:r,closeForm:()=>{c(!1)}})]})},re=l.ZP.ul.withConfig({componentId:"sc-crw4tt-0"})(["",";gap:20px;margin:20px;"],c.fU.col),ae=e=>{let{arr:t,type:r,gender:a,deps:n}=e;const{search:o,category:i}=n||{search:"",category:""};return(0,Y.jsx)(re,{children:t.map(((e,t)=>(0,Y.jsx)(te,{data:{...e,phone:String(e.phone)},type:r},`${e.id}-${a}-${o}-${i}`)))})},ne=e=>{let{char:t,arr:r,type:a,gender:n}=e;const o=r.filter((e=>{var r;return(null===(r=e.user)||void 0===r?void 0:r.lastName[0].toLowerCase())===t}));return(0,Y.jsx)(Y.Fragment,{children:0!==o.length?(0,Y.jsxs)("div",{id:t,children:[(0,Y.jsx)(v.Z,{text:t}),(0,Y.jsx)(ae,{arr:o,type:a,gender:n})]}):null})};var oe=r(25277),ie=r(44238),le=r(25984),se=r(84628);const de=()=>{const e=(0,a.useRef)(null),[t,r]=(0,a.useState)([]),[n,o]=(0,a.useState)(null),[l,s]=(0,a.useState)(null);(0,a.useEffect)((()=>{(async()=>{try{const e=await S.getAllStaff();r(e),console.log(e)}catch(e){console.error("Erreur lors du chargement du personnel",e)}})()}),[]);const[d,c]=(0,a.useState)({label:"This month",number:(new Date).getMonth()}),v=t,{gender:w,setGender:j,genderArr:y}=(0,se.Z)(v);console.log(y(w));const k=y(w),N=n?k.filter((e=>{var t,r,a;return(null===(t=e.user)||void 0===t||null===(r=t.lastName)||void 0===r||null===(a=r[0])||void 0===a?void 0:a.toLowerCase())===n})):k,Z=(0,ie.J)(),$=(e,t)=>t.some((t=>{var r;return(null===(r=t.user)||void 0===r?void 0:r.lastName[0].toLowerCase())===e}));return(0,a.useEffect)((()=>{var t;null===(t=e.current)||void 0===t||t.scrollTo({top:0,behavior:"smooth"})}),[d,w]),(0,Y.jsxs)(g.Z,{name:"StaffList",children:[(0,Y.jsxs)(i.h4,{sidePadding:!0,children:[(0,Y.jsxs)(p,{children:[(0,Y.jsx)(m.Z,{state:w,handler:j}),(0,Y.jsx)(b.Z,{state:d,handler:c})]}),(0,Y.jsx)(x,{children:(0,Y.jsx)(u,{children:Z.map((e=>(0,Y.jsx)("li",{children:(0,Y.jsx)(h,{className:`${$(e,k)?"active":""} ${n===e?"selected":""}`,href:`#${e}`,onClick:()=>(e=>{o((t=>t===e?null:e))})(e),children:e})},(0,le.x0)(3))))})})]}),(0,Y.jsx)(f.Z,{style:{padding:0},elRef:e,children:0!==v.length?(0,Y.jsx)(Y.Fragment,{children:n?(0,Y.jsx)(ne,{gender:w.value,char:n,type:"staff",arr:N},`staff-${n}`):Z.map((e=>(0,Y.jsx)(ne,{gender:w.value,char:e,type:"staff",arr:k.filter((t=>{var r,a,n;return(null===(r=t.user)||void 0===r||null===(a=r.lastName)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.toLowerCase())===e}))},`staff-${e}`)))}):(0,Y.jsx)(oe.Z,{})})]})},ce=[{number:1,label:"Personal Information"},{number:2,label:"Job Information"},{number:3,label:"Final Submission"}],pe=()=>{const[e,t]=(0,a.useState)(1),[r,i]=(0,a.useState)(!1),[l,s]=(0,a.useState)({firstName:"",lastName:"",email:"",password:"",badgeNumber:"",service:""}),d=e=>{s({...l,[e.target.name]:e.target.value})};return(0,Y.jsxs)(o.Z,{title:"Staff List",children:[(0,Y.jsx)(z,{}),(0,Y.jsx)(E,{children:(0,Y.jsx)(B,{onClick:()=>i(!0),children:"+ Add new Staff"})}),r&&(0,Y.jsx)(F,{children:(0,Y.jsxs)(I,{as:n.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,Y.jsx)(O,{onClick:()=>i(!1),children:"\u2716"}),(0,Y.jsx)(D,{children:"Add NEW Staff"}),(0,Y.jsx)(_,{children:ce.map(((t,r)=>{let{number:n,label:o}=t;return(0,Y.jsxs)(a.Fragment,{children:[(0,Y.jsxs)(G,{children:[(0,Y.jsx)(q,{active:e>=n,children:n}),(0,Y.jsx)("span",{children:o})]}),r<ce.length-1&&(0,Y.jsx)(A,{})]},r)}))}),(0,Y.jsxs)(L,{onSubmit:async e=>{e.preventDefault(),console.log("\ud83d\udce4 Donn\xe9es envoy\xe9es :",l);try{await S.createStaff(l),alert("\u2705 Staff ajout\xe9 avec succ\xe8s !"),s({firstName:"",lastName:"",email:"",password:"",badgeNumber:"",service:""}),i(!1),window.location.reload()}catch(r){var t;console.error("\u274c Erreur lors de l'ajout du staff :",(null===(t=r.response)||void 0===t?void 0:t.data)||r)}},children:[1===e&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Personal Information"}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{type:"text",name:"firstName",placeholder:"First Name",value:l.firstName,onChange:d,required:!0}),(0,Y.jsx)(U,{type:"text",name:"lastName",placeholder:"Last Name",value:l.lastName,onChange:d,required:!0})]}),(0,Y.jsx)(H,{children:(0,Y.jsx)(U,{type:"email",name:"email",placeholder:"Email",value:l.email,onChange:d,required:!0})}),(0,Y.jsx)(U,{type:"password",name:"password",placeholder:"Password",value:l.password,onChange:d,required:!0})]}),2===e&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Job Information"}),(0,Y.jsxs)(H,{children:[(0,Y.jsx)(U,{type:"text",name:"badgeNumber",placeholder:"Badge Number",value:l.badgeNumber,onChange:d,required:!0}),(0,Y.jsx)(U,{type:"text",name:"service",placeholder:"Service",value:l.service,onChange:d,required:!0})]})]}),3===e&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(X,{children:"Final Submission"}),(0,Y.jsx)("p",{children:"Review all details before submitting."})]}),(0,Y.jsxs)(M,{children:[e>1&&(0,Y.jsx)(V,{type:"button",onClick:()=>t((e=>Math.max(e-1,1))),children:"Back"}),e<ce.length?(0,Y.jsx)(T,{type:"button",style:1===e?{marginLeft:"auto"}:{},onClick:()=>t((e=>Math.min(e+1,ce.length))),children:"Next \u2192"}):(0,Y.jsx)(J,{type:"submit",children:"Submit"})]})]})]})}),(0,Y.jsx)(W,{isOpen:r,children:(0,Y.jsx)(de,{})})]})}}}]);
//# sourceMappingURL=8597.3ec58db9.chunk.js.map