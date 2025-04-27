"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[5262],{27137:(e,t,r)=>{r.d(t,{Z:()=>b});var a,n=r(28789),o=r(12332),i=r(72791);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(null,arguments)}function s(e,t){let{title:r,titleId:n,...o}=e;return i.createElement("svg",l({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},o),r?i.createElement("title",{id:n},r):null,a||(a=i.createElement("rect",{width:16,height:4,rx:2,fill:"currentColor"})))}const d=i.forwardRef(s);r.p;var c;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(null,arguments)}function h(e,t){let{title:r,titleId:a,...n}=e;return i.createElement("svg",u({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?i.createElement("title",{id:a},r):null,c||(c=i.createElement("rect",{x:.5,y:.5,width:15,height:3,rx:1.5,stroke:"currentColor"})))}const p=i.forwardRef(h);r.p;var g=r(13967),x=r(80184);const m=(0,n.ZP)(o.Z)({display:"flex !important",gap:4,marginTop:"-8px","& svg.empty":{color:"#A2C0D4"},"& svg.filled":{color:"#7ED321"}}),b=e=>{let{value:t}=e;const r=(0,g.Z)().direction;return(0,x.jsx)(m,{className:"styled-rating",initialRating:t,direction:r,emptySymbol:(0,x.jsx)(p,{className:"empty"}),fullSymbol:(0,x.jsx)(d,{className:"filled"}),readonly:!0})}},87025:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(28789),n=r(65484),o=r.n(n),i=r(14161),l=r(80184);const s=a.ZP.div`
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
`},20760:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(51899),n=r(80184);const o=e=>{let{children:t,style:r,sidePadding:o=!1,elRef:i,...l}=e;return(0,n.jsx)(a.uT,{ref:i,sidePadding:o,style:r,...l,children:t})}},57770:(e,t,r)=>{r.d(t,{U:()=>a,z:()=>n});const a=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],n=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},84628:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(72791);const n=e=>{const[t,r]=(0,a.useState)({value:"all",label:"All"});return{genderArr:t=>"all"===t.value?e:e.filter((e=>{var r;return(null===(r=e.sex)||void 0===r?void 0:r.toLowerCase())===t.value})),gender:t,setGender:r}}},75262:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var a=r(72791),n=r(1788),o=r(39314),i=r(51899),l=r(28789),s=r(65484),d=r.n(s),c=r(14161);(0,l.ZP)(i.Pz).withConfig({componentId:"sc-1sco7tk-0"})(["","{flex-direction:row;",";.gender{max-width:300px;}}"],c.AV.tablet,c.fU.between),l.ZP.ul.withConfig({componentId:"sc-1sco7tk-1"})(["display:flex;margin:0 2px;gap:1px;height:80px;align-items:center;border-radius:8px;padding:0 18px;overflow-x:auto;background-color:",";"],d()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})),l.ZP.div.withConfig({componentId:"sc-1sco7tk-2"})(["overflow:hidden;border-radius:8px;position:relative;width:100%;&:before,&:after{content:'';position:absolute;top:0;background:",";height:100%;width:24px;z-index:1;filter:blur(1px);display:block;}&:before{left:2px;}&:after{right:2px;transform:scaleX(-1);}"],d()("theme",{light:c.R2.shadow,dark:c._4.shadowDarker})),l.ZP.a.withConfig({componentId:"sc-1sco7tk-3"})(["display:flex;",";width:44px;height:40px;text-transform:uppercase;color:",";border-radius:8px;background:",";transition:color var(--transition),background var(--transition);&:hover,&:focus{background-color:",";color:#fff;}&:not(&.active){pointer-events:none;background-color:transparent;color:",";}"],c.fU.center,c.O9.blue,d()("theme",{light:c.R2.widgetBg,dark:c._4.widgetBg}),c.O9.blue,d()("theme",{light:c.R2.text,dark:c._4.text}));var u=r(249),h=(r(20760),r(6378),r(2614),r(87025),r(48611),r(12625),r(74885),r(12903));const p="http://localhost:5000/serviceManager",g={getAllServiceManagers:async()=>{try{return(await h.Z.get(p)).data}catch(e){throw console.error("Erreur lors du chargement des service managers:",e),e}},getServiceManagerById:async e=>{try{return(await h.Z.get(`${p}/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du service manager:",t),t}},createServiceManager:async e=>{try{return(await h.Z.post(p,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du service manager:",t),t}},updateServiceManager:async(e,t)=>{try{return(await h.Z.put(`${p}/${e}`,t)).data}catch(r){throw console.error("Erreur lors de la mise \xe0 jour du service manager:",r),r}},deleteServiceManager:async e=>{try{await h.Z.delete(`${p}/${e}`)}catch(t){throw console.error("Erreur lors de la suppression du service manager:",t),t}}};var x=r(80184);l.ZP.ul.withConfig({componentId:"sc-1ykg4z5-0"})(["",";gap:20px;margin:20px;"],c.fU.col);r(83687),r(36862),r(57408),r(33926),r(27137),r(1705);r(25277);const m={paramedicListContainer:{padding:"20px",backgroundColor:"#f4f7f6",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},table:{width:"100%",borderCollapse:"collapse",marginTop:"20px"},th:{padding:"12px 20px",textAlign:"left",backgroundColor:"#2196F3",color:"white",fontWeight:"bold"},td:{padding:"12px 20px",textAlign:"left"},evenRow:{backgroundColor:"#f2f2f2"},button:{padding:"8px 16px",margin:"5px",border:"none",borderRadius:"4px",cursor:"pointer"},editButton:{backgroundColor:"#4CAF50",color:"white"},deleteButton:{backgroundColor:"#f44336",color:"white"},modalOverlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center"},modalContent:{backgroundColor:"white",padding:"20px",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",minWidth:"400px"},closeButton:{float:"right",cursor:"pointer",fontSize:"20px",fontWeight:"bold",color:"#333",border:"none",background:"none"},input:{width:"100%",padding:"8px",margin:"10px 0",border:"1px solid #ddd",borderRadius:"4px"},submitButton:{width:"100%",backgroundColor:"#4CAF50",color:"white",padding:"10px",border:"none",borderRadius:"4px",cursor:"pointer"}},b=()=>{console.log("sss");const[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(null),[o,i]=(0,a.useState)(!1),[l,s]=(0,a.useState)({firstName:"",lastName:"",email:"",badgeNumber:"",departement:""});(0,a.useEffect)((()=>{(async()=>{try{const e=await g.getAllServiceManagers();t(e)}catch(e){console.error("Failed to fetch patients",e)}})()}),[]);return(0,x.jsxs)("div",{style:m.paramedicListContainer,children:[(0,x.jsxs)("table",{style:m.table,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{style:m.th,children:"Nom"}),(0,x.jsx)("th",{style:m.th,children:"Pr\xe9nom"}),(0,x.jsx)("th",{style:m.th,children:"Email"}),(0,x.jsx)("th",{style:m.th,children:"Badge Number"}),(0,x.jsx)("th",{style:m.th,children:"D\xe9partement"}),(0,x.jsx)("th",{style:m.th,children:"Actions"})]})}),(0,x.jsx)("tbody",{children:e.length>0?e.map(((e,r)=>{var a,o,l;return(0,x.jsxs)("tr",{style:r%2===0?m.evenRow:{},children:[(0,x.jsx)("td",{style:m.td,children:(null===(a=e.user)||void 0===a?void 0:a.firstName)||"Inconnu"}),(0,x.jsx)("td",{style:m.td,children:(null===(o=e.user)||void 0===o?void 0:o.lastName)||"Inconnu"}),(0,x.jsx)("td",{style:m.td,children:(null===(l=e.user)||void 0===l?void 0:l.email)||"Inconnu"}),(0,x.jsx)("td",{style:m.td,children:e.badgeNumber}),(0,x.jsx)("td",{style:m.td,children:e.departement}),(0,x.jsxs)("td",{style:m.td,children:[(0,x.jsx)("button",{style:{...m.button,...m.editButton},onClick:()=>(e=>{var t,r,a;n(e),s({firstName:(null===(t=e.user)||void 0===t?void 0:t.firstName)||"",lastName:(null===(r=e.user)||void 0===r?void 0:r.lastName)||"",email:(null===(a=e.user)||void 0===a?void 0:a.email)||"",badgeNumber:e.badgeNumber||"",departement:e.departement||""}),i(!0)})(e),children:"Modifier"}),(0,x.jsx)("button",{style:{...m.button,...m.deleteButton},onClick:()=>(async e=>{try{await g.deleteServiceManager(e),t((t=>t.filter((t=>t._id!==e)))),window.location.reload()}catch(r){console.error("Erreur lors de la suppression",r)}})(e._id),children:"Supprimer"})]})]},e._id)})):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"6",style:m.td,children:"Aucun param\xe9dic trouv\xe9"})})})]}),o&&(0,x.jsx)("div",{style:m.modalOverlay,children:(0,x.jsxs)("div",{style:m.modalContent,children:[(0,x.jsx)("button",{style:m.closeButton,onClick:()=>i(!1),children:"\u2716"}),(0,x.jsx)("h2",{children:"Modifier le Service Manager"}),(0,x.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await g.updateServiceManager(r._id,l),setTimeout((()=>{i(!1),window.location.reload()}),500)}catch(t){console.error("Erreur lors de la mise \xe0 jour",t)}},children:[(0,x.jsx)("input",{type:"text",placeholder:"Pr\xe9nom",style:m.input,value:l.firstName,onChange:e=>s({...l,firstName:e.target.value})}),(0,x.jsx)("input",{type:"text",placeholder:"Nom",style:m.input,value:l.lastName,onChange:e=>s({...l,lastName:e.target.value})}),(0,x.jsx)("input",{type:"email",placeholder:"Email",style:m.input,value:l.email,onChange:e=>s({...l,email:e.target.value})}),(0,x.jsx)("button",{type:"submit",style:m.submitButton,children:"Mettre \xe0 jour"})]})]})})]})};r(84628);const f=()=>{(0,a.useRef)(null);const[e,t]=(0,a.useState)([]),[r,n]=(0,a.useState)(null),[o,i]=(0,a.useState)(null);return(0,x.jsx)(u.Z,{name:"servicemanagerlist",children:(0,x.jsx)(b,{})})};var v=r(34909),y=r(61134),w=r(80848),j=r(60874);const k=j.Ry({firstName:j.Z_().min(2,{message:"First Name is required (min 2 caract\xe8res)"}),lastName:j.Z_().min(2,{message:"Last Name is required (min 2 caract\xe8res)"}),email:j.Z_().email({message:"Invalid email format"}),badgeNumber:j.Z_().min(2,{message:"badgeNumber is required (min 2 caract\xe8res)"}),departement:j.Z_().min(2,{message:"departement is required (min 2 caract\xe8res)"})}),N=e=>{var t,r,o,i,l;let{isOpen:s,onClose:d}=e;const[c,u]=(0,a.useState)(1),{register:h,handleSubmit:p,formState:{errors:m}}=(0,y.cI)({resolver:(0,w.F)(k)});return s?(0,x.jsx)(n.ZA,{children:(0,x.jsxs)(n.hz,{as:v.E.div,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},children:[(0,x.jsx)(n.PZ,{onClick:d,children:"\u2716"}),(0,x.jsx)(n.Dx,{children:"Add NEW Service Manager"}),(0,x.jsx)(n.l0,{onSubmit:p((async e=>{try{await g.createServiceManager(e),alert("\u2705 Patient ajout\xe9 avec succ\xe8s !"),d()}catch(r){var t;alert("\u274c Erreur lors de l'ajout du patient."),console.error("D\xe9tails de l'erreur :",null===(t=r.response)||void 0===t?void 0:t.data)}})),children:1===c&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(n.vw,{children:"User Information"}),(0,x.jsxs)(n.Aq,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)(n.II,{type:"text",...h("firstName"),placeholder:"First Name"}),(0,x.jsx)(n.jj,{children:null===(t=m.firstName)||void 0===t?void 0:t.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.II,{type:"text",...h("lastName"),placeholder:"Last Name"}),(0,x.jsx)(n.jj,{children:null===(r=m.lastName)||void 0===r?void 0:r.message})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.II,{type:"text",...h("email"),placeholder:"Email"}),(0,x.jsx)(n.jj,{children:null===(o=m.email)||void 0===o?void 0:o.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.II,{...h("badgeNumber"),placeholder:"badgeNumber"}),(0,x.jsx)(n.jj,{children:null===(i=m.badgeNumber)||void 0===i?void 0:i.message})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)(n.II,{type:"text",...h("departement"),placeholder:"departement"}),(0,x.jsx)(n.jj,{children:null===(l=m.departement)||void 0===l?void 0:l.message})]}),(0,x.jsx)("div",{style:{marginTop:"11px"},children:(0,x.jsx)(n.Mm,{type:"submit",children:"Submit"})})]})})]})}):null};var $=r(57689);const C=()=>{const[e,t]=(0,a.useState)(!1),[r,i]=(0,a.useState)(!1),l=(0,$.s0)();return(0,x.jsxs)(o.Z,{title:"service manager List",children:[(0,x.jsx)(n.nz,{}),(0,x.jsx)(n.W2,{children:(0,x.jsx)(n.HS,{onClick:()=>i(!0),children:"+ Add new service manager"})}),e&&(0,x.jsx)(n.ZA,{children:(0,x.jsxs)(n.hz,{children:[(0,x.jsx)(n.PZ,{onClick:()=>t(!1),children:"\u2716"}),(0,x.jsx)("h2",{children:"Choose Patient Type"}),(0,x.jsxs)(n.hE,{children:[(0,x.jsx)(n.mH,{variant:"simple",onClick:()=>{t(!1),i(!0)},children:"Simple Patient"}),(0,x.jsx)(n.mH,{variant:"medical",onClick:()=>{t(!1),l("/medical_form")},children:"Patient with Medical Record"})]})]})}),(0,x.jsx)(N,{isOpen:r,onClose:()=>i(!1)}),(0,x.jsx)(n.LU,{isOpen:r||e,children:(0,x.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=5262.7ced86b9.chunk.js.map