/*! For license information please see 18.41721523.chunk.js.LICENSE.txt */
(this["webpackJsonpyoutube-kids"]=this["webpackJsonpyoutube-kids"]||[]).push([[18],{147:function(e,r,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===i)for(var o in n)t.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(r,[]))||(e.exports=n)}()},148:function(e,r,t){},150:function(e,r,t){"use strict";t.r(r);var n=t(99),a=t(100),i=t(108),c=t(106),o=t(0),u=t.n(o),s=t(13),l=t(36),d=t(94),f=function(e){var r=e.round,t=e.gameFinished,n=e.goBackToVideo;return u.a.createElement("div",null,u.a.createElement(d.a,{className:"button button--warning text-center",onClick:t?n:void 0,disabled:0===r},t?"Go Back To Video!":"Challenge your memory!"))},p=t(147),m=t.n(p),v=function(e){var r=e.card,t=e.flipCard,n=m()({flipper:!0,flipped:r.flipped||r.discovered});return u.a.createElement("li",{className:"flip-container"},u.a.createElement("div",{className:n},u.a.createElement("div",{className:"front",onClick:function(){return t(r.id)}}),u.a.createElement("div",{className:"back"},u.a.createElement("img",{src:r.url,alt:""}))))},y=function(e){var r=e.cards,t=e.flipCard;return u.a.createElement("ul",{className:"cards"},r.map((function(e){return u.a.createElement(v,{key:e.id,card:e,flipCard:t})})))},b=t(20),h={flipCard:function(e){return{type:b.a,id:e}},restart:function(){return{type:b.b}}},k=(t(148),function(e){Object(i.a)(t,e);var r=Object(c.a)(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(a.a)(t,[{key:"render",value:function(){var e=this.props,r=e.memory,t=e.actions,n=e.goBackToVideo,a=!r.cards.some((function(e){return!e.discovered}));return u.a.createElement("div",{className:"container"},u.a.createElement(f,{round:r.round,gameFinished:a,goBackToVideo:n}),u.a.createElement(y,{ref:this.myRef,cards:r.cards,flipCard:t.flipCard}))}}]),t}(o.Component));r.default=Object(l.connect)((function(e){return{memory:e.memory}}),(function(e){return{actions:Object(s.bindActionCreators)(h,e)}}))(k)}}]);
//# sourceMappingURL=18.41721523.chunk.js.map