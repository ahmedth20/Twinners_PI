"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[4502],{31225:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(28789),s=a(14161),r=a(25606),i=a(80184);const o=n.ZP.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${s.iH[14]};
  color: ${s.O9.blue};
  line-height: 1;
  transition: color var(--transition);
  width: fit-content;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover, &:focus {
    color: ${(0,r._j)(.1,s.O9.blue)};
  }

  .icon {
    font-size: ${s.iH[12]};
    color: ${s.O9.gray};
  }
`,l=e=>{let{href:t="#",title:a}=e;return(0,i.jsxs)(o,{href:t,children:[(0,i.jsx)("i",{className:"icon icon-link"}),(0,i.jsx)("span",{children:a})]})}},64489:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(28789),s=a(33926),r=a(14161),i=a(80184);const o=n.ZP.li`
  ${r.fU.col}
  gap: 12px;
  align-items: center;
  .label {
    font-size: ${r.iH[10]};
    text-transform: uppercase;
  }
  
  .progressbar {
    height: ${e=>e.barHeight}px;
    width: 6px;
    .MuiLinearProgress-bar {
      transform: translateY(${e=>100-e.value}%) !important;
    }
  }
`,l=e=>{let{label:t,value:a,barHeight:n=75,color:r}=e;return(0,i.jsxs)(o,{value:a,barHeight:n,children:[(0,i.jsx)(s.Z,{value:a,color:r}),(0,i.jsx)("span",{className:"label",children:t})]})}},36038:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(31843),s=a(85335),r=a(80184);const i=e=>{let{color:t,legend:a}=e;return(0,r.jsxs)(n.H,{children:[(0,r.jsx)(s.Lm,{color:t})," ",a]})}},47242:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(31843),s=a(80184);const r=e=>{let{children:t,overlay:a}=e;return(0,s.jsx)(n.a,{overlay:a,children:t})}},31843:(e,t,a)=>{a.d(t,{H:()=>i,a:()=>r});var n=a(28789),s=a(14161);const r=n.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,i=n.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${s.Rq.accent};
  font-size: ${s.iH[10]};
`},6438:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(28789),s=a(14161),r=a(80184);const i=n.ZP.button`
  font-size: ${s.iH[16]};
  color: ${s.R2.text};
  transition: color var(--transition);
  line-height: 1;
  
  &:hover, &:focus {
    color: ${s.O9.blue};
  }
`,o=e=>{let{onClick:t,onFocus:a,onBlur:n}=e;return(0,r.jsx)(i,{className:"dots","aria-label":"Open menu",onClick:t,onFocus:a,onBlur:n,children:(0,r.jsx)("i",{className:"icon-dots icon"})})}},92637:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(28789),s=a(65484),r=a.n(s),i=a(14161),o=a(80184);const l=n.ZP.button`
  ${i.fU.center}
  font-size: ${i.iH[12]};
  padding: 4px 8px;
  border-radius: 8px;
  color: ${i.O9.blue};
  background-color: ${r()("theme",{light:i.R2.bodyBg,dark:i._4.bodyBg})};
  min-height: 20px;
  gap: 4px;
  color: ${i.O9.blue};
  transition: color var(--transition), background-color var(--transition);
  font-family: ${i.Rq.accent};

  &:hover, &:focus {
    background-color: ${i.O9.blue};
    color: #fff;
  }

  &.active {
    color: ${r()("theme",{light:i.O9.blue,dark:i.R2.bodyBg})};
    background-color: ${r()("theme",{light:i.R2.highlight,dark:i.R2.text})};
  }
`,d=e=>{let{text:t,handler:a,icon:n,style:s,className:r}=e;return(0,o.jsxs)(l,{className:r?`pill ${r}`:"pill",onClick:a,style:s,children:[n?(0,o.jsx)("i",{className:`icon-${n}`}):null," ",t]})}},33926:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(14161),s=a(57482),r=a(28789),i=a(80184);const o=e=>{let{color:t=n.O9.blue,value:a,style:o={}}=e;const{theme:l}=(0,r.Fg)();return(0,i.jsx)(s.Z,{className:"progressbar",variant:"determinate","aria-label":a,value:a,sx:{backgroundColor:"light"===l?"#E4EAF0":n._4.highlight,height:6,borderRadius:2,...o,"& .MuiLinearProgress-bar":{backgroundColor:t,borderRadius:2}}})}},62014:(e,t,a)=>{a.d(t,{W2:()=>l,ck:()=>c,zx:()=>d});var n=a(28789),s=a(65484),r=a.n(s),i=a(14161);const o=r()("theme",{light:i.R2.bodyBg,dark:i.R2.text}),l=n.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,d=n.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${i.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${r()("theme",{light:`\n        color: ${i.O9.blue};\n        background-color: ${i.R2.highlight};\n    `,dark:`\n        color: ${i.O9.secondary};\n        background-color: ${i._4.highlight};\n    `})};
  display: flex;
  ${i.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,c=n.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},9111:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(28789),s=a(14161),r=a(72426),i=a.n(r),o=a(80184);const l=n.ZP.span`
  display: flex;
  gap: 8px;
  font-family: ${s.Rq.accent};
  font-size: ${s.iH[10]};
  text-transform: uppercase;
`,d=e=>{let{date:t,text:a,time:n=!1}=e;return(0,o.jsxs)(l,{children:[a&&(0,o.jsx)("span",{children:a}),(0,o.jsx)("span",{children:i()(t).format("DD MMM YYYY")}),n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"/"}),(0,o.jsx)("span",{children:i()(t).format("hh:mm A")})]})]})}},75801:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(15822),s=a(83687),r=a(13035),i=a(36862),o=a(6438),l=a(71856),d=a(34909),c=a(72791),p=a(72426),h=a.n(p),x=a(80184);const m=e=>{let{variant:t="doctor",data:a,animated:p=!1}=e;const{patient:m,doctor:u,type:g,date:b,payment:f}=a,j=p?l.M:c.Fragment;return(0,x.jsx)(j,{children:(0,x.jsxs)(n.HC,{variant:t,...p?{as:d.E.div,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5}}:{},children:[(0,x.jsxs)(n.or,{children:[(0,x.jsx)(s.Z,{avatar:"patient"===t?u.avatar:m.avatar,alt:"patient"===t?u.name:m.name}),(0,x.jsxs)("div",{className:"info",children:[(0,x.jsx)(r.Z,{className:"name",text:"patient"===t?`Dr. ${u.name}`:m.name}),(0,x.jsx)(r.Z,{className:"title",text:g})]}),"patient"!==t&&(0,x.jsx)(i.Z,{shape:"round",label:"Call",icon:"phone"})]}),(0,x.jsxs)(n.$_,{variant:t,children:[(0,x.jsx)("div",{className:"details",children:(()=>{switch(t){default:case"doctor":return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("span",{className:"details_item",children:[(0,x.jsx)("i",{className:"icon icon-clock"}),(0,x.jsx)("span",{children:h()(b).format("HH:mm")})]}),f&&(0,x.jsxs)("span",{className:"details_item",children:[(0,x.jsx)("i",{className:"icon icon-euro"}),(0,x.jsx)("span",{children:f.toFixed(2)})]})]});case"patient":return(0,x.jsxs)("span",{className:"details_item",children:[(0,x.jsx)("i",{className:"icon icon-clock"}),(0,x.jsx)("span",{children:h()(b).format("dddd, MMMM DD")})]})}})()}),(0,x.jsx)(o.Z,{})]})]})})}},15822:(e,t,a)=>{a.d(t,{$_:()=>d,HC:()=>o,or:()=>l});var n=a(28789),s=a(65484),r=a.n(s),i=a(14161);const o=n.ZP.div`
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
    ${i.fU.col};
    gap: 4px;
    flex-grow: 1;

    .name {
      font-size: ${i.iH[14]};
    }

    .title {
      font-weight: 500;
    }
  }
`,d=n.ZP.div`
  display: flex;
  ${i.fU.between};
  padding-top: 18px;
  border-top: ${r()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})};

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
      font-size: ${e=>"patient"===e.variant&&i.iH[14]};
      font-weight: ${e=>"patient"!==e.variant&&500};

      .icon {
        color: ${i.O9.gray};
        font-size: ${i.iH[16]};

        &-euro {
          font-size: ${i.iH[14]};
        }
      }
    }
  }
`},22426:(e,t,a)=>{a.d(t,{Z:()=>o,m:()=>i});var n=a(28789),s=a(14161),r=a(80184);const i=n.ZP.div`
  font-family: ${s.Rq.accent};
  font-size: ${s.iH[10]};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${s.R2.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${s.fU.center}
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
    background-color: ${s.R2.text};
    display: ${e=>e.arrow?"block":"none"};
  }
`,o=e=>{let{active:t,payload:a,tooltip:n,arrow:s=!1,multi:o=!1,...l}=e;if(o){if(!t||!n)return null;for(const e of a)if(e.dataKey===n)return(0,r.jsx)(i,{arrow:s,children:e.value});return null}return t&&a[0]?(0,r.jsxs)(i,{arrow:s,children:[" ",a[0].value," ",l.right&&a[0].dataKey]}):null}},80879:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(62014),s=a(17350),r=a(25984),i=a(80184);const o=e=>{let{current:t,handler:a}=e;const{periods:o}=(0,s.Z)();return(0,i.jsx)(n.W2,{children:o.map((e=>(0,i.jsx)(n.ck,{children:(0,i.jsx)(n.zx,{className:t===e&&"active",onClick:()=>a(e),children:e})},(0,r.x0)(4))))})}},30133:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(28789),s=a(65484),r=a.n(s),i=a(72791);const o=(e,t)=>{const[a,n]=(0,i.useState)(void 0),[s,r]=(0,i.useState)(void 0),o=()=>{const{current:t}=e;0===t.children[0].scrollTop?t.classList.add("is-top"):t.classList.remove("is-top");t.children[0].scrollHeight===Math.ceil(t.children[0].scrollTop)+t.children[0].clientHeight||t.children[0].scrollHeight===Math.floor(t.children[0].scrollTop)+t.children[0].clientHeight?t.classList.add("is-bottom"):t.classList.remove("is-bottom")};return(0,i.useEffect)((()=>{const{current:a}=e,s=()=>{r(a.children[0].scrollHeight);const e=a.children[0].scrollHeight>a.children[0].clientHeight;n(e),null===a||void 0===a||a.classList.toggle("has-overflow",e),a.children[0].addEventListener("scroll",o),t&&t(e)};a&&("ResizeObserver"in window&&new ResizeObserver(s).observe(a),s())}),[e,t,s]),a};var l=a(80184);const d=n.ZP.div`
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
      background: ${r()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,c=e=>{let{children:t,height:a,size:n}=e;const s=(0,i.useRef)(null),r=o(s);return(0,l.jsx)(d,{className:r?"is-top has-overflow":"",height:a,ref:s,size:n,children:t})}},13035:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(31182),s=a(45942),r=a.n(s),i=a(80184);const o=r()()(n.Z),l=e=>{let{className:t,text:a,lines:n=1}=e;return(0,i.jsx)(o,{className:t,text:a,maxLine:n,ellipsis:"...",trimRight:!0,basedOn:"letters"})}},20760:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(51899),s=a(80184);const r=e=>{let{children:t,style:a,sidePadding:r=!1,elRef:i,...o}=e;return(0,s.jsx)(n.uT,{ref:i,sidePadding:r,style:a,...o,children:t})}},66150:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(51899),s=a(80184);const r=e=>{let{title:t,children:a,sidePadding:r=!1,flex:i="row",elRef:o,...l}=e;return(0,s.jsxs)(n.h4,{className:l.className?l.className:"",sidePadding:r,flex:i,ref:o,style:l.style,children:[(0,s.jsx)("h2",{className:"title",children:t}),a]})}},90004:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(51899),s=a(66150),r=a(80184);const i=e=>{let{title:t,handler:a,sidePadding:i,children:o,disabled:l,...d}=e;return(0,r.jsxs)(s.Z,{title:t,sidePadding:i,style:d.style,className:"nav",children:[(0,r.jsxs)(n.JL,{children:[(0,r.jsx)("button",{onClick:a,"data-direction":"prev",className:l?"disabled":"","aria-label":"Previous",children:(0,r.jsx)("i",{className:"icon icon-chevron-left"})}),(0,r.jsx)("button",{onClick:a,"data-direction":"next",className:l?"disabled":"","aria-label":"Next",children:(0,r.jsx)("i",{className:"icon icon-chevron-right"})})]}),o]})}},99595:(e,t,a)=>{a.d(t,{_:()=>Z});var n=a(3669),s=a(89779),r=a(89390),i=a(26250),o=a(52886),l=a(52296),d=a(81851),c=a(84686),p=a(14205),h=a(50897),x=a(90048),m=a(21189),u=a(40656),g=a(30538),b=a(65710),f=a(37512),j=a(76155),v=a(62056),y=a(67583),w=a(79168);const Z=[{id:"smdIdn",patient:{name:"Corey Aguilar",avatar:{jpg:n,webp:s}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"Kidney function test",payment:24.5,date:new Date(2022,0,1,9,0),phone:"12456789"},{id:"sdPkoef34",patient:{name:"Max Morales",avatar:{jpg:r,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"Emergency appointment",payment:99.95,date:new Date(2022,0,1,9,30),phone:"12456789"},{id:"sdplc5ER",patient:{name:"Linda Adams",avatar:{jpg:d,webp:c}},doctor:{name:"Jessie Paul",avatar:{jpg:b,webp:f}},type:"Complementation test",payment:40.45,date:new Date(2022,0,1,10,30),phone:"12456789"},{id:"ssamcwBER",patient:{name:"Clyde Morales",avatar:{jpg:o,webp:l}},doctor:{name:"Mabel Perkins",avatar:{jpg:y,webp:w}},type:"USG + Consultation",payment:29.9,date:new Date(2022,0,1,11,30),phone:"12456789"},{id:"pnvb6Rtv",patient:{name:"Linda Smith",avatar:{jpg:x,webp:m}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"Emergency appointment",date:new Date(2022,0,1,12,30),phone:"12456789"},{id:"sdsdtu9",patient:{name:"Steeve Madden",avatar:{jpg:p,webp:h}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"USG",payment:19.15,date:new Date(2022,0,1,14,30),phone:"12456789"},{id:"cd7xbwsvGFs",patient:{name:"Corey Aguilar",avatar:{jpg:n,webp:s}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"Kidney function test",payment:24.5,date:new Date(2022,6,12,9,0),phone:"12456789"},{id:"defbts78a",patient:{name:"Max Morales",avatar:{jpg:r,webp:i}},doctor:{name:"Shawn Hampton",avatar:{jpg:j,webp:v}},type:"Blood test",payment:99.95,date:new Date(2022,8,5,10,30),phone:"12456789"},{id:"smduBshba678",patient:{name:"Marta Bloom",avatar:{jpg:u,webp:g}},doctor:{name:"Jessie Paul",avatar:{jpg:b,webp:f}},type:"ECG",date:new Date(2022,1,12,11,30),phone:"12456789"}]},54561:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(72791);const s=e=>{const[t,a]=(0,n.useState)(0);return{index:t,setIndex:a,navigate:n=>{const{direction:s}=n.currentTarget.dataset;"next"===s?t+1===e.length?a(0):a(t+1):"prev"===s&&a(t-1<0?e.length-1:t-1)}}}},84483:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(72791);const s=(e,t)=>{const[a,s]=(0,n.useState)(0);return(0,n.useEffect)((()=>{if(null!==e&&null!==t){const a=e.current?e.current.clientHeight:0,n=t&&t.current?t.current.clientHeight:0;s(a+n)}}),[e,t]),a}},17350:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(72791);const s=()=>{const e=["year","month","week"],[t,a]=(0,n.useState)(e[0]);return{period:t,periods:e,setPeriod:a,setPeriodIndex:t=>a(e[t])}}},54502:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$e});var n=a(39314),s=a(28789);const r=s.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  
  .swiper {
    width: calc(100% - 60px);
  }
`;var i=a(15822),o=a(249),l=a(20760),d=a(90004),c=a(83687),p=a(36862),h=a(13035),x=a(6438),m=a(58563),u=a(63344),g=a(25984),b=a(72426),f=a.n(b),j=a(72791),v=a(79591),y=a(99595),w=a(80184);const Z=e=>{let{onOpenOrdersModal:t}=e;const[a,n]=(0,j.useState)(null),[s,x]=(0,j.useState)(null),{direction:b}=(0,v.jt)(),Z={effect:"fade",fadeEffect:{crossFade:!0},modules:[u.xW,u.o3],loop:!0,dir:b,speed:100};(0,j.useEffect)((()=>{a&&s&&(a.changeLanguageDirection(b),s.changeLanguageDirection(b),a.update(),s.update())}),[b,a,s]);return(0,w.jsxs)(o.Z,{name:"NextPatient",children:[(0,w.jsx)(d.Z,{title:"Current Patient",handler:e=>{"next"===e.currentTarget.dataset.direction?a.slideNext():a.slidePrev()}}),(0,w.jsxs)(l.Z,{style:{paddingBottom:18},children:[(0,w.jsxs)(r,{children:[(0,w.jsx)(m.tq,{onSwiper:n,thumbs:{swiper:s},...Z,children:y._.map((e=>{const{patient:t,type:a}=e;return(0,w.jsx)(m.o5,{children:(0,w.jsxs)(i.or,{style:{marginBottom:0},children:[(0,w.jsx)(c.Z,{avatar:t.avatar,alt:t.name}),(0,w.jsxs)("div",{className:"info",children:[(0,w.jsx)(h.Z,{className:"name",text:t.name}),(0,w.jsx)(h.Z,{className:"title",text:a})]})]})},(0,g.x0)(5))}))}),(0,w.jsx)(p.Z,{shape:"round",label:"Call",icon:"phone"})]}),(0,w.jsxs)(i.$_,{children:[(0,w.jsx)("div",{className:"details",children:(0,w.jsxs)("span",{className:"details_item",children:[(0,w.jsx)("i",{className:"icon icon-clock"}),(0,w.jsx)(m.tq,{onSwiper:x,watchSlidesProgress:!0,...Z,children:y._.map((e=>{const{date:t}=e;return(0,w.jsx)(m.o5,{children:(0,w.jsx)("p",{className:"time",children:f()(t).format("HH:mm")})},(0,g.x0)(5))}))})]})}),(0,w.jsx)("button",{className:"orders-button",onClick:t,children:"Orders"})]})]})]})};var k=a(14161);const $=s.ZP.div`
  display: flex;
  ${k.fU.between}
  gap: 12px;
`,D=s.ZP.div`
  gap: 6px;
  display: flex;
  align-items: flex-end;
  .h3 {
    max-width: 290px;
  }
`,P=s.ZP.div`
  ${k.fU.col};
  gap: 6px;
`,N=(0,s.ZP)($)`
  margin-top: 16px;
  gap: 0;
  
  .wrapper {
    display: flex;
    gap: 20px;
  }
`;var M=a(31225),C=a(92637),H=a(94397);const S=()=>{const e=(0,H.Z)(),{direction:t}=(0,v.jt)(),[a,n]=(0,j.useState)(null);(0,j.useEffect)((()=>{a&&(a.changeLanguageDirection(t),a.update())}),[t,a]);return(0,w.jsxs)(o.Z,{name:"LaboratoryTests",children:[(0,w.jsx)(d.Z,{title:"Laboratory Tests",handler:e=>{"prev"===e.currentTarget.dataset.direction?a.slidePrev():a.slideNext()},style:{paddingBottom:16}}),(0,w.jsxs)(l.Z,{style:{paddingBottom:18},children:[(0,w.jsxs)($,{children:[(0,w.jsx)(m.tq,{onSwiper:e=>n(e),modules:[u.xW],effect:"fade",fadeEffect:{crossFade:!0},dir:t,loop:!0,children:[{name:"Nelle Pearson",test:"Beta 2 Micro-globulin (B2M) Tumor Marker Test"},{name:"Kate Smith",test:"Natriuretic Peptide Tests (BNP, NT-proBNP)"},{name:"James Campbell",test:"Fetal Alcohol Spectrum Disorders (FASD) Screening"},{name:"Max Lewis",test:"Total Protein and Albumin/Globulin (A/G)"},{name:"Jessica Marble",test:"Antineutrophil Cytoplasmic Antibodies (ANCA) Test"},{name:"Kevin Doe",test:"Luteinizing Hormone (LH) Levels Blood Test"}].map((e=>(0,w.jsx)(m.o5,{children:(0,w.jsxs)(P,{children:[(0,w.jsx)(M.Z,{title:e.name}),(0,w.jsx)(D,{children:(0,w.jsx)(h.Z,{className:"h3",text:e.test,lines:2})})]})},(0,g.x0)(5))))}),(0,w.jsx)(x.Z,{})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)("div",{className:"wrapper",children:[(0,w.jsx)(C.Z,{text:"Details"}),(0,w.jsx)(C.Z,{text:e.width<413.98?"Contacts":"Contact patient"})]}),(0,w.jsx)(C.Z,{text:"Archive",icon:"check"})]})]})]})};var R=a(65484),O=a.n(R);const z=s.ZP.div`
  margin-top: -15px;

  .row {
    display: flex;
    ${k.fU.between};
    position: relative;
    z-index: 1;

    .display {
      display: flex;
      gap: 4px;
      border-bottom: 1px dashed ${k.O9.blue};
      padding-bottom: 2px;
      color: ${k.O9.blue};
      font-size: ${k.iH[14]};
      cursor: pointer;
      width: fit-content;
    }
  }

  .ant-picker {
    &-suffix, &-separator, &-input {
      display: none;
    }

    &-range-wrapper {
      min-width: unset !important;
      max-width: 100%;
      overflow: hidden;
    }
    
    &-panel-container {
      margin-left: 0 !important;
    }

    &-panels {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-radius: 8px;
      overflow: hidden;
      margin: 10px;
    }

    &-month-panel {
      background-color: ${O()("theme",{light:k.R2.bodyBg,dark:k._4.bodyBg})};
      box-shadow: ${k.Sz.widgetShadow};
      padding-bottom: 10px;
    }

    &-header-view {
      text-align: center;

      button {
        font-weight: 700;
      }
    }

    &-content {
      margin: -10px auto 0;
      font-size: ${k.iH[14]};

      td {
        padding: 2px;
        cursor: pointer;

        &.ant-picker-cell-range {
          &-start, &-end {
            color: ${k.O9.blue};
          }
        }
      }
    }
  }
`;var B=a(66150),F=a(75801),E=a(69783),T=a(36571),L=a(98727),U=a(25277),A=a(30133),_=a(84483),Y=a(3669),G=a(89779),W=a(89390),q=a(26250),I=a(52886),K=a(52296),J=a(81851),X=a(84686),Q=a(14205),V=a(50897),ee=a(90048),te=a(21189),ae=a(40656),ne=a(30538),se=a(11056),re=a(24613);const ie=[{id:"qT0nHYC",patient:{name:"Max Morales",avatar:{jpg:W,webp:q}},type:"USG + Consultation",payment:99.95,date:f()().add(2,"hours").add(30,"minutes").toDate(),phone:"12456789"},{id:"Gldh1cZfcduM",patient:{name:"Bertie Maxwell",avatar:{jpg:J,webp:X}},type:"Complementation test",payment:40.45,date:f()().add(3,"hours").add(15,"minutes").toDate(),phone:"12456789"},{id:"F0q6BW9MPz",patient:{name:"Clyde Morales",avatar:{jpg:I,webp:K}},type:"USG + Consultation",payment:29.9,date:f()().add(2,"hours").add(15,"minutes").toDate(),phone:"12456789"},{id:"Oacx30fQL",patient:{name:"Linda Smith",avatar:{jpg:ae,webp:ne}},type:"Emergency appointment",date:f()().add(5,"hours").toDate(),phone:"12456789"},{id:"FgzlrSx",patient:{name:"Karolina Doe",avatar:{jpg:ee,webp:te}},type:"USG",payment:19.15,date:f()().add(1,"hours").add(17,"minutes").toDate(),phone:"12456789"},{id:"yl53HDa8v9yE",patient:{name:"Corey Aguilar",avatar:{jpg:Y,webp:G}},type:"Kidney function test",payment:24.5,date:f()().add(4,"hours").add(11,"minutes").toDate(),phone:"12456789"},{id:"mdfbc2DJ",patient:{name:"Max Morales",avatar:{jpg:W,webp:q}},type:"Blood test",payment:99.95,date:f()().add(1,"days").add(30,"minutes").toDate(),phone:"12456789"},{id:"jTvHHD08",patient:{name:"Marta Bloom",avatar:{jpg:Y,webp:G}},type:"ECG",date:f()().add(1,"days").toDate(),phone:"12456789"},{id:"X8pXJg",patient:{name:"Vincent Porter",avatar:{jpg:Q,webp:V}},type:"Lactose intolerance test",date:f()().add(1,"days").add(2,"hours").toDate(),phone:"12456789"},{id:"fIRF8kkDYwz",patient:{name:"Julia Peters",avatar:{jpg:se,webp:re}},type:"Magnesium test",date:f()().add(1,"days").add(2,"hours").add(30,"minutes").toDate(),phone:"12456789",payment:19.15},{id:"krr28Myt6dX",patient:{name:"Samantha Wilson",avatar:{jpg:J,webp:X}},type:"Family planning",date:f()().add(1,"days").add(3,"hours").add(18,"minutes").toDate(),phone:"12456789"},{id:"BSpQyZ",patient:{name:"Robert Fox",avatar:{jpg:I,webp:K}},type:"Cardiovascular test",date:f()().add(1,"days").add(4,"hours").add(23,"minutes").toDate(),phone:"12456789"},{id:"cPr0TSE",patient:"Milagros Maxwell",type:"Glucose test",date:f()().subtract(1,"days").toDate(),phone:"12456789",payment:19.15},{id:"64iwM7",patient:"Joel Aguilar",type:"Flu",date:f()().subtract(1,"days").add(30,"minutes").toDate(),phone:"12456789",payment:29.44},{id:"kH4sUhXCUtt",patient:"Vivianna Peters",type:"Glaucoma",date:f()().subtract(1,"days").add(45,"minutes").toDate(),phone:"12456789",payment:198.9},{id:"FYytOgsLbom",patient:"Mike Wilson",type:"Allergy",date:f()().subtract(1,"days").add(1,"hours").toDate(),phone:"12456789",avatar:{jpg:W,webp:q}},{id:"vgdnlrrM1x47",patient:{name:"Robert Fox",avatar:{jpg:I,webp:K}},type:"Gluten intolerance test",date:f()().subtract(1,"days").add(3,"hours").toDate(),phone:"12456789"}],oe=()=>{const[e,t]=(0,j.useState)(!1),[a,n]=(0,j.useState)(f()()),s=(0,j.useRef)(null),r=(0,j.useRef)(null),i=(0,_.Z)(r),d=e=>ie.filter((t=>f()(t.date).isSame(e,"day"))).sort(((e,t)=>f()(e.date).diff(f()(t.date))));return(0,w.jsxs)(o.Z,{name:"UpcomingAppointments",mobile:500,children:[(0,w.jsx)(B.Z,{title:"Upcoming appointments",style:{paddingBottom:19},flex:"column",elRef:r,children:(0,w.jsxs)(z,{children:[(0,w.jsx)("div",{className:"row",ref:s,children:(0,w.jsx)("div",{className:"display",onClick:()=>t(!0),children:(0,w.jsx)("span",{children:a.format("MMMM DD, YYYY")})})}),(0,w.jsx)(T._,{dateAdapter:E.Z,children:(0,w.jsx)(L.M,{open:e,value:a,onChange:e=>{n(e),t(!1)},PopperProps:{anchorEl:s.current},PaperProps:{className:"date-picker"},onClose:()=>t(!1),disablePast:!0,renderInput:e=>{let{ref:t,inputProps:a,disabled:n,onChange:s,value:r}=e;return(0,w.jsx)("div",{className:"input",ref:t,children:(0,w.jsx)("input",{value:r&&r.toISOString(),onChange:s,disabled:n,placeholder:"MM/DD/YYYY",...a,type:"hidden"})})},shouldDisableDate:e=>0===d(e).length})})]})}),(0,w.jsx)(l.Z,{children:(0,w.jsx)(A.Z,{height:i,children:(0,w.jsx)("div",{className:"track",children:d(a).length>0?d(a).map((e=>(0,w.jsx)(F.Z,{data:e,animated:!0},e.id))):(0,w.jsx)(U.Z,{})})})})]})};var le=a(64489),de=a(43970),ce=a(54561);const pe=s.ZP.ul`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  overflow-x: scroll;
  padding: 0 24px;
  user-select: none;
`,he=()=>{const{theme:e}=(0,s.Fg)(),t=(0,j.useRef)(null),a=()=>{const e=[];for(let t=0;t<n[r].length;t++)e.push(`${8+t}:00`);return e},n=[[37,12,58,20,0,10,15,44,19,68,50],[20,55,44,31,75,0,0,59,84,20,10],[80,50,30,60,40,20,50,65,85,0,40]],{index:r,navigate:i}=(0,ce.Z)(n);return(0,j.useEffect)((()=>{t.current&&t.current.scrollTo(0,0)}),[r]),(0,w.jsxs)(o.Z,{name:"DoctorOverallAppointment",shadow:!0,children:[(0,w.jsx)(d.Z,{title:"Overall Appointment",style:{paddingBottom:17},handler:i}),(0,w.jsx)(l.Z,{sidePadding:!0,style:{paddingBottom:20},children:(0,w.jsx)(pe,{innerRef:t,as:de.Z,activationDistance:5,component:"ul",children:n[r].map(((t,n)=>(0,w.jsx)(le.Z,{label:a()[n],value:t,color:"light"===e?k.O9.azure:k.O9.blue},a()[n])))})})]})};var xe=a(47242),me=a(36038),ue=a(19913),ge=a(28265),be=a(18602),fe=a(71827),je=a(22426);const ve=[{new:400,returned:700},{new:300,returned:540},{new:645,returned:400},{new:328,returned:590},{new:500,returned:250},{new:280,returned:440}],ye=()=>{const[e,t]=(0,j.useState)(null),{theme:a}=(0,s.Fg)(),n=window.matchMedia("(max-width: 767px)").matches;return(0,w.jsxs)(o.Z,{name:"PatientsPace",shadow:!0,children:[(0,w.jsx)(B.Z,{title:"Patients pace"}),(0,w.jsxs)(l.Z,{style:{padding:0,overflow:"hidden"},children:[(0,w.jsx)(ue.h,{height:n?116:"100%",children:(0,w.jsxs)(ge.T,{data:ve,margin:!1,children:[(0,w.jsxs)("defs",{children:[(0,w.jsxs)("linearGradient",{id:"new",x1:"374",y1:"118",x2:"374",y2:"0.363342",gradientUnits:"userSpaceOnUse",children:[(0,w.jsx)("stop",{offset:"0.00548986",stopColor:"white",stopOpacity:.05}),(0,w.jsx)("stop",{offset:"1",stopColor:"#7ED321",stopOpacity:.05})]}),(0,w.jsxs)("linearGradient",{id:"returned",x1:"315.382",y1:"75.7344",x2:"315.382",y2:"2.03396",gradientUnits:"userSpaceOnUse",children:[(0,w.jsx)("stop",{stopColor:"#171819",stopOpacity:"0.01"}),(0,w.jsx)("stop",{offset:"1",stopColor:"#29E7CD",stopOpacity:"0.7"})]})]}),(0,w.jsx)(be.u,{dataKey:"new",type:"monotone",stroke:"#7ED321",strokeWidth:3,fill:"dark"===a?"url(#new)":"none",activeDot:{r:4,fill:"#7ED321",stroke:"#7ED321",strokeWidth:2},onMouseOver:()=>t("new")}),(0,w.jsx)(be.u,{dataKey:"returned",type:"monotone",stroke:"#29E7CD",strokeWidth:3,fill:"dark"===a?"url(#returned)":"none",activeDot:{r:4,fill:"#29E7CD",stroke:"#29E7CD",strokeWidth:2},onMouseOver:()=>t("returned")}),(0,w.jsx)(fe.u,{cursor:!1,content:(0,w.jsx)(je.Z,{tooltip:e,multi:!0})})]})}),(0,w.jsxs)(xe.Z,{overlay:!0,children:[(0,w.jsx)(me.Z,{color:"green",legend:"New patients"}),(0,w.jsx)(me.Z,{color:"teal",legend:"Returned patients"})]})]})]})};var we=a(6601),Ze=a(25053);const ke=e=>{let{children:t,onClose:a}=e;return console.log("Rendering Modal"),(0,w.jsx)("div",{className:"modal-backdrop",children:(0,w.jsxs)("div",{className:"modal-content",style:{width:"90%",height:"70%"},children:[t,(0,w.jsx)("button",{onClick:a,className:"modal-close-button",children:"\xd7"})]})})},$e=()=>{const[e,t]=(0,j.useState)(!1);console.log("Is showOrdersModal true?",e);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(n.Z,{title:"Basic Doctor Dashboard",children:[(0,w.jsx)("div",{children:(0,w.jsx)(Z,{onOpenOrdersModal:()=>{console.log("handleOpenOrdersModal"),t(!0)}})},"next-patient"),(0,w.jsx)("div",{children:(0,w.jsx)(S,{})},"laboratory-tests"),(0,w.jsx)("div",{children:(0,w.jsx)(oe,{})},"doctor-upcoming-appointments"),(0,w.jsx)("div",{children:(0,w.jsx)(he,{})},"doctor-overall-appointment"),(0,w.jsx)("div",{children:(0,w.jsx)(ye,{})},"patients-pace"),(0,w.jsx)("div",{children:(0,w.jsx)(we.Z,{})},"recent-questions"),(0,w.jsx)("div",{children:(0,w.jsx)(Ze.Z,{nav:"tabs"})},"confirmed-diagnoses")]}),(0,w.jsx)("div",{children:e&&(0,w.jsx)(ke,{onClose:()=>{t(!1)},children:(0,w.jsx)("p",{children:"Orders content..."})})})]})}},25053:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(249),s=a(66150),r=a(90004),i=a(20760),o=a(28789),l=a(14161);const d=o.ZP.ul`
  gap: 22px;
  margin-top: 20px;
  ${l.fU.col}
`,c=o.ZP.div`
  display: flex;
  ${l.fU.between}
  margin-bottom: 7px;
  font-size: ${l.iH[14]};
`,p=o.ZP.div`
  display: flex;
  gap: 4px;
  font-family: ${l.Rq.accent};
  
  .num {
    font-weight: 500;
  }
  & + .label {
    text-transform: capitalize;
  }
`;var h=a(33926),x=a(80184);const m=e=>{let{data:t,period:a}=e;const{label:n}=t,s=t[a].progress,r=t[a].goal;return(0,x.jsxs)("li",{children:[(0,x.jsxs)(c,{children:[(0,x.jsxs)(p,{children:[(0,x.jsx)("span",{className:"num",children:s})," of",(0,x.jsx)("span",{className:"num",children:r})]}),(0,x.jsx)("span",{className:"label",children:n})]}),(0,x.jsx)("div",{className:"confirmed_list-item_visualizer",children:(0,x.jsx)(h.Z,{color:l.kf[n],value:(i=s,i/(r/100))})})]});var i},u=e=>{let{data:t,period:a,short:n=!1}=e;return(0,x.jsx)(d,{children:t.map((e=>{const{label:t}=e;return n&&"diabetes"===t?null:(0,x.jsx)(m,{data:e,period:a},t)}))})};var g=a(80879),b=a(17350),f=a(54561);const j=[{label:"cold",year:{progress:648,goal:751},month:{progress:53,goal:104},week:{progress:18,goal:36}},{label:"fracture",year:{progress:215,goal:651},month:{progress:90,goal:142},week:{progress:13,goal:58}},{label:"concussion",year:{progress:84,goal:120},month:{progress:31,goal:87},week:{progress:11,goal:43}},{label:"hepatitis",year:{progress:804,goal:846},month:{progress:358,goal:501},week:{progress:182,goal:330}},{label:"dermatitis",year:{progress:458,goal:901},month:{progress:215,goal:354},week:{progress:130,goal:261}},{label:"diabetes",year:{progress:302,goal:514},month:{progress:187,goal:298},week:{progress:74,goal:105}}],v=e=>{let{nav:t}=e;const{period:a,periods:o,setPeriod:l}=(0,b.Z)(),{index:d,navigate:c}=(0,f.Z)(o);return(0,x.jsxs)(n.Z,{name:"ConfirmedDiagnosesTabs",children:["tabs"===t?(0,x.jsx)(s.Z,{title:"Confirmed Diagnoses",style:{paddingBottom:16}}):(0,x.jsx)(r.Z,{title:"Confirmed Diagnoses",handler:c,style:{paddingBottom:8}}),(0,x.jsxs)(i.Z,{style:{paddingBottom:26},children:["tabs"===t&&(0,x.jsx)(g.Z,{current:a,handler:l}),(0,x.jsx)(u,{short:"tabs"===t,period:"tabs"===t?a:o[d],data:j})]})]})}},6601:(e,t,a)=>{a.d(t,{Z:()=>H});var n=a(14161),s=a(28789),r=a(65484),i=a.n(r);const o=s.ZP.div`
  ${n.fU.col};
  gap: 20px;
  height: 100%;
  overflow-y: auto;
  padding: 0 24px;
`,l=s.ZP.div`
  padding-bottom: 20px;
  &:not(:last-of-type) {
    border-bottom: ${i()("theme",{light:n.Sz.dashedLight,dark:n.Sz.dashedDark})};
  }
  direction: ltr;
`,d=s.ZP.div`
  display: flex;
  gap: 24px;

  ${n.fU.between}
  .h3 {
    max-width: 280px;
    margin-top: 8px;
    text-align: left;
  }
`,c=s.ZP.div`
  gap: 20px;
  display: flex;
  margin-top: 16px;
`;var p=a(249),h=a(66150),x=a(20760),m=a(92637),u=a(36862),g=a(13035),b=a(9111),f=a(71856),j=a(34909),v=a(1705),y=a(80184);const w=e=>{let{date:t,text:a}=e;return(0,y.jsx)(f.M,{children:(0,y.jsxs)(l,{as:j.E.div,...v.f,initial:{opacity:0},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(b.Z,{date:t,time:!0}),(0,y.jsxs)(d,{children:[(0,y.jsx)(g.Z,{className:"h3",lines:2,text:a}),(0,y.jsx)(u.Z,{shape:"round",icon:"comment-text",label:"Messages"})]})]}),(0,y.jsxs)(c,{children:[(0,y.jsx)(m.Z,{text:"Read more"}),(0,y.jsx)(m.Z,{text:"Reply"})]})]})})};var Z=a(1065),k=a(25228),$=a(43896),D=a(25984),P=a(72426),N=a.n(P),M=a(72791),C=a(13967);const H=()=>{const{theme:e}=(0,s.Fg)(),t=["all","unread","new"],[a,r]=(0,M.useState)(0),[i,l]=(0,M.useState)(!1),d=(0,C.Z)().direction;(0,M.useEffect)((()=>{r(1),setTimeout((()=>{l(!0)}),1e3)}),[]);const c=[{id:"abc123",label:"unread",date:N()(),text:"Addiction blood bank bone marrow contagious?"},{id:"abc124",label:"new",date:N()().subtract(1,"days").subtract(1,"hours").toDate(),text:"Triggered asthma anesthesia bone marrow?"},{id:"abc125",label:"unread",date:N()().subtract(5,"days").subtract(2,"hours").subtract(30,"minutes").toDate(),text:"Lorem ipsum dolor sit amet, consectetur?"},{id:"abc126",label:"new",date:N()().subtract(10,"days").subtract(5,"hours").subtract(10,"minutes").toDate(),text:"Sed do eiusmod tempor incididunt ut labore et?"}];return(0,y.jsxs)(p.Z,{name:"RecentQuestions",mobile:388,children:[(0,y.jsx)(h.Z,{title:"Recent Questions",flex:"column",children:(0,y.jsx)(k.Z,{value:a,onChange:(e,t)=>{r(t)},style:{margin:"0 -22px"},sx:{padding:"0 22px",borderRadius:"8px",display:"flex",alignItems:"center","& .MuiTabs-indicator":{display:"none"},"& .MuiTabs-flexContainer":{gap:"8px",alignItems:"center"},"& .MuiTab-root":{padding:"4px 8px",borderRadius:"8px",fontSize:n.iH[12],minHeight:"20px",minWidth:"auto",lineHeight:"1",textTransform:"capitalize",fontFamily:n.Rq.accent,color:n.O9.blue,fontWeight:400,transition:"background-color var(--transition), color var(--transition)"},"& .MuiTab-root:hover, & .Mui-selected":{backgroundColor:"dark"===e?n.R2.text:n.R2.widgetBg,color:"dark"===e&&"#fff !important"},minHeight:"40px",backgroundColor:"dark"===e&&n._4.highlight},children:t.map((e=>(0,y.jsx)($.Z,{label:e},(0,D.x0)())))})}),(0,y.jsx)(x.Z,{style:{padding:0},children:(0,y.jsx)(Z.ZP,{index:a,onChangeIndex:e=>{r(e)},animateTransitions:i,children:t.map(((e,t)=>(0,y.jsx)(o,{children:0===a?c.map((e=>(0,y.jsx)(w,{dir:d,date:e.date,text:e.text},e.id))):c.filter((t=>t.label===e)).map((e=>(0,y.jsx)(w,{dir:d,date:e.date,text:e.text},e.id)))},e)))})})]})}}}]);
//# sourceMappingURL=4502.ff879c9a.chunk.js.map