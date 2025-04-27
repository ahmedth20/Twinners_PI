"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[4311],{36038:(e,a,t)=>{t.d(a,{Z:()=>l});var i=t(31843),n=t(85335),r=t(80184);const l=e=>{let{color:a,legend:t}=e;return(0,r.jsxs)(i.H,{children:[(0,r.jsx)(n.Lm,{color:a})," ",t]})}},47242:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(31843),n=t(80184);const r=e=>{let{children:a,overlay:t}=e;return(0,n.jsx)(i.a,{overlay:t,children:a})}},31843:(e,a,t)=>{t.d(a,{H:()=>l,a:()=>r});var i=t(28789),n=t(14161);const r=i.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,l=i.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${n.Rq.accent};
  font-size: ${n.iH[10]};
`},13902:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(85521),n=t(80184);const r=e=>{let{text:a,handler:t,prevDisabled:r,nextDisabled:l,...o}=e;return(0,n.jsxs)(i.i,{className:"navigator",...o,children:[(0,n.jsx)("button",{className:r?"disabled":"",onClick:t,"data-direction":"prev","aria-label":"Previous",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("span",{className:"label",children:a}),(0,n.jsx)("button",{className:l?"disabled":"",onClick:t,"data-direction":"next","aria-label":"Next",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,a,t)=>{t.d(a,{i:()=>o});var i=t(28789),n=t(65484),r=t.n(n),l=t(14161);const o=i.ZP.div`
  display: flex;
  ${l.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${l.iH[14]};
  border-radius: 8px;
  background-color: ${r()("theme",{light:l.R2.bodyBg,dark:l._4.bodyBg})};

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
`},69517:(e,a,t)=>{t.d(a,{Z:()=>f});var i=t(28789),n=t(65484),r=t.n(n),l=t(14161),o=t(13630),s=t(13668);const d=r()("theme",{light:l.R2.highlight,dark:l._4.highlight}),c=r()("theme",{light:l.R2.text,dark:l._4.text}),p=(0,i.ZP)(s.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${d};
      border-radius: 8px;
      font-size: ${l.iH[16]};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${l.O9.blue} !important;
      }

      &:hover {
        box-shadow: ${r()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${l.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${r()("theme",{light:"#A2C0D4",dark:l.O9.gray})};
        font-size: ${l.iH[12]};
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
        color: ${l.O9.blue};
      }
    }

    &__single-value {
      color: ${r()("theme",{light:l.R2.text,dark:l._4.text})};
    }
  }
`,m=(0,i.ZP)(p)`
  .Select {
    &__control {
      font-size: ${l.iH[14]};
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
      font-family: ${l.Rq.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${l.iH[18]};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${l.AV.tablet} {
    .Select__control {
      font-size: ${l.iH[20]};
    }
  }
`,u=(0,i.ZP)(p)`
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
`;var x=t(22723),g=t(72791),v=t(80184);const f=e=>{let{label:a,options:t,variant:i,value:n,changeHandler:r,placeholder:l}=e;(0,g.useEffect)((()=>{l||null!==n||r(t[0])}),[]);const[o]=(0,g.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),s={classNamePrefix:"Select",inputId:a,isSearchable:"user"!==i,options:t,value:n,onChange:r,placeholder:l,openMenuOnFocus:!0,components:{Control:e=>{let{children:a,...t}=e;return(0,v.jsxs)(x.c.Control,{...t,children:[a,(0,v.jsx)("i",{className:`icon icon-${"minimal"===i?"caret":"chevron"}-down`})]})},Menu:e=>(0,v.jsx)(x.c.Menu,{...e,className:"menu",children:e.children})},id:o,blurInputOnSelect:!0,className:`select-${i}`};switch(i){default:case"basic":return(0,v.jsx)(m,{...s});case"minimal":return(0,v.jsx)(h,{...s});case"user":return(0,v.jsx)(u,{...s})}}},36163:(e,a,t)=>{t.d(a,{Z:()=>g});var i=t(14161),n=t(22426),r=t(19913),l=t(82165),o=t(82839),s=t(62066),d=t(71827),c=t(28265),p=t(18602),m=t(28789),h=t(72791),u=t(94397);var x=t(80184);const g=e=>{let{variant:a,id:t,data:g,elems:v,...f}=e;const{width:y}=(0,u.Z)(),{theme:b}=(0,m.Fg)(),[w,j]=(0,h.useState)([]),k=y>=768;(0,h.useLayoutEffect)((()=>{j(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const t=document.getElementById(e).offsetWidth;let i=[];for(let n=0;n<t;n+=a)i.push(n);return i}(t))}),[y]);const _=e=>{const{active:a,payload:t}=e;return a&&t&&t.length?(0,x.jsx)(n.m,{className:"multiple",children:t.map(((e,a)=>(0,x.jsxs)("div",{className:"item",children:[(0,x.jsx)("div",{className:"color",style:{background:e.stroke}}),(0,x.jsx)("div",{className:"value",children:e.value})]},a)))}):null};return(0,x.jsx)(r.h,{height:k?"100%":f.height,width:"100%",id:t,children:"line"===a?(0,x.jsxs)(l.w,{margin:!1,data:g,...f,children:[(0,x.jsxs)("defs",{children:[(0,x.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:i.O9.dark,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.512299",stopColor:i.O9.dark}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:i.O9.dark,stopOpacity:"0.2"})]}),(0,x.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:i.O9.light_gray,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.504355",stopColor:i.O9.light_gray}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:i.O9.light_gray,stopOpacity:"0.2"})]})]}),(0,x.jsx)(o.q,{stroke:`url(#${"dark"===b?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:w,width:"100%",height:"100%"}),v.map((e=>(0,x.jsx)(s.x,{...e},e.dataKey))),(0,x.jsx)(d.u,{cursor:!1,content:_})]}):(0,x.jsxs)(c.T,{margin:{top:5},data:g,...f,children:[(0,x.jsxs)("defs",{children:[(0,x.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:i.O9.dark,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.512299",stopColor:i.O9.dark}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:i.O9.dark,stopOpacity:"0.2"})]}),(0,x.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,x.jsx)("stop",{stopColor:i.O9.light_gray,stopOpacity:"0.2"}),(0,x.jsx)("stop",{offset:"0.504355",stopColor:i.O9.light_gray}),(0,x.jsx)("stop",{offset:"0.99905",stopColor:i.O9.light_gray,stopOpacity:"0.2"})]}),f.children]}),(0,x.jsx)(o.q,{stroke:`url(#${"dark"===b?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:w,width:"100%",height:"100%"}),v.map((e=>(0,x.jsx)(p.u,{...e},e.dataKey))),(0,x.jsx)(d.u,{cursor:!1,content:_})]})})}},22226:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(28789),n=t(14161);const r=i.ZP.div`
  text-transform: uppercase;
  margin: 0 24px;
  display: flex;
  ${n.fU.between}
  font-family: ${n.Rq.accent};
  font-size: ${n.iH[10]};
`},22426:(e,a,t)=>{t.d(a,{Z:()=>o,m:()=>l});var i=t(28789),n=t(14161),r=t(80184);const l=i.ZP.div`
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
`,o=e=>{let{active:a,payload:t,tooltip:i,arrow:n=!1,multi:o=!1,...s}=e;if(o){if(!a||!i)return null;for(const e of t)if(e.dataKey===i)return(0,r.jsx)(l,{arrow:n,children:e.value});return null}return a&&t[0]?(0,r.jsxs)(l,{arrow:n,children:[" ",t[0].value," ",s.right&&t[0].dataKey]}):null}},20760:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(51899),n=t(80184);const r=e=>{let{children:a,style:t,sidePadding:r=!1,elRef:l,...o}=e;return(0,n.jsx)(i.uT,{ref:l,sidePadding:r,style:t,...o,children:a})}},66150:(e,a,t)=>{t.d(a,{Z:()=>r});var i=t(51899),n=t(80184);const r=e=>{let{title:a,children:t,sidePadding:r=!1,flex:l="row",elRef:o,...s}=e;return(0,n.jsxs)(i.h4,{className:s.className?s.className:"",sidePadding:r,flex:l,ref:o,style:s.style,children:[(0,n.jsx)("h2",{className:"title",children:a}),t]})}},249:(e,a,t)=>{t.d(a,{Z:()=>o});var i=t(51899),n=t(34909),r=t(79591),l=t(80184);const o=e=>{let{name:a,children:t,style:o,shadow:s=!1,...d}=e;const{direction:c}=(0,r.jt)();return(0,l.jsx)(i.W2,{as:n.E.div,"data-widget":a,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:o,className:s?"shadow":"",dir:c,mobile:d.mobile,children:t})}},51899:(e,a,t)=>{t.d(a,{JL:()=>x,Pz:()=>h,W2:()=>p,h4:()=>m,iz:()=>v,uT:()=>u,wp:()=>g});var i=t(28789),n=t(65484),r=t.n(n),l=t(14161);const o=r()("theme",{light:l.R2.widgetBg,dark:l._4.widgetBg}),s=r()("theme",{light:l.R2.bodyBg,dark:l._4.bodyBg}),d=r()("theme",{light:l.R2.shadow,dark:l._4.shadow}),c=r()("theme",{light:l.R2.highlight,dark:l._4.highlight}),p=i.ZP.div`
  box-shadow: ${l.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${o};
  overflow: hidden;
  ${l.fU.col};
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
  
  ${l.AV.tablet} {
    height: 100%;
  }
`,m=i.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":l.fU.between};
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
  ${l.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${c};
  }
`,u=i.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${l.fU.col};
  flex-grow: 1;
`,x=i.ZP.div`
  font-size: ${l.iH[14]};
  display: flex;
  align-items: center;
  color: ${l.O9.gray};
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
`,v=i.ZP.div`
  height: 2px;
  background-color: ${s};
  width: 100%;
`},57770:(e,a,t)=>{t.d(a,{U:()=>i,z:()=>n});const i=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],n=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},22172:(e,a,t)=>{t.d(a,{b_:()=>l,i7:()=>o,tV:()=>s});var i=t(12298),n=t(83687),r=t(80184);const l=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=()=>{let e=[];return i.q.forEach((a=>{e.push({value:a.id,label:(0,r.jsxs)("div",{className:"user-option",children:[(0,r.jsx)(n.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,r.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,t)=>{t.d(a,{q:()=>x});var i=t(65710),n=t(37512),r=t(76155),l=t(62056),o=t(67583),s=t(79168),d=t(29260),c=t(33375);const p=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",m=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var h=t(43928),u=t(4681);const x=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:r,webp:l},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(99976),webp:t(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:p,webp:m},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:i,webp:n},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:d,webp:c},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:h,webp:u},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},54561:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(72791);const n=e=>{const[a,t]=(0,i.useState)(0);return{index:a,setIndex:t,navigate:i=>{const{direction:n}=i.currentTarget.dataset;"next"===n?a+1===e.length?t(0):t(a+1):"prev"===n&&t(a-1<0?e.length-1:a-1)}}}},17350:(e,a,t)=>{t.d(a,{Z:()=>n});var i=t(72791);const n=()=>{const e=["year","month","week"],[a,t]=(0,i.useState)(e[0]);return{period:a,periods:e,setPeriod:t,setPeriodIndex:a=>t(e[a])}}},39314:(e,a,t)=>{t.d(a,{Z:()=>P});var i=t(28789),n=t(14161);const r=i.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${n.AV.tablet} {
    padding: 20px 30px 30px;
    ${n.fU.col};
  }

  ${n.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,l=i.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,o=i.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${n.AV.laptopL} {
    margin-top: 40px;
  }

  ${n.AV.desktop} {
    flex-direction: row;
    ${n.fU.between};
  }
`,s=i.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,d=i.ZP.div`
  ${n.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=t(85335),p=t(59242),m=t(54270),h=t(44165),u=t(73457),x=t(10586),g=t(79591),v=t(59434),f=t(74037),y=t(94397),b=t(80184);const w=(0,x.withSize)()((0,u.WidthProvider)(u.Responsive)),j=i.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,k=e=>{let{layouts:a,children:t,id:i,desktop:n}=e;const{isLayoutEditable:r,fontScale:l}=(0,g.jt)(),o=(0,v.I0)(),s=(0,y.Z)().width<768;return(0,b.jsx)(b.Fragment,{children:s?(0,b.jsx)(j,{children:t}):(0,b.jsx)(w,{className:"content_layout",layouts:a,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===l?182:182+11*l,isDraggable:r,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:n?e=>{r&&(o((0,f.fc)({id:i,layouts:e})),o((0,f.m8)()))}:void 0,children:t})})};var _=t(34909),$=t(62773),Z=t.n($),O=t(57689),S=t(72791);const P=e=>{let{title:a,children:t,hasBadge:i,hasTitle:n=!0,qty:u}=e;const x=(0,S.useRef)(null),g=Z()(),{width:f}=(0,y.Z)(),w=f>767.98,{pathname:j}=(0,O.TH)(),$=j.includes("dashboard"),P=j.replace("/",""),M=(0,v.v9)((e=>e.layout.layout))[P];return(0,S.useEffect)((()=>{x.current&&(x.current.scrollTop=0)}),[j]),(0,b.jsxs)(r,{ref:x,children:[(0,b.jsx)(m.q,{children:(0,b.jsx)("title",{children:`Smart190 | ${a}`})}),(0,b.jsxs)(d,{children:[(0,b.jsxs)(o,{as:_.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[n&&(0,b.jsxs)(l,{children:[a," ",i&&u&&u>0&&(0,b.jsxs)(c.GS,{children:["+",u]})]}),w&&(0,b.jsxs)(s,{children:[g.isDesktop()&&(0,b.jsxs)(b.Fragment,{children:[$&&(0,b.jsx)(p.t,{children:(0,b.jsx)(h.XO,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(h.ot,{})})]}),(0,b.jsx)(p.t,{children:(0,b.jsx)(h.t7,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(h.zj,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(h.vm,{})}),(0,b.jsx)(p.t,{children:(0,b.jsx)(h.jf,{})})]})]}),M?(0,b.jsx)(k,{id:P,layouts:M,desktop:g.isDesktop(),children:t}):t]})]})}},93687:(e,a,t)=>{t.r(a),t.d(a,{default:()=>G});var i=t(39314),n=t(28789),r=t(65484),l=t.n(r),o=t(14161),s=t(40309);const d=n.ZP.div`
  position: relative;
  background-color: ${l()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg})};
  height: 80px;
  margin: 0 -22px 20px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;

  .list-item {
    width: fit-content !important;
  }

  .navigation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    &:before, &:after {
      content: '';
      position: absolute;
      top: 0;
      background: ${l()("theme",{light:"linear-gradient(90deg, #F1F5F8 0%, rgba(241, 245, 248, 0.0001) 100%)",dark:"linear-gradient(90deg, #090A0A 0%, rgba(9, 10, 10, 0.0001) 100%)"})};
      height: 100%;
      width: 100px;
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

    button {
      font-size: ${o.iH[12]};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${o.O9.blue};
      color: #fff;
      z-index: 2000;
      ${o.fU.col};
      ${o.fU.center};
      opacity: .7;
      transition: opacity var(--transition);

      &[data-direction="prev"] {
        left: 16px;
      }

      &[data-direction="next"] {
        right: 16px;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .list {
    display: flex;
    align-items: center;
    pointer-events: none;
    gap: 12px;
    padding: 0 16px;
    overflow-x: auto;

    &-item {
      padding: 10px;
      border-radius: 8px;
      transition: background-color var(--transition), color var(--transition);

      &.active {
        color: ${o.O9.blue};
        background-color: ${l()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg})};
      }
    }
  }
`,c=n.ZP.div`
  height: 100%;
  position: relative;

  .popup {
    position: absolute;
    top: calc(50% + ${e=>e.top}px + 80px);
    left: 50%;
    transform: translate(-50%, calc(-50% - 80px - ${e=>e.top/2}px));
    z-index: 10;
    padding: 20px;
    border-radius: 8px;
    background-color: ${l()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg})};
    width: 240px;
    ${o.fU.col};
    gap: 16px;
    border: 2px solid ${l()("theme",{light:o.O9.light_gray,dark:o.O9.dark})};
    transition: opacity var(--transition), visibility var(--transition);
    opacity: 0;
    visibility: hidden;

    &.visible {
      opacity: 1;
      visibility: visible;
    }

    &_close {
      position: absolute;
      right: 16px;
      top: 16px;
      font-size: ${o.iH[14]};
      color: ${o.O9.error};
    }

    .task {
      ${o.fU.col};
      gap: 10px;
      font-size: ${o.iH[14]};

      &_label {
        font-size: ${o.iH[12]};
        font-family: ${o.Rq.accent};
        color: ${o.O9.gray};
        display: block;
        margin-bottom: 8px;
      }

      &_header {
        display: flex;
        gap: 10px;
        align-items: center;
      }
    }

    ${o.AV.mobileL} {
      width: 280px;
    }
  }
`,p=(0,n.ZP)(s.D8)`
  max-width: 326px;
  margin: 0 auto;

  .react-calendar {
    &__month-view {
      &__weekdays {
        order: unset;
      }

      & > div > div {
        padding: 0 0 20px;
      }

      &:last-of-type {
        .react-calendar__month-view__weekdays {
          display: none !important;
        }

        .react-calendar__month-view__days {
          margin-top: -37px;

          ${o.AV.mobileL} {
            margin-top: -60px;
          }
        }
      }
    }
  }
`;var m=t(249),h=t(66150),u=t(20760),x=t(47242),g=t(36038),v=t(69517),f=t(46866),y=t(58563),b=t(85335),w=t(52739),j=t(17711),k=t(72426),_=t.n(k),$=t(25984),Z=t(72791);const O=[{id:"marvin_park",tasks:[{title:"Vivamus in felis eu sapien",date:_()(),type:"work"},{title:"Sed vel lectus",date:_()().add(1,"days"),type:"other"},{title:"Lorem ipsum dolor",date:_()().add(2,"days"),type:"family"},{title:"Sed vel lectus",date:_()().add(3,"days"),type:"travel"},{title:"Lorem ipsum dolor",date:_()().add(1,"months"),type:"other"}]},{id:"norman_munoz",tasks:[{title:"Vivamus felislectus",date:_()(),type:"travel"},{title:"Sed vel lectus",date:_()().add(1,"weeks"),type:"family"}]},{id:"tillie_mathis",tasks:[{title:"Lorem ipsum dolor",date:_()().add(5,"days"),type:"other"}]},{id:"cornelia_phillips",tasks:[{title:"Lorem ipsum dolor",date:_()().add(1,"days"),type:"work"},{title:"Sed vel lectus",date:_()().add(1,"days").add(2,"hours"),type:"family"},{title:"Lorem ipsum dolor",date:_()().add(10,"days").add(4,"hours"),type:"travel"}]},{id:"isaiah_goodman",tasks:[{title:"Lorem ipsum dolor",date:_()().add(1,"months"),type:"work"},{title:"Sed vel lectus",date:_()().add(1,"months").add(2,"days"),type:"family"}]},{id:"claudia_turner",tasks:[{title:"Lorem ipsum dolor",date:_()().add(1,"days"),type:"work"},{title:"Sed vel lectus",date:_()().add(16,"days").add(2,"hours"),type:"family"}]},{id:"emily_rivera",tasks:[{title:"Lorem ipsum dolor",date:_()().add(18,"days"),type:"other"}]}];var S=t(57770),P=t(22172),M=t(80184);const z=()=>{const e=(0,P.tV)(),a=(0,j.Gn)(),t=(new Date).getMonth()+1,[i,n]=(0,Z.useState)(e[0]),[r,l]=(0,Z.useState)({start:1,end:2}),[o,s]=(0,Z.useState)(null),[k,z]=(0,Z.useState)(!1),[D,C]=(0,Z.useState)(null),N=(0,Z.useRef)(null),R=(0,Z.useRef)(null),[U,H]=(0,Z.useState)(0);(0,Z.useEffect)((()=>{l(12===t?{start:t-1,end:t}:{start:t,end:t+1}),H(N.current.offsetHeight+R.current.offsetHeight)}),[t,N,R]);const A=e=>{const a=D.realIndex;"prev"===e.currentTarget.dataset.direction?(D.slidePrev(),l({start:0===a?11:a,end:0===a?12:a+1})):(D.slideNext(),l({start:11===a?1:a+1,end:11===a?2:a+2}))},F=_()().month(r.start-1).startOf("month").toDate(),B=_()().month(r.end-1).endOf("month").toDate(),L=O.filter((e=>e.id===i.value))[0].tasks,T=e=>L.filter((a=>_()(a.date).isSame(e,"day"))).length>0;return(0,M.jsxs)(m.Z,{name:"TaskScheduler",children:[(0,M.jsx)(h.Z,{title:"Doctor task scheduler",flex:"column",elRef:N,children:(0,M.jsx)(v.Z,{options:e,value:i,variant:"user",changeHandler:e=>n(e)})}),(0,M.jsxs)(u.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,M.jsxs)(d,{children:[(0,M.jsx)("div",{className:"list",children:(0,M.jsx)(y.tq,{slidesPerView:"auto",spaceBetween:12,loop:!0,centeredSlides:!0,onSwiper:e=>C(e),initialSlide:t-1,children:a.map((e=>{let{month:a}=e;const t=_()(a).format("M"),i=_()(a).format("MMMM"),n=+t===r.start||+t===r.end;return(0,M.jsx)(y.o5,{className:n?"list-item active":"list-item",children:i},i)}))})}),(0,M.jsxs)("div",{className:"navigation",children:[(0,M.jsx)("button",{"data-direction":"prev",onClick:A,"aria-label":"Previous",children:(0,M.jsx)("i",{className:"icon icon-chevron-left"})}),(0,M.jsx)("button",{"data-direction":"next",onClick:A,"aria-label":"Next",children:(0,M.jsx)("i",{className:"icon icon-chevron-right"})})]})]}),(0,M.jsxs)(c,{top:U,children:[(0,M.jsx)(p,{as:f.ZP,locale:"en-US",value:[F,B],activeStartDate:F,minDate:F,maxDate:B,showDoubleView:!0,showNavigation:!1,showFixedNumberOfWeeks:!1,tileClassName:e=>{let{date:a}=e;return T(a)?"active":""},tileContent:(0,M.jsx)("span",{className:"bar"}),onClickDay:e=>{s(e),z(!0)}}),(0,M.jsx)(w.Z,{open:k,onClick:()=>z(!1),sx:{backgroundColor:"transparent",zIndex:1e3},children:(0,M.jsxs)("div",{className:"popup "+(k?"visible":""),children:[(0,M.jsx)("button",{className:"popup_close",onClick:()=>z(!1),children:(0,M.jsx)("i",{className:"icon icon-close"})}),o&&T(o)&&(V=o,L.filter((e=>_()(e.date).isSame(V,"day"))).map((e=>{const{title:a,type:t,date:i}=e,n=S.z.find((e=>e.cat===t)).color;return(0,M.jsxs)("div",{className:"task",children:[(0,M.jsxs)("div",{children:[(0,M.jsx)("span",{className:"task_label",children:"Task:"}),(0,M.jsxs)("div",{className:"task_header",children:[(0,M.jsx)(b.Ct,{color:n}),a]})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)("span",{className:"task_label",children:"Date:"}),(0,M.jsx)("div",{children:_()(i).format("MM.DD.YY, HH:mm A")})]})]},(0,$.x0)())})))]})})]}),(0,M.jsx)("div",{ref:R,children:(0,M.jsx)(x.Z,{children:S.z.map((e=>{let{color:a,cat:t}=e;return(0,M.jsx)(g.Z,{color:a,legend:t},t)}))})})]})]});var V};var D=t(22226),C=t(13902),N=t(36163),R=t(54561),U=t(94397);const H=[{name:"January",men:220,women:350},{name:"February",men:185,women:214},{name:"March",men:294,women:305},{name:"April",men:199,women:214},{name:"May",men:374,women:300},{name:"June",men:288,women:265},{name:"July",men:355,women:200},{name:"August",men:218,women:301},{name:"September",men:180,women:250},{name:"October",men:274,women:145},{name:"November",men:387,women:218},{name:"December",men:281,women:311}],A=[{name:"January",men:311,women:205},{name:"February",men:283,women:344},{name:"March",men:381,women:240},{name:"April",men:199,women:288},{name:"May",men:374,women:300},{name:"June",men:511,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:480,women:355},{name:"December",men:300,women:220}],F=[{name:"January",men:566,women:309},{name:"February",men:283,women:344},{name:"March",men:381,women:240},{name:"April",men:340,women:220},{name:"May",men:374,women:300},{name:"June",men:200,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:480,women:355},{name:"December",men:500,women:600}],B=[{name:"January",men:303,women:260},{name:"February",men:283,women:344},{name:"March",men:400,women:350},{name:"April",men:340,women:220},{name:"May",men:374,women:300},{name:"June",men:200,women:250},{name:"July",men:399,women:200},{name:"August",men:366,women:415},{name:"September",men:220,women:180},{name:"October",men:155,women:280},{name:"November",men:202,women:140},{name:"December",men:70,women:140}];var L=t(25606);const T=()=>{const e=(0,U.Z)().width<768,{theme:a}=(0,n.Fg)(),t=["2019","2020","2021","2022"],{index:i,navigate:r}=(0,R.Z)(t),l={type:"monotone",strokeWidth:3,dot:!1},s=[{...l,dataKey:"men",stroke:o.O9.azure,activeDot:{r:4,fill:o.O9.azure,stroke:"light"===a?o.R2.widgetBg:o._4.widgetBg,strokeWidth:2},style:{filter:`drop-shadow(0 0 6px ${(0,L.m4)(o.O9.azure,.5)})`}},{...l,dataKey:"women",stroke:o.O9.peach,activeDot:{r:4,fill:o.O9.peach,stroke:"light"===a?o.R2.widgetBg:o._4.widgetBg,strokeWidth:2},style:{filter:`drop-shadow(0 0 6px ${(0,L.m4)(o.O9.peach,.5)})`}}],d=(()=>{switch(t[i]){case"2019":return H;case"2020":return A;case"2021":return F;default:return B}})();return(0,M.jsxs)(m.Z,{name:"PatientsGenderLineChart",mobile:400,children:[(0,M.jsx)(h.Z,{title:"Patients gender",flex:"column",children:(0,M.jsx)(C.Z,{handler:r,text:t[i],style:{margin:"0 -22px 0"}})}),(0,M.jsxs)(u.Z,{style:{padding:0,overflow:"hidden"},children:[(0,M.jsx)(D.Z,{children:(0,j.Gn)().map((a=>{let{month:t}=a;return(0,M.jsx)("div",{children:e?_()(t).month()+1:_()(t).format("MMM")},_()(t).format("MMM"))}))}),(0,M.jsx)(N.Z,{variant:"line",id:"patientsGender",data:d,elems:s}),(0,M.jsxs)(x.Z,{overlay:!0,children:[(0,M.jsx)(g.Z,{color:"azure",legend:"men"}),(0,M.jsx)(g.Z,{color:"peach",legend:"women"})]})]})]})};var V=t(96027),q=t(17793);const Y=n.ZP.div`
  display: flex;
  height: 100%;
  ${o.fU.center};

  .speedometer {
    width: 100%;

    text {
      font-weight: 400 !important;
      font-family: ${o.Rq.accent};

      &.current-value {
        display: none;
      }
    }
  }
`,J=()=>{const{theme:e}=(0,n.Fg)(),{width:a}=(0,U.Z)(),t=()=>{switch(!0){case a<414:return{width:232,height:120};case a>=414&&a<1800:return{width:300,height:160};default:return{width:400,height:220}}};return(0,M.jsxs)(m.Z,{name:"BloodTest",children:[(0,M.jsx)(h.Z,{title:"Blood test speed"}),(0,M.jsx)(u.Z,{style:{flexGrow:1},children:(0,M.jsx)(Y,{children:(0,M.jsx)(q.ZP,{value:251,maxValue:1e3,needleColor:o.R2.text,needleTransitionDuration:2e3,needleHeightRatio:.8,segments:80,startColor:o.O9.green,endColor:o.O9.red,ringWidth:60,textColor:"light"===e?o.R2.text:o._4.text,labelFontSize:o.iH[10],maxSegmentLabels:10,valueFormat:"~s",forceRender:!0,width:t().width,height:t().height})})})]})},G=()=>(0,M.jsxs)(i.Z,{title:"Dashboard",children:[(0,M.jsx)("div",{children:(0,M.jsx)(z,{})},"scheduler"),(0,M.jsx)("div",{children:(0,M.jsx)(T,{})},"gender"),(0,M.jsx)("div",{children:(0,M.jsx)(V.Z,{})},"radar"),(0,M.jsx)("div",{children:(0,M.jsx)(J,{})},"blood")]})},13630:(e,a,t)=>{t.d(a,{Ji:()=>o,So:()=>l,dC:()=>n,sd:()=>r});var i=t(28789);const n=i.F4`
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
`,r=i.F4`
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
`,l=i.F4`
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
`},17711:(e,a,t)=>{t.d(a,{Gn:()=>l,T2:()=>r,Uo:()=>o});var i=t(72426),n=t.n(i);const r=()=>{const e=n()().year(),a=[],t=n()().year(n()().year()).endOf("year").diff(n()().year(n()().year()).startOf("year"),"days")+1;for(let i=1;i<=t;i++){let t=n()().year(e).dayOfYear(i);a.push({date:t,long:t.format("dddd, MMMM DD"),short:t.format("DD/MM/YYYY")})}return a},l=()=>{const e=n()().year(),a=[];for(let t=1;t<=12;t++){let i=n()().year(e).month(t-1);a.push({month:i,formatted:i.format("MMMM, YYYY")})}return a},o=()=>{const e=n()().year(),a=[],t=n()().year(n()().year()).endOf("year").diff(n()().year(n()().year()).startOf("year"),"weeks")+1;for(let i=1;i<=t;i++){let t=n()().year(e).week(i);a.push({week:i,startShort:t.startOf("week").format("MMM, DD"),endShort:t.endOf("week").format("MMM, DD"),startLong:t.startOf("week").format("MMMM, DD"),endLong:t.endOf("week").format("MMMM, DD")})}return a}},40309:(e,a,t)=>{t.d(a,{D8:()=>c,GI:()=>s,W2:()=>o,YM:()=>d});var i=t(28789),n=t(65484),r=t.n(n),l=t(14161);const o=i.ZP.div`
  position: relative;
  height: 100%;
  ${l.fU.col};
  align-items: center;
`,s=i.ZP.div`
  position: relative;
  z-index: 2;
  background-color: ${r()("theme",{light:l.R2.bodyBg,dark:l._4.bodyBg})};
  padding: 20px;
  border-radius: 8px;
  ${l.fU.col};
  gap: 16px;
  margin: auto;
  width: calc(100% - 40px);
  max-width: 320px;
`,d=i.ZP.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: calc(100% - 40px);
`,c=i.ZP.div`
  ${l.fU.col};
  gap: 8px;
  position: relative;
  z-index: 1;
  width: 100%;
  margin: 2px;
  flex-grow: 1;

  .react-calendar {
    flex-grow: 1;
    height: 100%;

    &__navigation {
      background-color: ${r()("theme",{light:l.R2.bodyBg,dark:l._4.bodyBg})};
      border-radius: 8px;
      min-height: 40px;
      padding: 10px 22px;
      display: flex;
      ${l.fU.between};
      font-size: ${l.iH[14]};
      margin: 0 2px;

      &__label {
        pointer-events: none;
      }
    }

    &__viewContainer {
      ${l.fU.col};
      flex-grow: 1;
    }

    &__tile {
      font-size: ${l.iH[14]};
      font-family: ${l.Rq.accent};

      .bar {
        opacity: 0;
        transition: opacity var(--transition);
      }
    }

    &__year-view__months {
      gap: 20px 0;
      margin-top: 20px;
    }

    &__month-view {
      height: 100%;

      & > div {
        height: 100%;
        align-items: stretch;
      }

      & > div > div {
        ${l.fU.col};
        gap: 8px;
        justify-content: space-between;
        height: 100%;
        padding: 0 24px 20px;
      }

      &__weekdays {
        text-transform: uppercase;
        font-size: ${l.iH[10]};
        font-family: ${l.Rq.accent};
        text-align: center;
        order: 1;
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-items: center;

        abbr {
          text-decoration: none;
        }

        ${l.AV.mobileL} {
          gap: 8px;

          &__weekday {
            width: 40px;
          }
        }
      }

      &__days {
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        grid-gap: 20px 0;
        justify-items: center;

        &__day {
          &.active {
            color: ${l.O9.blue};
            cursor: pointer;
          }

          &:not(&.active) {
            pointer-events: none;
          }

          &--neighboringMonth {
            opacity: .5;
          }
        }

        ${l.AV.mobileL} {
          grid-gap: 8px;

          &__day {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            background-color: ${r()("theme",{light:l.R2.highlight,dark:l._4.highlight})};
            position: relative;

            &.active {
              color: inherit;

              .bar {
                opacity: 1;
                display: block;
                position: absolute;
                left: 50%;
                bottom: 8px;
                border-radius: 2px;
                width: 16px;
                height: 2px;
                background-color: ${l.O9.blue};
                transform: translateX(-50%);
              }
            }
          }
        }
      }
    }
  }
`},96027:(e,a,t)=>{t.d(a,{Z:()=>b});var i=t(28789),n=t(14161),r=t(249),l=t(13902),o=t(77514),s=t(19913),d=t(64621),c=t(36846),p=t(87997),m=t(5618),h=t(71827),u=t(22426),x=t(54561),g=t(17350),v=t(94397),f=t(80184);const y=i.ZP.div`
  ${n.fU.col};
  gap: 14px;
  justify-content: flex-end;
  height: 100%;

  .chart {
    height: 250px;
    flex-grow: 1;
    padding: 24px 24px 0;
  }

  .navigator {
    margin: 0 2px 2px;
  }
  
  ${n.AV.mobileL} {
    .chart {
      height: 300px;
    }
  }
`,b=()=>{const{periods:e}=(0,g.Z)(),{index:a,navigate:t}=(0,x.Z)(e),{theme:b}=(0,i.Fg)(),{width:w}=(0,v.Z)();return(0,f.jsx)(r.Z,{name:"RadarAreaChart",children:(0,f.jsxs)(y,{children:[(0,f.jsx)("div",{className:"chart",children:(0,f.jsx)(s.h,{height:"100%",width:"100%",children:(0,f.jsxs)(d.H,{data:[{type:"diagnostics",value:[40,54,65]},{type:"checkup",value:[70,22,46]},{type:"tests",value:[18,41,60]},{type:"consultation",value:[70,25,67]},{type:"injury",value:[30,70,50]},{type:"viruses",value:[40,19,80]}],outerRadius:w<414?80:110,height:250,children:[(0,f.jsx)(c.n,{stroke:"light"===b?n.O9.light_gray:n.O9.dark}),(0,f.jsx)(p.I,{dataKey:"type",tick:e=>function(e){let{payload:a,x:t,y:i,cx:r,cy:l,...s}=e;return(0,f.jsx)(o.x,{...s,verticalAnchor:"middle",textAnchor:"middle",y:i+(i-l)/9,x:t+(t-r)/9,fill:"light"===b?n.R2.text:n._4.text,children:a.value})}(e),style:{textTransform:"uppercase",fontFamily:n.Rq.accent,fontSize:n.iH[10]},cx:"50%",cy:"50%"}),(0,f.jsx)(m.F,{dataKey:`value[${a}]`,strokeWidth:4,stroke:n.O9.azure,fill:n.O9.azure,fillOpacity:.1,activeDot:{r:4,fill:n.O9.azure,stroke:n.O9.azure}}),(0,f.jsx)(h.u,{content:(0,f.jsx)(u.Z,{}),cursor:!1})]})})}),(0,f.jsx)(l.Z,{handler:t,text:e[a],style:{textTransform:"capitalize"}})]})})}}}]);
//# sourceMappingURL=4311.718d5c0c.chunk.js.map