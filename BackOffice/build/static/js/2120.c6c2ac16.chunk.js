"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[2120],{6438:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(28789),i=a(14161),s=a(80184);const r=n.ZP.button`
  font-size: ${i.iH[16]};
  color: ${i.R2.text};
  transition: color var(--transition);
  line-height: 1;
  
  &:hover, &:focus {
    color: ${i.O9.blue};
  }
`,o=e=>{let{onClick:t,onFocus:a,onBlur:n}=e;return(0,s.jsx)(r,{className:"dots","aria-label":"Open menu",onClick:t,onFocus:a,onBlur:n,children:(0,s.jsx)("i",{className:"icon-dots icon"})})}},8281:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(62014),i=a(69667),s=a(80184);const r=e=>{let{className:t,eventKey:a,title:r,handler:o}=e;return(0,s.jsx)(n.ck,{className:t||"",as:i.Z.Item,onClick:o,children:(0,s.jsx)(n.zx,{as:i.Z.Link,eventKey:a,children:r})})}},19640:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(62014),i=a(69667),s=a(80184);const r=e=>{let{children:t}=e;return(0,s.jsx)(n.W2,{as:i.Z,children:t})}},62014:(e,t,a)=>{a.d(t,{W2:()=>l,ck:()=>d,zx:()=>c});var n=a(28789),i=a(65484),s=a.n(i),r=a(14161);const o=s()("theme",{light:r.R2.bodyBg,dark:r.R2.text}),l=n.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,c=n.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${r.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${s()("theme",{light:`\n        color: ${r.O9.blue};\n        background-color: ${r.R2.highlight};\n    `,dark:`\n        color: ${r.O9.secondary};\n        background-color: ${r._4.highlight};\n    `})};
  display: flex;
  ${r.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,d=n.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},75801:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(15822),i=a(83687),s=a(13035),r=a(36862),o=a(6438),l=a(71856),c=a(34909),d=a(72791),p=a(72426),h=a.n(p),m=a(80184);const u=e=>{let{variant:t="doctor",data:a,animated:p=!1}=e;const{patient:u,doctor:g,type:x,date:v,payment:b}=a,f=p?l.M:d.Fragment;return(0,m.jsx)(f,{children:(0,m.jsxs)(n.HC,{variant:t,...p?{as:c.E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5}}:{},children:[(0,m.jsxs)(n.or,{children:[(0,m.jsx)(i.Z,{avatar:"patient"===t?g.avatar:u.avatar,alt:"patient"===t?g.name:u.name}),(0,m.jsxs)("div",{className:"info",children:[(0,m.jsx)(s.Z,{className:"name",text:"patient"===t?`Dr. ${g.name}`:u.name}),(0,m.jsx)(s.Z,{className:"title",text:x})]}),"patient"!==t&&(0,m.jsx)(r.Z,{shape:"round",label:"Call",icon:"phone"})]}),(0,m.jsxs)(n.$_,{variant:t,children:[(0,m.jsx)("div",{className:"details",children:(()=>{switch(t){default:case"doctor":return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{className:"details_item",children:[(0,m.jsx)("i",{className:"icon icon-clock"}),(0,m.jsx)("span",{children:h()(v).format("HH:mm")})]}),b&&(0,m.jsxs)("span",{className:"details_item",children:[(0,m.jsx)("i",{className:"icon icon-euro"}),(0,m.jsx)("span",{children:b.toFixed(2)})]})]});case"patient":return(0,m.jsxs)("span",{className:"details_item",children:[(0,m.jsx)("i",{className:"icon icon-clock"}),(0,m.jsx)("span",{children:h()(v).format("dddd, MMMM DD")})]})}})()}),(0,m.jsx)(o.Z,{})]})]})})}},15822:(e,t,a)=>{a.d(t,{$_:()=>c,HC:()=>o,or:()=>l});var n=a(28789),i=a(65484),s=a.n(i),r=a(14161);const o=n.ZP.div`
  padding-bottom: 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`,l=n.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  .info {
    ${r.fU.col};
    gap: 4px;
    flex-grow: 1;

    .name {
      font-size: ${r.iH[14]};
    }

    .title {
      font-weight: 500;
    }
  }
`,c=n.ZP.div`
  display: flex;
  ${r.fU.between};
  padding-top: 18px;
  border-top: ${s()("theme",{light:r.Sz.dashedLight,dark:r.Sz.dashedDark})};

  .swiper {
    width: 50px;
  }
  
  .details {
    display: flex;
    align-items: center;
    gap: 30px;

    &_item {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: ${e=>"patient"===e.variant&&r.iH[14]};
      font-weight: ${e=>"patient"!==e.variant&&500};

      .icon {
        color: ${r.O9.gray};
        font-size: ${r.iH[16]};

        &-euro {
          font-size: ${r.iH[14]};
        }
      }
    }
  }
`},70475:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(28789),i=a(65484),s=a.n(i),r=a(14161);a(72791);const o=a.p+"static/media/bar_mask.687375579d408362bc7492cdf92b8db6.svg",l=n.ZP.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  margin: 20px -24px 0;
  padding: 0 24px;
  user-select: none;
`,c=n.ZP.div`
  ${r.fU.col};
  align-items: center;
  gap: 20px;
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
  text-transform: uppercase;
  height: fit-content;
  
  ${e=>e.masked&&`\n    &:first-of-type {\n        align-items: flex-start;\n    }\n    \n    &:last-of-type {\n        align-items: flex-end;\n    }\n    \n    .track {\n        mask: url(${o}) no-repeat center center / contain;\n     }\n  `}
  
  .track {
    background-color: ${s()("theme",{light:e=>e.masked?r.R2.bodyBg:r.R2.highlight,dark:r._4.highlight})};
    height: 228px;
    width: ${e=>e.masked?4:8}px;
    border-radius: 4px;
    display: flex;
    flex-direction: column-reverse;
    gap: ${e=>e.masked?0:8}px;
  }
`;var d=a(34909),p=a(57770),h=a(80184);const m=e=>{let{data:t,masked:a=!1,...n}=e;return(0,h.jsx)(l,{...n,children:t.map((e=>(0,h.jsxs)(c,{masked:a,children:[(0,h.jsx)("div",{className:"track",children:Object.keys(e.values).map(((t,n)=>{const i=e.values[t],s=p.U.find((e=>e.cat===t)).color;return(0,h.jsx)(d.E.span,{style:{backgroundColor:r.O9[s],width:"100%",borderRadius:!a&&4,opacity:0},animate:{height:`${i}%`,opacity:1},transition:{duration:1,delay:.5,type:"tween",ease:"easeInOut"}},`${e.label}-${t}-${n}-${i}`)}))}),(0,h.jsx)("span",{children:e.label})]},e.label)))})}},92889:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(36038),i=a(47242),s=a(57770),r=a(80184);const o=()=>(0,r.jsx)(i.Z,{children:s.U.map((e=>{let{cat:t,color:a}=e;return"emergency"===t?null:(0,r.jsx)(n.Z,{legend:t,color:a},t)}))})},30133:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(28789),i=a(65484),s=a.n(i),r=a(72791);const o=(e,t)=>{const[a,n]=(0,r.useState)(void 0),[i,s]=(0,r.useState)(void 0),o=()=>{const{current:t}=e;0===t.children[0].scrollTop?t.classList.add("is-top"):t.classList.remove("is-top");t.children[0].scrollHeight===Math.ceil(t.children[0].scrollTop)+t.children[0].clientHeight||t.children[0].scrollHeight===Math.floor(t.children[0].scrollTop)+t.children[0].clientHeight?t.classList.add("is-bottom"):t.classList.remove("is-bottom")};return(0,r.useEffect)((()=>{const{current:a}=e,i=()=>{s(a.children[0].scrollHeight);const e=a.children[0].scrollHeight>a.children[0].clientHeight;n(e),null===a||void 0===a||a.classList.toggle("has-overflow",e),a.children[0].addEventListener("scroll",o),t&&t(e)};a&&("ResizeObserver"in window&&new ResizeObserver(i).observe(a),i())}),[e,t,i]),a};var l=a(80184);const c=n.ZP.div`
  height: calc(100% - ${e=>e.height}px);
  position: relative;
  flex-grow: 1;

  &.has-overflow {
    &:before, &:after {
      content: '';
      display: block;
      height: ${e=>"small"===e.size?40:80}px;
      position: absolute;
      width: 100%;;
      background: ${s()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,d=e=>{let{children:t,height:a,size:n}=e;const i=(0,r.useRef)(null),s=o(i);return(0,l.jsx)(c,{className:s?"is-top has-overflow":"",height:a,ref:i,size:n,children:t})}},13035:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(31182),i=a(45942),s=a.n(i),r=a(80184);const o=s()()(n.Z),l=e=>{let{className:t,text:a,lines:n=1}=e;return(0,r.jsx)(o,{className:t,text:a,maxLine:n,ellipsis:"...",trimRight:!0,basedOn:"letters"})}},57770:(e,t,a)=>{a.d(t,{U:()=>n,z:()=>i});const n=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],i=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},99595:(e,t,a)=>{a.d(t,{_:()=>k});var n=a(3669),i=a(89779),s=a(89390),r=a(26250),o=a(52886),l=a(52296),c=a(81851),d=a(84686),p=a(14205),h=a(50897),m=a(90048),u=a(21189),g=a(40656),x=a(30538),v=a(65710),b=a(37512),f=a(76155),j=a(62056),y=a(67583),w=a(79168);const k=[{id:"smdIdn",patient:{name:"Corey Aguilar",avatar:{jpg:n,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"Kidney function test",payment:24.5,date:new Date(2022,0,1,9,0),phone:"12456789"},{id:"sdPkoef34",patient:{name:"Max Morales",avatar:{jpg:s,webp:r}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"Emergency appointment",payment:99.95,date:new Date(2022,0,1,9,30),phone:"12456789"},{id:"sdplc5ER",patient:{name:"Linda Adams",avatar:{jpg:c,webp:d}},doctor:{name:"Jessie Paul",avatar:{jpg:v,webp:b}},type:"Complementation test",payment:40.45,date:new Date(2022,0,1,10,30),phone:"12456789"},{id:"ssamcwBER",patient:{name:"Clyde Morales",avatar:{jpg:o,webp:l}},doctor:{name:"Mabel Perkins",avatar:{jpg:y,webp:w}},type:"USG + Consultation",payment:29.9,date:new Date(2022,0,1,11,30),phone:"12456789"},{id:"pnvb6Rtv",patient:{name:"Linda Smith",avatar:{jpg:m,webp:u}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"Emergency appointment",date:new Date(2022,0,1,12,30),phone:"12456789"},{id:"sdsdtu9",patient:{name:"Steeve Madden",avatar:{jpg:p,webp:h}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"USG",payment:19.15,date:new Date(2022,0,1,14,30),phone:"12456789"},{id:"cd7xbwsvGFs",patient:{name:"Corey Aguilar",avatar:{jpg:n,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"Kidney function test",payment:24.5,date:new Date(2022,6,12,9,0),phone:"12456789"},{id:"defbts78a",patient:{name:"Max Morales",avatar:{jpg:s,webp:r}},doctor:{name:"Shawn Hampton",avatar:{jpg:f,webp:j}},type:"Blood test",payment:99.95,date:new Date(2022,8,5,10,30),phone:"12456789"},{id:"smduBshba678",patient:{name:"Marta Bloom",avatar:{jpg:g,webp:x}},doctor:{name:"Jessie Paul",avatar:{jpg:v,webp:b}},type:"ECG",date:new Date(2022,1,12,11,30),phone:"12456789"}]},84483:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(72791);const i=(e,t)=>{const[a,i]=(0,n.useState)(0);return(0,n.useEffect)((()=>{if(null!==e&&null!==t){const a=e.current?e.current.clientHeight:0,n=t&&t.current?t.current.clientHeight:0;i(a+n)}}),[e,t]),a}},72120:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(39314),i=a(249),s=a(66150),r=a(20760),o=a(75700),l=a(19640),c=a(8281),d=a(75801),p=a(30133),h=a(25984),m=a(84483),u=a(72791),g=a(99595),x=a(80184);const v=()=>{const e=["year","month","week"],t=(0,u.useRef)(null),a=(0,u.useRef)(null),n=(0,m.Z)(t),v=()=>{a.current.scrollTop=0};return(0,x.jsx)(i.Z,{name:"PatientAppointmentsHistory",mobile:600,children:(0,x.jsxs)(o.Z.Container,{defaultActiveKey:"year",transition:!0,children:[(0,x.jsx)(s.Z,{title:"Previous appointments",elRef:t,children:(0,x.jsx)(l.Z,{children:e.map((e=>(0,x.jsx)(c.Z,{eventKey:e,title:e,handler:v},(0,h.x0)(5))))})}),(0,x.jsx)(r.Z,{children:(0,x.jsx)(p.Z,{height:n,children:(0,x.jsx)("div",{className:"track",ref:a,children:(0,x.jsx)(o.Z.Content,{children:e.map((e=>(0,x.jsx)(o.Z.Pane,{eventKey:e,children:g._.map((e=>(0,x.jsx)(d.Z,{data:e,variant:"patient"},e.id)))},(0,h.x0)(5))))})})})})]})})};var b=a(92889),f=a(70475);const j=()=>(0,x.jsxs)(i.Z,{name:"PatientOverallAppointments",shadow:!0,children:[(0,x.jsx)(s.Z,{title:"Overall appointments",flex:"column",style:{paddingBottom:8},children:(0,x.jsx)(b.Z,{})}),(0,x.jsx)(r.Z,{style:{justifyContent:"flex-end"},children:(0,x.jsx)(f.Z,{data:[{label:"Jan",values:{consultation:30,sick:10,test:50}},{label:"Feb",values:{checkup:10,sick:30}},{label:"Mar",values:{consultation:20}},{label:"Apr",values:{checkup:10,emergency:20}},{label:"May",values:{emergency:10,test:30}},{label:"Jun",values:{test:10}},{label:"Jul",values:{consultation:30,test:40}},{label:"Aug",values:{checkup:10}},{label:"Sep",values:{consultation:20}},{label:"Oct",values:{test:50,consultation:70}},{label:"Nov",values:{consultation:20}},{label:"Dec",values:{checkup:10,emergency:30}}],masked:!0})})]});var y=a(96027),w=a(30872);const k=()=>(0,x.jsxs)(n.Z,{title:"Basic Patient Dashboard",children:[(0,x.jsx)("div",{children:(0,x.jsx)(v,{})},"patient-app-history"),(0,x.jsx)("div",{children:(0,x.jsx)(j,{})},"patient-overall-appointments"),(0,x.jsx)("div",{children:(0,x.jsx)(y.Z,{})},"radar"),(0,x.jsx)("div",{children:(0,x.jsx)(w.Z,{variant:"basic"})},"diagnoses-donut")]})}}]);
//# sourceMappingURL=2120.c6c2ac16.chunk.js.map