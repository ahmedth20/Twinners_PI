"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[8507],{39314:(e,t,i)=>{i.d(t,{Z:()=>A});var r=i(28789),o=i(14161);const n=r.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${o.AV.tablet} {
    padding: 20px 30px 30px;
    ${o.fU.col};
  }

  ${o.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,a=r.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,s=r.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${o.AV.laptopL} {
    margin-top: 40px;
  }

  ${o.AV.desktop} {
    flex-direction: row;
    ${o.fU.between};
  }
`,d=r.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,l=r.ZP.div`
  ${o.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=i(85335),p=i(59242),u=i(54270),x=i(44165),h=i(73457),g=i(10586),m=i(79591),b=i(59434),f=i(74037),y=i(94397),v=i(80184);const j=(0,g.withSize)()((0,h.WidthProvider)(h.Responsive)),w=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,k=e=>{let{layouts:t,children:i,id:r,desktop:o}=e;const{isLayoutEditable:n,fontScale:a}=(0,m.jt)(),s=(0,b.I0)(),d=(0,y.Z)().width<768;return(0,v.jsx)(v.Fragment,{children:d?(0,v.jsx)(w,{children:i}):(0,v.jsx)(j,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===a?182:182+11*a,isDraggable:n,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:o?e=>{n&&(s((0,f.fc)({id:r,layouts:e})),s((0,f.m8)()))}:void 0,children:i})})};var P=i(34909),Z=i(62773),C=i.n(Z),S=i(57689),$=i(72791);const A=e=>{let{title:t,children:i,hasBadge:r,hasTitle:o=!0,qty:h}=e;const g=(0,$.useRef)(null),m=C()(),{width:f}=(0,y.Z)(),j=f>767.98,{pathname:w}=(0,S.TH)(),Z=w.includes("dashboard"),A=w.replace("/",""),F=(0,b.v9)((e=>e.layout.layout))[A];return(0,$.useEffect)((()=>{g.current&&(g.current.scrollTop=0)}),[w]),(0,v.jsxs)(n,{ref:g,children:[(0,v.jsx)(u.q,{children:(0,v.jsx)("title",{children:`Smart190 | ${t}`})}),(0,v.jsxs)(l,{children:[(0,v.jsxs)(s,{as:P.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[o&&(0,v.jsxs)(a,{children:[t," ",r&&h&&h>0&&(0,v.jsxs)(c.GS,{children:["+",h]})]}),j&&(0,v.jsxs)(d,{children:[m.isDesktop()&&(0,v.jsxs)(v.Fragment,{children:[Z&&(0,v.jsx)(p.t,{children:(0,v.jsx)(x.XO,{})}),(0,v.jsx)(p.t,{children:(0,v.jsx)(x.ot,{})})]}),(0,v.jsx)(p.t,{children:(0,v.jsx)(x.t7,{})}),(0,v.jsx)(p.t,{children:(0,v.jsx)(x.zj,{})}),(0,v.jsx)(p.t,{children:(0,v.jsx)(x.vm,{})}),(0,v.jsx)(p.t,{children:(0,v.jsx)(x.jf,{})})]})]}),F?(0,v.jsx)(k,{id:A,layouts:F,desktop:m.isDesktop(),children:i}):i]})]})}},58507:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var r=i(72791),o=i(39314),n=i(12903),a=i(80184);const s={paramedicListContainer:{padding:"20px",backgroundColor:"#f4f7f6",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},table:{width:"100%",borderCollapse:"collapse",marginTop:"20px"},th:{padding:"12px 20px",textAlign:"left",backgroundColor:"#2196F3",color:"white",fontWeight:"bold"},td:{padding:"12px 20px",textAlign:"left"},evenRow:{backgroundColor:"#f2f2f2"},hoverRow:{backgroundColor:"#ddd",cursor:"pointer"},loading:{color:"red",fontSize:"18px",fontWeight:"bold"},error:{color:"red",fontSize:"18px",fontWeight:"bold"},title:{color:"#333",fontSize:"24px",fontWeight:"bold",marginBottom:"20px"},button:{padding:"8px 16px",margin:"5px",border:"none",borderRadius:"4px",cursor:"pointer"},editButton:{backgroundColor:"#4CAF50",color:"white"},deleteButton:{backgroundColor:"#f44336",color:"white"},form:{marginBottom:"20px",padding:"10px",backgroundColor:"#fff",borderRadius:"8px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},input:{padding:"8px",margin:"10px 0",width:"100%",border:"1px solid #ddd",borderRadius:"4px"}},d=()=>{const[e,t]=(0,r.useState)([]),[i,o]=(0,r.useState)([]),[d,l]=(0,r.useState)(!0),[c,p]=(0,r.useState)(null),[u,x]=(0,r.useState)(""),[h,g]=(0,r.useState)(""),[m,b]=(0,r.useState)({function:"",ambulance:"",patientsFile:"",user:""}),[f,y]=(0,r.useState)(!1);(0,r.useEffect)((()=>{v()}),[]),(0,r.useEffect)((()=>{let t=e;u&&(t=e.filter((e=>JSON.stringify(e).toLowerCase().includes(u.toLowerCase())))),h&&(t=t.filter((e=>{var t;return(null===(t=e.function)||void 0===t?void 0:t.toLowerCase())===h.toLowerCase()}))),o(t)}),[u,h,e]);const v=async()=>{try{const e=await fetch("http://localhost:5000/paramedics/paramedics");if(!e.ok)throw new Error(`Erreur HTTP: ${e.status}`);const i=await e.json();t(i),o(i)}catch(e){p(e.message),console.error("Erreur fetch:",e)}finally{l(!1)}},j=e=>{const{name:t,value:i}=e.target;b((e=>({...e,[t]:i})))};if(d)return(0,a.jsx)("div",{style:s.loading,children:"Chargement..."});if(c)return(0,a.jsxs)("div",{style:s.error,children:["Erreur: ",c]});new Set(e.map((e=>e.function)).filter(Boolean));return(0,a.jsxs)("div",{style:s.paramedicListContainer,children:[(0,a.jsx)("h2",{style:s.title,children:"Liste des Param\xe9dics"}),(0,a.jsx)("button",{style:{...s.button,backgroundColor:"#2196F3"},onClick:()=>y(!f),children:f?"Annuler":"Ajouter un param\xe9dic"}),f&&(0,a.jsxs)("div",{style:s.form,children:[(0,a.jsx)("h3",{children:m._id?"Modifier un param\xe9dic":"Ajouter un param\xe9dic"}),(0,a.jsx)("input",{style:s.input,type:"text",name:"function",value:m.function,onChange:j,placeholder:"Fonction"}),(0,a.jsx)("input",{style:s.input,type:"text",name:"ambulance",value:m.ambulance,onChange:j,placeholder:"Ambulance ID"}),(0,a.jsx)("input",{style:s.input,type:"text",name:"patientsFile",value:m.patientsFile,onChange:j,placeholder:"Fichiers des patients (s\xe9par\xe9s par des virgules)"}),(0,a.jsx)("input",{style:s.input,type:"text",name:"user",value:m.user,onChange:j,placeholder:"Utilisateur ID"}),(0,a.jsx)("button",{style:{...s.button,backgroundColor:"#2196F3"},onClick:m._id?async()=>{const{_id:e,function:i,ambulance:r,patientsFile:o,user:a}=m,s={function:i,ambulance:r,patientsFile:o.split(",").map((e=>e.trim())),user:a};try{const i=await n.Z.put(`http://localhost:5000/paramedics/paramedics/${e}`,s);console.log("Paramedic mis \xe0 jour:",i.data),t((t=>t.map((t=>t._id===e?i.data:t)))),y(!1),b({function:"",ambulance:"",patientsFile:[],user:""})}catch(c){var d;console.error("Erreur lors de la mise \xe0 jour du param\xe9dic:",(null===(d=c.response)||void 0===d?void 0:d.data)||c.message)}}:async()=>{const{function:e,ambulance:i,patientsFile:r,user:o}=m,a={function:e,ambulance:i,patientsFile:r.split(",").map((e=>e.trim())),user:o};try{const e=await n.Z.post("http://localhost:5000/paramedics",a);console.log("Paramedic cr\xe9\xe9:",e.data),t((t=>[...t,e.data])),b({function:"",ambulance:"",patientsFile:[],user:""})}catch(c){var s;console.error("Erreur lors de l'ajout du param\xe9dic:",(null===(s=c.response)||void 0===s?void 0:s.data)||c.message)}},children:m._id?"Mettre \xe0 jour":"Ajouter Param\xe9dic"})]}),(0,a.jsxs)("table",{style:s.table,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{style:s.th,children:"Nom"}),(0,a.jsx)("th",{style:s.th,children:"Service"}),(0,a.jsx)("th",{style:s.th,children:"Fonction"}),(0,a.jsx)("th",{style:s.th,children:"Actif"}),(0,a.jsx)("th",{style:s.th,children:"Actions"})]})}),(0,a.jsx)("tbody",{children:i.length>0?i.map(((i,r)=>(0,a.jsxs)("tr",{style:{...s.td,...r%2===0?s.evenRow:{}},children:[(0,a.jsx)("td",{style:s.td,children:i.user?`${i.user.firstName} ${i.user.lastName}`:"Inconnu"}),(0,a.jsx)("td",{style:s.td,children:i.serviceParamedic}),(0,a.jsx)("td",{style:s.td,children:i.function}),(0,a.jsx)("td",{style:s.td,children:i.isActive?"Oui":"Non"}),(0,a.jsxs)("td",{style:s.td,children:[(0,a.jsx)("button",{style:{...s.button,...s.editButton,backgroundColor:"#808080"},onClick:()=>(async t=>{const i=e.find((e=>e._id===t));i&&(b({_id:i._id,function:i.function,ambulance:i.ambulance,patientsFile:i.patientsFile.join(", "),user:i.user}),y(!0))})(i._id),children:"Modifier"}),(0,a.jsx)("button",{style:{...s.button,...s.deleteButton},onClick:()=>{return r=i._id,console.log("Supprimer param\xe9dic avec ID:",r),void fetch(`http://localhost:5000/paramedics/paramedics/${r}`,{method:"DELETE"}).then((i=>{if(!i.ok)throw new Error(`Erreur HTTP: ${i.status}`);t(e.filter((e=>e._id!==r)))})).catch((e=>{p("Erreur lors de la suppression"),console.error("Erreur delete:",e)}));var r},children:"Supprimer"}),i.isActive?(0,a.jsx)("button",{style:{...s.button,backgroundColor:"#D3D3D3 "},onClick:()=>(async e=>{try{const i=await n.Z.put(`http://localhost:5000/paramedics/paramedics/${e}`,{isActive:!1});console.log("Paramedic deactivated:",i.data),t((t=>t.map((t=>t._id===e?{...t,isActive:!1}:t))))}catch(c){console.error("Erreur d\xe9sactivation param\xe9dic:",c.message)}})(i._id),children:"D\xe9sactiver"}):(0,a.jsx)("button",{style:{...s.button,backgroundColor:"#D3D3D3"},onClick:()=>(async e=>{try{const i=await n.Z.put(`http://localhost:5000/paramedics/paramedics/${e}`,{isActive:!0});console.log("Paramedic activated:",i.data),t((t=>t.map((t=>t._id===e?{...t,isActive:!0}:t))))}catch(c){console.error("Erreur activation param\xe9dic:",c.message)}})(i._id),children:"Activer"})]})]},i._id))):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:"5",style:s.td,children:"Aucun param\xe9dic trouv\xe9"})})})]})]})};var l=i(28789);l.F4`
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
`;const c=l.vJ`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
`,p=l.ZP.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 10px;
`,u=l.ZP.button`
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
`,x=((0,l.ZP)(u)`
  && {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 10px;
    &:hover {
      background-color: #0056b3;
    }
  }
`,l.ZP.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8000;
`,l.ZP.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  position: relative;
  text-align: center;
`,l.ZP.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`,l.ZP.h1`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3px;
  margin-top: 7px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`,l.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,l.ZP.div`
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
`,l.ZP.div`
  height: 4px;
  width: 300px;
  background: #e5e7eb;
  margin: 0 0px;
`,l.ZP.form`
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
`,l.ZP.label`
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
`,l.ZP.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`,l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,l.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`,l.ZP.button`
  padding: 10px 20px;
  background-color: #ccc;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
`,l.ZP.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #1d4ed8;
  }
`,l.ZP.button`
  padding: 12px 24px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkgreen;
  }
`,l.ZP.div`
  filter: ${e=>e.isOpen?"blur(3px)":"none"};
  pointer-events: ${e=>e.isOpen?"none":"auto"};
`,l.ZP.select`
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
`,l.ZP.h2`
 font-size: 19px;
  text-align: center;
  margin-bottom: 10px;
   justify-content: center;
  align-items: center;
  margin-left: 30px;
`,()=>{const[e,t]=(0,r.useState)(1),[i,n]=(0,r.useState)(!1),[s,l]=(0,r.useState)({serviceParamedic:"",ambulance:"",patientsFile:"",user:""});(0,r.useEffect)((()=>{}),[]);return(0,a.jsxs)(o.Z,{title:"Paramedic List",children:[(0,a.jsx)(c,{}),(0,a.jsx)(p,{}),(0,a.jsx)(d,{})]})})}}]);
//# sourceMappingURL=8507.7e471602.chunk.js.map