"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[2860],{21119:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(28789),n=a(14161),o=a(25606),s=a(71856),i=a(34909),l=a(80184);const c=r.ZP.button`
  border-radius: 8px;
  background-color: ${n.O9.blue};
  color: #fff;
  font-size: ${n.iH[14]};
  font-family: ${n.Rq.accent};
  height: 40px;
  width: 100%;
  display: flex;
  ${n.fU.center};
  gap: 8px;
  line-height: 1;
  transition: background-color var(--transition);
  

  &:hover, &:focus {
    background-color: ${(0,o._j)(.1,n.O9.blue)};
  }

  &.success {
    background-color: ${n.O9.success};

    &:hover, &:focus {
      background-color: ${(0,o._j)(.1,n.O9.success)};
    }
  }

  &.error {
    background-color: ${n.O9.error};

    &:hover, &:focus {
      background-color: ${(0,o._j)(.1,n.O9.error)};
    }
  }

  &.disabled {
    background-color: ${n.O9.gray};
    pointer-events: none;
  }
`,d=e=>{let{text:t,handler:a,type:r="button",isVisible:n=!0,className:o,icon:d}=e;return(0,l.jsx)(s.M,{children:n&&(0,l.jsxs)(c,{as:i.E.button,className:o||"",onClick:a,type:r,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d&&(0,l.jsx)("i",{className:`icon icon-${d}`})," ",t]})})}},3748:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(14161),n=a(20068),o=a(48980),s=a(80184);const i=e=>{let{title:t,placement:a="right",children:i}=e;return(0,s.jsx)(n.Z,{TransitionComponent:o.Z,TransitionProps:{timeout:350},title:t,placement:a,enterTouchDelay:0,PopperProps:{sx:{"& .MuiTooltip-tooltip":{color:"#fff",backgroundColor:r.R2.text,fontSize:r.iH[10],boxShadow:"0 1px 8px rgba(65, 77, 85, 0.4)",textTransform:"uppercase",borderRadius:8},"& .MuiTooltip-arrow:before":{backgroundColor:r.R2.text}}},arrow:!0,children:i})}},36038:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(31843),n=a(85335),o=a(80184);const s=e=>{let{color:t,legend:a}=e;return(0,o.jsxs)(r.H,{children:[(0,o.jsx)(n.Lm,{color:t})," ",a]})}},47242:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(31843),n=a(80184);const o=e=>{let{children:t,overlay:a}=e;return(0,n.jsx)(r.a,{overlay:a,children:t})}},31843:(e,t,a)=>{a.d(t,{H:()=>s,a:()=>o});var r=a(28789),n=a(14161);const o=r.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,s=r.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${n.Rq.accent};
  font-size: ${n.iH[10]};
`},33926:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(14161),n=a(57482),o=a(28789),s=a(80184);const i=e=>{let{color:t=r.O9.blue,value:a,style:i={}}=e;const{theme:l}=(0,o.Fg)();return(0,s.jsx)(n.Z,{className:"progressbar",variant:"determinate","aria-label":a,value:a,sx:{backgroundColor:"light"===l?"#E4EAF0":r._4.highlight,height:6,borderRadius:2,...i,"& .MuiLinearProgress-bar":{backgroundColor:t,borderRadius:2}}})}},8281:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(62014),n=a(69667),o=a(80184);const s=e=>{let{className:t,eventKey:a,title:s,handler:i}=e;return(0,o.jsx)(r.ck,{className:t||"",as:n.Z.Item,onClick:i,children:(0,o.jsx)(r.zx,{as:n.Z.Link,eventKey:a,children:s})})}},19640:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(62014),n=a(69667),o=a(80184);const s=e=>{let{children:t}=e;return(0,o.jsx)(r.W2,{as:n.Z,children:t})}},62014:(e,t,a)=>{a.d(t,{W2:()=>l,ck:()=>d,zx:()=>c});var r=a(28789),n=a(65484),o=a.n(n),s=a(14161);const i=o()("theme",{light:s.R2.bodyBg,dark:s.R2.text}),l=r.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,c=r.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${s.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${o()("theme",{light:`\n        color: ${s.O9.blue};\n        background-color: ${s.R2.highlight};\n    `,dark:`\n        color: ${s.O9.secondary};\n        background-color: ${s._4.highlight};\n    `})};
  display: flex;
  ${s.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${i};
  }
`,d=r.ZP.div`
  &.active .nav-link {
    background-color: ${i};
  };
`},22426:(e,t,a)=>{a.d(t,{Z:()=>i,m:()=>s});var r=a(28789),n=a(14161),o=a(80184);const s=r.ZP.div`
  font-family: ${n.Rq.accent};
  font-size: ${n.iH[10]};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${n.R2.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${n.fU.center}
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
    background-color: ${n.R2.text};
    display: ${e=>e.arrow?"block":"none"};
  }
`,i=e=>{let{active:t,payload:a,tooltip:r,arrow:n=!1,multi:i=!1,...l}=e;if(i){if(!t||!r)return null;for(const e of a)if(e.dataKey===r)return(0,o.jsx)(s,{arrow:n,children:e.value});return null}return t&&a[0]?(0,o.jsxs)(s,{arrow:n,children:[" ",a[0].value," ",l.right&&a[0].dataKey]}):null}},70475:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(28789),n=a(65484),o=a.n(n),s=a(14161);a(72791);const i=a.p+"static/media/bar_mask.687375579d408362bc7492cdf92b8db6.svg",l=r.ZP.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  margin: 20px -24px 0;
  padding: 0 24px;
  user-select: none;
`,c=r.ZP.div`
  ${s.fU.col};
  align-items: center;
  gap: 20px;
  font-family: ${s.Rq.accent};
  font-size: ${s.iH[10]};
  text-transform: uppercase;
  height: fit-content;
  
  ${e=>e.masked&&`\n    &:first-of-type {\n        align-items: flex-start;\n    }\n    \n    &:last-of-type {\n        align-items: flex-end;\n    }\n    \n    .track {\n        mask: url(${i}) no-repeat center center / contain;\n     }\n  `}
  
  .track {
    background-color: ${o()("theme",{light:e=>e.masked?s.R2.bodyBg:s.R2.highlight,dark:s._4.highlight})};
    height: 228px;
    width: ${e=>e.masked?4:8}px;
    border-radius: 4px;
    display: flex;
    flex-direction: column-reverse;
    gap: ${e=>e.masked?0:8}px;
  }
`;var d=a(34909),p=a(57770),h=a(80184);const u=e=>{let{data:t,masked:a=!1,...r}=e;return(0,h.jsx)(l,{...r,children:t.map((e=>(0,h.jsxs)(c,{masked:a,children:[(0,h.jsx)("div",{className:"track",children:Object.keys(e.values).map(((t,r)=>{const n=e.values[t],o=p.U.find((e=>e.cat===t)).color;return(0,h.jsx)(d.E.span,{style:{backgroundColor:s.O9[o],width:"100%",borderRadius:!a&&4,opacity:0},animate:{height:`${n}%`,opacity:1},transition:{duration:1,delay:.5,type:"tween",ease:"easeInOut"}},`${e.label}-${t}-${r}-${n}`)}))}),(0,h.jsx)("span",{children:e.label})]},e.label)))})}},92889:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(36038),n=a(47242),o=a(57770),s=a(80184);const i=()=>(0,s.jsx)(n.Z,{children:o.U.map((e=>{let{cat:t,color:a}=e;return"emergency"===t?null:(0,s.jsx)(r.Z,{legend:t,color:a},t)}))})},80879:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(62014),n=a(17350),o=a(25984),s=a(80184);const i=e=>{let{current:t,handler:a}=e;const{periods:i}=(0,n.Z)();return(0,s.jsx)(r.W2,{children:i.map((e=>(0,s.jsx)(r.ck,{children:(0,s.jsx)(r.zx,{className:t===e&&"active",onClick:()=>a(e),children:e})},(0,o.x0)(4))))})}},90004:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(51899),n=a(66150),o=a(80184);const s=e=>{let{title:t,handler:a,sidePadding:s,children:i,disabled:l,...c}=e;return(0,o.jsxs)(n.Z,{title:t,sidePadding:s,style:c.style,className:"nav",children:[(0,o.jsxs)(r.JL,{children:[(0,o.jsx)("button",{onClick:a,"data-direction":"prev",className:l?"disabled":"","aria-label":"Previous",children:(0,o.jsx)("i",{className:"icon icon-chevron-left"})}),(0,o.jsx)("button",{onClick:a,"data-direction":"next",className:l?"disabled":"","aria-label":"Next",children:(0,o.jsx)("i",{className:"icon icon-chevron-right"})})]}),i]})}},57770:(e,t,a)=>{a.d(t,{U:()=>r,z:()=>n});const r=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],n=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},63245:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(98246),n=a(52007),o=a.n(n);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";const{enqueueSnackbar:a}=(0,r.Ds)();return{notify:()=>a(e,{variant:t})}};s.propTypes={text:o().string.isRequired,type:o().oneOf(["success","error","warning","info"])};const i=s},17350:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(72791);const n=()=>{const e=["year","month","week"],[t,a]=(0,r.useState)(e[0]);return{period:t,periods:e,setPeriod:a,setPeriodIndex:t=>a(e[t])}}},52860:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var r=a(57689),n=a(39314),o=a(28789),s=a(14161),i=a(13630);const l=o.ZP.div`
  height: 100%;

  .tab-content, .tab-pane, .wrapper {
    height: 100%;
  }
`,c=o.ZP.span`
  cursor: pointer;
  position: absolute;
  right: 24px;
  z-index: 10;
  transition: .3s ease-in-out;

  &:hover, &:focus {
    color: ${s.O9.blue};
  }
`,d=o.ZP.div`
  height: 100%;
  ${s.fU.col};
  gap: 14px;
  justify-content: space-between;
  align-items: center;

  .chart_content {
    position: relative;
    margin: auto;
    justify-self: center;
  }
`,p=o.ZP.div`
  display: flex;
  ${s.fU.center};
  width: fit-content;
  margin: 0 auto;
  position: relative;
  height: 590px;

  img {
    width: auto;
    height: 100%;
  }
`,h=o.ZP.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,u=o.ZP.div`
  position: absolute;

  &[data-spot="head_front"],
  &[data-spot="neck_front"],
  &[data-spot="stomach_front"],
  &[data-spot="back_back"],
  &[data-spot="lungs_back"] {
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-spot="head_front"] {
    top: 0;
  }

  &[data-spot="neck_front"] {
    top: 100px;
  }

  &[data-spot="chest_front"] {
    top: 130px;
    left: 80px;
  }

  &[data-spot="heart_front"] {
    top: 160px;
    right: 80px;
  }

  &[data-spot="stomach_front"] {
    top: 220px;
  }

  &[data-spot="left_arm_front"],
  &[data-spot="right_arm_front"] {
    top: 240px;
  }

  &[data-spot="left_arm_front"] {
    left: 40px;
  }

  &[data-spot="right_arm_front"] {
    right: 40px;
  }

  &[data-spot="left_leg_front"],
  &[data-spot="right_leg_front"] {
    top: 360px;
  }

  &[data-spot="left_leg_front"] {
    left: 80px;
  }

  &[data-spot="right_leg_front"] {
    right: 80px;
  }

  &[data-spot="back_back"] {
    top: 240px;
  }

  &[data-spot="left_shoulder_back"],
  &[data-spot="right_shoulder_back"] {
    top: 130px;
  }

  &[data-spot="left_shoulder_back"] {
    left: 60px;
  }

  &[data-spot="right_shoulder_back"] {
    right: 60px;
  }

  &[data-spot="lungs_back"] {
    top: 200px;
  }

  &[data-spot="left_ankle_back"],
  &[data-spot="right_ankle_back"] {
    bottom: 20px;
  }

  &[data-spot="left_ankle_back"] {
    left: 85px;
  }

  &[data-spot="right_ankle_back"] {
    right: 85px;
  }

  input {
    display: none;

    &:checked + label {
      opacity: 1;

      .aura:before {
        animation-play-state: running;
      }
    }
  }

  label {
    display: block;
    background-color: ${s.O9.absolute_red};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transition: .3s ease-in-out;
    position: relative;
    z-index: 2;
    opacity: .4;

    &:hover, &:focus {
      opacity: 1;
    }

    .aura {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: ${s.O9.absolute_red};
        transform: translate3d(0, 0, 0);
        animation: ${i.sd} 3s ease-in-out infinite;
        animation-play-state: paused;
      }
    }
  }
`;var g=a(249),x=a(66150),m=a(20760),f=a(19640),b=a(8281),v=a(75700),k=a(74223),j=a(80184);const y=(0,k.Z)((0,j.jsx)("path",{d:"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5"}),"ThreeSixty");var Z=a(21119),_=a(3748),$=a(72791);const w=a.p+"static/media/male_front.e960015cf12eff3b095a0eaba96b8dfa.svg";const P=a.p+"static/media/male_back.edf5a12e7ea5b7cafa0149355303524c.svg";const N=a.p+"static/media/female_front.50eea7dffdf3ad63f95e6a84f19f7877.svg";const O=a.p+"static/media/female_back.f3fcf47c07bcc019c0b3d6f3ccc4b0d2.svg";var R=a(63245);const C=e=>{let{gender:t}=e;const[a,r]=(0,$.useState)(!0),[n,o]=(0,$.useState)(!1),{notify:s}=(0,R.Z)("Your request have been successfully sent to your doctor.","info"),i=(e,t,a)=>e.map((e=>{const{id:r,label:n}=e,o=`${a}_${r}_${t}`;return(0,j.jsxs)(u,{"data-spot":`${r}_${t}`,children:[(0,j.jsx)("input",{type:"checkbox",id:o,name:o}),(0,j.jsx)(_.Z,{title:n,placement:"bottom",children:(0,j.jsx)("label",{htmlFor:o,children:(0,j.jsx)("span",{className:"aura"})})})]},o)}));return(0,j.jsxs)("div",{className:"wrapper",children:[(0,j.jsx)(c,{tabIndex:"0",onClick:()=>r((e=>!e)),"aria-label":"Change view",children:(0,j.jsx)(y,{})}),(0,j.jsxs)(d,{as:"form",onChange:e=>(e=>{const t=Array.from(e.currentTarget.querySelectorAll('input[type="checkbox"]')).some((e=>e.checked));o(t)})(e),onSubmit:e=>(e=>{e.preventDefault(),e.target.reset(),o(!1),s()})(e),children:[(0,j.jsx)("div",{className:"chart_content",children:a?(0,j.jsxs)(p,{side:"front",children:[(0,j.jsx)("img",{className:`${t} front`,src:"male"===t?w:N,alt:"Body chart"}),(0,j.jsx)(h,{children:i([{id:"head",label:"Head"},{id:"neck",label:"Neck"},{id:"chest",label:"Chest"},{id:"stomach",label:"Stomach"},{id:"heart",label:"Heart"},{id:"left_arm",label:"Left Arm"},{id:"right_arm",label:"Right Arm"},{id:"left_leg",label:"Left Leg"},{id:"right_leg",label:"Right Leg"}],"front",t)})]}):(0,j.jsxs)(p,{side:"back",children:[(0,j.jsx)("img",{className:`${t} back`,src:"male"===t?P:O,alt:"Body chart"}),(0,j.jsx)(h,{children:i([{id:"back",label:"Back"},{id:"left_shoulder",label:"Left Shoulder"},{id:"right_shoulder",label:"Right Shoulder"},{id:"lungs",label:"Lungs"},{id:"left_ankle",label:"Left Ankle"},{id:"right_ankle",label:"Right Ankle"}],"back",t)})]})}),(0,j.jsx)(Z.Z,{className:n?"":"disabled",text:"Submit request",type:"submit"})]})]})},z=()=>{const[e,t]=(0,$.useState)("male");return(0,j.jsxs)(g.Z,{name:"PainLocation",children:[(0,j.jsx)(x.Z,{title:"Location of pain",flex:"column",children:(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(b.Z,{className:"male"===e?"active":"",eventKey:"male",title:"Male",handler:()=>t("male")}),(0,j.jsx)(b.Z,{className:"female"===e?"active":"",eventKey:"female",title:"Female",handler:()=>t("female")})]})}),(0,j.jsx)(m.Z,{children:(0,j.jsx)(l,{children:(0,j.jsx)(v.Z.Container,{activeKey:e,transition:!0,children:(0,j.jsxs)(v.Z.Content,{children:[(0,j.jsx)(v.Z.Pane,{eventKey:"male",children:(0,j.jsx)(C,{gender:"male"})}),(0,j.jsx)(v.Z.Pane,{eventKey:"female",children:(0,j.jsx)(C,{gender:"female"})})]})})})})]})};var S=a(96726);a(47242),a(36038),a(22426),a(94397);a(82243);var F=a(19889),H=a(25053),U=a(75406),L=a(28145);const q=()=>{var e;const t=null===(e=(0,r.TH)().state)||void 0===e?void 0:e.data;return console.log(t),(0,j.jsxs)(n.Z,{title:"Dashboard",children:[t&&(0,j.jsxs)("div",{children:[(0,j.jsxs)("h2",{children:["Patient: ",t.name]}),(0,j.jsxs)("p",{children:["Age: ",t.age]}),(0,j.jsxs)("p",{children:["Diagnosis: ",t.diagnosis]})]}),(0,j.jsx)("div",{children:(0,j.jsx)(z,{})},"pain-location"),(0,j.jsx)("div",{children:(0,j.jsx)(S.Z,{})},"daily-app-chart"),(0,j.jsx)("div",{children:(0,j.jsx)(H.Z,{})},"hepatitis"),(0,j.jsx)("div",{children:(0,j.jsx)(F.Z,{variant:"large"})},"payments-history"),(0,j.jsx)("div",{children:(0,j.jsx)(L.Z,{})},"patients-radial"),(0,j.jsx)("div",{children:(0,j.jsx)(U.Z,{})},"recent-tests")]})}},13630:(e,t,a)=>{a.d(t,{Ji:()=>i,So:()=>s,dC:()=>n,sd:()=>o});var r=a(28789);const n=r.F4`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: linear;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: linear;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: linear;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: linear;
  }
  45% {
    transform: scale(1);
    animation-timing-function: linear;
  }
`,o=r.F4`
  0% {
    opacity: 1;
    transform: scale(0);
  }
  90% {
    opacity: .3;
  }
  to {
    opacity: .1;
    transform: scale(1);
  }
`,s=r.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,i=r.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;r.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`},25053:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(249),n=a(66150),o=a(90004),s=a(20760),i=a(28789),l=a(14161);const c=i.ZP.ul`
  gap: 22px;
  margin-top: 20px;
  ${l.fU.col}
`,d=i.ZP.div`
  display: flex;
  ${l.fU.between}
  margin-bottom: 7px;
  font-size: ${l.iH[14]};
`,p=i.ZP.div`
  display: flex;
  gap: 4px;
  font-family: ${l.Rq.accent};
  
  .num {
    font-weight: 500;
  }
  & + .label {
    text-transform: capitalize;
  }
`;var h=a(33926),u=a(80184);const g=e=>{let{data:t,period:a}=e;const{label:r}=t,n=t[a].progress,o=t[a].goal;return(0,u.jsxs)("li",{children:[(0,u.jsxs)(d,{children:[(0,u.jsxs)(p,{children:[(0,u.jsx)("span",{className:"num",children:n})," of",(0,u.jsx)("span",{className:"num",children:o})]}),(0,u.jsx)("span",{className:"label",children:r})]}),(0,u.jsx)("div",{className:"confirmed_list-item_visualizer",children:(0,u.jsx)(h.Z,{color:l.kf[r],value:(s=n,s/(o/100))})})]});var s},x=e=>{let{data:t,period:a,short:r=!1}=e;return(0,u.jsx)(c,{children:t.map((e=>{const{label:t}=e;return r&&"diabetes"===t?null:(0,u.jsx)(g,{data:e,period:a},t)}))})};var m=a(80879),f=a(17350),b=a(54561);const v=[{label:"cold",year:{progress:648,goal:751},month:{progress:53,goal:104},week:{progress:18,goal:36}},{label:"fracture",year:{progress:215,goal:651},month:{progress:90,goal:142},week:{progress:13,goal:58}},{label:"concussion",year:{progress:84,goal:120},month:{progress:31,goal:87},week:{progress:11,goal:43}},{label:"hepatitis",year:{progress:804,goal:846},month:{progress:358,goal:501},week:{progress:182,goal:330}},{label:"dermatitis",year:{progress:458,goal:901},month:{progress:215,goal:354},week:{progress:130,goal:261}},{label:"diabetes",year:{progress:302,goal:514},month:{progress:187,goal:298},week:{progress:74,goal:105}}],k=e=>{let{nav:t}=e;const{period:a,periods:i,setPeriod:l}=(0,f.Z)(),{index:c,navigate:d}=(0,b.Z)(i);return(0,u.jsxs)(r.Z,{name:"ConfirmedDiagnosesTabs",children:["tabs"===t?(0,u.jsx)(n.Z,{title:"Confirmed Diagnoses",style:{paddingBottom:16}}):(0,u.jsx)(o.Z,{title:"Confirmed Diagnoses",handler:d,style:{paddingBottom:8}}),(0,u.jsxs)(s.Z,{style:{paddingBottom:26},children:["tabs"===t&&(0,u.jsx)(m.Z,{current:a,handler:l}),(0,u.jsx)(x,{short:"tabs"===t,period:"tabs"===t?a:i[c],data:v})]})]})}},96726:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(249),n=a(66150),o=a(20760),s=a(92889),i=a(70475),l=a(43970),c=a(80184);const d=()=>(0,c.jsxs)(r.Z,{name:"DailyAppointmentChart",shadow:!0,children:[(0,c.jsx)(n.Z,{title:"Daily appointments"}),(0,c.jsxs)(o.Z,{style:{justifyContent:"space-between"},children:[(0,c.jsx)(s.Z,{}),(0,c.jsx)(i.Z,{data:[{label:"9am",values:{consultation:10,test:25,checkup:10,sick:20}},{label:"10am",values:{consultation:5,test:41,sick:12}},{label:"11am",values:{consultation:45,test:18}},{label:"12am",values:{consultation:22,checkup:42}},{label:"1pm",values:{consultation:5,checkup:35}},{label:"2pm",values:{consultation:10,test:20,checkup:25}},{label:"3pm",values:{consultation:25,sick:40}},{label:"4pm",values:{consultation:20,test:30,sick:5}},{label:"5pm",values:{consultation:15,checkup:50,sick:10}}],as:l.Z})]})]})},19889:(e,t,a)=>{a.d(t,{Z:()=>x});var r=a(14161),n=a(28789),o=a(65484),s=a.n(o),i=a(13630),l=a(25606);const c=s()("theme",{light:(0,l.m4)(r.O9.light_gray,.5),dark:(0,l.m4)(r.O9.dark,.5)}),d=n.ZP.div`
  display: flex;
  align-items: center;
  color: ${r.O9.absolute_red};
  margin: 24px 24px 0;
  font-family: ${r.Rq.accent};

  .h1 {
    line-height: .9;
    margin-right: 8px;
    flex-grow: unset;
  }

  .icon {
    font-size: ${r.iH[20]};
    margin-right: 10px;
    animation: ${i.dC} 3s linear infinite;
    transition: all .5s;
    will-change: transform;
  }

  .text {
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 2px;
    font-size: ${r.iH[10]};
    color: ${s()("theme",{light:r.R2.text,dark:r._4.text})};
  }
`,p=n.ZP.div`
  height: 100%;
  background-size: 20px 20px;
  background-image: linear-gradient(to right, ${c} 1px, transparent 1px),
  linear-gradient(to bottom, ${c} 1px, transparent 1px);
  position: relative;
  ${r.fU.col};
  justify-content: center;
  margin-top: -4px;

  &:before, &:after {
    content: '';
    display: block;
    height: 80px;
    position: absolute;
    width: 100%;;
    background: ${s()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
    left: 0;
    z-index: 300;
    opacity: .8;
  }

  &:before {
    top: 0;
    transform: scaleY(-1);
  }

  &:after {
    bottom: 0;
  }
`;var h=a(249),u=a(69690),g=a(80184);const x=()=>(0,g.jsxs)(h.Z,{name:"HeartRate",children:[(0,g.jsxs)(d,{children:[(0,g.jsx)("i",{className:"icon icon-heart"}),(0,g.jsx)("span",{className:"h1",children:"94"}),(0,g.jsx)("span",{className:"text",children:"bpm"})]}),(0,g.jsx)(p,{children:(0,g.jsx)(u.Z,{color:r.O9.absolute_red,beatFrequency:1500,density:1,scale:30,height:278})})]})},28145:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(28789),n=a(14161),o=a(249),s=a(90004),i=a(20760),l=a(47242),c=a(36038),d=a(54875),p=a(97741),h=a(71827),u=a(22426),g=a(54561),x=a(17350),m=a(72791),f=a(80184);const b=r.ZP.div`
  ${n.fU.col};
  ${n.fU.between};
  height: 100%;
`,v=()=>{const[e,t]=(0,m.useState)(null),{theme:a}=(0,r.Fg)(),{periods:v}=(0,x.Z)(),{index:k,navigate:j}=(0,g.Z)(v),y=[{name:"0-9",values:[8,5,10],fill:n.O9.green,label:"green"},{name:"10-16",values:[10,7,12],fill:n.O9.peach,label:"peach"},{name:"17-24",values:[9,15,13],fill:n.O9.azure,label:"azure"},{name:"25-30",values:[14,8,15],fill:n.O9.purple,label:"purple"},{name:"31-40",values:[13,7,15],fill:n.O9.pink,label:"pink"}];return(0,f.jsxs)(o.Z,{name:"PatientsPolarPie",children:[(0,f.jsx)(s.Z,{handler:j,title:"Patients age"}),(0,f.jsx)(i.Z,{children:(0,f.jsxs)(b,{children:[(0,f.jsxs)(d.B,{innerRadius:"10%",outerRadius:"100%",barSize:8,data:y,width:265,height:265,children:[(0,f.jsx)(p.G,{minAngle:15,background:{fill:"light"===a?n.O9.light_gray:n.O9.dark},clockWise:!0,dataKey:`values[${k}]`,onMouseOver:()=>t(`values[${k}]`)}),(0,f.jsx)(h.u,{cursor:!1,content:(0,f.jsx)(u.Z,{tooltip:e})})]}),(0,f.jsx)(l.Z,{children:y.map((e=>(0,f.jsx)(c.Z,{color:e.label,legend:e.name},e.name)))})]})})]})}}}]);
//# sourceMappingURL=2860.42442a82.chunk.js.map