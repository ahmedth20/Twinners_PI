"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[8841],{39314:(e,t,s)=>{s.d(t,{Z:()=>$});var r=s(28789),i=s(14161);const n=r.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${i.AV.tablet} {
    padding: 20px 30px 30px;
    ${i.fU.col};
  }

  ${i.AV.laptopL} {
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
`,o=r.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${i.AV.laptopL} {
    margin-top: 40px;
  }

  ${i.AV.desktop} {
    flex-direction: row;
    ${i.fU.between};
  }
`,d=r.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,l=r.ZP.div`
  ${i.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=s(85335),p=s(59242),h=s(54270),u=s(44165),m=s(73457),x=s(10586),g=s(79591),j=s(59434),v=s(74037),y=s(94397),b=s(80184);const f=(0,x.withSize)()((0,m.WidthProvider)(m.Responsive)),w=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,z=e=>{let{layouts:t,children:s,id:r,desktop:i}=e;const{isLayoutEditable:n,fontScale:a}=(0,g.jt)(),o=(0,j.I0)(),d=(0,y.Z)().width<768;return(0,b.jsx)(b.Fragment,{children:d?(0,b.jsx)(w,{children:s}):(0,b.jsx)(f,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===a?182:182+11*a,isDraggable:n,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:i?e=>{n&&(o((0,v.fc)({id:r,layouts:e})),o((0,v.m8)()))}:void 0,children:s})})};var P=s(34909),Z=s(62773),C=s.n(Z),N=s(57689),S=s(72791);const $=e=>{let{title:t,children:s,hasBadge:r,hasTitle:i=!0,qty:m}=e;const x=(0,S.useRef)(null),g=C()(),{width:v}=(0,y.Z)(),f=v>767.98,{pathname:w}=(0,N.TH)(),Z=w.includes("dashboard"),$=w.replace("/",""),k=(0,j.v9)((e=>e.layout.layout))[$];return(0,S.useEffect)((()=>{x.current&&(x.current.scrollTop=0)}),[w]),(0,b.jsxs)(n,{ref:x,children:[(0,b.jsx)(h.q,{children:(0,b.jsx)("title",{children:`Smart190 | ${t}`})}),(0,b.jsxs)(l,{children:[(0,b.jsxs)(o,{as:P.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[i&&(0,b.jsxs)(a,{children:[t," ",r&&m&&m>0&&(0,b.jsxs)(c.GS,{children:["+",m]})]}),f&&(0,b.jsxs)(d,{children:[g.isDesktop()&&(0,b.jsxs)(b.Fragment,{children:[Z&&(0,b.jsx)(p.t,{children:(0,b.jsx)(u.XO,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(u.ot,{})})]}),(0,b.jsx)(p.t,{children:(0,b.jsx)(u.t7,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(u.zj,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(u.vm,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(u.jf,{})})]})]}),k?(0,b.jsx)(z,{id:$,layouts:k,desktop:g.isDesktop(),children:s}):s]})]})}},28841:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var r=s(72791),i=s(39314),n=s(28789);const a=n.ZP.div`
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;

`,o=n.ZP.h1`
  color: #414d55;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
   justify-content: center;
  align-items: center;
  margin-left:10px;
`,d=n.ZP.h3`
  font-weight: bold;
  color: #cc0000;
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 2px solid #cc0000;
  padding-bottom: 5px;
`,l=n.ZP.h4`
  font-weight: bold;
  color:rgba(204, 0, 0, 0.8);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-bottom: 2px solid rgba(204, 0, 0, 0.8);
  padding-bottom: 5px;
`,c=n.ZP.h4`
  font-weight: bold;
  color:rgba(204, 0, 0, 0.69);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 30px;
  border-bottom: 2px solid rgba(204, 0, 0, 0.69);
  padding-bottom: 5px;
`,p=n.ZP.select`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  background: white;
  outline: none;
  cursor: pointer;
  appearance: none;
  color:rgba(65, 77, 85, 0.79);
  &:hover {
    border-color: #cc0000;
  }

  &:focus {
    border-color:rgb(114, 21, 21);
    box-shadow: 0 0 5px rgba(44, 97, 226, 0.5);
  }
`,h=n.ZP.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
`,u=n.ZP.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  min-height: 80px;
  margin-bottom: 10px;
`,m=n.ZP.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`,x=n.ZP.button`
  padding: 10px 15px;
  border: none;
  background:#cc0000;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background:rgb(120, 11, 11);
  }
`,g=n.ZP.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`,j=n.ZP.div`
  flex: 1;
`,v=n.ZP.button`
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-left: 10px;
  &:hover {
    background: #cc0000;
  }
`;n.ZP.form``;var y=s(39725),b=s(61134),f=s(80848),w=s(60874),z=s(80184);const P=w.z.object({firstName:w.z.string().min(1,"First Name is required"),lastName:w.z.string().min(1,"Last Name is required"),email:w.z.string().email("Invalid email address"),phone:w.z.string().min(1,"Phone is required"),address:w.z.string().min(1,"Address is required"),age:w.z.number().int().min(1,"Age is required"),sex:w.z.string().min(1,"Sex is required"),height:w.z.number().int().min(1,"Height is required"),weight:w.z.number().int().min(1,"Weight is required"),consultations:w.z.array(w.z.object({date:w.z.string().refine((e=>!isNaN(Date.parse(e))),{message:"Invalid date format"}),doctor:w.z.string().min(1,"Doctor's ID is required"),status:w.z.string().min(1,"Status is required"),duration:w.z.number().min(1,"Duration is required"),notes:w.z.string().optional()})),medicalRecord:w.z.object({diagnostic:w.z.object({}),treatment:w.z.object({medications:w.z.array()}),allergies:w.z.array()}),operations:w.z.array(w.z.object({type:w.z.string().min(1,"Operation type is required"),estimatedTime:w.z.number().min(1,"Estimated time is required"),date:w.z.string().refine((e=>!isNaN(Date.parse(e))),{message:"Invalid date format"}),roomNumber:w.z.string().min(1,"Room number is required"),status:w.z.string().min(1,"Status is required")}))}),Z=e=>{let{title:t,children:s}=e;return(0,z.jsxs)("div",{children:[(0,z.jsx)(d,{children:t}),s]})},C=()=>{const{register:e,handleSubmit:t,formState:{errors:s},watch:n,setValue:d}=(0,b.cI)({resolver:(0,f.F)(P),defaultValues:{consultations:[],medicalRecord:{diagnostic:{condition:"",severity:"",symptoms:[String],notes:""},treatment:{medications:[]},allergies:[],operations:[]}}}),[w,C]=(0,r.useState)([""]),[N,S]=(0,r.useState)([{name:"",dosage:"",frequency:"",duration:"",notes:""}]),[$,k]=(0,r.useState)([""]),[q,A]=(0,r.useState)([""]),[D,E]=(0,r.useState)([{type:"",estimatedTime:"",date:"",roomNumber:"",status:""}]),[I,T]=(0,r.useState)([]),R=e=>e((e=>[...e,""])),O=(e,t)=>e((e=>e.filter(((e,s)=>s!==t))));(0,r.useEffect)((()=>{(async()=>{try{const e=await y.Z.getAllDoctors();T(e),console.log("doctorsssssssssss"),console.log(e)}catch(e){console.error("Failed to fetch doctors",e)}})()}),[]);return(0,z.jsx)(i.Z,{title:"Medical Record",children:(0,z.jsxs)(a,{children:[(0,z.jsx)(o,{children:"Medical Record Form"}),(0,z.jsxs)(Z,{title:"User Information",children:[(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("firstName"),placeholder:"First Name",type:"text"}),s.firstName&&(0,z.jsx)("p",{children:s.firstName.message}),"  "]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("lastName"),placeholder:"Last Name",type:"text"}),s.lastName&&(0,z.jsx)("p",{children:s.lastName.message}),"  "]})]}),(0,z.jsx)(g,{children:(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("email"),placeholder:"Email",type:"email"}),s.email&&(0,z.jsx)("p",{children:s.email.message}),"  "]})})]}),(0,z.jsxs)(Z,{title:"Patient Information",children:[(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("phone"),placeholder:"Phone",type:"tel"}),s.phone&&(0,z.jsx)("p",{children:s.phone.message}),"  "]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("address"),placeholder:"Address",type:"text"}),s.address&&(0,z.jsx)("p",{children:s.address.message}),"  "]})]}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("age",{setValueAs:e=>Number(e)}),placeholder:"Age",type:"number"}),s.age&&(0,z.jsx)("p",{children:s.age.message})," "]}),(0,z.jsxs)(j,{children:[(0,z.jsxs)(p,{...e("sex"),children:[(0,z.jsx)("option",{value:"",children:"Select sex"}),(0,z.jsx)("option",{value:"Female",children:"Female"}),(0,z.jsx)("option",{value:"Male",children:"Male"})]}),s.sex&&(0,z.jsx)("p",{children:s.sex.message}),"  "]})]}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("height",{setValueAs:e=>Number(e)}),placeholder:"Height (cm)",type:"number"}),s.height&&(0,z.jsx)("p",{children:s.height.message})," "]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("weight",{setValueAs:e=>Number(e)}),placeholder:"Weight (kg)",type:"number"}),s.weight&&(0,z.jsx)("p",{children:s.weight.message})," "]})]})]}),(0,z.jsxs)(Z,{title:"Consultation",children:[(0,z.jsxs)(g,{children:[(0,z.jsxs)(p,{...e("doctor",{required:"Veuillez s\xe9lectionner un docteur"}),children:[(0,z.jsx)("option",{value:"",children:"S\xe9lectionner un docteur"}),I.map((e=>(0,z.jsxs)("option",{value:e._id,children:[e.user.firstName," ",e.user.lastName]},e._id)))]}),s.doctor&&(0,z.jsx)("p",{children:s.doctor.message})]}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("duration"),placeholder:"Duration (minutes)",type:"number"}),s.duration&&(0,z.jsx)("p",{children:s.duration.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("date"),placeholder:"Date",type:"date"}),s.date&&(0,z.jsx)("p",{children:s.date.message})]})]}),(0,z.jsx)(g,{children:(0,z.jsxs)(j,{children:[(0,z.jsxs)(p,{...e("status"),children:[(0,z.jsx)("option",{value:"",children:"Select Status"}),(0,z.jsx)("option",{value:"Planned",children:"Planned"}),(0,z.jsx)("option",{value:"Ongoing",children:"Ongoing"}),(0,z.jsx)("option",{value:"Completed",children:"Completed"}),(0,z.jsx)("option",{value:"Cancelled",children:"Cancelled"})]}),s.status&&(0,z.jsx)("p",{children:s.status.message})]})})]}),(0,z.jsxs)(Z,{title:"Medical Record",children:[(0,z.jsx)(l,{children:"Diagnostics"}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("condition"),placeholder:"Condition",type:"text"}),s.condition&&(0,z.jsx)("p",{children:s.condition.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e("severity"),placeholder:"Severity",type:"text"}),s.severity&&(0,z.jsx)("p",{children:s.severity.message})]})]}),w.map(((t,r)=>{var i;return(0,z.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,z.jsx)(h,{...e(`symptoms.${r}`),placeholder:"Symptom",value:t,onChange:e=>{const t=[...w];t[r]=e.target.value,C(t)}}),r>0&&(0,z.jsx)(v,{onClick:()=>O(C,r),children:"X"}),s.symptoms&&s.symptoms[r]&&(0,z.jsx)("p",{children:null===(i=s.symptoms[r])||void 0===i?void 0:i.message})]},r)})),(0,z.jsx)(m,{children:(0,z.jsx)(x,{onClick:()=>R(C),children:"Add Other Symptom"})}),(0,z.jsx)(c,{children:"Medications"}),N.map(((t,r)=>{var i,n,a,o;return(0,z.jsxs)("div",{children:[(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`medications.${r}.name`),placeholder:"Medication Name",value:t.name,onChange:e=>{const t=[...N];t[r].name=e.target.value,S(t)}}),s.medications&&(null===(i=s.medications[r])||void 0===i?void 0:i.name)&&(0,z.jsx)("p",{children:s.medications[r].name.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`medications.${r}.dosage`),placeholder:"Dosage",value:t.dosage,onChange:e=>{const t=[...N];t[r].dosage=e.target.value,S(t)}}),s.medications&&(null===(n=s.medications[r])||void 0===n?void 0:n.dosage)&&(0,z.jsx)("p",{children:s.medications[r].dosage.message})]})]}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`medications.${r}.frequency`),placeholder:"Frequency",value:t.frequency,onChange:e=>{const t=[...N];t[r].frequency=e.target.value,S(t)}}),s.medications&&(null===(a=s.medications[r])||void 0===a?void 0:a.frequency)&&(0,z.jsx)("p",{children:s.medications[r].frequency.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`medications.${r}.duration`),placeholder:"Duration",value:t.duration,onChange:e=>{const t=[...N];t[r].duration=e.target.value,S(t)}}),s.medications&&(null===(o=s.medications[r])||void 0===o?void 0:o.duration)&&(0,z.jsx)("p",{children:s.medications[r].duration.message})]})]}),(0,z.jsx)(g,{children:(0,z.jsx)(j,{children:(0,z.jsx)(u,{...e(`medications.${r}.notes`),placeholder:"Notes",value:t.notes,onChange:e=>{const t=[...N];t[r].notes=e.target.value,S(t)}})})}),r>0&&(0,z.jsx)(v,{onClick:()=>(e=>S(N.filter(((t,s)=>s!==e))))(r),children:"Remove Medication"})]},r)})),(0,z.jsx)(m,{children:(0,z.jsx)(x,{onClick:()=>S((e=>[...e,{name:"",dosage:"",frequency:"",duration:"",notes:""}])),children:"Add Medication"})}),(0,z.jsx)(c,{children:"Allergies"}),q.map(((t,r)=>{var i;return(0,z.jsxs)("div",{children:[(0,z.jsx)(h,{...e(`allergies.${r}`),placeholder:"Allergy",value:t,onChange:e=>{const t=[...q];t[r]=e.target.value,A(t)}}),s.allergies&&s.allergies[r]&&(0,z.jsx)("p",{children:null===(i=s.allergies[r])||void 0===i?void 0:i.message}),r>0&&(0,z.jsx)(v,{onClick:()=>O(A,r),children:"X"})]},r)})),(0,z.jsx)(m,{children:(0,z.jsx)(x,{onClick:()=>R(A),children:"Add Allergy"})}),(0,z.jsx)(c,{children:"Operations"}),D.map(((t,r)=>{var i,n,a,o,d;return(0,z.jsxs)("div",{children:[(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`operations.${r}.type`),placeholder:"Operation Type",value:t.type,onChange:e=>{const t=[...D];t[r].type=e.target.value,E(t)}}),s.operations&&(null===(i=s.operations[r])||void 0===i?void 0:i.type)&&(0,z.jsx)("p",{children:s.operations[r].type.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`operations.${r}.estimatedTime`,{valueAsNumber:!0}),placeholder:"Estimated Time",value:t.estimatedTime,onChange:e=>{const t=[...D];t[r].estimatedTime=Number(e.target.value)||0,E(t)}}),s.operations&&(null===(n=s.operations[r])||void 0===n?void 0:n.estimatedTime)&&(0,z.jsx)("p",{children:s.operations[r].estimatedTime.message})]})]}),(0,z.jsxs)(g,{children:[(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`operations.${r}.date`),placeholder:"Operation Date",value:t.date,type:"date",onChange:e=>{const t=[...D];t[r].date=e.target.value,E(t)}}),s.operations&&(null===(a=s.operations[r])||void 0===a?void 0:a.date)&&(0,z.jsx)("p",{children:s.operations[r].date.message})]}),(0,z.jsxs)(j,{children:[(0,z.jsx)(h,{...e(`operations.${r}.roomNumber`),placeholder:"Room Number",value:t.roomNumber,onChange:e=>{const t=[...D];t[r].roomNumber=e.target.value,E(t)}}),s.operations&&(null===(o=s.operations[r])||void 0===o?void 0:o.roomNumber)&&(0,z.jsx)("p",{children:s.operations[r].roomNumber.message})]})]}),(0,z.jsx)(g,{children:(0,z.jsxs)(j,{children:[(0,z.jsxs)(p,{...e(`operations.${r}.status`),value:t.status,onChange:e=>{const t=[...D];t[r].status=e.target.value,E(t)},children:[(0,z.jsx)("option",{value:"",children:"Select Status"}),(0,z.jsx)("option",{value:"Scheduled",children:"Scheduled"}),(0,z.jsx)("option",{value:"Ongoing",children:"Ongoing"}),(0,z.jsx)("option",{value:"Completed",children:"Completed"}),(0,z.jsx)("option",{value:"Cancelled",children:"Cancelled"})]}),s.operations&&(null===(d=s.operations[r])||void 0===d?void 0:d.status)&&(0,z.jsx)("p",{children:s.operations[r].status.message})]})}),r>0&&(0,z.jsx)(v,{onClick:()=>(e=>{E(D.filter(((t,s)=>s!==e)))})(r),children:"Remove Operation"})]},r)})),(0,z.jsx)(m,{children:(0,z.jsx)(x,{onClick:()=>E((e=>[...e,{type:"",estimatedTime:"",date:"",roomNumber:"",status:""}])),children:"Add Operation"})})]}),(0,z.jsx)(x,{onClick:t((async e=>{try{const t={doctor:n("doctor"),duration:Number(n("duration")),date:n("date"),status:n("status"),notes:n("notes")||""},s={diagnostic:{condition:n("condition"),severity:n("severity"),symptoms:Array.isArray(n("symptoms"))?n("symptoms"):[],notes:n("diagnostic.notes")||""},treatment:{medications:n("medications")},allergies:n("allergies")},r={...e,consultations:[...e.consultations,t],medicalRecord:s};console.log("Donn\xe9es envoy\xe9es :",r),await y.Z.createPatient(r),alert("\u2705 Patient ajout\xe9 avec succ\xe8s !")}catch(r){var t,s;const e=(null===(t=r.response)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.message)||r.message||"Erreur inconnue.";alert(`\u274c ${e}`),console.error("D\xe9tails de l'erreur :",r)}})),children:"Submit"})]})})}},39725:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(12903);const i="http://localhost:5000/patient",n={getAllPatients:async()=>{try{return(await r.Z.get(i)).data}catch(e){throw console.error("Erreur lors du chargement des patients:",e),e}},getPatientById:async e=>{try{return(await r.Z.get(`${i}/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du patient:",t),t}},getPatientInfoById:async e=>{try{return(await r.Z.get(`${i}/details/${e}`)).data}catch(t){throw console.error("Erreur lors de la r\xe9cup\xe9ration du patient:",t),t}},createPatient:async e=>{try{return(await r.Z.post(i,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du patient:",t),t}},createSimplePatient:async e=>{try{return(await r.Z.post(`${i}/createSimplePatient`,e)).data}catch(t){throw console.error("Erreur lors de la cr\xe9ation du patient:",t),t}},updateSimplePatient:async(e,t)=>{try{return(await r.Z.put(`${i}/updateSimplePatient/${e}`,t)).data}catch(s){throw console.error("Erreur lors de la mise \xe0 jour du patient:",s),s}},updatePatient:async(e,t)=>{try{return(await r.Z.put(`${i}/${e}`,t)).data}catch(s){throw console.error("Erreur lors de la mise \xe0 jour du patient:",s),s}},deletePatient:async e=>{try{await r.Z.delete(`${i}/${e}`)}catch(t){throw console.error("Erreur lors de la suppression du patient:",t),t}},toggleUserStatus:async e=>{try{console.log("ID envoy\xe9 \xe0 l'API:",e);return await r.Z.put(`${i}/toggle-status/${e}`,{},{withCredentials:!0})}catch(t){throw console.error("Erreur lors de la d\xe9sactivation / activation du patient:",t),t}},getAllDoctors:async()=>{try{return(await r.Z.get(`${i}/listDoctors`)).data}catch(e){throw console.error("Erreur lors du chargement des doctors:",e),e}}}}}]);
//# sourceMappingURL=8841.f28a1169.chunk.js.map