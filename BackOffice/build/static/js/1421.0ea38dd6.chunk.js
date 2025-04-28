"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[1421],{21119:(e,t,i)=>{i.d(t,{Z:()=>c});var o=i(28789),a=i(14161),r=i(25606),n=i(71856),l=i(34909),d=i(80184);const s=o.ZP.button`
  border-radius: 8px;
  background-color: ${a.O9.blue};
  color: #fff;
  font-size: ${a.iH[14]};
  font-family: ${a.Rq.accent};
  height: 40px;
  width: 100%;
  display: flex;
  ${a.fU.center};
  gap: 8px;
  line-height: 1;
  transition: background-color var(--transition);
  

  &:hover, &:focus {
    background-color: ${(0,r._j)(.1,a.O9.blue)};
  }

  &.success {
    background-color: ${a.O9.success};

    &:hover, &:focus {
      background-color: ${(0,r._j)(.1,a.O9.success)};
    }
  }

  &.error {
    background-color: ${a.O9.error};

    &:hover, &:focus {
      background-color: ${(0,r._j)(.1,a.O9.error)};
    }
  }

  &.disabled {
    background-color: ${a.O9.gray};
    pointer-events: none;
  }
`,c=e=>{let{text:t,handler:i,type:o="button",isVisible:a=!0,className:r,icon:c}=e;return(0,d.jsx)(n.M,{children:a&&(0,d.jsxs)(s,{as:l.E.button,className:r||"",onClick:i,type:o,initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[c&&(0,d.jsx)("i",{className:`icon icon-${c}`})," ",t]})})}},36038:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(31843),a=i(85335),r=i(80184);const n=e=>{let{color:t,legend:i}=e;return(0,r.jsxs)(o.H,{children:[(0,r.jsx)(a.Lm,{color:t})," ",i]})}},47242:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(31843),a=i(80184);const r=e=>{let{children:t,overlay:i}=e;return(0,a.jsx)(o.a,{overlay:i,children:t})}},31843:(e,t,i)=>{i.d(t,{H:()=>n,a:()=>r});var o=i(28789),a=i(14161);const r=o.ZP.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  ${e=>e.overlay&&"\n    position: absolute;\n    bottom: 22px;\n    left: 24px\n  "}
`,n=o.ZP.li`
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-family: ${a.Rq.accent};
  font-size: ${a.iH[10]};
`},13902:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(85521),a=i(80184);const r=e=>{let{text:t,handler:i,prevDisabled:r,nextDisabled:n,...l}=e;return(0,a.jsxs)(o.i,{className:"navigator",...l,children:[(0,a.jsx)("button",{className:r?"disabled":"",onClick:i,"data-direction":"prev","aria-label":"Previous",children:(0,a.jsx)("i",{className:"icon icon-chevron-left"})}),(0,a.jsx)("span",{className:"label",children:t}),(0,a.jsx)("button",{className:n?"disabled":"",onClick:i,"data-direction":"next","aria-label":"Next",children:(0,a.jsx)("i",{className:"icon icon-chevron-right"})})]})}},85521:(e,t,i)=>{i.d(t,{i:()=>l});var o=i(28789),a=i(65484),r=i.n(a),n=i(14161);const l=o.ZP.div`
  display: flex;
  ${n.fU.between};
  height: 40px;
  gap: 20px;
  padding: 0 22px;
  font-size: ${n.iH[14]};
  border-radius: 8px;
  background-color: ${r()("theme",{light:n.R2.bodyBg,dark:n._4.bodyBg})};

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
`},69517:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(28789),a=i(65484),r=i.n(a),n=i(14161),l=i(13630),d=i(13668);const s=r()("theme",{light:n.R2.highlight,dark:n._4.highlight}),c=r()("theme",{light:n.R2.text,dark:n._4.text}),p=(0,o.ZP)(d.ZP)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${s};
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
        box-shadow: ${r()("theme",{light:"0 0 0 2px #A2C0D4",dark:`0 0 0 2px ${n.O9.dark}`})};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${r()("theme",{light:"#A2C0D4",dark:n.O9.gray})};
        font-size: ${n.iH[12]};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${c};
      background-color: ${s};
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
        color: ${n.O9.blue};
      }
    }

    &__single-value {
      color: ${r()("theme",{light:n.R2.text,dark:n._4.text})};
    }
  }
`,h=(0,o.ZP)(p)`
  .Select {
    &__control {
      font-size: ${n.iH[14]};
    }

    &__input-container {
      color: ${c};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`,g=(0,o.ZP)(p)`
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
`,x=(0,o.ZP)(p)`
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
`;var m=i(22723),b=i(72791),f=i(80184);const u=e=>{let{label:t,options:i,variant:o,value:a,changeHandler:r,placeholder:n}=e;(0,b.useEffect)((()=>{n||null!==a||r(i[0])}),[]);const[l]=(0,b.useState)((()=>"select_"+Math.random().toFixed(5).slice(2))),d={classNamePrefix:"Select",inputId:t,isSearchable:"user"!==o,options:i,value:a,onChange:r,placeholder:n,openMenuOnFocus:!0,components:{Control:e=>{let{children:t,...i}=e;return(0,f.jsxs)(m.c.Control,{...i,children:[t,(0,f.jsx)("i",{className:`icon icon-${"minimal"===o?"caret":"chevron"}-down`})]})},Menu:e=>(0,f.jsx)(m.c.Menu,{...e,className:"menu",children:e.children})},id:l,blurInputOnSelect:!0,className:`select-${o}`};switch(o){default:case"basic":return(0,f.jsx)(h,{...d});case"minimal":return(0,f.jsx)(g,{...d});case"user":return(0,f.jsx)(x,{...d})}}},62014:(e,t,i)=>{i.d(t,{W2:()=>d,ck:()=>c,zx:()=>s});var o=i(28789),a=i(65484),r=i.n(a),n=i(14161);const l=r()("theme",{light:n.R2.bodyBg,dark:n.R2.text}),d=o.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,s=o.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${n.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${r()("theme",{light:`\n        color: ${n.O9.blue};\n        background-color: ${n.R2.highlight};\n    `,dark:`\n        color: ${n.O9.secondary};\n        background-color: ${n._4.highlight};\n    `})};
  display: flex;
  ${n.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${l};
  }
`,c=o.ZP.div`
  &.active .nav-link {
    background-color: ${l};
  };
`},57293:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(85521),a=i(72426),r=i.n(a),n=i(80184);const l=e=>{let{onNavigate:t,label:i,date:a}=e;const l=e=>{"prev"===e.currentTarget.dataset.direction?t("PREV",a):t("NEXT",a)},d=r()(a).startOf("year").format("YYYY-MM-DD")===r()(a).format("YYYY-MM-DD"),s=r()(a).endOf("year").format("YYYY-MM-DD")===r()(a).format("YYYY-MM-DD");return(0,n.jsxs)(o.i,{className:"navigator navigator--daily",children:[(0,n.jsxs)("div",{className:"arrows",children:[(0,n.jsx)("button",{onClick:l,"data-direction":"prev",disabled:d,"aria-label":"Previous date",children:(0,n.jsx)("i",{className:"icon icon-chevron-left"})}),(0,n.jsx)("button",{onClick:l,"data-direction":"next",disabled:s,"aria-label":"Next date",children:(0,n.jsx)("i",{className:"icon icon-chevron-right"})})]}),(0,n.jsx)("div",{className:"label",children:i})]})}},59086:(e,t,i)=>{i.d(t,{Z:()=>f});var o=i(14161),a=i(28789),r=i(57770),n=i(65484),l=i.n(n),d=i(35498);const s=e=>"dark"===e?o.R2.text:"#DCE2E8",c=a.ZP.div`
  background-color: ${e=>"disabled"!==e.type&&"available"!==e.type&&o.O9[r.U.find((t=>t.cat===e.type)).color]};
  transition: background-color var(--transition), opacity var(--transition);
  position: relative;

  .cover {
    display: flex;
    ${o.fU.center};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${o.O9.blue};
    color: #fff;
    z-index: 30;
    visibility: hidden;
    opacity: 0;
    transition: opacity var(--transition), visibility var(--transition);
    font-size: ${o.iH[16]};
  }

  ${e=>"disabled"===e.type&&`\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 0 !important;\n    transform: scaleX(-1);\n    background-size: 10px 10px;\n    background-image: repeating-linear-gradient(45deg, ${s(e.mode)} 0,\n     ${s(e.mode)} 1px, transparent 0, transparent 50%);\n     pointer-events: none;\n  `};

  ${e=>{return"available"===e.type&&`\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 0 !important;\n    background-color: ${t=e.mode,"dark"===t?o._4.bodyBg:o.R2.bodyBg};\n    padding: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  `;var t}};
  
  &:after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 1px);
    mix-blend-mode: luminosity;
    background-color: ${l()("theme",{light:o.R2.bodyBg,dark:o._4.bodyBg})};
    opacity: ${l()("theme",{light:1,dark:.8})};
    display: ${e=>"disabled"!==e.type&&"available"!==e.type?"block":"none"};
  }

  &.isEnded {
    background-color: ${e=>"disabled"!==e.type&&"available"!==e.type&&o.O9.gray};
    opacity: ${e=>"disabled"!==e.type&&"available"!==e.type&&.5};
  }
  
  .icon {
    color: ${o.O9.blue};
  }

  .event-title {
    font-size: ${o.iH[14]};
    position: relative;
    z-index: 2;
    color: ${l()("theme",{light:o.R2.text,dark:"#fff"})};
    line-height: 20px;
  }

  &.event-day {
    padding: 8px 20px;
    font-size: ${o.iH[14]};
    min-height: 40px;
    height: 100%;
    ${o.fU.col};
    ${o.fU.center};
    text-align: center;
  }

  &.event-week, &.event-month {
    width: 8px;
    height: ${e=>8*e.slots}px;
    border-radius: 4px;

    &:after {
      display: none;
    }
    
    .event-title {
      display: none;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  ${o.AV.laptopL} {
    &.event-week, &.event-month {
      width: 100%;
      height: 100%;
      border-radius: unset;
      ${o.fU.col};
      ${o.fU.center};

      &:after {
        display: ${e=>"disabled"!==e.type&&"available"!==e.type?"block":"none"};
      }

      .event-title {
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        max-width: calc(100% - 20px);
      }
    }
    
    &.event-month {
      ${e=>"available"===e.type&&"\n        padding: 8px 20px;\n      "};
    }
  }
`,p=(0,a.ZP)(d.h)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px 30px;
  position: relative;

  .block {
    &:first-of-type {
      width: 100%;
    }

    ${o.fU.col};
    gap: 8px;

    .label {
      font-size: ${o.iH[12]};
      color: ${o.O9.gray};
      font-family: ${o.Rq.accent};
    }

    .value {
      display: inline-flex;
      gap: 4px;
      font-size: ${o.iH[14]};
    }
  }

  ${o.AV.tablet} {
    max-width: 350px;
    margin: 0 auto;
  }
`;var h=i(72426),g=i.n(h),x=i(72791),m=i(94397),b=i(80184);const f=e=>{let{event:t,variant:i}=e;const[o,r]=(0,x.useState)(!1),{theme:n}=(0,a.Fg)();let l=g()(t.end).isBefore(g()());const s=(0,m.Z)().width>=1280,h=()=>(0,b.jsx)("span",{className:"event-title",children:t.name});return(0,b.jsxs)(c,{className:`event event-${i} ${l?"isEnded":""}`,type:t.type,mode:n,slots:(()=>{const e=g().duration(g()(t.end).diff(g()(t.start)));return Math.ceil(e.asMinutes()/30)})(),children:["available"!==t.type?(0,b.jsx)(h,{}):(0,b.jsx)("i",{className:"icon icon-plus-circle"}),(0,b.jsx)("span",{className:"overlay",onClick:()=>r(!0)}),!s&&"disabled"!==t.type&&(0,b.jsx)(d.Z,{visibilityHandler:r,isVisible:o,children:(0,b.jsxs)(p,{children:[(0,b.jsxs)("div",{className:"block",children:[(0,b.jsx)("span",{className:"label",children:"Event:"}),(0,b.jsx)("span",{className:"value",children:t.name})]}),(0,b.jsxs)("div",{className:"block",children:[(0,b.jsx)("span",{className:"label",children:"Start:"}),(0,b.jsxs)("span",{className:"value",children:[(0,b.jsx)("span",{children:g()(t.start).format("MMM, D")}),"at",(0,b.jsx)("span",{children:g()(t.start).format("HH:mm A")})]})]}),(0,b.jsxs)("div",{className:"block",children:[(0,b.jsx)("span",{className:"label",children:"End:"}),(0,b.jsxs)("span",{className:"value",children:[(0,b.jsx)("span",{children:g()(t.end).format("MMM, D")}),"at",(0,b.jsx)("span",{children:g()(t.end).format("HH:mm A")})]})]})]})}),(0,b.jsx)("div",{className:"cover",children:(0,b.jsx)("i",{className:"icon icon-circle-minus-regular"})})]})}},89302:(e,t,i)=>{i.d(t,{W2:()=>p,$_:()=>g,h4:()=>h,SS:()=>m});var o=i(28789),a=i(14161),r=i(65484),n=i.n(r);i(72791);const l=i.p+"static/media/add.ab71eb3252fa991435f742f845632a1e.svg",d=n()("theme",{light:"#DCE2E8",dark:"#25292D"}),s=n()("theme",{light:a.R2.highlight,dark:a._4.highlight}),c=n()("theme",{light:a.R2.widgetBg,dark:a._4.widgetBg}),p=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  position: relative;
`,h=o.ZP.div`
  padding: 20px 24px 0;
  ${a.fU.col};
  gap: 20px;

  .navigator {
    margin: 0 0 20px;
    background-color: ${s};

    .label {
      font-size: ${a.iH[12]};
    }

    &--daily {
      margin: 0 -22px;
      display: flex;
      align-items: center;
      gap: 0;
      padding: 0;
      background-color: ${n()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg})};

      .arrows {
        width: 63px;
        gap: 8px;
      }

      .label {
        flex-grow: 1;
        border-left: 1px solid ${d};
        height: 100%;
      }

      .arrows, .label {
        display: flex;
        ${a.fU.center};
      }

      ${a.AV.tablet} {
        .arrows {
          width: 83px;
        }
      }
    }
  }

  ${a.AV.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    ${a.fU.between};

    .tabs {
      order: ${e=>"day"!==e.view&&2};
    }

    .select-user,
    .select-basic,
    .tabs {
      width: 300px;
    }

    .navigator {
      flex-grow: 1;
      width: 100%;
      order: ${e=>"day"!==e.view&&3};
      height: ${e=>"day"===e.view&&60}px;

      ${a.AV.tablet} {
        .label {
          font-size: ${a.iH[14]};
        }
      }
    }
  };

  ${a.AV.laptop} {
    margin-bottom: ${e=>"day"!==e.view&&20}px;

    .navigator {
      width: ${e=>"day"!==e.view&&"200px"};
      flex-grow: ${e=>"day"!==e.view&&"unset"};
      margin-bottom: 0;
    }

    .tabs {
      margin-left: auto;
    }
  }

`,g=o.ZP.div`
  padding: 20px 24px;
`,x=`\n${a.fU.col};\n${a.fU.center};\nfont-size: ${a.iH[10]};\nfont-family: ${a.Rq.accent};\nheight: 20px;\nwidth: 47px;\nmargin: 0 auto;\nborder-radius: 8px;\n`,m=o.ZP.div`
  flex-grow: 1;

  ${e=>"day"===e.view&&`\n    .rbc-time-header {\n        display: none;\n    }\n    .rbc-day-slot .rbc-timeslot-group .current-time .time-indicator {\n        left: -64px !important;\n        width: calc(100% + 64px) !important;\n    }\n    \n    ${a.AV.tablet} {\n         .rbc-day-slot .rbc-timeslot-group .current-time .time-indicator {\n        left: -84px !important;\n        width: calc(100% + 84px) !important;\n    }\n    }\n  `}
    // hide the time indicator for the week/month view
  &.calendar-week,
  &.calendar-month {
    .current-time {
      display: none !important;
    }
  }

  // week view

  &.calendar-week {
    &.calendar-patient .rbc-time-column {
      cursor: pointer;
    }

    .rbc {
      &-event-content {
        ${a.fU.col};
        ${a.fU.center};
      }

      &-time-header-gutter {
        width: 65px !important;
        max-width: 65px !important;
        min-width: 65px !important;
      }

      &-time-content {
        border-top: 1px dashed ${d};
        padding-top: 0;
        margin-top: 20px;
      }

      &-header {
        font-size: ${a.iH[12]};
      }

      ${a.AV.tablet} {
        &-header {
          font-size: ${a.iH[14]};
        }

        &-time-header-gutter {
          width: 85px !important;
          max-width: 85px !important;
          min-width: 85px !important;
        }
      }
    }
  }

  // month view

  &.calendar-month {
    &.calendar-patient {
      .rbc-day-bg {
        background: url(${l}) no-repeat center center / 16px 16px;
      }

      .rbc-month-row {
        cursor: pointer;
      }
    }

    .rbc {
      &-month-header {
        margin: 0 2px;
        height: 40px;
        border-radius: 8px;
        overflow: hidden;
        background-color: ${n()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg})};

        .rbc-header {
          ${a.fU.col};
          ${a.fU.center};
          line-height: 1;
          font-weight: 400;
          font-size: ${a.iH[12]};
          border-bottom: none;

          & + .rbc-header {
            border-color: ${d};
          }
        }

        ${a.AV.tablet} {
          .rbc-header {
            font-size: ${a.iH[14]};
          }

          height: 60px;
        }
      }

      &-month-row {
        margin: 0 2px;

        + .rbc-month-row,
        .rbc-day-bg + .rbc-day-bg {
          border-color: ${d};
        }

        .rbc {
          &-row-content {
            flex-grow: 1;
          }

          &-date-cell {
            font-family: ${a.Rq.accent};
            font-size: ${a.iH[10]};
            padding: 5px;
            text-align: center;

            &.rbc-now {
              color: ${n()("theme",{light:a.O9.blue,dark:"#fff"})};
            }
          }

          &-row .event {
            margin: 0 auto;
          }

          &-off-range-bg {
            background-color: ${n()("theme",{light:a.R2.highlight,dark:a._4.highlight})};
            background-image: none;
          }
        }
      }

      &-show-more {
        background-color: ${a.O9.blue};
        font-size: ${a.iH[10]};
        color: #fff;
        font-family: ${a.Rq.accent};
        font-weight: 400;
        padding: 6px;
        border-radius: 50%;
        margin: 4px auto 0;
      }
    }

    ${a.AV.tablet} {
      .rbc {
        &-month-row .rbc-date-cell {
          padding: 10px;
          text-align: right;
          font-size: ${a.iH[12]};
        }
      }
    }

    ${a.AV.laptopL} {
      .rbc {
        &-show-more {
          width: 100%;
          border-radius: 4px;
          margin: 2px 0 0;
        }
      }
    }
  }

  .rbc {
    &-time-view,
    &-month-view {
      padding-bottom: 11px;
      border: none;
    }

    &-time-view {
      margin: 0 2px;
      width: auto;
    }

    &-month-view {
      flex: 1;
      min-height: 670px;
    }

    &-time-content {
      border: none;
      width: unset;
      padding-top: 20px;
      overflow: visible;
      height: 100%;
      align-items: stretch;

      .rbc-time-gutter:first-of-type {
        border-top: 1px ${d} dashed;
      }

      & > * + * > * {
        border-left: 1px ${d} solid !important;
        border-right: none !important;
      }
    }

    &-time-gutter {
      width: 63px;
      position: relative;

      &:before {
        ${x};
        content: '16:30';
        position: absolute;
        bottom: -10px;
        left: 8px;
        background-color: ${c};
      }

      .time-indicator {
        display: none;
      }

      ${a.AV.tablet} {
        width: 83px !important;
        &:before {
          left: 18px;
        }
      }
    }

    &-event-content {
      backface-visibility: visible;
    }

    &-time-header {
      border-radius: 8px;
      overflow: hidden;
      height: 40px;
      background-color: ${n()("theme",{light:a.R2.bodyBg,dark:a._4.bodyBg})};

      &.rbc-overflowing {
        border: none;
      }

      &-cell {
        height: 100%;
      }

      &-content {
        border-color: ${d};
        margin-left: -2px;
      }

      .rbc-allday-cell {
        display: none;
      }

      .rbc-header {
        ${a.fU.col};
        justify-content: center;
        border-bottom: none;

        & + .rbc-header {
          border-color: ${d};
        }

        &.rbc-today {
          background-color: ${a.R2.text};
          color: #fff;
        }
      }

      ${a.AV.tablet} {
        height: 60px;
      }
    }

    &-today,
    &-off-range-bg {
      background-color: transparent;
    }

    &-events-container {
      margin: 0;
    }

    &-time-slot {
      min-height: 40px;

      .rbc-label {
        ${x};
        position: relative;
        top: -10px;
        background-color: ${c};
      }
    }

    &-timeslot-group {
      position: relative;

      .current-time {
        &:before {
          content: attr(data-time);
          ${x};
          position: relative;
          top: -10px;
        }

        .time-indicator {
          .label {
            ${x};
            color: #fff;
            box-shadow: 0 1px 8px rgba(38, 98, 240, 0.4);
          }
        }
      }

      &:last-of-type {
        border: none;

        .rbc-time-slot {
          border: none;
        }
      }
    }

    &-day-slot {
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        height: 20px;
        top: -20px;
        border-left: 1px solid ${d};
      }

      .rbc-time-slot {
        border: none;
      }

      .rbc-timeslot-group {
        .current-time {
          position: relative;
          height: 40px;

          &:before {
            display: none;
          }

          .time-indicator {
            top: 14%;
            display: block;
            height: 1px;
            background-color: ${a.O9.blue};
            position: absolute;
            z-index: 10;
            left: 0;
            width: 100%;
            transition: top 0.3s ease;

            .label {
              position: absolute;
              left: 8px;
            }

            ${a.AV.tablet} {
              .label {
                left: 18px;
              }
            }
          }
        }
      }
    }

    &-event {
      border: none;
      border-radius: 0;
      padding: 0;
      background: transparent;
      outline: none;

      &-label {
        display: none !important;
      }
    }

    &-background-event {
      padding: 0;
      pointer-events: none;
      background-color: transparent;
      border: none;
    }

    &-current-time-indicator {
      display: none;
    }
  }


  .rbc-timeslot-group {


    .current-time {


      .time-indicator, .time-indicator .label {
        position: absolute;
      }

      .time-indicator .label {
        background-color: ${a.O9.blue};
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
      }
    }
  }


  .rbc-timeslot-group {
    border-bottom: 1px dashed ${n()("theme",{light:"#DCE2E8",dark:"#25292D"})};
  }

`},249:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(51899),a=i(34909),r=i(79591),n=i(80184);const l=e=>{let{name:t,children:i,style:l,shadow:d=!1,...s}=e;const{direction:c}=(0,r.jt)();return(0,n.jsx)(o.W2,{as:a.E.div,"data-widget":t,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},style:l,className:d?"shadow":"",dir:c,mobile:s.mobile,children:i})}},51899:(e,t,i)=>{i.d(t,{JL:()=>m,Pz:()=>g,W2:()=>p,h4:()=>h,iz:()=>f,uT:()=>x,wp:()=>b});var o=i(28789),a=i(65484),r=i.n(a),n=i(14161);const l=r()("theme",{light:n.R2.widgetBg,dark:n._4.widgetBg}),d=r()("theme",{light:n.R2.bodyBg,dark:n._4.bodyBg}),s=r()("theme",{light:n.R2.shadow,dark:n._4.shadow}),c=r()("theme",{light:n.R2.highlight,dark:n._4.highlight}),p=o.ZP.div`
  box-shadow: ${n.Sz.widgetShadow};
  border-radius: 10px;
  position: relative;
  background-color: ${l};
  overflow: hidden;
  ${n.fU.col};
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
    background: ${s};
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
  
  ${n.AV.tablet} {
    height: 100%;
  }
`,h=o.ZP.div`
  display: flex;
  ${e=>"column"===e.flex?"flex-direction: column;":n.fU.between};
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
`,g=o.ZP.div`
  ${n.fU.col};
  width: 100%;
  margin: 0 20px;
  gap: 20px;

  .navigator {
    background-color: ${c};
  }
`,x=o.ZP.div`
  padding: ${e=>e.sidePadding?"0 0 24px":"0 24px 24px"};
  height: ${e=>e.height?`calc(100% - ${e.height}px)`:"100%"};
  overflow-y: auto;
  overflow-x: hidden;
  ${n.fU.col};
  flex-grow: 1;
`,m=o.ZP.div`
  font-size: ${n.iH[14]};
  display: flex;
  align-items: center;
  color: ${n.O9.gray};
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
`,b=o.ZP.ul`
  margin: 0 2px;
  border-radius: 8px;
  height: 40px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  background-color: ${d};
  flex-grow: 1;
`,f=o.ZP.div`
  height: 2px;
  background-color: ${d};
  width: 100%;
`},57770:(e,t,i)=>{i.d(t,{U:()=>o,z:()=>a});const o=[{cat:"emergency",label:"Emergency",color:"red"},{cat:"consultation",label:"Consultation",color:"azure"},{cat:"test",label:"Examination",color:"teal"},{cat:"checkup",label:"Routine checkup",color:"purple"},{cat:"sick",label:"Sick visit",color:"orange"}],a=[{cat:"work",color:"teal"},{cat:"travel",color:"orange"},{cat:"family",color:"azure"},{cat:"other",color:"purple"}]},39314:(e,t,i)=>{i.d(t,{Z:()=>P});var o=i(28789),a=i(14161);const r=o.ZP.div`
  padding: 20px 20px 84px;
  flex-grow: 1;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: var(--header-height);

  ${a.AV.tablet} {
    padding: 20px 30px 30px;
    ${a.fU.col};
  }

  ${a.AV.laptopL} {
    padding: 0;
    margin-top: 0;
  }

  @media screen and (min-width: 1280px) and (min-height: 800px) {
    overflow: hidden;
  }
`,n=o.ZP.h1`
  display: flex;
  align-items: center;
  gap: 18px;
`,l=o.ZP.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  margin-bottom: 20px;

  ${a.AV.laptopL} {
    margin-top: 40px;
  }

  ${a.AV.desktop} {
    flex-direction: row;
    ${a.fU.between};
  }
`,d=o.ZP.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 16px;
`,s=o.ZP.div`
  ${a.fU.col};
  width: 100%;
  flex-grow: 1;
`;var c=i(85335),p=i(59242),h=i(54270),g=i(44165),x=i(73457),m=i(10586),b=i(79591),f=i(59434),u=i(74037),v=i(94397),y=i(80184);const $=(0,m.withSize)()((0,x.WidthProvider)(x.Responsive)),w=o.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,k=e=>{let{layouts:t,children:i,id:o,desktop:a}=e;const{isLayoutEditable:r,fontScale:n}=(0,b.jt)(),l=(0,f.I0)(),d=(0,v.Z)().width<768;return(0,y.jsx)(y.Fragment,{children:d?(0,y.jsx)(w,{children:i}):(0,y.jsx)($,{className:"content_layout",layouts:t,breakpoints:{xl:1026,lg:1039,md:708,sm:0},cols:{xl:3,lg:3,md:2,sm:1},margin:[24,24],isResizable:!1,rowHeight:1===n?182:182+11*n,isDraggable:r,isBounded:!0,compactType:"vertical",useCSSTransforms:!1,autoSize:!0,onLayoutChange:a?e=>{r&&(l((0,u.fc)({id:o,layouts:e})),l((0,u.m8)()))}:void 0,children:i})})};var j=i(34909),_=i(62773),z=i.n(_),M=i(57689),Z=i(72791);const P=e=>{let{title:t,children:i,hasBadge:o,hasTitle:a=!0,qty:x}=e;const m=(0,Z.useRef)(null),b=z()(),{width:u}=(0,v.Z)(),$=u>767.98,{pathname:w}=(0,M.TH)(),_=w.includes("dashboard"),P=w.replace("/",""),N=(0,f.v9)((e=>e.layout.layout))[P];return(0,Z.useEffect)((()=>{m.current&&(m.current.scrollTop=0)}),[w]),(0,y.jsxs)(r,{ref:m,children:[(0,y.jsx)(h.q,{children:(0,y.jsx)("title",{children:`Smart190 | ${t}`})}),(0,y.jsxs)(s,{children:[(0,y.jsxs)(l,{as:j.E.div,initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.4},viewport:{once:!0},children:[a&&(0,y.jsxs)(n,{children:[t," ",o&&x&&x>0&&(0,y.jsxs)(c.GS,{children:["+",x]})]}),$&&(0,y.jsxs)(d,{children:[b.isDesktop()&&(0,y.jsxs)(y.Fragment,{children:[_&&(0,y.jsx)(p.t,{children:(0,y.jsx)(g.XO,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(g.ot,{})})]}),(0,y.jsx)(p.t,{children:(0,y.jsx)(g.t7,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(g.zj,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(g.vm,{})}),(0,y.jsx)(p.t,{children:(0,y.jsx)(g.jf,{})})]})]}),N?(0,y.jsx)(k,{id:P,layouts:N,desktop:b.isDesktop(),children:i}):i]})]})}},13630:(e,t,i)=>{i.d(t,{Ji:()=>l,So:()=>n,dC:()=>a,sd:()=>r});var o=i(28789);const a=o.F4`
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
`,r=o.F4`
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
`,n=o.F4`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
`,l=o.F4`
  0% {
    opacity: 0;
    transform: translateY(2px);
  }
    100% {
    opacity: 1;
    transform: translateY(0);
    }
`;o.F4`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
    100% {
    opacity: 0;
    transform: translateY(2rem);
    }
`},17711:(e,t,i)=>{i.d(t,{Gn:()=>n,T2:()=>r,Uo:()=>l});var o=i(72426),a=i.n(o);const r=()=>{const e=a()().year(),t=[],i=a()().year(a()().year()).endOf("year").diff(a()().year(a()().year()).startOf("year"),"days")+1;for(let o=1;o<=i;o++){let i=a()().year(e).dayOfYear(o);t.push({date:i,long:i.format("dddd, MMMM DD"),short:i.format("DD/MM/YYYY")})}return t},n=()=>{const e=a()().year(),t=[];for(let i=1;i<=12;i++){let o=a()().year(e).month(i-1);t.push({month:o,formatted:o.format("MMMM, YYYY")})}return t},l=()=>{const e=a()().year(),t=[],i=a()().year(a()().year()).endOf("year").diff(a()().year(a()().year()).startOf("year"),"weeks")+1;for(let o=1;o<=i;o++){let i=a()().year(e).week(o);t.push({week:o,startShort:i.startOf("week").format("MMM, DD"),endShort:i.endOf("week").format("MMM, DD"),startLong:i.startOf("week").format("MMMM, DD"),endLong:i.endOf("week").format("MMMM, DD")})}return t}}}]);
//# sourceMappingURL=1421.0ea38dd6.chunk.js.map