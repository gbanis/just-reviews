(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return h});var a=n(7),r=n.n(a),o=n(0),s=n.n(o),i=n(166),c=n.n(i),l=n(168),u=n(208),p=n(163),d=n.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.category,t=this.props.data.allMarkdownRemark.edges;return s.a.createElement(l.a,null,s.a.createElement("div",{className:"category-container"},s.a.createElement(c.a,{title:'Posts in category "'+e+'" | '+d.a.siteTitle}),s.a.createElement(u.a,{postEdges:t})))},t}(s.a.Component),h="4191571131"},163:function(e,t){e.exports={siteTitle:"Just.reviews",siteTitleShort:"Just.reviews",siteTitleAlt:"Just Reviews",siteLogo:"/logos/logo-1024.png",siteUrl:"https://just.reviews",pathPrefix:"/",siteDescription:"Just reviews: doing all the research so you don't have to.",siteRss:"/rss.xml",siteFBAppID:"907976829372678",googleAnalyticsID:"UA-126209878-1",disqusShortname:"just-reviews",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"George Banis",userTwitter:"",userLocation:"Cambridge, MA",userAvatar:"http://gbanis.com/assets/george-banis.jpg",userDescription:"I spend endless hours on the interwebs researching what to buy. And I'd love to share that research with you by writing reviews, so you can make choices you won't regret!",userLinks:[{label:"Twitter",url:"https://twitter.com/gbanis",iconClassName:"fa fa-twitter"}],copyright:"Copyright © "+(new Date).getFullYear()+". Just.reviews",themeColor:"#FF9A00",backgroundColor:"#ffffff"}},168:function(e,t,n){"use strict";n.d(t,"a",function(){return v});n(185);var a=n(193),r=n.n(a),o=n(7),s=n.n(o),i=(n(186),n(187)),c=n.n(i),l=n(0),u=n.n(l),p=n(166),d=n.n(p),m=n(43),h=n(163),g=n.n(h),f=(n(169),c.a.Header),y=c.a.Content,w=c.a.Footer,v=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this.props.children;return u.a.createElement(c.a,{className:"layout"},u.a.createElement(d.a,null,u.a.createElement("meta",{name:"description",content:g.a.siteDescription})),u.a.createElement(f,null,u.a.createElement(m.Link,{className:"logo",to:"/"}),u.a.createElement(r.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},selectable:!1},u.a.createElement(r.a.Item,{key:"about"},u.a.createElement(m.Link,{to:"/about"},"About")),u.a.createElement(r.a.Item,{key:"contact"},u.a.createElement(m.Link,{to:"/contact"},"Contact")))),u.a.createElement(y,{style:{padding:"50px 50px 0"}},u.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:280}},e)),u.a.createElement(w,{style:{textAlign:"center"}},"Ant Design ©2018 Created by Ant UED"))},t}(u.a.Component)},169:function(e,t,n){},208:function(e,t,n){"use strict";n(57),n(83),n(84);var a=n(7),r=n.n(a),o=n(0),s=n.n(o),i=n(43),c=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){var e=this.getPostList();return s.a.createElement("div",null,e.map(function(e){return s.a.createElement(i.Link,{to:e.path,key:e.title},s.a.createElement("h1",null,e.title))}))},t}(s.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-templates-category-js-d5b00bbda1a79e1aa19c.js.map