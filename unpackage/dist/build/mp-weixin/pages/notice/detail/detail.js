(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/notice/detail/detail"],{"0c32":function(t,n,e){"use strict";e.r(n);var o=e("536e"),c=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=c.a},"125b":function(t,n,e){"use strict";(function(t){e("b6b4"),e("921b");o(e("66fd"));var n=o(e("7ccb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2670:function(t,n,e){},4384:function(t,n,e){"use strict";var o=e("2670"),c=e.n(o);c.a},"536e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("675c"),c=o.constant,i=(getApp().globalData,{data:function(){return{notice:{},noticeId:""}},onLoad:function(t){var n=t.noticeId;this.noticeId=n,this._loadNoticeDetail()},onShow:function(){},methods:{_loadNoticeDetail:function(){var t=this;o.onLoad(options),t.communityId=o.getUserInfo().communityId,o.request({header:o.getHeaders(),url:c.url.GetNoticeListUrl,method:"GET",data:{communityId:t.communityId,page:1,row:10,noticeId:t.noticeId},success:function(n){console.log(n);var e=n.data.notices[0];e.timeStr=e.startTime.replace(/:\d{1,2}$/," "),t.notice=e}})}}});n.default=i},"7ccb":function(t,n,e){"use strict";e.r(n);var o=e("fd3e"),c=e("0c32");for(var i in c)"default"!==i&&function(t){e.d(n,t,(function(){return c[t]}))}(i);e("4384");var a,u=e("f0c5"),r=Object(u["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=r.exports},fd3e:function(t,n,e){"use strict";var o,c=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}))}},[["125b","common/runtime","common/vendor"]]]);