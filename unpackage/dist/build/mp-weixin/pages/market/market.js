(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/market"],{8007:function(e,t,n){"use strict";var a={flixedadd:function(){return n.e("components/flixedadd/flixedadd").then(n.bind(null,"1b7d"))}},i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))},c4093:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("675c"),i=a.constant,o=(a.factory,function(){n.e("components/flixedadd/flixedadd").then(function(){return resolve(n("1b7d"))}.bind(null,n)).catch(n.oe)}),c={components:{flixedadd:o},data:function(){return{active:0,viewImage:!1,viewImageSrc:"",communityId:"",junks:[],requirements:[],addlistdata:[{title:"我的发布",src:"/static/images/market_my.png"},{title:"发布信息",src:"/static/images/market_add.png"}]}},onLoad:function(e){a.onLoad(e);var t=this;a.checkLoginStatus()&&a.getOwner((function(e){t.communityId=e.communityId})),t._loadMarket(t.active)},methods:{_tabSelect:function(e){this.active=e,this._loadMarket(e)},_loadMarket:function(e){var t=this,n="";n=0==e?"222222":"333333",this.loading=!0;var o={communityId:t.communityId,typeCd:n,state:"13001",page:1,row:15};a.request({url:i.url.listJunkRequirements,header:a.getHeaders(),method:"GET",data:o,success:function(e){if(console.log("res",e),200==e.statusCode){var a=e.data.junkRequirements;a.forEach((function(e){var t=e.createTime.replace(" ",":").replace(/\:/g,"-").split("-"),a=t[1].split("")[1]+"-"+t[2]+"\t"+t[3]+":"+t[4];e.createTime=a,"222222"==n&&e.photos.forEach((function(e){e.url=i.url.hcBaseUrl+e.url})),e.headerImage=i.url.getOwnerPhotoPath+"?objId="+e.memberId+"&communityId="+e.communityId+"&fileTypeCd=10000"})),"222222"==n?t.junks=a:t.requirements=a}},fail:function(e){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},preview:function(e){console.log("图片地址",e);var t=e.target.dataset.url;this.viewImageSrc=t,this.viewImage=!0},closeViewImage:function(){this.viewImage=!1},addlisttap:function(t){var n=a.checkLoginStatus();if(n){0!=t?1!=t||e.navigateTo({url:"/pages/newJunk/newJunk?active="+this.active}):e.navigateTo({url:"/pages/myJunk/myJunk"})}else e.navigateTo({url:"../showlogin/showlogin"})},_callpublishUser:function(t){var n=a.checkLoginStatus();n?e.makePhoneCall({phoneNumber:t,success:function(e){console.log("调用成功!")},fail:function(e){console.log("调用失败!")}}):e.navigateTo({url:"../showlogin/showlogin"})}}};t.default=c}).call(this,n("543d")["default"])},c983:function(e,t,n){"use strict";n.r(t);var a=n("c4093"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},dc57:function(e,t,n){"use strict";(function(e){n("b6b4"),n("921b");a(n("66fd"));var t=a(n("fc66"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},fc66:function(e,t,n){"use strict";n.r(t);var a=n("8007"),i=n("c983");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var c,u=n("f0c5"),r=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=r.exports}},[["dc57","common/runtime","common/vendor"]]]);