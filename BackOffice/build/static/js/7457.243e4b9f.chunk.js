"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[7457],{21119:(e,t,i)=>{i.d(t,{Z:()=>c});var r=i(28789),n=i(14161),o=i(25606),a=i(71856),l=i(34909),s=i(80184);const d=r.ZP.button`
  border-radius: 8px;
  background-color: ${n.O9.blue};
  color: #fff;
  font-size: ${n.iH[14]};
  font-family: ${n.Rq.accent};
  height: 40px;
  width: 100%;
  display: flex;
  ${n.fU.center};
  gap: 8px;
  line-height: 1;
  transition: background-color var(--transition);
  

  &:hover, &:focus {
    background-color: ${(0,o._j)(.1,n.O9.blue)};
  }

  &.success {
    background-color: ${n.O9.success};

    &:hover, &:focus {
      background-color: ${(0,o._j)(.1,n.O9.success)};
    }
  }

  &.error {
    background-color: ${n.O9.error};

    &:hover, &:focus {
      background-color: ${(0,o._j)(.1,n.O9.error)};
    }
  }

  &.disabled {
    background-color: ${n.O9.gray};
    pointer-events: none;
  }
`,c=e=>{let{text:t,handler:i,type:r="button",isVisible:n=!0,className:o,icon:c}=e;return(0,s.jsx)(a.M,{children:n&&(0,s.jsxs)(d,{as:l.E.button,className:o||"",onClick:i,type:r,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[c&&(0,s.jsx)("i",{className:`icon icon-${c}`})," ",t]})})}},15691:(e,t,i)=>{i.d(t,{I:()=>s,Z:()=>d});var r=i(28789),n=i(14161),o=i(65484),a=i.n(o),l=i(80184);const s=r.ZP.input`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${n.iH[14]};
  ${a()("theme",{light:`\n    background-color: ${n.R2.highlight};\n   `,dark:`\n    background-color: ${n._4.highlight};\n   `})};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${n.O9.error};
  }

  &:hover {
    box-shadow: ${a()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${n.O9.dark}`})};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${n.O9.blue};
  }
`,d=e=>{let{type:t="text",placeholder:i,value:r,handler:n,id:o,className:a}=e;return(0,l.jsx)(s,{type:t,placeholder:i,value:r,onChange:n,id:o,className:a||""})}},69517:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(28789),n=i(65484),o=i.n(n),a=i(14161),l=i(13630),s=i(13668);const d=o()("theme",{light:a.R2.highlight,dark:a._4.highlight}),c=o()("theme",{light:a.R2.text,dark:a._4.text}),p=(0,r.ZP)(s.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${d};
      border-radius: 8px;
      font-size: ${a.iH[16]};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${a.O9.blue} !important;
      }

      &:hover {
        box-shadow: ${o()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${a.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${o()("theme",{light:"#A2C0D4",dark:a.O9.gray})};
        font-size: ${a.iH[12]};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${c};
      background-color: ${d};
      border-radius: 8px;
      animation: ${l.Ji} var(--transition);
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
        color: ${a.O9.blue};
      }
    }

    &__single-value {
      color: ${o()("theme",{light:a.R2.text,dark:a._4.text})};
    }
  }
`,h=(0,r.ZP)(p)`
  .Select {
    &__control {
      font-size: ${a.iH[14]};
    }

    &__input-container {
      color: ${c};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,x=(0,r.ZP)(p)`
  .Select {
    &__control {
      background-color: transparent;
      width: fit-content;
      font-weight: 500;
      font-family: ${a.Rq.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${a.iH[18]};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${a.AV.tablet} {
    .Select__control {
      font-size: ${a.iH[20]};
    }
  }
`,u=(0,r.ZP)(p)`
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
`;var g=i(22723),m=i(72791),f=i(80184);const v=e=>{let{label:t,options:i,variant:r,value:n,changeHandler:o,placeholder:a}=e;(0,m.useEffect)((()=>{a||null!==n||o(i[0])}),[]);const[l]=(0,m.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),s={classNamePrefix:"Select",inputId:t,isSearchable:"user"!==r,options:i,value:n,onChange:o,placeholder:a,openMenuOnFocus:!0,components:{Control:e=>{let{children:t,...i}=e;return(0,f.jsxs)(g.c.Control,{...i,children:[t,(0,f.jsx)("i",{className:`icon icon-${"minimal"===r?"caret":"chevron"}-down`})]})},Menu:e=>(0,f.jsx)(g.c.Menu,{...e,className:"menu",children:e.children})},id:l,blurInputOnSelect:!0,className:`select-${r}`};switch(r){default:case"basic":return(0,f.jsx)(h,{...s});case"minimal":return(0,f.jsx)(x,{...s});case"user":return(0,f.jsx)(u,{...s})}}},8281:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(62014),n=i(69667),o=i(80184);const a=e=>{let{className:t,eventKey:i,title:a,handler:l}=e;return(0,o.jsx)(r.ck,{className:t||"",as:n.Z.Item,onClick:l,children:(0,o.jsx)(r.zx,{as:n.Z.Link,eventKey:i,children:a})})}},19640:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(62014),n=i(69667),o=i(80184);const a=e=>{let{children:t}=e;return(0,o.jsx)(r.W2,{as:n.Z,children:t})}},62014:(e,t,i)=>{i.d(t,{W2:()=>s,ck:()=>c,zx:()=>d});var r=i(28789),n=i(65484),o=i.n(n),a=i(14161);const l=o()("theme",{light:a.R2.bodyBg,dark:a.R2.text}),s=r.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,d=r.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${a.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${o()("theme",{light:`\n        color: ${a.O9.blue};\n        background-color: ${a.R2.highlight};\n    `,dark:`\n        color: ${a.O9.secondary};\n        background-color: ${a._4.highlight};\n    `})};
  display: flex;
  ${a.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${l};
  }
`,c=r.ZP.div`
  &.active .nav-link {
    background-color: ${l};
  };
`},20760:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(51899),n=i(80184);const o=e=>{let{children:t,style:i,sidePadding:o=!1,elRef:a,...l}=e;return(0,n.jsx)(r.uT,{ref:a,sidePadding:o,style:i,...l,children:t})}},249:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(51899),n=i(34909),o=i(79591),a=i(80184);const l=e=>{let{name:t,children:i,style:l,shadow:s=!1,...d}=e;const{direction:c}=(0,o.jt)();return(0,a.jsx)(r.W2,{as:n.E.div,"data-widget":t,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:l,className:s?"shadow":"",dir:c,mobile:d.mobile,children:i})}},51899:(e,t,i)=>{i.d(t,{JL:()=>g,Pz:()=>x,W2:()=>p,h4:()=>h,iz:()=>f,uT:()=>u,wp:()=>m});var r=i(28789),n=i(65484),o=i.n(n),a=i(14161);const l=o()("theme",{light:a.R2.widgetBg,dark:a._4.widgetBg}),s=o()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg}),d=o()("theme",{light:a.R2.shadow,dark:a._4.shadow}),c=o()("theme",{light:a.R2.highlight,dark:a._4.highlight}),p=r.ZP.div`
  box-shadow: ${a.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${l};
  overflow: hidden;
  ${a.fU.col};
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
  
  ${a.AV.tablet} {
    height: 100%;
  }
`,h=r.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":a.fU.between};
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
`,x=r.ZP.div`
  ${a.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${c};
  }
`,u=r.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${a.fU.col};
  flex-grow: 1;
`,g=r.ZP.div`
  font-size: ${a.iH[14]};
  display: flex;
  align-items: center;
  color: ${a.O9.gray};
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
`,m=r.ZP.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${s};
  flex-grow: 1;
`,f=r.ZP.div`
  height: 2px;
  background-color: ${s};
  width: 100%;
`},63245:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(98246),n=i(52007),o=i.n(n);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";const{enqueueSnackbar:i}=(0,r.Ds)();return{notify:()=>i(e,{variant:t})}};a.propTypes={text:o().string.isRequired,type:o().oneOf(["success","error","warning","info"])};const l=a},39314:(e,t,i)=>{i.d(t,{Z:()=>z});var r=i(28789),n=i(14161);const o=r.ZP.div`
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
`,a=r.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,l=r.ZP.div`
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
`,s=r.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,d=r.ZP.div`
  ${n.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=i(85335),p=i(59242),h=i(54270),x=i(44165),u=i(73457),g=i(10586),m=i(79591),f=i(59434),v=i(74037),b=i(94397),y=i(80184);const $=(0,g.withSize)()((0,u.WidthProvider)(u.Responsive)),j=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=e=>{let{layouts:t,children:i,id:r,desktop:n}=e;const{isLayoutEditable:o,fontScale:a}=(0,m.jt)(),l=(0,f.I0)(),s=(0,b.Z)().width<768;return(0,y.jsx)(y.Fragment,{children:s?(0,y.jsx)(j,{children:i}):(0,y.jsx)($,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===a?182:182+11*a,isDraggable:o,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:n?e=>{o&&(l((0,v.fc)({id:r,layouts:e})),l((0,v.m8)()))}:void 0,children:i})})};var k=i(34909),P=i(62773),Z=i.n(P),_=i(57689),S=i(72791);const z=e=>{let{title:t,children:i,hasBadge:r,hasTitle:n=!0,qty:u}=e;const g=(0,S.useRef)(null),m=Z()(),{width:v}=(0,b.Z)(),$=v>767.98,{pathname:j}=(0,_.TH)(),P=j.includes("dashboard"),z=j.replace("/",""),C=(0,f.v9)((e=>e.layout.layout))[z];return(0,S.useEffect)((()=>{g.current&&(g.current.scrollTop=0)}),[j]),(0,y.jsxs)(o,{ref:g,children:[(0,y.jsx)(h.q,{children:(0,y.jsx)("title",{children:`Smart190 | ${t}`})}),(0,y.jsxs)(d,{children:[(0,y.jsxs)(l,{as:k.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[n&&(0,y.jsxs)(a,{children:[t," ",r&&u&&u>0&&(0,y.jsxs)(c.GS,{children:["+",u]})]}),$&&(0,y.jsxs)(s,{children:[m.isDesktop()&&(0,y.jsxs)(y.Fragment,{children:[P&&(0,y.jsx)(p.t,{children:(0,y.jsx)(x.XO,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(x.ot,{})})]}),(0,y.jsx)(p.t,{children:(0,y.jsx)(x.t7,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(x.zj,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(x.vm,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(x.jf,{})})]})]}),C?(0,y.jsx)(w,{id:z,layouts:C,desktop:m.isDesktop(),children:i}):i]})]})}},57457:(e,t,i)=>{i.r(t),i.d(t,{default:()=>B});var r=i(39314),n=i(28789),o=i(65484),a=i.n(o),l=i(14161);const s=n.ZP.div`
  ${l.fU.col};
  margin-bottom: 24px;
  gap: 24px;

  .wrapper {
    padding: 24px 24px 0;

    .title {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
    }
  }

  ${l.AV.landscapeS} {
    .wrapper {
      display: flex;
      ${l.fU.between};

      .title {
        margin-bottom: 0;
      }

      .nav {
        max-width: 300px;
      }
    }
  }
`,d=n.ZP.div`
  display: grid;
  grid-gap: 24px;
  margin-bottom: 24px;

  ${l.AV.landscapeS} {
    grid-template-columns: 1fr 1fr;
  }
`,c=n.ZP.form`
  .dropzone {
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: 120px;
    margin: 0 auto 24px;
    background-color: ${a()("theme",{light:l.R2.highlight,dark:l._4.highlight})};
    ${l.fU.col};
    ${l.fU.center};
    font-size: ${l.iH[18]};
    cursor: pointer;
    border: 2px dashed transparent;
    transition: border-color var(--transition);

    .icon {
      opacity: 0.5;
    }

    &:hover, &:focus, &.active {
      border-color: ${a()("theme",{light:l.O9.light_gray,dark:l.O9.dark})};
    }

    .hint {
      display: none;
    }
  }

  ${l.AV.tablet} {
    button[type='submit'] {
      max-width: 200px;
      margin: 0 auto;
    }

    .dropzone {
      width: 200px;
    }
  }

  ${l.AV.laptopL} {
    .wrapper {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: 350px minmax(0, calc(100% - 350px));
    }

    button[type='submit'] {
      margin: 0 0 0 auto;
    }

    .dropzone {
      width: 350px;
      padding: 20px;
      margin-bottom: 0;

      .icon {
        font-size: ${l.iH[32]};
      }

      .hint {
        display: block;
        margin-top: 20px;
        font-size: ${l.iH[14]};
        opacity: 0.5;
        text-align: center;
      }
    }
  }
`;var p=i(51899),h=i(249),x=i(20760),u=i(75700),g=i(19640),m=i(8281),f=i(15691),v=i(18267),b=i(63245),y=i(80184);const $={"image/jpeg":[],"image/png":[],"image/gif":[],"image/bmp":[],"image/webp":[],"image/svg+xml":[]},j={"application/pdf":[],"application/msword":[],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[],"application/vnd.ms-excel":[],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[]},w=e=>{let{type:t,multiple:i,children:r}=e;const{notify:n}=(0,b.Z)("File has been successfully uploaded.","success"),{getRootProps:o,getInputProps:a,isDragActive:l}=(0,v.uI)({accept:"image"===t?{...$}:{...j},multiple:i,onDrop:()=>n()});return(0,y.jsxs)("div",{...o(),className:l?"dropzone active":"dropzone",children:[(0,y.jsx)("input",{...a()}),r]})};var k=i(21119);const P=n.ZP.div`
  ${l.fU.col};
`,Z=n.ZP.label`
  font-size: ${l.iH[14]};
  width: fit-content;
  margin-bottom: 8px;
`,_=e=>{let{id:t,title:i,type:r="text",placeholder:n,value:o="",customInput:a}=e;return(0,y.jsxs)(P,{children:[(0,y.jsx)(Z,{htmlFor:t,children:i}),a||(0,y.jsx)(f.Z,{type:r,defaultValue:o,id:t,placeholder:n})]})};var S=i(69517);const z=n.ZP.div`
  position: relative;
  cursor: pointer;

  input {
    width: 100%;

    &::placeholder {
      text-transform: uppercase;
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 14px;
    color: ${a()("theme",{light:"#A2C0D4",dark:l.O9.gray})};
    transition: color var(--transition);

    &:hover, &:focus {
      color: ${l.O9.blue};
    }
  }
`;var C=i(69783),R=i(36571),O=i(98727),N=i(72791);const A=e=>{let{id:t}=e;const[i,r]=(0,N.useState)(null),[n,o]=(0,N.useState)(!1),a=new Date,l=(0,N.useRef)(null),s=(0,N.useRef)(null);return(0,y.jsx)(R._,{dateAdapter:C.Z,children:(0,y.jsx)(O.M,{open:n,value:i,maxDate:a,onChange:e=>{r(e)},onClose:()=>o(!1),PopperProps:{anchorEl:l.current},PaperProps:{className:"date-picker"},renderInput:e=>{let{ref:i,inputProps:r,disabled:n,onChange:a,value:d}=e;return(0,y.jsxs)(z,{ref:i,children:[(0,y.jsx)(f.I,{id:t,value:d&&d.toISOString(),onChange:a,disabled:n,ref:l,placeholder:"MM/DD/YYYY",...r,onClick:()=>o(!0)}),(0,y.jsx)("i",{className:"icon icon-calendar",ref:s,onClick:()=>o(!0)})]})}})})};var H=i(30948);const D=e=>{let{id:t,placeholder:i}=e;return(0,y.jsx)(f.Z,{as:H.HH,id:t,placeholder:i,format:"+1 (###) ### ## ##"})};var I=i(44989),U=i.n(I),F=i(53488);const L=e=>{let{type:t}=e;const{notify:i}=(0,b.Z)("Your changes have been successfully saved.","success"),r="Drag image here or click to select file",[n,o]=(0,N.useState)(),[a,l]=(0,N.useState)(),[s,p]=(0,N.useState)([]);return(0,y.jsxs)(c,{action:"#",method:"post",id:`settings_${t}`,onSubmit:e=>e.preventDefault(),children:[(0,y.jsxs)("div",{className:"wrapper",children:[(0,y.jsxs)(w,{multiple:!1,type:"image",children:[(0,y.jsx)("i",{className:"icon icon-image","aria-label":r}),(0,y.jsx)("span",{className:"hint",children:r})]}),(0,y.jsxs)(d,{children:[(0,y.jsx)(_,{id:`${t}ProfileFirstName`,title:"First Name",placeholder:"First Name"}),(0,y.jsx)(_,{id:`${t}ProfileLastName`,title:"Last Name",placeholder:"Last Name"}),(0,y.jsx)(_,{id:`${t}ProfileProfileResidence`,title:"Residence",placeholder:"Residence",customInput:(0,y.jsx)(S.Z,{label:`${t}ProfileProfileResidence`,placeholder:"Residence",options:(()=>{let e=U()().getData();for(let t=0;t<e.length;t++)"RU"===e[t].value&&(e[t].label="Russia [terrorist state]");return e})(),value:n,variant:"basic",changeHandler:e=>(e=>{o(e),l(null);let t=[];F.Z.getCitiesOfCountry(e.value).map((e=>t.push({value:e.name,label:e.name}))),p(t)})(e)})}),(0,y.jsx)(_,{id:`${t}ProfileCity`,title:"City",placeholder:"City",customInput:(0,y.jsx)(S.Z,{label:`${t}ProfileCity`,placeholder:"City",options:s,value:a,variant:"basic",changeHandler:e=>l(e)})}),(0,y.jsx)(_,{id:`${t}ProfileStreet`,title:"Street",placeholder:"Street"}),(0,y.jsx)(_,{id:`${t}ProfileAddress1`,title:"Address Line 1",placeholder:"Address Line 1"}),(0,y.jsx)(_,{id:`${t}ProfileAddress2`,title:"Address Line 2",placeholder:"Address Line 2"}),(0,y.jsx)(_,{id:`${t}ProfileBirthday`,title:"Birthday",placeholder:"Birthday",customInput:(0,y.jsx)(f.I,{as:A,id:`${t}ProfileBirthday`})}),"patient"===t&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(_,{id:"patientProfilePhone",title:"Phone",placeholder:"Phone",customInput:(0,y.jsx)(D,{id:"patientProfilePhone",placeholder:"+1(000)-000-00-00"})}),(0,y.jsx)(_,{id:"patientProfileEmail",title:"Email",placeholder:"example@domain.com"})]})]})]}),(0,y.jsx)(k.Z,{text:"Save",handler:i,type:"submit"})]})},V=()=>(0,y.jsx)(h.Z,{name:"UserSettings",children:(0,y.jsxs)(u.Z.Container,{defaultActiveKey:"patient",transition:!0,children:[(0,y.jsxs)(s,{children:[(0,y.jsxs)("div",{className:"wrapper",children:[(0,y.jsx)("h2",{className:"title",children:"Your account"}),(0,y.jsxs)(g.Z,{children:[(0,y.jsx)(m.Z,{eventKey:"patient",title:"Patient"}),(0,y.jsx)(m.Z,{eventKey:"doctor",title:"Doctor"})]})]}),(0,y.jsx)(p.iz,{})]}),(0,y.jsx)(x.Z,{children:(0,y.jsxs)(u.Z.Content,{children:[(0,y.jsx)(u.Z.Pane,{eventKey:"patient",children:(0,y.jsx)(L,{type:"patient"})}),(0,y.jsx)(u.Z.Pane,{eventKey:"doctor",children:(0,y.jsx)(L,{type:"doctor"})})]})})]})}),B=()=>(0,y.jsx)(r.Z,{title:"Settings",children:(0,y.jsx)(V,{})})},13630:(e,t,i)=>{i.d(t,{Ji:()=>l,So:()=>a,dC:()=>n,sd:()=>o});var r=i(28789);const n=r.F4`
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
`,o=r.F4`
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
`,a=r.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,l=r.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;r.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`}}]);
//# sourceMappingURL=7457.243e4b9f.chunk.js.map