(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/roomFee/roomFee"],{"027a":function(e,t,n){},"035d":function(e,t,n){"use strict";var o=n("027a"),i=n.n(o);i.a},"7c3e":function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"7f62":function(e,t,n){"use strict";n.r(t);var o=n("c737"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},c737:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("675c"),i=o.constant,a=o.util,u={data:function(){return{date:"2018-12-25",index:0,active:0,tablist:["缴费","历史"],TabCur:0,scrollLeft:0,showFeeMonth:!1,feeMonthList:["一个月","半年","一年","两年"],feeMonthName:"一个月",feeMonth:1,endTime:"",ordEndTime:"",amount:0,receivableAmount:0,communityId:"",communityName:"",feeId:"",floorNum:"",unitNum:"",roomNum:"",layer:"",builtUpArea:"",costList:[{},{}],additionalAmount:"",appId:""}},components:{},props:{},onLoad:function(t){o.onLoad(t);var n=e.getAccountInfoSync();this.appId=n.miniProgram.appId;var i=JSON.parse(t.fee);console.log("_fee",i);var u=i.amount,r=u,d=o.getCurrentCommunity(),s=new Date(i.endTime),c=a.date.addMonth(s,this.feeMonth);this.receivableAmount=r,this.communityId=d.communityId,this.communityName=d.communityName,this.floorNum=i.floorNum,this.unitNum=i.unitNum,this.roomNum=i.roomNum,this.layer=i.layer,this.builtUpArea=i.builtUpArea,this.feeId=i.feeId,this.amount=u,this.additionalAmount=i.additionalAmount,this.endTime=a.date.formatDate(c),this.ordEndTime=i.endTime},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{dateChange:function(e){console.log("onConfirm",e);var t=null;t=this.feeMonthList[e.detail.value];var n=1;if("一个月"==t)n=1;else if("半年"==t)n=6;else if("一年"==t)n=12;else{if("两年"!=t)return;n=24}var o=n*this.amount,i=new Date(this.ordEndTime),u=a.date.addMonth(i,n);this.showFeeMonth=!1,this.feeMonthName=t,this.receivableAmount=o,this.feeMonth=n,this.endTime=a.date.formatDate(u)},onFeeMonthChange:function(e){console.log(e)},onFeeMonthCancel:function(e){this.showFeeMonth=!1},_payWxApp:function(t){var n=this.receivableAmount;wx.showLoading({title:"支付中"});var a="APP",u={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"物业费",receivedAmount:n,tradeType:a,appId:this.appId};o.request({url:i.url.preOrder,header:o.getHeaders(),method:"POST",data:u,success:function(t){if(console.log(t),200==t.statusCode&&"0"==t.data.code){var n=t.data,o={appid:n.appId,noncestr:n.nonceStr,package:"Sign=WXPay",partnerid:n.partnerid,prepayid:n.prepayid,timestamp:n.timeStamp,sign:n.sign},i=JSON.stringify(o);return e.requestPayment({provider:"wxpay",orderInfo:i,success:function(t){e.showToast({title:"支付成功",duration:2e3}),e.navigateBack({})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}),void wx.hideLoading()}wx.hideLoading(),wx.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(e){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},onPayFee:function(){var t=this.receivableAmount;wx.showLoading({title:"支付中"});var n="JSAPI",a={cycles:this.feeMonth,communityId:this.communityId,feeId:this.feeId,feeName:"物业费",receivedAmount:t,tradeType:n,appId:this.appId};o.request({url:i.url.preOrder,header:o.getHeaders(),method:"POST",data:a,success:function(t){if(console.log(t),200==t.statusCode&&"0"==t.data.code){var n=t.data;return e.requestPayment({timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.package,signType:n.signType,paySign:n.sign,success:function(t){e.showToast({title:"支付成功",duration:2e3}),e.navigateBack({})},fail:function(e){console.log("fail:"+JSON.stringify(e))}}),void wx.hideLoading()}wx.hideLoading(),wx.showToast({title:"缴费失败",icon:"none",duration:2e3})},fail:function(e){wx.hideLoading(),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})}}};t.default=u}).call(this,n("543d")["default"])},e201:function(e,t,n){"use strict";n.r(t);var o=n("7c3e"),i=n("7f62");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("035d");var u,r=n("f0c5"),d=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=d.exports},e7aa:function(e,t,n){"use strict";(function(e){n("b6b4"),n("921b");o(n("66fd"));var t=o(n("e201"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e7aa","common/runtime","common/vendor"]]]);