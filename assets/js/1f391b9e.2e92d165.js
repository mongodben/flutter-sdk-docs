"use strict";(self.webpackChunkflutter_sdk_docs=self.webpackChunkflutter_sdk_docs||[]).push([[85],{9649:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(5999),s=t(9548),o="anchorWithStickyNavbar_mojV",m="anchorWithHideOnScrollNavbar_R0VQ",u=["as","id"],d=["as"];function f(e){var n,t=e.as,d=e.id,f=(0,r.Z)(e,u),v=(0,s.LU)().navbar.hideOnScroll;return d?l.createElement(t,(0,a.Z)({},f,{className:(0,i.Z)("anchor",(n={},n[m]=v,n[o]=!v,n)),id:d}),f.children,l.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,f)}function v(e){var n=e.as,t=(0,r.Z)(e,d);return"h1"===n?l.createElement("h1",(0,a.Z)({},t,{id:void 0}),t.children):l.createElement(f,(0,a.Z)({as:n},t))}},7440:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(7462),r=t(3366),l=t(7294),i=t(2859),c=t(9960),s=t(1736),o=t(9649),m=t(6010),u=t(9548),d="details_BAp3";function f(e){var n=Object.assign({},e);return l.createElement(u.PO,(0,a.Z)({},n,{className:(0,m.Z)("alert alert--info",d,n.className)}))}var v=["mdxType","originalType"];var h={head:function(e){var n=l.Children.map(e.children,(function(e){return function(e){var n,t;if(null!=e&&null!=(n=e.props)&&n.mdxType&&null!=e&&null!=(t=e.props)&&t.originalType){var a=e.props,i=(a.mdxType,a.originalType,(0,r.Z)(a,v));return l.createElement(e.props.originalType,i)}return e}(e)}));return l.createElement(i.Z,e,n)},code:function(e){return l.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?l.createElement("code",e):l.createElement(s.Z,e)},a:function(e){return l.createElement(c.Z,e)},pre:function(e){var n;return l.createElement(s.Z,(0,l.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(n=e.children)?void 0:n.props:Object.assign({},e))},details:function(e){var n=l.Children.toArray(e.children),t=n.find((function(e){var n;return"summary"===(null==e||null==(n=e.props)?void 0:n.mdxType)})),r=l.createElement(l.Fragment,null,n.filter((function(e){return e!==t})));return l.createElement(f,(0,a.Z)({},e,{summary:t}),r)},h1:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h1"},e))},h2:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h2"},e))},h3:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h3"},e))},h4:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h4"},e))},h5:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h5"},e))},h6:function(e){return l.createElement(o.Z,(0,a.Z)({as:"h6"},e))}}},6416:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var a=t(7294),r=t(6010),l=t(2434),i=t(3905),c=t(7440),s=t(1575),o=t(9548),m="mdxPageWrapper_zHyg";var u=function(e){var n=e.content,t=n.metadata,u=t.title,d=t.description,f=t.permalink,v=t.frontMatter,h=v.wrapperClassName,p=v.hide_table_of_contents;return a.createElement(l.Z,{title:u,description:d,permalink:f,wrapperClassName:null!=h?h:o.kM.wrapper.mdxPages,pageClassName:o.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",m)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement(i.Zo,{components:c.Z},a.createElement(n,null))),!p&&n.toc&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level})))))}},1575:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(3366),l=t(7294),i=t(6010),c=t(5002),s="tableOfContents_cNA8",o=["className"];var m=function(e){var n=e.className,t=(0,r.Z)(e,o);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",n)},l.createElement(c.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7462),r=t(3366),l=t(7294),i=t(9548),c=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:a}))}))):null}function o(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,v=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,r.Z)(e,c),Z=(0,i.LU)(),g=null!=v?v:Z.tableOfContents.minHeadingLevel,E=null!=h?h:Z.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:n,minHeadingLevel:g,maxHeadingLevel:E}),k=(0,l.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:g,maxHeadingLevel:E}}),[u,f,g,E]);return(0,i.Si)(k),l.createElement(s,(0,a.Z)({toc:N,className:o,linkClassName:u},p))}}}]);