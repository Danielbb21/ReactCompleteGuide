(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{39:function(e,t,c){e.exports={card:"Card_card__2gqPr"}},40:function(e,t,c){e.exports={form:"QuoteForm_form__DoOmS",loading:"QuoteForm_loading__3pec9",control:"QuoteForm_control__4XrxP",actions:"QuoteForm_actions__3Rid3"}},52:function(e,t,c){"use strict";c.r(t);var o=c(35),n=c(0),r=c(2),s=c(39),a=c.n(s),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(15),d=c(40),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(o.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{when:s,message:function(e){return"Are you sure you want to live, all your data will be lost"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault(),console.log("aqui");var c=d.current.value,o=b.current.value;e.onAddQuote({author:c,text:o})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){console.log("aqui"),a(!1)},className:"btn",children:"Add Quote"})})]})})]})},x=c(33),f=c(34);t.default=function(){var e=Object(r.h)(),t=Object(x.a)(f.b),c=t.sendRequest,o=t.status;Object(n.useEffect)((function(){"completed"===o&&e.push("/quotes")}),[o,e]);return Object(i.jsx)(b,{isLoading:"pending"===o,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=6.41004b5b.chunk.js.map