(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"tilte":"Hello I\'m Negin!","subtitle":"Full stack developer | editor | computer engineering student","links":{"github":"https://github.com/negin-titanium","twitter":"https://twitter.com/TaesJudy"},"sections":[{"title":"About","items":[{"type":"P","content":"nice to meet you"},{"type":"P","content":"nice to meet you"},{"type":"P","content":"nice to meet you"}]},{"title":"skills","items":[{"type":"card","content":{"image":"images/React.png","title":"React"}},{"type":"card","content":{"image":"images/example.png","title":"Javascript"}},{"type":"card","content":{"image":"images/html.jpg","title":"HTML"}},{"type":"card","content":{"image":"images/css.png","title":"CSS"}},{"type":"card","content":{"image":"images/java.png","title":"Java"}}]}],"icons":{"down":"images/caret-down.png"}}')},28:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(9),r=n.n(a),o=(n(28),n(3)),l=n(4),j=n(6),u=n(5),d=n(2),m=n(13),p=(n(36),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(c.jsx)("div",{className:"fullpage ".concat(this.props.className||""," "),children:e})}}]),n}(i.Component)),h=(n(37),function(e){return Object(c.jsx)("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45px)"},children:Object(c.jsx)("div",{style:{maxWidth:"30px"},children:Object(c.jsx)("img",{src:e.icon})})})}),b=n(8),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={color:"white"},e.changecolor=function(){e.setState({color:"white"===e.state.color?"yellow":"white"})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(p,{className:"first",children:[Object(c.jsx)("h1",{className:"title",style:{color:this.state.color},onMouseOver:function(){e.changecolor()},onMouseLeave:function(){e.changecolor()},children:d.tilte}),Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:d.subtitle})}),Object(c.jsx)("div",{className:"icons-wrapper",children:Object.keys(d.links).map((function(e){return Object(c.jsx)("div",{className:"icon",children:Object(c.jsx)(m.SocialIcon,{url:d.links[e]})})}))})]}),Object(c.jsx)(b.Link,{activeClass:"active",to:"test1",spy:!0,smooth:!0,offset:50,duration:500,delay:0,children:Object(c.jsx)(h,{icon:d.icons.down})}),Object(c.jsx)("div",{style:{transform:"translateY(-45px)"},children:Object(c.jsx)(b.Element,{name:"test1",className:"element"})})]})}}]),n}(i.Component),x=(n(46),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)(p,{className:"second",children:[Object(c.jsx)("h3",{children:d.sections[0].title}),Object(c.jsx)("div",{className:"paragraphs",children:d.sections[0].items.map((function(e){return Object(c.jsxs)("p",{children:[e.content," "]})}))})]}),Object(c.jsx)(b.Link,{activeClass:"active",to:"test2",spy:!0,smooth:!0,offset:50,duration:500,delay:0,children:Object(c.jsx)(h,{icon:d.icons.down})}),Object(c.jsx)("div",{style:{transform:"translateY(-45px)"},children:Object(c.jsx)(b.Element,{name:"test2",className:"element"})})]})}}]),n}(i.Component)),f=(n(47),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.skill;return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"image-wrapper",children:Object(c.jsx)("img",{src:e.content.image})}),Object(c.jsx)("div",{className:"skill-title-wrapper",children:Object(c.jsx)("h4",{children:e.content.title})})]})}}]),n}(i.Component)),v=(n(48),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(p,{className:"third",children:[Object(c.jsxs)("h3",{children:[d.sections[1].title," "]}),Object(c.jsx)("div",{className:"cards-wrapper",children:d.sections[1].items.map((function(e){return Object(c.jsx)(f,{skill:e})}))})]})}}]),n}(i.Component));n(49);var g=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"navigation"}),Object(c.jsx)(O,{}),Object(c.jsx)(x,{}),Object(c.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.4e86d022.chunk.js.map