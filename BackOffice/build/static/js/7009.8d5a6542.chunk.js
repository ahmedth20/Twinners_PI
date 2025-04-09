"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[7009],{64489:(e,a,t)=>{t.d(a,{Z:()=>s});var i=t(28789),l=t(33926),n=t(14161),r=t(80184);const o=i.ZP.li`
  ${n.fU.col}
  gap: 12px;
  align-items: center;
  .label {
    font-size: ${n.iH[10]};
    text-transform: uppercase;
  }
  
  .progressbar {
    height: ${e=>e.barHeight}px;
    width: 6px;
    .MuiLinearProgress-bar {
      transform: translateY(${e=>100-e.value}%) !important;
    }
  }
`,s=e=>{let{label:a,value:t,barHeight:i=75,color:n}=e;return(0,r.jsxs)(o,{value:t,barHeight:i,children:[(0,r.jsx)(l.Z,{value:t,color:n}),(0,r.jsx)("span",{className:"label",children:a})]})}},36038:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(31843),l=t(85335),n=t(80184);const r=e=>{let{color:a,legend:t}=e;return(0,n.jsxs)(i.H,{children:[(0,n.jsx)(l.Lm,{color:a})," ",t]})}},47242:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(31843),l=t(80184);const n=e=>{let{children:a,overlay:t}=e;return(0,l.jsx)(i.a,{overlay:t,children:a})}},31843:(e,a,t)=>{t.d(a,{H:()=>r,a:()=>n});var i=t(28789),l=t(14161);const n=i.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,r=i.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${l.Rq.accent};
  font-size: ${l.iH[10]};
`},92637:(e,a,t)=>{t.d(a,{Z:()=>d});var i=t(28789),l=t(65484),n=t.n(l),r=t(14161),o=t(80184);const s=i.ZP.button`
  ${r.fU.center}
  font-size: ${r.iH[12]};
  padding: 4px 8px;
  border-radius: 8px;
  color: ${r.O9.blue};
  background-color: ${n()("theme",{light:r.R2.bodyBg,dark:r._4.bodyBg})};
  min-height: 20px;
  gap: 4px;
  color: ${r.O9.blue};
  transition: color var(--transition), background-color var(--transition);
  font-family: ${r.Rq.accent};

  &:hover, &:focus {
    background-color: ${r.O9.blue};
    color: #fff;
  }

  &.active {
    color: ${n()("theme",{light:r.O9.blue,dark:r.R2.bodyBg})};
    background-color: ${n()("theme",{light:r.R2.highlight,dark:r.R2.text})};
  }
`,d=e=>{let{text:a,handler:t,icon:i,style:l,className:n}=e;return(0,o.jsxs)(s,{className:n?`pill ${n}`:"pill",onClick:t,style:l,children:[i?(0,o.jsx)("i",{className:`icon-${i}`}):null," ",a]})}},33926:(e,a,t)=>{t.d(a,{Z:()=>o});var i=t(14161),l=t(57482),n=t(28789),r=t(80184);const o=e=>{let{color:a=i.O9.blue,value:t,style:o={}}=e;const{theme:s}=(0,n.Fg)();return(0,r.jsx)(l.Z,{className:"progressbar",variant:"determinate","aria-label":t,value:t,sx:{backgroundColor:"light"===s?"#E4EAF0":i._4.highlight,height:6,borderRadius:2,...o,"& .MuiLinearProgress-bar":{backgroundColor:a,borderRadius:2}}})}},69517:(e,a,t)=>{t.d(a,{Z:()=>v});var i=t(28789),l=t(65484),n=t.n(l),r=t(14161),o=t(13630),s=t(13668);const d=n()("theme",{light:r.R2.highlight,dark:r._4.highlight}),c=n()("theme",{light:r.R2.text,dark:r._4.text}),p=(0,i.ZP)(s.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${d};
      border-radius: 8px;
      font-size: ${r.iH[16]};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${r.O9.blue} !important;
      }

      &:hover {
        box-shadow: ${n()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${r.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${n()("theme",{light:"#A2C0D4",dark:r.O9.gray})};
        font-size: ${r.iH[12]};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${c};
      background-color: ${d};
      border-radius: 8px;
      animation: ${o.Ji} var(--transition);
      z-index: 100;

      &-list {
        max-height: 180px;
        overflow-y: auto;
        scroll-behavior: smooth;
        z-index: 100;
      }
    }

    &__indicator, &__indicator-separator {
      display: none;
    }

    &__option {
      cursor: pointer;
      transition: var(--transition);

      &:hover,
      &--is-focused,
      &--is-selected {
        background: transparent;
        color: ${r.O9.blue};
      }
    }

    &__single-value {
      color: ${n()("theme",{light:r.R2.text,dark:r._4.text})};
    }
  }
`,m=(0,i.ZP)(p)`
  .Select {
    &__control {
      font-size: ${r.iH[14]};
    }

    &__input-container {
      color: ${c};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,h=(0,i.ZP)(p)`
  .Select {
    &__control {
      background-color: transparent;
      width: fit-content;
      font-weight: 500;
      font-family: ${r.Rq.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${r.iH[18]};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${r.AV.tablet} {
    .Select__control {
      font-size: ${r.iH[20]};
    }
  }
`,x=(0,i.ZP)(p)`
  .Select {
    &__control {
      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__input-container {
      padding-left: 16px;
      color: inherit;
    }

    &__value-container {
      padding: 0 16px 0 0;
    }

    &__value-container,
    &__option {
      .user-option {
        display: flex;
        align-items: center;
        gap: 10px;
        color: inherit;
      }
    }
  }
`;var u=t(22723),g=t(72791),b=t(80184);const v=e=>{let{label:a,options:t,variant:i,value:l,changeHandler:n,placeholder:r}=e;(0,g.useEffect)((()=>{r||null!==l||n(t[0])}),[]);const[o]=(0,g.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),s={classNamePrefix:"Select",inputId:a,isSearchable:"user"!==i,options:t,value:l,onChange:n,placeholder:r,openMenuOnFocus:!0,components:{Control:e=>{let{children:a,...t}=e;return(0,b.jsxs)(u.c.Control,{...t,children:[a,(0,b.jsx)("i",{className:`icon icon-${"minimal"===i?"caret":"chevron"}-down`})]})},Menu:e=>(0,b.jsx)(u.c.Menu,{...e,className:"menu",children:e.children})},id:o,blurInputOnSelect:!0,className:`select-${i}`};switch(i){default:case"basic":return(0,b.jsx)(m,{...s});case"minimal":return(0,b.jsx)(h,{...s});case"user":return(0,b.jsx)(x,{...s})}}},9111:(e,a,t)=>{t.d(a,{Z:()=>d});var i=t(28789),l=t(14161),n=t(72426),r=t.n(n),o=t(80184);const s=i.ZP.span`
  display: flex;
  gap: 8px;
  font-family: ${l.Rq.accent};
  font-size: ${l.iH[10]};
  text-transform: uppercase;
`,d=e=>{let{date:a,text:t,time:i=!1}=e;return(0,o.jsxs)(s,{children:[t&&(0,o.jsx)("span",{children:t}),(0,o.jsx)("span",{children:r()(a).format("DD MMM YYYY")}),i&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"/"}),(0,o.jsx)("span",{children:r()(a).format("hh:mm A")})]})]})}},22426:(e,a,t)=>{t.d(a,{Z:()=>o,m:()=>r});var i=t(28789),l=t(14161),n=t(80184);const r=i.ZP.div`
  font-family: ${l.Rq.accent};
  font-size: ${l.iH[10]};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${l.R2.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${l.fU.center}
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
    background-color: ${l.R2.text};
    display: ${e=>e.arrow?"block":"none"};
  }
`,o=e=>{let{active:a,payload:t,tooltip:i,arrow:l=!1,multi:o=!1,...s}=e;if(o){if(!a||!i)return null;for(const e of t)if(e.dataKey===i)return(0,n.jsx)(r,{arrow:l,children:e.value});return null}return a&&t[0]?(0,n.jsxs)(r,{arrow:l,children:[" ",t[0].value," ",s.right&&t[0].dataKey]}):null}},13035:(e,a,t)=>{t.d(a,{Z:()=>s});var i=t(31182),l=t(45942),n=t.n(l),r=t(80184);const o=n()()(i.Z),s=e=>{let{className:a,text:t,lines:i=1}=e;return(0,r.jsx)(o,{className:a,text:t,maxLine:i,ellipsis:"...",trimRight:!0,basedOn:"letters"})}},20760:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(51899),l=t(80184);const n=e=>{let{children:a,style:t,sidePadding:n=!1,elRef:r,...o}=e;return(0,l.jsx)(i.uT,{ref:r,sidePadding:n,style:t,...o,children:a})}},66150:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(51899),l=t(80184);const n=e=>{let{title:a,children:t,sidePadding:n=!1,flex:r="row",elRef:o,...s}=e;return(0,l.jsxs)(i.h4,{className:s.className?s.className:"",sidePadding:n,flex:r,ref:o,style:s.style,children:[(0,l.jsx)("h2",{className:"title",children:a}),t]})}},90004:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(51899),l=t(66150),n=t(80184);const r=e=>{let{title:a,handler:t,sidePadding:r,children:o,disabled:s,...d}=e;return(0,n.jsxs)(l.Z,{title:a,sidePadding:r,style:d.style,className:"nav",children:[(0,n.jsxs)(i.JL,{children:[(0,n.jsx)("button",{onClick:t,"data-direction":"prev",className:s?"disabled":"","aria-label":"Previous",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("button",{onClick:t,"data-direction":"next",className:s?"disabled":"","aria-label":"Next",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]}),o]})}},249:(e,a,t)=>{t.d(a,{Z:()=>o});var i=t(51899),l=t(34909),n=t(79591),r=t(80184);const o=e=>{let{name:a,children:t,style:o,shadow:s=!1,...d}=e;const{direction:c}=(0,n.jt)();return(0,r.jsx)(i.W2,{as:l.E.div,"data-widget":a,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:o,className:s?"shadow":"",dir:c,mobile:d.mobile,children:t})}},51899:(e,a,t)=>{t.d(a,{JL:()=>u,Pz:()=>h,W2:()=>p,h4:()=>m,iz:()=>b,uT:()=>x,wp:()=>g});var i=t(28789),l=t(65484),n=t.n(l),r=t(14161);const o=n()("theme",{light:r.R2.widgetBg,dark:r._4.widgetBg}),s=n()("theme",{light:r.R2.bodyBg,dark:r._4.bodyBg}),d=n()("theme",{light:r.R2.shadow,dark:r._4.shadow}),c=n()("theme",{light:r.R2.highlight,dark:r._4.highlight}),p=i.ZP.div`
  box-shadow: ${r.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${o};
  overflow: hidden;
  ${r.fU.col};
  min-height: 182px;
  flex-grow: 1;
  ${e=>e.mobile&&`height: ${e.mobile}px`};
  // iOS fix
  transform: translate3d(0, 0, 0);
  
  &.shadow {
    &:before, &:after {
      display: block;
    }
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    background: ${d};
    height: 100%;
    width: 24px;
    z-index: 3;
    filter: blur(1px);
    display: none;
  }

  &:before {
    left: -2px;
    transform: ${e=>"rtl"===e.dir?"scaleX(-1)":"scaleX(1)"};
  }

  &:after {
    right: -2px;
    transform: rotate(180deg) ${e=>"rtl"===e.dir?"scaleX(-1)":"scaleX(1)"};
  }
  
  ${r.AV.tablet} {
    height: 100%;
  }
`,m=i.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":r.fU.between};
  padding: ${e=>e.sidePadding?"24px 0 20px":"24px 24px 20px"};
  flex-wrap: wrap;
  gap: 20px 10px;
  position: relative;
  z-index: 10;

  .title {
    margin: ${e=>e.sidePadding?"0 24px":"0"};
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &.nav .title {
    max-width: calc(100% - 60px);
    display: block;
  }
`,h=i.ZP.div`
  ${r.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${c};
  }
`,x=i.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${r.fU.col};
  flex-grow: 1;
`,u=i.ZP.div`
  font-size: ${r.iH[14]};
  display: flex;
  align-items: center;
  color: ${r.O9.gray};
  margin-right: -9px;

  button {
    opacity: 0.5;
    transition: opacity var(--transition);
    padding: 0 9px;

    &:hover, &:focus {
      opacity: 1;
    }
    
    &.disabled {
      visibility: hidden;
      pointer-events: none;
    }
  }
`,g=i.ZP.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${s};
  flex-grow: 1;
`,b=i.ZP.div`
  height: 2px;
  background-color: ${s};
  width: 100%;
`},1705:(e,a,t)=>{t.d(a,{f:()=>i});const i={initial:{opacity:0},exit:{opacity:0},animate:{opacity:1},transition:{duration:.3,ease:"easeIn"}}},22172:(e,a,t)=>{t.d(a,{b_:()=>r,i7:()=>o,tV:()=>s});var i=t(12298),l=t(83687),n=t(80184);const r=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=()=>{let e=[];return i.q.forEach((a=>{e.push({value:a.id,label:(0,n.jsxs)("div",{className:"user-option",children:[(0,n.jsx)(l.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,n.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,t)=>{t.d(a,{q:()=>u});var i=t(65710),l=t(37512),n=t(76155),r=t(62056),o=t(67583),s=t(79168),d=t(29260),c=t(33375);const p=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",m=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var h=t(43928),x=t(4681);const u=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:n,webp:r},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(99976),webp:t(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:p,webp:m},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:i,webp:l},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:d,webp:c},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:h,webp:x},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},54561:(e,a,t)=>{t.d(a,{Z:()=>l});var i=t(72791);const l=e=>{const[a,t]=(0,i.useState)(0);return{index:a,setIndex:t,navigate:i=>{const{direction:l}=i.currentTarget.dataset;"next"===l?a+1===e.length?t(0):t(a+1):"prev"===l&&t(a-1<0?e.length-1:a-1)}}}},39314:(e,a,t)=>{t.d(a,{Z:()=>z});var i=t(28789),l=t(14161);const n=i.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${l.AV.tablet} {
    padding: 20px 30px 30px;
    ${l.fU.col};
  }

  ${l.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,r=i.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,o=i.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${l.AV.laptopL} {
    margin-top: 40px;
  }

  ${l.AV.desktop} {
    flex-direction: row;
    ${l.fU.between};
  }
`,s=i.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,d=i.ZP.div`
  ${l.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=t(85335),p=t(59242),m=t(54270),h=t(44165),x=t(73457),u=t(10586),g=t(79591),b=t(59434),v=t(74037),f=t(94397),y=t(80184);const w=(0,u.withSize)()((0,x.WidthProvider)(x.Responsive)),j=i.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,$=e=>{let{layouts:a,children:t,id:i,desktop:l}=e;const{isLayoutEditable:n,fontScale:r}=(0,g.jt)(),o=(0,b.I0)(),s=(0,f.Z)().width<768;return(0,y.jsx)(y.Fragment,{children:s?(0,y.jsx)(j,{children:t}):(0,y.jsx)(w,{className:"content_layout",layouts:a,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===r?182:182+11*r,isDraggable:n,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:l?e=>{n&&(o((0,v.fc)({id:i,layouts:e})),o((0,v.m8)()))}:void 0,children:t})})};var k=t(34909),Z=t(62773),_=t.n(Z),P=t(57689),R=t(72791);const z=e=>{let{title:a,children:t,hasBadge:i,hasTitle:l=!0,qty:x}=e;const u=(0,R.useRef)(null),g=_()(),{width:v}=(0,f.Z)(),w=v>767.98,{pathname:j}=(0,P.TH)(),Z=j.includes("dashboard"),z=j.replace("/",""),F=(0,b.v9)((e=>e.layout.layout))[z];return(0,R.useEffect)((()=>{u.current&&(u.current.scrollTop=0)}),[j]),(0,y.jsxs)(n,{ref:u,children:[(0,y.jsx)(m.q,{children:(0,y.jsx)("title",{children:`Smart190 | ${a}`})}),(0,y.jsxs)(d,{children:[(0,y.jsxs)(o,{as:k.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[l&&(0,y.jsxs)(r,{children:[a," ",i&&x&&x>0&&(0,y.jsxs)(c.GS,{children:["+",x]})]}),w&&(0,y.jsxs)(s,{children:[g.isDesktop()&&(0,y.jsxs)(y.Fragment,{children:[Z&&(0,y.jsx)(p.t,{children:(0,y.jsx)(h.XO,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(h.ot,{})})]}),(0,y.jsx)(p.t,{children:(0,y.jsx)(h.t7,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(h.zj,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(h.vm,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(h.jf,{})})]})]}),F?(0,y.jsx)($,{id:z,layouts:F,desktop:g.isDesktop(),children:t}):t]})]})}},71789:(e,a,t)=>{t.r(a),t.d(a,{default:()=>L});var i=t(39314),l=t(19889),n=t(14161),r=t(25606),o=t(51899),s=t(249),d=t(90004),c=t(20760),p=t(47242),m=t(36038),h=t(19913),x=t(5749),u=t(82839),g=t(12891),b=t(90466),v=t(13386),f=t(71827),y=t(22426),w=t(54561),j=t(28789),$=t(16945);const k=[{men:120,women:216,children:50},{men:85,women:180,children:40},{men:155,women:281,children:12},{men:193,women:220,children:23},{men:110,women:311,children:67},{men:94,women:122,children:10},{men:214,women:455,children:80},{men:118,women:315,children:90},{men:407,women:536,children:21},{men:117,women:205,children:44},{men:280,women:148,children:95},{men:125,women:302,children:87}],Z=[{men:168,women:270,children:15},{men:165,women:217,children:56},{men:298,women:394,children:105},{men:390,women:440,children:146},{men:480,women:305,children:180},{men:260,women:203,children:18},{men:404,women:202,children:25},{men:518,women:400,children:90},{men:366,women:256,children:10},{men:114,women:333,children:180},{men:400,women:150,children:99},{men:280,women:356,children:41}],_=[{men:384,women:502,children:211},{men:222,women:184,children:69},{men:287,women:405,children:356},{men:390,women:100,children:150},{men:500,women:120,children:305},{men:313,women:456,children:202},{men:102,women:211,children:145},{men:365,women:647,children:13},{men:666,women:333,children:222},{men:444,women:222,children:111},{men:366,women:422,children:305},{men:125,women:302,children:87}];var P=t(80184);const R=()=>{const{theme:e}=(0,j.Fg)(),a=["2020","2021","2022"],{index:t,navigate:i}=(0,w.Z)(a),l=(()=>{switch(a[t]){default:case"2020":return k;case"2021":return Z;case"2022":return _}})(),R={fontSize:n.iH[10],fontFamily:n.Rq.accent,fill:"light"===e?n.R2.text:n._4.text};return(0,P.jsxs)(s.Z,{name:"GenderScatter",mobile:500,children:[(0,P.jsx)(d.Z,{title:"Patients by gender",handler:i}),(0,P.jsx)(o.wp,{as:"div",style:{flexGrow:"unset"},children:(0,P.jsxs)(p.Z,{children:[(0,P.jsx)(m.Z,{color:"azure",legend:"men"}),(0,P.jsx)(m.Z,{color:"peach",legend:"women"}),(0,P.jsx)(m.Z,{color:"teal",legend:"children"})]})}),(0,P.jsx)(c.Z,{style:{padding:0,overflow:"hidden"},children:(0,P.jsx)(h.h,{id:"genderScatter",width:"100%",height:"100%",children:(0,P.jsxs)(x.G,{margin:!1,data:l,children:[(0,P.jsx)(u.q,{stroke:"light"===e?n.O9.light_gray:n.O9.dark,strokeDasharray:"3 3",strokeLinecap:"square",horizontal:!0,width:"100%",height:"100%"}),(0,P.jsx)(g.B,{type:"number",tickCount:10,tickLine:!1,padding:{top:55,bottom:55},axisLine:!1,dx:-10,style:R}),(0,P.jsx)(b.K,{type:"category",tickCount:12,tickLine:!1,padding:{left:24,right:24},axisLine:!1,dy:-12,mirror:!0,tickFormatter:e=>(0,$.v)(e+1),style:R}),(0,P.jsx)(v.b,{dataKey:"men",fill:n.O9.azure,style:{filter:`drop-shadow(0 0 6px ${(0,r.m4)(n.O9.azure,.5)})`}}),(0,P.jsx)(v.b,{dataKey:"women",fill:n.O9.peach,style:{filter:`drop-shadow(0 0 6px ${(0,r.m4)(n.O9.peach,.5)})`}}),(0,P.jsx)(v.b,{dataKey:"children",fill:n.O9.teal,style:{filter:`drop-shadow(0 0 6px ${(0,r.m4)(n.O9.teal,.5)})`}}),(0,P.jsx)(f.u,{cursor:!1,content:(0,P.jsx)(y.Z,{})})]})})})]})};var z=t(66150),F=t(69517),S=t(28265),O=t(18602),C=t(64489),N=t(22172),H=t(72791),T=t(12298);const M=j.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  .chart {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: -30px;
    right: -30px;
    opacity: .2;
  }
`,q=j.ZP.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
  position: relative;
  z-index: 2;
  gap: 24px;
  overflow-x: auto;
  padding: 0 24px;
  flex-grow: 1;
`,D=()=>{const{theme:e}=(0,j.Fg)(),a=(0,N.tV)(),[t,i]=(0,H.useState)(a[0]);return(0,P.jsxs)(s.Z,{name:"DailyAppointmentsByDoc",shadow:!0,children:[(0,P.jsx)(z.Z,{title:"Daily appointments"}),(0,P.jsxs)(c.Z,{sidePadding:!0,children:[(0,P.jsx)("div",{style:{margin:"0 24px"},children:(0,P.jsx)(F.Z,{options:a,value:t,variant:"user",changeHandler:e=>i(e)})}),(0,P.jsxs)(M,{children:[(0,P.jsx)("div",{className:"chart",children:(0,P.jsx)(h.h,{width:"100%",height:160,children:(0,P.jsxs)(S.T,{data:T.q.find((e=>e.id===t.value)).daily,children:[(0,P.jsxs)("defs",{children:[(0,P.jsxs)("radialGradient",{id:"dark",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(187) rotate(90) scale(188 374)",children:[(0,P.jsx)("stop",{stopColor:"#0496FF"}),(0,P.jsx)("stop",{offset:"1",stopColor:"#171819"})]}),(0,P.jsxs)("radialGradient",{id:"light",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(187) rotate(90) scale(188 374)",children:[(0,P.jsx)("stop",{stopColor:"#0496FF"}),(0,P.jsx)("stop",{offset:"1",stopColor:"#0496FF",stopOpacity:"0.01"})]})]}),(0,P.jsx)(O.u,{type:"monotone",dataKey:"value",stroke:"none",fill:`url(#${"dark"===e?"dark":"light"})`})]})})}),(0,P.jsx)(q,{children:T.q.find((e=>e.id===t.value)).daily.map((e=>(0,P.jsx)(C.Z,{label:e.label,value:e.value,barHeight:208,color:n.O9.azure},e.label)))})]})]})]})};var U=t(6601);const L=()=>(0,P.jsxs)(i.Z,{title:"Dashboard",children:[(0,P.jsx)("div",{children:(0,P.jsx)(l.Z,{})},"heart-rate"),(0,P.jsx)("div",{children:(0,P.jsx)(R,{})},"gender-scatter"),(0,P.jsx)("div",{children:(0,P.jsx)(D,{})},"daily-app"),(0,P.jsx)("div",{children:(0,P.jsx)(U.Z,{})},"questions")]})},13630:(e,a,t)=>{t.d(a,{Ji:()=>o,So:()=>r,dC:()=>l,sd:()=>n});var i=t(28789);const l=i.F4`
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
`,n=i.F4`
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
`,r=i.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,o=i.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;i.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`},16945:(e,a,t)=>{function i(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function l(e){return e<10?"0"+e:e}t.d(a,{t:()=>i,v:()=>l})},19889:(e,a,t)=>{t.d(a,{Z:()=>u});var i=t(14161),l=t(28789),n=t(65484),r=t.n(n),o=t(13630),s=t(25606);const d=r()("theme",{light:(0,s.m4)(i.O9.light_gray,.5),dark:(0,s.m4)(i.O9.dark,.5)}),c=l.ZP.div`
  display: flex;
  align-items: center;
  color: ${i.O9.absolute_red};
  margin: 24px 24px 0;
  font-family: ${i.Rq.accent};

  .h1 {
    line-height: .9;
    margin-right: 8px;
    flex-grow: unset;
  }

  .icon {
    font-size: ${i.iH[20]};
    margin-right: 10px;
    animation: ${o.dC} 3s linear infinite;
    transition: all .5s;
    will-change: transform;
  }

  .text {
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 2px;
    font-size: ${i.iH[10]};
    color: ${r()("theme",{light:i.R2.text,dark:i._4.text})};
  }
`,p=l.ZP.div`
  height: 100%;
  background-size: 20px 20px;
  background-image: linear-gradient(to right, ${d} 1px, transparent 1px),
  linear-gradient(to bottom, ${d} 1px, transparent 1px);
  position: relative;
  ${i.fU.col};
  justify-content: center;
  margin-top: -4px;

  &:before, &:after {
    content: '';
    display: block;
    height: 80px;
    position: absolute;
    width: 100%;;
    background: ${r()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`;var m=t(249),h=t(69690),x=t(80184);const u=()=>(0,x.jsxs)(m.Z,{name:"HeartRate",children:[(0,x.jsxs)(c,{children:[(0,x.jsx)("i",{className:"icon icon-heart"}),(0,x.jsx)("span",{className:"h1",children:"94"}),(0,x.jsx)("span",{className:"text",children:"bpm"})]}),(0,x.jsx)(p,{children:(0,x.jsx)(h.Z,{color:i.O9.absolute_red,beatFrequency:1500,density:1,scale:30,height:278})})]})},6601:(e,a,t)=>{t.d(a,{Z:()=>S});var i=t(14161),l=t(28789),n=t(65484),r=t.n(n);const o=l.ZP.div`
  ${i.fU.col};
  gap: 20px;
  height: 100%;
  overflow-y: auto;
  padding: 0 24px;
`,s=l.ZP.div`
  padding-bottom: 20px;
  &:not(:last-of-type) {
    border-bottom: ${r()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})};
  }
  direction: ltr;
`,d=l.ZP.div`
  display: flex;
  gap: 24px;

  ${i.fU.between}
  .h3 {
    max-width: 280px;
    margin-top: 8px;
    text-align: left;
  }
`,c=l.ZP.div`
  gap: 20px;
  display: flex;
  margin-top: 16px;
`;var p=t(249),m=t(66150),h=t(20760),x=t(92637),u=t(36862),g=t(13035),b=t(9111),v=t(71856),f=t(34909),y=t(1705),w=t(80184);const j=e=>{let{date:a,text:t}=e;return(0,w.jsx)(v.M,{children:(0,w.jsxs)(s,{as:f.E.div,...y.f,initial:{opacity:0},children:[(0,w.jsxs)("div",{children:[(0,w.jsx)(b.Z,{date:a,time:!0}),(0,w.jsxs)(d,{children:[(0,w.jsx)(g.Z,{className:"h3",lines:2,text:t}),(0,w.jsx)(u.Z,{shape:"round",icon:"comment-text",label:"Messages"})]})]}),(0,w.jsxs)(c,{children:[(0,w.jsx)(x.Z,{text:"Read more"}),(0,w.jsx)(x.Z,{text:"Reply"})]})]})})};var $=t(1065),k=t(25228),Z=t(43896),_=t(25984),P=t(72426),R=t.n(P),z=t(72791),F=t(13967);const S=()=>{const{theme:e}=(0,l.Fg)(),a=["all","unread","new"],[t,n]=(0,z.useState)(0),[r,s]=(0,z.useState)(!1),d=(0,F.Z)().direction;(0,z.useEffect)((()=>{n(1),setTimeout((()=>{s(!0)}),1e3)}),[]);const c=[{id:"abc123",label:"unread",date:R()(),text:"Addiction blood bank bone marrow contagious?"},{id:"abc124",label:"new",date:R()().subtract(1,"days").subtract(1,"hours").toDate(),text:"Triggered asthma anesthesia bone marrow?"},{id:"abc125",label:"unread",date:R()().subtract(5,"days").subtract(2,"hours").subtract(30,"minutes").toDate(),text:"Lorem ipsum dolor sit amet, consectetur?"},{id:"abc126",label:"new",date:R()().subtract(10,"days").subtract(5,"hours").subtract(10,"minutes").toDate(),text:"Sed do eiusmod tempor incididunt ut labore et?"}];return(0,w.jsxs)(p.Z,{name:"RecentQuestions",mobile:388,children:[(0,w.jsx)(m.Z,{title:"Recent Questions",flex:"column",children:(0,w.jsx)(k.Z,{value:t,onChange:(e,a)=>{n(a)},style:{margin:"0 -22px"},sx:{padding:"0 22px",borderRadius:"8px",display:"flex",alignItems:"center","& .MuiTabs-indicator":{display:"none"},"& .MuiTabs-flexContainer":{gap:"8px",alignItems:"center"},"& .MuiTab-root":{padding:"4px 8px",borderRadius:"8px",fontSize:i.iH[12],minHeight:"20px",minWidth:"auto",lineHeight:"1",textTransform:"capitalize",fontFamily:i.Rq.accent,color:i.O9.blue,fontWeight:400,transition:"background-color var(--transition), color var(--transition)"},"& .MuiTab-root:hover, & .Mui-selected":{backgroundColor:"dark"===e?i.R2.text:i.R2.widgetBg,color:"dark"===e&&"#fff !important"},minHeight:"40px",backgroundColor:"dark"===e&&i._4.highlight},children:a.map((e=>(0,w.jsx)(Z.Z,{label:e},(0,_.x0)())))})}),(0,w.jsx)(h.Z,{style:{padding:0},children:(0,w.jsx)($.ZP,{index:t,onChangeIndex:e=>{n(e)},animateTransitions:r,children:a.map(((e,a)=>(0,w.jsx)(o,{children:0===t?c.map((e=>(0,w.jsx)(j,{dir:d,date:e.date,text:e.text},e.id))):c.filter((a=>a.label===e)).map((e=>(0,w.jsx)(j,{dir:d,date:e.date,text:e.text},e.id)))},e)))})})]})}}}]);
//# sourceMappingURL=7009.8d5a6542.chunk.js.map