(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={list:"Statistics_list__1KrTO"}},10:function(e,t,a){e.exports={paragraph:"Notifications_paragraph__oWDIz"}},11:function(e,t,a){e.exports={title:"SectionTitle_title__RpU6Z"}},19:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(7),s=a.n(n),r=a(3),i=a(5),o=a(8),l=a(9),b=a(13),u=a(12),d=a(6),j=a.n(d),h=a(0);function O(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{className:j.a.block,children:t.map((function(e){return Object(h.jsx)("button",{className:j.a.button,value:e,type:"button",onClick:function(e){return a(e)},children:e},e)}))})}var f=a(10),p=a.n(f);function v(e){var t=e.message;return Object(h.jsx)("p",{className:p.a.paragraph,children:t})}var k=a(11),x=a.n(k);function g(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:x.a.title,children:t})," ",a]})}var m=a(1),N=a.n(m);function _(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:N.a.list,children:[Object(h.jsxs)("li",{className:N.a.item,children:["Good:",t]}),Object(h.jsxs)("li",{className:N.a.item,children:["Neutral:",a]}),Object(h.jsxs)("li",{className:N.a.item,children:["Bad:",c]}),Object(h.jsxs)("li",{className:N.a.item,children:["Total:",n]}),Object(h.jsxs)("li",{className:N.a.item,children:["Positive feedback:",s,"%"]})]})})}var F=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.feedbackHandler=function(t){var a=t.currentTarget.textContent.toLowerCase();e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(r.a)({},a,e[a]+1))}))},e.countTotalFeedback=function(t){return Object.values(e.state).reduce((function(e,t){return e+=t}))},e.countPositiveFeedbackPercentage=function(t){return Math.trunc(e.state.good/e.countTotalFeedback()*100)},e.NoFeedback=function(){return 0===e.state.good&&0===e.state.neutral&&0===e.state.bad},e}return Object(l.a)(a,[{key:"render",value:function(){var e=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:e,onLeaveFeedback:this.feedbackHandler})}),Object(h.jsx)(g,{title:"Statistics",children:this.NoFeedback()?Object(h.jsx)(v,{message:"No feedback given"}):Object(h.jsx)(_,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(c.Component);s.a.render(Object(h.jsx)(F,{}),document.querySelector("#root"))},6:function(e,t,a){e.exports={block:"FeedbackOptions_block__1iVK4",button:"FeedbackOptions_button__h6oNT"}}},[[19,1,2]]]);
//# sourceMappingURL=main.7dcef6ee.chunk.js.map