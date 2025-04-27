"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9786],{27137:(e,a,r)=>{r.d(a,{Z:()=>g});var t,l=r(28789),n=r(12332),i=r(72791);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(null,arguments)}function s(e,a){let{title:r,titleId:l,...n}=e;return i.createElement("svg",o({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":l},n),r?i.createElement("title",{id:l},r):null,t||(t=i.createElement("rect",{width:16,height:4,rx:2,fill:"currentColor"})))}const d=i.forwardRef(s);r.p;var c;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p.apply(null,arguments)}function u(e,a){let{title:r,titleId:t,...l}=e;return i.createElement("svg",p({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":t},l),r?i.createElement("title",{id:t},r):null,c||(c=i.createElement("rect",{x:.5,y:.5,width:15,height:3,rx:1.5,stroke:"currentColor"})))}const m=i.forwardRef(u);r.p;var x=r(13967),h=r(80184);const b=(0,l.ZP)(n.Z)({display:"flex !important",gap:4,marginTop:"-8px","& svg.empty":{color:"#A2C0D4"},"& svg.filled":{color:"#7ED321"}}),g=e=>{let{value:a}=e;const r=(0,x.Z)().direction;return(0,h.jsx)(b,{className:"styled-rating",initialRating:a,direction:r,emptySymbol:(0,h.jsx)(m,{className:"empty"}),fullSymbol:(0,h.jsx)(d,{className:"filled"}),readonly:!0})}},87025:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(28789),l=r(65484),n=r.n(l),i=r(14161),o=r(80184);const s=t.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${n()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})};
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`,d=t.ZP.span`
  text-transform: uppercase;
  padding: 0 6px;
  position: relative;
  z-index: 2;
  margin-left: 17px;
  font-size: ${i.iH[10]};
  font-weight: 500;
  font-family: ${i.Rq.accent};
  background-color: ${n()("theme",{light:i.R2.widgetBg,dark:i._4.widgetBg})};
})
`,c=e=>{let{text:a}=e;return(0,o.jsx)(s,{className:"separator",children:(0,o.jsx)(d,{children:a})})}},2614:(e,a,r)=>{r.d(a,{Z:()=>n});var t=r(13902),l=r(80184);const n=e=>{let{state:a,handler:r,loop:n=!0}=e;return(0,l.jsx)(t.Z,{handler:e=>{const t=e.currentTarget.dataset.direction;let l=a.number;"prev"===t?0!==l?l--:l=11:11!==l?l++:l=0,r((e=>({...e,number:l})));let n=(new Date).getMonth(),i=n-1,o=n+1,s="";const d=new Date(2022,l,1);s=l===n?"This month":l===i?"Previous month":l===o?"Next month":d.toLocaleString("en-US",{month:"long"}),r((e=>({...e,label:s})))},text:a.label,prevDisabled:!n&&0===a.number,nextDisabled:!n&&a.number===(new Date).getMonth()})}},13902:(e,a,r)=>{r.d(a,{Z:()=>n});var t=r(85521),l=r(80184);const n=e=>{let{text:a,handler:r,prevDisabled:n,nextDisabled:i,...o}=e;return(0,l.jsxs)(t.i,{className:"navigator",...o,children:[(0,l.jsx)("button",{className:n?"disabled":"",onClick:r,"data-direction":"prev","aria-label":"Previous",children:(0,l.jsx)("i",{className:"icon icon-chevron-left"})}),(0,l.jsx)("span",{className:"label",children:a}),(0,l.jsx)("button",{className:i?"disabled":"",onClick:r,"data-direction":"next","aria-label":"Next",children:(0,l.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,a,r)=>{r.d(a,{i:()=>o});var t=r(28789),l=r(65484),n=r.n(l),i=r(14161);const o=t.ZP.div`
  display: flex;
  ${i.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${i.iH[14]};
  border-radius: 8px;
  background-color: ${n()("theme",{light:i.R2.bodyBg,dark:i._4.bodyBg})};

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
`},33926:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(14161),l=r(57482),n=r(28789),i=r(80184);const o=e=>{let{color:a=t.O9.blue,value:r,style:o={}}=e;const{theme:s}=(0,n.Fg)();return(0,i.jsx)(l.Z,{className:"progressbar",variant:"determinate","aria-label":r,value:r,sx:{backgroundColor:"light"===s?"#E4EAF0":t._4.highlight,height:6,borderRadius:2,...o,"& .MuiLinearProgress-bar":{backgroundColor:a,borderRadius:2}}})}},57408:(e,a,r)=>{r.d(a,{Z:()=>s});var t=r(28789),l=r(14161),n=r(57770),i=r(80184);const o=t.ZP.button`
  display: flex;
  ${l.fU.center};
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: ${l.iH[14]};
  gap: 10px;
  background-color: ${e=>l.O9[n.U.find((a=>a.cat===e.reminder)).color]};

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,s=e=>{let{reminder:a,handler:r}=e;const{text:t,type:l}=a;return(0,i.jsxs)(o,{className:"reminder",onClick:r,reminder:l,children:[(0,i.jsx)("i",{className:"icon icon-clock"}),(0,i.jsx)("span",{children:t})]})}},62014:(e,a,r)=>{r.d(a,{W2:()=>s,ck:()=>c,zx:()=>d});var t=r(28789),l=r(65484),n=r.n(l),i=r(14161);const o=n()("theme",{light:i.R2.bodyBg,dark:i.R2.text}),s=t.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,d=t.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${i.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${n()("theme",{light:`\n        color: ${i.O9.blue};\n        background-color: ${i.R2.highlight};\n    `,dark:`\n        color: ${i.O9.secondary};\n        background-color: ${i._4.highlight};\n    `})};
  display: flex;
  ${i.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,c=t.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},6378:(e,a,r)=>{r.d(a,{Z:()=>o});var t=r(62014),l=r(25984),n=r(80184);const i=e=>{let{state:a,filter:r,handler:l}=e;const i=a.value===r.value;return(0,n.jsx)(t.zx,{className:i?"active":"",onClick:()=>l({value:r.value,label:r.label}),children:r.label})},o=e=>{let{state:a,handler:r}=e;return(0,n.jsx)(t.W2,{as:"ul",className:"gender",children:[{value:"all",label:"all"},{value:"male",label:"Men"},{value:"female",label:"Women"}].map((e=>(0,n.jsx)(t.ck,{children:(0,n.jsx)(i,{state:a,filter:e,handler:r})},(0,l.x0)(3))))})}},20760:(e,a,r)=>{r.d(a,{Z:()=>n});var t=r(51899),l=r(80184);const n=e=>{let{children:a,style:r,sidePadding:n=!1,elRef:i,...o}=e;return(0,l.jsx)(t.uT,{ref:i,sidePadding:n,style:r,...o,children:a})}},57770:(e,a,r)=>{r.d(a,{U:()=>t,z:()=>l});const t=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],l=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},22172:(e,a,r)=>{r.d(a,{b_:()=>i,i7:()=>o,tV:()=>s});var t=r(12298),l=r(83687),n=r(80184);const i=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=()=>{let e=[];return t.q.forEach((a=>{e.push({value:a.id,label:(0,n.jsxs)("div",{className:"user-option",children:[(0,n.jsx)(l.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,n.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,r)=>{r.d(a,{q:()=>h});var t=r(65710),l=r(37512),n=r(76155),i=r(62056),o=r(67583),s=r(79168),d=r(29260),c=r(33375);const p=r.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",u=r.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var m=r(43928),x=r(4681);const h=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:n,webp:i},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:r(99976),webp:r(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:p,webp:u},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:t,webp:l},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:d,webp:c},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:m,webp:x},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},84628:(e,a,r)=>{r.d(a,{Z:()=>l});var t=r(72791);const l=e=>{const[a,r]=(0,t.useState)({value:"all",label:"All"});return{genderArr:a=>"all"===a.value?e:e.filter((e=>{var r;return(null===(r=e.sex)||void 0===r?void 0:r.toLowerCase())===a.value})),gender:a,setGender:r}}},39703:(e,a,r)=>{r.r(a),r.d(a,{default:()=>we});var t=r(72791),l=r(57689),n=r(39314),i=r(51899),o=r(28789),s=r(65484),d=r.n(s),c=r(14161);const p=(0,o.ZP)(i.Pz)`
  ${c.AV.tablet} {
    flex-direction: row;
    ${c.fU.between};

    .gender {
      max-width: 300px;
    }
  }
`,u=o.ZP.ul`
  display: flex;
  margin: 0 2px;
  gap: 1px;
  height: 80px;
  align-items: center;
  border-radius: 8px;
  padding: 0 18px;
  overflow-x: auto;
  background-color: ${d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})};
`,m=o.ZP.div`
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
`,x=o.ZP.a`
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
`;var h=r(249),b=r(20760),g=r(6378),v=r(2614),f=r(87025);const j=o.ZP.div`
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
`,y=(o.ZP.div`
  position: relative;

  .dropdown-content {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    min-width: 150px;

    button {
      background: none;
      border: none;
      padding: 8px 12px;
      text-align: left;
      width: 100%;
      cursor: pointer;

      &:hover {
        background: #f0f0f0;
      }

      &.delete {
        color: red;
      }
    }
  }
`,o.ZP.div`
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
      ${j} {
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
      ${j} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${j} {
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
`),w=o.ZP.button`
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
`;var k=r(83687),N=r(36862),Z=r(57408),$=r(33926),P=r(27137),D=r(71856),C=r(34909),S=r(1705),E=r(61134),_=r(80848),z=r(60874);o.F4`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;const R=o.ZP.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`,O=o.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,B=o.ZP.button`
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
`,F=o.vJ`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`,I=o.ZP.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 10px;
`,U=o.ZP.button`
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
`,A=(0,o.ZP)(U)`
  && {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    &:hover {
      background-color: #0056b3;
    }
  }
`,L=o.ZP.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8000;
`,M=o.ZP.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
  text-align: center;
`,q=o.ZP.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`,T=o.ZP.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3px;
  margin-top: 7px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`,H=o.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,V=o.ZP.div`
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
`,W=o.ZP.div`
  height: 4px;
  width: 300px;
  background: #e5e7eb;
  margin: 0 0px;
`,G=o.ZP.form`
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
`,Q=(o.ZP.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  font-size: 14px;
`,o.ZP.input`
  width: 100%;
  padding: 10px;
  margin-top: 8px;
  margin-buttom:8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`),J=o.ZP.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`,X=(o.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,o.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`),Y=o.ZP.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`,K=o.ZP.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`,ee=o.ZP.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`,ae=o.ZP.div`
  filter: ${e=>e.isOpen?"blur(3px)":"none"};
  pointer-events: ${e=>e.isOpen?"none":"auto"};
`,re=(o.ZP.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: white;
  color:grey;
  margin-top: 8px;
  margin-buttom:8px;
`,o.ZP.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`,o.ZP.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  input {
    margin-right: 5px;
  }
`,o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`),te=o.ZP.h2`
 font-size: 19px;
  text-align: center;
  margin-bottom: 10px;
   justify-content: center;
  align-items: center;
  margin-left: 30px;
`;var le=r(12903);const ne="http://localhost:5000/doctors",ie={getAllDoctors:async()=>{try{return(await le.Z.get(ne)).data}catch(e){throw console.error("Erreur lors du chargement des m\xe9decins:",e),e}},getDoctorById:async e=>{try{return(await le.Z.get(`${ne}/${e}`)).data}catch(a){throw console.error("Erreur lors de la r\xe9cup\xe9ration du m\xe9decin:",a),a}},createDoctor:async e=>{try{return(await le.Z.post(ne,e)).data}catch(a){throw console.error("Erreur lors de la cr\xe9ation du m\xe9decin:",a),a}},createSimpleDoctor:async e=>{try{return(await le.Z.post(`${ne}/createSimpleDoctor`,e)).data}catch(a){throw console.error("Erreur lors de la cr\xe9ation du m\xe9decin:",a),a}},updateDoctor:async(e,a)=>{try{const r=await le.Z.put(`${ne}/${e}`,a);return console.log("Response from update:",r.data),r.data}catch(r){throw console.error("Erreur lors de la mise \xe0 jour du m\xe9decin:",r),r}},deleteDoctor:async e=>{try{await le.Z.delete(`${ne}/${e}`)}catch(a){throw console.error("Erreur lors de la suppression du m\xe9decin:",a),a}}};var oe=r(80184);const se=z.Ry({firstName:z.Z_().min(2,{message:"First Name is required (min 2 caract\xe8res)"}),lastName:z.Z_().min(2,{message:"Last Name is required (min 2 caract\xe8res)"}),badgeNumber:z.oQ.number().min(100,{message:"Badge Number must be at least 100"}),departement:z.Z_().min(3,{message:"Departement is required"}),speciality:z.Z_().min(3,{message:"Speciality is required"}),emailPerso:z.Z_().email({message:"Invalid email format"}),phone:z.oQ.number().min(1e7,{message:"Phone number must be at least 8 digits"}),password:z.Z_().min(6,{message:"Password must be at least 6 characters"})}),de=[{number:1,label:"Doctor Information"},{number:2,label:"Personal Information"}],ce=e=>{var a,r,l,n,i,o,s,d;let{isOpen:c,onClose:p,doctor:u}=e;const[m,x]=(0,t.useState)(1),[h,b]=(0,t.useState)(!1),{register:g,handleSubmit:v,reset:f,formState:{errors:j}}=(0,E.cI)({resolver:(0,_.F)(se)});(0,t.useEffect)((()=>{var e,a;u&&f({firstName:(null===(e=u.user)||void 0===e?void 0:e.firstName)||"",lastName:(null===(a=u.user)||void 0===a?void 0:a.lastName)||"",emailPerso:u.emailPerso||"",badgeNumber:u.badgeNumber||"",departement:u.departement||"",speciality:u.speciality||"",phone:u.phone||"",password:""})}),[u,f]);return c?(0,oe.jsx)(L,{children:(0,oe.jsxs)(M,{as:C.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,oe.jsx)(q,{onClick:p,children:"\u2716"}),(0,oe.jsx)(T,{children:"Update Doctor"}),(0,oe.jsx)(H,{children:de.map(((e,a)=>{let{number:r,label:l}=e;return(0,oe.jsxs)(t.Fragment,{children:[(0,oe.jsxs)(re,{children:[(0,oe.jsx)(V,{active:m>=r,children:r}),(0,oe.jsx)("span",{children:l})]}),a<de.length-1&&(0,oe.jsx)(W,{})]},a)}))}),(0,oe.jsxs)(G,{onSubmit:v((async e=>{try{if(b(!0),!u||!u._id)return void alert("Erreur : ID du m\xe9decin manquant.");const a={...e,email:e.emailPerso,badgeNumber:parseInt(e.badgeNumber,10),phone:parseInt(e.phone,10)};await ie.updateDoctor(u._id,a),alert("\u2705 Doctor updated successfully!"),p(),window.location.reload()}catch(a){console.error("Error updating doctor:",a),alert(`Error: ${a.response?a.response.data.message:"Unknown error"}`)}finally{b(!1)}})),children:[1===m&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(te,{children:"Doctor Information"}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...g("firstName"),placeholder:"First Name"}),(0,oe.jsx)(R,{children:null===(a=j.firstName)||void 0===a?void 0:a.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...g("lastName"),placeholder:"Last Name"}),(0,oe.jsx)(R,{children:null===(r=j.lastName)||void 0===r?void 0:r.message})]})]}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"number",...g("badgeNumber"),placeholder:"Badge Number"}),(0,oe.jsx)(R,{children:null===(l=j.badgeNumber)||void 0===l?void 0:l.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...g("departement"),placeholder:"Department"}),(0,oe.jsx)(R,{children:null===(n=j.departement)||void 0===n?void 0:n.message})]})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...g("speciality"),placeholder:"Speciality"}),(0,oe.jsx)(R,{children:null===(i=j.speciality)||void 0===i?void 0:i.message})]})]}),2===m&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(te,{children:"Personal Information"}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"email",...g("emailPerso"),placeholder:"Email"}),(0,oe.jsx)(R,{children:null===(o=j.emailPerso)||void 0===o?void 0:o.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"number",...g("phone"),placeholder:"Phone"}),(0,oe.jsx)(R,{children:null===(s=j.phone)||void 0===s?void 0:s.message})]})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"password",...g("password"),placeholder:"Password"}),(0,oe.jsx)(R,{children:null===(d=j.password)||void 0===d?void 0:d.message})]})]}),(0,oe.jsxs)(X,{children:[m>1&&(0,oe.jsx)(Y,{type:"button",onClick:()=>x((e=>Math.max(e-1,1))),children:"Back"}),m<de.length?(0,oe.jsx)(K,{type:"button",onClick:()=>x((e=>Math.min(e+1,de.length))),children:"Next \u2192"}):(0,oe.jsx)(ee,{type:"submit",disabled:h,children:h?"Updating...":"Update"})]})]})]})}):null},pe=e=>{let{type:a,data:r,onDelete:n}=e;const[i,o]=(0,t.useState)({}),[s,d]=(0,t.useState)(!1),c=(0,l.s0)(),p=()=>{d(!0)},u=async()=>{try{await ie.deleteDoctor(r._id),n(r._id),console.log("Doctor deleted:",r._id),window.location.reload()}catch(e){console.error("Error deleting doctor:",e),alert(e.response?e.response.data.message:"Erreur lors de la suppression du m\xe9decin.")}},{user:m,online:x,avatar:h,phone:b}=r,g=()=>(0,oe.jsxs)(j,{children:[(0,oe.jsx)(k.Z,{avatar:h,alt:`${m.lastName} ${m.firstName}`,online:x}),(0,oe.jsxs)("div",{className:"main",children:[(0,oe.jsxs)("span",{className:"name",children:[m.lastName," ",m.firstName]}),"patient"===a?(0,oe.jsxs)("span",{className:"age",children:[r.age," years"]}):(0,oe.jsx)("span",{className:"department",children:r.department.map((e=>e.label)).join(", ")})]})]}),v=()=>(0,oe.jsxs)("div",{className:"overview",children:[(0,oe.jsxs)("div",{className:"rating",children:[(0,oe.jsx)("span",{children:"Doctor rating"}),(0,oe.jsx)(P.Z,{value:r.rating})]}),(0,oe.jsxs)("div",{className:"booked",children:[(0,oe.jsx)("span",{children:"Booked appointments"}),(0,oe.jsx)($.Z,{value:r.booked})]})]}),f=()=>(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(g,{}),"doctor"===a&&(0,oe.jsx)(v,{}),"staff"===a&&(0,oe.jsx)(v,{}),"patient"===a&&r.reminder&&(0,oe.jsx)(Z.Z,{reminder:r.reminder}),(0,oe.jsxs)(j,{className:"actions",children:["patient"===a&&(0,oe.jsx)("div",{className:"wrapper",children:(0,oe.jsxs)(w,{className:"btn-action",onClick:()=>c("/dashboard_f",{state:{data:r}}),children:[(0,oe.jsx)("i",{className:"icon icon-doctor"}),(0,oe.jsx)("span",{className:"text",children:"Case history"})]})}),(0,oe.jsx)(N.Z,{icon:"comment-text",label:"Message",shape:"round",hasNotification:r.message}),(0,oe.jsx)(N.Z,{icon:"phone",label:"Call",shape:"round",onClick:()=>{return e=r._id,void o((a=>({...a,[e]:!a[e]})));var e}}),i[r._id]&&b&&(0,oe.jsx)("div",{className:"phone-number",children:b}),(0,oe.jsx)(w,{className:"btn-action update",onClick:p,children:(0,oe.jsx)("i",{className:"icon icon-edit"})}),(0,oe.jsx)(w,{className:"btn-action delete",onClick:u,children:(0,oe.jsx)("i",{className:"icon icon-trash"})})]})]});return(0,oe.jsxs)(D.M,{children:[(0,oe.jsx)(y,{className:a,as:C.E.li,...S.f,children:(0,oe.jsx)(f,{})}),s&&(0,oe.jsx)(ce,{isOpen:s,onClose:()=>d(!1),doctor:r})]})},ue=o.ZP.ul`
  ${c.fU.col};
  gap: 20px;
  margin: 20px;
`,me=e=>{let{arr:a,type:r,gender:t,deps:l}=e;const{search:n,category:i}=l||{search:"",category:""};return(0,oe.jsx)(ue,{children:a.map(((e,a)=>(0,oe.jsx)(pe,{data:{...e,phone:String(e.phone)},type:r},`${e.id}-${t}-${n}-${i}`)))})};r(22172);const xe=e=>{let{char:a,arr:r,type:t,gender:l}=e;const n=r.filter((e=>{var r;return(null===(r=e.user)||void 0===r?void 0:r.lastName[0].toLowerCase())===a}));return(0,oe.jsx)(oe.Fragment,{children:0!==n.length?(0,oe.jsxs)("div",{id:a,children:[(0,oe.jsx)(f.Z,{text:a}),(0,oe.jsx)(me,{arr:n,type:t,gender:l})]}):null})};var he=r(25277),be=r(44238),ge=r(84628);const ve=e=>{let{variant:a="doctor"}=e;const r=(0,t.useRef)(null),[l,n]=(0,t.useState)([]),[o,s]=(0,t.useState)(null),[d,c]=(0,t.useState)(null),[f,j]=(0,t.useState)(!1),[y,w]=(0,t.useState)(null);(0,t.useEffect)((()=>{(async()=>{try{const e=await ie.getAllDoctors();n(e),console.log(e)}catch(e){console.error("Failed to fetch Doctors",e)}})()}),[]);const[k,N]=(0,t.useState)({label:"This month",number:(new Date).getMonth()}),Z=l,{gender:$,setGender:P,genderArr:D}=(0,ge.Z)(Z),C=D($)||[],S=o?C.filter((e=>{var a,r,t;return(null===(a=e.user)||void 0===a||null===(r=a.lastName)||void 0===r||null===(t=r[0])||void 0===t?void 0:t.toLowerCase())===o})):C,E=(0,be.J)()||[],_=(e,a)=>a.some((a=>{var r,t;return(null===(r=a.user)||void 0===r||null===(t=r.lastName[0])||void 0===t?void 0:t.toLowerCase())===e}));(0,t.useEffect)((()=>{var e;null===(e=r.current)||void 0===e||e.scrollTo({top:0,behavior:"smooth"})}),[k,$]);const z=e=>{w(e),j(!0)};return(0,oe.jsxs)(h.Z,{name:"DoctorsList",children:[(0,oe.jsxs)(i.h4,{sidePadding:!0,children:[(0,oe.jsxs)(p,{children:[(0,oe.jsx)(g.Z,{state:$,handler:P}),(0,oe.jsx)(v.Z,{state:k,handler:N})]}),(0,oe.jsx)(m,{children:(0,oe.jsx)(u,{children:E.length>0?E.map((e=>(0,oe.jsx)("li",{children:(0,oe.jsx)(x,{className:`${_(e,C)?"active":""} ${o===e?"selected":""}`,href:`#${e}`,onClick:()=>(e=>{s((a=>a===e?null:e))})(e),children:e})},e))):(0,oe.jsx)(he.Z,{})})})]}),(0,oe.jsx)(b.Z,{style:{padding:0},elRef:r,children:0!==C.length?(0,oe.jsx)(oe.Fragment,{children:o?(0,oe.jsx)(xe,{gender:$.value,char:o,type:"patient",arr:S,onEditDoctor:z},`patients-${o}`):E.map((e=>(0,oe.jsx)(xe,{gender:$.value,char:e,type:"patient",arr:C.filter((a=>{var r,t,l;return(null===(r=a.user)||void 0===r||null===(t=r.lastName)||void 0===t||null===(l=t[0])||void 0===l?void 0:l.toLowerCase())===e}))||[],onEditDoctor:z},`patients-${e}`)))}):(0,oe.jsx)(he.Z,{})}),f&&(0,oe.jsx)(ce,{isOpen:f,onClose:()=>j(!1),doctor:y})]})},fe=z.Ry({firstName:z.Z_().min(2,{message:"First Name is required (min 2 caract\xe8res)"}),lastName:z.Z_().min(2,{message:"Last Name is required (min 2 caract\xe8res)"}),badgeNumber:z.oQ.number().min(100,{message:"Badge Number must be at least 100"}),departement:z.Z_().min(3,{message:"Departement is required"}),speciality:z.Z_().min(3,{message:"Speciality is required"}),emailPerso:z.Z_().email({message:"Invalid email format"}),phone:z.oQ.number().min(1e7,{message:"Phone number must be at least 8 digits"}),password:z.Z_().min(6,{message:"Password must be at least 6 characters"})}),je=[{number:1,label:"Doctor Information"},{number:2,label:"Personal Information"}],ye=e=>{var a,r,l,n,i,o,s,d;let{isOpen:c,onClose:p}=e;const[u,m]=(0,t.useState)(1),[x,h]=(0,t.useState)(!1),{register:b,handleSubmit:g,formState:{errors:v}}=(0,E.cI)({resolver:(0,_.F)(fe)}),f=async e=>{try{h(!0);const a={...e,email:e.emailPerso,badgeNumber:parseInt(e.badgeNumber,10),phone:parseInt(e.phone,10)};if(isNaN(a.badgeNumber)||isNaN(a.phone))return void alert("Please provide valid numbers for badge number and phone.");await ie.createDoctor(a),alert("\u2705 Doctor added successfully!"),p(),window.location.reload()}catch(a){console.error("Error creating doctor:",a),alert(`Error: ${a.response?a.response.data.message:"Unknown error"}`)}finally{h(!1)}};return c?(0,oe.jsx)(L,{children:(0,oe.jsxs)(M,{as:C.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,oe.jsx)(q,{onClick:p,children:"\u2716"}),(0,oe.jsx)(T,{children:"Add NEW Doctor"}),(0,oe.jsx)(H,{children:je.map(((e,a)=>{let{number:r,label:l}=e;return(0,oe.jsxs)(t.Fragment,{children:[(0,oe.jsxs)(re,{children:[(0,oe.jsx)(V,{active:u>=r,children:r}),(0,oe.jsx)("span",{children:l})]}),a<je.length-1&&(0,oe.jsx)(W,{})]},a)}))}),(0,oe.jsxs)(G,{onSubmit:e=>{e.preventDefault(),g(f)(e)},children:[1===u&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(te,{children:"Doctor Information"}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...b("firstName"),placeholder:"First Name"}),(0,oe.jsx)(R,{children:null===(a=v.firstName)||void 0===a?void 0:a.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...b("lastName"),placeholder:"Last Name"}),(0,oe.jsx)(R,{children:null===(r=v.lastName)||void 0===r?void 0:r.message})]})]}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"number",...b("badgeNumber"),placeholder:"Badge Number"}),(0,oe.jsx)(R,{children:null===(l=v.badgeNumber)||void 0===l?void 0:l.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...b("departement"),placeholder:"Department"}),(0,oe.jsx)(R,{children:null===(n=v.departement)||void 0===n?void 0:n.message})]})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"text",...b("speciality"),placeholder:"Speciality"}),(0,oe.jsx)(R,{children:null===(i=v.speciality)||void 0===i?void 0:i.message})]})]}),2===u&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(te,{children:"Personal Information"}),(0,oe.jsxs)(J,{children:[(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"email",...b("emailPerso"),placeholder:"Email"}),(0,oe.jsx)(R,{children:null===(o=v.emailPerso)||void 0===o?void 0:o.message})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"number",...b("phone"),placeholder:"Phone"}),(0,oe.jsx)(R,{children:null===(s=v.phone)||void 0===s?void 0:s.message})]})]}),(0,oe.jsxs)("div",{children:[(0,oe.jsx)(Q,{type:"password",...b("password"),placeholder:"Password"}),(0,oe.jsx)(R,{children:null===(d=v.password)||void 0===d?void 0:d.message})]})]}),(0,oe.jsxs)(X,{children:[u>1&&(0,oe.jsx)(Y,{type:"button",onClick:()=>m((e=>Math.max(e-1,1))),children:"Back"}),u<je.length?(0,oe.jsx)(K,{type:"button",style:1===u?{marginLeft:"auto"}:{},onClick:()=>m((e=>Math.min(e+1,je.length))),children:"Next \u2192"}):(0,oe.jsx)(ee,{type:"submit",disabled:x,children:x?"Submitting...":"Submit"})]})]})]})}):null},we=()=>{const[e,a]=(0,t.useState)(!1),[r,i]=(0,t.useState)(!1),[o,s]=(0,t.useState)(null);(0,l.s0)();return(0,oe.jsxs)(n.Z,{title:"Doctors List",children:[(0,oe.jsx)(F,{}),(0,oe.jsx)(I,{children:(0,oe.jsx)(A,{onClick:()=>a(!0),children:"+ Add new Doctor"})}),e&&(0,oe.jsx)(L,{children:(0,oe.jsxs)(M,{children:[(0,oe.jsx)(q,{onClick:()=>a(!1),children:"\u2716"}),(0,oe.jsx)("h2",{children:"Choose Doctor Type"}),(0,oe.jsx)(O,{children:(0,oe.jsx)(B,{variant:"simple",onClick:()=>{a(!1),s(null),i(!0)},children:"Simple Doctor"})})]})}),(0,oe.jsx)(ye,{isOpen:r,onClose:()=>i(!1),doctorData:o}),(0,oe.jsxs)(ae,{isOpen:r||e,children:[(0,oe.jsx)(ve,{variant:"doctor",onEditDoctor:e=>{s(e),i(!0)}})," "]})]})}}}]);
//# sourceMappingURL=9786.7a1b38a3.chunk.js.map