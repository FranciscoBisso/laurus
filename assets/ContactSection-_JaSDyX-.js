import{r as a,b as H,j as r}from"./index-z02Pcyx9.js";import{u as Q}from"./index-uiYLJi_m.js";const J="_contact_section_5ohgi_1",K="_card_wrapper_5ohgi_13",Z="_contact_card_5ohgi_20",ee="_card_header_5ohgi_30",ne="_card_text_5ohgi_39",te="_calendly_btn_5ohgi_46",oe="_img_wrapper_5ohgi_63",ae="_bg_img_5ohgi_67",le="_hide_5ohgi_71",ie="_show_5ohgi_77",i={contact_section:J,card_wrapper:K,contact_card:Z,card_header:ee,card_text:ne,calendly_btn:te,img_wrapper:oe,bg_img:ae,hide:le,show:ie};var f=function(e,t){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(o[l]=n[l])},f(e,t)};function u(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");f(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var p=function(){return p=Object.assign||function(t){for(var o,n=1,l=arguments.length;n<l;n++){o=arguments[n];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(t[d]=o[d])}return t},p.apply(this,arguments)};function re(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var se=`/*
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
}`;re(se);function g(e){return e.charAt(0)==="#"?e.slice(1):e}function ce(e){return e!=null&&e.primaryColor&&(e.primaryColor=g(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=g(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=g(e.backgroundColor)),e}var z;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"})(z||(z={}));var A=function(e){var t=e.url,o=e.prefill,n=o===void 0?{}:o,l=e.pageSettings,d=l===void 0?{}:l,y=e.utm,s=y===void 0?{}:y,_=e.embedType,c=ce(d),b=c.backgroundColor,V=c.hideEventTypeDetails,W=c.hideLandingPageDetails,v=c.primaryColor,w=c.textColor,Y=c.hideGdprBanner,x=n.customAnswers,m=n.date,C=n.email,E=n.firstName,k=n.guests,S=n.lastName,N=n.location,L=n.smsReminderNumber,I=n.name,T=s.utmCampaign,P=s.utmContent,R=s.utmMedium,j=s.utmSource,O=s.utmTerm,U=s.salesforce_uuid,h=t.indexOf("?"),D=h>-1,F=t.slice(h+1),X=D?t.slice(0,h):t,G=[D?F:null,b?"background_color=".concat(b):null,V?"hide_event_type_details=1":null,W?"hide_landing_page_details=1":null,v?"primary_color=".concat(v):null,w?"text_color=".concat(w):null,Y?"hide_gdpr_banner=1":null,I?"name=".concat(encodeURIComponent(I)):null,L?"phone_number=".concat(encodeURIComponent(L)):null,N?"location=".concat(encodeURIComponent(N)):null,E?"first_name=".concat(encodeURIComponent(E)):null,S?"last_name=".concat(encodeURIComponent(S)):null,k?"guests=".concat(k.map(encodeURIComponent).join(",")):null,C?"email=".concat(encodeURIComponent(C)):null,m&&m instanceof Date?"date=".concat(de(m)):null,T?"utm_campaign=".concat(encodeURIComponent(T)):null,P?"utm_content=".concat(encodeURIComponent(P)):null,R?"utm_medium=".concat(encodeURIComponent(R)):null,j?"utm_source=".concat(encodeURIComponent(j)):null,O?"utm_term=".concat(encodeURIComponent(O)):null,U?"salesforce_uuid=".concat(encodeURIComponent(U)):null,_?"embed_type=".concat(_):null,"embed_domain=1"].concat(x?ue(x):[]).filter(function(q){return q!==null}).join("&");return"".concat(X,"?").concat(G)},de=function(e){var t=e.getMonth()+1,o=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,o<10?"0".concat(o):o].join("-")},pe=/^a\d{1,2}$/,ue=function(e){var t=Object.keys(e).filter(function(o){return o.match(pe)});return t.length?t.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(e[o]))}):[]},B=function(e){u(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return a.createElement("div",{className:"calendly-spinner"},a.createElement("div",{className:"calendly-bounce1"}),a.createElement("div",{className:"calendly-bounce2"}),a.createElement("div",{className:"calendly-bounce3"}))},t}(a.Component),me={minWidth:"320px",height:"630px"};(function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=A({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||B;return a.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||me},this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t})(a.Component);var he=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=A({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"}),n=this.props.LoadingSpinner||B;return a.createElement(a.Fragment,null,this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(a.Component),$=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return H.createPortal(a.createElement("div",{className:"calendly-overlay"},a.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),a.createElement("div",{className:"calendly-popup"},a.createElement("div",{className:"calendly-popup-content"},a.createElement(he,p({},e)))),a.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)},ge=function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),a.createElement($,p({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(a.Component);(function(e){u(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},a.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&a.createElement("span",null,"powered by Calendly")),a.createElement($,p({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(a.Component);const fe="https://franciscobisso.github.io/laurus/assets/seedling_tray_mobile-EgXXnv4n.webp",ye="https://franciscobisso.github.io/laurus/assets/seedling_tray_tablet-1mpLfV7D.webp",M="https://franciscobisso.github.io/laurus/assets/seedling_tray_desktop-L03RHI1L.webp";function ve(){const e=Q();return r.jsxs("section",{className:i.contact_section,tabIndex:0,children:[r.jsx("div",{className:i.card_wrapper,children:r.jsxs("article",{className:i.contact_card,children:[r.jsx("h1",{className:i.card_header,children:"Let's pioneer the future of agriculture, together"}),r.jsx("p",{ref:e.ref,className:i.card_text,children:"Join us today and create a future where fresh food is accessible to all, regardless of where they live or how much they make."}),r.jsx(ge,{className:i.calendly_btn,url:"https://calendly.com/nicobisso/intro-call",rootElement:document.getElementById("root"),text:"Schedule a call!"})]})}),r.jsx("div",{className:i.img_wrapper,children:r.jsx("img",{loading:"lazy",width:"100%",height:"100%",className:`${i.bg_img} ${e.inView?i.show:i.hide}`,src:M,sizes:"50vw",srcSet:`${fe} 768w, ${ye} 1024w, ${M} `,alt:"a farm's seedling tray"})})]})}export{ve as default};
