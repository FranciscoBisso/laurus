import{u as i,j as s}from"./index-9KqSUdPA.js";const a="_hide_13sr2_1",_="_show_13sr2_7",c="_purpose_section_13sr2_13",l="_wrapper_13sr2_22",n="_frame_13sr2_35",d="_filter_13sr2_44",p="_img_13sr2_58",m="_card_13sr2_69",b="_invisible_ref_13sr2_80",f="_card_txt_wrapper_13sr2_85",w="_card_title_13sr2_94",h="_card_txt_13sr2_85",e={hide:a,show:_,purpose_section:c,wrapper:l,frame:n,filter:d,img:p,card:m,invisible_ref:b,card_txt_wrapper:f,card_title:w,card_txt:h},g="/assets/rooftop_farm_mobile-0D3vBQL5.webp",u="/assets/rooftop_farm_tablet-fa2YghGo.webp",x="/assets/rooftop_farm_desktop-qlmgTUzW.webp",v="/assets/farming_robot_mobile-iQotHpb3.webp",k="/assets/farming_robot_tablet-QmUdewfQ.webp",j="/assets/farming_robot_desktop-luGqkq1p.webp",N="/assets/products_mobile-b6SD3PHW.webp",H="/assets/products_tablet-pwx2ElJX.webp",y="/assets/products_desktop-z4j9N69A.webp";function z(){const o=[{observerHook:i(),img:{mobile:g,tablet:u,desktop:x},title:"What we do",txt:"We reinvent urban agriculture by providing a sustainable and efficient way to deliver hyper-local, nutritious and affordable food to people in cities."},{observerHook:i(),img:{mobile:v,tablet:k,desktop:j},title:"How we do it",txt:"Our automated inflatable farms, designed to utilize idle spaces in cities, enable cultivation regardless of the season and weather."},{observerHook:i(),img:{mobile:N,tablet:H,desktop:y},title:"What we achieve",txt:"Our farms can provide fresh and premium food at affordable prices to anyone, regardless of where they live or how much they earn."}];return s.jsxs("section",{className:e.purpose_section,tabIndex:0,children:[s.jsx("div",{className:e.filter}),s.jsxs("div",{className:e.wrapper,children:[s.jsx("div",{className:e.frame,children:o==null?void 0:o.map((t,r)=>s.jsx("img",{loading:"lazy",width:"100%",height:"100%",className:`${e.img} ${t.observerHook.inView?e.show:e.hide}`,src:t.img.desktop,sizes:"(orientation: landscape) 50vw, 100vw",srcSet:`${t.img.mobile} 768w, ${t.img.tablet} 1024w, ${t.img.desktop} `,alt:"rooftop farm"},r))}),o==null?void 0:o.map((t,r)=>s.jsxs("article",{className:e.card,children:[s.jsx("div",{ref:t.observerHook.ref,className:e.invisible_ref}),s.jsxs("div",{className:`${e.card_txt_wrapper} ${t.observerHook.inView?e.show:e.hide}`,children:[s.jsx("h2",{className:e.card_title,children:t.title}),s.jsx("p",{className:e.card_txt,children:t.txt})]})]},r))]})]})}export{z as default};
