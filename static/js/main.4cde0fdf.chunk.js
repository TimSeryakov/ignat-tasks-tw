(this["webpackJsonpignat-tasks-tw"]=this["webpackJsonpignat-tasks-tw"]||[]).push([[0],{19:function(e,t,a){e.exports={"message-bubble":"MessageBubble_message-bubble__3OKSI","message-bubble--right":"MessageBubble_message-bubble--right__1uBiy","message-bubble--left":"MessageBubble_message-bubble--left__2Irja","message-bubble__inner":"MessageBubble_message-bubble__inner__6caiq"}},24:function(e,t,a){e.exports={dark:"HW12_dark__1CTrO","dark-text":"HW12_dark-text__2PZu8",red:"HW12_red__1FXoG","red-text":"HW12_red-text__3e2Cb",some:"HW12_some__tQ_4C","some-text":"HW12_some-text__2dYYo"}},39:function(e,t,a){e.exports=a.p+"static/media/fuji.0e1c42b1.png"},40:function(e,t,a){e.exports=a.p+"static/media/koifish.de4622b8.png"},41:function(e,t,a){e.exports=a.p+"static/media/luckycat.0257e4c8.png"},42:function(e,t,a){e.exports=a.p+"static/media/lionstatue.6c09dc74.png"},44:function(e,t,a){e.exports={range:"SuperRange_range__2CZOJ"}},48:function(e,t,a){e.exports=a(78)},53:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(53),a(54),a(7)),m=a(3);var s,i=function(){return l.a.createElement("div",{className:"grid place-content-center text-center text-3xl"},l.a.createElement("div",null,"404"),l.a.createElement("div",null,"Page not found!"),l.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},u=a(2),E=a(90),d=a(4);!function(e){e[e.small=8]="small",e[e.normal=10]="normal",e[e.big=12]="big"}(s||(s={}));var b=function(e){var t=e.color,a=void 0===t?"teal":t,n=e.size,r=void 0===n?"normal":n,c=e.className,o=Object(d.a)(e,["color","size","className"]),m="\n         ".concat(c||""," \n         bg-").concat(a,"-200 hover:bg-").concat(a,"-300 active:bg-").concat(a,"-400 h-").concat(s[r]," \n         px-").concat("big"===r?"10":"5"," text-gray-800 inline-flex appearance-none \n         items-center justify-center transition-all duration-200 select-none relative \n         whitespace-no-wrap align-middle leading-tight outline-none focus:outline-none \n         min-w-10 text-base focus:shadow-outline font-semibold rounded-md mx-2");return l.a.createElement("button",Object.assign({className:m},o))};function g(e){var t=e.tasks.map((function(t){return l.a.createElement("li",{key:t.id,className:"py-2 px-3 my-3 border border-gray-600 rounded-md flex justify-between items-center"},l.a.createElement("span",null,l.a.createElement("b",null,t.name)," [",t.priority,"]"),l.a.createElement("button",{onClick:function(){e.removeTask(t.id)}},l.a.createElement("span",{role:"img","aria-label":"delete"},"\u274c")))}));return l.a.createElement("section",{className:"w-full flex justify-center text-gray-100 mt-10"},l.a.createElement("div",{className:"border bg-gray-700 inline-block p-6 rounded-lg text-left"},l.a.createElement("h3",{className:"text-2xl pb-4"},e.name),l.a.createElement("ul",{className:"list-none"},t),l.a.createElement("div",null,l.a.createElement("h4",{className:"text-xl pb-2 pt-4"},"Priority filter:"),l.a.createElement(b,{onClick:function(){e.changeFilter("all")},color:"yellow"},"All"),l.a.createElement(b,{onClick:function(){e.changeFilter("height")},color:"red"},"Height"),l.a.createElement(b,{onClick:function(){e.changeFilter("middle")},color:"blue"},"Middle"),l.a.createElement(b,{onClick:function(){e.changeFilter("low")},color:"green"},"Low"))))}function p(){var e=Object(n.useState)([{id:Object(E.a)(),name:"Work",priority:"height"},{id:Object(E.a)(),name:"Anime",priority:"low"},{id:Object(E.a)(),name:"Gaming",priority:"middle"},{id:Object(E.a)(),name:"ReactJS",priority:"height"},{id:Object(E.a)(),name:"HTML",priority:"low"}]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),m=o[0],s=o[1];var i=a;return"low"===m&&(i=a.filter((function(e){return"low"===e.priority}))),"middle"===m&&(i=a.filter((function(e){return"middle"===e.priority}))),"height"===m&&(i=a.filter((function(e){return"height"===e.priority}))),"all"===m&&(i=a.filter((function(e){return e.priority}))),l.a.createElement("section",{className:""},l.a.createElement(g,{name:"What to learn",tasks:i,removeTask:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},changeFilter:function(e){s(e)}}))}var f=a(39),h=a.n(f),v=a(40),x=a.n(v),k=a(41),N=a.n(k),y=a(42),C=a.n(y),j=a(19),O=a.n(j);function w(e){return l.a.createElement("section",null,l.a.createElement("div",{className:"".concat(O.a["message-bubble"]," ").concat(e.incoming?O.a["message-bubble--left"]:O.a["message-bubble--right"])},l.a.createElement("div",{className:"".concat(O.a["message-bubble__inner"])},l.a.createElement("img",{src:e.avatar,alt:"Avatar"}),l.a.createElement("div",null,l.a.createElement("h4",null,e.name," ",l.a.createElement("span",null,"@ ",e.date)),l.a.createElement("p",null,e.text)))))}function S(){return l.a.createElement("section",null,l.a.createElement(w,{incoming:!0,name:"Jack",avatar:h.a,date:"29.09.2020",text:"(TypeScript) \u0434\u043e\u043c\u0430\u0448\u043a\u0430 \u043e\u0442 \u043c\u0435\u043d\u044f \u21161: \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u0430\u0440\u0445\u0438\u0432 \u043c\u043d\u0435 \u0438\u043b\u0438 \u0432\u044b\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430 github \u0438 \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u043c\u043d\u0435 \u0441\u0441\u044b\u043b\u043a\u0443: - \u043b\u044e\u0431\u0443\u044e \u0434\u043e\u043c\u0430\u0448\u043a\u0443 \u0432\u044b \u041d\u0415 \u043e\u0431\u044f\u0437\u0430\u043d\u044b \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0435\u0441\u043b\u0438 \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f - \u043f\u0438\u0448\u0435\u043c \u043c\u043d\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0445\u044d\u043b\u043f - \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0447\u0442\u043e \u0432\u0441\u0435 \u0434\u043e\u043c\u0430\u0448\u043a\u0438 \u0431\u0443\u0434\u0443\u0442 \u0432 1 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 - \u043b\u0443\u0447\u0448\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 \u0432 \u0410pp \u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0430\u043c \u043a\u043e\u0434 \u0434\u043e\u043c\u0430\u0448\u043a\u0438"}),l.a.createElement(w,{incoming:!1,name:"Bob",avatar:x.a,date:"29.09.2020",text:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442,  \u0441\u0442\u0438\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e \u043a\u0430\u043a \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c\u043c\u0435 (\u0438\u043c\u044f, \u0442\u0435\u043a\u0441\u0442, \u0432\u0440\u0435\u043c\u044f, \u0443\u0433\u043e\u043b\u043e\u043a (\u0437\u0430\u0433\u0443\u0433\u043b\u0438\u0442\u044c \u043a\u0430\u043a \u0438\u043b\u0438 \u0443\u043a\u0440\u0430\u0441\u0442\u044c \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430/\u0443 \u0434\u0440\u0443\u0433\u0430)) - \u043f\u043e\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439\u0442\u0435 \u043f\u0440\u043e\u043f\u0441\u044b!!! \u0438\u0445 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044e \u0438 module.css"}),l.a.createElement(w,{incoming:!0,name:"John",avatar:C.a,date:"29.09.2020",text:"\u043d\u0443\u0436\u043d\u043e \u0442\u0438\u043f\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u043f\u0441\u044b \u0441\u0440\u0430\u0437\u0443, any - \u043a\u0440\u0430\u0439\u043d\u0435 \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u0435\u043d \u0434\u0430\u0436\u0435 \u0432\u043d\u0430\u0447\u0430\u043b\u0435, \u0435\u0441\u043b\u0438 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435 \u043a\u0430\u043a - \u043f\u0438\u0448\u0435\u043c \u043c\u043d\u0435 \u0438\u043b\u0438 \u043d\u0430 \u0445\u044d\u043b\u043f \u043d\u0435 \u0437\u0430\u043b\u0438\u0432\u0430\u0442\u044c \u043d\u0430 \u0433\u0438\u0442 \u043f\u0430\u043f\u043a\u0443 .idea (\u0432 \u044d\u0442\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0430\u0448\u0435\u0433\u043e \u0432\u044d\u0431\u0448\u0442\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u043d\u0443\u0436\u043d\u044b, \u044d\u0442\u0443 \u043f\u0430\u043f\u043a\u0443 \u0437\u0430\u043b\u0438\u0432\u0430\u044e\u0442 \u044d\u0433\u043e\u0438\u0441\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0445\u043e\u0442\u044f\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435)"}),l.a.createElement(w,{incoming:!1,name:"Mary",avatar:N.a,date:"29.09.2020",text:"\u043d\u0443 \u0438 Ctrl + Alt + L \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0447\u0442\u043e\u0431 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043a\u043e\u0434 \u0431\u044b\u043b (\u044d\u0442\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u043e\u0431\u043b\u0435\u0433\u0447\u0430\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0447\u0442\u043e \u0442\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442) \u043a\u0442\u043e \u043d\u0435 \u0437\u043d\u0430\u0435\u0442 \u0433\u0438\u0442 - \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u044b\u043b\u0430\u0442\u044c \u043c\u043d\u0435 \u0430\u0440\u0445\u0438\u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 (!!! \u0431\u0435\u0437 \u043f\u0430\u043f\u043a\u0438 node_modules \u0438 .idea !!!) \u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u044f"}))}var _=a(18),T=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onPressEnter,c=e.errorMessage,o=e.placeHolder,m=void 0===o?"Type something...":o,s=e.className,i=e.spanClassName,u=Object(d.a)(e,["type","onChange","onChangeText","onKeyPress","onPressEnter","errorMessage","placeHolder","className","spanClassName"]),E="".concat(c?"border-red-400 bg-red-100":"border-gray-500 bg-gray-300"," \n                        flex-grow px-3 py-1 mr-2 text-gray-900 bg-gray-300 border border-gray-500 rounded-md focus:outline-none focus:shadow-outline\n                        ").concat(s||""),b="text-red-400 pl-3 text-sm ".concat(i||"");return l.a.createElement("div",{className:"inline-block text-left"},l.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&r&&r()},className:E,placeholder:m},u)),l.a.createElement("br",null),c&&l.a.createElement("span",{className:b},c))};function H(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),m=o[0],s=o[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),g=d[0],p=d[1],f=function(){""!==a?(alert("Hello ".concat(a)),h(a),r("")):p("Enter your name, please!")},h=function(e){var t={id:Object(E.a)(),name:e};s([t].concat(Object(_.a)(m)))};return l.a.createElement("section",{className:"pt-64"},l.a.createElement("div",{className:"flex pb-3 py-4 px-4 w-64 mx-auto"},l.a.createElement(T,{placeholder:"Enter your name...",value:a,onChange:function(e){r(e.currentTarget.value),p("")},onKeyPress:function(e){"Enter"===e.key&&f()},errorMessage:g}),l.a.createElement(b,{onClick:f,color:"blue"},"Boom!")),l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{className:"text-gray-600 font-semibold"},"Visitors: ",m.length)))}function D(){var e=function(){alert("Clicked!")};return l.a.createElement("section",{className:"mt-1 text-center pb-10"},l.a.createElement("h1",{className:"p-10 font-major text-3xl text-gray-700 lowercase"},"Custom Elements Demonstration"),l.a.createElement("div",{className:"mb-12"},l.a.createElement("div",{className:"mb-4"},l.a.createElement(T,null)),l.a.createElement("div",{className:"mb-4"},l.a.createElement(T,{onPressEnter:function(){console.log("Hi there!")},errorMessage:"Some error text!"})),l.a.createElement("div",{className:"mb-4"},l.a.createElement(T,{placeHolder:"Enter your name..."}))),l.a.createElement("div",{className:"mb-4"},l.a.createElement(b,{onClick:e},"Default"),l.a.createElement(b,{onClick:e,color:"red"},"Default"),l.a.createElement(b,{onClick:e,color:"blue"},"Default"),l.a.createElement(b,{onClick:e,color:"green"},"Default")),l.a.createElement("div",{className:"mb-10"},l.a.createElement(b,{onClick:e,color:"purple"},"Default"),l.a.createElement(b,{onClick:e,color:"orange"},"Default"),l.a.createElement(b,{onClick:e,color:"pink"},"Default"),l.a.createElement(b,{onClick:e,color:"yellow"},"Default")),l.a.createElement("div",{className:"mb-4"},l.a.createElement(b,{onClick:e,size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"red",size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"blue",size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"green",size:"big"},"Big")),l.a.createElement("div",{className:"mb-10"},l.a.createElement(b,{onClick:e,color:"purple",size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"orange",size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"pink",size:"big"},"Big"),l.a.createElement(b,{onClick:e,color:"yellow",size:"big"},"Big")),l.a.createElement("div",{className:"mb-4"},l.a.createElement(b,{onClick:e,size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"red",size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"blue",size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"green",size:"small"},"Small")),l.a.createElement("div",{className:"mb-10"},l.a.createElement(b,{onClick:e,color:"purple",size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"orange",size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"pink",size:"small"},"Small"),l.a.createElement(b,{onClick:e,color:"yellow",size:"small"},"Small")))}var z=function(e){e.type,e.onChange;var t=e.onChangeChecked,a=e.className,r=e.customSpanClassName,c=e.children,o=Object(d.a)(e,["type","onChange","onChangeChecked","className","customSpanClassName","children"]),m=Object(n.useState)(!1),s=Object(u.a)(m,2),i=s[0],E=s[1],b="".concat(a||""),g="pl-1 ".concat(r||"");return l.a.createElement("label",null,l.a.createElement("input",Object.assign({type:"checkbox",className:b,checked:i,onChange:function(e){E(e.currentTarget.checked),t&&t(e.currentTarget.checked)}},o)),c&&l.a.createElement("span",{className:g},c))};var B=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=a?"":"Error Message Text Goes Here",o=function(){c?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},m=Object(n.useState)(!1),s=Object(u.a)(m,2),i=s[0],E=s[1];return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 4"),l.a.createElement("div",{className:"flex flex-col items-center"},l.a.createElement("div",{className:"p-5"},l.a.createElement(T,{value:a,onChangeText:r,onPressEnter:o,errorMessage:c})),l.a.createElement("div",{className:"p-5"},l.a.createElement(b,{color:"red",onClick:o},"Delete ")),l.a.createElement("div",{className:"p-5"},l.a.createElement(z,{checked:i,onChangeChecked:E},"Some text "),l.a.createElement("br",null),l.a.createElement(z,{checked:i,onChange:function(e){return E(e.currentTarget.checked)}}))))};var M=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,c=Object(d.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),m=Object(u.a)(o,2),s=m[0],i=m[1],E=r||{},b=E.children,g=E.onDoubleClick,p=E.className,f=Object(d.a)(E,["children","onDoubleClick","className"]),h="text-xl bg-gray-300 px-3 py-1 rounded-md ".concat(p);return l.a.createElement(l.a.Fragment,null,s?l.a.createElement(T,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),t&&t(e)},onPressEnter:function(){i(!1),a&&a()}},c)):l.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),g&&g(e)},className:h},f),b||c.value))};var F=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 6"),l.a.createElement("div",{className:"mb-5"},l.a.createElement(M,{value:a,onChangeText:r,spanProps:{children:a?void 0:"You can edit me! \ud83e\udd16"}})),l.a.createElement("div",{className:"text-center"},l.a.createElement(b,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("editable-span-value",a)}},"\xa0\xa0save\xa0\xa0"),l.a.createElement(b,{onClick:function(){r(function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("editable-span-value",""))}},"restore")))};var L=function(){return l.a.createElement("div",{className:"py-5"},l.a.createElement(F,null),l.a.createElement(B,null),l.a.createElement(D,null),l.a.createElement(H,null),l.a.createElement(p,null),l.a.createElement(S,null))},P=function(){return l.a.createElement("div",{className:"inline-block text-center"},l.a.createElement("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-black",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l.a.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),l.a.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})))},W=function(e){var t=e.message,a=void 0===t?"Loading...":t;return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement("span",{className:"text-black text-3xl animate-pulse"},a))},R=a(13),A=a(22),J={isLoading:!1},I=function(e){return{type:"SET_HW10_LOADING",isLoading:e}};var K=function(){var e=Object(R.c)((function(e){return e.hw10})).isLoading,t=Object(R.b)();return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 10"),e?l.a.createElement(W,null):l.a.createElement("div",{className:"inline-block text-center"},l.a.createElement(b,{onClick:function(){t(I(!0)),setTimeout((function(){t(I(!1))}),3e3)},color:"purple"},"Set loading...")))},G=a(44),Y=a.n(G),V=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,r=Object(d.a)(e,["type","onChange","onChangeRange","className"]),c="".concat(Y.a.range," ").concat(n||"");return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:c},r)))},Z=a(89),q=function(e){var t=e.onChangeRange,a=e.value,n=Object(d.a)(e,["onChangeRange","value"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Z.a,Object.assign({value:a,onChange:function(e,a){t(a)},valueLabelDisplay:"auto"},n)))};var Q=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(100),o=Object(u.a)(c,2),m=o[0],s=o[1];return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 11"),l.a.createElement("div",{className:"mb-16"},l.a.createElement("span",{className:"inline-block w-100px font-major text-2xl"},a.toString().padStart(2,"0")),l.a.createElement(V,{value:a,onChangeRange:r})),l.a.createElement("div",{className:"w-200px mx-auto"},l.a.createElement("span",{className:"inline-block w-100px font-major text-2xl"},a.toString().padStart(2,"0")),l.a.createElement(q,{value:[a,m],onChangeRange:function(e){r(e[0]),s(e[1])}}),l.a.createElement("span",{className:"inline-block w-100px font-major text-2xl"},m.toString().padStart(2,"0"))))},U=function(e){var t=e.options,a=void 0===t?[]:t,n=(e.onChange,e.onChangeOption),r=Object(d.a)(e,["options","onChange","onChangeOption"]),c=a?a.map((function(e,t){return l.a.createElement("option",{key:t},e)})):[];return l.a.createElement(l.a.Fragment,null,l.a.createElement("select",Object.assign({onChange:function(e){n&&n(e.currentTarget.value)}},r),c))},X=function(e){e.type;var t=e.name,a=e.options,n=e.value,r=(e.onChange,e.onChangeOption),c=Object(d.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){r&&r(e.currentTarget.value)},m=a?a.map((function(e,a){return l.a.createElement("span",{className:"px-3",key:Object(E.a)()},l.a.createElement("label",{key:"".concat(t," - ").concat(a)},l.a.createElement("input",Object.assign({type:"radio",name:e,value:e,checked:e===n,onChange:o},c)),e))})):[];return l.a.createElement(l.a.Fragment,null,m)},$=["collect","coarse","pool","plant","woolen"];var ee=function(){var e=Object(n.useState)($[1]),t=Object(u.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 7"),l.a.createElement("div",{className:"p-10"},l.a.createElement(U,{options:$,value:a,onChangeOption:r})),l.a.createElement("div",{className:"p-10"},l.a.createElement(X,{name:"radio",options:$,value:a,onChangeOption:r})))},te=function(e,t){switch(t.type){case"SORT":return"alphabetically"===t.payload?Object(_.a)(e).sort((function(e,t){return e.name.localeCompare(t.name)})):"reverseAlphabetically"===t.payload?Object(_.a)(e).sort((function(e,t){return e.name.localeCompare(t.name)})).reverse():e;case"CHECK":return t.payload?e.filter((function(e){return e.age>t.payload})):e;default:return e}},ae=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ne=function(){var e=Object(n.useState)(ae),t=Object(u.a)(e,2),a=t[0],r=t[1],c=a.map((function(e){return l.a.createElement("div",{key:e._id},l.a.createElement("span",{className:"font-bold"},e.name)," ",l.a.createElement("span",null,"\u0412\u043e\u0437\u0440\u0430\u0441\u0442: ",e.age))}));return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 8"),c,l.a.createElement("div",{className:"mt-10"},l.a.createElement(b,{onClick:function(){return r(te(ae,{type:"SORT",payload:"alphabetically"}))},color:"blue"},"sort up"),l.a.createElement(b,{onClick:function(){return r(te(ae,{type:"SORT",payload:"reverseAlphabetically"}))},color:"green"},"sort down"),l.a.createElement(b,{onClick:function(){return r(te(ae,{type:"CHECK",payload:18}))},color:"red"},"check 18")))};var le=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),m=o[0],s=o[1],i=Object(n.useState)(!1),E=Object(u.a)(i,2),d=E[0],g=E[1],p=function(){clearTimeout(a)},f=m.toLocaleTimeString(),h=m.toLocaleDateString();return l.a.createElement("div",null,l.a.createElement("div",{className:"h-24"},l.a.createElement("div",{className:"text-xl text-gray-700 lowercase font-major whitespace-pre-line cursor-default inline-block mx-auto",onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)}},f),d&&l.a.createElement("div",{className:"text-xl text-gray-700 lowercase font-major whitespace-pre-line cursor-default"},h)),l.a.createElement(b,{onClick:function(){p();var e=window.setInterval((function(){s(new Date)}),1e3);r(e)}},"start"),l.a.createElement(b,{onClick:p},"stop"))};var re=function(){return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 9"),l.a.createElement(le,null))};var ce=function(){return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement(Q,null),l.a.createElement(K,null),l.a.createElement(re,null),l.a.createElement(ne,null),l.a.createElement(ee,null))},oe=a(24),me=a.n(oe),se={theme:"dark"},ie=["dark","red","some"];var ue=function(){var e=Object(R.c)((function(e){return e.hw12})).theme,t=Object(R.b)();return l.a.createElement("div",{className:"py-5 text-center ".concat(me.a[e])},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major ".concat(me.a[e+"-text"])},"homework 12"),l.a.createElement(U,{options:ie,value:e,onChangeOption:function(e){t(function(e){return{type:"SET_THEME",theme:e}}(e))}}))},Ee=a(45),de=a.n(Ee).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/auth/test"}),be=function(e){return de.post("",{success:e}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},ge=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(u.a)(c,2),m=o[0],s=o[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mb-5"},l.a.createElement(z,{checked:a,onChangeChecked:r},a.toString())),l.a.createElement(b,{onClick:function(){be(a).then((function(e){return s([e.errorText,e.info])}))}},"Send checkbox value to server"),l.a.createElement("div",{className:"pt-5"},l.a.createElement("h2",{className:"text-4xl"},!!m.length&&"Answer:"),l.a.createElement("h3",{className:"text-3xl"},m[0]&&m[0]),l.a.createElement("h3",{className:"text-2xl"},m[1]&&m[1])))},pe=function(){return l.a.createElement("div",{className:"py-5 text-center"},l.a.createElement("h1",{className:"p-10 text-3xl text-gray-700 lowercase font-major"},"homework 13"),l.a.createElement(ge,null))};var fe=function(){return l.a.createElement("div",{className:"py-5"},l.a.createElement(ue,null),l.a.createElement(pe,null))},he="/pre-junior",ve="/junior",xe="/junior-plus",ke="/todo",Ne="/chat",ye="/hello",Ce="/custom-elements-demo",je="/HW4";var Oe=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/",exact:!0,render:function(){return l.a.createElement(m.a,{to:ve})}}),l.a.createElement(m.b,{path:ke,render:function(){return l.a.createElement(p,null)}}),l.a.createElement(m.b,{path:Ne,render:function(){return l.a.createElement(S,null)}}),l.a.createElement(m.b,{path:ye,render:function(){return l.a.createElement(H,null)}}),l.a.createElement(m.b,{path:Ce,render:function(){return l.a.createElement(D,null)}}),l.a.createElement(m.b,{path:je,render:function(){return l.a.createElement(B,null)}}),l.a.createElement(m.b,{path:he,render:function(){return l.a.createElement(L,null)}}),l.a.createElement(m.b,{path:ve,render:function(){return l.a.createElement(ce,null)}}),l.a.createElement(m.b,{path:xe,render:function(){return l.a.createElement(fe,null)}}),l.a.createElement(m.b,{render:function(){return l.a.createElement(i,null)}})," ")))};a(77);function we(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"hmt",className:"hidden-menu-ticker"}),l.a.createElement("label",{className:"btn-menu",htmlFor:"hmt"},l.a.createElement("span",{className:"first"}),l.a.createElement("span",{className:"second"}),l.a.createElement("span",{className:"third"})),l.a.createElement("ul",{className:"hidden-menu flex-col"},l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/chat",className:"mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"},l.a.createElement("b",null,"Chat")," (Task 01) ")),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/todo",className:"mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"},l.a.createElement("b",null,"TODO")," (Task 02) ")),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/hello",className:"mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"},l.a.createElement("b",null,"Hello")," (Task 03) ")),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/custom-elements-demo",className:"mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"},l.a.createElement("b",null,"Custom Elements Demo")," (Task 04) ")),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/HW4",className:"mt-10 mx-3 p-3 rounded-md bg-green-200 text-green-700 hover:bg-red-200"},l.a.createElement("b",null,"\u041a\u043e\u0434 \u0418\u0433\u043d\u0430\u0442\u0430 (HW4)")," (Task 04) ")),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/pre-junior",className:"mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"},l.a.createElement("b",null,"Pre-Junior"))),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/junior",className:"mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"},l.a.createElement("b",null,"Junior"))),l.a.createElement("li",{className:"inline-block mt-10"},l.a.createElement(o.b,{to:"/junior-plus",className:"mt-10 mx-3 p-3 rounded-md bg-blue-200 text-blue-700 hover:bg-red-200"},l.a.createElement("b",null,"Junior+")))))}var Se=function(){return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App h-full"},l.a.createElement(we,null),l.a.createElement(Oe,null)))},_e=a(17),Te=Object(_e.b)({hw10:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HW10_LOADING":return Object(A.a)({},e,{isLoading:t.isLoading});default:return e}},hw12:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME":return Object(A.a)({},e,{theme:t.theme});default:return e}}}),He=Object(_e.c)(Te),De=He;window.store=He,c.a.render(l.a.createElement(R.a,{store:De},l.a.createElement(Se,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4cde0fdf.chunk.js.map