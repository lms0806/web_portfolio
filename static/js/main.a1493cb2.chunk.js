(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{48:function(e,n,t){"use strict";t.r(n);var c,s,a,i,r,o=t(1),l=t.n(o),j=t(19),x=t.n(j),b=t(3),d=t(4),h=t(6),p=t(5),f=t(7),u=t(8),O=t(50),m=t(0),v=u.a.div(c||(c=Object(f.a)(["\n    padding: 30px;\n    background-color: #fff;\n    border-radius: 10px;\n    transition : all 0.3s;//0.3\ucd08\ub97c \ud140\uc73c\ub85c \ubcc0\uacbd\ub428\n    position : relative;\n    border : 2px solid ",";//\ud14c\ub450\ub9ac\n    color: ",";\n    cursor: pointer;\n    &:hover{\n        transform: scale(1.1);\n    }//\ub9c8\uc6b0\uc2a4\ub97c \uac00\uc838\ub2e4 \ub193\uc744\uc2dc \ubcc0\uacbd\n    span{\n        position: absolute;\n        bottom: 2%;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n"])),(function(e){return e.color}),(function(e){return e.color})),g=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(v,{onMouseOver:function(){return e.props.showPage(e.props.index)},color:this.props.color,children:[Object(m.jsx)(O.a,{name:this.props.icon,style:{fontSize:"50px",transform:"translateY(30%)"}}),Object(m.jsx)("span",{children:this.props.text})]})}}]),t}(l.a.Component),y=u.a.div(s||(s=Object(f.a)(["\n    position: fixed;\n    display: flex;\n    justify-content: space-between;\n    bottom: 0;\n    width: 560px;\n    height: 130px;\n    background-color: #efefef;\n    left: 50%;\n    padding: 15px 15px;\n    padding-bottom: 10px;\n    transform: translateX(-50%);//\uc6f9\uc0ac\uc774\ud2b8 \ud06c\uae30\uc758 \uc808\ubc18\ub9cc\ud07c \uc774\ub3d9\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n"]))),w=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).menus=[{icon:"user",color:"black",text:"Intro"},{icon:"react",color:"#5CD3F3",text:"ReactJS"},{icon:"node",color:"#87BF00",text:"NodeJS"},{icon:"coffee",color:"#DE6800",text:"Java"}],e.renderMenus=function(n){return n.map((function(n,t){return Object(m.jsx)(g,{showPage:e.props.showPage,index:t,icon:n.icon,color:n.color,text:n.text},t)}))},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsxs)(y,{children:[this.renderMenus(this.menus),";"]})}}]),t}(l.a.Component),N=u.a.div(a||(a=Object(f.a)(["\n  display: flex;\n  .flex-1 {\n    flex: 1;\n  }\n  .flex-2 {\n    flex: 2;\n  }\n  .flex-3 {\n    flex: 3;\n  }\n  .flex-4 {\n    flex: 4;\n  }\n  .flex-5 {\n    flex: 5;\n  }\n  .flex-6 {\n    flex: 6;\n  }\n  .flex-7 {\n    flex: 7;\n  }\n  .flex-8 {\n    flex: 8;\n  }\n  .flex-9 {\n    flex: 9;\n  }\n"]))),k=u.a.div(i||(i=Object(f.a)(["\n    position: relative;\n    margin: 0 auto;\n    margin-top: 40px;\n    width: 620px;\n    height: 420px;\n    box-shadow: 3px 3px 8px rgba(0,0,0,0.3);//\uadf8\ub9bc\uc790 \ucd94\uac00\n    .me{\n        width: 90%;\n        height: 250px;\n    }\n    .job{\n        color: #aaa;\n        font-size: 18px;\n        letter-spacing: 1.5px;\n    }\n    .name{\n        font-size: 24px;\n        font-weight: bold;\n        margin-top: 5px;\n        border-bottom: 0.5px solid black;//\ubc11\uc904\n        padding-bottom: 10px;\n        width: 90%;\n    }\n    .label{\n        font-weight: bold;\n        text-align: right;\n    }\n"]))),P=u.a.div(r||(r=Object(f.a)(["\n    position: absolute;\n    bottom: 0;\n    height: 70px;\n    background-color: #555;\n    width: 100%;\n    padding: 20px 0;\n    .myicon{\n        cursor: pointer;\n        transition: 0.5s; //\uc784\ud329\ud2b8 \ub098\uc624\ub294\ub370 0.5\ucd08 \uac78\ub9b0\ub2e4.\n    }\n    .github:hover{\n        color: #000 !important;\n    }\n    .book:hover{\n        color: #0ff !important;\n    }\n    .question:hover{\n        color: #ff0 !important;\n    }\n"]))),C=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(k,{children:[Object(m.jsxs)(N,{children:[Object(m.jsx)("div",{className:"flex-4",style:{padding:"25px"},children:Object(m.jsx)("img",{alt:""})}),Object(m.jsxs)("div",{className:"flex-6",style:{paddingTop:"30px"},children:[Object(m.jsx)("div",{className:"job",children:"University 4th Student"}),Object(m.jsx)("div",{className:"name",children:"\uc784\ubbfc\uc218(Lim Min Su)"}),Object(m.jsx)("br",{}),Object(m.jsxs)(N,{children:[Object(m.jsx)("div",{className:"flex-2 label",children:"School"}),Object(m.jsx)("div",{className:"flex-1",children:"\xa0"}),Object(m.jsx)("div",{className:"flex-6",children:"\uc11c\uc6d0\ub300\ud559\uad50"})]}),Object(m.jsxs)(N,{style:{marginTop:"7px"},children:[Object(m.jsx)("div",{className:"flex-2 label",children:"\ud559\uacfc"}),Object(m.jsx)("div",{className:"flex-1",children:"\xa0"}),Object(m.jsx)("div",{className:"flex-6",children:"\ucef4\ud4e8\ud130\uacf5\ud559\uacfc"})]}),Object(m.jsxs)(N,{style:{marginTop:"7px"},children:[Object(m.jsx)("div",{className:"flex-2 label",children:"email"}),Object(m.jsx)("div",{className:"flex-1",children:"\xa0"}),Object(m.jsx)("div",{className:"flex-6",children:"godmlzkf1@naver.com"})]}),Object(m.jsxs)(N,{style:{marginTop:"7px"},children:[Object(m.jsx)("div",{className:"flex-2 label",children:"GPA"}),Object(m.jsx)("div",{className:"flex-1",children:"\xa0"}),Object(m.jsx)("div",{className:"flex-6",children:"3.81 / 4.5"})]})]})]}),Object(m.jsx)(P,{children:Object(m.jsxs)(N,{children:[Object(m.jsx)("div",{className:"flex-1"}),Object(m.jsx)("div",{className:"flex-1",children:Object(m.jsx)("a",{href:"https://github.com/lms0806",children:Object(m.jsx)(O.a,{className:"myicon github",name:"github",size:"big",style:{color:"white"}})})}),Object(m.jsx)("div",{className:"flex-1",children:Object(m.jsx)("a",{href:"https://www.acmicpc.net/user/lms0806",children:Object(m.jsx)(O.a,{className:"myicon book",name:"book",size:"big",style:{color:"white"}})})}),Object(m.jsx)("div",{className:"flex-1",children:Object(m.jsx)("a",{href:"https://solved.ac/profile/lms0806",children:Object(m.jsx)(O.a,{className:"myicon book",name:"book",size:"big",style:{color:"white"}})})}),Object(m.jsx)("div",{className:"flex-1",children:Object(m.jsx)("a",{href:"",children:Object(m.jsx)(O.a,{className:"myicon question",name:"question",size:"big",style:{color:"white"}})})}),Object(m.jsx)("div",{className:"flex-1"})]})})]})})}}]),t}(o.Component),S=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){return Object(b.a)(this,t),n.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{children:"This is React JS Page"})}}]),t}(o.Component),z=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).displayPage=function(e){switch(e){case 0:return Object(m.jsx)(C,{});case 1:return Object(m.jsx)(S,{});default:return Object(m.jsx)(C,{})}},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{children:this.displayPage(this.props.page)})}}]),t}(o.Component),T=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(b.a)(this,t);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=n.call.apply(n,[this].concat(s))).state={page:0},e.showPage=function(n){e.setState({page:n})},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(w,{showPage:this.showPage}),Object(m.jsx)(z,{page:this.state.page})]})}}]),t}(o.Component),F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),a(e),i(e)}))};t(47);x.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),F()}},[[48,1,2]]]);
//# sourceMappingURL=main.a1493cb2.chunk.js.map