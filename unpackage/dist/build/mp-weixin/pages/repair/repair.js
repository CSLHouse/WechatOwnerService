(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/repair/repair"],{"027d":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=e("675c"),i=n.constant,a=n.factory,r={data:function(){return{minDate:(new Date).getTime(),bindDate:"请选择",bindTime:"请选择",roomCloums:[],roomIdArr:[],roomName:"",roomId:"",roomShow:!1,columns:["卧室报修","管道报修","客厅报修"],repairIdAttr:["10001","10002","10003"],typeName:"",typeId:"",typeShow:!1,timeShow:!1,photoList:[],bindTel:"",context:"",bindRepairName:"",userId:"",storeId:"",photos:[],communityId:"",complaintIndex:0,index:0}},onLoad:function(t){var o=this;n.onLoad(t),n.getRooms().then((function(t){var e=t.data.rooms,n=[],i=[];e.map((function(t){n.push(t.floorNum+"号楼"+t.unitNum+"单元"+t.roomNum+"室"),i.push(t.roomId)})),o.roomCloums=n,o.roomIdArr=i,o.userId=t.data.owner.appUserId,o.communityId=t.data.owner.communityId}))},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{formatter:function(t,o){return"year"===t?"".concat(o,"年"):"month"===t?"".concat(o,"月"):"day"===t?"".concat(o,"日"):o},submitRepair:function(t){var o={repairName:this.bindRepairName,repairType:this.typeId,appointmentTime:this.bindDate+" "+this.bindTime+":00",tel:this.bindTel,roomId:this.roomId,photos:[],context:this.context,userId:this.userId,communityId:this.communityId,bindDate:this.bindDate,bindTime:this.bindTime},e=this.photos;e.forEach((function(t){o.photos.push({photo:t})}));var a="";""==o.roomId?a="请选择房屋":""==o.repairType?a="请选择报修类型":""==o.bindRepairName?a="请填写报修人":""==o.tel?a="请填写手机号":""==o.bindDate?a="请选择预约日期":""==o.bindTime?a="请选择预约时间":""==o.context&&(a="请填写投诉内容"),console.log(o.roomId),""!=a?wx.showToast({title:a,icon:"none",duration:2e3}):n.request({url:i.url.saveOwnerRepair,header:n.getHeaders(),method:"POST",data:o,success:function(t){200!=t.statusCode?wx.showToast({title:"服务器异常了",icon:"none",duration:2e3}):wx.redirectTo({url:"/pages/myRepair/myRepair"})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},afterRead:function(t){var o=t.detail.file,e=this,n=this.photoList,i=void 0===n?[]:n;i.push(o),this.photoList=i,a.base64.urlTobase64(o.path).then((function(t){e.photos.push(t)})),console.log("data信息：",this)},ChooseImage:function(t){var o=this;wx.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log(t),o.$data.photoList.length?o.$data.photoList.push(t.tempFilePaths[0]):o.$data.photoList=t.tempFilePaths}})},removePhoto:function(t){console.log(t);var o=this.$data.photoList;o.splice(t,1)},roomChange:function(t){this.roomId=this.roomIdArr[t.detail.value],this.roomName=this.roomCloums[t.detail.value]},repairChange:function(t){this.typeName=this.columns[t.detail.value],this.typeId=this.repairIdAttr[t.detail.value]},dateChange:function(t){this.bindDate=t.detail.value},timeChange:function(t){this.bindTime=t.detail.value}}};o.default=r},"0d9b":function(t,o,e){},1100:function(t,o,e){"use strict";var n,i=function(){var t=this,o=t.$createElement;t._self._c},a=[];e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return a})),e.d(o,"a",(function(){return n}))},"44b4":function(t,o,e){"use strict";(function(t){e("b6b4"),e("921b");n(e("66fd"));var o=n(e("d800"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},b73e:function(t,o,e){"use strict";var n=e("0d9b"),i=e.n(n);i.a},d800:function(t,o,e){"use strict";e.r(o);var n=e("1100"),i=e("e6af");for(var a in i)"default"!==a&&function(t){e.d(o,t,(function(){return i[t]}))}(a);e("b73e");var r,s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);o["default"]=u.exports},e6af:function(t,o,e){"use strict";e.r(o);var n=e("027d"),i=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(o,t,(function(){return n[t]}))}(a);o["default"]=i.a}},[["44b4","common/runtime","common/vendor"]]]);