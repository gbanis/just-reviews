(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(166),l=n.n(s),c=n(168),m=n(396),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return i.a.createElement(m.Follow,{username:e,options:{count:!!t||"none"}})},t}(o.Component),p=n(248),d=(n(479),n(495)),h=n.n(d),f=(n(57),n(482)),E=n.n(f),g=n(43),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return i.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return i.a.createElement(g.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+E()(e)},i.a.createElement(h.a,null,e))}))},t}(o.Component),v=n(519),w=n(520),b=n(521),C=n(522),D=n(523),x=n(524),A=n(525),k=n(526),N=n(527),T=n(528),S=n(529),I=n(530),L=n(531),F=n(532),P=n(533),Y=n(534),_=n(182),J=n.n(_),U=n(163),z=n.n(U),B=(n(499),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.postPath,a=e.mobile,r=t.frontmatter,o=J()(z.a.siteUrl,z.a.pathPrefix,n),s=a?36:48,l=function(e){return i.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return i.a.createElement("div",{className:"social-links"},i.a.createElement(v.a,{url:o,title:r.title},i.a.createElement(w.a,{round:!0,size:s}),i.a.createElement(b.a,{url:o},function(e){return l(e)})),i.a.createElement(C.a,{url:o,title:r.title},i.a.createElement(D.a,{round:!0,size:s})),i.a.createElement(x.a,{url:o},i.a.createElement(A.a,{round:!0,size:s}),i.a.createElement(k.a,{url:o},function(e){return l(e)})),i.a.createElement(N.a,{url:o,quote:t.excerpt},i.a.createElement(T.a,{round:!0,size:s}),i.a.createElement(S.a,{url:o},function(e){return l(e)})),i.a.createElement(I.a,{url:o,title:r.title,description:t.excerpt},i.a.createElement(L.a,{round:!0,size:s}),i.a.createElement(F.a,{url:o},function(e){return l(e)})),i.a.createElement(P.a,{url:o},i.a.createElement(Y.a,{round:!0,size:s})))},t}(o.Component)),M=n(254);n(513),n(515);n.d(t,"default",function(){return j}),n.d(t,"pageQuery",function(){return q});var j=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),n.category_id||(n.category_id=z.a.postDefaultCategoryID),i.a.createElement(c.a,null,i.a.createElement("div",null,i.a.createElement(l.a,null,i.a.createElement("title",null,n.title+" | "+z.a.siteTitle)),i.a.createElement(M.a,{postPath:e,postNode:t,postSEO:!0}),i.a.createElement("div",null,i.a.createElement("h1",null,n.title),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),i.a.createElement("div",{className:"post-meta"},i.a.createElement(y,{tags:n.tags}),i.a.createElement(B,{postPath:e,postNode:t})),i.a.createElement(u,{config:z.a}),i.a.createElement(p.a,{postNode:t}))))},t}(i.a.Component),q="3288223027"},163:function(e,t){e.exports={siteTitle:"Just.reviews",siteTitleShort:"Just.reviews",siteTitleAlt:"Just Reviews",siteLogo:"/logos/logo-1024.png",siteUrl:"https://just.reviews",pathPrefix:"/",siteDescription:"Just reviews: doing all the research so you don't have to.",siteRss:"/rss.xml",siteFBAppID:"907976829372678",googleAnalyticsID:"UA-126209878-1",disqusShortname:"just-reviews",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"George Banis",userTwitter:"",userLocation:"Cambridge, MA",userAvatar:"http://gbanis.com/assets/george-banis.jpg",userDescription:"I spend endless hours on the interwebs researching what to buy. And I'd love to share that research with you by writing reviews, so you can make choices you won't regret!",userLinks:[{label:"Twitter",url:"https://twitter.com/gbanis",iconClassName:"fa fa-twitter"}],copyright:"Copyright © "+(new Date).getFullYear()+". Just.reviews",themeColor:"#FF9A00",backgroundColor:"#ffffff"}},168:function(e,t,n){"use strict";n.d(t,"a",function(){return v});n(185);var a=n(193),r=n.n(a),o=n(7),i=n.n(o),s=(n(186),n(187)),l=n.n(s),c=n(0),m=n.n(c),u=n(166),p=n.n(u),d=n(43),h=n(163),f=n.n(h),E=(n(169),l.a.Header),g=l.a.Content,y=l.a.Footer,v=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(l.a,{className:"layout"},m.a.createElement(p.a,null,m.a.createElement("meta",{name:"description",content:f.a.siteDescription})),m.a.createElement(E,null,m.a.createElement(d.Link,{className:"logo",to:"/"}),m.a.createElement(r.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},selectable:!1},m.a.createElement(r.a.Item,{key:"about"},m.a.createElement(d.Link,{to:"/about"},"About")),m.a.createElement(r.a.Item,{key:"contact"},m.a.createElement(d.Link,{to:"/contact"},"Contact")))),m.a.createElement(g,{style:{padding:"50px 50px 0"}},m.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},e)),m.a.createElement(y,{style:{textAlign:"center"}},"Ant Design ©2018 Created by Ant UED"))},t}(m.a.Component)},169:function(e,t,n){},248:function(e,t,n){"use strict";n(249);var a=n(7),r=n.n(a),o=n(44),i=n.n(o),s=n(0),l=n.n(s),c=n(251),m=n.n(c),u=n(182),p=n.n(u),d=n(163),h=n.n(d),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(i()(i()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(i()(i()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!h.a.disqusShortname)return null;var t=e.frontmatter,n=p()(h.a.siteUrl,h.a.pathPrefix,e.fields.slug);return l.a.createElement(m.a,{shortname:h.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.a=f},254:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(166),l=n.n(s),c=n(182),m=n.n(c),u=n(163),p=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,c=r.postSEO;if(c){var u=o.frontmatter;e=u.title,t=u.description?u.description:o.excerpt,n=u.cover,a=m()(p.a.siteUrl,p.a.pathPrefix,s)}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;n=m()(p.a.siteUrl,p.a.pathPrefix,n);var d=m()(p.a.siteUrl,p.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),i.a.createElement(l.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:c?a:d}),c?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=d},499:function(e,t,n){},513:function(e,t,n){},515:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-6adc505ad9063889d658.js.map