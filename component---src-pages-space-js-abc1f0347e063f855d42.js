webpackJsonp([0x997870fbc359],{696:function(e,a,l){e.exports=l.p+"static/gird-example2.ece20e8f.jpg"},232:function(e,a,l){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0;var s=l(1),c=t(s),d=l(6),n=(t(d),l(13)),o=t(n),m=l(696),r=t(m),i=l(14),u=t(i);l(42);var p=l(12),f=t(p),E=function(){return c.default.createElement("div",{className:"ds-app-grid"},c.default.createElement(o.default,null),c.default.createElement("div",{className:"ds-main-content"},c.default.createElement("div",{className:"ds-container"},c.default.createElement("h1",null,"Space"),c.default.createElement("h3",{className:"subheading"},"Every UI element uses Space. The system uses a geometric progression scale to create consistency and rhythm in space."),c.default.createElement("h4",null,"Fixed Space"),c.default.createElement("div",{className:"ds-col-container"},c.default.createElement("div",{className:"ds-col-6"},c.default.createElement("p",null,"I use a combination of a Soft a Hard 8-Point-Grid System. This means that space uses multiples of 8px to define dimensions, padding, and margin of both block and inline elements. This ensures all measures follow the same spacing rules and avoids many headaches when designers are discussing space with developers.")),c.default.createElement("div",{className:"ds-col-6"},c.default.createElement("p",null,c.default.createElement("strong",null,"Why 8px?")," Regardless of form-factor, most popular screen sizes are divisible by 8 on at least one axis - usually both. See ",c.default.createElement("a",{href:"https://builttoadapt.io/intro-to-the-8-point-grid-system-d2573cde8632",target:"_blank"},"this article")," to learn more."),c.default.createElement("p",null,"The system has a predictable scale to measure fixed space - 4px (extra-tight), 8px (tight), 16px (base), 24px (bit-loose), 32px (loose), 48px (extra-loose), 64px (super-loose)."))),c.default.createElement("img",{className:"ds-space-page-grid-example-img",src:r.default}),c.default.createElement("div",{className:"ds-space-space-specimens-container"},c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen1"}),c.default.createElement("code",null,"ds-space(extra-tight)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen2"}),c.default.createElement("code",null,"ds-space(tight)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen3"}),c.default.createElement("code",null,"ds-space(base)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen4"}),c.default.createElement("code",null,"ds-space(bit-loose)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen5"}),c.default.createElement("code",null,"ds-space(loose)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen6"}),c.default.createElement("code",null,"ds-space(extra-loose)")),c.default.createElement("div",{className:"ds-space-space-specimen"},c.default.createElement("div",{className:"ds-space-space-specimen7"}),c.default.createElement("code",null,"s-space(super-loose)"))),c.default.createElement("h4",null,"Fluid Space"),c.default.createElement("p",null,"For containers or elements that need to be fluid, the system uses a 12-column system with css utility classes for its use. ",c.default.createElement("strong",null,"Just make sure you wrap the column elements with a div and assign it this css class: ",c.default.createElement("code",null,".ds-col-container")),"."),c.default.createElement("div",{className:"ds-col-container ds-space-col-specimen-container"},c.default.createElement("div",{className:"ds-box ds-col-12"},c.default.createElement("code",null,".ds-col-12")),c.default.createElement("div",{className:"ds-box ds-col-6"},c.default.createElement("code",null,".ds-col-6")),c.default.createElement("div",{className:"ds-box ds-col-6"},c.default.createElement("code",null,".ds-col-6")),c.default.createElement("div",{className:"ds-box ds-col-4"},c.default.createElement("code",null,".ds-col-4")),c.default.createElement("div",{className:"ds-box ds-col-4"},c.default.createElement("code",null,".ds-col-4")),c.default.createElement("div",{className:"ds-box ds-col-4"},c.default.createElement("code",null,".ds-col-4")),c.default.createElement("div",{className:"ds-box ds-col-3"},c.default.createElement("code",null,".ds-col-3")),c.default.createElement("div",{className:"ds-box ds-col-3"},c.default.createElement("code",null,".ds-col-3")),c.default.createElement("div",{className:"ds-box ds-col-3"},c.default.createElement("code",null,".ds-col-3")),c.default.createElement("div",{className:"ds-box ds-col-3"},c.default.createElement("code",null,".ds-col-3")),c.default.createElement("div",{className:"ds-box ds-col-8"},c.default.createElement("code",null,".ds-col-8")),c.default.createElement("div",{className:"ds-box ds-col-4"},c.default.createElement("code",null,".ds-col-4"))),c.default.createElement("h4",{className:"ds-usage-title"},"Usage"),c.default.createElement("p",null,"For fixed spacing, make use of the sass function ",c.default.createElement("code",null,"ds-space($variable)")," where ",c.default.createElement("code",null,"$variable")," is either extra-tight (4px), tight (8px), base (16px), bit-loose (24px), loose (32px), extra-loose (48px), super-loose (64px). In most cases, you will be using Fluid Space with the column system to layout content and elements on the screen, and Fixed Spacing when composing these elements."),c.default.createElement(u.default,{className:"html"},'<div class="ds-col-container">\n  <div class="ds-box ds-col-6">\n    <div class="ball"></div>\n  </div>\n  <div class="ds-box ds-col-6">\n    <div class="ball"></div>\n  </div>        \n</div>'),c.default.createElement(u.default,{className:"scss"},".ball {\n  height: ds-space(extra-loose);\n  width: ds-space(extra-loose);\n  border-radius: 50%;\n  background: ds-color(primary, 300);\n}"),c.default.createElement("iframe",{height:"265",scrolling:"no",title:"oskrhq-design-system-space",src:"//codepen.io/ogonzal87/embed/qodxwN/?height=265&theme-id=dark&default-tab=css,result&embed-version=2",frameBorder:"no",allowTransparency:"true",allowFullScreen:"true",style:{width:"100%"}},"See the Pen ",c.default.createElement("a",{href:"https://codepen.io/ogonzal87/pen/qodxwN/"},"oskrhq-design-system-space")," by Oscar (",c.default.createElement("a",{href:"https://codepen.io/ogonzal87"},"@ogonzal87"),") on ",c.default.createElement("a",{href:"https://codepen.io"},"CodePen"),".")),c.default.createElement(f.default,null)))};a.default=E,e.exports=a.default}});
//# sourceMappingURL=component---src-pages-space-js-abc1f0347e063f855d42.js.map