(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/complaintHandle/complaintHandle"],{"3f0b":function(t,e,n){"use strict";(function(t){n("42b7");a(n("66fd"));var e=a(n("c784"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"49c9":function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"4de5":function(t,e,n){"use strict";n.r(e);var a=n("f0d7"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},c784:function(t,e,n){"use strict";n.r(e);var a=n("49c9"),s=n("4de5");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);var o,u=n("f0c5"),d=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);e["default"]=d.exports},f0d7:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("3035"),s=a.constant,i={data:function(){return{stateCloums:[{id:"0",name:"请选择"},{id:"1200",name:"结束"},{id:"1100",name:"退回"}],state:"",content:"",complaintId:"",stateIndex:0,taskId:"",storeId:"",userId:"",userName:"",communityId:""}},onLoad:function(t){var e=this;this.complaintId=t.complaintId,this.communityId=t.communityId,this.taskId=t.taskId;var n=a.getUserInfo();this.userId=n.userId,this.userName=n.userName,a.getProperty().then((function(t){e.storeId=t.storeId}))},methods:{_dispatchComplaint:function(){var e={state:this.state,remark:this.content,communityId:this.communityId,taskId:this.taskId,complaintId:this.complaintId,storeId:this.storeId,userId:this.userId,userName:this.userName};a.request({url:s.url.auditComplaint,header:a.getHeaders(),method:"POST",data:e,success:function(e){200==e.statusCode?t.navigateBack({delta:1}):t.showToast({icon:"none",title:e.data})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}})},stateChange:function(t){if(this.stateIndex=t.target.value,0!=this.stateIndex){var e=this.stateCloums[this.stateIndex];this.state=e.id}else this.state=""}}};e.default=i}).call(this,n("543d")["default"])}},[["3f0b","common/runtime","common/vendor"]]]);