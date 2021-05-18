(this["webpackJsonppersonal-portfolio-v2"]=this["webpackJsonppersonal-portfolio-v2"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var i,a,r=t(2),o=t(21),c=t.n(o),s=t(13),l=t(9),d=t(5),m=t(6),b=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"]))),j=t(1);function p(n){var e=n.heading,t=void 0===e?"Col Heaing":e,i=n.links,a=void 0===i?[{type:"Links",title:"Home",link:"/home"},{type:"Links",title:"About",link:"/about"}]:i;return Object(j.jsxs)(b,{children:[Object(j.jsx)("h2",{className:"heading",children:t}),Object(j.jsx)("ul",{children:a.map((function(n,e){return Object(j.jsx)("li",{children:"Link"===n.type?Object(j.jsx)(s.b,{to:n.link,children:n.title}):Object(j.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var h,x=m.b.div(a||(a=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function g(n){var e=n.children;return Object(j.jsx)(x,{className:"para",children:Object(j.jsx)("p",{children:e})})}var u=m.b.div(h||(h=Object(d.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(j.jsxs)(u,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"footer__col1",children:[Object(j.jsx)("h1",{className:"footer__col1__title",children:"Diego Sandoval"}),Object(j.jsx)(g,{children:"I am a Full-Stack developer from Sonora, Mexico. I create professional web and desktop applications. I love to find solutions to current problems using the latest technological trends."})]}),Object(j.jsx)("div",{className:"footer__col2",children:Object(j.jsx)(p,{heading:"Important Links",links:[{title:"Home",link:"/",type:"Link"},{type:"Link",title:"About",link:"/about"},{type:"Link",title:"Projects",link:"/projects"},{type:"Link",title:"Contact",link:"/contact"}]})}),Object(j.jsx)("div",{className:"footer__col3",children:Object(j.jsx)(p,{heading:"Contact Info",links:[{title:"(+52) 638-384-1821",link:"tel:+88012312"},{title:"diegosandovalr.corp@gmail.com",link:"mailto:diegosandovalr.corp@gmail.com"},{title:"Rocky Point, Sonora, Mexico",link:"http://google.com/maps"}]})}),Object(j.jsx)("div",{className:"footer__col4",children:Object(j.jsx)(p,{heading:"social Links",links:[{title:"Facebook",link:"http://facebook.com"},{title:"Twitter",link:"http://twitter.com"},{title:"Instagram",link:"http://instagram.com"}]})})]}),Object(j.jsx)("div",{className:"copyright",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(g,{children:"\xa9 2021 - Diego Sandoval"})})})]})}var _,O,v=t(18),w=t(12),y=m.b.nav(_||(_=Object(d.a)(['\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: black;\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: "RobotoMono Regular";\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: black;\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n'])));function k(){var n=Object(r.useState)(!1),e=Object(v.a)(n,2),t=e[0],i=e[1];return Object(j.jsxs)(y,{children:[Object(j.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(w.g,{})}),Object(j.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(j.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(j.jsx)(w.c,{})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}function N(){var n=Object(l.f)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var I=m.b.div(O||(O=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"}));function S(n){var e=n.btnText,t=void 0===e?"test":e,i=n.btnLink,a=void 0===i?"test":i,r=n.outline,o=void 0!==r&&r;return Object(j.jsx)(I,{outline:o,className:"button-wrapper",children:Object(j.jsx)(s.b,{className:"button",to:a,children:t})})}var z,C,B=t.p+"static/media/about-page-img.99cd5116.png",D=m.b.div(z||(z=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function M(n){var e=n.title,t=void 0===e?"Title":e,i=n.items,a=void 0===i?["HTML","CSS"]:i;return Object(j.jsxs)(D,{children:[Object(j.jsx)("h1",{className:"title",children:t}),Object(j.jsx)("div",{className:"items",children:a.map((function(n,e){return Object(j.jsx)("div",{className:"item",children:Object(j.jsx)(g,{children:n})},e)}))})]})}var L,R=m.b.div(C||(C=Object(d.a)(["\n  padding: 5rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"])));function E(){return Object(j.jsx)(R,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(j.jsx)(g,{children:"Have a project in mind"}),Object(j.jsx)("h3",{className:"contactBanner__heading",children:"Let me help you"}),Object(j.jsx)(S,{btnText:"Contact Now",btnLink:"/contact"})]})})})}var T,A=m.b.div(L||(L=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function F(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(A,{children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"top-section",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(j.jsx)("span",{children:"Diego Sandoval"})]}),Object(j.jsx)("h2",{className:"about__heading",children:"A Full-Stack developer"}),Object(j.jsx)("div",{className:"about__info",children:Object(j.jsxs)(g,{children:["I'm from Sonora, Mexico. Graduated with a degree in systems engineering. Since I started my professional journey as a software developer 2 years ago, I've done remote work for agencies, consulting for startups, and I've collaborated with talented people to create digital products for both business and consumer.",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"I am a self-confident, curious by nature, self-taught and always working to improve my skills, learn new technologies, and eager to work with new talented developers.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"I am passionate about finding new ways to solve current needs, using the tools that new technologies provide us to face the new challenges that we face in the future."]})}),Object(j.jsx)(S,{btnText:"Download CV",btnLink:"#"})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:B,alt:"me"})})]}),Object(j.jsxs)("div",{className:"about__info__items",children:[Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Experiences"}),Object(j.jsx)(M,{title:"2020-2021",items:["Full-Stack developer at GOintegro"]}),Object(j.jsx)(M,{title:"2019-2021",items:["Back-End developer at Black Mamba, CORP. "]}),Object(j.jsx)(M,{title:"2019-2020",items:["Full-Stack developer at Gometa, INC. withkoji.com"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"My Skills"}),Object(j.jsx)(M,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT","ELECTRON"]}),Object(j.jsx)(M,{title:"BackEnd",items:["Node","Express","Java","C#","Ruby","C++"]}),Object(j.jsx)(M,{title:"Design",items:["Figma","Rive"]})]}),Object(j.jsxs)("div",{className:"about__info__item",children:[Object(j.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(j.jsx)(M,{title:"University",items:["Higher Technological Institute of Puerto Pe\xf1asco"]}),Object(j.jsx)(M,{title:"High School",items:["COBACH. High School, Puerto Pe\xf1asco"]})]})]})]}),Object(j.jsx)(E,{})]})})}var P,H=m.b.form(T||(T=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function G(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(""),o=Object(v.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)(""),d=Object(v.a)(l,2),m=d[0],b=d[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(H,{children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(j.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"email",children:["Your email",Object(j.jsx)("input",{type:"email",id:"email",name:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsxs)("label",{htmlFor:"message",children:["Your message",Object(j.jsx)("textarea",{type:"text",id:"message",name:"message",value:m,onChange:function(n){return b(n.target.value)}})]})}),Object(j.jsx)("button",{type:"submit",children:"Send"})]})})}var K,W=m.b.div(P||(P=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function J(n){var e=n.icon,t=void 0===e?Object(j.jsx)(w.h,{}):e,i=n.text,a=void 0===i?"I need text ":i;return Object(j.jsxs)(W,{children:[Object(j.jsx)("div",{className:"icon",children:t}),Object(j.jsx)("div",{className:"info",children:Object(j.jsx)(g,{children:a})})]})}var Y,V=m.b.div(K||(K=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function q(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,i=n.heading,a=void 0===i?"need heading":i;return Object(j.jsxs)(V,{className:"section-title",children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("h2",{children:a})]})}var U=m.b.div(Y||(Y=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function Q(){return Object(j.jsx)(U,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{heading:"contact",subheading:"get in touch"}),Object(j.jsxs)("div",{className:"contactSection__wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)(J,{icon:Object(j.jsx)(w.f,{}),text:"(+52) 638-384-1821"}),Object(j.jsx)(J,{icon:Object(j.jsx)(w.e,{}),text:"diegosandovalr.corp@gmail.com"}),Object(j.jsx)(J,{text:"Puerto Pe\xf1asco, Sonora, Mexico"})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)(G,{})})]})]})})}var X,Z=t.p+"static/media/map.7d98ba39.png",$=m.b.div(X||(X=Object(d.a)(["\n  background: url(",") no-repeat;\n  background-position: center;\n  background-size: cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n  }\n  .map__card {\n    position: absolute;\n    right: 10%;\n    bottom: 10%;\n    padding: 2rem;\n    background: var(--deep-dark);\n    width: 100%;\n    max-width: 300px;\n    border-radius: 12px;\n  }\n  .map__card__heading {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  .map__card__link {\n    display: inline-block;\n    font-size: 1.6rem;\n    margin-top: 3rem;\n    text-decoration: underline;\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .map__card {\n      max-width: none;\n      right: auto;\n    }\n  }\n"])),Z);function nn(){return Object(j.jsx)($,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"map__card",children:[Object(j.jsx)("h3",{className:"map__card__heading",children:"Here is me"}),Object(j.jsx)(g,{children:"GEC circle, Chittagong, Bangladesh"}),Object(j.jsx)("a",{className:"map__card__link",href:"https://www.google.com/maps/place/GEC+More,+Chittagong/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486",target:"_blank",rel:"noreferrer",children:"Open in google map"})]})})})}function en(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Q,{}),Object(j.jsx)(nn,{})]})}var tn,an=t.p+"static/media/about-sec-img.99cd5116.png",rn=m.b.div(tn||(tn=Object(d.a)(["\n  padding: 10rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function on(){return Object(j.jsx)(rn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"aboutSection__left",children:[Object(j.jsx)(q,{subheading:"Let me introduce myself",heading:"About Me"}),Object(j.jsx)(g,{children:"I am a Full-Stack developer from Sonora, Mexico. I create professional web and desktop applications. I love to find solutions to current problems using the latest technological trends."}),Object(j.jsxs)("div",{className:"aboutSection__buttons",children:[Object(j.jsx)(S,{btnText:"Works",btnLink:"/projects"}),Object(j.jsx)(S,{btnText:"Read More",btnLink:"/about",outline:!0})]})]}),Object(j.jsx)("div",{className:"aboutSection__right",children:Object(j.jsx)("img",{className:"aboutImg",src:an,alt:"Img"})})]})})}var cn,sn,ln=t(34),dn=t(35),mn=m.b.div(cn||(cn=Object(d.a)(["\ntext-align: center;\n.servicesItem__icon {\n  svg {\n    width: 3rem;\n  }\n}\n.servicesItem__title {\n  font-size: 2.5rem;\n  font-family: 'Montserrat SemiBold';\n}\n.para {\n  margin-top: 2rem;\n}\n"])));function bn(n){var e=n.icon,t=void 0===e?Object(j.jsx)(w.d,{}):e,i=n.title,a=void 0===i?"Web Design":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok":r;return Object(j.jsxs)(mn,{className:"servicesItem",children:[Object(j.jsx)("div",{className:"servicesItem__icon",children:t}),Object(j.jsx)("div",{className:"servicesItem__title",children:a}),Object(j.jsx)(g,{children:o})]})}var jn=m.b.div(sn||(sn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function pn(){return Object(j.jsx)(jn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{subheading:"What i will do for you",heading:"Services"}),Object(j.jsxs)("div",{className:"services__allItems",children:[Object(j.jsx)(bn,{icon:Object(j.jsx)(ln.a,{}),title:"Web Design",desc:"I do ui/ux design for the website that helps website to get a unique look."}),Object(j.jsx)(bn,{icon:Object(j.jsx)(dn.a,{}),title:"Web Application Dev",desc:"I create high performance web applications to generate an optimal user experience."}),Object(j.jsx)(bn,{icon:Object(j.jsx)(w.d,{}),title:"Desktop application Dev",desc:"I develop desktop applications seeking to create solutions that facilitate the daily work of companies and individuals. "})]})]})})}var hn,xn=t(57),gn=t(54),un=t(56),fn=t(53),_n=t.p+"static/media/projectImg.771236e1.png",On=m.b.div(hn||(hn=Object(d.a)(["\n.projectItem__img {\n  width: 100%;\n  height: 400px;\n  border-radius: 12px;\n  overflow: hidden;\n  display: inline-block;\n  border: 3px solid var(--gray-2);\n  img {\n    height: 100%;\n  }\n}\n.projectItem__info {\n  margin-top: 1rem;\n  background-color: var(--deep-dark);\n  padding: 1rem;\n  border-radius: 12px;\n}\n.projectItem__title {\n  font-size: 2.2rem;\n}\n.projectItem__desc {\n  font-size: 1.6rem;\n  font-family: 'RobotoMono Regular';\n  margin-top: 1rem;\n}\n@media only screen and (max-width: 768px) {\n  .projectItem__img {\n    height: 350px;\n  }\n}\n"])));function vn(n){var e=n.img,t=void 0===e?_n:e,i=n.title,a=void 0===i?"Project Name":i,r=n.desc,o=void 0===r?"Lorem Ipsum is simply dummy text of the printing and typesetting industry.":r;return Object(j.jsxs)(On,{children:[Object(j.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(j.jsx)("img",{src:t,alt:"project img"})}),Object(j.jsxs)("div",{className:"projectItem__info",children:[Object(j.jsx)(s.b,{to:"#",children:Object(j.jsx)("h3",{className:"projectItem__title",children:a})}),Object(j.jsx)("p",{className:"projectItem__desc",children:o})]})]})}t(48);var wn,yn=t(58),kn=t.p+"static/media/utracker.be1fe64a.jpg",Nn=t.p+"static/media/greenctg.e51b3bbd.jpg",In=t.p+"static/media/cointracker.8da9e0cd.jpg",Sn=t.p+"static/media/cavinimg.77adeaa3.jpg",zn=[{id:Object(yn.a)(),name:"U Tracker",desc:"An application to track your all data from one place. I developed the website and the mobile app",img:kn},{id:Object(yn.a)(),name:"Green CTG",desc:"An app to help people to get an overview of how they can make the city beautiful.",img:Nn},{id:Object(yn.a)(),name:"Coin Tracker",desc:"Using this app you can track any e coin. Also you will get a good advise about investment form the professional",img:In},{id:Object(yn.a)(),name:"Cavin's Portfolio",desc:"A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",img:Sn},{id:Object(yn.a)(),name:"Tracking Soft",desc:"A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",img:_n}],Cn=m.b.div(wn||(wn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Bn(){return Object(j.jsx)(Cn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{subheading:"some of my recent works",heading:"Projects"}),Object(j.jsx)("div",{className:"projects__allItems",children:Object(j.jsx)(xn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:zn.map((function(n){return Object(j.jsx)(gn.a,{children:Object(j.jsx)(vn,{title:n.name,img:n.img,desc:n.desc})},n.id)}))})})]})})}un.a.use([fn.a]);var Dn,Mn=t(55),Ln=t(59),Rn=[{id:1,name:"Shaif Arfan",title:"CEO",org:"WEB CIFAR",desc:"Ayan is a person of commitment. He is really good at what he is doing. I really like his work. Especially the unique point of view of designing."},{id:2,name:"Fahim Elahe",title:"Co-founder",org:"Kreetive",desc:"Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work."},{id:3,name:"Sayed",title:"Marketing Head",org:"Eleven Dawn",desc:"Really hard-working person. Deliver the work as promised. Planning to work more with this person."}],En=m.b.div(Dn||(Dn=Object(d.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* gap: 1rem; */\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function Tn(){var n=Object(r.useState)(0),e=Object(v.a)(n,2),t=e[0],i=e[1],a=Rn[t];function o(){i(t>=Rn.length-1?0:function(n){return n+1})}function c(){i(0===t?Rn.length-1:function(n){return n-1})}return Object(j.jsx)(En,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{subheading:"see what our clients say about us",heading:"Testimonials"}),Object(j.jsx)("div",{className:"testimonial__wrapper",children:Object(j.jsx)(Mn.a,{component:null,children:Object(j.jsx)(Ln.a,{timeout:300,classNames:"fade",children:Object(j.jsxs)("div",{className:"testimonial__info",children:[Object(j.jsx)("div",{className:"testimonial__desc",children:Object(j.jsx)(g,{children:a.desc})}),Object(j.jsx)("h2",{className:"testimonial__name",children:a.name}),Object(j.jsxs)("p",{className:"testimonial__title",children:[a.title,", ",Object(j.jsx)("br",{})," ",a.org]})]})},a.id)})}),Object(j.jsxs)("div",{className:"arrows",children:[Object(j.jsx)("div",{className:"prev",onClick:c,role:"button",tabIndex:0,onKeyDown:c,children:Object(j.jsx)(w.a,{})}),Object(j.jsx)("div",{className:"next",onClick:o,role:"button",tabIndex:0,onKeyDown:o,children:Object(j.jsx)(w.b,{})})]})]})})}var An,Fn,Pn=t.p+"static/media/hero.99cd5116.png",Hn=t.p+"static/media/social-media-arrow.f5e093ce.svg",Gn=t.p+"static/media/scroll-down-arrow.b013ca45.svg",Kn=m.b.div(An||(An=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n  .hero__info {\n    margin-top: -18rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero__img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 3rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: -15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function Wn(){return Object(j.jsx)(Kn,{children:Object(j.jsx)("div",{className:"hero",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{className:"hero__heading",children:[Object(j.jsx)("span",{children:"Hello, This is"}),Object(j.jsx)("span",{className:"hero__name",children:"Diego Sandoval"})]}),Object(j.jsx)("div",{className:"hero__img",children:Object(j.jsx)("img",{src:Pn,alt:""})}),Object(j.jsxs)("div",{className:"hero__info",children:[Object(j.jsx)(g,{children:"I have been working as a full-stack developer for 2 years. I love to design and create efficient and quality solutions for today's people."}),Object(j.jsx)(S,{btnText:"see my works",btnLink:"/projects"})]}),Object(j.jsxs)("div",{className:"hero__social",children:[Object(j.jsxs)("div",{className:"hero__social__indicator",children:[Object(j.jsx)("p",{children:"Follow"}),Object(j.jsx)("img",{src:Hn,alt:"icon"})]}),Object(j.jsx)("div",{className:"hero__social__text",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://facebook.com/",target:"_blank",rel:"noreferrer",children:"FB"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://twitter.com/",target:"_blank",rel:"noreferrer",children:"TW"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://isntagram.com/",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"http://google.com",target:"_blank",rel:"noreferrer",children:"LI"})})]})})]}),Object(j.jsxs)("div",{className:"hero__scrollDown",children:[Object(j.jsx)("p",{children:"Scroll"}),Object(j.jsx)("img",{src:Gn,alt:"ScrollDown Arrow"})]})]})})})}function Jn(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(Wn,{}),Object(j.jsx)(on,{}),Object(j.jsx)(pn,{}),Object(j.jsx)(Bn,{}),Object(j.jsx)(Tn,{}),Object(j.jsx)(E,{})]})}var Yn,Vn=m.b.div(Fn||(Fn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"])));function qn(){var n=Object(r.useState)(""),e=Object(v.a)(n,2),t=e[0],i=e[1],a=Object(r.useState)(zn),o=Object(v.a)(a,2),c=o[0],s=o[1];Object(r.useEffect)((function(){""!==t&&s((function(){return zn.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Vn,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(q,{heading:"Projects",subheading:"some of my recent works"}),Object(j.jsx)("div",{className:"projects__searchBar",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),i(n.target.value),!n.target.value.length>0&&s(zn)},placeholder:"Project Name"}),Object(j.jsx)(w.i,{className:"searchIcon"})]})}),Object(j.jsx)("div",{className:"projects__allItems",children:c.map((function(n){return Object(j.jsx)(vn,{title:n.name,desc:n.desc,img:n.img},n.id)}))})]})})})}function Un(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(k,{}),Object(j.jsx)(N,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(F,{})}),Object(j.jsx)(l.a,{path:"/contact",children:Object(j.jsx)(en,{})}),Object(j.jsx)(l.a,{path:"/projects",children:Object(j.jsx)(qn,{})}),Object(j.jsx)(l.a,{path:"/",children:Object(j.jsx)(Jn,{})})]}),Object(j.jsx)(f,{})]})})}var Qn,Xn=Object(m.a)(Yn||(Yn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Zn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",$n=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",ne=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",ee=Object(m.a)(Qn||(Qn=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Zn,$n,ne);c.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Xn,{}),Object(j.jsx)(ee,{}),Object(j.jsx)(Un,{})]}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.806ef53b.chunk.js.map