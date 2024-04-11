import{r as i,j as r,a as ye,g as ve,R as v}from"./index-hdThjF5n.js";const xe="_home_wrapper_1a7bl_1",Ce={home_wrapper:xe},je="_hide_1hmgr_1",Ne="_show_1hmgr_7",ke="_hero_section_1hmgr_13",$e="_logo_wrapper_1hmgr_25",Ee="_logo_1hmgr_25",Se="_bg_wrapper_1hmgr_44",Oe="_bg_video_1hmgr_50",y={hide:je,show:Ne,hero_section:ke,logo_wrapper:$e,logo:Ee,bg_wrapper:Se,bg_video:Oe};var D=new Map,T=new WeakMap,J=0,Pe=void 0;function Le(e){return e?(T.has(e)||(J+=1,T.set(e,J.toString())),T.get(e)):"0"}function Te(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?Le(e.root):e[t]}`).toString()}function Ie(e){const t=Te(e);let n=D.get(t);if(!n){const s=new Map;let o;const l=new IntersectionObserver(p=>{p.forEach(c=>{var d;const u=c.isIntersecting&&o.some(f=>c.intersectionRatio>=f);e.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=u),(d=s.get(c.target))==null||d.forEach(f=>{f(u,c)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:s},D.set(t,n)}return n}function Re(e,t,n={},s=Pe){if(typeof window.IntersectionObserver>"u"&&s!==void 0){const d=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:o,observer:l,elements:p}=Ie(n),c=p.get(e)||[];return p.has(e)||p.set(e,c),c.push(t),l.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(p.delete(e),l.unobserve(e)),p.size===0&&(l.disconnect(),D.delete(o))}}function g({threshold:e,delay:t,trackVisibility:n,rootMargin:s,root:o,triggerOnce:l,skip:p,initialInView:c,fallbackInView:d,onChange:u}={}){var f;const[x,z]=i.useState(null),C=i.useRef(),[j,L]=i.useState({inView:!!c,entry:void 0});C.current=u,i.useEffect(()=>{if(p||!x)return;let b;return b=Re(x,(E,$)=>{L({inView:E,entry:$}),C.current&&C.current(E,$),$.isIntersecting&&l&&b&&(b(),b=void 0)},{root:o,rootMargin:s,threshold:e,trackVisibility:n,delay:t},d),()=>{b&&b()}},[Array.isArray(e)?e.toString():e,x,o,s,l,p,n,d,t]);const N=(f=j.entry)==null?void 0:f.target,k=i.useRef();!x&&N&&!l&&!p&&k.current!==N&&(k.current=N,L({inView:!!c,entry:void 0}));const h=[z,j.inView,j.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}const Ve="https://franciscobisso.github.io/laurus/assets/bgless_logo_primary_mobile-mcmNcZ9R.webp",K="https://franciscobisso.github.io/laurus/assets/bgless_logo_primary_desktop-BP7UVMug.webp",ze="https://franciscobisso.github.io/laurus/assets/bgless_logo_secondary_mobile-_-Q9jooN.webp",Me="https://franciscobisso.github.io/laurus/assets/bgless_logo_secondary_desktop-TuNJ3NjF.webp",ee="https://franciscobisso.github.io/laurus/assets/farm_reel_720-dT68F5Bi.webm",He="https://franciscobisso.github.io/laurus/assets/farm_reel_1080-bY04QFDO.webm",De="https://franciscobisso.github.io/laurus/assets/towers_poster-Itr--73T.webp";function qe(){const e=g();return r.jsxs("section",{className:y.hero_section,tabIndex:0,children:[r.jsxs("picture",{className:y.logo_wrapper,children:[r.jsx("source",{srcSet:`${ze} 1000w, ${Me}`,media:"(prefers-color-scheme: dark)"}),r.jsx("img",{ref:e.ref,loading:"lazy",width:"100%",height:"100%",className:y.logo,src:K,srcSet:`${Ve} 1000w, ${K}`,alt:"logo"})]}),r.jsx("div",{className:`${y.bg_wrapper} ${e.inView?y.show:y.hide}`,children:r.jsxs("video",{loading:"lazy",className:`${y.bg_video}`,poster:De,playsInline:!0,loop:!0,autoPlay:!0,muted:!0,children:[r.jsx("source",{src:ee,media:"(orientation: portrait) and (width < 700px)",type:"video/webm"}),r.jsx("source",{src:ee,media:"(orientation: landscape) and (width < 1000px)",type:"video/webm"}),r.jsx("source",{src:He,type:"video/webm"})]})})]})}const Ae="_hide_1hk81_1",Be="_show_1hk81_7",Ue="_purpose_section_1hk81_13",We="_filter_1hk81_24",Ze="_frame_1hk81_38",Fe="_img_1hk81_46",Ye="_wrapper_1hk81_54",Qe="_card_1hk81_71",Ge="_invisible_ref_1hk81_83",Xe="_card_txt_wrapper_1hk81_88",Je="_card_title_1hk81_97",Ke="_card_txt_1hk81_88",et="_stepper_1hk81_113",tt="_step_1hk81_113",nt="_bright_1hk81_130",st="_opaque_1hk81_135",_={hide:Ae,show:Be,purpose_section:Ue,filter:We,frame:Ze,img:Fe,wrapper:Ye,card:Qe,invisible_ref:Ge,card_txt_wrapper:Xe,card_title:Je,card_txt:Ke,stepper:et,step:tt,bright:nt,opaque:st},rt="https://franciscobisso.github.io/laurus/assets/rooftop_farm_mobile-0D3vBQL5.webp",at="https://franciscobisso.github.io/laurus/assets/rooftop_farm_tablet-fa2YghGo.webp",ot="https://franciscobisso.github.io/laurus/assets/rooftop_farm_desktop-qlmgTUzW.webp",it="https://franciscobisso.github.io/laurus/assets/farming_robot_mobile-iQotHpb3.webp",lt="https://franciscobisso.github.io/laurus/assets/farming_robot_tablet-QmUdewfQ.webp",ct="https://franciscobisso.github.io/laurus/assets/farming_robot_desktop-luGqkq1p.webp",dt="https://franciscobisso.github.io/laurus/assets/products_mobile-b6SD3PHW.webp",pt="https://franciscobisso.github.io/laurus/assets/products_tablet-pwx2ElJX.webp",_t="https://franciscobisso.github.io/laurus/assets/products_desktop-z4j9N69A.webp";function ut(){const e=[{observerHook:g(),img:{mobile:rt,tablet:at,desktop:ot},title:"What we do",txt:"We reinvent urban agriculture by providing a sustainable and efficient way to deliver hyper-local, nutritious and affordable food to people in cities."},{observerHook:g(),img:{mobile:it,tablet:lt,desktop:ct},title:"How we do it",txt:"Our automated inflatable farms, designed to utilize idle spaces in cities, enable cultivation regardless of the season and weather."},{observerHook:g(),img:{mobile:dt,tablet:pt,desktop:_t},title:"What we achieve",txt:"Our farms can provide fresh and premium food at affordable prices to anyone, regardless of where they live or how much they earn."}];return r.jsxs("section",{className:_.purpose_section,tabIndex:0,children:[r.jsx("div",{className:_.filter}),r.jsx("div",{className:_.frame,children:e==null?void 0:e.map((t,n)=>r.jsx("img",{loading:"lazy",width:"100%",height:"100%",className:`${_.img} ${t.observerHook.inView?_.show:_.hide}`,src:t.img.desktop,sizes:"(orientation: landscape) 50vw, 100vw",srcSet:`${t.img.mobile} 768w, ${t.img.tablet} 1024w, ${t.img.desktop} `,alt:"rooftop farm"},n))}),r.jsx("div",{className:_.wrapper,children:e==null?void 0:e.map((t,n)=>r.jsxs("article",{className:_.card,children:[r.jsx("div",{ref:t.observerHook.ref,className:_.invisible_ref}),r.jsxs("div",{className:`${_.card_txt_wrapper} ${t.observerHook.inView?_.show:_.hide}`,children:[r.jsx("h2",{className:_.card_title,children:t.title}),r.jsx("p",{className:_.card_txt,children:t.txt})]})]},n))}),r.jsx("div",{className:_.stepper,children:e==null?void 0:e.map((t,n)=>r.jsx("span",{className:`${_.step} ${t.observerHook.inView?_.bright:_.opaque}`},n))})]})}const ht="_hide_1kxe1_1",mt="_show_1kxe1_7",gt="_video_section_1kxe1_13",ft="_txt_wrapper_1kxe1_26",bt="_txt_1kxe1_26",wt="_video_wrapper_1kxe1_47",yt="_video_1kxe1_13",w={hide:ht,show:mt,video_section:gt,txt_wrapper:ft,txt:bt,video_wrapper:wt,video:yt},vt="https://franciscobisso.github.io/laurus/assets/tower_reel_720-aT-6kYqC.webm",xt="https://franciscobisso.github.io/laurus/assets/short_demo_720--Auq0-ik.webm",Ct="https://franciscobisso.github.io/laurus/assets/short_demo_1080-I-KDiNSA.webm",jt="https://franciscobisso.github.io/laurus/assets/tower_closeup_poster-jyy7SXM5.webp";function Nt(){const e=g();return r.jsxs("section",{className:w.video_section,tabIndex:0,children:[r.jsx("div",{className:w.txt_wrapper,children:r.jsx("p",{ref:e.ref,className:w.txt,children:"480,000 plants per year, in less space than a tennis court"})}),r.jsx("div",{className:`${w.video_wrapper} ${e.inView?w.show:w.hide}`,children:r.jsxs("video",{loading:"lazy",className:`${w.video} ${e.inView?w.show:w.hide}`,poster:jt,playsInline:!0,loop:!0,autoPlay:!0,muted:!0,children:[r.jsx("source",{src:vt,media:"(orientation: portrait) and (width < 700px)",type:"video/webm"}),r.jsx("source",{src:xt,media:"(orientation: landscape) and (width < 1000px)",type:"video/webm"}),r.jsx("source",{src:Ct,type:"video/webm"})]})})]})}const kt="_section_1baw9_1",$t="_img_wrapper_1baw9_9",Et="_bg_img_1baw9_13",St="_container_1baw9_17",Ot="_articles_wrapper_1baw9_22",Pt="_article_1baw9_22",Lt="_invisible_ref_1baw9_44",Tt="_frame_1baw9_50",It="_one_arch_img_1baw9_61",Rt="_two_archs_img_1baw9_65",Vt="_three_archs_img_1baw9_69",zt="_full_archs_img_1baw9_73",Mt="_title_1baw9_77",Ht="_dark_green_1baw9_86",Dt="_green_1baw9_90",qt="_light_green_1baw9_94",At="_strong_1baw9_98",Bt="_stepper_1baw9_103",Ut="_step_1baw9_103",Wt="_bright_1baw9_119",Zt="_opaque_1baw9_124",Ft="_hide_1baw9_129",Yt="_show_1baw9_135",a={section:kt,img_wrapper:$t,bg_img:Et,container:St,articles_wrapper:Ot,article:Pt,invisible_ref:Lt,frame:Tt,one_arch_img:It,two_archs_img:Rt,three_archs_img:Vt,full_archs_img:zt,title:Mt,dark_green:Ht,green:Dt,light_green:qt,strong:At,stepper:Bt,step:Ut,bright:Wt,opaque:Zt,hide:Ft,show:Yt},Qt="https://franciscobisso.github.io/laurus/assets/bgless_arch_400-Zu4NwVAx.webp",Gt="https://franciscobisso.github.io/laurus/assets/bgless_two_archs_400-I-qZjVr5.webp",Xt="https://franciscobisso.github.io/laurus/assets/bgless_three_archs_400-sSTGJnpI.webp",Jt="https://franciscobisso.github.io/laurus/assets/bgless_full_archs_400-bLc_8SMd.webp",Kt="https://franciscobisso.github.io/laurus/assets/rooftop_shopping_mobile-aawO0IwO.webp",te="https://franciscobisso.github.io/laurus/assets/rooftop_shopping_desktop-TLpEMaoN.webp";function en(){const e=g(),t=g(),n=g(),s=g();return r.jsxs("section",{className:a.section,tabIndex:0,children:[r.jsxs("div",{className:a.container,children:[r.jsxs("div",{className:a.articles_wrapper,children:[r.jsxs("article",{className:`${a.article} ${e.inView?a.show:a.hide}`,children:[r.jsx("div",{ref:e.ref,className:a.invisible_ref}),r.jsx("div",{className:a.frame,children:r.jsx("img",{loading:"lazy",width:"100%",className:a.one_arch_img,src:Qt,alt:"logo's small arch"})}),r.jsxs("h2",{className:a.title,children:["A"," ",r.jsx("span",{className:`${a.dark_green} ${a.strong}`,children:"new paradigm"})," ","in the production and distribution of food"]})]}),r.jsxs("article",{className:`${a.article} ${t.inView?a.show:a.hide}`,children:[r.jsx("div",{ref:t.ref,className:a.invisible_ref}),r.jsx("div",{className:a.frame,children:r.jsx("img",{loading:"lazy",width:"100%",className:a.two_archs_img,src:Gt,alt:"logo's medium arch"})}),r.jsxs("h2",{className:a.title,children:["The"," ",r.jsx("span",{className:`${a.green} ${a.strong}`,children:"necessary innovation"})," ","to address environmental issues"]})]}),r.jsxs("article",{className:`${a.article} ${n.inView?a.show:a.hide}`,children:[r.jsx("div",{ref:n.ref,className:a.invisible_ref}),r.jsx("div",{className:a.frame,children:r.jsx("img",{loading:"lazy",width:"100%",className:a.three_archs_img,src:Xt,alt:"logo's big arch arch"})}),r.jsxs("h2",{className:a.title,children:["Close to people, providing"," ",r.jsx("span",{className:`${a.light_green} ${a.strong}`,children:"accessible"}),","," ",r.jsx("span",{className:`${a.light_green} ${a.strong}`,children:"fresh"})," ","and"," ",r.jsx("span",{className:`${a.light_green} ${a.strong}`,children:"ready"})," ","to consume food"]})]}),r.jsxs("article",{className:`${a.article} ${s.inView?a.show:a.hide}`,children:[r.jsx("div",{ref:s.ref,className:a.invisible_ref}),r.jsx("div",{className:a.frame,children:r.jsx("img",{loading:"lazy",width:"100%",className:a.full_archs_img,src:Jt,alt:"full logo with all it's archs"})}),r.jsxs("h2",{className:a.title,children:["Born to set a"," ",r.jsx("span",{className:a.strong,children:"new standard"})," ","in the food system"]})]})]}),r.jsxs("div",{className:a.stepper,children:[r.jsx("span",{className:`${a.step} ${e.inView?a.bright:a.opaque}`}),r.jsx("span",{className:`${a.step} ${t.inView?a.bright:a.opaque}`}),r.jsx("span",{className:`${a.step} ${n.inView?a.bright:a.opaque}`}),r.jsx("span",{className:`${a.step} ${s.inView?a.bright:a.opaque}`})]})]}),r.jsx("div",{className:a.img_wrapper,children:r.jsx("img",{loading:"lazy",width:"100%",height:"100%",className:`${a.bg_img} ${e.inView||t.inView||n.inView||s.inView?a.show:a.hide}`,src:te,sizes:"50vw",srcSet:`${Kt} 767w, ${te} `,alt:"farms in a shopping's rooftop"})})]})}const tn="_contact_section_xiez7_1",nn="_card_wrapper_xiez7_13",sn="_contact_card_xiez7_20",rn="_card_header_xiez7_30",an="_card_text_xiez7_39",on="_calendly_btn_xiez7_46",ln="_img_wrapper_xiez7_63",cn="_bg_img_xiez7_67",dn="_hide_xiez7_71",pn="_show_xiez7_77",m={contact_section:tn,card_wrapper:nn,contact_card:sn,card_header:rn,card_text:an,calendly_btn:on,img_wrapper:ln,bg_img:cn,hide:dn,show:pn};var q=function(e,t){return q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,s){n.__proto__=s}||function(n,s){for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])},q(e,t)};function P(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");q(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var O=function(){return O=Object.assign||function(t){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},O.apply(this,arguments)};function _n(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var un=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;_n(un);function H(e){return e.charAt(0)==="#"?e.slice(1):e}function hn(e){return e!=null&&e.primaryColor&&(e.primaryColor=H(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=H(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=H(e.backgroundColor)),e}var ne;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"})(ne||(ne={}));var ie=function(e){var t=e.url,n=e.prefill,s=n===void 0?{}:n,o=e.pageSettings,l=o===void 0?{}:o,p=e.utm,c=p===void 0?{}:p,d=e.embedType,u=hn(l),f=u.backgroundColor,x=u.hideEventTypeDetails,z=u.hideLandingPageDetails,C=u.primaryColor,j=u.textColor,L=u.hideGdprBanner,N=s.customAnswers,k=s.date,h=s.email,b=s.firstName,E=s.guests,$=s.lastName,A=s.location,B=s.smsReminderNumber,U=s.name,W=c.utmCampaign,Z=c.utmContent,F=c.utmMedium,Y=c.utmSource,Q=c.utmTerm,G=c.salesforce_uuid,M=t.indexOf("?"),X=M>-1,ge=t.slice(M+1),fe=X?t.slice(0,M):t,be=[X?ge:null,f?"background_color=".concat(f):null,x?"hide_event_type_details=1":null,z?"hide_landing_page_details=1":null,C?"primary_color=".concat(C):null,j?"text_color=".concat(j):null,L?"hide_gdpr_banner=1":null,U?"name=".concat(encodeURIComponent(U)):null,B?"phone_number=".concat(encodeURIComponent(B)):null,A?"location=".concat(encodeURIComponent(A)):null,b?"first_name=".concat(encodeURIComponent(b)):null,$?"last_name=".concat(encodeURIComponent($)):null,E?"guests=".concat(E.map(encodeURIComponent).join(",")):null,h?"email=".concat(encodeURIComponent(h)):null,k&&k instanceof Date?"date=".concat(mn(k)):null,W?"utm_campaign=".concat(encodeURIComponent(W)):null,Z?"utm_content=".concat(encodeURIComponent(Z)):null,F?"utm_medium=".concat(encodeURIComponent(F)):null,Y?"utm_source=".concat(encodeURIComponent(Y)):null,Q?"utm_term=".concat(encodeURIComponent(Q)):null,G?"salesforce_uuid=".concat(encodeURIComponent(G)):null,d?"embed_type=".concat(d):null,"embed_domain=1"].concat(N?fn(N):[]).filter(function(we){return we!==null}).join("&");return"".concat(fe,"?").concat(be)},mn=function(e){var t=e.getMonth()+1,n=e.getDate(),s=e.getFullYear();return[s,t<10?"0".concat(t):t,n<10?"0".concat(n):n].join("-")},gn=/^a\d{1,2}$/,fn=function(e){var t=Object.keys(e).filter(function(n){return n.match(gn)});return t.length?t.map(function(n){return"".concat(n,"=").concat(encodeURIComponent(e[n]))}):[]},le=function(e){P(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return i.createElement("div",{className:"calendly-spinner"},i.createElement("div",{className:"calendly-bounce1"}),i.createElement("div",{className:"calendly-bounce2"}),i.createElement("div",{className:"calendly-bounce3"}))},t}(i.Component),bn={minWidth:"320px",height:"630px"};(function(e){P(t,e);function t(n){var s=e.call(this,n)||this;return s.state={isLoading:!0},s.onLoad=s.onLoad.bind(s),s}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var n=ie({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),s=this.props.LoadingSpinner||le;return i.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||bn},this.state.isLoading&&i.createElement(s,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},t})(i.Component);var wn=function(e){P(t,e);function t(n){var s=e.call(this,n)||this;return s.state={isLoading:!0},s.onLoad=s.onLoad.bind(s),s}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var n=ie({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"}),s=this.props.LoadingSpinner||le;return i.createElement(i.Fragment,null,this.state.isLoading&&i.createElement(s,null),i.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},t}(i.Component),ce=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return ye.createPortal(i.createElement("div",{className:"calendly-overlay"},i.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),i.createElement("div",{className:"calendly-popup"},i.createElement("div",{className:"calendly-popup-content"},i.createElement(wn,O({},e)))),i.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)},yn=function(e){P(t,e);function t(n){var s=e.call(this,n)||this;return s.state={isOpen:!1},s.onClick=s.onClick.bind(s),s.onClose=s.onClose.bind(s),s}return t.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return i.createElement(i.Fragment,null,i.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),i.createElement(ce,O({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(i.Component);(function(e){P(t,e);function t(n){var s=e.call(this,n)||this;return s.state={isOpen:!1},s.onClick=s.onClick.bind(s),s.onClose=s.onClose.bind(s),s}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return i.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},i.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&i.createElement("span",null,"powered by Calendly")),i.createElement(ce,O({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(i.Component);const vn="https://franciscobisso.github.io/laurus/assets/seedling_tray_mobile-EgXXnv4n.webp",xn="https://franciscobisso.github.io/laurus/assets/seedling_tray_tablet-1mpLfV7D.webp",se="https://franciscobisso.github.io/laurus/assets/seedling_tray_desktop-L03RHI1L.webp";function Cn(){const e=g();return r.jsxs("section",{className:m.contact_section,tabIndex:0,children:[r.jsx("div",{className:m.card_wrapper,children:r.jsxs("article",{className:m.contact_card,children:[r.jsx("h1",{className:m.card_header,children:"Let's pioneer the future of agriculture, together"}),r.jsx("p",{ref:e.ref,className:m.card_text,children:"Join us today and create a future where fresh food is accessible to all, regardless of where they live or how much they make."}),r.jsx(yn,{className:m.calendly_btn,url:"https://calendly.com/nicobisso/intro-call",rootElement:document.getElementById("root"),text:"Schedule a call!"})]})}),r.jsx("div",{className:m.img_wrapper,children:r.jsx("img",{loading:"lazy",width:"100%",height:"100%",className:`${m.bg_img} ${e.inView?m.show:m.hide}`,src:se,sizes:"50vw",srcSet:`${vn} 768w, ${xn} 1024w, ${se} `,alt:"a farm's seedling tray"})})]})}const jn="_footer_1q7yl_1",Nn="_footer_wrapper_1q7yl_15",kn="_link_wrapper_1q7yl_24",$n="_link_1q7yl_24",En="_link_icon_1q7yl_39",Sn="_txt_1q7yl_53",S={footer:jn,footer_wrapper:Nn,link_wrapper:kn,link:$n,link_icon:En,"scale-up":"_scale-up_1q7yl_1",txt:Sn};var de={exports:{}},On="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Pn=On,Ln=Pn;function pe(){}function _e(){}_e.resetWarningCache=pe;var Tn=function(){function e(s,o,l,p,c,d){if(d!==Ln){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:_e,resetWarningCache:pe};return n.PropTypes=n,n};de.exports=Tn();var In=de.exports;const re=ve(In);var ue={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ae=v.createContext&&v.createContext(ue),Rn=["attr","size","title"];function Vn(e,t){if(e==null)return{};var n=zn(e,t),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)s=l[o],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function zn(e,t){if(e==null)return{};var n={},s=Object.keys(e),o,l;for(l=0;l<s.length;l++)o=s[l],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},I.apply(this,arguments)}function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,s)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oe(Object(n),!0).forEach(function(s){Mn(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function Mn(e,t,n){return t=Hn(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hn(e){var t=Dn(e,"string");return typeof t=="symbol"?t:String(t)}function Dn(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function he(e){return e&&e.map((t,n)=>v.createElement(t.tag,R({key:n},t.attr),he(t.child)))}function V(e){return t=>v.createElement(qn,I({attr:R({},e.attr)},t),he(e.child))}function qn(e){var t=n=>{var{attr:s,size:o,title:l}=e,p=Vn(e,Rn),c=o||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),v.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,p,{className:d,style:R(R({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&v.createElement("title",null,l),e.children)};return ae!==void 0?v.createElement(ae.Consumer,null,n=>t(n)):t(ue)}function An(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"},child:[]}]})(e)}function Bn(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"},child:[]}]})(e)}function Un(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001 9.55005C12.9181 8.61327 14.1121 8 15.501 8C18.5385 8 21.001 10.4624 21.001 13.5V21H19.001V13.5C19.001 11.567 17.434 10 15.501 10C13.568 10 12.001 11.567 12.001 13.5V21H10.001V8.5H12.001V9.55005ZM5.00098 6.5C4.17255 6.5 3.50098 5.82843 3.50098 5C3.50098 4.17157 4.17255 3.5 5.00098 3.5C5.8294 3.5 6.50098 4.17157 6.50098 5C6.50098 5.82843 5.8294 6.5 5.00098 6.5ZM4.00098 8.5H6.00098V21H4.00098V8.5Z"},child:[]}]})(e)}function Wn(e){return V({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"},child:[]}]})(e)}function me({props:e}){var t,n,s,o,l,p,c,d,u;return r.jsx(r.Fragment,{children:r.jsxs("nav",{className:(t=e==null?void 0:e.styles)==null?void 0:t.link_wrapper,children:[r.jsx("a",{className:(n=e==null?void 0:e.styles)==null?void 0:n.link,"aria-label":"x",href:"http://twitter.com/laurusag",target:"_blank",rel:"noopener noreferrer",children:r.jsx(Wn,{className:(s=e==null?void 0:e.styles)==null?void 0:s.link_icon})}),r.jsx("a",{className:(o=e==null?void 0:e.styles)==null?void 0:o.link,"aria-label":"email",href:"mailto:nicolas@laurusag.tech",target:"_blank",rel:"noopener noreferrer",children:r.jsx(An,{className:(l=e==null?void 0:e.styles)==null?void 0:l.link_icon})}),r.jsx("a",{className:(p=e==null?void 0:e.styles)==null?void 0:p.link,"aria-label":"instagram",href:"http://instagram.com/laurus.ag",target:"_blank",rel:"noopener noreferrer",children:r.jsx(Bn,{className:(c=e==null?void 0:e.styles)==null?void 0:c.link_icon})}),r.jsx("a",{className:(d=e==null?void 0:e.styles)==null?void 0:d.link,"aria-label":"linkedin",href:"https://www.linkedin.com/company/laurus-ag/",target:"_blank",rel:"noopener noreferrer",children:r.jsx(Un,{className:(u=e==null?void 0:e.styles)==null?void 0:u.link_icon})})]})})}me.propTypes={props:re.object,styles:re.object};function Zn(){return r.jsx("section",{className:S.footer,tabIndex:0,children:r.jsxs("div",{className:S.footer_wrapper,children:[r.jsx(me,{props:{styles:S}}),r.jsx("span",{className:S.txt,children:"San Martín, 750, Buenos Aires, CABA 1004"}),r.jsx("span",{className:S.txt,children:"Copyright © 2024 LA Tech S.A."})]})})}function Yn(){return r.jsxs("div",{className:Ce.home_wrapper,children:[r.jsx(qe,{}),r.jsx(ut,{}),r.jsx(Nt,{}),r.jsx(en,{}),r.jsx(Cn,{}),r.jsx(Zn,{})]})}export{Yn as default};
