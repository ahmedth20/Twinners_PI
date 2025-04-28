"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[5367],{75367:(e,s,r)=>{r.r(s),r.d(s,{default:()=>y});var a=r(39314),l=r(28789),o=r(249),t=r(66150),i=r(51899),n=r(21119),d=r(5507),c=r(49540),g=r(33312),p=r(30133),x=r(59434),h=r(72791),m=r(84483),j=r(80184);const u=l.ZP.div`
  padding: 2px 24px 22px 24px;
`,f=()=>{const e=(0,x.v9)((e=>e.todos.todos)),[s,r]=(0,h.useState)(!1),a=(0,h.useRef)(null),l=(0,h.useRef)(null),f=(0,h.useRef)(null),v=(0,m.Z)(a,l);return(0,h.useEffect)((()=>{f.current.scrollTo(0,0)}),[s]),(0,j.jsxs)(o.Z,{name:"TasksList",mobile:600,children:[(0,j.jsx)(t.Z,{title:"Tasks list",flex:"column",style:{paddingBottom:2},elRef:a,children:(0,j.jsx)(i.wp,{as:"div",style:{margin:"0 -22px"},children:(0,j.jsx)(d.Z,{})})}),(0,j.jsx)(p.Z,{height:v,children:(0,j.jsxs)("div",{className:"track",ref:f,style:{overflowY:s?"hidden":"auto"},children:[(0,j.jsx)(c.Z,{isVisible:s,visibilityHandler:r,variant:"list"}),0!==e.length?(0,j.jsx)(g.Z,{variant:"list"}):null]})}),(0,j.jsx)(u,{ref:l,children:(0,j.jsx)(n.Z,{text:"Add new task",handler:()=>r(!0)})})]})};var v=r(25053),b=r(30872),Z=r(96027);const y=()=>(0,j.jsxs)(a.Z,{title:"Doctor Dashboard",children:[(0,j.jsx)("div",{children:(0,j.jsx)(f,{})},"task-list"),(0,j.jsx)("div",{children:(0,j.jsx)(v.Z,{nav:"arrows"})},"confirmed"),(0,j.jsx)("div",{children:(0,j.jsx)(b.Z,{variant:"rays"})},"diagnoses-donut"),(0,j.jsx)("div",{children:(0,j.jsx)(Z.Z,{})},"radar")]})},25053:(e,s,r)=>{r.d(s,{Z:()=>b});var a=r(249),l=r(66150),o=r(90004),t=r(20760),i=r(28789),n=r(14161);const d=i.ZP.ul`
  gap: 22px;
  margin-top: 20px;
  ${n.fU.col}
`,c=i.ZP.div`
  display: flex;
  ${n.fU.between}
  margin-bottom: 7px;
  font-size: ${n.iH[14]};
`,g=i.ZP.div`
  display: flex;
  gap: 4px;
  font-family: ${n.Rq.accent};
  
  .num {
    font-weight: 500;
  }
  & + .label {
    text-transform: capitalize;
  }
`;var p=r(33926),x=r(80184);const h=e=>{let{data:s,period:r}=e;const{label:a}=s,l=s[r].progress,o=s[r].goal;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(c,{children:[(0,x.jsxs)(g,{children:[(0,x.jsx)("span",{className:"num",children:l})," of",(0,x.jsx)("span",{className:"num",children:o})]}),(0,x.jsx)("span",{className:"label",children:a})]}),(0,x.jsx)("div",{className:"confirmed_list-item_visualizer",children:(0,x.jsx)(p.Z,{color:n.kf[a],value:(t=l,t/(o/100))})})]});var t},m=e=>{let{data:s,period:r,short:a=!1}=e;return(0,x.jsx)(d,{children:s.map((e=>{const{label:s}=e;return a&&"diabetes"===s?null:(0,x.jsx)(h,{data:e,period:r},s)}))})};var j=r(80879),u=r(17350),f=r(54561);const v=[{label:"cold",year:{progress:648,goal:751},month:{progress:53,goal:104},week:{progress:18,goal:36}},{label:"fracture",year:{progress:215,goal:651},month:{progress:90,goal:142},week:{progress:13,goal:58}},{label:"concussion",year:{progress:84,goal:120},month:{progress:31,goal:87},week:{progress:11,goal:43}},{label:"hepatitis",year:{progress:804,goal:846},month:{progress:358,goal:501},week:{progress:182,goal:330}},{label:"dermatitis",year:{progress:458,goal:901},month:{progress:215,goal:354},week:{progress:130,goal:261}},{label:"diabetes",year:{progress:302,goal:514},month:{progress:187,goal:298},week:{progress:74,goal:105}}],b=e=>{let{nav:s}=e;const{period:r,periods:i,setPeriod:n}=(0,u.Z)(),{index:d,navigate:c}=(0,f.Z)(i);return(0,x.jsxs)(a.Z,{name:"ConfirmedDiagnosesTabs",children:["tabs"===s?(0,x.jsx)(l.Z,{title:"Confirmed Diagnoses",style:{paddingBottom:16}}):(0,x.jsx)(o.Z,{title:"Confirmed Diagnoses",handler:c,style:{paddingBottom:8}}),(0,x.jsxs)(t.Z,{style:{paddingBottom:26},children:["tabs"===s&&(0,x.jsx)(j.Z,{current:r,handler:n}),(0,x.jsx)(m,{short:"tabs"===s,period:"tabs"===s?r:i[d],data:v})]})]})}}}]);
//# sourceMappingURL=5367.422eb63e.chunk.js.map