webpackJsonp([0x6398fc3786a0],{651:function(e,t,a){e.exports=a.p+"static/ds-feedback-colors.12780739.png"},652:function(e,t,a){e.exports=a.p+"static/ds-neutral-colors.488000d0.png"},653:function(e,t,a){e.exports=a.p+"static/ds-primary-colors.15ddc2ea.png"},215:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(2),r=l(s),n=a(11),o=(l(n),a(20)),c=l(o),d=a(653),u=l(d),i=a(651),m=l(i),f=a(652),h=l(f),p=a(25),g=l(p);a(40);var E=a(19),b=l(E),y=function(){return r.default.createElement("div",{className:"ds-app-grid"},r.default.createElement(c.default,null),r.default.createElement("div",{className:"ds-main-content"},r.default.createElement("div",{className:"ds-container"},r.default.createElement("h1",null,"Colors"),r.default.createElement("h3",{className:"subheading"},"The system groups Color into Brand, User Feedback and Neutral colors, and provides a predictable color scale."),r.default.createElement("div",{className:"ds-color-wrapper"},r.default.createElement("div",{className:"col-1"},r.default.createElement("h4",null,"Brand"),r.default.createElement("img",{src:u.default,className:"brand-colors-container"})),r.default.createElement("div",{className:"col-1"},r.default.createElement("h4",null,"Feedback"),r.default.createElement("img",{src:m.default,className:"feedback-colors-container"})),r.default.createElement("div",{className:"col-1"},r.default.createElement("h4",null,"Neutral"),r.default.createElement("img",{src:h.default,className:"neutral-colors-container"}))),r.default.createElement("p",{className:"ds-color-page-body"},'Every color in the System is defined above. Each heu has a Base (400) and from this I extract shades and tints of that heu. This provides a predictable color scale of "allowed" colors in the system; the higher a number is, the darker the color. I use a 10% increment and decrement but this can be any value.'),r.default.createElement("p",{className:"ds-color-page-body"},r.default.createElement("strong",null,"Brand Colors")," are the personality of the brand. They should be used as accent elements such as primary buttons, CTA's and links. ",r.default.createElement("strong",null,"Feedback Colors")," are uses to communicate Status to the user and ",r.default.createElement("strong",null,"Neutral Colors")," are used for things like text, borders, shadows, backgrounds, etc."),r.default.createElement("h4",{className:"ds-usage-title"},"Usage"),r.default.createElement("p",null,"All UI elements make use of a sass function; ",r.default.createElement("code",null,"ds-color($variable, $range)")," where ",r.default.createElement("code",null,"$varible")," is the type of color and the ",r.default.createElement("code",null,"$range")," is the number in the scale which determines how light or dark that color will be. This ensures consistency as it prevents hard coding #HEX values when creating new UI elements or pages."),r.default.createElement(g.default,{className:"scss"},".my-new-cool-box {\n  background: ds-color(tertiary, 400);\n  width:      100%;\n  height:     ds-space(super-loose);\n}"),r.default.createElement("iframe",{height:"507",scrolling:"no",title:"oskrhq-design-system-color",src:"//codepen.io/ogonzal87/embed/mXZwWP/?height=507&theme-id=dark&default-tab=css,result&embed-version=2",frameBorder:"no",allowTransparency:"true",allowFullScreen:"true",style:{width:"100%"}},"See the Pen ",r.default.createElement("a",{href:"https://codepen.io/ogonzal87/pen/mXZwWP/"},"oskrhq-design-system-color")," by Oscar (",r.default.createElement("a",{href:"https://codepen.io/ogonzal87"},"@ogonzal87"),") on ",r.default.createElement("a",{href:"https://codepen.io"},"CodePen"),".")),r.default.createElement(b.default,null)))};t.default=y,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-color-js-abbe3e1556dff9d124bc.js.map