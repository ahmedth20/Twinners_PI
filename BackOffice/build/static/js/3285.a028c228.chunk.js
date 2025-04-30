"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[3285],{21119:(e,a,t)=>{t.d(a,{Z:()=>d});var l=t(28789),r=t(14161),i=t(25606),n=t(71856),o=t(34909),s=t(80184);const c=l.ZP.button`
  border-radius: 8px;
  background-color: ${r.O9.blue};
  color: #fff;
  font-size: ${r.iH[14]};
  font-family: ${r.Rq.accent};
  height: 40px;
  width: 100%;
  display: flex;
  ${r.fU.center};
  gap: 8px;
  line-height: 1;
  transition: background-color var(--transition);
  

  &:hover, &:focus {
    background-color: ${(0,i._j)(.1,r.O9.blue)};
  }

  &.success {
    background-color: ${r.O9.success};

    &:hover, &:focus {
      background-color: ${(0,i._j)(.1,r.O9.success)};
    }
  }

  &.error {
    background-color: ${r.O9.error};

    &:hover, &:focus {
      background-color: ${(0,i._j)(.1,r.O9.error)};
    }
  }

  &.disabled {
    background-color: ${r.O9.gray};
    pointer-events: none;
  }
`,d=e=>{let{text:a,handler:t,type:l="button",isVisible:r=!0,className:i,icon:d}=e;return(0,s.jsx)(n.M,{children:r&&(0,s.jsxs)(c,{as:o.E.button,className:i||"",onClick:t,type:l,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d&&(0,s.jsx)("i",{className:`icon icon-${d}`})," ",a]})})}},15691:(e,a,t)=>{t.d(a,{I:()=>s,Z:()=>c});var l=t(28789),r=t(14161),i=t(65484),n=t.n(i),o=t(80184);const s=l.ZP.input`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${r.iH[14]};
  ${n()("theme",{light:`\n    background-color: ${r.R2.highlight};\n   `,dark:`\n    background-color: ${r._4.highlight};\n   `})};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${r.O9.error};
  }

  &:hover {
    box-shadow: ${n()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${r.O9.dark}`})};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${r.O9.blue};
  }
`,c=e=>{let{type:a="text",placeholder:t,value:l,handler:r,id:i,className:n}=e;return(0,o.jsx)(s,{type:a,placeholder:t,value:l,onChange:r,id:i,className:n||""})}},33926:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(14161),r=t(57482),i=t(28789),n=t(80184);const o=e=>{let{color:a=l.O9.blue,value:t,style:o={}}=e;const{theme:s}=(0,i.Fg)();return(0,n.jsx)(r.Z,{className:"progressbar",variant:"determinate","aria-label":t,value:t,sx:{backgroundColor:"light"===s?"#E4EAF0":l._4.highlight,height:6,borderRadius:2,...o,"& .MuiLinearProgress-bar":{backgroundColor:a,borderRadius:2}}})}},69517:(e,a,t)=>{t.d(a,{Z:()=>x});var l=t(28789),r=t(65484),i=t.n(r),n=t(14161),o=t(13630),s=t(13668);const c=i()("theme",{light:n.R2.highlight,dark:n._4.highlight}),d=i()("theme",{light:n.R2.text,dark:n._4.text}),u=(0,l.ZP)(s.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${c};
      border-radius: 8px;
      font-size: ${n.iH[16]};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${n.O9.blue} !important;
      }

      &:hover {
        box-shadow: ${i()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${n.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${i()("theme",{light:"#A2C0D4",dark:n.O9.gray})};
        font-size: ${n.iH[12]};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${d};
      background-color: ${c};
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
        color: ${n.O9.blue};
      }
    }

    &__single-value {
      color: ${i()("theme",{light:n.R2.text,dark:n._4.text})};
    }
  }
`,p=(0,l.ZP)(u)`
  .Select {
    &__control {
      font-size: ${n.iH[14]};
    }

    &__input-container {
      color: ${d};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,h=(0,l.ZP)(u)`
  .Select {
    &__control {
      background-color: transparent;
      width: fit-content;
      font-weight: 500;
      font-family: ${n.Rq.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${n.iH[18]};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${n.AV.tablet} {
    .Select__control {
      font-size: ${n.iH[20]};
    }
  }
`,m=(0,l.ZP)(u)`
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
`;var b=t(22723),v=t(72791),g=t(80184);const x=e=>{let{label:a,options:t,variant:l,value:r,changeHandler:i,placeholder:n}=e;(0,v.useEffect)((()=>{n||null!==r||i(t[0])}),[]);const[o]=(0,v.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),s={classNamePrefix:"Select",inputId:a,isSearchable:"user"!==l,options:t,value:r,onChange:i,placeholder:n,openMenuOnFocus:!0,components:{Control:e=>{let{children:a,...t}=e;return(0,g.jsxs)(b.c.Control,{...t,children:[a,(0,g.jsx)("i",{className:`icon icon-${"minimal"===l?"caret":"chevron"}-down`})]})},Menu:e=>(0,g.jsx)(b.c.Menu,{...e,className:"menu",children:e.children})},id:o,blurInputOnSelect:!0,className:`select-${l}`};switch(l){default:case"basic":return(0,g.jsx)(p,{...s});case"minimal":return(0,g.jsx)(h,{...s});case"user":return(0,g.jsx)(m,{...s})}}},62014:(e,a,t)=>{t.d(a,{W2:()=>s,ck:()=>d,zx:()=>c});var l=t(28789),r=t(65484),i=t.n(r),n=t(14161);const o=i()("theme",{light:n.R2.bodyBg,dark:n.R2.text}),s=l.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,c=l.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${n.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${i()("theme",{light:`\n        color: ${n.O9.blue};\n        background-color: ${n.R2.highlight};\n    `,dark:`\n        color: ${n.O9.secondary};\n        background-color: ${n._4.highlight};\n    `})};
  display: flex;
  ${n.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,d=l.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},9111:(e,a,t)=>{t.d(a,{Z:()=>c});var l=t(28789),r=t(14161),i=t(72426),n=t.n(i),o=t(80184);const s=l.ZP.span`
  display: flex;
  gap: 8px;
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
  text-transform: uppercase;
`,c=e=>{let{date:a,text:t,time:l=!1}=e;return(0,o.jsxs)(s,{children:[t&&(0,o.jsx)("span",{children:t}),(0,o.jsx)("span",{children:n()(a).format("DD MMM YYYY")}),l&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{children:"/"}),(0,o.jsx)("span",{children:n()(a).format("hh:mm A")})]})]})}},80879:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(62014),r=t(17350),i=t(25984),n=t(80184);const o=e=>{let{current:a,handler:t}=e;const{periods:o}=(0,r.Z)();return(0,n.jsx)(l.W2,{children:o.map((e=>(0,n.jsx)(l.ck,{children:(0,n.jsx)(l.zx,{className:a===e&&"active",onClick:()=>t(e),children:e})},(0,i.x0)(4))))})}},30133:(e,a,t)=>{t.d(a,{Z:()=>d});var l=t(28789),r=t(65484),i=t.n(r),n=t(72791);const o=(e,a)=>{const[t,l]=(0,n.useState)(void 0),[r,i]=(0,n.useState)(void 0),o=()=>{const{current:a}=e;0===a.children[0].scrollTop?a.classList.add("is-top"):a.classList.remove("is-top");a.children[0].scrollHeight===Math.ceil(a.children[0].scrollTop)+a.children[0].clientHeight||a.children[0].scrollHeight===Math.floor(a.children[0].scrollTop)+a.children[0].clientHeight?a.classList.add("is-bottom"):a.classList.remove("is-bottom")};return(0,n.useEffect)((()=>{const{current:t}=e,r=()=>{i(t.children[0].scrollHeight);const e=t.children[0].scrollHeight>t.children[0].clientHeight;l(e),null===t||void 0===t||t.classList.toggle("has-overflow",e),t.children[0].addEventListener("scroll",o),a&&a(e)};t&&("ResizeObserver"in window&&new ResizeObserver(r).observe(t),r())}),[e,a,r]),t};var s=t(80184);const c=l.ZP.div`
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
      background: ${i()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,d=e=>{let{children:a,height:t,size:l}=e;const r=(0,n.useRef)(null),i=o(r);return(0,s.jsx)(c,{className:i?"is-top has-overflow":"",height:t,ref:r,size:l,children:a})}},49540:(e,a,t)=>{t.d(a,{Z:()=>$});var l=t(28789),r=t(14161),i=t(65484),n=t.n(i);const o=n()("theme",{light:`1px solid ${r.O9.light_gray} !important`,dark:`1px solid ${r.O9.dark} !important`}),s=l.ZP.form`
  ${r.fU.col};
  padding: 20px 22px;
  background-color: ${n()("theme",{light:r.R2.highlight,dark:r._4.highlight})};
  border-radius: 8px;
  margin: ${e=>"list"===e.variant?"24px":"0 0 20px 0"};
  border: ${o};
`,c=l.ZP.div`
  ${r.fU.col};
  gap: 10px;
  margin-bottom: 20px;
  
  .field, .Select__control {
    border: ${o};
  }
`,d=l.ZP.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;var u=t(69517),p=t(15691),h=t(21119),m=t(13208),b=t(56125),v=t(59434),g=t(74295),x=t(22172),f=t(72791),y=t(25984),k=t(80184);const $=e=>{let{isVisible:a,visibilityHandler:t,variant:l}=e;const[r,i]=(0,f.useState)(""),[n,o]=(0,f.useState)(null),$=(0,v.I0)(),j=Date.now(),_=()=>{i(""),o(null),t(!1)};return(0,k.jsx)(b.Z,{in:a,children:(0,k.jsx)(m.Z,{in:a,timeout:700,children:(0,k.jsxs)(s,{onSubmit:e=>(e=>{if(e.preventDefault(),""!==r&&null!==n){const e=(0,y.x0)(5);$((0,g.rk)({id:e,name:r,timestamp:j,label:n.value,expanded:!1})),setTimeout((()=>$((0,g.f)({id:e}))),300),_()}})(e),variant:l,children:[(0,k.jsxs)(c,{children:[(0,k.jsx)(p.Z,{placeholder:"Task",value:r,handler:e=>{i(e.target.value)},className:"field"}),(0,k.jsx)(u.Z,{variant:"basic",placeholder:"Category",options:x.b_,value:n,changeHandler:e=>{o(e)}})]}),(0,k.jsxs)(d,{children:[(0,k.jsx)(h.Z,{text:"Add",type:"submit",className:"success"}),(0,k.jsx)(h.Z,{text:"Cancel",className:"error",handler:()=>_()})]})]})})})}},33312:(e,a,t)=>{t.d(a,{Z:()=>M});var l=t(28789),r=t(65484),i=t.n(r),n=t(14161);const o=l.ZP.div`
  margin: 0 2px;

  &.selected {
    .list-item {
      &:after {
        opacity: 1;
      }

      .checkbox label {
        background-color: ${i()("theme",{dark:n._4.highlight})};
      }

      .category .text {
        opacity: 1;
      }
    }
  }

  &:last-of-type {
    .list-item {
      &:before {
        display: none;
      }
    }
  }
`,s=i()("theme",{light:n.R2.highlight,dark:n._4.bodyBg}),c=l.ZP.div`
  .list-item {
    &:hover, &:focus {
      background-color: ${s};
    }
  }

  &.selected .list-item {
    background-color: ${s};
  }
`;var d=t(85335);const u=l.ZP.span`
  display: none;
  align-items: center;
  line-height: ${n.iH[10]};
  gap: 6px;
  font-size: ${n.iH[10]};
  font-family: ${n.Rq.accent};
  text-transform: uppercase;

  .text {
    opacity: 0;
    transition: opacity var(--transition);
  }

  ${n.AV.mobileL} {
    display: flex;
  }

  ${n.AV.tablet} {
    .text {
      display: none;
    }
  }

  ${n.AV.laptop} {
    .text {
      display: inline;
    }
  }
`,p=l.ZP.div`
  padding: 20px 22px;
  position: relative;
  cursor: grab;

  * {
    user-select: none !important;
  }

  input {
    cursor: grab;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
  }

  &:before {
    content: '';
    position: absolute;
    left: 24px;
    bottom: 0;
    width: calc(100% - 48px);
    border-bottom: ${i()("theme",{light:n.Sz.dashedLight,dark:n.Sz.dashedDark})};
  }

  &:after {
    display: block;
    border-radius: 8px;
    height: 100%;
    top: -1px;
    left: 0;
    background-color: ${i()("theme",{light:n.R2.widgetBg,dark:n.R2.text})};
    box-shadow: 0 1px 8px rgba(65, 77, 85, 0.4);
    z-index: 1;
    opacity: 0;
    transition: opacity var(--transition);
    border-bottom: 2px ${e=>n.O9[e.color]} solid;
  }

  .dots {
    color: ${i()("theme",{light:n.R2.text,dark:n._4.text})};
    opacity: 0;
    transition: opacity var(--transition);
  }

  &:hover {
    &:after,
    ${u} .text,
    .dots {
      opacity: 1;
    }

    .checkbox label {
      background-color: ${i()("theme",{dark:n._4.highlight})};
    }
  }
`,h=l.ZP.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 12px;
`,m=l.ZP.div`
  ${n.fU.col};
  gap: 10px;
  flex-grow: 1;
`,b=l.ZP.div`
  ${n.fU.col};
  justify-content: flex-end;
  align-items: flex-end;
`,v=l.ZP.div`
  background-color: ${i()("theme",{light:n.R2.bodyBg,dark:n._4.highlight})};
  padding: 20px 20px 20px 24px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  ${n.fU.between};
  transition: background-color var(--transition);
  cursor: grab;

  * {
    user-select: none;
  }
`,g=l.ZP.div`
  ${n.fU.col};
  gap: 6px;
`,x=l.ZP.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;var f=t(9111),y=t(80184);const k=l.ZP.div`
  input {
    display: none;

    &:checked + label span {
      opacity: 1;
    }
  }

  label {
    ${n.fU.col};
    ${n.fU.center};
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: ${i()("theme",{light:n.O9.light_gray,dark:n.R2.text})};
    cursor: pointer;
    transition: var(--transition);
    position: relative;

    span {
      display: block;
      border-radius: 2px;
      background-color: ${n.O9.blue};
      width: 12px;
      height: 12px;
      transition: opacity var(--transition);
      opacity: 0;
    }
  }
`,$=l.ZP.div`
  input {
    display: none;
    &:checked + label {
      color: ${n.O9.blue};
    }
  }

  label {
    color: #BBCDD9;
    transition: var(--transition);

    &:hover, &:focus {
      color: ${n.O9.blue};
    }
  }
`,j=e=>{let{variant:a,handler:t,checked:l,id:r}=e;const i={type:"checkbox",id:r,defaultChecked:l,onChange:t},n=()=>{switch(a){default:case"square":return(0,y.jsxs)(k,{className:"checkbox",children:[(0,y.jsx)("input",{...i}),(0,y.jsx)("label",{htmlFor:r,tabIndex:0,children:(0,y.jsx)("span",{})})]});case"basic":return(0,y.jsxs)($,{children:[(0,y.jsx)("input",{...i}),(0,y.jsx)("label",{htmlFor:r,tabIndex:0,children:(0,y.jsx)("i",{className:"icon icon-check"})})]})}};return(0,y.jsx)(n,{})};var _=t(56125),w=t(74295),Z=t(57770),z=t(72426),P=t.n(z),O=t(59434);const C=e=>{let{data:a,variant:t}=e;const{id:l,name:r,timestamp:i,complete:n,label:o,expanded:s}=a,c=(0,O.I0)(),k=Z.z.find((e=>{let{cat:a}=e;return a===o})).color,$=()=>{switch(t){default:case"list":return(0,y.jsx)(p,{color:k,className:"list-item",tabIndex:0,children:(0,y.jsxs)(h,{children:[(0,y.jsx)(j,{variant:"square",id:`task-${l}`,checked:n,handler:()=>c((0,w.L$)({id:l}))}),(0,y.jsxs)(m,{children:[(0,y.jsx)("input",{type:"text",defaultValue:r,readOnly:!0}),(0,y.jsx)(f.Z,{date:P()(i).toDate(),time:!0})]}),(0,y.jsx)(b,{children:(0,y.jsxs)(u,{className:"category",children:[(0,y.jsx)("span",{className:"text",children:o}),(0,y.jsx)(d.kd,{color:k})]})})]})});case"planner":return(0,y.jsxs)(v,{className:"list-item",tabIndex:0,children:[(0,y.jsxs)(g,{children:[(0,y.jsx)("span",{children:r}),(0,y.jsxs)(x,{children:[(0,y.jsx)(d.Ct,{color:k}),(0,y.jsx)(f.Z,{date:P()(i).toDate(),time:!0})]})]}),(0,y.jsx)(j,{variant:"basic",id:`task-${l}`,checked:n,handler:()=>c((0,w.L$)({id:l}))})]})}};return(0,y.jsx)(_.Z,{in:s,timeout:300,children:(0,y.jsx)($,{})})};var R=t(25216),S=t(43893),N=t(68218),H=t(42526),F=t(62773),D=t.n(F);const M=e=>{let{variant:a}=e;const t=D()(),l=(0,O.v9)((e=>e.todos.todos)),r=(0,O.I0)(),i="list"===a?o:c,n=(0,R.Dy)((0,R.VT)(R.we,{activationConstraint:{distance:15}}),(0,R.VT)(R.LO,{activationConstraint:{delay:2e3,tolerance:5}})),s=e=>{const{attributes:a,listeners:t,setNodeRef:l,transform:r,transition:i,isOver:n,isDragging:o}=(0,S.nB)({id:e.id}),s={transform:N.ux.Transform.toString(r),transition:i,zIndex:n||o?10:0,position:"relative",touchAction:"none"};return(0,y.jsx)("div",{ref:l,style:s,...a,...t,children:e.children})};return(0,y.jsx)(R.LB,{sensors:n,collisionDetection:R.pE,onDragEnd:e=>{const{active:a,over:t}=e;if(a.id!==t.id){const e=l.findIndex((e=>{let{id:t}=e;return t===a.id})),i=l.findIndex((e=>{let{id:a}=e;return a===t.id}));r((0,w.Cs)((0,S.Rp)(l,e,i)))}},modifiers:[H.DL],autoScroll:!0,children:(0,y.jsx)(S.Fo,{items:l,strategy:S.qw,disabled:!t.isDesktop(),children:l.map((e=>(0,y.jsx)(s,{id:e.id,children:(0,y.jsx)(i,{children:(0,y.jsx)(C,{data:e,variant:a})})},e.id)))})})}},5507:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(57770),r=t(36038),i=t(47242),n=t(80184);function o(){return(0,n.jsx)(i.Z,{children:l.z.map((e=>{let{color:a,cat:t}=e;return(0,n.jsx)(r.Z,{color:a,legend:t},t)}))})}},57770:(e,a,t)=>{t.d(a,{U:()=>l,z:()=>r});const l=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],r=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},22172:(e,a,t)=>{t.d(a,{b_:()=>n,i7:()=>o,tV:()=>s});var l=t(12298),r=t(83687),i=t(80184);const n=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=()=>{let e=[];return l.q.forEach((a=>{e.push({value:a.id,label:(0,i.jsxs)("div",{className:"user-option",children:[(0,i.jsx)(r.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,i.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,t)=>{t.d(a,{q:()=>b});var l=t(65710),r=t(37512),i=t(76155),n=t(62056),o=t(67583),s=t(79168),c=t(29260),d=t(33375);const u=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",p=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var h=t(43928),m=t(4681);const b=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:i,webp:n},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(99976),webp:t(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:u,webp:p},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:l,webp:r},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:c,webp:d},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:h,webp:m},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},84483:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(72791);const r=(e,a)=>{const[t,r]=(0,l.useState)(0);return(0,l.useEffect)((()=>{if(null!==e&&null!==a){const t=e.current?e.current.clientHeight:0,l=a&&a.current?a.current.clientHeight:0;r(t+l)}}),[e,a]),t}},13630:(e,a,t)=>{t.d(a,{Ji:()=>o,So:()=>n,dC:()=>r,sd:()=>i});var l=t(28789);const r=l.F4`
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
`,i=l.F4`
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
`,n=l.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,o=l.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;l.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`}}]);
//# sourceMappingURL=3285.a028c228.chunk.js.map