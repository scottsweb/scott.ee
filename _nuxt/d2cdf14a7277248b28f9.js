(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{188:function(t,e,s){"use strict";s.r(e);s(27);var i,r=s(2),n={components:{},mixins:{longTimestamp:Function,widont:Function},asyncData:(i=s.n(r)()(regeneratorRuntime.mark(function t(e){var s,i,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.payload,i=e.isStatic,r=e.store,n=e.params,!s||!i){t.next=5;break}r.commit("addPosts",[s]),t.next=7;break;case 5:return t.next=7,r.dispatch("getPost",n);case 7:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)}),computed:{post:function(){return this.$store.getters.getPostBySlug(this.$route.params.slug)}},methods:{featuredImage:function(){var t=this.post._embedded["wp:featuredmedia"];return t&&t[0].media_details?t[0].media_details.sizes.large.source_url||t[0].media_details.sizes.full.source_url:"/og-card.png"}},head:function(){return{title:this.post.title.rendered,bodyAttrs:{class:"single post post-id-"+this.post.id},meta:[{hid:"description",name:"description",content:this.post.excerpt.rendered},{hid:"og:title",property:"og:title",content:this.post.title.rendered+" • Scott Evans"},{hid:"og:description",property:"og:description",content:this.post.excerpt.rendered},{hid:"og:image",property:"og:image",content:this.featuredImage()}]}}},o=s(4),a=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post hentry",attrs:{id:"post-id-"+this.post.id}},[s("header",{staticClass:"entry-header"},[s("time",{staticClass:"entry-date published",attrs:{datetime:"post.date"}},[t._v(t._s(t.longTimestamp(t.post.date)))]),t._v(" "),s("h1",{staticClass:"entry-title",domProps:{innerHTML:t._s(t.widont(t.post.title.rendered))}})]),t._v(" "),s("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:{selector:"img"},expression:"{ selector: 'img' }"}],staticClass:"entry-content"},[s("div",{domProps:{innerHTML:t._s(t.post.content.rendered)}})])])},[],!1,null,null,null);a.options.__file="_slug.vue";e.default=a.exports}}]);