(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("Wbzz"),c=a("mIyP"),o=a("KSab"),i=a("Y7J9"),m=(a("sfvA"),o.config.friends),s=void 0===m?[]:m,u=function(){return r.a.createElement("div",{className:"friend"},r.a.createElement("p",null,"友情链接"),s.map((function(e){return r.a.createElement(i.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},g=(a("qfuT"),function(e){var t=e.posts;return r.a.createElement("div",{className:"latest-post"},r.a.createElement("p",null,"最新文章"),t.map((function(e){var t=e.node;return r.a.createElement(l.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),f=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return r.a.createElement("div",{className:"d-none d-lg-block information my-2"},r.a.createElement("hr",null),r.a.createElement("p",null,"共 ",t," 篇文章"),r.a.createElement("hr",null),r.a.createElement(g,{posts:a}),r.a.createElement("hr",null),r.a.createElement(u,null))});f.defaultProps={posts:[]};var p=f,d=(a("YX5f"),o.config.wordings),E=void 0===d?[]:d,h=o.config.githubUsername,v=(o.config.zhihuUsername,o.config.email,o.config.iconUrl),b=o.config.about,y=(o.config.facebook,function(e){var t=e.href,a=e.icon;return r.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},r.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},r.a.createElement(c.a,{icon:a})))}),N=function(e){var t=e.totalCount,a=e.latestPosts;return r.a.createElement("header",{className:"intro-header site-heading text-center col-xl-2 col-lg-3 col-xs-12 order-lg-1"},r.a.createElement("div",{className:"about-me"},r.a.createElement(l.Link,{to:b,href:b,className:"name"},r.a.createElement("img",{className:"avatar",src:v,alt:"Calpa"}),r.a.createElement("h4",null,"XiangHaiFeng")),r.a.createElement("p",{className:"mb-1"},E[0]),r.a.createElement("p",{className:"mb-3"},E[1]),r.a.createElement(y,{href:"https://github.com/"+h,icon:["fab","github"]}),r.a.createElement(p,{totalCount:t,posts:a})))};N.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return r.a.createElement(l.StaticQuery,{query:"3705334695",render:function(e){return r.a.createElement(N,Object.assign({},e.all,e.limited))}})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("Wbzz"),c=a("Jz1z"),o=a("f/UQ"),i=(a("9UDz"),function(e){var t,a,n=e.url,c=e.image,i=e.backgroundColor;return r.a.createElement(l.Link,{to:n,href:n},r.a.createElement("div",{className:"wrapper",style:(t=c,a=i,{backgroundColor:"#"+a,backgroundImage:" url("+Object(o.parseImgur)(t,"large")+")"})}))}),m=function(e){var t=e.title,a=e.date,n=e.url,o=e.headerImage,m=e.headerBackgroundColor,s=e.description,u=e.tags,g=void 0===u?[]:u;return r.a.createElement("div",{className:"col-sm-12 pb-4"},r.a.createElement("div",{className:"custom-card"},o&&r.a.createElement(i,{url:n,image:o,backgroundColor:m}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",{className:"date"},a.split("T")[0]),g.map((function(e){return r.a.createElement(c.a,{name:e,key:e})}))),r.a.createElement(l.Link,{to:n,href:n},r.a.createElement("h4",{className:"title"},t)),r.a.createElement("p",null,s),r.a.createElement(l.Link,{to:n,href:n},"....继续阅读全文內容")))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:""},t.a=m},ccoC:function(e,t,a){"use strict";a.r(t);var n=a("xwgP"),r=a.n(n),l=a("ZO1O"),c=a("wtQ5"),o=a("/d1K");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges,i=a.tag;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(o.a,null),r.a.createElement("div",{className:"col-xl-10 col-lg-7 col-md-12 col-xs-12 order-2"},r.a.createElement("div",{className:"col-12",style:{fontSize:20,margin:15}},n.length," Articles in ",i),n.map((function(e){var t=e.node;return r.a.createElement(l.a,Object.assign({},t.frontmatter,{key:t.id}))}))),r.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),r.a.createElement(c.a,{title:i,url:"/tag/"+i,siteTitleAlt:"Calpa's Blog",isPost:!1,description:i,image:"https://i.imgur.com/M795H8A.jpg"}))}},"f/UQ":function(e,t){var a=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,n=e.title,r=e.text;return'<img class="lozad d-block mx-auto" data-src='+a(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(n,r)+" />"};e.exports={parseImgur:a,parseImageTag:n,getGalleryImage:function(e){var t=e.href,r=e.title,l=e.text;return'<a data-fancybox="gallery" href="'+a(t,"huge")+'">'+n({href:t,title:r,text:l})+"</a>"}}},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var n=a("xwgP"),r=a.n(n),l=a("KJDX"),c=a.n(l),o=a("KSab"),i=a.n(o),m=function(e){var t=e.url,a=e.title,n=e.description,l=e.image,o=(e.siteTitleAlt,e.isPost);return r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:l}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,l=e.image,c=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:l}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:l},description:c}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),o?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:l}),r.a.createElement("meta",{property:"fb:app_id",content:i.a.siteFBAppID?i.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:i.a.twitter_username?i.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:l}))};m.defaultProps={title:i.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-templates-tag-js-fe7d7c6daa1f94ba65a0.js.map