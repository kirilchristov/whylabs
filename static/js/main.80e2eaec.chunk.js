(this.webpackJsonpwhylabs=this.webpackJsonpwhylabs||[]).push([[0],{10:function(e,t,s){},11:function(e,t,s){"use strict";s.r(t);for(var n=s(0),c=s(1),u=s.n(c),a=s(3),r=s.n(a),i=(s(9),s(10),[{date:1604440297969,typeNull:12,typeString:21,typeNumeric:7,typeBoolean:18},{date:1604440297970,typeNull:16,typeString:100,typeNumeric:3,typeBoolean:10},{date:1604440315789,typeNull:15,typeString:29,typeNumeric:4,typeBoolean:21},{date:1604440330496,typeNull:44,typeString:230,typeNumeric:3,typeBoolean:0},{date:1604440330882,typeNull:76,typeString:10,typeNumeric:19,typeBoolean:160}]),l=i[0].date,p=[],y=[],o=[],d=0;d<i.length;d++)i[d].date-l<1e4?p.push(i[d]):i[d].date-l<2e4?y.push(i[d]):o.push(i[d]);var h=function(e){for(var t=0,s=0,n=0,c=0,u=0;u<e.length;u++)t+=e[u].typeNull,s+=e[u].typeString,n+=e[u].typeNumeric,c+=e[u].typeBoolean;return{typeNull:t,typeString:s,typeNumeric:n,typeBoolean:c}},j=function(e){return Object.keys(e).reduce((function(t,s){return e[t]>e[s]?t:s}))},b=function(e){var t=e.sumSameBuckets(e.bucket),s=e.findCss(t),c=t[s],u=Object.keys(t);return Object(n.jsxs)("div",{className:"bucket",children:[Object(n.jsxs)("h1",{children:["The largest in this bucket is ",s," with value of ",c]}),u.map((function(e){return Object(n.jsxs)("div",{className:"singleGraph",children:[Object(n.jsxs)("p",{children:[e," : ",t[e]]}),Object(n.jsx)("div",{className:e===s?"largest":e,style:{width:t[e],height:10}})]},e)}))]})};var m=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(b,{data:i,findCss:j,bucket:p,sumSameBuckets:h}),Object(n.jsx)(b,{data:i,findCss:j,bucket:y,sumSameBuckets:h}),Object(n.jsx)(b,{data:i,findCss:j,bucket:o,sumSameBuckets:h})]})};r.a.render(Object(n.jsx)(u.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.80e2eaec.chunk.js.map