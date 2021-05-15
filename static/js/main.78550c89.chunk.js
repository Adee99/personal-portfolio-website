(this["webpackJsonpmy-website"]=this["webpackJsonpmy-website"]||[]).push([[0],{381:function(n,e,t){"use strict";t.r(e);var i,r=t(0),o=t.n(r),a=t(42),c=t.n(a),s=t(30),l=t(6),d=t(51),b=t(13),m=t(7),j=t.p+"static/media/profilePic.8cb38423.png",h=t(1);var p,g=m.b.div(i||(i=Object(l.a)(['\n    justify-content:space-between;\n    flex-direction:column;\n    align-items:center;\n    height:100%;\n    width:100%;\n    display:flex;\n    border-right: 4px solid var(--border-color);\n\n    .profilePic{\n        width:100%;\n        border-bottom : 2px solid var(--border-color);\n        padding-bottom : 0.2rem;\n        text-align : center;\n        padding: 1rem 0;\n        /* image */\n        img{\n            width:70%;\n            border-radius:50%;\n            border: 4px solid var(--border-color);\n            \n        }\n    }\n\n    .nav-items{\n        width:100%;\n        text-align:center;\n\n        /* active class color */\n\n        .active-class{\n            background-color:#2c3436;\n        }\n\n\n        li{\n            display:block;\n            a{\n                display: block;\n                position:relative;\n                padding:.4rem 0;\n                z-index:3;\n                font-weight:500;\n                transition: all 0.4s ease-in-out;\n                letter-spacing:1px;\n                \n                \n\n                &:hover{\n                    cursor: grab;\n                    \n                }\n                /* anchor tag effects */\n                /* handle hover effects, color, animations */\n                &::before{\n                    content:"";\n                    position:absolute;\n                    bottom:0;\n                    left:0;\n                    width: 0;\n                    height: 50%;\n                    /* hovercolor */\n                    background-color:#4f97d6;\n                    /* cubic - bezier to hover effect animations */\n                    transition: All 0.5s  cubic-bezier(.55,.84,1,.06);\n                    z-index:4;\n                    opacity:0.2;\n\n                }\n            \n            } \n            \n            a:hover::before{\n                width: 100%;\n                height:100%;\n            }\n          \n        }\n    }\n\n    .footer{\n        width:100%;\n        border-top:1px solid var(--border-color);\n        p{\n            display:block;\n            padding:1rem 0;\n            text-align:center;\n            font-size:0.75rem;\n\n        }\n    }\n']))),x=function(){return Object(h.jsxs)(g,{children:[Object(h.jsx)("div",{className:"profilePic",children:Object(h.jsx)("img",{src:j,alt:"DeveloperImage"})}),Object(h.jsxs)("ul",{className:"nav-items",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{to:"/work",activeClassName:"active-class",exact:!0,children:"Work"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("p",{children:"\xa92021 Developed by Adeepa Jayawardana"})})]})};var u=m.b.div(p||(p=Object(l.a)(["\n    width: 16.42rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    //handle side bar fro responsive layout\n    overflow: hidden;\n    transition: all .4s ease-in-out;\n\n    @media screen and (max-width:1200px){\n        transform: translateX(-100%);\n        z-index: 20;\n    }\n\n"]))),f=function(n){var e=n.menuToggler;return Object(h.jsx)(u,{className:"".concat(e?"nav-toggler":""),children:Object(h.jsx)(x,{})})},v=t(117),O=t.n(v);var w,y=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(O.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})},k=t(118),N=t.n(k),z=t(64),F=t.n(z),A=t(122),C=t.n(A),E=t(123),S=t.n(E);var P,D,M=m.b.div(w||(w=Object(l.a)(["\n        height:100vh;\n        width:100%;\n        position:relative;\n        \n\n        /* main content */\n        .main-content{\n            text-align:center;\n            position:absolute;\n            left:50%;\n            transform:translate(-50%, -50%);\n            top:50%;\n            width:80%; \n            \n            \n            /* icons */\n            .icons{\n                display:flex;\n                justify-content:center;\n                margin-top:1rem;\n                .icon{\n                    border: 2px solid var(--border-color);\n                    align-items:center;\n                    justify-content:center;\n                    display: flex;\n                    border-radius:50%; \n                    cursor: grab;\n                    transition: all 0.4s ease-in-out;\n\n                    /* icon hover color */\n                    &:hover{\n                        border: 2px solid  #3d88b8;\n                        color: #3d88b8;\n                    }\n                    &:not(:last-child){\n                        margin-right:1rem;\n                    }\n                }\n                svg{\n                    margin:0.8rem;\n                }\n            }\n\n            /* sub para in main page */\n            .sub-content{\n                padding-top:10px;\n                cursor: grab;   \n                font-weight:800;\n                .strings{\n                    font-size:20px;\n                }\n            }\n        }\n\n"]))),L={color:"white-smoke",backgroundColor:"transparent",padding:"10px",fontFamily:"Roboto"},I=function(){return Object(h.jsxs)(M,{children:[Object(h.jsx)("div",{className:"design-atoms",children:Object(h.jsx)(y,{})}),Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsxs)("h1",{children:[" Hi I'm ",Object(h.jsx)("span",{children:" Adeepa Jayawardana "})]}),Object(h.jsx)("div",{className:"sub-content",children:Object(h.jsx)("strong",{className:"text-slide",children:Object(h.jsx)(N.a,{style:L,strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{href:"#",className:"icon i-github",children:Object(h.jsx)(F.a,{})}),Object(h.jsx)("a",{href:"#",className:"icon i-insta",children:Object(h.jsx)(C.a,{})}),Object(h.jsx)("a",{href:"#",className:"icon i-linkd",children:Object(h.jsx)(S.a,{})})]})]})]})},J=m.b.div(P||(P=Object(l.a)(["\n\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n \n"]))),_=J;var R,T=m.b.div(D||(D=Object(l.a)(['\n    position: relative;\n    /* about me title */\n    h2{\n        color:whitesmoke;\n        font-weight:800;\n        font-size:3rem;\n        position: relative;\n        padding-bottom:0.7rem;\n\n\n        &::before{\n            position:absolute;\n            content:"";\n            bottom:0;\n            width: 12.5rem;\n            height:0.35rem;\n            background-color: var(--background-light-color-2);\n            left:0;\n            border-radius:16px;\n        }\n\n        &::after{\n            position:absolute;\n            content:"";\n            bottom:0;\n            width: 5rem;\n            height:0.35rem;\n            background-color: var( --primary-color-light);\n            border-radius:16px;\n            left:0;\n        }\n    }\n\n    /* about me span (shadow type) */\n\n    span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n\n    }\n\n']))),W=function(n){var e=n.title,t=n.span;return Object(h.jsx)(T,{children:Object(h.jsxs)("h2",{children:[e," ",Object(h.jsx)("b",{children:Object(h.jsx)("span",{children:t})})]})})},B=t.p+"static/media/profilePic2.babb1ae2.png";var X,Y=m.b.a(R||(R=Object(l.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: "";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left: 0;\n        bottom: 0;\n        opacity: .7;\n    }\n    &:hover::after{\n        width: 100%;\n        background-color: var(--white-color);\n    }\n']))),H=function(n){var e=n.title;return Object(h.jsx)(Y,{children:e})};var V,q=m.b.div(X||(X=Object(l.a)(["\n    margin-top: 5rem;\n    display: flex;\n    @media screen and (max-width:1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            object-fit: cover;\n            //border-radius: 1rem;\n            border-color:whitesmoke;\n        }\n    }\n    .right-content{\n        width: 100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;\n            }\n        }\n        .paragraph{\n            padding: 3rem 0;\n        }\n        .about-info{\n            display: flexbox;\n            padding-bottom: 1.4rem;\n\n            .info-title{\n                padding-right: 2rem;\n                p{\n                    font-weight: 800;\n                }\n            }\n            .info-title, .info{\n                p{\n                    padding: .3rem 0;\n                }\n            }\n        }\n    }\n"]))),G=function(){return Object(h.jsxs)(q,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("img",{src:B,alt:""})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsxs)("div",{className:"about-info",children:[Object(h.jsxs)("div",{className:"info-title",children:[Object(h.jsx)("p",{children:"Full Name"}),Object(h.jsx)("p",{children:"Age"}),Object(h.jsx)("p",{children:"Nationality "}),Object(h.jsx)("p",{children:"Languages "}),Object(h.jsx)("p",{children:"Location"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:": Adeepa Dasun Jayawardana"}),Object(h.jsx)("p",{children:": 21"}),Object(h.jsx)("p",{children:": Sri Lankan "}),Object(h.jsx)("p",{children:": Sinhala, English, Tamil "}),Object(h.jsx)("p",{children:": Sri Lanka"})]})]}),Object(h.jsx)(H,{title:"Download CV"})]})]})};var K,Q,U=m.b.section(V||(V=Object(l.a)(["\n\n\n\n"]))),Z=function(){return Object(h.jsx)(_,{children:Object(h.jsxs)(U,{children:[Object(h.jsx)(W,{title:"About Me",span:"About Me"}),Object(h.jsx)(G,{})]})})},$=t(127),nn=m.b.div(K||(K=Object(l.a)(["\n    padding: 5rem 0;\n"]))),en=nn,tn=t.p+"static/media/cybercmz.3bcbd207.png",rn=[{id:1,category:"Web",image:tn,link1:"https://www.google.com",link2:"https://www.google.com",title:"Project Cyber Commerce",text:"Fully Responsive E-commerce website"},{id:2,category:"Python",image:tn,link1:"https://www.google.com",link2:"https://www.google.com",title:"Project Aayu",text:"Mobile Application to identify plants by scanning leaves"},{id:3,category:"Mobile",image:t.p+"static/media/Aayu.118c16a0.jpg",link1:"https://www.google.com",link2:"https://www.google.com",title:"Project Aayu",text:"Mobile Application to identify plants by scanning leaves"},{id:4,category:"Web",image:t.p+"static/media/travelmania.1ee501c3.jpg",link1:"https://www.google.com",link2:"https://www.google.com",title:"Travelmania",text:"Fully functioning travel website"},{id:5,category:"Enterprise",image:t.p+"static/media/sprt.fed83670.jpg",link1:"https://www.google.com",link2:"https://www.google.com",title:"Premier League",text:"Sport League Mangement sytems to manage sports events"}];var on,an,cn=m.b.div(Q||(Q=Object(l.a)(['\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n    @media screen and (max-width:920px){\n        grid-template-columns: repeat(2, 1fr);\n    }\n    @media screen and (max-width:670px){\n        grid-template-columns: repeat(1, 1fr);\n    }\n    .grid-item{\n        .portfolio-content{\n            display: block;\n            position: relative;\n            overflow: hidden;\n            h6{\n                font-size: 1.5rem;\n            }\n            img{\n                width: 100%;\n                height: 30vh;\n                object-fit: cover;\n            }\n            ul{\n                transform: translateY(-600px);\n                transition: all .4s ease-in-out;\n                position: absolute;\n                left: 50%;\n                top: 40%;\n                opacity: 0;\n                li{\n                        background-color: var(--border-color);\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        padding: 1rem;\n                        border-radius: 50%;\n                        width: 3rem;\n                        height: 3rem;\n                        margin: 0 .5rem;\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                    }\n            }\n            .portfolio-image{\n                &::before{\n                    content: "";\n                    position: absolute;\n                    left: 2%;\n                    top: 4%;\n                    height: 0;\n                    width: 0;\n                    transition: all .4s ease-in-out;\n                }\n            }\n            .portfolio-image:hover{\n                ul{\n                    transform: translateY(0);\n                    transform: translate(-50%, -50%);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    transition: all .4s ease-in-out;\n                    opacity: 1;\n                    li{\n                        transition: all .4s ease-in-out;\n                        &:hover{\n                            background-color: var(--primary-color);\n                        }\n                        a{\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            transition: all .4s ease-in-out;\n                        }\n                    }\n                    li:hover{\n                        svg{\n                            color: var(--white-color);\n                        }\n                    }\n                    svg{\n                        font-size: 2rem;\n                    }\n                }\n                &::before{\n                    height: calc(100% - 32%) ;\n                    width: calc(100% - 4%);\n                    background-color: white;\n                    opacity: 0.9;\n                    transform-origin: left;\n                    \n                    transition: all .4s ease-in-out;\n                }\n            }\n        }\n    }\n']))),sn=function(n){var e=n.menuItem;return Object(h.jsx)(cn,{children:e.map((function(n){return Object(h.jsx)("div",{className:"grid-item",children:Object(h.jsxs)("div",{className:"portfolio-content",children:[Object(h.jsxs)("div",{className:"portfolio-image",children:[Object(h.jsx)("img",{src:n.image,alt:""}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:n.link1,children:Object(h.jsx)(F.a,{})})})})]}),Object(h.jsx)("h6",{children:n.title}),Object(h.jsx)("p",{children:n.text})]})},n.id)}))})};var ln=m.b.button(on||(on=Object(l.a)(["\n    outline: none;\n    border: none;\n    background-color: var(--background-light-color-2);\n    padding: .4rem 2rem;\n    font-size: inherit;\n    color: var(--white-color);\n    cursor: pointer;\n    transition: all .4s ease-in-out;\n    margin-bottom: .6rem;\n    &:active ,&:focus{\n        background-color: var(--primary-color);\n    }\n    &:hover{\n        background-color: var(--primary-color);\n    }\n    &:not(:last-child){\n        margin-right: .6rem;\n    }\n"]))),dn=m.b.div(an||(an=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 70%;\n    margin: 2.4rem auto;\n"]))),bn=function(n){var e=n.filter,t=n.button;return Object(h.jsx)(dn,{children:t.map((function(n,t){return Object(h.jsx)(ln,{onClick:function(){return e(n)},children:n},t)}))})},mn=["All"].concat(Object($.a)(new Set(rn.map((function(n){return n.category})))));var jn,hn=function(){var n=Object(r.useState)(rn),e=Object(d.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(mn),a=Object(d.a)(o,2),c=a[0];return a[1],Object(h.jsxs)(J,{children:[Object(h.jsx)(W,{title:"Work",span:"work"}),Object(h.jsxs)(nn,{children:[Object(h.jsx)(bn,{filter:function(n){if("All"!==n){var e=rn.filter((function(e){return e.category===n}));i(e)}else i(rn)},button:c}),Object(h.jsx)(sn,{menuItem:t})]})]})},pn=t(397),gn=t(124),xn=t.n(gn),un=t(125),fn=t.n(un);var vn,On=m.b.div(jn||(jn=Object(l.a)(["\n    padding:1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),wn=function(n){var e=n.title,t=n.icon,i=n.cont1,r=n.cont2;return Object(h.jsxs)(On,{children:[Object(h.jsx)("div",{className:"left-content",children:t}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h6",{children:e}),Object(h.jsx)("p",{children:i}),Object(h.jsx)("p",{children:r})]})]})};var yn,kn=m.b.section(vn||(vn=Object(l.a)(["\n    .contact-section{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width: 978px){\n            grid-template-columns: repeat(1, 1fr);\n            .f-button{\n                margin-bottom: 3rem;\n            }\n        }\n        .right-content{\n            display: grid;\n            grid-template-columns: repeat(1, 1fr);\n            @media screen and (max-width: 502px){\n                width: 70%;\n            }\n        }\n        .contact-title{\n            h4{\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n        .form{\n            width: 100%;\n            @media screen and (max-width: 502px){\n                width: 100%;\n            }\n            .form-field{\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;\n                label{\n                    position: absolute;\n                    left: 20px;\n                    top: -19px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding:0 .5rem;\n                    color: inherit;\n                }\n                input{\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding:0 15px;\n                    width: 100%;\n                    color: inherit;\n                }\n                textarea{\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    color: inherit;\n                    width: 100%;\n                    padding: .8rem 1rem;\n                }\n            }\n            \n        }\n    }\n"]))),Nn=function(){var n=Object(h.jsx)(xn.a,{}),e=Object(h.jsx)(fn.a,{});return Object(h.jsxs)(_,{children:[Object(h.jsx)(W,{title:"Contact",span:"Contact"}),Object(h.jsx)(kn,{children:Object(h.jsxs)(en,{className:"contact-section",children:[Object(h.jsxs)("div",{className:"left-content",children:[Object(h.jsx)("div",{className:"contact-title",children:Object(h.jsx)("h4",{children:"Reach Out"})}),Object(h.jsxs)("form",{className:"form",children:[Object(h.jsxs)("div",{className:"form-field",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Enter your name*"}),Object(h.jsx)("input",{type:"text",id:"name"})]}),Object(h.jsxs)("div",{className:"form-field",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Enter your email*"}),Object(h.jsx)("input",{type:"email",id:"email"})]}),Object(h.jsxs)("div",{className:"form-field",children:[Object(h.jsx)("label",{htmlFor:"subject",children:"Enter your subject"}),Object(h.jsx)("input",{type:"text",id:"subject"})]}),Object(h.jsxs)("div",{className:"form-field",children:[Object(h.jsx)("label",{htmlFor:"text-area",children:"Enter your Message*"}),Object(h.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",rows:"10"})]}),Object(h.jsx)("div",{className:"form-field f-button",children:Object(h.jsx)(H,{title:"Send Email"})})]})]}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)(wn,{title:"Phone",icon:n,cont1:"+94767872846",cont2:"+94701005561"}),Object(h.jsx)(wn,{title:"Email",icon:e,cont1:"dasunadeepa99@gmail.com",cont2:""})]})]})})]})},zn=t(126),Fn=t.n(zn);var An,Cn=m.b.main(yn||(yn=Object(l.a)(["\n    margin-left: 16.5rem;\n    min-height:100vh;\n    @media screen and (max-width:1200px){\n      margin-left: 0;\n    }\n    position:relative;\n\n    /* lines */\n    /* .lines{\n      min-height:100vh;\n      position:absolute;\n      width:100%;\n      display:flex;\n      justify-content:space-evenly;\n\n\n      .line-1, .line-2 , .line-3 , .line-4{\n        min-height:100vh;\n        background-color: whitesmoke;\n        width: 0.2px;\n      }\n    } */\n\n\n\n\n"]))),En=function(){var n=Object(r.useState)(!1),e=Object(d.a)(n,2),t=e[0],i=e[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{menuToggler:t}),Object(h.jsx)("div",{className:"responsive-menu",children:Object(h.jsx)(pn.a,{onClick:function(){return i(!t)},children:Object(h.jsx)(Fn.a,{})})}),Object(h.jsx)(Cn,{children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/",exact:!0,children:Object(h.jsx)(I,{})}),Object(h.jsx)(b.a,{path:"/about",exact:!0,children:Object(h.jsx)(Z,{})}),Object(h.jsx)(b.a,{path:"/work",exact:!0,children:Object(h.jsx)(hn,{})}),Object(h.jsx)(b.a,{path:"/contact",exact:!0,children:Object(h.jsx)(Nn,{})})]})})})]})},Sn=Object(m.a)(An||(An=Object(l.a)(["\n\n/* define root element */\n:root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #0a120c;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n    /* basic page resizing and fitting */\n    *{\n        padding : 0;\n        margin: 0;\n        list-style: none;\n        text-decoration: none;\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n        font-size:1.2rem;\n    }\n\n    body{\n        background-color: var(--background-dark-color);\n        color : var(--font-light-color);\n    }\n\n    a{\n        font-family:inherit;\n        color:inherit;\n        font-size:inherit;\n        font-size:1.2rem;\n    }\n\n    h1{\n        font-size: 2rem;\n        color:whitesmoke;\n        /* styles for main content span */\n        span{\n            font-size: 2rem;\n            color: #3d88b8;\n        }\n    }\n\n    h4{\n        font-size: 2rem;\n        color:whitesmoke;\n        /* styles for main content span */\n        span{\n            font-size: 2rem;\n            color: #3d88b8;\n        }\n    }\n\n   //collapse menu icon\n    .responsive-menu{\n        right:5%;\n        top: 5%;\n        display: none;\n        z-index:16;\n        position:absolute;\n        svg{\n            font-size:2rem;\n            color:whitesmoke;\n        }\n        \n    }\n\n    .nav-toggler{\n        transform: translateX(0);\n        z-index: 20;\n    }\n\n    @media screen and (max-width:1200px){\n        .responsive-menu{\n            display:block;\n        }\n\n    }\n\n"])));c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(En,{}),Object(h.jsx)(Sn,{})]})}),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.78550c89.chunk.js.map