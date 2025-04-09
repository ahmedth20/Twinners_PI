"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[6650],{87025:(e,a,t)=>{t.d(a,{Z:()=>d});var l=t(28789),i=t(65484),n=t.n(i),r=t(14161),o=t(80184);const s=l.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${n()("theme",{light:r.Sz.dashedLight,dark:r.Sz.dashedDark})};
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`,c=l.ZP.span`
  text-transform: uppercase;
  padding: 0 6px;
  position: relative;
  z-index: 2;
  margin-left: 17px;
  font-size: ${r.iH[10]};
  font-weight: 500;
  font-family: ${r.Rq.accent};
  background-color: ${n()("theme",{light:r.R2.widgetBg,dark:r._4.widgetBg})};
})
`,d=e=>{let{text:a}=e;return(0,o.jsx)(s,{className:"separator",children:(0,o.jsx)(c,{children:a})})}},31225:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(28789),i=t(14161),n=t(25606),r=t(80184);const o=l.ZP.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: ${i.iH[14]};
  color: ${i.O9.blue};
  line-height: 1;
  transition: color var(--transition);
  width: fit-content;
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover, &:focus {
    color: ${(0,n._j)(.1,i.O9.blue)};
  }

  .icon {
    font-size: ${i.iH[12]};
    color: ${i.O9.gray};
  }
`,s=e=>{let{href:a="#",title:t}=e;return(0,r.jsxs)(o,{href:a,children:[(0,r.jsx)("i",{className:"icon icon-link"}),(0,r.jsx)("span",{children:t})]})}},6438:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(28789),i=t(14161),n=t(80184);const r=l.ZP.button`
  font-size: ${i.iH[16]};
  color: ${i.R2.text};
  transition: color var(--transition);
  line-height: 1;
  
  &:hover, &:focus {
    color: ${i.O9.blue};
  }
`,o=e=>{let{onClick:a,onFocus:t,onBlur:l}=e;return(0,n.jsx)(r,{className:"dots","aria-label":"Open menu",onClick:a,onFocus:t,onBlur:l,children:(0,n.jsx)("i",{className:"icon-dots icon"})})}},2614:(e,a,t)=>{t.d(a,{Z:()=>n});var l=t(13902),i=t(80184);const n=e=>{let{state:a,handler:t,loop:n=!0}=e;return(0,i.jsx)(l.Z,{handler:e=>{const l=e.currentTarget.dataset.direction;let i=a.number;"prev"===l?0!==i?i--:i=11:11!==i?i++:i=0,t((e=>({...e,number:i})));let n=(new Date).getMonth(),r=n-1,o=n+1,s="";const c=new Date(2022,i,1);s=i===n?"This month":i===r?"Previous month":i===o?"Next month":c.toLocaleString("en-US",{month:"long"}),t((e=>({...e,label:s})))},text:a.label,prevDisabled:!n&&0===a.number,nextDisabled:!n&&a.number===(new Date).getMonth()})}},13902:(e,a,t)=>{t.d(a,{Z:()=>n});var l=t(85521),i=t(80184);const n=e=>{let{text:a,handler:t,prevDisabled:n,nextDisabled:r,...o}=e;return(0,i.jsxs)(l.i,{className:"navigator",...o,children:[(0,i.jsx)("button",{className:n?"disabled":"",onClick:t,"data-direction":"prev","aria-label":"Previous",children:(0,i.jsx)("i",{className:"icon icon-chevron-left"})}),(0,i.jsx)("span",{className:"label",children:a}),(0,i.jsx)("button",{className:r?"disabled":"",onClick:t,"data-direction":"next","aria-label":"Next",children:(0,i.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,a,t)=>{t.d(a,{i:()=>o});var l=t(28789),i=t(65484),n=t.n(i),r=t(14161);const o=l.ZP.div`
  display: flex;
  ${r.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${r.iH[14]};
  border-radius: 8px;
  background-color: ${n()("theme",{light:r.R2.bodyBg,dark:r._4.bodyBg})};

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
`},69517:(e,a,t)=>{t.d(a,{Z:()=>f});var l=t(28789),i=t(65484),n=t.n(i),r=t(14161),o=t(13630),s=t(13668);const c=n()("theme",{light:r.R2.highlight,dark:r._4.highlight}),d=n()("theme",{light:r.R2.text,dark:r._4.text}),u=(0,l.ZP)(s.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${c};
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
        color: ${r.O9.blue};
      }
    }

    &__single-value {
      color: ${n()("theme",{light:r.R2.text,dark:r._4.text})};
    }
  }
`,p=(0,l.ZP)(u)`
  .Select {
    &__control {
      font-size: ${r.iH[14]};
    }

    &__input-container {
      color: ${d};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,m=(0,l.ZP)(u)`
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
`,h=(0,l.ZP)(u)`
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
`;var b=t(22723),v=t(72791),g=t(80184);const f=e=>{let{label:a,options:t,variant:l,value:i,changeHandler:n,placeholder:r}=e;(0,v.useEffect)((()=>{r||null!==i||n(t[0])}),[]);const[o]=(0,v.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),s={classNamePrefix:"Select",inputId:a,isSearchable:"user"!==l,options:t,value:i,onChange:n,placeholder:r,openMenuOnFocus:!0,components:{Control:e=>{let{children:a,...t}=e;return(0,g.jsxs)(b.c.Control,{...t,children:[a,(0,g.jsx)("i",{className:`icon icon-${"minimal"===l?"caret":"chevron"}-down`})]})},Menu:e=>(0,g.jsx)(b.c.Menu,{...e,className:"menu",children:e.children})},id:o,blurInputOnSelect:!0,className:`select-${l}`};switch(l){default:case"basic":return(0,g.jsx)(p,{...s});case"minimal":return(0,g.jsx)(m,{...s});case"user":return(0,g.jsx)(h,{...s})}}},64290:(e,a,t)=>{t.d(a,{Z:()=>x});var l=t(28789),i=t(14161),n=t(65484),r=t.n(n);const o=l.ZP.li`
  ${i.fU.col};
  padding: 20px;
  gap: 20px;
  border-radius: 8px;
  background-color: ${r()("theme",{light:i.R2.highlight,dark:i._4.highlight})};
  transform-origin: center center;
  will-change: transform;
`,s=l.ZP.div`
  display: flex;
  ${i.fU.between};
  border-bottom: ${r()("theme",{light:i.Sz.dashedLight,dark:i.Sz.dashedDark})};
  padding-bottom: 20px;
  gap: 20px;
`,c=l.ZP.div`
  ${i.fU.col};
  gap: 20px;

  .info {
    ${i.fU.col};
    gap: 10px;

    .title {
      font-weight: 500;
    }

    .timestamp {
      font-size: ${i.iH[12]};
      font-family: ${i.Rq.accent};
    }
  }
  
  ${i.AV.tablet} {
    flex-direction: row;
    ${i.fU.between};
  }
`,d=l.ZP.button`
  height: 40px;
  border-radius: 20px;
  background-color: ${r()("theme",{light:i.R2.widgetBg,dark:i._4.widgetBg})};
  color: ${r()("theme",{light:i.O9.blue,dark:"#fff"})};
  font-size: ${i.iH[14]};
  font-family: ${i.Rq.accent};
  padding: 0 25px;
  transition: background-color var(--transition), color var(--transition);

  &:hover, &:focus {
    background-color: ${i.O9.blue};
    color: #fff;
  }
`;var u=t(31225),p=t(6438),m=t(71856),h=t(34909),b=t(72426),v=t.n(b),g=t(1705),f=t(80184);const x=e=>{let{data:a}=e;const{doctor:t,title:l,date:i}=a;return(0,f.jsx)(m.M,{children:(0,f.jsxs)(o,{as:h.E.div,...g.f,children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(u.Z,{title:`Dr. ${t}`}),(0,f.jsx)(p.Z,{})]}),(0,f.jsxs)(c,{children:[(0,f.jsxs)("div",{className:"info",children:[(0,f.jsx)("span",{className:"title",children:l}),(0,f.jsx)("span",{className:"timestamp",children:v()(i).format("hh:mm A")})]}),(0,f.jsx)(d,{children:"View result"})]})]})})}},20760:(e,a,t)=>{t.d(a,{Z:()=>n});var l=t(51899),i=t(80184);const n=e=>{let{children:a,style:t,sidePadding:n=!1,elRef:r,...o}=e;return(0,i.jsx)(l.uT,{ref:r,sidePadding:n,style:t,...o,children:a})}},22172:(e,a,t)=>{t.d(a,{b_:()=>r,i7:()=>o,tV:()=>s});var l=t(12298),i=t(83687),n=t(80184);const r=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],s=()=>{let e=[];return l.q.forEach((a=>{e.push({value:a.id,label:(0,n.jsxs)("div",{className:"user-option",children:[(0,n.jsx)(i.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,n.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,t)=>{t.d(a,{q:()=>b});var l=t(65710),i=t(37512),n=t(76155),r=t(62056),o=t(67583),s=t(79168),c=t(29260),d=t(33375);const u=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",p=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var m=t(43928),h=t(4681);const b=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:n,webp:r},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(99976),webp:t(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:u,webp:p},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:l,webp:i},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:c,webp:d},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:m,webp:h},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:s},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},30447:(e,a,t)=>{t.d(a,{A:()=>n});var l=t(72426),i=t.n(l);const n=[{id:"LRmwlkTmRiv",type:"blood",date:i()().subtract(2,"hour"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"EDkfK2u",type:"prenatal",date:i()().subtract(2,"hour"),doctor:"Adam Reynolds",title:"Mammography"},{id:"97SbXo",type:"blood",date:i()().subtract(3,"hour"),doctor:"Jeffery Nichols",title:"Hepatitis B surface antigen"},{id:"RYXnQSf",type:"blood",date:i()(),doctor:"Bella Levine",title:"Allergy testing"},{id:"VeOJuSBvq",type:"blood",date:i()(),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"aN6wcKSaUMgY",type:"mri",date:i()(),doctor:"Jeffery Nichols",title:"MRI"},{id:"ukMuBJSL",type:"prenatal",date:i()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"wMch17",type:"ct",date:i()().subtract(1,"day"),doctor:"Anna Richardson",title:"CT Scan"},{id:"pkMHKe",type:"ultrasound",date:i()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"5EkV9OZ",type:"xray",date:i()().subtract(1,"day"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"vYMB5V564wE",type:"ecg",date:i()().subtract(1,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"WdUbK4OW4Vn",type:"mri",date:i()().subtract(1,"day"),doctor:"Jeffery Nichols",title:"MRI"},{id:"kLYqsk",type:"mri",date:i()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"MRI"},{id:"IftpHTw4p",type:"xray",date:i()().subtract(1,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"oCnZPQKY",type:"ultrasound",date:i()().subtract(1,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"},{id:"Y4RjFwyJn3y",type:"ct",date:i()().subtract(1,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"JojvuH7",type:"prenatal",date:i()().subtract(1,"month").subtract(2,"day"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"Si1B9W",type:"blood",date:i()().subtract(1,"month").subtract(2,"day"),doctor:"Miranda Mccoy",title:"Antibiotic Sensitivity Test"},{id:"6zXfLNFdo",type:"blood",date:i()().subtract(1,"month").subtract(4,"day"),doctor:"Bella Levine",title:"Allergy testing"},{id:"nPE75vNSE1Ya",type:"ecg",date:i()().subtract(1,"month").subtract(4,"day"),doctor:"Heleen Carter",title:"Cardiovascular ECG"},{id:"hEUJrTG",type:"prenatal",date:i()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"DNA Testing"},{id:"WCHC85b2on2",type:"ct",date:i()().subtract(2,"month"),doctor:"Anna Richardson",title:"CT Scan"},{id:"0zVMPZO8s",type:"blood",date:i()().subtract(2,"month").subtract(3,"day"),doctor:"Herman Ryan",title:"Cephalin-cholesterol flocculation"},{id:"g0ral9eA",type:"prenatal",date:i()().subtract(2,"month").subtract(3,"day"),doctor:"Herbert Reynolds",title:"Mammography"},{id:"SyUtrFzCKe",type:"xray",date:i()().subtract(2,"month"),doctor:"Katherine Wilson",title:"Lungs X-Ray"},{id:"NjQR8EIcGBR",type:"ultrasound",date:i()().subtract(2,"month"),doctor:"Jeffery Nichols",title:"Ultrasound diagnostic"}]},5396:(e,a,t)=>{t.r(a),t.d(a,{default:()=>R});var l=t(39314),i=t(28789),n=t(65484),r=t.n(n),o=t(14161);const s=i.ZP.div`
  margin-bottom: 20px;
  ${o.fU.col};
  gap: 20px;
  
  .wrapper {
    padding: 20px 24px 0;
    ${o.fU.col};
    gap: 20px;
    
    .navigator {
      background-color: ${r()("theme",{light:o.R2.highlight,dark:o._4.highlight})};
    }
  }
  
  ${o.AV.tablet} {
    .wrapper {
      flex-direction: row;
        ${o.fU.between};
      
      .navigator {
        width: 250px;
      }
    }
  }
`,c=i.ZP.div`
  padding: 0 24px 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: minmax(0, 1fr);
  
  ${o.AV.laptopL} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;var d=t(249),u=t(20760),p=t(69517),m=t(2614),h=t(94397),b=t(80184);const v=i.ZP.form`
  height: 40px;
  margin: 0 24px;
  border-radius: 8px;
  padding: 0 22px;
  background-color: ${r()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg})};
  display: flex;
  flex-grow: 1;
  align-items: center;
  
  ${o.AV.tablet} {
    height: 60px;
    margin: 0 2px;
  }
  
  label {
    font-size: ${o.iH[12]};
    margin-right: 24px;
    color: ${o.O9.gray};
  }
  
  input {
    width: 100%;
    font-size: ${o.iH[16]};
    font-family: ${o.Rq.accent};
    &::placeholder {
      color: ${o.R2.text};
    }
  }
  
  button[type="reset"] {
    opacity: 0;
    transition: opacity var(--transition);
    
    &.visible {
        opacity: 1;
    }
  }
`,g=e=>{let{placeholder:a,handler:t,value:l}=e;const i=(0,h.Z)().width<767.98;return(0,b.jsxs)(v,{action:"#",method:"get",children:[(0,b.jsx)("label",{className:"search_bar-label",htmlFor:"widgetSearch",children:(0,b.jsx)("i",{className:"icon icon-search"})}),(0,b.jsx)("input",{type:"search",id:"widgetSearch",value:l,placeholder:i?"Search":a,onChange:e=>t(e.target.value)}),(0,b.jsx)("button",{className:""!==l?"visible":"",type:"reset",onClick:()=>t(""),children:(0,b.jsx)("i",{className:"icon icon-close"})})]})};var f=t(64290),x=t(87025),y=t(25277),w=t(22172),j=t(72426),$=t.n(j),k=t(72791),_=t(30447);const N=()=>{const e=(0,k.useRef)(null),a=(new Date).getMonth(),[t,l]=(0,k.useState)(w.i7[0]),[i,n]=(0,k.useState)({label:"This month",number:a}),[r,o]=(0,k.useState)(""),h=[...new Set(_.A.map((e=>$()(e.date).format("DD MMM YYYY"))))],v=_.A.filter((e=>{const a=new Date(e.date).getMonth(),l=e.title.toLowerCase(),n=e.type.toLowerCase(),o=e.doctor.toLowerCase(),s=l.includes(r.toLowerCase())||o.includes(r.toLowerCase()),c="all"===t.value||n===t.value;return a===i.number&&s&&c}));return(0,k.useEffect)((()=>{var a;null===(a=e.current)||void 0===a||a.scrollTo({top:0,behavior:"smooth"})}),[i,r]),(0,b.jsxs)(d.Z,{name:"PatientsTests",children:[(0,b.jsxs)(s,{children:[(0,b.jsxs)("div",{className:"wrapper",children:[(0,b.jsx)(p.Z,{options:w.i7,variant:"minimal",value:t,changeHandler:e=>l(e)}),(0,b.jsx)(m.Z,{state:i,handler:n,loop:!1})]}),(0,b.jsx)(g,{placeholder:"Search a doctor or medical test",handler:o,value:r})]}),(0,b.jsx)(u.Z,{style:{padding:0},elRef:e,children:0!==v.length?h.map((e=>{const a=v.filter((a=>$()(a.date).format("DD MMM YYYY")===e)),l=$()(e).isSame(new Date,"day");return 0!==a.length&&new Date(e).getMonth()===i.number&&(0,b.jsxs)("div",{children:[(0,b.jsx)(x.Z,{text:l?"Today's visit":e}),(0,b.jsx)(c,{children:a.map((e=>(0,b.jsx)(f.Z,{data:e},`${e.id}-${r}-${t.value}`)))})]},e)})):(0,b.jsx)(y.Z,{})})]})},R=()=>(0,b.jsx)(l.Z,{title:"Medical Test Results",children:(0,b.jsx)(N,{})})},13630:(e,a,t)=>{t.d(a,{Ji:()=>o,So:()=>r,dC:()=>i,sd:()=>n});var l=t(28789);const i=l.F4`
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
`,n=l.F4`
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
`,r=l.F4`
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
//# sourceMappingURL=6650.741c8839.chunk.js.map