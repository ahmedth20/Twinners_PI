"use strict";(self.webpackChunkmedux=self.webpackChunkmedux||[]).push([[7287],{61281:(e,a,t)=>{t.d(a,{Z:()=>G});t(45852);var l=t(89302),n=t(62014),s=t(31261),d=t(59086),o=t(72791),r=t(72426),i=t.n(r),u=t(16945),m=t(80184);const c=(e,a,t,l)=>{const n=i()()-i()(e.value),s=n/6e4>0&&n/6e4<a;let d=(new Date).getHours(),r=(new Date).getMinutes();const c=d+":"+(0,u.v)(r);let p={};return s&&l&&(p.className="current-time",p.children=(0,m.jsx)("span",{className:"time-indicator",style:{top:100/a*function(){let a,t=e.value.getMinutes();switch(t){default:case 0:a=t+r;break;case 30:a=Math.abs(t-r)}return a}()+"%"},children:(0,m.jsx)("span",{className:"label",children:c})})),(0,o.cloneElement)(e.children,{style:{},"data-time":i()(e.value).format("HH:mm"),...p})},p=e=>{let{label:a}=e;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("h2",{children:a})})};var h=t(57293),y=t(13902);const b=e=>{let{date:a,setter:t}=e;const l=i()(a).week(),n=i()().week(),s=i()(a).startOf("year").week(),d=i()(a).endOf("year").week();let o;return o=n===l?"This week":n+1===l?"Next week":n-1===l?"Last week":"Week "+l,(0,m.jsx)(y.Z,{handler:e=>{"prev"===e.currentTarget.dataset.direction?t(i()(a).subtract(1,"week").startOf("week").toDate()):t(i()(a).add(1,"week").startOf("week").toDate())},text:o,prevDisabled:l===s,nextDisabled:l===d})};var v=t(69517),D=t(17711);const x=e=>{let{date:a,setter:t}=e;const l=(0,D.Uo)().map(((e,a)=>({value:a,label:`${e.startLong} - ${e.endLong}`}))),[n,s]=(0,o.useState)(l[i()(a).week()-1]);return(0,m.jsx)(v.Z,{variant:"basic",options:l,value:n,changeHandler:e=>{s(e),t(i()(a).week(e.value+1).startOf("week").toDate())}})},g=e=>{let{date:a,setter:t}=e;const l=i()(a).month(),n=i()().month();let s;return s=n===l?"This month":n+1===l?"Next month":n-1===l?"Last month":`${i()(a).format("MMMM")}`,(0,m.jsx)(y.Z,{handler:e=>{"prev"===e.currentTarget.dataset.direction?t(i()(a).subtract(1,"month").toDate()):t(i()(a).add(1,"month").toDate())},text:s,prevDisabled:0===l,nextDisabled:11===l})},f=e=>{let{date:a,setter:t}=e;const l=(0,D.Gn)().map((e=>({value:e.month,label:e.formatted}))),[n,s]=(0,o.useState)(l[i()(a).month()]);return(0,m.jsx)(v.Z,{variant:"basic",options:l,value:n,changeHandler:e=>{s(e);const l=i()(e.value).month();t(i()(a).set({month:l,date:1}))}})};var w=t(47242),k=t(36038),j=t(28789),M=t(14161),$=t(65484),N=t.n($);const H=t.p+"static/media/dashed.21cc76b1da51c8c02f7a248852fcc598.svg";const S=t.p+"static/media/dashed_dark.90bd1cf34dae7c5375eaf94ced45087f.svg",Z=N()("theme",{light:"#fff",dark:"#2a2f32"}),F=j.ZP.div`
  position: absolute;
  background: ${Z};
  box-shadow: 0 1px 16px rgba(20, 46, 110, 0.4);
  border-radius: 8px;
  padding: 20px;
  top: calc(50% + ${e=>e.top}px - 40px);
  left: 50%;
  transform: translate(-50%, calc(-50% - ${e=>e.top/2}px));
  width: 260px;
  transition: opacity var(--transition);
  opacity: 0;
  visibility: hidden;
  margin-left: 32px;
  
  ${M.AV.tablet} {
    margin-left: 42px;
    top: calc(50% + ${e=>e.top}px - 60px);
  }

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  .header {
    display: flex;
    ${M.fU.between};
    gap: 20px;

    .user .user-option {
      display: flex;
      align-items: center;
      gap: 20px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;
      }
    }
  }

  .main {
    height: 80px;
    background: ${N()("theme",{light:`url(${H})`,dark:`url(${S})`})};
    position: relative;
    padding-top: 25px;
    ${M.fU.col};
    gap: 6px;

    &:before, &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 20px;
      background: ${N()("theme",{light:"linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #fff 100%)",dark:"linear-gradient(180deg, rgba(42, 47, 50, 0.5) 0%, #2a2f32 100%)"})};
    }

    &:before {
      top: 0;
      transform: rotate(180deg);
    }

    &:after {
      bottom: 0;
    }

    .track {
      height: 8px;
      position: relative;
      border-radius: 4px;
      background-color: ${N()("theme",{light:M.R2.bodyBg,dark:M.R2.text})};

      span {
        position: absolute;
        height: 8px;
        border-radius: 4px;
        background-color: ${M.O9.blue};
        top: 0;

        &:first-of-type {
          width: 20%;
          left: 0;
        }

        &:last-of-type {
          width: 15%;
          right: 10%;
        }
      }
    }

    .hours {
      display: flex;
      ${M.fU.between};
      margin: 0 -10px;

      span {
        width: 16px;
        height: 20px;
        border-radius: 8px;
        background: ${Z};
        font-size: ${M.iH[10]};
        font-family: ${M.Rq.accent};
        display: flex;
        ${M.fU.center};
      }
    }
  }

  ${M.AV.tablet} {
    width: 374px;

    .header {
      .user .user-option span {
        max-width: 200px;
      }
    }
  }
`;var R=t(36862),T=t(21119),C=t(35498);const E=e=>{let{name:a,open:t,handler:l,elemsHeight:n}=e;return(0,m.jsx)(C.Z,{isVisible:t,visibilityHandler:l,children:(0,m.jsxs)(F,{className:t?"visible":"",top:n,children:[(0,m.jsxs)("div",{className:"header",children:[(0,m.jsx)("div",{className:"user",children:a}),(0,m.jsx)(R.Z,{shape:"round",icon:"comment-text",label:"Message"})]}),(0,m.jsxs)("div",{className:"main",children:[(0,m.jsxs)("div",{className:"track",children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]}),(0,m.jsx)("div",{className:"hours",children:[9,10,11,12,13,14,15,16,17,18].map(((e,a)=>(0,m.jsx)("span",{children:e},a)))})]}),(0,m.jsx)(T.Z,{text:"Make an appointment",handler:()=>l(!1)})]})})};var _=t(57770),O=t(22172),U=t(94397);const V=[{start:i()().set({hour:12,minute:30,second:0}).toDate(),end:i()().set({hour:13,minute:0,second:0}).toDate(),type:"disabled"},{start:i()().add(1,"day").set({hour:10,minute:0,second:0}).toDate(),end:i()().add(1,"day").set({hour:10,minute:30,second:0}).toDate(),type:"disabled"},{start:i()().add(1,"day").set({hour:14,minute:0,second:0}).toDate(),end:i()().add(1,"day").set({hour:14,minute:30,second:0}).toDate(),type:"disabled"},{start:i()().add(2,"day").set({hour:9,minute:30,second:0}).toDate(),end:i()().add(2,"day").set({hour:10,minute:0,second:0}).toDate(),type:"disabled"},{start:i()().add(2,"day").set({hour:12,minute:30,second:0}).toDate(),end:i()().add(2,"day").set({hour:13,minute:0,second:0}).toDate(),type:"disabled"},{start:i()().add(4,"day").set({hour:14,minute:30,second:0}).toDate(),end:i()().add(4,"day").set({hour:15,minute:30,second:0}).toDate(),type:"disabled"}],z={doctor:[{name:"MRI",start:i()().set({hour:9,minute:30,second:0}).toDate(),end:i()().set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Runny nose",start:i()().set({hour:10,minute:30,second:0}).toDate(),end:i()().set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Keeping pregnant",start:i()().set({hour:11,minute:30,second:0}).toDate(),end:i()().set({hour:12,minute:0,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Ultrasound diagnostics",start:i()().set({hour:13,minute:30,second:0}).toDate(),end:i()().set({hour:14,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"EEG",start:i()().set({hour:15,minute:0,second:0}).toDate(),end:i()().set({hour:15,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"Routine checkup",start:i()().set({hour:15,minute:30,second:0}).toDate(),end:i()().set({hour:16,minute:0,second:0}).toDate(),allDay:!1,type:"checkup"},{name:"Blood test",start:i()().add(1,"day").set({hour:9,minute:30,second:0}).toDate(),end:i()().add(1,"day").set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Family appointment",start:i()().add(1,"day").set({hour:10,minute:30,second:0}).toDate(),end:i()().add(1,"day").set({hour:11,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Heartache",start:i()().add(1,"day").set({hour:12,minute:0,second:0}).toDate(),end:i()().add(1,"day").set({hour:12,minute:30,second:0}).toDate(),allDay:!1,type:"emergency"},{name:"First visit",start:i()().add(1,"day").set({hour:13,minute:0,second:0}).toDate(),end:i()().add(1,"day").set({hour:13,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Gastritis",start:i()().add(2,"day").set({hour:10,minute:0,second:0}).toDate(),end:i()().add(2,"day").set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Cardio checkup",start:i()().add(2,"day").set({hour:11,minute:30,second:0}).toDate(),end:i()().add(2,"day").set({hour:12,minute:0,second:0}).toDate(),allDay:!1,type:"checkup"},{name:"Stomachache",start:i()().add(2,"day").set({hour:14,minute:30,second:0}).toDate(),end:i()().add(2,"day").set({hour:15,minute:0,second:0}).toDate(),allDay:!1,type:"emergency"},{name:"MRI",start:i()().add(2,"day").set({hour:16,minute:0,second:0}).toDate(),end:i()().add(2,"day").set({hour:16,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"MRI",start:i()().add(4,"day").set({hour:9,minute:30,second:0}).toDate(),end:i()().add(4,"day").set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"},{name:"Family appointment",start:i()().add(4,"day").set({hour:10,minute:0,second:0}).toDate(),end:i()().add(4,"day").set({hour:10,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Keeping pregnant",start:i()().add(4,"day").set({hour:11,minute:0,second:0}).toDate(),end:i()().add(4,"day").set({hour:11,minute:30,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Runny nose",start:i()().add(4,"day").set({hour:14,minute:0,second:0}).toDate(),end:i()().add(4,"day").set({hour:14,minute:30,second:0}).toDate(),allDay:!1,type:"sick"},{name:"Heartache",start:i()().add(4,"day").set({hour:15,minute:30,second:0}).toDate(),end:i()().add(4,"day").set({hour:16,minute:0,second:0}).toDate(),allDay:!1,type:"emergency"}],patient:{general:[{name:"Bone Density Scan",start:i()().set({hour:10,minute:0,second:0}).toDate(),end:i()().set({hour:10,minute:30,second:0}).toDate(),allDay:!1,type:"test"},{name:"Surgeon consultation",start:i()().set({hour:10,minute:30,second:0}).toDate(),end:i()().set({hour:11,minute:0,second:0}).toDate(),allDay:!1,type:"consultation"},{name:"Calcium Blood Test",start:i()().add(1,"day").set({hour:13,minute:30,second:0}).toDate(),end:i()().add(1,"day").set({hour:14,minute:0,second:0}).toDate(),allDay:!1,type:"test"}],disabled:V}},G=e=>{let{viewChangeHandler:a,current:t,type:r}=e;const u=(0,U.Z)().width,y=(0,s.Zt)(i()),D=(0,o.useRef)(null),j=(0,o.useRef)(null),[M,$]=(0,o.useState)(0);(0,o.useEffect)((()=>{$(j.current.offsetHeight+D.current.offsetHeight)}),[j,D]);const N=(0,O.tV)(),[H,S]=(0,o.useState)(N[0]),[Z,F]=(0,o.useState)(!1),R=()=>(0,m.jsx)(v.Z,{options:N,value:H,variant:"user",changeHandler:e=>S(e)}),[T,C]=(0,o.useState)(i()().toDate()),G=["month","week","day"],P=()=>(0,m.jsx)(n.W2,{className:"tabs",children:G.map((e=>(0,m.jsx)(n.ck,{children:(0,m.jsx)(n.zx,{className:t===e?"active":null,onClick:()=>a(e),children:e})},e)))}),A=(e,a)=>{switch(e){case"NEXT":C(i()(T).add(1,"day").toDate());break;case"PREV":C(i()(T).subtract(1,"day").toDate());break;default:C(a)}},B={as:s.f,localizer:y,startAccessor:"start",endAccessor:"end",views:G,view:t,date:T,onView:a,onNavigate:A,onDrillDown:e=>(e=>{C(e),a("day")})(e),events:"doctor"===r?z.doctor:"day"===t?z.patient.general:z.patient.disabled,backgroundEvents:"doctor"===r?V:[],min:i()().startOf("year").set({hour:9,minute:30}).toDate(),max:i()().endOf("year").set({hour:16,minute:30}).toDate(),timeslots:1,step:30,formats:{dayHeaderFormat:u<414?"dddd, MMM DD":"dddd, MMMM DD",dayFormat:(()=>{switch(!0){case u<768:return"D";case u<1600:return"ddd, D";default:return"dddd D MMMM"}})(),timeGutterFormat:"HH:mm"},components:{toolbar:e=>{let{label:a,date:n}=e;return(0,m.jsxs)(l.h4,{ref:j,view:t,children:["day"===t&&(0,m.jsx)(p,{label:"doctor"===r?a:"Daily appointments scheduler"}),(0,m.jsx)(P,{}),"day"===t&&(0,m.jsx)(h.Z,{onNavigate:A,date:n,label:a}),"week"===t&&(0,m.jsxs)(m.Fragment,{children:["doctor"===r?(0,m.jsx)(x,{date:n,setter:C}):(0,m.jsx)(R,{}),(0,m.jsx)(b,{date:n,setter:C})]}),"month"===t&&(0,m.jsxs)(m.Fragment,{children:["doctor"===r?(0,m.jsx)(f,{date:n,setter:C}):(0,m.jsx)(R,{}),(0,m.jsx)(g,{date:n,setter:C})]})]})},event:e=>{let{event:a}=e;return(0,m.jsx)(d.Z,{event:a,variant:t})},timeSlotWrapper:e=>c(e,30,1,!0)},className:`calendar-${t} calendar-${r}`,messages:{showMore:e=>`+ ${e}`},popup:!0,selectable:"patient"===r&&"day"!==t,onSelectSlot:"patient"===r&&"day"!==t&&(()=>F(!0))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l.W2,{children:[(0,m.jsx)(l.SS,{...B}),"patient"===r&&"day"!==t&&(0,m.jsx)(E,{elemsHeight:M,name:H.label||null,open:Z,handler:F})]}),(0,m.jsx)(l.$_,{ref:D,children:(0,m.jsx)(w.Z,{children:_.U.map((e=>{let{cat:a,color:t,label:l}=e;return(0,m.jsx)(k.Z,{color:t,legend:l},a)}))})})]})}},22172:(e,a,t)=>{t.d(a,{b_:()=>d,i7:()=>o,tV:()=>r});var l=t(12298),n=t(83687),s=t(80184);const d=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],r=()=>{let e=[];return l.q.forEach((a=>{e.push({value:a.id,label:(0,s.jsxs)("div",{className:"user-option",children:[(0,s.jsx)(n.Z,{avatar:a.avatar,alt:a.name,size:40}),(0,s.jsx)("span",{children:a.name})]})})})),e}},12298:(e,a,t)=>{t.d(a,{q:()=>y});var l=t(65710),n=t(37512),s=t(76155),d=t(62056),o=t(67583),r=t(79168),i=t(29260),u=t(33375);const m=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg",c=t.p+"static/media/doc8.6152ed4995e28fcd1e7c.jpg";var p=t(43928),h=t(4681);const y=[{id:"marvin_park",name:"Marvin Park",avatar:{jpg:s,webp:d},speciality:"Dentist",rating:{year:3.64,month:4.5,week:4.14},daily:[{label:"9am",value:25},{label:"10am",value:45},{label:"11am",value:30},{label:"12pm",value:41},{label:"1pm",value:56},{label:"2pm",value:20},{label:"3pm",value:51},{label:"4pm",value:33},{label:"5pm",value:14}]},{id:"norman_munoz",name:"Norman Munoz",avatar:{jpg:t(99976),webp:t(99555)},speciality:"Family practice",rating:{year:3.8,month:3.51,week:4.6},online:!0,daily:[{label:"9am",value:15},{label:"10am",value:35},{label:"11am",value:20},{label:"12pm",value:31},{label:"1pm",value:46},{label:"2pm",value:10},{label:"3pm",value:41},{label:"4pm",value:23},{label:"5pm",value:58}]},{id:"tillie_mathis",name:"Tillie Mathis",avatar:{jpg:m,webp:c},speciality:"Surgeon",rating:{year:4.98,month:4.32,week:4.8},online:!0,daily:[{label:"9am",value:45},{label:"10am",value:19},{label:"11am",value:36},{label:"12pm",value:58},{label:"1pm",value:80},{label:"2pm",value:25},{label:"3pm",value:14},{label:"4pm",value:60},{label:"5pm",value:50}]},{id:"cornelia_phillips",name:"Cornelia Phillips",avatar:{jpg:l,webp:n},speciality:"Surgeon",rating:{year:3.05,month:4.1,week:4.7},daily:[{label:"9am",value:35},{label:"10am",value:29},{label:"11am",value:26},{label:"12pm",value:48},{label:"1pm",value:70},{label:"2pm",value:15},{label:"3pm",value:4},{label:"4pm",value:50},{label:"5pm",value:25}]},{id:"isaiah_goodman",name:"Isaiah Goodman",avatar:{jpg:i,webp:u},speciality:"Pediatrician",rating:{year:4.82,month:5,week:4.13},online:!0,daily:[{label:"9am",value:55},{label:"10am",value:39},{label:"11am",value:46},{label:"12pm",value:68},{label:"1pm",value:90},{label:"2pm",value:35},{label:"3pm",value:24},{label:"4pm",value:70},{label:"5pm",value:45}]},{id:"claudia_turner",name:"Claudia Turner",avatar:{jpg:p,webp:h},speciality:"Family practice",rating:{year:.95,month:2.4,week:3.54},daily:[{label:"9am",value:20},{label:"10am",value:49},{label:"11am",value:35},{label:"12pm",value:78},{label:"1pm",value:45},{label:"2pm",value:65},{label:"3pm",value:20},{label:"4pm",value:50},{label:"5pm",value:15}]},{id:"emily_rivera",name:"Emily Rivera",avatar:{jpg:o,webp:r},speciality:"Dentist",rating:{year:4,month:4.95,week:3.18},daily:[{label:"9am",value:30},{label:"10am",value:59},{label:"11am",value:45},{label:"12pm",value:88},{label:"1pm",value:55},{label:"2pm",value:75},{label:"3pm",value:30},{label:"4pm",value:60},{label:"5pm",value:25}]}]},16945:(e,a,t)=>{function l(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function n(e){return e<10?"0"+e:e}t.d(a,{t:()=>l,v:()=>n})}}]);
//# sourceMappingURL=7287.efa4705d.chunk.js.map