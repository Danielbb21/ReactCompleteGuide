(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{42:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__xY6nT"}},43:function(e,t,c){e.exports={comments:"Comments_comments__vhivb"}},44:function(e,t,c){e.exports={form:"NewCommentForm_form__3n545",loading:"NewCommentForm_loading__1MRs2",control:"NewCommentForm_control__zEDwO",actions:"NewCommentForm_actions__3yWPT"}},45:function(e,t,c){e.exports={item:"CommentItem_item__2ogX2"}},46:function(e,t,c){e.exports={comments:"CommentsList_comments__13-bp"}},50:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(42),m=c.n(a),r=c(1),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(35),d=c(43),u=c.n(d),l=c(44),b=c.n(l),x=c(33),O=c(34),h=c(15),f=function(e){var t=Object(n.useRef)(),c=Object(x.a)(O.a),s=c.sendRequest,o=c.status,a=(c.data,c.error),m=e.onAddedComment,j=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(n.useEffect)((function(){"completed"!==o||a||m()}),[o,a,m]),Object(r.jsxs)("form",{className:b.a.form,onSubmit:j,children:["pending"===o&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}),Object(r.jsxs)("div",{className:b.a.control,onSubmit:j,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:b.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=c(45),_=c.n(p),N=function(e){return Object(r.jsx)("li",{className:_.a.item,children:Object(r.jsx)("p",{children:e.text})})},v=c(46),C=c.n(v),g=function(e){return Object(r.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],o=t[1],a=Object(s.j)().quoteId,m=Object(x.a)(O.c),j=m.sendRequest,d=m.status,l=m.data;Object(n.useEffect)((function(){j(a)}),[a,j]);var b,p=Object(n.useCallback)((function(){j(a)}),[j,a]);return"pending"===d&&(b=Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})})),"completed"===d&&l&&l.length>0&&(b=Object(r.jsx)(g,{comments:l})),"completed"!==d||l&&0!==l.length||(b=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(r.jsxs)("section",{className:u.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!c&&Object(r.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(r.jsx)(f,{quoteId:a,onAddedComment:p}),b]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(x.a)(O.e,!0),a=c.sendRequest,m=c.status,i=c.data,d=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}):d?Object(r.jsx)("p",{className:"centered",children:d}):i.text?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:i.text,author:i.author}),Object(r.jsx)(s.c,{path:e.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(r.jsx)(q,{})})]}):Object(r.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.0f909335.chunk.js.map