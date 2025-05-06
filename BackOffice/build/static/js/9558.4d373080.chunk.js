"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9558],{9111:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(28789),r=i(14161),a=i(72426),c=i.n(a),n=i(80184);const d=s.ZP.span`
  display: flex;
  gap: 8px;
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
  text-transform: uppercase;
`,o=e=>{let{date:t,text:i,time:s=!1}=e;return(0,n.jsxs)(d,{children:[i&&(0,n.jsx)("span",{children:i}),(0,n.jsx)("span",{children:c()(t).format("DD MMM YYYY")}),s&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"/"}),(0,n.jsx)("span",{children:c()(t).format("hh:mm A")})]})]})}},36163:(e,t,i)=>{i.d(t,{Z:()=>m});var s=i(14161),r=i(22426),a=i(19913),c=i(82165),n=i(82839),d=i(62066),o=i(71827),l=i(28265),p=i(18602),h=i(28789),u=i(72791),x=i(94397);var k=i(80184);const m=e=>{let{variant:t,id:i,data:m,elems:g,...f}=e;const{width:j}=(0,x.Z)(),{theme:y}=(0,h.Fg)(),[v,b]=(0,u.useState)([]),w=j>=768;(0,u.useLayoutEffect)((()=>{b(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const i=document.getElementById(e).offsetWidth;let s=[];for(let r=0;r<i;r+=t)s.push(r);return s}(i))}),[j]);const _=e=>{const{active:t,payload:i}=e;return t&&i&&i.length?(0,k.jsx)(r.m,{className:"multiple",children:i.map(((e,t)=>(0,k.jsxs)("div",{className:"item",children:[(0,k.jsx)("div",{className:"color",style:{background:e.stroke}}),(0,k.jsx)("div",{className:"value",children:e.value})]},t)))}):null};return(0,k.jsx)(a.h,{height:w?"100%":f.height,width:"100%",id:i,children:"line"===t?(0,k.jsxs)(c.w,{margin:!1,data:m,...f,children:[(0,k.jsxs)("defs",{children:[(0,k.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,k.jsx)("stop",{stopColor:s.O9.dark,stopOpacity:"0.2"}),(0,k.jsx)("stop",{offset:"0.512299",stopColor:s.O9.dark}),(0,k.jsx)("stop",{offset:"0.99905",stopColor:s.O9.dark,stopOpacity:"0.2"})]}),(0,k.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,k.jsx)("stop",{stopColor:s.O9.light_gray,stopOpacity:"0.2"}),(0,k.jsx)("stop",{offset:"0.504355",stopColor:s.O9.light_gray}),(0,k.jsx)("stop",{offset:"0.99905",stopColor:s.O9.light_gray,stopOpacity:"0.2"})]})]}),(0,k.jsx)(n.q,{stroke:`url(#${"dark"===y?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:v,width:"100%",height:"100%"}),g.map((e=>(0,k.jsx)(d.x,{...e},e.dataKey))),(0,k.jsx)(o.u,{cursor:!1,content:_})]}):(0,k.jsxs)(l.T,{margin:{top:5},data:m,...f,children:[(0,k.jsxs)("defs",{children:[(0,k.jsxs)("linearGradient",{id:"dark",x1:"0.00669497",y1:"1",x2:"0.00669497",y2:"327.445",gradientUnits:"userSpaceOnUse",children:[(0,k.jsx)("stop",{stopColor:s.O9.dark,stopOpacity:"0.2"}),(0,k.jsx)("stop",{offset:"0.512299",stopColor:s.O9.dark}),(0,k.jsx)("stop",{offset:"0.99905",stopColor:s.O9.dark,stopOpacity:"0.2"})]}),(0,k.jsxs)("linearGradient",{id:"light",x1:"0.00385257",y1:"1",x2:"0.00385257",y2:"328.377",gradientUnits:"userSpaceOnUse",children:[(0,k.jsx)("stop",{stopColor:s.O9.light_gray,stopOpacity:"0.2"}),(0,k.jsx)("stop",{offset:"0.504355",stopColor:s.O9.light_gray}),(0,k.jsx)("stop",{offset:"0.99905",stopColor:s.O9.light_gray,stopOpacity:"0.2"})]}),f.children]}),(0,k.jsx)(n.q,{stroke:`url(#${"dark"===y?"dark":"light"})`,strokeDasharray:"6",strokeLinecap:"square",horizontal:!1,verticalPoints:v,width:"100%",height:"100%"}),g.map((e=>(0,k.jsx)(p.u,{...e},e.dataKey))),(0,k.jsx)(o.u,{cursor:!1,content:_})]})})}},22226:(e,t,i)=>{i.d(t,{Z:()=>a});var s=i(28789),r=i(14161);const a=s.ZP.div`
  text-transform: uppercase;
  margin: 0 24px;
  display: flex;
  ${r.fU.between}
  font-family: ${r.Rq.accent};
  font-size: ${r.iH[10]};
`},54664:(e,t,i)=>{i.d(t,{g0:()=>a,iL:()=>r,ty:()=>s});const s=[{name:"January",cured:100,sick:80},{name:"February",cured:120,sick:100},{name:"March",cured:140,sick:120},{name:"April",cured:190,sick:170},{name:"May",cured:280,sick:260},{name:"June",cured:200,sick:180},{name:"July",cured:180,sick:160},{name:"August",cured:160,sick:120},{name:"September",cured:140,sick:80},{name:"October",cured:90,sick:150},{name:"November",cured:120,sick:90},{name:"December",cured:300,sick:164}],r=[{name:"1",cured:90,sick:135},{name:"2",cured:150,sick:120},{name:"3",cured:180,sick:90},{name:"4",cured:190,sick:170},{name:"5",cured:280,sick:260},{name:"6",cured:200,sick:150},{name:"7",cured:180,sick:160},{name:"8",cured:160,sick:120},{name:"9",cured:219,sick:80},{name:"10",cured:90,sick:150},{name:"11",cured:315,sick:300},{name:"12",cured:250,sick:164},{name:"13",cured:210,sick:75},{name:"14",cured:350,sick:300},{name:"15",cured:450,sick:400}],a=[{name:"sun",cured:450,sick:350},{name:"mon",cured:300,sick:250},{name:"tue",cured:200,sick:150},{name:"wed",cured:278,sick:198},{name:"thu",cured:189,sick:99},{name:"fri",cured:239,sick:139},{name:"sat",cured:349,sick:249}]},59558:(e,t,i)=>{i.r(t),i.d(t,{default:()=>z});var s=i(39314),r=i(40309),a=i(249),c=i(46866),n=i(9111),d=i(13208),o=i(14161),l=i(28789),p=i(25606),h=i(80184);const u=l.ZP.button`
  min-width: 20px;
  min-height: 20px;
  padding: 2px;
  border-radius: 50%;
  background-color: ${o.O9.error};
  color: #fff;
  display: flex;
  ${o.fU.center};
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: ${o.iH[12]};
  line-height: 1;
  will-change: transform;
  z-index: 10;
  transition: background-color var(--transition), transform var(--transition);

  &:hover {
    background-color: ${(0,p._j)(.1,o.O9.error)};
    transform: scale(1.1);
  }
  
  .icon {
    margin-top: -1px;
  }
`,x=e=>{let{handler:t}=e;return(0,h.jsx)(u,{onClick:t,children:(0,h.jsx)("i",{className:"icon icon-close"})})};var k=i(72791),m=i(25984),g=i(72426),f=i.n(g);const j=()=>{const[e,t]=(0,k.useState)(null),[i,s]=(0,k.useState)(!1),o=(0,k.useRef)(null),l=[{date:f()(),title:"Medical conference"},{date:f()(),title:"Enterprise meeting"},{date:f()().add(3,"hours"),title:"Meeting with Anna Smith"},{date:f()().add(2,"days").add(1,"hours"),title:"Visit gym"},{date:f()().add(2,"days").add(2,"hours"),title:"Prepare for presentation"}],p=e=>l.filter((t=>f()(t.date).isSame(e,"day"))).length>0,u={as:c.ZP,locale:"en-US",navigationLabel:e=>{let{date:t}=e;return`${f()(t).format("MMMM, YYYY")}`},navigationAriaLabel:"Current month",prevLabel:(0,h.jsx)("i",{className:"icon icon-chevron-left"}),nextLabel:(0,h.jsx)("i",{className:"icon icon-chevron-right"}),prev2Label:null,next2Label:null,nextAriaLabel:"Next month",prevAriaLabel:"Previous month",tileContent:e=>{let{date:t}=e;return p(t)?(0,h.jsx)("span",{className:"bar"}):null},tileClassName:e=>{let{date:t}=e;return p(t)?"active":null},onClickDay:e=>{t(e),s(!0)}};return(0,h.jsx)(a.Z,{name:"EventsCompactCalendar",children:(0,h.jsxs)(r.W2,{children:[(0,h.jsx)(r.D8,{...u}),(0,h.jsx)(r.YM,{children:e&&(0,h.jsx)(d.Z,{in:i,timeout:300,style:{transformOrigin:"0 0 0"},children:(0,h.jsxs)(r.GI,{ref:o,children:[(g=e,l.filter((e=>f()(e.date).isSame(g,"day"))).map((e=>(0,h.jsxs)("div",{children:[(0,h.jsx)(n.Z,{date:g,time:!0}),(0,h.jsx)("h3",{children:e.title})]},(0,m.x0)(5))))),(0,h.jsx)(x,{handler:()=>s(!1)})]})})})]})});var g};var y=i(22226),v=i(66150),b=i(20760),w=i(47242),_=i(36038),O=i(36163),$=i(54664);const Z=()=>{const e={type:"monotone",strokeWidth:3,fillOpacity:.8},t=[{...e,dataKey:"cured",stroke:o.O9.peach,fill:o.O9.peach,activeDot:{r:5,fill:o.O9.peach,strokeWidth:0}},{...e,dataKey:"sick",stroke:o.O9.purple,fill:o.O9.purple,activeDot:{r:5,fill:o.O9.purple,strokeWidth:0}}];return(0,h.jsxs)(a.Z,{name:"EpiContextAreaChart",children:[(0,h.jsx)(v.Z,{title:"Epidemiological context",children:(0,h.jsxs)(w.Z,{children:[(0,h.jsx)(_.Z,{legend:"sick",color:"purple"}),(0,h.jsx)(_.Z,{legend:"cured",color:"peach"})]})}),(0,h.jsxs)(b.Z,{style:{padding:0,overflow:"hidden",justifyContent:"space-between"},children:[(0,h.jsx)(y.Z,{children:$.g0.map((e=>(0,h.jsx)("span",{children:e.name},e.name)))}),(0,h.jsx)(O.Z,{id:"EpiContextAreaChart",data:$.g0,elems:t,variant:"area",height:300})]})]})};var C=i(96027),U=i(87670),N=i(30872);const z=()=>(0,h.jsxs)(s.Z,{title:"Dashboard",children:[(0,h.jsx)("div",{children:(0,h.jsx)(j,{})},"events-compact"),(0,h.jsx)("div",{children:(0,h.jsx)(Z,{})},"epi-context-area"),(0,h.jsx)("div",{children:(0,h.jsx)(C.Z,{})},"radar"),(0,h.jsx)("div",{children:(0,h.jsx)(U.Z,{variant:"health"})},"health-index-compact"),(0,h.jsx)("div",{children:(0,h.jsx)(N.Z,{variant:"wide"})},"diagnoses-donut")]})},40309:(e,t,i)=>{i.d(t,{D8:()=>l,GI:()=>d,W2:()=>n,YM:()=>o});var s=i(28789),r=i(65484),a=i.n(r),c=i(14161);const n=s.ZP.div`
  position: relative;
  height: 100%;
  ${c.fU.col};
  align-items: center;
`,d=s.ZP.div`
  position: relative;
  z-index: 2;
  background-color: ${a()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})};
  padding: 20px;
  border-radius: 8px;
  ${c.fU.col};
  gap: 16px;
  margin: auto;
  width: calc(100% - 40px);
  max-width: 320px;
`,o=s.ZP.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: calc(100% - 40px);
`,l=s.ZP.div`
  ${c.fU.col};
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
      background-color: ${a()("theme",{light:c.R2.bodyBg,dark:c._4.bodyBg})};
      border-radius: 8px;
      min-height: 40px;
      padding: 10px 22px;
      display: flex;
      ${c.fU.between};
      font-size: ${c.iH[14]};
      margin: 0 2px;

      &__label {
        pointer-events: none;
      }
    }

    &__viewContainer {
      ${c.fU.col};
      flex-grow: 1;
    }

    &__tile {
      font-size: ${c.iH[14]};
      font-family: ${c.Rq.accent};

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
        ${c.fU.col};
        gap: 8px;
        justify-content: space-between;
        height: 100%;
        padding: 0 24px 20px;
      }

      &__weekdays {
        text-transform: uppercase;
        font-size: ${c.iH[10]};
        font-family: ${c.Rq.accent};
        text-align: center;
        order: 1;
        display: grid !important;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        justify-items: center;

        abbr {
          text-decoration: none;
        }

        ${c.AV.mobileL} {
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
            color: ${c.O9.blue};
            cursor: pointer;
          }

          &:not(&.active) {
            pointer-events: none;
          }

          &--neighboringMonth {
            opacity: .5;
          }
        }

        ${c.AV.mobileL} {
          grid-gap: 8px;

          &__day {
            width: 40px;
            height: 40px;
            border-radius: 4px;
            background-color: ${a()("theme",{light:c.R2.highlight,dark:c._4.highlight})};
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
                background-color: ${c.O9.blue};
                transform: translateX(-50%);
              }
            }
          }
        }
      }
    }
  }
`},87670:(e,t,i)=>{i.d(t,{Z:()=>$});var s=i(14161),r=i(28789),a=i(65484),c=i.n(a);const n=r.ZP.div`
  height: 100%;
  ${s.fU.col};
  justify-content: space-between;

  .total {
    display: flex;
    gap: 40px;
    margin: -4px 24px 0;
    position: relative;

    &_block {
      font-size: ${s.iH[12]};

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
        color: ${s.O9.azure};
      }

      &--sick {
        position: relative;

        .h1 {
          color: ${s.O9.peach};
        }

        &:before {
          content: '';
          height: 100%;
          width: 1px;
          background: ${c()("theme",{light:"#A2C0D4",dark:"#383D40"})};
          position: absolute;
          top: 0;
          left: -20px;
        }
      }
    }

    ${s.AV.tablet} {
      .total_block {
        font-size: ${s.iH[14]};

        .hidden {
          display: inline;
        }
      }
    }

    ${s.AV.laptop} {
      .total_block {
        font-size: ${s.iH[16]};
      }
    }
  }
`;var d=i(249),o=i(90004),l=i(20760),p=i(19913),h=i(5749),u=i(13386),x=i(41048),k=i(71827),m=i(47242),g=i(36038),f=i(22426),j=i(40835),y=i(54561),v=i(17350);const b=[{cured:314,sick:200},{cured:200,sick:400},{cured:265,sick:120},{cured:156,sick:300},{cured:412,sick:200},{cured:280,sick:500},{cured:251,sick:130},{cured:180,sick:300},{cured:304,sick:150},{cured:505,sick:408},{cured:328,sick:200},{cured:254,sick:90},{cured:301,sick:566},{cured:459,sick:189},{cured:354,sick:480},{cured:264,sick:400},{cured:309,sick:200},{cured:185,sick:500}],w=[{cured:450,sick:250},{cured:150,sick:380},{cured:370,sick:200},{cured:300,sick:180},{cured:500,sick:250},{cured:400,sick:600},{cured:200,sick:300},{cured:400,sick:150},{cured:348,sick:130},{cured:400,sick:280},{cured:200,sick:400},{cured:300,sick:241},{cured:380,sick:480},{cured:200,sick:380},{cured:400,sick:200},{cured:500,sick:250},{cured:400,sick:300},{cured:300,sick:450}],_=[{cured:200,sick:300},{cured:250,sick:350},{cured:390,sick:240},{cured:450,sick:320},{cured:550,sick:250},{cured:420,sick:200},{cured:368,sick:198},{cured:250,sick:370},{cured:322,sick:200},{cured:450,sick:270},{cured:210,sick:394},{cured:180,sick:270},{cured:380,sick:480},{cured:390,sick:550},{cured:450,sick:210},{cured:470,sick:360},{cured:360,sick:190},{cured:300,sick:250}];var O=i(80184);const $=e=>{let{variant:t}=e;const{theme:i}=(0,r.Fg)(),{periods:a}=(0,v.Z)(),{index:c,navigate:$}=(0,y.Z)(a),Z=[{cured:75.08,sick:45.27},{cured:84.51,sick:33.12},{cured:67.14,sick:48.65}],C=(()=>{switch(c){default:case 0:return b;case 1:return w;case 2:return _}})(),U=e=>{let{cx:r,cy:a,fill:c,...n}=e;const d="both"===t?n.dom===n.dataKey:"cured"===n.dataKey;return(0,O.jsxs)("svg",{width:"10",height:"222",viewBox:"0 0 10 222",x:r,y:a,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d&&(0,O.jsx)("path",{opacity:"0.5",d:"M5 28.3799V220.38",stroke:`url(#scatter_${n.dataKey})`,strokeWidth:"2",strokeLinecap:"round"}),(0,O.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:c}),(0,O.jsxs)("defs",{children:[(0,O.jsxs)("linearGradient",{id:"scatter_cured",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,O.jsx)("stop",{stopColor:"light"===i?s.R2.widgetBg:s._4.widgetBg}),(0,O.jsx)("stop",{offset:"1",stopColor:s.O9.azure})]}),(0,O.jsxs)("linearGradient",{id:"scatter_sick",x1:"5.5",y1:"220.38",x2:"5.5",y2:"28.3799",gradientUnits:"userSpaceOnUse",children:[(0,O.jsx)("stop",{stopColor:"light"===i?s.R2.widgetBg:s._4.widgetBg}),(0,O.jsx)("stop",{offset:"1",stopColor:s.O9.peach})]})]})]})};return(0,O.jsxs)(d.Z,{name:"HealthIndexChart",children:[(0,O.jsx)(o.Z,{title:"Health index",handler:$}),(0,O.jsx)(l.Z,{style:{padding:0,overflow:"hidden"},children:(0,O.jsxs)(n,{children:[(0,O.jsxs)("div",{className:"total",children:[(0,O.jsxs)("div",{className:"total_block total_block--cured",children:[(0,O.jsx)("span",{className:"spacer h1",children:Z[c].cured}),(0,O.jsx)(j.ZP,{className:"counter h1",end:Z[c].cured,duration:2,decimals:2}),(0,O.jsxs)("span",{children:[(0,O.jsx)("span",{className:"hidden",children:"patients"})," health rate"]})]}),"both"===t&&(0,O.jsxs)("div",{className:"total_block total_block--sick",children:[(0,O.jsx)("span",{className:"spacer h1",children:Z[c].sick}),(0,O.jsx)(j.ZP,{className:"counter h1",end:Z[c].sick,duration:2,decimals:2}),(0,O.jsxs)("span",{children:[(0,O.jsx)("span",{className:"hidden",children:"patients"})," sick rate"]})]})]}),(0,O.jsx)(p.h,{width:"100%",height:250,children:(0,O.jsxs)(h.G,{margin:!1,data:C,children:["both"===t&&(0,O.jsx)(u.b,{dataKey:"sick",shape:U,children:C.map(((e,t)=>(0,O.jsx)(x.b,{fill:s.O9.peach,dom:e.sick>e.cured?"sick":"cured",dataKey:"sick"},`cell-${t}`)))}),(0,O.jsx)(u.b,{dataKey:"cured",shape:U,children:C.map(((e,t)=>(0,O.jsx)(x.b,{fill:s.O9.azure,dom:e.cured>e.sick?"cured":"sick",dataKey:"cured"},`cell-${t}`)))}),(0,O.jsx)(k.u,{cursor:!1,content:(0,O.jsx)(f.Z,{right:!0})})]})}),(0,O.jsxs)(m.Z,{overlay:!0,children:[(0,O.jsx)(g.Z,{color:"azure",legend:"Health rate"}),"both"===t&&(0,O.jsx)(g.Z,{color:"peach",legend:"Sick rate"})]})]})})]})}}}]);
//# sourceMappingURL=9558.4d373080.chunk.js.map