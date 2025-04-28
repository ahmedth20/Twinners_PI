"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[9407],{15691:(e,t,a)=>{a.d(t,{I:()=>l,Z:()=>c});var i=a(28789),r=a(14161),s=a(65484),n=a.n(s),o=a(80184);const l=i.ZP.input`
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
`,c=e=>{let{type:t="text",placeholder:a,value:i,handler:r,id:s,className:n}=e;return(0,o.jsx)(l,{type:t,placeholder:a,value:i,onChange:r,id:s,className:n||""})}},87025:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(28789),r=a(65484),s=a.n(r),n=a(14161),o=a(80184);const l=i.ZP.div`
  position: relative;
  margin-bottom: 20px;
  height: 20px;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: ${s()("theme",{light:n.Sz.dashedLight,dark:n.Sz.dashedDark})};
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 1;
  }
`,c=i.ZP.span`
  text-transform: uppercase;
  padding: 0 6px;
  position: relative;
  z-index: 2;
  margin-left: 17px;
  font-size: ${n.iH[10]};
  font-weight: 500;
  font-family: ${n.Rq.accent};
  background-color: ${s()("theme",{light:n.R2.widgetBg,dark:n._4.widgetBg})};
})
`,d=e=>{let{text:t}=e;return(0,o.jsx)(l,{className:"separator",children:(0,o.jsx)(c,{children:t})})}},99116:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(28789),r=a(65484),s=a.n(r),n=a(14161),o=a(80184);const l=i.ZP.div`
  display: flex;
  ${n.fU.center};
  height: 100%;
  
  p {
    width: fit-content;
    padding: 8px 16px;
    background-color: ${s()("theme",{light:n.R2.bodyBg,dark:n._4.bodyBg})};
    border-radius: 16px;
    line-height: 1;
    font-family: ${n.Rq.accent};
    font-weight: 500;
    font-size: ${n.iH[14]};
  }
`,c=e=>{let{text:t}=e;return(0,o.jsx)(l,{children:(0,o.jsx)("p",{children:t})})}},62014:(e,t,a)=>{a.d(t,{W2:()=>l,ck:()=>d,zx:()=>c});var i=a(28789),r=a(65484),s=a.n(r),n=a(14161);const o=s()("theme",{light:n.R2.bodyBg,dark:n.R2.text}),l=i.ZP.div`
  width: 100%;
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  grid-gap: 2px;
  border-radius: 8px;
  overflow: hidden;
`,c=i.ZP.button`
  width: 100%;
  height: 40px;
  font-size: ${n.iH[14]};
  text-transform: capitalize;
  transition: background-color var(--transition);
  ${s()("theme",{light:`\n        color: ${n.O9.blue};\n        background-color: ${n.R2.highlight};\n    `,dark:`\n        color: ${n.O9.secondary};\n        background-color: ${n._4.highlight};\n    `})};
  display: flex;
  ${n.fU.center}
  
  &[aria-selected="true"],
  &.active,
  &:hover, &:focus {
    background-color: ${o};
  }
`,d=i.ZP.div`
  &.active .nav-link {
    background-color: ${o};
  };
`},7349:(e,t,a)=>{a.d(t,{Z:()=>N});var i=a(15691),r=a(66204),s=a(62014),n=a(249),o=a(69667),l=a(28789),c=a(65484),d=a.n(c),p=a(14161),h=a(25606),x=a(13630);const g=d()("theme",{light:(0,h.m4)(p.R2.bodyBg,.5),dark:(0,h.m4)("#4A4F54",.5)}),m=l.ZP.div`
  margin: 2px;
  position: relative;
  cursor: pointer;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${g};
  }

  &:hover, &.active {
    .container {
      &:after {
        opacity: 1;
      }

      .main_wrapper .preview {
        &:after {
          opacity: 0;
        }

        &:before {
          opacity: 1;
        }
      }
    }
  }

  .container {
    padding: 20px 22px;
    display: flex;
    ${p.fU.between};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${d()("theme",{light:p.R2.bodyBg,dark:p._4.bodyBg})};
      border-radius: 8px;
      transition: opacity var(--transition);
      z-index: 1;
      opacity: 0;
    }

    .qty-badge {
      position: absolute;
      right: 20px;
    }

    .main {
      display: flex;
      align-items: center;
      gap: 20px;
      position: relative;
      z-index: 2;
      width: 100%;
      
      &_wrapper {
        ${p.fU.col};
        gap: 4px;
        width: calc(100% - 60px);

        .name {
          font-weight: ${e=>e.hasUnread&&"500"};
        }

        .preview {
          color: ${p.O9.blue};
          font-size: ${p.iH[14]};
          display: flex;
          align-items: center;
          gap: 8px;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
            text-overflow: ellipsis;
          max-width: calc(100% - 60px);

          &:after, &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100px;
            transition: opacity var(--transition);
          }

          &:after {
            background: ${d()("theme",{light:`linear-gradient(270deg, ${p.R2.widgetBg} 0%, ${(0,h.m4)(p.R2.widgetBg,1e-4)} 100%)`,dark:`linear-gradient(270deg, ${p._4.widgetBg} 0%, ${(0,h.m4)(p._4.widgetBg,1e-4)} 100%)`})};
          }

          &:before {
            background: ${d()("theme",{light:`linear-gradient(270deg, ${p.R2.bodyBg} 0%, ${(0,h.m4)(p.R2.bodyBg,1e-4)} 100%)`,dark:`linear-gradient(270deg, ${p._4.bodyBg} 0%, ${(0,h.m4)(p._4.bodyBg,1e-4)} 100%)`})};
            opacity: 0;
          }

          .icon {
            font-size: ${p.iH[12]};

            &-pen {
              animation: ${x.So} 1.5s ease-in-out infinite both;
            }
          }
        }
      }
    }
  }
`;var u=a(83687),f=a(85335),k=a(80184);const v=e=>{let{data:t,user:a,onUserSelect:i,setModal:r}=e;const{firstName:s,lastName:n,online:o,isTyping:l,chatHistory:c,avatar:d}=t,p=c.filter((e=>!e.read)).length,h=c.filter((e=>!e.read))[p-1],x=window.matchMedia("(max-width: 1038.98px)").matches,g=()=>void 0!==h.audio?(0,k.jsxs)("span",{className:"preview",children:[(0,k.jsx)("i",{className:"icon icon-play"})," Audio message"]}):void 0!==h.media?(0,k.jsxs)("span",{className:"preview",children:[(0,k.jsx)("i",{className:"icon icon-image"})," Photo"]}):l?(0,k.jsxs)("span",{className:"preview",children:[(0,k.jsx)("i",{className:"icon icon-pen"})," Typing..."]}):(0,k.jsx)("span",{className:"preview",children:h.message});return(0,k.jsx)(m,{className:a===t.id?"active":"",onClick:()=>{i(t.id),x&&r(!0)},hasUnread:p>0,children:(0,k.jsxs)("div",{className:"container",children:[(0,k.jsxs)("div",{className:"main",children:[(0,k.jsx)(u.Z,{avatar:d,alt:`${s} ${n}`,online:o}),(0,k.jsxs)("div",{className:"main_wrapper",children:[(0,k.jsxs)("span",{className:"name",children:[s," ",n]}),h?(0,k.jsx)(g,{}):t.speciality&&(0,k.jsx)("span",{className:"preview",children:t.speciality})]})]}),p>0&&(0,k.jsx)(f.GS,{className:"qty-badge",children:p})]})})};var y=a(30133),b=a(25277),$=a(72791),w=a(84483),j=a(30626);const N=e=>{let{variant:t,user:a,onUserSelect:l,setModal:c,activeList:d,setActiveList:p}=e;const[h,x]=(0,$.useState)(""),g="doctor"===t&&"doctors"!==d?"Search patients":"Search doctor or medical department",m=(0,$.useRef)(null),u=(0,$.useRef)(null),f=(0,w.Z)(m,u),N=(e,t)=>{const i=e.filter((e=>`${e.firstName} ${e.lastName}`.toLowerCase().includes(h.toLowerCase())&&e.role===t)).map((e=>(0,k.jsx)(o.Z.Link,{as:"div",eventKey:e.id,onClick:()=>l(e.id),children:(0,k.jsx)(v,{user:a,data:e,onUserSelect:l,setModal:c})},e.id)));return i.length?i:(0,k.jsx)(b.Z,{})};return(0,k.jsxs)(n.Z,{name:"MessengerUserList",children:["doctor"===t&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(r.h4,{ref:m,children:(0,k.jsxs)(s.W2,{children:[(0,k.jsx)(s.zx,{className:"patients"===d?"active":"",onClick:()=>p("patients"),children:"Patients"}),(0,k.jsx)(s.zx,{className:"doctors"===d?"active":"",onClick:()=>p("doctors"),children:"Doctors"})]})}),(0,k.jsx)(y.Z,{height:f,children:(0,k.jsx)(r.aV,{className:"track",children:(0,k.jsx)("div",{style:{margin:"2px 0"},children:N(j.b,"patients"===d?"patient":"doctor")})})})]}),"patient"===t&&(0,k.jsx)(y.Z,{height:f,children:(0,k.jsx)(r.aV,{className:"track",children:N(j.T,"doctor")})}),(0,k.jsx)(r.$_,{ref:u,children:(0,k.jsxs)("div",{className:"search",children:[(0,k.jsx)(i.Z,{type:"search",placeholder:g,value:h,handler:e=>x(e.target.value)}),(0,k.jsx)("button",{className:""!==h?"visible":"",onClick:()=>x(""),children:(0,k.jsx)("i",{className:"icon icon-close"})})]})})]})}},45943:(e,t,a)=>{a.d(t,{Z:()=>A});var i=a(249),r=a(75700),s=a(99116),n=a(66204),o=a(28789),l=a(65484),c=a.n(l),d=a(14161);const p=o.ZP.div`
  padding: 20px 24px;
  border-bottom: 2px solid ${c()("theme",{light:d.R2.bodyBg,dark:"#4A4F54"})};
  display: flex;
  ${d.fU.between};
  gap: 16px;

  .main {
    display: flex;
    align-items: center;
    gap: 20px;

    .title {
      font-size: ${d.iH[16]};
    }

    .avatar {
      display: none;

      ${d.AV.mobileL} {
        display: block;
      }
    }
  }

  .actions {
    display: flex;
    gap: 20px;

    .btn-action {
      background-color: ${c()("theme",{light:d.R2.highlight,dark:d._4.highlight})};

      &:hover, &:focus {
        background-color: ${d.O9.blue};
      }
    }
  }

  ${d.AV.tablet} {
    .main .title {
      font-size: ${d.iH[20]};
    }
  }
`;var h=a(83687),x=a(36862),g=a(80184);const m=o.ZP.button`
  display: flex;
  ${d.fU.center};
  gap: 8px;
  border-radius: 20px;
  font-size: ${d.iH[14]};
  height: 40px;
  width: 40px;
  color: ${d.R2.text};
  transition: color var(--transition), background-color var(--transition);

  .icon {
    color: ${d.O9.gray};
    transition: color var(--transition);
  }

  .text {
    display: none;
  }

  &:hover, &:focus {
    background-color: ${d.O9.blue};
    color: #fff;

    .icon {
      color: #fff;
    }
  }

  ${d.AV.mobileL} {
    width: fit-content;
    padding: 0 16px;
    .text {
      display: block;
    }
  }
`,u=e=>{let{handler:t,user:a="doctor"}=e;const i={icon:"doctor"===a?"painmap":"plus-circle",text:"doctor"===a?"Case history":"Make an appointment"};return(0,g.jsxs)(m,{className:"btn-action",onClick:t,children:[(0,g.jsx)("i",{className:`icon icon-${i.icon}`})," ",(0,g.jsx)("span",{className:"text",children:i.text})]})},f=e=>{let{user:t,variant:a,elRef:i}=e;const{role:r,firstName:s,lastName:n,online:o,avatar:l}=t;return(0,g.jsxs)(p,{ref:i,children:[(0,g.jsxs)("div",{className:"main",children:[(0,g.jsx)(h.Z,{avatar:l,online:o,alt:`${s} ${n}`}),(0,g.jsxs)("h3",{className:"title",children:["doctor"===r&&"Dr."," ",s," ",n]})]}),(0,g.jsxs)("div",{className:"actions",children:["doctor"===a&&"doctor"!==r?(0,g.jsx)(u,{}):null,(0,g.jsx)(x.Z,{shape:"round",icon:"phone",label:"Call"})]})]})},k=o.ZP.div`
  margin: ${e=>"current"===e.sender?"0 24px 0 auto":"0 auto 0 24px"};
  ${d.fU.col};
  gap: 8px;
  max-width: 60%;
  width: fit-content;
  padding-bottom: 20px;

  .metadata {
    font-family: ${d.Rq.accent};
    font-size: ${d.iH[12]};
    text-align: ${e=>"current"===e.sender?"right":"left"};
  }

  .content {
    border-radius: 8px;
    padding: ${e=>e.hasAudio?"20px":"10px"};
    background-color: ${c()("theme",{light:e=>"current"!==e.sender?d.R2.bodyBg:d.R2.highlight,dark:e=>"current"!==e.sender?d._4.bodyBg:d._4.highlight})};
    gap: 10px;
    width: fit-content;
    word-break: break-word;
    overflow: hidden;
    will-change: transform;
    line-height: 1.5;
    font-size: ${d.iH[14]};

    img {
      border-radius: 4px;
    }

    .wave {
      display: none;
    }

    ${d.AV.tablet} {
      font-size: ${d.iH[16]};

      .wave {
        display: block;
        min-width: 200px;
      }
    }
  }
`;var v=a(74629),y=a.n(v),b=a(72791);const $=o.ZP.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  gap: 10px;

  .wave {
    flex-grow: 1;
    min-width: 50px;
    max-width: 200px;
  }

  .duration {
    font-family: ${d.Rq.accent};
    font-size: ${d.iH[10]};
    min-width: 70px;
  }
`,w=e=>{const[t,a]=(0,b.useState)({playing:!1,progress:0,duration:0,src:e.src,id:e.id}),{theme:i}=(0,o.Fg)(),[r,s]=(0,b.useState)(null);(0,b.useEffect)((()=>{!function(){const r=document.querySelector(`#track_${t.id}`);if(r){const n=y().create({barWidth:1,cursorWidth:1,container:`#waveform_${e.id}`,backend:"WebAudio",height:33,barGap:2,barRadius:.5,progressColor:d.O9.blue,responsive:!0,waveColor:"dark"===i?d.R2.text:"#87BFFF",cursorColor:"transparent"});s(n),n.load(r),n.on("ready",(()=>{a({...t,duration:n.getDuration()})})),n.on("audioprocess",(()=>{a({...t,progress:n.getCurrentTime()})})),n.on("finish",(()=>{a({...t,playing:!1,progress:0}),n.seekTo(0)}))}}()}),[]),(0,b.useEffect)((()=>{r&&r.setWaveColor("dark"===i?d.R2.text:"#87BFFF")}),[i,r]);const n=e=>{const t=Math.floor(e/60),a=Math.floor(e-60*t);return`${t}:${a<10?"0":""}${a}`};return(0,g.jsxs)($,{className:"audio",children:[(0,g.jsx)(x.Z,{shape:"round",icon:t.playing?"pause":"play",label:t.playing?"Pause voice message":"Play voice message",handler:()=>{a({...t,playing:!t.playing}),r.playPause()}}),(0,g.jsx)("div",{className:"wave",id:`waveform_${t.id}`}),(0,g.jsx)("audio",{id:`track_${t.id}`,src:e.src}),(0,g.jsxs)("div",{className:"duration",children:[n(t.progress)," / ",n(t.duration)]})]})};var j=a(72426),N=a.n(j),Z=a(25984);const R=e=>{let{data:t,senderName:a}=e;const{message:i,date:r,sender:s,media:n,audio:l}=t,{theme:c}=(0,o.Fg)(),d="current"===s?"You":a;return(0,g.jsxs)(k,{sender:s,hasAudio:l,children:[(0,g.jsxs)("span",{className:"metadata",children:[`${d}, `," ",N()(r).format("hh:mm A")]}),(0,g.jsxs)("div",{className:"content",children:[i,n&&(0,g.jsx)("img",{src:n,alt:"placeholder"}),l&&(0,g.jsx)(w,{src:l,id:(0,Z.x0)(5),theme:c})]})]})};var z=a(59434),H=a(51644);const _=(0,o.ZP)(n.$_)`
  padding: 15px 24px 20px;
  form {
    display: flex;
    ${d.fU.between};
    gap: 8px;

    input {
      height: 40px;
      max-width: calc(100% - 48px);

      &::placeholder {
        font-size: ${d.iH[14]};;
      }
    }
    
    ${d.AV.tablet} {
        input::placeholder {
            font-size: ${d.iH[18]};
        }
    }
  }
`,P=e=>{let{db:t,id:a,elRef:i}=e;const r=(0,b.useRef)(null),s=(0,z.I0)();return(0,g.jsx)(_,{ref:i,children:(0,g.jsxs)("form",{onSubmit:e=>{e.preventDefault();const i={sender:"current",message:r.current.value,date:N()().valueOf(),read:!1,id:(0,Z.x0)()};""!==r.current.value&&(s((0,H.Hz)({db:t,id:a,message:i})),r.current.value="",r.current.blur())},children:[(0,g.jsx)("input",{ref:r,type:"text",placeholder:"Type a message...",spellCheck:!0}),(0,g.jsx)(x.Z,{shape:"round",icon:"paper-plane",label:"Send",type:"submit"})]})})};var F=a(59741),B=a.n(F),C=a(87025),S=a(30133),Y=a(84483);const M=JSON.parse('{"ip":0,"fr":60,"v":"5.1.20","assets":[],"layers":[{"ty":4,"nm":"Ellipse_3","ip":0,"st":0,"ind":4,"hix":1,"ks":{"o":{"a":0,"k":100},"or":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[3,3,0]},"p":{"s":true,"x":{"a":0,"k":56.943},"y":{"a":1,"k":[{"t":0,"s":[35.651],"e":[30.651],"i":{"x":[0.735],"y":[0.045]},"o":{"x":[0.6],"y":[-0.28]}},{"t":39,"s":[30.651],"e":[35.651],"i":{"x":[0.32],"y":[1.275]},"o":{"x":[0.175],"y":[0.885]}},{"t":65}]}},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"s":{"a":1,"k":[{"t":0,"s":[100,100],"e":[70,70],"i":{"x":[0.675,0.675],"y":[0.19,0.19]},"o":{"x":[0.55,0.55],"y":[0.055,0.055]}},{"t":39,"s":[70,70],"e":[100,100],"i":{"x":[0.45,0.45],"y":[0.94,0.94]},"o":{"x":[0.25,0.25],"y":[0.46,0.46]}},{"t":65}]}},"shapes":[{"ty":"gr","nm":"Ellipse_3 shape group","it":[{"ty":"el","p":{"a":0,"k":[23,3]},"s":{"a":0,"k":[6,6]}},{"ty":"st","o":{"a":0,"k":0},"w":{"a":0,"k":0},"c":{"a":0,"k":[0,0,0,0]},"lc":3,"lj":1,"ml":1},{"ty":"gf","o":{"a":0,"k":100},"r":1,"g":{"p":1,"k":{"a":0,"k":[1,0.14901960784313725,0.3843137254901961,0.9411764705882353]}},"t":1,"s":{"a":0,"k":[23,0]},"e":{"a":0,"k":[23,6]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"p":{"a":0,"k":[-20,0]},"r":{"a":0,"k":0}}]}],"op":65},{"ty":4,"nm":"Ellipse_2","ip":0,"st":0,"ind":3,"hix":2,"ks":{"o":{"a":0,"k":100},"or":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[3,3,0]},"p":{"s":true,"x":{"a":0,"k":46.943},"y":{"a":1,"k":[{"t":0,"s":[35.651],"e":[30.651],"i":{"x":[0.735],"y":[0.045]},"o":{"x":[0.6],"y":[-0.28]}},{"t":35,"s":[30.651],"e":[35.651],"i":{"x":[0.32],"y":[1.275]},"o":{"x":[0.175],"y":[0.885]}},{"t":60}]}},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"s":{"a":1,"k":[{"t":0,"s":[100,100],"e":[80,70],"i":{"x":[0.675,0.675],"y":[0.19,0.19]},"o":{"x":[0.55,0.55],"y":[0.055,0.055]}},{"t":35,"s":[80,70],"e":[100,100],"i":{"x":[0.45,0.45],"y":[0.94,0.94]},"o":{"x":[0.25,0.25],"y":[0.46,0.46]}},{"t":60}]}},"shapes":[{"ty":"gr","nm":"Ellipse_2 shape group","it":[{"ty":"el","p":{"a":0,"k":[13,3]},"s":{"a":0,"k":[6,6]}},{"ty":"st","o":{"a":0,"k":0},"w":{"a":0,"k":0},"c":{"a":0,"k":[0,0,0,0]},"lc":3,"lj":1,"ml":1},{"ty":"gf","o":{"a":0,"k":100},"r":1,"g":{"p":1,"k":{"a":0,"k":[1,0.1568627450980392,0.45098039215686275,0.9647058823529412]}},"t":1,"s":{"a":0,"k":[13,0]},"e":{"a":0,"k":[13,6]}},{"ty":"tr","o":{"a":0,"k":60},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"p":{"a":0,"k":[-10,0]},"r":{"a":0,"k":0}}]}],"op":65},{"ty":4,"nm":"Ellipse","ip":0,"st":0,"ind":2,"hix":3,"ks":{"o":{"a":0,"k":100},"or":{"a":0,"k":[0,0,0]},"a":{"a":0,"k":[3,3,0]},"p":{"s":true,"x":{"a":0,"k":36.943},"y":{"a":1,"k":[{"t":0,"s":[35.651],"e":[30.651],"i":{"x":[0.735],"y":[0.045]},"o":{"x":[0.6],"y":[-0.28]}},{"t":30,"s":[30.651],"e":[35.651],"i":{"x":[0.32],"y":[1.275]},"o":{"x":[0.175],"y":[0.885]}},{"t":55}]}},"rx":{"a":0,"k":0},"ry":{"a":0,"k":0},"rz":{"a":0,"k":0},"s":{"a":1,"k":[{"t":0,"s":[100,100],"e":[70,70],"i":{"x":[0.675,0.675],"y":[0.19,0.19]},"o":{"x":[0.55,0.55],"y":[0.055,0.055]}},{"t":30,"s":[70,70],"e":[100,100],"i":{"x":[0.45,0.45],"y":[0.94,0.94]},"o":{"x":[0.25,0.25],"y":[0.46,0.46]}},{"t":55}]}},"shapes":[{"ty":"gr","nm":"Ellipse shape group","it":[{"ty":"el","p":{"a":0,"k":[3,3]},"s":{"a":0,"k":[6,6]}},{"ty":"st","o":{"a":0,"k":0},"w":{"a":0,"k":0},"c":{"a":0,"k":[0,0,0,0]},"lc":3,"lj":1,"ml":1},{"ty":"gf","o":{"a":0,"k":100},"r":1,"g":{"p":1,"k":{"a":0,"k":[1,0.1568627450980392,0.45098039215686275,0.9647058823529412]}},"t":1,"s":{"a":0,"k":[3,0]},"e":{"a":0,"k":[3,6]}},{"ty":"tr","o":{"a":0,"k":40},"a":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]},"p":{"a":0,"k":[0,0]},"r":{"a":0,"k":0}}]}],"op":65}],"op":65,"w":94,"h":72}'),U=e=>{let{user:t,variant:a}=e;const i=(0,z.v9)((e=>e.messenger.doctor)),s=(0,z.v9)((e=>e.messenger.patient)),o="patient"===a?s:i,l=t&&o.find((e=>e.id===t)),c=(0,b.useRef)(null),d=(0,b.useRef)(null),p=(0,Y.Z)(c,d),h=(0,b.useRef)(null);return(0,b.useEffect)((()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)}),[o]),(0,b.useEffect)((()=>{h.current&&h.current.scrollTo(0,0)}),[t]),(0,g.jsxs)(n.W2,{children:[l&&(0,g.jsx)(f,{variant:a,user:l,elRef:c}),(0,g.jsx)(S.Z,{height:p,children:(0,g.jsx)("div",{className:"track",ref:h,style:{padding:"20px 0"},children:o.map((e=>{const t=[...new Set(e.chatHistory.map((e=>N()(e.date).format("DD.MM.YYYY"))))];return(0,g.jsxs)(r.Z.Pane,{eventKey:e.id,children:[t.map((t=>(0,g.jsxs)("div",{className:"group",children:[(0,g.jsx)(C.Z,{text:t===N()().format("DD.MM.YYYY")?"Today":t}),e.chatHistory.filter((e=>N()(e.date).format("DD.MM.YYYY")===t)).map(((t,a)=>(0,g.jsx)(R,{data:t,senderName:`${e.firstName} ${e.lastName}`},t.id)))]},`${e.id}-${t}`))),e.isTyping&&(0,g.jsx)(n.fw,{children:(0,g.jsx)(B(),{animationData:M})})]},e.id)}))})}),(0,g.jsx)(P,{db:a,id:t,elRef:d})]})},A=e=>{let{variant:t,user:a}=e;return(0,g.jsx)(r.Z.Content,{as:i.Z,name:"Messenger",mobile:600,children:""===a?(0,g.jsx)(s.Z,{text:"Select a chart to start messaging"}):(0,g.jsx)(U,{variant:t,user:a})})}},66204:(e,t,a)=>{a.d(t,{$_:()=>d,W2:()=>l,aV:()=>h,fw:()=>p,h4:()=>c});var i=a(28789),r=a(65484),s=a.n(r),n=a(14161);const o=s()("theme",{light:n.R2.bodyBg,dark:"#4A4F54"}),l=i.ZP.div`
  ${n.fU.col};
  height: 100%;

  .content {
    padding: 20px 0;
    ${n.fU.col};
    flex-grow: 1;
    gap: 20px;

    .separator, .group {
      margin-bottom: 20px;
    }
  }
`,c=i.ZP.div`
  border-bottom: 2px solid ${o};
  padding: 20px 24px 19px;
`,d=i.ZP.div`
  padding: 17px 24px 20px;
  border-top: 2px solid ${o};

  .search {
    position: relative;

    input {
      width: 100%;
      padding-right: 36px;
    }

    button {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: ${n.iH[14]};
      color: ${n.O9.blue};
      transition: .2s ease-in-out;
      will-change: transform;
      opacity: 0;

      &:hover, &:focus {
        transform: translateY(-50%) scale(1.2);
      }
      
      &.visible {
        opacity: 1;
      }
    }
  }
`,p=i.ZP.div`
  max-width: 80px;
  margin-top: -20px;
`,h=i.ZP.div`
  height: calc(100% - ${e=>e.height}px);
  overflow-y: auto;
`},30133:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(28789),r=a(65484),s=a.n(r),n=a(72791);const o=(e,t)=>{const[a,i]=(0,n.useState)(void 0),[r,s]=(0,n.useState)(void 0),o=()=>{const{current:t}=e;0===t.children[0].scrollTop?t.classList.add("is-top"):t.classList.remove("is-top");t.children[0].scrollHeight===Math.ceil(t.children[0].scrollTop)+t.children[0].clientHeight||t.children[0].scrollHeight===Math.floor(t.children[0].scrollTop)+t.children[0].clientHeight?t.classList.add("is-bottom"):t.classList.remove("is-bottom")};return(0,n.useEffect)((()=>{const{current:a}=e,r=()=>{s(a.children[0].scrollHeight);const e=a.children[0].scrollHeight>a.children[0].clientHeight;i(e),null===a||void 0===a||a.classList.toggle("has-overflow",e),a.children[0].addEventListener("scroll",o),t&&t(e)};a&&("ResizeObserver"in window&&new ResizeObserver(r).observe(a),r())}),[e,t,r]),a};var l=a(80184);const c=i.ZP.div`
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
      background: ${s()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, #FFFFFF 100%)",dark:"linear-gradient(180deg, rgba(23, 24, 25, 0.0001) 0%, #171819 100%)"})};
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
`,d=e=>{let{children:t,height:a,size:i}=e;const r=(0,n.useRef)(null),s=o(r);return(0,l.jsx)(c,{className:s?"is-top has-overflow":"",height:a,ref:r,size:i,children:t})}},84483:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(72791);const r=(e,t)=>{const[a,r]=(0,i.useState)(0);return(0,i.useEffect)((()=>{if(null!==e&&null!==t){const a=e.current?e.current.clientHeight:0,i=t&&t.current?t.current.clientHeight:0;r(a+i)}}),[e,t]),a}},13630:(e,t,a)=>{a.d(t,{Ji:()=>o,So:()=>n,dC:()=>r,sd:()=>s});var i=a(28789);const r=i.F4`
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
`,s=i.F4`
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
`,n=i.F4`
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
`}}]);
//# sourceMappingURL=9407.d8129a34.chunk.js.map