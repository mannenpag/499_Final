(this.webpackJsonpalpha=this.webpackJsonpalpha||[]).push([[0],Array(19).concat([function(e,a,t){e.exports=t.p+"static/media/logo.6f0fc60f.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_hamburger.79379326.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/icon_choose_font.583feda7.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_font_size.d1917733.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_spacing.de683106.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_download.42540c8d.svg"},function(e,a,t){e.exports=t.p+"static/media/icon_settings.9af961e1.svg"},function(e,a,t){e.exports=t.p+"static/media/logo_outline.6cb18e40.svg"},function(e,a,t){e.exports=t.p+"static/media/raymond.f09484c2.jpg"},function(e,a,t){e.exports=t.p+"static/media/chunjia.98c655a0.jpg"},function(e,a,t){e.exports=t.p+"static/media/gustav.0ddf07d8.jpg"},function(e,a,t){e.exports=t.p+"static/media/lovisa.4ab23833.jpg"},function(e,a,t){e.exports=t.p+"static/media/dino.c000fbe2.jpg"},function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(18),s=t.n(l),c=(t(41),t(3)),r=(t(42),t(43),t(2)),o=t(7),m=t(19),d=t.n(m),p=t(20),f=t.n(p),g=function(e){var a=e.title,t=Object(n.useState)(!0),l=Object(c.a)(t,2),s=l[0],o=l[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"nav-icon display-md-n position-xs-f",onClick:function(){return o(!s)}},i.a.createElement("img",{src:f.a,alt:"nav icon"})),i.a.createElement("header",{className:"nav flex-xs-parent flex-md-horizontal flex-xs-vertical"},i.a.createElement(r.b,{to:"/",onClick:function(){return o(!s)}},i.a.createElement("div",{className:"p-xs-s p-md-n content-contain-header"},i.a.createElement("img",{src:d.a,alt:"logo",style:{width:"2em"}}),i.a.createElement("h1",{style:{fontSize:"1.2em",fontWeight:"bold"}},a))),i.a.createElement("nav",{className:"p-xs-s p-md-n nav flex-xs-parent flex-md-horizontal flex-xs-vertical ".concat(s?"active":"")},i.a.createElement("ul",{className:"flex-xs-parent flex-xs-vertical flex-md-horizontal flex-xs-justify-end p-xs-bl p-md-bn"},i.a.createElement("li",{className:"p-xs-tm p-md-tn"},i.a.createElement(r.b,{to:"/learn",onClick:function(){return o(!s)}},"How to pair fonts")),i.a.createElement("li",{className:"p-xs-tm p-md-tn"},i.a.createElement(r.b,{to:"/about",onClick:function(){return o(!s)}},"About FontPairing")),i.a.createElement("li",{className:"p-xs-tm p-md-tn"},i.a.createElement(r.b,{className:"btn btn--primary",to:"pair-fonts",onClick:function(){return o(!s)}},"Get Started"))))))},u=t(15),h=t(9),x=t(23),E=t(24),v=t.n(E),b={first:{},second:{}},z=[{size:56,min:12,max:96,name:"H1"},{size:43,min:12,max:72,name:"H2"},{size:36,min:12,max:72,name:"H3"},{size:16,min:12,max:72,name:"H4"},{size:14,min:12,max:72,name:"H5"},{size:12,min:12,max:26,name:"P"}],S=[{trackingSize:0,trackingMin:-5,trackingMax:15,leadingSize:100,leadingMin:80,leadingMax:150,name:"H1",label1:"Tracking",label2:"Leading"},{trackingSize:0,trackingMin:-3,trackingMax:8,leadingSize:100,leadingMin:80,leadingMax:125,name:"H2",label1:"Tracking",label2:"Leading"},{trackingSize:0,trackingMin:-3,trackingMax:8,leadingSize:100,leadingMin:80,leadingMax:125,name:"H3",label1:"Tracking",label2:"Leading"},{trackingSize:0,trackingMin:-3,trackingMax:8,leadingSize:100,leadingMin:80,leadingMax:125,name:"H4",label1:"Tracking",label2:"Leading"},{trackingSize:0,trackingMin:-3,trackingMax:8,leadingSize:100,leadingMin:80,leadingMax:125,name:"H5",label1:"Tracking",label2:"Leading"},{trackingSize:0,trackingMin:-2,trackingMax:4,leadingSize:100,leadingMin:80,leadingMax:125,name:"P",label1:"Tracking",label2:"Leading"}],N=function(e){var a=e.id,t=e.spacing,n=e.setTracking,l=e.setLeading;return i.a.createElement("div",{className:"spacingfont fontsize-slider-container"},i.a.createElement("h5",{className:"txt-purewhite spacing-width-100"},t[a].name),i.a.createElement("br",null),i.a.createElement("div",{className:"spacing-lead spacing-width flex-row"},i.a.createElement("span",{className:"txt-purewhite spacing-head-label"},t[a].label2),i.a.createElement("input",{className:"fontsize-slider-track fontsize-slider-track-limited-width col--8 m-xs-ts",type:"range",value:t[a].leadingSize,min:t[a].leadingMin,max:t[a].leadingMax,onChange:l,"data-id":a}),i.a.createElement("input",{className:"fontsize-slider-input spacing-input",type:"number",value:t[a].leadingSize,min:t[a].leadingMin,max:t[a].leadingMax,onChange:l,"data-id":a})),i.a.createElement("br",null),i.a.createElement("div",{className:"spacing-track spacing-width flex-row"},i.a.createElement("span",{className:"txt-purewhite spacing-head-label"},t[a].label1),i.a.createElement("input",{className:"fontsize-slider-track fontsize-slider-track-limited-width",type:"range",value:t[a].trackingSize,min:t[a].trackingMin,max:t[a].trackingMax,onChange:n,"data-id":a}),i.a.createElement("input",{className:"fontsize-slider-input spacing-input",type:"number",value:t[a].trackingSize,min:t[a].trackingMin,max:t[a].trackingMax,onChange:n,"data-id":a})))},y=function(e){var a=e.fontFamilies,t=e.fontSizes,n=e.spacings;return i.a.createElement("section",{className:"p-xs-vxl"},i.a.createElement("h1",{className:"",style:{letterSpacing:n[0].trackingSize+"px",lineHeight:n[0].leadingSize+"%",fontFamily:a.first.name,fontSize:t[0].size+"px"}},"H1 / ",a.first.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[0].size," / Letter Spacing ",n[0].trackingSize," px / Line Height ",n[0].leadingSize," % "),i.a.createElement("h2",{className:"",style:{letterSpacing:n[1].trackingSize+"px",lineHeight:n[1].leadingSize+"%",fontFamily:a.first.name,fontSize:t[1].size+"px"}},"H2 / ",a.first.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[1].size," / Letter Spacing ",n[1].trackingSize," px / Line Height ",n[1].leadingSize," % "),i.a.createElement("h3",{className:"",style:{letterSpacing:n[2].trackingSize+"px",lineHeight:n[2].leadingSize+"%",fontFamily:a.first.name,fontSize:t[2].size+"px"}},"H3 / ",a.first.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[2].size," / Letter Spacing ",n[2].trackingSize," px / Line Height ",n[2].leadingSize," % "),i.a.createElement("h4",{className:"",style:{letterSpacing:n[3].trackingSize+"px",lineHeight:n[3].leadingSize+"%",fontFamily:a.first.name,fontSize:t[3].size+"px"}},"H4 / ",a.first.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[3].size," / Letter Spacing  ",n[3].trackingSize," px / Line Height ",n[3].leadingSize," % "),i.a.createElement("h5",{className:"",style:{letterSpacing:n[4].trackingSize+"px",lineHeight:n[4].leadingSize+"%",fontFamily:a.first.name,fontSize:t[4].size+"px"}},"H5 / ",a.first.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[4].size," / Letter Spacing ",n[4].trackingSize," px / Line Height ",n[4].leadingSize," % "),i.a.createElement("p",{className:"",style:{letterSpacing:n[5].trackingSize+"px",lineHeight:n[5].leadingSize+"%",fontFamily:a.second.name,fontSize:t[5].size+"px"}},"p / ",a.second.name),i.a.createElement("div",{className:"slider-info m-xs-bl"},t[5].size," / Letter Spacing ",n[5].trackingSize," px / Line Height ",n[5].leadingSize," % "))},k=function(e){var a=e.fontSizes,t=e.fontFamilies,n=e.spacings,l=e.className;return a instanceof Array&&a.length&&t instanceof Object&&n instanceof Array&&n.length?i.a.createElement("div",{className:l||"p-xs-tm p-md-tn"},i.a.createElement("section",{className:"grid p-xs-m p-xs-hs"},i.a.createElement("h1",{style:{letterSpacing:n[0].trackingSize+"px",lineHeight:n[0].leadingSize+"%",fontSize:a[0].size+"px",fontFamily:t.first.name},className:"col--12"},"Pippi Moves into Villa Villekulla")),i.a.createElement("section",{className:"grid p-xs-m p-xs-hs"},i.a.createElement("div",{className:"col-xs-12 col-lg-6 p-lg-rl"},i.a.createElement("h2",{style:{letterSpacing:n[1].trackingSize+"px",lineHeight:n[1].leadingSize+"%",fontSize:a[1].size+"px",fontFamily:t.first.name}},"The Cannibal King"),i.a.createElement("p",{style:{letterSpacing:n[5].trackingSize+"px",lineHeight:n[5].leadingSize+"%",fontSize:a[5].size+"px",fontFamily:t.second.name}},"Pippi had not forgotten her father. He was a sea captain who sailed on the great ocean, and Pippi had sailed with him in his ship until one day her father was blown overboard in a storm and disappeared. But Pippi was absolutely certain that he would come back. She would never believe that he had drowned; she was sure he had floated until he landed on an island inhabited by cannibals. And she thought he had become the king of all the cannibals and went around with a golden crown on his head all day long. ")),i.a.createElement("div",{className:"col-lg-6 col-xs-12 offset-lg-7 p-lg-ll m-xs-tl m-lg-tn"},i.a.createElement("h3",{style:{letterSpacing:n[2].trackingSize+"px",lineHeight:n[2].leadingSize+"%",fontSize:a[2].size+"px",fontFamily:t.first.name}},"A remarkable child"),i.a.createElement("h4",{style:{letterSpacing:n[3].trackingSize+"px",lineHeight:n[3].leadingSize+"%",fontSize:a[3].size+"px",fontFamily:t.first.name}},"\"It's that awful Bengt. He's always in a fight,\""),i.a.createElement("p",{style:{letterSpacing:n[5].trackingSize+"px",lineHeight:n[5].leadingSize+"%",fontSize:a[5].size+"px",fontFamily:t.second.name}},'"My papa is a cannibal king; it certainly isn\'t every child who has such a stylish papa," Pippi used to say with satisfaction. "And as soon as my papa has built himself a boat he will come and get me, and I\'ll be a cannibal princess. Heighho, won\'t that be exciting!"'),i.a.createElement("p",{style:{letterSpacing:n[5].trackingSize+"px",lineHeight:n[5].leadingSize+"%",fontSize:a[5].size+"px",fontFamily:t.second.name}},'\u2014 Excerpt from "Pippi Longstocking" by Astrid Lindgren, 1945'))),i.a.createElement("section",{className:"p-xs-hs"},i.a.createElement(y,{spacings:n,fontFamilies:t,fontSizes:a}))):""},w=function(e){var a=e.data,t=e.families,l=e.callback,s=Object(n.useState)([]),r=Object(c.a)(s,2),o=r[0],m=r[1];return Object(n.useEffect)((function(){m(a)}),[a]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"selectfont-searchbar"},i.a.createElement("input",{type:"search",placeholder:"Search",onChange:function(e){var t=e.target.value,n=new RegExp(t,"i");console.log(t,n),m(a.filter((function(e){return n.test(e.name)})))}})),i.a.createElement("section",{id:"selectfont",className:"flex-xs-parent flex-xs-wrap"},o.map((function(e,a){return i.a.createElement("div",{className:"font-card",key:a},i.a.createElement("div",{className:"font-card-nav flex-xs-parent"},i.a.createElement("p",{className:"txt-purewhite font-card-name",style:{fontFamily:e.name}},e.name),i.a.createElement("div",{className:"font-card-btns-container flex-xs-parent txt-purewhite"},i.a.createElement("div",{className:"font-card-btns flex-xs-parent ".concat(e.id===t.first.id?"chosen":""),onClick:function(){return l({first:e})}},"H"),i.a.createElement("div",{className:"font-card-btns flex-xs-parent ".concat(e.id===t.second.id?"chosen":""),onClick:function(){return l({second:e})}},"B"))),i.a.createElement("h4",{className:"txt-purewhite font-card-dummy",style:{fontFamily:e.name}},"Aa"))}))))},F=function(e){var a=e.id,t=e.size,n=e.setSize;return i.a.createElement("div",{id:"selectfont",className:"fontsize-slider-container flex-row"},i.a.createElement("span",{className:"txt-purewhite fontsize-head"},t[a].name),i.a.createElement("input",{className:"fontsize-slider-track fontsize-slider-track-limited-width",type:"range",value:t[a].size,min:t[a].min,max:t[a].max,onChange:n,"data-id":a}),i.a.createElement("input",{className:"fontsize-slider-input",type:"number",value:t[a].size,min:t[a].min,max:t[a].max,onChange:n,"data-id":a}))},j=t(25),M=t.n(j),H=t(26),C=t.n(H),O=t(27),L=t.n(O),P=t(28),T=t.n(P),A=function(e){var a=e.path;return i.a.createElement("div",{className:"selection-nav-container flex-xs-justify-even position-xs-a flex-xs-parent flex-xs-align-center w-100 bg-dark-transparent"},i.a.createElement("div",{className:"selection-nav-links"},i.a.createElement(r.b,{className:"flex-xs-parent flex-xs-vertical hover-underline",to:"".concat(a,"/")},i.a.createElement("img",{src:M.a,alt:"Choose font",className:"pairing-nav-icon"}),i.a.createElement("span",null,"Choose"))),i.a.createElement("div",{className:"selection-nav-links"},i.a.createElement(r.b,{className:"flex-xs-parent flex-xs-vertical hover-underline",to:"".concat(a,"/set-sizes")},i.a.createElement("img",{src:C.a,alt:"Choose font",className:"pairing-nav-icon"}),i.a.createElement("span",null,"Font Size"))),i.a.createElement("div",{className:"selection-nav-links"},i.a.createElement(r.b,{className:"flex-xs-parent flex-xs-vertical hover-underline",to:"".concat(a,"/spacing")},i.a.createElement("img",{src:L.a,alt:"Choose font",className:"pairing-nav-icon"}),i.a.createElement("span",null,"Spacing"))),i.a.createElement("div",{className:"selection-nav-links"},i.a.createElement(r.b,{className:"flex-xs-parent flex-xs-vertical hover-underline",to:"".concat(a,"/download")},i.a.createElement("img",{src:T.a,alt:"Choose font",className:"pairing-nav-icon"}),i.a.createElement("span",null,"PDF"))))},_=t(29),D=t.n(_),R=function(e,a){return e[+a.i]=Object(h.a)({},e[+a.i],{},a.v),Object(u.a)(e)},W=function(e,a){return Object(h.a)({},e,{},a)},B=function(e){var a=e.fontlist,t=e.setFontFamilies,n=e.fontFamilies;return i.a.createElement("div",{id:"selectspacing selection-fontpair-interface",className:"bg-dark"},i.a.createElement(w,{data:a,families:n,callback:t}))},G=function(e){var a=e.setFontSizes,t=e.fontSizes,n=function(e){e.preventDefault(),a({i:e.target.dataset.id,v:{size:e.target.value}})};return i.a.createElement("div",{id:"selectspacing",className:"p-xs-bxl"},i.a.createElement("div",{className:"fontsize-title p-xs-txl p-xs-bs"},i.a.createElement("p",null,"Choose the font size")),t.map((function(e,a){return i.a.createElement(F,{key:a,id:a,size:t,setSize:n})})))},I=function(e){var a=e.setSpacings,t=e.spacings,n=function(e){e.preventDefault(),a({i:e.target.dataset.id,v:{trackingSize:e.target.value}})},l=function(e){e.preventDefault(),a({i:e.target.dataset.id,v:{leadingSize:e.target.value}})};return i.a.createElement("div",{id:"selectspacing",className:"vh-100 p-xs-bxl"},i.a.createElement("div",{className:"fontsize-title p-xs-txl"},i.a.createElement("p",null,"Choose the font size")),t.map((function(e,a){return i.a.createElement(N,{key:a,id:a,spacing:t,setTracking:n,setLeading:l})})))},J=function(e){var a=e.spacings,t=e.fontSizes,n=e.fontFamilies;return i.a.createElement("section",{className:"pdf-container"},i.a.createElement("div",{id:"selectprint",className:"flex-row h-100"},i.a.createElement("button",{className:"print-button",onClick:function(e){e.preventDefault();var l=Object(x.renderToString)(i.a.createElement(k,{fontFamilies:n,fontSizes:t,spacings:a})),s=new v.a("p","mm","a4");s.fromHTML(l),s.save("pdf")}},"Download PDF")))},V=function(e){var a=e.fonts,t=Object(o.f)().path,l=Object(n.useReducer)(W,b),s=Object(c.a)(l,2),r=s[0],m=s[1],d=Object(n.useReducer)(R,z),p=Object(c.a)(d,2),f=p[0],g=p[1],x=Object(n.useReducer)((function(e,a){return e[+a.i]=Object(h.a)({},e[+a.i],{},a.v),Object(u.a)(e)}),S),E=Object(c.a)(x,2),v=E[0],N=E[1];Object(n.useEffect)((function(){if(a.length){var e=Math.floor(Math.random()*a.length),t=Math.floor(Math.random()*a.filter((function(a,t){return t!==e})).length);console.log(e,t,a[e],a[t]),m({first:a[e]}),m({second:a[t]})}}),[a]);var y=Object(n.useState)(!0),w=Object(c.a)(y,2),F=w[0],j=w[1];return i.a.createElement("article",{className:"container"},i.a.createElement("section",{className:"grid"},i.a.createElement("div",{className:"closeBtn position-xs-f display-md-n",onClick:function(){return j(!F)}},i.a.createElement("img",{src:D.a,alt:""})),i.a.createElement("div",{className:"selection col-sm-12 col-md-5 position-xs-a position-md-r ".concat(F?"active":"")},i.a.createElement(A,{path:t}),i.a.createElement("div",{id:"selection-fontpair-interface",className:"bg-dark"},i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"".concat(t)},i.a.createElement(B,{path:t,spacings:v,fontlist:a,setFontFamilies:m,fontFamilies:r,fontSizes:f})),i.a.createElement(o.a,{path:"".concat(t,"/set-sizes")},i.a.createElement(G,{path:t,spacings:v,setFontSizes:g,fontFamilies:r,fontSizes:f})),i.a.createElement(o.a,{path:"".concat(t,"/spacing")},i.a.createElement(I,{path:t,spacings:v,setSpacings:N,fontFamilies:r,fontSizes:f})),i.a.createElement(o.a,{path:"".concat(t,"/download")},i.a.createElement(J,{path:t,spacings:v,fontFamilies:r,fontSizes:f}))))),i.a.createElement("div",{id:"preview",className:"preview col-xs-12 offset-xs-0 col-md-8 offset-md-6 pairing-wrapper"},i.a.createElement(k,{fontSizes:f,fontFamilies:r,spacings:v}))))},$=function(){return i.a.createElement("section",{className:" bg-dark w-100 container p-xs-txl",id:"preview"},i.a.createElement("div",{className:"hero container max-xs-s"},i.a.createElement("h2",{className:"txt-purewhite"},"How to Pair Fonts?"),i.a.createElement("p",{className:"txt-purewhite"},"You may know what you are looking for or what you are doing, but here are some tips and good rules of thumb to take into consideration."),i.a.createElement("ul",{className:"txt-purewhite"},i.a.createElement("li",{className:"p-xs-s"},"Make sure to have nice contrast"),i.a.createElement("li",{className:"p-xs-s"},"Serif + San Serif looks nice together"),i.a.createElement("li",{className:"p-xs-s"},"You can pair fonts of the same family using variation to the spacing and weight"),i.a.createElement("li",{className:"p-xs-s"},"Create a visual hierarchy"),i.a.createElement("li",{className:"p-xs-s"},"Avoid choosing similar fonts")),i.a.createElement("p",{className:"txt-purewhite"},"With that said, those are just a few ground rules to keep in mind while exploring ",i.a.createElement("br",null),"Have fun font experimenting!")),i.a.createElement("div",{className:"p-xs-txl container max-xs-s"},i.a.createElement("div",null,i.a.createElement("h3",{className:"txt-purewhite"},"1 Choose Font"),i.a.createElement("img",{src:""})),i.a.createElement("div",null,i.a.createElement("h3",{className:"txt-purewhite"},"2 Set Font Size"),i.a.createElement("img",{src:""})),i.a.createElement("div",null,i.a.createElement("h3",{className:"txt-purewhite"},"3 Adjust the letter spacing and line height"),i.a.createElement("img",{src:""})),i.a.createElement("div",null,i.a.createElement("h3",{className:"txt-purewhite"},"4 Finish, download the pdf !"),i.a.createElement("img",{src:""}))))},U=t(30),Y=t.n(U),Z=function(e){var a=Object(n.useReducer)((function(e,a){return Object(h.a)({},e,{},a)}),b),t=Object(c.a)(a,2),l=t[0],s=t[1];return console.log(e),Object(n.useEffect)((function(){if(e.fonts.length){var a=e.fonts,t=Math.floor(Math.random()*a.length),n=Math.floor(Math.random()*a.filter((function(e,a){return a!==t})).length);console.log(t,n,a[t],a[n]),s({first:a[t]}),s({second:a[n]})}}),[e]),i.a.createElement("div",{className:"bg-dark"},i.a.createElement("section",{className:"landingpage grid"},i.a.createElement("div",{className:"container max-xs-s p-xs-txl col-md-6 col-xs-10"},i.a.createElement("h1",{className:"txt-purewhite"},"Experiment with font pairing and styling options while seeing the results live"),i.a.createElement("section",{className:"grid"},i.a.createElement("p",{className:"txt-purewhite col-md-6 col-xs-10 offset-xs-0 offset-md-6"},"Choose a body and header font to pair, and then customize each with styling options. Once you are complete with the process you will have the option to download a personal style-guide."),i.a.createElement(r.b,{className:"btn btn--secondary col-xs-10 offset-xs-0 offset-md-6",to:"pair-fonts"},"Get Started")),i.a.createElement("section",null,i.a.createElement("img",{className:"logo-outline",src:Y.a}))),i.a.createElement("div",{className:"container max-xs-s p-xs-txl col--6 display-xs-n display-md-b"},i.a.createElement(k,{fontSizes:z,fontFamilies:l,spacings:S,className:"landingpage__pairingdoc"}))))},K=t(31),X=t.n(K),q=t(32),Q=t.n(q),ee=t(33),ae=t.n(ee),te=t(34),ne=t.n(te),ie=t(35),le=t.n(ie),se=function(){return i.a.createElement("section",{className:"container max-xs-s p-xs-txl"},i.a.createElement("div",{className:"about-container h-100 flex-parent flex-col"},i.a.createElement("h1",{id:"about-title"},"About FontPairing"),i.a.createElement("p",null,"Well executed font pairing is important to achieve aesthetic finesse. Though it is difficult to imagine how fonts will look together along with various style attributes applied to them. This is why font pairing was created. It gives you the ability to easily play around with different options and pairings. FontPairing displays your font and style selections in real time, by laying the the process and options next to the previewed result. FontPairing is brought to you by a group of 5 passionate design students. We all have a passion for typography, design, and code."),i.a.createElement("ul",{id:"about-team-list",class:"flex-parent flex-row"},i.a.createElement("li",null,i.a.createElement("img",{className:"about-profile",src:X.a,alt:"Raymond"}),"Raymond"),i.a.createElement("li",null,i.a.createElement("img",{className:"about-profile",src:Q.a,alt:"Chunjia"}),"Chunjia"),i.a.createElement("li",null,i.a.createElement("img",{className:"about-profile",src:ae.a,alt:"Gustav"}),"Gustav"),i.a.createElement("li",null,i.a.createElement("img",{className:"about-profile",src:ne.a,alt:"Lovisa"}),"Lovisa"),i.a.createElement("li",null,i.a.createElement("img",{className:"about-profile",src:le.a,alt:"Dino"}),"Dino")),i.a.createElement("div",{id:"about-form",class:"flex-parent flex-col"},i.a.createElement("h2",{id:"about-contact"},"Contact Us"),i.a.createElement("p",null,"Appreaciate your feedbacks! let\u2019s make it better for fun!"),i.a.createElement("div",{id:"about-form-input",class:"flex-parent flex-row"},i.a.createElement("div",{id:"about-form-left"},i.a.createElement("div",{id:"about-form-name"},i.a.createElement("label",null,"Name"),i.a.createElement("input",{type:"text",placeholder:"John Doe"})),i.a.createElement("br",null),i.a.createElement("div",{id:"about-form-email"},i.a.createElement("label",null,"Email"),i.a.createElement("input",{type:"text",placeholder:"fontpairing123@example.com"}))),i.a.createElement("div",{id:"about-form-right"},i.a.createElement("textarea",{rows:"5",cols:"100"}))))))},ce=function(e){return function(e){return Object.keys(e).filter((function(e){return/^gsx\$/.test(e)}))}(e).reduce((function(a,t){return a[t.slice(4)]=e[t].$t,a}),{})},re=function(e){var a=e.fonts;return i.a.createElement("style",null,a.reduce((function(e,a){return e+a.import}),""))};var oe=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1dR_EZsCGs9CbicR9pdI0UbVC5fXWlRjZLgdNTsRDwM4/1/public/values?alt=json").then((function(e){return e.json()})).then((function(e){l(e.feed.entry.map(ce))}))}),[]),i.a.createElement(r.a,{style:{overflow:"auto"}},i.a.createElement(re,{fonts:t}),i.a.createElement(g,{title:"fontPairing"}),i.a.createElement("main",null,i.a.createElement(o.c,null,i.a.createElement(o.a,{exact:!0,path:"/"},i.a.createElement(Z,{fonts:t})),i.a.createElement(o.a,{path:"/pair-fonts"},i.a.createElement(V,{fonts:t})),i.a.createElement(o.a,{path:"/learn",component:$}),i.a.createElement(o.a,{path:"/about",component:se}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}]),[[36,1,2]]]);
//# sourceMappingURL=main.95a8d8db.chunk.js.map