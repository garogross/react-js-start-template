"use strict";(self.webpackChunkkhg_tec_website=self.webpackChunkkhg_tec_website||[]).push([[536],{9369:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(9439),l=n(2791),i={blogItem:"BlogItem_blogItem__jgTIS",blogItem__imgLink:"BlogItem_blogItem__imgLink__0d5bc",blogItem__img:"BlogItem_blogItem__img__epQ1V",displaying:"BlogItem_displaying__vm9uU",blogItem__textBlock:"BlogItem_blogItem__textBlock__uWar3",blogItem__title:"BlogItem_blogItem__title__sVDAA",blogItem__contentText:"BlogItem_blogItem__contentText__oZs-b",blogItem__footBlock:"BlogItem_blogItem__footBlock__ONd0o",blogItem__readMoreLink:"BlogItem_blogItem__readMoreLink__KCejX"},r=n(9023),a=n(7651),c=n(9741),s=n.n(c),d=n(1087),_=n(9459),u=n(2565),g=n(184),m=(0,l.memo)((function(e){var t=e.title,n=e.description,c=e.date,m=e.image,f=e.id,v=e.isDragging,b=(0,l.useState)(!1),p=(0,o.Z)(b,2),I=p[0],h=p[1],x=(0,u.vm)(c),k=function(e){v?e.preventDefault():(0,u.SM)()},B="".concat(_.MP,"/").concat(f);return(0,g.jsxs)("div",{className:i.blogItem,children:[(0,g.jsx)(d.rU,{className:i.blogItem__imgLink,onClick:k,to:B,children:(0,g.jsx)("img",{src:r.FH+m,alt:"blog",className:i.blogItem__img,onLoad:function(){h(!0)},style:{display:I?"block":"none"}})}),!I&&(0,g.jsx)(s(),{animationData:a.z,loop:!0,className:i.blogItem__img}),(0,g.jsxs)("div",{className:i.blogItem__textBlock,children:[(0,g.jsx)("h5",{className:i.blogItem__title,children:t.length>=64?t.slice(0,64)+"...":t}),(0,g.jsx)("p",{className:"".concat(i.blogItem__contentText," contentTextDef"),children:n.length>=150?n.slice(0,150)+"...":n}),(0,g.jsxs)("div",{className:i.blogItem__footBlock,children:[(0,g.jsx)(d.rU,{onClick:k,to:B,className:i.blogItem__readMoreLink,children:"Read More"}),(0,g.jsx)("p",{className:i.blogItem__date,children:x})]})]})]})}))},5536:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var o=n(1413),l=n(9439),i=n(2791),r=n(5717),a=n(9369),c="BlogSlider_blogSlider__p1a7d",s="BlogSlider_blogSlider_smDistance__kYQEG",d="BlogSlider_blogSlider_lgDistance__WmFB-",_="BlogSlider_blogSlider__container__oiyqX",u="BlogSlider_blogSlider__wrapper__rWb-M",g="BlogSlider_blogSlider__item__TBR3i",m=n(6260),f=n(9434),v=n(6029),b=n(1109),p=n(184);var I=function(e){var t=e.smallDistance,n=e.type,I=e.isFromIndBlog,h=e.setIsDataEmpty,x=(0,i.useState)(!1),k=(0,l.Z)(x,2),B=k[0],S=k[1],j=(0,i.useRef)(null),Z=(0,f.I0)(),w=(0,f.v9)((function(e){return e.mainBlog["all"===n?"data":"".concat(n,"Blogs")]})),N=(0,f.v9)((function(e){return e.indBlog})).data,y=(0,i.useState)([]),D=(0,l.Z)(y,2),T=D[0],C=D[1],L=(0,b.l)(null,!0),M=L.isInView,E=L.ref,P={dots:!0,autoplay:!0,autoplaySpeed:3e3,infinite:!0,slidesToShow:3,slidesToScroll:1,swipeToSlide:!0,touchThreshold:1e3,arrows:!1,beforeChange:function(){return S(!0)},afterChange:function(){return S(!1)},customPaging:function(e){return(0,p.jsx)(m.Z,{onClick:function(){return j.current.slickGoTo(e)}})},responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,centerPadding:"0"}}]};(0,i.useEffect)((function(){!n||null!==w&&void 0!==w&&w.length||!M||Z((0,v.L)("all"===n?null:n))}),[n,M]),(0,i.useEffect)((function(){null!==w&&void 0!==w&&w.length&&C(I?w.filter((function(e){return e.id!==N.id})).slice(0,6):w.slice(0,6))}),[w]),(0,i.useEffect)((function(){h&&h(null===T||void 0===T?void 0:T.length)}),[T]);var R=(null===T||void 0===T?void 0:T.length)&&T.map((function(e,t){return(0,p.jsx)("div",{className:g,ref:E,children:(0,p.jsx)(a.Z,{title:null===e||void 0===e?void 0:e.title,description:null===e||void 0===e?void 0:e.description,date:null===e||void 0===e?void 0:e.date,image:null===e||void 0===e?void 0:e.image,id:null===e||void 0===e?void 0:e.id,isDragging:B},null===e||void 0===e?void 0:e.id)},t)}));return(0,p.jsx)("section",{className:"".concat(c," ").concat(t?s:d," container sliderDotesDef"),ref:E,children:(null===T||void 0===T?void 0:T.length)&&(0,p.jsx)("div",{className:_,children:T.length>=3?(0,p.jsx)(r.Z,(0,o.Z)((0,o.Z)({},P),{},{ref:j,children:R})):(0,p.jsx)("div",{className:u,children:R})})})}},6260:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var o="SliderDotes_sliderDot__Lomax",l=n(184);var i=function(e){var t=e.className,n=e.onClick;return(0,l.jsx)("div",{onClick:n,className:"".concat(o," ").concat(t||"")})}},1109:function(e,t,n){n.d(t,{l:function(){return i}});var o=n(9439),l=n(2791),i=function(e,t){var n=(0,l.useState)(!1),i=(0,o.Z)(n,2),r=i[0],a=i[1],c=(0,l.useRef)(null),s=function(e){(0,o.Z)(e,1)[0].isIntersecting&&"boolean"===typeof t&&t&&a(!0)};return(0,l.useEffect)((function(){var t=new IntersectionObserver(s,{root:null,threshold:e||0});c.current&&t.observe(c.current)}),[t]),{isInView:r,ref:c}}},6029:function(e,t,n){n.d(t,{L:function(){return c}});var o=n(4165),l=n(3433),i=n(5861),r=n(6726),a=n(9023),c=function(e,t){return function(){var n=(0,i.Z)((0,o.Z)().mark((function n(i,c){var s,d,_,u,g,m;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=e?"?type=".concat(e):"",d=t?"?page=".concat(t):"",_=c().mainBlog,u=_.data,g=_.currPage,i({type:r.S2}),n.prev=4,n.next=7,(0,a.t5)(a.t0+s+d);case 7:m=n.sent,i({type:r.z8,payload:{data:t?[].concat((0,l.Z)(u),(0,l.Z)(m.data.data)):m.data.data,type:e?e+"Blogs":"data",nextPage:!!m.data.next_page_url,currPage:t?m.data.current_page:g}}),n.next=14;break;case 11:throw n.prev=11,n.t0=n.catch(4),new Error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[4,11]])})));return function(e,t){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=536.3fc15427.chunk.js.map