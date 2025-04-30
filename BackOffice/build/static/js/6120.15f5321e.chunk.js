"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[6120],{27137:(e,t,i)=>{i.d(t,{Z:()=>v});var a,r=i(28789),l=i(12332),s=i(72791);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n.apply(null,arguments)}function c(e,t){let{title:i,titleId:r,...l}=e;return s.createElement("svg",n({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},l),i?s.createElement("title",{id:r},i):null,a||(a=s.createElement("rect",{width:16,height:4,rx:2,fill:"currentColor"})))}const o=s.forwardRef(c);i.p;var d;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},u.apply(null,arguments)}function p(e,t){let{title:i,titleId:a,...r}=e;return s.createElement("svg",u({width:16,height:4,viewBox:"0 0 16 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),i?s.createElement("title",{id:a},i):null,d||(d=s.createElement("rect",{x:.5,y:.5,width:15,height:3,rx:1.5,stroke:"currentColor"})))}const h=s.forwardRef(p);i.p;var x=i(13967),g=i(80184);const m=(0,r.ZP)(l.Z)({display:"flex !important",gap:4,marginTop:"-8px","& svg.empty":{color:"#A2C0D4"},"& svg.filled":{color:"#7ED321"}}),v=e=>{let{value:t}=e;const i=(0,x.Z)().direction;return(0,g.jsx)(m,{className:"styled-rating",initialRating:t,direction:i,emptySymbol:(0,g.jsx)(h,{className:"empty"}),fullSymbol:(0,g.jsx)(o,{className:"filled"}),readonly:!0})}},36038:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(31843),r=i(85335),l=i(80184);const s=e=>{let{color:t,legend:i}=e;return(0,l.jsxs)(a.H,{children:[(0,l.jsx)(r.Lm,{color:t})," ",i]})}},47242:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(31843),r=i(80184);const l=e=>{let{children:t,overlay:i}=e;return(0,r.jsx)(a.a,{overlay:i,children:t})}},31843:(e,t,i)=>{i.d(t,{H:()=>s,a:()=>l});var a=i(28789),r=i(14161);const l=a.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,s=a.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
`},69517:(e,t,i)=>{i.d(t,{Z:()=>f});var a=i(28789),r=i(65484),l=i.n(r),s=i(14161),n=i(13630),c=i(13668);const o=l()("theme",{light:s.R2.highlight,dark:s._4.highlight}),d=l()("theme",{light:s.R2.text,dark:s._4.text}),u=(0,a.ZP)(c.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${o};
      border-radius: 8px;
      font-size: ${s.iH[16]};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${s.O9.blue} !important;
      }

      &:hover {
        box-shadow: ${l()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${s.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${l()("theme",{light:"#A2C0D4",dark:s.O9.gray})};
        font-size: ${s.iH[12]};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${d};
      background-color: ${o};
      border-radius: 8px;
      animation: ${n.Ji} var(--transition);
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
        color: ${s.O9.blue};
      }
    }

    &__single-value {
      color: ${l()("theme",{light:s.R2.text,dark:s._4.text})};
    }
  }
`,p=(0,a.ZP)(u)`
  .Select {
    &__control {
      font-size: ${s.iH[14]};
    }

    &__input-container {
      color: ${d};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,h=(0,a.ZP)(u)`
  .Select {
    &__control {
      background-color: transparent;
      width: fit-content;
      font-weight: 500;
      font-family: ${s.Rq.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${s.iH[18]};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${s.AV.tablet} {
    .Select__control {
      font-size: ${s.iH[20]};
    }
  }
`,x=(0,a.ZP)(u)`
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
`;var g=i(22723),m=i(72791),v=i(80184);const f=e=>{let{label:t,options:i,variant:a,value:r,changeHandler:l,placeholder:s}=e;(0,m.useEffect)((()=>{s||null!==r||l(i[0])}),[]);const[n]=(0,m.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),c={classNamePrefix:"Select",inputId:t,isSearchable:"user"!==a,options:i,value:r,onChange:l,placeholder:s,openMenuOnFocus:!0,components:{Control:e=>{let{children:t,...i}=e;return(0,v.jsxs)(g.c.Control,{...i,children:[t,(0,v.jsx)("i",{className:`icon icon-${"minimal"===a?"caret":"chevron"}-down`})]})},Menu:e=>(0,v.jsx)(g.c.Menu,{...e,className:"menu",children:e.children})},id:n,blurInputOnSelect:!0,className:`select-${a}`};switch(a){default:case"basic":return(0,v.jsx)(p,{...c});case"minimal":return(0,v.jsx)(h,{...c});case"user":return(0,v.jsx)(x,{...c})}}},62014:(e,t,i)=>{i.d(t,{W2:()=>c,ck:()=>d,zx:()=>o});var a=i(28789),r=i(65484),l=i.n(r),s=i(14161);const n=l()("theme",{light:s.R2.bodyBg,dark:s.R2.text}),c=a.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,o=a.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${s.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${l()("theme",{light:`\n        color: ${s.O9.blue};\n        background-color: ${s.R2.highlight};\n    `,dark:`\n        color: ${s.O9.secondary};\n        background-color: ${s._4.highlight};\n    `})};
  display: flex;
  ${s.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${n};
  }
`,d=a.ZP.div`
  &.active .nav-link {
    background-color: ${n};
  };
`},36163:(e,t,i)=>{i.d(t,{Z:()=>m});var a=i(14161),r=i(22426),l=i(19913),s=i(82165),n=i(82839),c=i(62066),o=i(71827),d=i(28265),u=i(18602),p=i(28789),h=i(72791),x=i(94397);var g=i(80184);const m=e=>{let{variant:t,id:i,data:m,elems:v,...f}=e;const{width:k}=(0,x.Z)(),{theme:b}=(0,p.Fg)(),[y,j]=(0,h.useState)([]),w=k>=768;(0,h.useLayoutEffect)((()=>{j(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const i=document.getElementById(e).offsetWidth;let a=[];for(let r=0;r<i;r+=t)a.push(r);return a}(i))}),[k]);const $=e=>{const{active:t,payload:i}=e;return t&&i&&i.length?(0,g.jsx)(r.m,{className:"multiple",children:i.map(((e,t)=>(0,g.jsxs)("div",{className:"item",children:[(0,g.jsx)("div",{className:"color",style:{background:e.stroke}}),(0,g.jsx)("div",{className:"value",children:e.value})]},t)))}):null};return(0,g.jsx)(l.h,{height:w?"100%":f.height,width:"100%",id:i,children:"line"===t?(0,g.jsxs)(s.w,{margin:!1,data:m,...f,children:[(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:a.O9.dark,stopOpacity:"0.2"}),(0,g.jsx)("stop",{offset:"0.512299",stopColor:a.O9.dark}),(0,g.jsx)("stop",{offset:"0.99905",stopColor:a.O9.dark,stopOpacity:"0.2"})]}),(0,g.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:a.O9.light_gray,stopOpacity:"0.2"}),(0,g.jsx)("stop",{offset:"0.504355",stopColor:a.O9.light_gray}),(0,g.jsx)("stop",{offset:"0.99905",stopColor:a.O9.light_gray,stopOpacity:"0.2"})]})]}),(0,g.jsx)(n.q,{stroke:`url(#${"dark"===b?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:y,width:"100%",height:"100%"}),v.map((e=>(0,g.jsx)(c.x,{...e},e.dataKey))),(0,g.jsx)(o.u,{cursor:!1,content:$})]}):(0,g.jsxs)(d.T,{margin:{top:5},data:m,...f,children:[(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:a.O9.dark,stopOpacity:"0.2"}),(0,g.jsx)("stop",{offset:"0.512299",stopColor:a.O9.dark}),(0,g.jsx)("stop",{offset:"0.99905",stopColor:a.O9.dark,stopOpacity:"0.2"})]}),(0,g.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:a.O9.light_gray,stopOpacity:"0.2"}),(0,g.jsx)("stop",{offset:"0.504355",stopColor:a.O9.light_gray}),(0,g.jsx)("stop",{offset:"0.99905",stopColor:a.O9.light_gray,stopOpacity:"0.2"})]}),f.children]}),(0,g.jsx)(n.q,{stroke:`url(#${"dark"===b?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:y,width:"100%",height:"100%"}),v.map((e=>(0,g.jsx)(u.u,{...e},e.dataKey))),(0,g.jsx)(o.u,{cursor:!1,content:$})]})})}},22426:(e,t,i)=>{i.d(t,{Z:()=>n,m:()=>s});var a=i(28789),r=i(14161),l=i(80184);const s=a.ZP.div`
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
  color: #fff;
  box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
  border-radius: 8px;
  background-color: ${r.R2.text};
  height: 20px;
  padding: 0 8px;
  display: flex;
  ${r.fU.center}
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
    background-color: ${r.R2.text};
    display: ${e=>e.arrow?"block":"none"};
  }
`,n=e=>{let{active:t,payload:i,tooltip:a,arrow:r=!1,multi:n=!1,...c}=e;if(n){if(!t||!a)return null;for(const e of i)if(e.dataKey===a)return(0,l.jsx)(s,{arrow:r,children:e.value});return null}return t&&i[0]?(0,l.jsxs)(s,{arrow:r,children:[" ",i[0].value," ",c.right&&i[0].dataKey]}):null}},62242:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(28789),r=i(65484),l=i.n(r),s=i(14161);const n=l()("theme",{light:s.O9.light_gray,dark:s.R2.text}),c=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`,o=a.ZP.div`
  border-bottom: ${l()("theme",{light:s.Sz.dashedLight,dark:s.Sz.dashedDark})};
  margin: 0 22px;
  padding: 20px 0;
  transition: border-color var(--transition);
  ${s.fU.col};
  
  ${s.AV.laptop} {
    ${s.fU.between};
    flex-direction: row;

    ${c} {
      margin-bottom: 0;
    }
  }
`,d=a.ZP.div`
  display: flex;
  ${s.fU.between}
  line-height: 1;

  .block {
    display: flex;
    gap: 8px;

    .num {
      font-weight: 500;
    }
  }

  ${s.AV.laptop} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`,u=a.ZP.div`
  margin: 2px;
  gap: 14px 20px;
  font-size: 0.875rem;
  line-height: 1.4;
  flex-wrap: wrap;
  border-radius: 8px;
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover, &.current {
    background-color: ${n};

    & > div {
      border-color: transparent;
    }
  }

  &:last-of-type {
    & > div {
      border-bottom: none;
    }
  }

  ${s.AV.tablet} {
    ${e=>e.responsive&&`\n        ${o} {\n            display: flex;\n            ${s.fU.between};\n    \n            ${c} {\n                margin-bottom: 0;\n            }\n        }\n        \n        ${d} {\n            flex-direction: column;\n            align-items: flex-start;\n            gap: 10px;\n        }\n    `}
  }
`;var p=i(83687),h=i(27137),x=i(80184);const g=e=>{let{data:t,period:i,selected:a,responsive:r}=e;const{name:l,online:s,speciality:n,rating:g,avatar:m}=t;return(0,x.jsx)(u,{className:a?"current doctor-rating":"doctor-rating",responsive:r,children:(0,x.jsxs)(o,{className:"container",children:[(0,x.jsxs)(c,{children:[(0,x.jsx)(p.Z,{avatar:m,alt:l,online:s,size:60}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:l}),(0,x.jsx)("span",{children:n})]})]}),(0,x.jsxs)(d,{className:"rating",children:[(0,x.jsx)(h.Z,{value:g[i]}),(0,x.jsxs)("span",{className:"block",children:["Rating ",(0,x.jsx)("span",{className:"num",children:g[i].toFixed(2)})]})]})]})})}},80879:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(62014),r=i(17350),l=i(25984),s=i(80184);const n=e=>{let{current:t,handler:i}=e;const{periods:n}=(0,r.Z)();return(0,s.jsx)(a.W2,{children:n.map((e=>(0,s.jsx)(a.ck,{children:(0,s.jsx)(a.zx,{className:t===e&&"active",onClick:()=>i(e),children:e})},(0,l.x0)(4))))})}},30133:(e,t,i)=>{i.d(t,{Z:()=>d});var a=i(28789),r=i(65484),l=i.n(r),s=i(72791);const n=(e,t)=>{const[i,a]=(0,s.useState)(void 0),[r,l]=(0,s.useState)(void 0),n=()=>{const{current:t}=e;0===t.children[0].scrollTop?t.classList.add("is-top"):t.classList.remove("is-top");t.children[0].scrollHeight===Math.ceil(t.children[0].scrollTop)+t.children[0].clientHeight||t.children[0].scrollHeight===Math.floor(t.children[0].scrollTop)+t.children[0].clientHeight?t.classList.add("is-bottom"):t.classList.remove("is-bottom")};return(0,s.useEffect)((()=>{const{current:i}=e,r=()=>{l(i.children[0].scrollHeight);const e=i.children[0].scrollHeight>i.children[0].clientHeight;a(e),null===i||void 0===i||i.classList.toggle("has-overflow",e),i.children[0].addEventListener("scroll",n),t&&t(e)};i&&("ResizeObserver"in window&&new ResizeObserver(r).observe(i),r())}),[e,t,r]),i};var c=i(80184);const o=a.ZP.div`
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
      background: ${l()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,d=e=>{let{children:t,height:i,size:a}=e;const r=(0,s.useRef)(null),l=n(r);return(0,c.jsx)(o,{className:l?"is-top has-overflow":"",height:i,ref:r,size:a,children:t})}},20760:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(51899),r=i(80184);const l=e=>{let{children:t,style:i,sidePadding:l=!1,elRef:s,...n}=e;return(0,r.jsx)(a.uT,{ref:s,sidePadding:l,style:i,...n,children:t})}},66150:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(51899),r=i(80184);const l=e=>{let{title:t,children:i,sidePadding:l=!1,flex:s="row",elRef:n,...c}=e;return(0,r.jsxs)(a.h4,{className:c.className?c.className:"",sidePadding:l,flex:s,ref:n,style:c.style,children:[(0,r.jsx)("h2",{className:"title",children:t}),i]})}},90004:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(51899),r=i(66150),l=i(80184);const s=e=>{let{title:t,handler:i,sidePadding:s,children:n,disabled:c,...o}=e;return(0,l.jsxs)(r.Z,{title:t,sidePadding:s,style:o.style,className:"nav",children:[(0,l.jsxs)(a.JL,{children:[(0,l.jsx)("button",{onClick:i,"data-direction":"prev",className:c?"disabled":"","aria-label":"Previous",children:(0,l.jsx)("i",{className:"icon icon-chevron-left"})}),(0,l.jsx)("button",{onClick:i,"data-direction":"next",className:c?"disabled":"","aria-label":"Next",children:(0,l.jsx)("i",{className:"icon icon-chevron-right"})})]}),n]})}},249:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(51899),r=i(34909),l=i(79591),s=i(80184);const n=e=>{let{name:t,children:i,style:n,shadow:c=!1,...o}=e;const{direction:d}=(0,l.jt)();return(0,s.jsx)(a.W2,{as:r.E.div,"data-widget":t,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:n,className:c?"shadow":"",dir:d,mobile:o.mobile,children:i})}},51899:(e,t,i)=>{i.d(t,{JL:()=>g,Pz:()=>h,W2:()=>u,h4:()=>p,iz:()=>v,uT:()=>x,wp:()=>m});var a=i(28789),r=i(65484),l=i.n(r),s=i(14161);const n=l()("theme",{light:s.R2.widgetBg,dark:s._4.widgetBg}),c=l()("theme",{light:s.R2.bodyBg,dark:s._4.bodyBg}),o=l()("theme",{light:s.R2.shadow,dark:s._4.shadow}),d=l()("theme",{light:s.R2.highlight,dark:s._4.highlight}),u=a.ZP.div`
  box-shadow: ${s.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${n};
  overflow: hidden;
  ${s.fU.col};
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
    background: ${o};
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
  
  ${s.AV.tablet} {
    height: 100%;
  }
`,p=a.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":s.fU.between};
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
`,h=a.ZP.div`
  ${s.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${d};
  }
`,x=a.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${s.fU.col};
  flex-grow: 1;
`,g=a.ZP.div`
  font-size: ${s.iH[14]};
  display: flex;
  align-items: center;
  color: ${s.O9.gray};
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
`,m=a.ZP.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${c};
  flex-grow: 1;
`,v=a.ZP.div`
  height: 2px;
  background-color: ${c};
  width: 100%;
`},22172:(e,t,i)=>{i.d(t,{b_:()=>s,i7:()=>n,tV:()=>c});var a=i(12298),r=i(83687),l=i(80184);const s=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],n=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],c=()=>{let e=[];return a.q.forEach((t=>{e.push({value:t.id,label:(0,l.jsxs)("div",{className:"user-option",children:[(0,l.jsx)(r.Z,{avatar:t.avatar,alt:t.name,size:40}),(0,l.jsx)("span",{children:t.name})]})})})),e}},12298:(e,t,i)=>{i.d(t,{q:()=>g});var a=i(65710),r=i(37512),l=i(76155),s=i(62056),n=i(67583),c=i(79168),o=i(29260),d=i(33375);const u=i.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",p=i.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var h=i(43928),x=i(4681);const g=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:l,webp:s},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:i(99976),webp:i(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:u,webp:p},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:a,webp:r},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:o,webp:d},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:h,webp:x},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:n,webp:c},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},54561:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=e=>{const[t,i]=(0,a.useState)(0);return{index:t,setIndex:i,navigate:a=>{const{direction:r}=a.currentTarget.dataset;"next"===r?t+1===e.length?i(0):i(t+1):"prev"===r&&i(t-1<0?e.length-1:t-1)}}}},84483:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=(e,t)=>{const[i,r]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(null!==e&&null!==t){const i=e.current?e.current.clientHeight:0,a=t&&t.current?t.current.clientHeight:0;r(i+a)}}),[e,t]),i}},17350:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=()=>{const e=["year","month","week"],[t,i]=(0,a.useState)(e[0]);return{period:t,periods:e,setPeriod:i,setPeriodIndex:t=>i(e[t])}}},39314:(e,t,i)=>{i.d(t,{Z:()=>C});var a=i(28789),r=i(14161);const l=a.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${r.AV.tablet} {
    padding: 20px 30px 30px;
    ${r.fU.col};
  }

  ${r.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,s=a.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,n=a.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${r.AV.laptopL} {
    margin-top: 40px;
  }

  ${r.AV.desktop} {
    flex-direction: row;
    ${r.fU.between};
  }
`,c=a.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,o=a.ZP.div`
  ${r.fU.col};
  width: 100%;
  flex-grow: 1;
`;var d=i(85335),u=i(59242),p=i(54270),h=i(44165),x=i(73457),g=i(10586),m=i(79591),v=i(59434),f=i(74037),k=i(94397),b=i(80184);const y=(0,g.withSize)()((0,x.WidthProvider)(x.Responsive)),j=a.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=e=>{let{layouts:t,children:i,id:a,desktop:r}=e;const{isLayoutEditable:l,fontScale:s}=(0,m.jt)(),n=(0,v.I0)(),c=(0,k.Z)().width<768;return(0,b.jsx)(b.Fragment,{children:c?(0,b.jsx)(j,{children:i}):(0,b.jsx)(y,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===s?182:182+11*s,isDraggable:l,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:r?e=>{l&&(n((0,f.fc)({id:a,layouts:e})),n((0,f.m8)()))}:void 0,children:i})})};var $=i(34909),Z=i(62773),_=i.n(Z),O=i(57689),P=i(72791);const C=e=>{let{title:t,children:i,hasBadge:a,hasTitle:r=!0,qty:x}=e;const g=(0,P.useRef)(null),m=_()(),{width:f}=(0,k.Z)(),y=f>767.98,{pathname:j}=(0,O.TH)(),Z=j.includes("dashboard"),C=j.replace("/",""),z=(0,v.v9)((e=>e.layout.layout))[C];return(0,P.useEffect)((()=>{g.current&&(g.current.scrollTop=0)}),[j]),(0,b.jsxs)(l,{ref:g,children:[(0,b.jsx)(p.q,{children:(0,b.jsx)("title",{children:`Smart190 | ${t}`})}),(0,b.jsxs)(o,{children:[(0,b.jsxs)(n,{as:$.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[r&&(0,b.jsxs)(s,{children:[t," ",a&&x&&x>0&&(0,b.jsxs)(d.GS,{children:["+",x]})]}),y&&(0,b.jsxs)(c,{children:[m.isDesktop()&&(0,b.jsxs)(b.Fragment,{children:[Z&&(0,b.jsx)(u.t,{children:(0,b.jsx)(h.XO,{})}),(0,b.jsx)(u.t,{children:(0,b.jsx)(h.ot,{})})]}),(0,b.jsx)(u.t,{children:(0,b.jsx)(h.t7,{})}),(0,b.jsx)(u.t,{children:(0,b.jsx)(h.zj,{})}),(0,b.jsx)(u.t,{children:(0,b.jsx)(h.vm,{})}),(0,b.jsx)(u.t,{children:(0,b.jsx)(h.jf,{})})]})]}),z?(0,b.jsx)(w,{id:C,layouts:z,desktop:m.isDesktop(),children:i}):i]})]})}},39869:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});var a=i(39314),r=i(249),l=i(66150),s=i(20760),n=i(30133),c=i(80879),o=i(75700),d=i(62242),u=i(84483),p=i(72791),h=i(17350),x=i(12298),g=i(80184);const m=()=>{const[e,t]=(0,p.useState)((0,h.Z)().period),i=(0,p.useRef)(null),a=(0,p.useRef)(null),m=(0,u.Z)(i);(0,p.useEffect)((()=>{a.current.scrollTop=0}),[e]);const v=e=>{let{period:t}=e;return(0,g.jsx)(g.Fragment,{children:x.q.map((e=>(0,g.jsx)(d.Z,{data:e,period:t},e.id)))})};return(0,g.jsxs)(r.Z,{name:"DoctorsRatingList",mobile:600,children:[(0,g.jsx)(l.Z,{title:"Doctors rating",flex:"column",style:{paddingBottom:4},elRef:i,children:(0,g.jsx)(c.Z,{current:e,handler:t})}),(0,g.jsx)(s.Z,{style:{padding:0},children:(0,g.jsx)(n.Z,{height:m,children:(0,g.jsx)("div",{className:"track",ref:a,children:(0,g.jsx)(o.Z.Container,{activeKey:e,transition:!0,children:(0,g.jsxs)(o.Z.Content,{children:[(0,g.jsx)(o.Z.Pane,{eventKey:"year",children:(0,g.jsx)(v,{period:"year"})}),(0,g.jsx)(o.Z.Pane,{eventKey:"month",children:(0,g.jsx)(v,{period:"month"})}),(0,g.jsx)(o.Z.Pane,{eventKey:"week",children:(0,g.jsx)(v,{period:"week"})})]})})})})})]})};var v=i(87670),f=i(25606),k=i(14161),b=i(69517),y=i(47242),j=i(36038),w=i(36163),$=i(28789),Z=i(22172);const _=[{id:"marvin_park",stats:[{sick:154,cured:97},{sick:205,cured:300},{sick:369,cured:207},{sick:250,cured:344},{sick:200,cured:100},{sick:120,cured:400},{sick:80,cured:150},{sick:366,cured:211},{sick:600,cured:400},{sick:200,cured:500},{sick:160,cured:200},{sick:650,cured:480}]},{id:"norman_munoz",stats:[{sick:352,cured:469},{sick:488,cured:610},{sick:120,cured:80},{sick:250,cured:344},{sick:200,cured:100},{sick:120,cured:400},{sick:80,cured:200},{sick:740,cured:400},{sick:500,cured:100},{sick:200,cured:156},{sick:500,cured:80},{sick:100,cured:20}]},{id:"tillie_mathis",stats:[{sick:154,cured:97},{sick:205,cured:300},{sick:369,cured:207},{sick:250,cured:344},{sick:700,cured:100},{sick:120,cured:400},{sick:400,cured:150},{sick:366,cured:211},{sick:100,cured:800},{sick:200,cured:500},{sick:20,cured:200},{sick:650,cured:480}]},{id:"cornelia_phillips",stats:[{sick:97,cured:154},{sick:300,cured:205},{sick:207,cured:369},{sick:250,cured:344},{sick:500,cured:100},{sick:120,cured:400},{sick:400,cured:150},{sick:366,cured:211},{sick:100,cured:500},{sick:200,cured:500},{sick:20,cured:200},{sick:650,cured:480}]},{id:"isaiah_goodman",stats:[{sick:352,cured:469},{sick:488,cured:610},{sick:120,cured:80},{sick:250,cured:344},{sick:200,cured:100},{sick:120,cured:400},{sick:80,cured:200},{sick:300,cured:400},{sick:500,cured:100},{sick:200,cured:156},{sick:500,cured:800},{sick:700,cured:1e3}]},{id:"claudia_turner",stats:[{sick:100,cured:469},{sick:488,cured:610},{sick:120,cured:80},{sick:250,cured:344},{sick:200,cured:100},{sick:120,cured:400},{sick:800,cured:200},{sick:300,cured:400},{sick:500,cured:100},{sick:200,cured:156},{sick:500,cured:20},{sick:100,cured:50}]},{id:"emily_rivera",stats:[{sick:800,cured:400},{sick:400,cured:800},{sick:250,cured:500},{sick:500,cured:250},{sick:800,cured:400},{sick:400,cured:800},{sick:250,cured:500},{sick:500,cured:250},{sick:800,cured:400},{sick:400,cured:800},{sick:250,cured:500},{sick:500,cured:250}]}],O=()=>{const{theme:e}=(0,$.Fg)(),t=(0,Z.tV)(),[i,a]=(0,p.useState)(t[0]),n=_.find((e=>e.id===i.value)).stats,c={type:"monotone",strokeWidth:3,activeDot:{r:4},fillOpacity:.8},o=[{...c,dataKey:"cured",stroke:k.O9.teal,fill:"light"===e?"url(#cure_light)":"url(#cure)",activeDot:{r:5,fill:k.O9.teal,stroke:"light"===e?k.R2.widgetBg:k._4.widgetBg,strokeWidth:2},style:{filter:`drop-shadow(0 0 4px ${(0,f.m4)(k.O9.teal,.5)})`}},{...c,dataKey:"sick",stroke:k.O9.red,fill:"none",activeDot:{r:5,fill:k.O9.red,stroke:"light"===e?k.R2.widgetBg:k._4.widgetBg,strokeWidth:2},style:{filter:`drop-shadow(0 0 4px ${(0,f.m4)(k.O9.red,.5)})`}}];return(0,g.jsxs)(r.Z,{name:"DoctorCureRate",children:[(0,g.jsx)(l.Z,{title:"Cure rate",flex:"column",children:(0,g.jsx)(b.Z,{options:t,value:i,variant:"user",changeHandler:e=>a(e)})}),(0,g.jsxs)(s.Z,{style:{padding:0,overflowY:"hidden"},children:[(0,g.jsx)(w.Z,{id:"DoctorCureRate",data:n,elems:o,variant:"area",height:265,children:(0,g.jsxs)("defs",{children:[(0,g.jsxs)("linearGradient",{id:"cure_light",x1:"0",y1:"-0.5",x2:"0",y2:"240",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:"#53F5E8"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#29E7CD",stopOpacity:"0.01"})]}),(0,g.jsxs)("linearGradient",{id:"cure",x1:"1.83382",y1:"-0.5",x2:"1.83382",y2:"238.857",gradientUnits:"userSpaceOnUse",children:[(0,g.jsx)("stop",{stopColor:"#53F5E8"}),(0,g.jsx)("stop",{offset:"1",stopColor:"#171819"})]})]})}),(0,g.jsxs)(y.Z,{overlay:!0,children:[(0,g.jsx)(j.Z,{color:"red",legend:"sick"}),(0,g.jsx)(j.Z,{color:"teal",legend:"cured"})]})]})]})},P=()=>(0,g.jsxs)(a.Z,{title:"Dashboard",children:[(0,g.jsx)("div",{children:(0,g.jsx)(m,{type:"tabs"})},"doctors-rating"),(0,g.jsx)("div",{children:(0,g.jsx)(v.Z,{variant:"both"})},"health-index"),(0,g.jsx)("div",{children:(0,g.jsx)(O,{})},"cure-rate")]})},13630:(e,t,i)=>{i.d(t,{Ji:()=>n,So:()=>s,dC:()=>r,sd:()=>l});var a=i(28789);const r=a.F4`
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
`,l=a.F4`
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
`,s=a.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,n=a.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;a.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`},87670:(e,t,i)=>{i.d(t,{Z:()=>_});var a=i(14161),r=i(28789),l=i(65484),s=i.n(l);const n=r.ZP.div`
  height: 100%;
  ${a.fU.col};
  justify-content: space-between;

  .total {
    display: flex;
    gap: 40px;
    margin: -4px 24px 0;
    position: relative;

    &_block {
      font-size: ${a.iH[12]};

      .counter {
        position: absolute;
        top: 0;
        left: 0;
      }

      .spacer {
        opacity: 0;
      }

      .hidden {
        display: none;
      }

      &--cured .h1 {
        color: ${a.O9.azure};
      }

      &--sick {
        position: relative;

        .h1 {
          color: ${a.O9.peach};
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: ${s()("theme",{light:"#A2C0D4",dark:"#383D40"})};
          position: absolute;
          top: 0;
          left: -20px;
        }
      }
    }

    ${a.AV.tablet} {
      .total_block {
        font-size: ${a.iH[14]};

        .hidden {
          display: inline;
        }
      }
    }

    ${a.AV.laptop} {
      .total_block {
        font-size: ${a.iH[16]};
      }
    }
  }
`;var c=i(249),o=i(90004),d=i(20760),u=i(19913),p=i(5749),h=i(13386),x=i(41048),g=i(71827),m=i(47242),v=i(36038),f=i(22426),k=i(40835),b=i(54561),y=i(17350);const j=[{cured:314,sick:200},{cured:200,sick:400},{cured:265,sick:120},{cured:156,sick:300},{cured:412,sick:200},{cured:280,sick:500},{cured:251,sick:130},{cured:180,sick:300},{cured:304,sick:150},{cured:505,sick:408},{cured:328,sick:200},{cured:254,sick:90},{cured:301,sick:566},{cured:459,sick:189},{cured:354,sick:480},{cured:264,sick:400},{cured:309,sick:200},{cured:185,sick:500}],w=[{cured:450,sick:250},{cured:150,sick:380},{cured:370,sick:200},{cured:300,sick:180},{cured:500,sick:250},{cured:400,sick:600},{cured:200,sick:300},{cured:400,sick:150},{cured:348,sick:130},{cured:400,sick:280},{cured:200,sick:400},{cured:300,sick:241},{cured:380,sick:480},{cured:200,sick:380},{cured:400,sick:200},{cured:500,sick:250},{cured:400,sick:300},{cured:300,sick:450}],$=[{cured:200,sick:300},{cured:250,sick:350},{cured:390,sick:240},{cured:450,sick:320},{cured:550,sick:250},{cured:420,sick:200},{cured:368,sick:198},{cured:250,sick:370},{cured:322,sick:200},{cured:450,sick:270},{cured:210,sick:394},{cured:180,sick:270},{cured:380,sick:480},{cured:390,sick:550},{cured:450,sick:210},{cured:470,sick:360},{cured:360,sick:190},{cured:300,sick:250}];var Z=i(80184);const _=e=>{let{variant:t}=e;const{theme:i}=(0,r.Fg)(),{periods:l}=(0,y.Z)(),{index:s,navigate:_}=(0,b.Z)(l),O=[{cured:75.08,sick:45.27},{cured:84.51,sick:33.12},{cured:67.14,sick:48.65}],P=(()=>{switch(s){default:case 0:return j;case 1:return w;case 2:return $}})(),C=e=>{let{cx:r,cy:l,fill:s,...n}=e;const c="both"===t?n.dom===n.dataKey:"cured"===n.dataKey;return(0,Z.jsxs)("svg",{width:"10",height:"222",viewBox:"0 0 10 222",x:r,y:l,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c&&(0,Z.jsx)("path",{opacity:"0.5",d:"M5 28.3799V220.38",stroke:`url(#scatter_${n.dataKey})`,strokeWidth:"2",strokeLinecap:"round"}),(0,Z.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:s}),(0,Z.jsxs)("defs",{children:[(0,Z.jsxs)("linearGradient",{id:"scatter_cured",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,Z.jsx)("stop",{stopColor:"light"===i?a.R2.widgetBg:a._4.widgetBg}),(0,Z.jsx)("stop",{offset:"1",stopColor:a.O9.azure})]}),(0,Z.jsxs)("linearGradient",{id:"scatter_sick",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,Z.jsx)("stop",{stopColor:"light"===i?a.R2.widgetBg:a._4.widgetBg}),(0,Z.jsx)("stop",{offset:"1",stopColor:a.O9.peach})]})]})]})};return(0,Z.jsxs)(c.Z,{name:"HealthIndexChart",children:[(0,Z.jsx)(o.Z,{title:"Health index",handler:_}),(0,Z.jsx)(d.Z,{style:{padding:0,overflow:"hidden"},children:(0,Z.jsxs)(n,{children:[(0,Z.jsxs)("div",{className:"total",children:[(0,Z.jsxs)("div",{className:"total_block total_block--cured",children:[(0,Z.jsx)("span",{className:"spacer h1",children:O[s].cured}),(0,Z.jsx)(k.ZP,{className:"counter h1",end:O[s].cured,duration:2,decimals:2}),(0,Z.jsxs)("span",{children:[(0,Z.jsx)("span",{className:"hidden",children:"patients"})," health rate"]})]}),"both"===t&&(0,Z.jsxs)("div",{className:"total_block total_block--sick",children:[(0,Z.jsx)("span",{className:"spacer h1",children:O[s].sick}),(0,Z.jsx)(k.ZP,{className:"counter h1",end:O[s].sick,duration:2,decimals:2}),(0,Z.jsxs)("span",{children:[(0,Z.jsx)("span",{className:"hidden",children:"patients"})," sick rate"]})]})]}),(0,Z.jsx)(u.h,{width:"100%",height:250,children:(0,Z.jsxs)(p.G,{margin:!1,data:P,children:["both"===t&&(0,Z.jsx)(h.b,{dataKey:"sick",shape:C,children:P.map(((e,t)=>(0,Z.jsx)(x.b,{fill:a.O9.peach,dom:e.sick>e.cured?"sick":"cured",dataKey:"sick"},`cell-${t}`)))}),(0,Z.jsx)(h.b,{dataKey:"cured",shape:C,children:P.map(((e,t)=>(0,Z.jsx)(x.b,{fill:a.O9.azure,dom:e.cured>e.sick?"cured":"sick",dataKey:"cured"},`cell-${t}`)))}),(0,Z.jsx)(g.u,{cursor:!1,content:(0,Z.jsx)(f.Z,{right:!0})})]})}),(0,Z.jsxs)(m.Z,{overlay:!0,children:[(0,Z.jsx)(v.Z,{color:"azure",legend:"Health rate"}),"both"===t&&(0,Z.jsx)(v.Z,{color:"peach",legend:"Sick rate"})]})]})})]})}}}]);
//# sourceMappingURL=6120.15f5321e.chunk.js.map