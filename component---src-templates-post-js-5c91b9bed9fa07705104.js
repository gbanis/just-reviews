(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{158:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(166),l=a.n(s),c=a(168),m=a(396),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return o.a.createElement(m.Follow,{username:e,options:{count:!!t||"none"}})},t}(i.Component),p=a(248),d=(a(479),a(495)),h=a.n(d),f=(a(57),a(482)),g=a.n(f),E=a(43),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},e&&e.map(function(e){return o.a.createElement(E.Link,{key:e,style:{textDecoration:"none"},to:"/tags/"+g()(e)},o.a.createElement(h.a,null,e))}))},t}(i.Component),v=a(519),b=a(520),A=a(521),k=a(522),w=a(523),C=a(524),D=a(525),x=a(526),N=a(527),S=a(528),T=a(529),I=a(530),L=a(531),P=a(532),U=a(533),Y=a(534),_=a(182),F=a.n(_),z=a(163),B=a.n(z),G=(a(499),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,i=F()(B.a.siteUrl,B.a.pathPrefix,a),s=n?36:48,l=function(e){return o.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return o.a.createElement("div",{className:"social-links"},o.a.createElement(v.a,{url:i,title:r.title},o.a.createElement(b.a,{round:!0,size:s}),o.a.createElement(A.a,{url:i},function(e){return l(e)})),o.a.createElement(k.a,{url:i,title:r.title},o.a.createElement(w.a,{round:!0,size:s})),o.a.createElement(C.a,{url:i},o.a.createElement(D.a,{round:!0,size:s}),o.a.createElement(x.a,{url:i},function(e){return l(e)})),o.a.createElement(N.a,{url:i,quote:t.excerpt},o.a.createElement(S.a,{round:!0,size:s}),o.a.createElement(T.a,{url:i},function(e){return l(e)})),o.a.createElement(I.a,{url:i,title:r.title,description:t.excerpt},o.a.createElement(L.a,{round:!0,size:s}),o.a.createElement(P.a,{url:i},function(e){return l(e)})),o.a.createElement(U.a,{url:i},o.a.createElement(Y.a,{round:!0,size:s})))},t}(i.Component)),H=a(254);a(513),a(515);a.d(t,"default",function(){return J}),a.d(t,"pageQuery",function(){return M});var J=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,a=t.frontmatter;return a.id||(a.id=e),a.category_id||(a.category_id=B.a.postDefaultCategoryID),o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,a.title+" | "+B.a.siteTitle)),o.a.createElement(H.a,{postPath:e,postNode:t,postSEO:!0}),o.a.createElement("div",null,o.a.createElement("h1",null,a.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("div",{className:"post-meta"},o.a.createElement(y,{tags:a.tags}),o.a.createElement(G,{postPath:e,postNode:t})),o.a.createElement(u,{config:B.a}),o.a.createElement(p.a,{postNode:t}))))},t}(o.a.Component),M="3288223027"},163:function(e,t){e.exports={siteTitle:"Gatsby Advanced Starter",siteTitleShort:"GA Starter",siteTitleAlt:"GatsbyJS Advanced Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/just-reviews",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2017. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},168:function(e,t,a){"use strict";a.d(t,"a",function(){return v});a(185);var n=a(193),r=a.n(n),i=a(7),o=a.n(i),s=(a(186),a(187)),l=a.n(s),c=a(0),m=a.n(c),u=a(166),p=a.n(u),d=a(43),h=a(163),f=a.n(h),g=(a(169),l.a.Header),E=l.a.Content,y=l.a.Footer,v=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.children;return m.a.createElement(l.a,{className:"layout"},m.a.createElement(p.a,null,m.a.createElement("meta",{name:"description",content:f.a.siteDescription})),m.a.createElement(g,null,m.a.createElement(d.Link,{className:"logo",to:"/"}),m.a.createElement(r.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},selectable:!1},m.a.createElement(r.a.Item,{key:"about"},m.a.createElement(d.Link,{to:"/about"},"About")),m.a.createElement(r.a.Item,{key:"contact"},m.a.createElement(d.Link,{to:"/contact"},"Contact")))),m.a.createElement(E,{style:{padding:"50px 50px 0"}},m.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},e)),m.a.createElement(y,{style:{textAlign:"center"}},"Ant Design ©2018 Created by Ant UED"))},t}(m.a.Component)},169:function(e,t,a){},248:function(e,t,a){"use strict";a(249);var n=a(7),r=a.n(n),i=a(44),o=a.n(i),s=a(0),l=a.n(s),c=a(251),m=a.n(c),u=a(182),p=a.n(u),d=a(163),h=a.n(d),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(o()(o()(a))),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(o()(o()(a))),a}r()(t,e);var a=t.prototype;return a.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},a.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},a.render=function(){var e=this.props.postNode;if(!h.a.disqusShortname)return null;var t=e.frontmatter,a=p()(h.a.siteUrl,h.a.pathPrefix,e.fields.slug);return l.a.createElement(m.a,{shortname:h.a.disqusShortname,identifier:t.title,title:t.title,url:a,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.a=f},254:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(166),l=a.n(s),c=a(182),m=a.n(c),u=a(163),p=a.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var u=i.frontmatter;e=u.title,t=u.description?u.description:i.excerpt,a=u.cover,n=m()(p.a.siteUrl,p.a.pathPrefix,s)}else e=p.a.siteTitle,t=p.a.siteDescription,a=p.a.siteLogo;a=m()(p.a.siteUrl,p.a.pathPrefix,a);var d=m()(p.a.siteUrl,p.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?n:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=d},499:function(e,t,a){},513:function(e,t,a){},515:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-js-5c91b9bed9fa07705104.js.map