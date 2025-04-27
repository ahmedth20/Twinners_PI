"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[4890],{21119:(e,t,i)=>{i.d(t,{Z:()=>c});var a=i(28789),r=i(14161),n=i(25606),s=i(71856),o=i(34909),l=i(80184);const d=a.ZP.button`
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
    background-color: ${(0,n._j)(.1,r.O9.blue)};
  }

  &.success {
    background-color: ${r.O9.success};

    &:hover, &:focus {
      background-color: ${(0,n._j)(.1,r.O9.success)};
    }
  }

  &.error {
    background-color: ${r.O9.error};

    &:hover, &:focus {
      background-color: ${(0,n._j)(.1,r.O9.error)};
    }
  }

  &.disabled {
    background-color: ${r.O9.gray};
    pointer-events: none;
  }
`,c=e=>{let{text:t,handler:i,type:a="button",isVisible:r=!0,className:n,icon:c}=e;return(0,l.jsx)(s.M,{children:r&&(0,l.jsxs)(d,{as:o.E.button,className:n||"",onClick:i,type:a,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[c&&(0,l.jsx)("i",{className:`icon icon-${c}`})," ",t]})})}},15691:(e,t,i)=>{i.d(t,{I:()=>l,Z:()=>d});var a=i(28789),r=i(14161),n=i(65484),s=i.n(n),o=i(80184);const l=a.ZP.input`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${r.iH[14]};
  ${s()("theme",{light:`\n    background-color: ${r.R2.highlight};\n   `,dark:`\n    background-color: ${r._4.highlight};\n   `})};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${r.O9.error};
  }

  &:hover {
    box-shadow: ${s()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${r.O9.dark}`})};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${r.O9.blue};
  }
`,d=e=>{let{type:t="text",placeholder:i,value:a,handler:r,id:n,className:s}=e;return(0,o.jsx)(l,{type:t,placeholder:i,value:a,onChange:r,id:n,className:s||""})}},87025:(e,t,i)=>{i.d(t,{Z:()=>c});var a=i(28789),r=i(65484),n=i.n(r),s=i(14161),o=i(80184);const l=a.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${n()("theme",{light:s.Sz.dashedLight,dark:s.Sz.dashedDark})};
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
  font-size: ${s.iH[10]};
  font-weight: 500;
  font-family: ${s.Rq.accent};
  background-color: ${n()("theme",{light:s.R2.widgetBg,dark:s._4.widgetBg})};
})
`,c=e=>{let{text:t}=e;return(0,o.jsx)(l,{className:"separator",children:(0,o.jsx)(d,{children:t})})}},19640:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(62014),r=i(69667),n=i(80184);const s=e=>{let{children:t}=e;return(0,n.jsx)(a.W2,{as:r.Z,children:t})}},62014:(e,t,i)=>{i.d(t,{W2:()=>l,ck:()=>c,zx:()=>d});var a=i(28789),r=i(65484),n=i.n(r),s=i(14161);const o=n()("theme",{light:s.R2.bodyBg,dark:s.R2.text}),l=a.ZP.div`
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
  font-size: ${s.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${n()("theme",{light:`\n        color: ${s.O9.blue};\n        background-color: ${s.R2.highlight};\n    `,dark:`\n        color: ${s.O9.secondary};\n        background-color: ${s._4.highlight};\n    `})};
  display: flex;
  ${s.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,c=a.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},30133:(e,t,i)=>{i.d(t,{Z:()=>c});var a=i(28789),r=i(65484),n=i.n(r),s=i(72791);const o=(e,t)=>{const[i,a]=(0,s.useState)(void 0),[r,n]=(0,s.useState)(void 0),o=()=>{const{current:t}=e;0===t.children[0].scrollTop?t.classList.add("is-top"):t.classList.remove("is-top");t.children[0].scrollHeight===Math.ceil(t.children[0].scrollTop)+t.children[0].clientHeight||t.children[0].scrollHeight===Math.floor(t.children[0].scrollTop)+t.children[0].clientHeight?t.classList.add("is-bottom"):t.classList.remove("is-bottom")};return(0,s.useEffect)((()=>{const{current:i}=e,r=()=>{n(i.children[0].scrollHeight);const e=i.children[0].scrollHeight>i.children[0].clientHeight;a(e),null===i||void 0===i||i.classList.toggle("has-overflow",e),i.children[0].addEventListener("scroll",o),t&&t(e)};i&&("ResizeObserver"in window&&new ResizeObserver(r).observe(i),r())}),[e,t,r]),i};var l=i(80184);const d=a.ZP.div`
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
      background: ${n()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,c=e=>{let{children:t,height:i,size:a}=e;const r=(0,s.useRef)(null),n=o(r);return(0,l.jsx)(d,{className:n?"is-top has-overflow":"",height:i,ref:r,size:a,children:t})}},20760:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(51899),r=i(80184);const n=e=>{let{children:t,style:i,sidePadding:n=!1,elRef:s,...o}=e;return(0,r.jsx)(a.uT,{ref:s,sidePadding:n,style:i,...o,children:t})}},66150:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(51899),r=i(80184);const n=e=>{let{title:t,children:i,sidePadding:n=!1,flex:s="row",elRef:o,...l}=e;return(0,r.jsxs)(a.h4,{className:l.className?l.className:"",sidePadding:n,flex:s,ref:o,style:l.style,children:[(0,r.jsx)("h2",{className:"title",children:t}),i]})}},84483:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(72791);const r=(e,t)=>{const[i,r]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(null!==e&&null!==t){const i=e.current?e.current.clientHeight:0,a=t&&t.current?t.current.clientHeight:0;r(i+a)}}),[e,t]),i}},44890:(e,t,i)=>{i.r(t),i.d(t,{default:()=>le});var a=i(39314),r=i(28789),n=i(65484),s=i.n(n),o=i(14161);const l=r.ZP.div`
  margin-bottom: 16px;
  ${o.fU.col}
  gap: 10px;

  .divider {
    height: 1px;
    background-color: ${s()("theme",{light:"#A2C0D4",dark:o.O9.dark})};
  }

   ${o.AV.mobileL} {
    flex-direction: row;
    gap: 20px;

    .divider {
      height: auto;
      width: 1px;
    }
  }
`,d=r.ZP.div`
  ${o.fU.col}
  gap: 6px;

  .label {
    font-size: ${o.iH[12]};
    color: ${o.O9.secondary};
  }

  .label, .h1 {
    line-height: 1;
  }
`,c=r.ZP.span`
  color: ${e=>o.O9[e.color]};
  line-height: 1;
`;var h=i(249),x=i(66150),p=i(20760),m=i(21119),u=i(80184);const g=()=>(0,u.jsxs)(h.Z,{name:"Balance",children:[(0,u.jsx)(x.Z,{title:"Account Balance",style:{paddingBottom:10}}),(0,u.jsxs)(p.Z,{children:[(0,u.jsxs)(l,{children:[(0,u.jsxs)(d,{children:[(0,u.jsx)("span",{className:"label",children:"Active balance"}),(0,u.jsx)(c,{className:"h1",color:"azure",children:"$ 754.40"})]}),(0,u.jsx)("span",{className:"divider"}),(0,u.jsxs)(d,{children:[(0,u.jsx)("span",{className:"label",children:"Bonus balance"}),(0,u.jsx)(c,{className:"h1",color:"orange",children:"B 45.27"})]})]}),(0,u.jsx)(m.Z,{text:"Refill balance"})]})]}),f=r.ZP.div`
  .tabs {
    padding: 24px;
  }
`,b=r.ZP.div`
  height: 100%;
  overflow-y: auto;
  padding-top: 24px;
`,v=r.ZP.div`
  .btn-wrapper {
    padding: 24px;

    .group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }
`;var j=i(51899);const y=r.ZP.div`
  display: flex;
  ${o.fU.between};
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 24px;

  .media {
    display: none;
  }

  ${o.AV.mobileL} {
    .media {
      width: 100px;
      height: 64px;
      padding: 15px 20px;
      border-radius: 4px;
      border: ${s()("theme",{light:`1px solid ${o.O9.light_gray}`,dark:`1px solid ${o.O9.dark}`})};
      ${o.fU.col};
      ${o.fU.center};
    }

    .main {
      flex-grow: 1;
    }
  }
  
  ${o.AV.tablet} {
    .media {
      display: none;
    }
  }
  
  ${o.AV.laptop} {
    .media {
        display: flex;
    }
  }
`,$=r.ZP.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`,k=r.ZP.button`
  font-size: ${o.iH[12]};
  color: ${o.O9.blue};
  transition: opacity var(--transition);

  &:hover {
    opacity: .7;
  }
`,w=s()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg}),Z=r.ZP.div`
  input {
    display: none;

    & + label {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      font-size: 10px;
      cursor: pointer;
      transition: background-color var(--transition);
      ${o.fU.col};
      ${o.fU.center};
      background-color: ${o.O9.light_gray};
      color: ${w};

      &:hover, &:focus {
        background-color: ${o.O9.green};
      }

      .icon {
        margin-top: 2px;
      }
    }

    &:checked + label {
      background-color: ${o.O9.green};
    }
  }
`,N=e=>{let{name:t,id:i,checked:a,onChange:r}=e;return(0,u.jsxs)(Z,{children:[(0,u.jsx)("input",{type:"radio",name:t,id:i,defaultChecked:a,onChange:r}),(0,u.jsx)("label",{htmlFor:i,children:(0,u.jsx)("i",{className:"icon icon-check"})})]})};var z=i(56125),R=i(72791),C=i(59434),O=i(81684);const P=i.p+"static/media/visa.6542cc244d49ffe5bad51654630fac98.svg";const H=i.p+"static/media/mastercard.b535b8dc7381e1e3bbcf29cb922d81e8.svg",D=e=>{let{data:t}=e;const[i,a]=(0,R.useState)(!1),{type:r,title:n,id:s,main:o,archived:l}=t,[d,c]=(0,R.useState)(!1),h=(0,R.useRef)(null),x=(0,C.I0)(),p=()=>{c(!1),h.current.value=n},m=()=>{const e=h.current.value;e.length>0?(c(!1),x((0,O.Td)({id:s,title:e}))):p()},g=()=>{a(!0),setTimeout((()=>x((0,O.AL)({id:s}))),300)};return(0,u.jsx)(z.Z,{in:!i,children:(0,u.jsxs)(y,{children:[(0,u.jsx)("div",{className:"media",children:(0,u.jsx)("img",{src:"visa"===r?P:H,alt:"media"})}),(0,u.jsxs)("div",{className:"main",children:[(0,u.jsx)("input",{className:"h3",type:"text",value:n,readOnly:!d,ref:h,onBlur:m,maxLength:"20"}),(0,u.jsx)($,{children:l?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k,{onClick:g,children:"Restore"}),(0,u.jsx)(k,{onClick:()=>{a(!0),setTimeout((()=>x((0,O.yJ)({id:s}))),300)},children:"Delete"})]}):(0,u.jsxs)(u.Fragment,{children:[d?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(k,{onClick:m,children:"Save"}),(0,u.jsx)(k,{onClick:p,children:"Cancel"})]}):(0,u.jsx)(k,{onClick:()=>{c(!0),h.current.focus()},children:"Edit"}),!o&&(0,u.jsx)(k,{onClick:g,children:"Archive"})]})})]}),!l&&(0,u.jsx)(N,{id:s,name:"main",checked:o,onChange:()=>x((0,O.YS)({id:s}))})]})})};var _=i(19640),F=i(62014);const Y=r.ZP.div`
  margin: 0 2px 24px;
  padding: 24px;
  background-color: ${s()("theme",{light:o.R2.text,dark:o._4.highlight})};
  box-shadow: ${o.Sz.widgetShadow};
  border-radius: 10px;
  will-change: transform;

  ${o.AV.mobileL} {
    margin: 0 24px 24px;
  }

  label {
    font-size: ${o.iH[14]};
    color: #D8D8D8;
  }

  input:not([id="title"]) {
    border-radius: 8px;
    min-height: 40px;
    background-color: ${s()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg})};
    padding: 0 10px;
    text-align: center;
    border: 1px solid transparent;
    color: #fff;
  }

  .header_wrapper {
    display: flex;
    ${o.fU.between};
    margin-bottom: 20px;
    width: 100%;

    &-btns {
      display: flex;
      gap: 24px;
      line-height: 1;
      font-size: ${o.iH[12]};
      font-family: ${o.Rq.accent};

      button {
        text-transform: uppercase;
        font-weight: 500;

        &[type="submit"] {
          color: ${o.O9.green};
        }

        &[type="reset"] {
          color: ${o.O9.error};
        }
      }
    }
  }

  .inputs_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .block {
      display: flex;
      gap: 20px;
      align-items: center;

      &--number {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        input {
          width: 100%;;
        }
      }

      input {
        &#expiration {
          max-width: 90px;
        }

        &#cvv {
          max-width: 58px;
        }
      }
    }
  }
`,A=r.ZP.div`
  color: ${o.R2.widgetBg};
  display: flex;
  align-items: center;
  gap: 10px;
  width: 160px;
  
  input {
    width: 100%;
  }

  .icon {
    font-size: ${o.iH[14]};
    cursor: pointer;
  }
`;var B=i(13208),S=i(30948);const L=e=>{let{isVisible:t,handler:i}=e;const a={title:"Name",number:"",expiration:"",cvv:""},[r,n]=(0,R.useState)(a),s=(0,C.I0)(),o=()=>{n(a),i(!1)};return(0,u.jsx)(z.Z,{in:t,children:(0,u.jsx)(B.Z,{in:t,children:(0,u.jsxs)(Y,{as:"form",onSubmit:e=>{e.preventDefault(),s((0,O.Z0)(r)),o()},onReset:o,children:[(0,u.jsxs)("div",{className:"header_wrapper",children:[(0,u.jsxs)(A,{children:[(0,u.jsx)("label",{htmlFor:"title",children:(0,u.jsx)("i",{className:"icon icon-pen"})}),(0,u.jsx)("input",{className:"h3",type:"text",id:"title",defaultValue:"Name",maxLength:20,onChange:e=>n({...r,title:e.target.value})})]}),(0,u.jsxs)("div",{className:"header_wrapper-btns",children:[(0,u.jsx)("button",{type:"reset",children:(0,u.jsx)("i",{className:"icon icon-ban-regular"})}),(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("i",{className:"icon icon-check"})})]})]}),(0,u.jsxs)("div",{className:"inputs_wrapper",children:[(0,u.jsxs)("div",{className:"block block--number",children:[(0,u.jsx)("label",{htmlFor:"number",children:"Card number"}),(0,u.jsx)(S.HH,{id:"number",placeholder:"0000 0000 0000 0000",format:"#### #### #### ####",value:r.number,onChange:e=>n({...r,number:e.target.value})})]}),(0,u.jsxs)("div",{className:"block",children:[(0,u.jsx)("label",{htmlFor:"expiration",children:"Exp."}),(0,u.jsx)(S.HH,{id:"expiration",placeholder:"MM/YY",format:"##/##",value:r.expiration,onChange:e=>n({...r,expiration:e.target.value})})]}),(0,u.jsxs)("div",{className:"block",children:[(0,u.jsx)("label",{htmlFor:"cvv",children:"CVV:"}),(0,u.jsx)(S.HH,{format:"###",id:"cvv",placeholder:"000",value:r.cvv,onChange:e=>n({...r,cvv:e.target.value})})]})]})]})})})};var U=i(25277),M=i(30133),V=i(84483);const T=()=>{const e=(0,C.v9)((e=>e.cards.cards)),t=e.filter((e=>!1===e.archived)),i=e.filter((e=>!0===e.archived)),[a,r]=(0,R.useState)(!0),[n,s]=(0,R.useState)(!1),o=(0,R.useRef)(null),l=(0,R.useRef)(null),d=(0,R.useRef)(null),c=(0,V.Z)(o,l),x=e=>(0,u.jsx)(D,{data:e},e.id),p=e=>{r(e),s(!1)};return(0,R.useEffect)((()=>{n&&d.current.scrollTo(0,0)}),[n]),(0,u.jsxs)(h.Z,{name:"CreditCards",mobile:500,children:[(0,u.jsxs)(f,{ref:o,children:[(0,u.jsx)("div",{className:"tabs",children:(0,u.jsxs)(_.Z,{children:[(0,u.jsx)(F.ck,{children:(0,u.jsx)(F.zx,{className:a?"active":"",onClick:()=>p(!0),children:"Active"})}),(0,u.jsx)(F.ck,{children:(0,u.jsx)(F.zx,{className:a?"":"active",onClick:()=>p(!1),children:"Archived"})})]})}),(0,u.jsx)(j.iz,{})]}),a?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(M.Z,{height:c,children:(0,u.jsxs)(b,{style:{overflowY:n?"hidden":"auto"},ref:d,children:[(0,u.jsx)(L,{isVisible:n,handler:s}),t.map(x)]})}),(0,u.jsxs)(v,{ref:l,children:[(0,u.jsx)(j.iz,{}),(0,u.jsx)("div",{className:"btn-wrapper",children:(0,u.jsx)(m.Z,{text:"Add new card",handler:()=>{s(!0)},className:n?"disabled":""})})]})]}):(0,u.jsx)(b,{children:0!==i.length?i.map(x):(0,u.jsx)(U.Z,{variant:"cards"})})]})},E=r.ZP.div`
  padding: 24px;

  .search {
    position: relative;

    input {
      padding-right: 36px;
      width: 100%;
    }

    button {
      position: absolute;
      top: 50%;
      right: 16px;
      transform: translateY(-50%);
      line-height: 1;
      font-size: ${o.iH[12]};
      color: ${o.O9.error};
      transition: opacity var(--transition);
      opacity: 0;
      visibility: hidden;

      &:hover, &:focus {
        opacity: .5;
      }

      &.visible {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`,q=r.ZP.div`
  ${o.fU.col};
  padding: 24px;
  gap: 24px;

  h3 {
    font-family: ${o.Rq.body};
  }

  .main {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    .general {
      ${o.fU.col};
      gap: 12px;

      .timestamp {
        font-size: ${o.iH[12]};
        color: ${o.O9.secondary};
        font-family: ${o.Rq.accent};
      }
    }

    .amount {
      font-weight: 700;
      font-size: ${o.iH[14]};

      &--expense {
        color: ${o.O9.red};
      }

      &--income {
        color: ${o.O9.green};
      }
    }
  }
`,I=r.ZP.div`
  display: flex;
  ${o.fU.between};
  padding: 20px;
  border-radius: 8px;
  background-color: ${s()("theme",{light:o.R2.highlight,dark:o._4.highlight})};

  .main {
    gap: 20px;

    &_info {
      ${o.fU.col};
      gap: 4px;
    }
  }
  
  .avatar {
    display: none;
  }

  button {
    background-color: ${s()("theme",{light:o.R2.widgetBg,dark:o._4.widgetBg})};

    &:hover, &:focus {
      background-color: ${o.O9.blue};
    }
  }
  
  ${o.AV.mobileL} {
    .avatar {
        display: block;
    }
  }
`,J=r.ZP.div`
  height: 100%;
  overflow-y: auto;
`;var W=i(87025),G=i(36862),K=i(83687),Q=i(72426),X=i.n(Q),ee=i(25984);const te=e=>{let{arr:t,height:i}=e;const a=[...new Set(t.map((e=>X()(e.date).format("YYYY-MM-DD"))))].sort(((e,t)=>X()(e).isAfter(t)?1:-1)),r=e=>{let{item:t}=e;return(0,u.jsxs)(q,{children:[(0,u.jsxs)("div",{className:"main",children:[(0,u.jsxs)("div",{className:"general",children:[(0,u.jsx)("span",{className:"timestamp",children:X()(t.date).format("hh:mm A")}),(0,u.jsx)("h3",{children:t.name})]}),(0,u.jsxs)("div",{className:`amount amount--${t.type}`,children:["expense"===t.type?"-":"+","$",t.amount.toFixed(2)]})]}),t.additional&&(0,u.jsxs)(I,{children:[(0,u.jsxs)("div",{className:"main",children:[(0,u.jsx)(K.Z,{avatar:t.additional.avatar,alt:t.additional.doctor}),(0,u.jsxs)("div",{className:"main_info",children:[(0,u.jsx)("h3",{children:t.additional.doctor}),(0,u.jsx)("span",{children:t.additional.speciality})]})]}),(0,u.jsx)(G.Z,{shape:"round",icon:"dots",label:"More"})]})]})};return(0,u.jsx)(J,{height:i,children:0!==t.length?(0,u.jsx)(u.Fragment,{children:a.map((e=>{const i=t.sort(((e,t)=>X()(e.date).isAfter(t.date)?1:-1)).filter((t=>X()(t.date).format("YYYY-MM-DD")===e));return(0,u.jsxs)("div",{children:[(0,u.jsx)(W.Z,{text:e===X()().format("YYYY-MM-DD")?"Today":e}),i.map(((e,t)=>(0,u.jsxs)("div",{children:[(0,u.jsx)(r,{item:e}),t!==i.length-1&&(0,u.jsx)(j.iz,{})]},(0,ee.x0)())))]},(0,ee.x0)())}))}):(0,u.jsx)(U.Z,{})})};var ie=i(15691),ae=i(99976),re=i(99555);const ne=X()().month()-1,se=[{id:(0,ee.x0)(5),name:"Buying shoe covers",type:"expense",amount:2.15,date:X()().set({year:2022,month:ne,date:21,hour:14,minute:32,second:0}).toDate()},{id:(0,ee.x0)(5),name:"Cinema tickets",type:"expense",amount:20,date:X()().set({year:2022,month:ne,date:21,hour:18,minute:11,second:0}).toDate()},{id:(0,ee.x0)(5),name:"Salary",type:"income",amount:3481.25,date:X()().set({year:2022,month:ne,date:21,hour:11,minute:43,second:0}).toDate()},{id:(0,ee.x0)(5),name:"Collection of material for analysis",type:"income",amount:10.85,date:X()().set({year:2022,month:ne,date:21,hour:15,minute:40,second:0}).toDate()},{id:(0,ee.x0)(5),name:"Remote consultation of a doctor",type:"expense",amount:12.4,date:X()(),additional:{doctor:"Dr. John Doe",speciality:"Dentist",avatar:{jpg:ae,webp:re}}},{id:(0,ee.x0)(5),name:"Blood donation",type:"income",amount:25,date:X()().subtract(1,"hours").subtract(25,"minutes")},{id:(0,ee.x0)(5),name:"Lorem ipsum dolor sit amet",type:"income",amount:99.15,date:X()().subtract(1,"days")},{id:(0,ee.x0)(5),name:"Morbi leo risus",type:"expense",amount:514.15,date:X()().subtract(1,"days").subtract(2,"hours")}],oe=()=>{const e=(0,R.useRef)(null),t=(0,R.useRef)(null),i=(0,V.Z)(e,t),[a,r]=(0,R.useState)("");let n=se.filter((e=>e.name.includes(a.toLowerCase())));return(0,u.jsxs)(h.Z,{name:"PaymentsFeed",mobile:500,children:[(0,u.jsx)(x.Z,{title:"Payments history",elRef:e}),(0,u.jsx)(M.Z,{height:i,children:(0,u.jsx)(te,{arr:n})}),(0,u.jsxs)("div",{ref:t,children:[(0,u.jsx)(j.iz,{}),(0,u.jsx)(E,{children:(0,u.jsxs)("div",{className:"search",children:[(0,u.jsx)(ie.Z,{type:"search",value:a,placeholder:"Transaction search",handler:e=>r(e.target.value)}),(0,u.jsx)("button",{className:""!==a?"visible":"",onClick:()=>r(""),children:(0,u.jsx)("i",{className:"icon icon-close"})})]})})]})]})},le=()=>(0,u.jsxs)(a.Z,{title:"Finances",children:[(0,u.jsx)("div",{children:(0,u.jsx)(g,{})},"balance"),(0,u.jsx)("div",{children:(0,u.jsx)(oe,{})},"payments-feed"),(0,u.jsx)("div",{children:(0,u.jsx)(T,{})},"credit-cards")]})}}]);
//# sourceMappingURL=4890.9cf4d089.chunk.js.map