(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/location/location","components/uni-notice-bar/uni-notice-bar"],{"142b":function(t,n,e){"use strict";e.r(n);var o=e("f644"),i=e("3b4a");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("7e62");var c,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=r.exports},"389a":function(t,n,e){"use strict";e.r(n);var o=e("fd2e"),i=e("d34c");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("b354");var c,u=e("f0c5"),r=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"eb4f1770",null,!1,o["a"],c);n["default"]=r.exports},"38bb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(function(){return resolve(e("7382"))}.bind(null,e)).catch(e.oe)},i={name:"UniNoticeBar",components:{uniIcons:o},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),n="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:n,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var n=this;if(this.scrollable){var e=[],o=new Promise((function(e,o){t.createSelectorQuery().in(n).select("#".concat(n.elId)).boundingClientRect().exec((function(t){n.textWidth=t[0].width,e()}))})),i=new Promise((function(e,o){t.createSelectorQuery().in(n).select("#".concat(n.elIdBox)).boundingClientRect().exec((function(t){n.boxWidth=t[0].width,e()}))}));e.push(o),e.push(i),Promise.all(e).then((function(){n.animationDuration="".concat(n.textWidth/n.speed,"s"),n.animationDelay="-".concat(n.boxWidth/n.speed,"s"),setTimeout((function(){n.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};n.default=i}).call(this,e("543d")["default"])},"3b4a":function(t,n,e){"use strict";e.r(n);var o=e("9e10"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},6156:function(t,n,e){},"7e62":function(t,n,e){"use strict";var o=e("c4d2"),i=e.n(o);i.a},8336:function(t,n,e){"use strict";(function(t){e("b6b4"),e("921b");o(e("66fd"));var n=o(e("142b"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"9e10":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("389a"));function o(t){return t&&t.__esModule?t:{default:t}}var i=e("675c"),a=(i.constant,{data:function(){return{locationList:[],hidden:!0}},components:{},props:{},onLoad:function(t){i.onLoad(t)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onTap:function(t){wx.setStorageSync("location",t.currentTarget.dataset.key),wx.switchTab({url:"/pages/home/home"})},getLocation:function(){wx.getLocation({type:"gcj02",success:function(t){var n=t.latitude,e=t.longitude;wx.request({url:"http://api.map.baidu.com/geocoder/v2/?ak=btsVVWf0TM1zUBEbzFz6QqWF&coordtype=gcj02ll&location="+n+","+e+"&output=json&pois=0",method:"get",success:function(t){console.log(t.data.result.formatted_address),wx.setStorageSync("location",t.data.result.formatted_address.substr(t.data.result.formatted_address.indexOf("市")+1,10))}})}}),wx.switchTab({url:"/pages/home/home"})},input:function(t){t.detail.value?(this.setData({hidden:!1}),this.search(t.detail.value)):this.setData({hidden:!0})},search:function(t){var n=this;wx.request({url:"http://api.map.baidu.com/place/v2/search?query="+t+"&page_size=20&page_num=0&scope=2&region=南昌&output=json&ak=btsVVWf0TM1zUBEbzFz6QqWF",success:function(t){console.log(t),n.locationList=t.data.results}})}}});n.default=a},b354:function(t,n,e){"use strict";var o=e("6156"),i=e.n(o);i.a},c4d2:function(t,n,e){},d34c:function(t,n,e){"use strict";e.r(n);var o=e("38bb"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},f644:function(t,n,e){"use strict";var o,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))},fd2e:function(t,n,e){"use strict";var o={"uni-icons":function(){return Promise.all([e.e("common/vendor"),e.e("components/uni-icons/uni-icons")]).then(e.bind(null,"7382"))}},i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}))}},[["8336","common/runtime","common/vendor"]]]);