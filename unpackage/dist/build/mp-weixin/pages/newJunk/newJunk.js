(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/newJunk/newJunk"],{"16a9":function(t,e,i){"use strict";i.r(e);var s=i("d9f9"),n=i("d72b");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);var a,c=i("f0c5"),u=Object(c["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=u.exports},"285e":function(t,e,i){"use strict";(function(t){i("b6b4"),i("921b");s(i("66fd"));var e=s(i("16a9"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},d72b:function(t,e,i){"use strict";i.r(e);var s=i("ffa6"),n=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);e["default"]=n.a},d9f9:function(t,e,i){"use strict";var s,n=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return s}))},ffa6:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("675c"),n=s.constant,o=s.factory,a={data:function(){return{imgList:[],photos:[],typeCds:["旧货","需求"],index:0,typeCdIds:["222222","333333"],typeCdName:"请选择",typeCd:"",classificationName:"请选择",classificationIndex:0,classificationId:"",classifications:["家具","电器"],classificationIds:["10008","10002"],classification:"",referencePrice:"",publishUserId:"",publishUserName:"",publishUserLink:"",context:"",communityId:""}},onLoad:function(t){var e=this;s.onLoad(t),s.getOwner((function(t){console.log("_ownerInfo",t),e.publishUserId=t.userId,e.communityId=t.communityId,e.publishUserLink=t.link,e.publishUserName=t.appUserName}))},methods:{changeTypeCd:function(t){var e=t.detail.value;this.typeCdName=this.typeCds[e],this.typeCd=this.typeCdIds[e]},_changeClassifications:function(t){var e=t.detail.value;this.classificationName=this.classifications[e],this.classification=this.classificationIds[e]},submitJunk:function(){var e={typeCd:this.typeCd,classification:this.classification,context:this.context,referencePrice:this.referencePrice,publishUserName:this.publishUserName,publishUserLink:this.publishUserLink,photos:[],publishUserId:this.publishUserId,communityId:this.communityId},i=this.photos;i.forEach((function(t){e.photos.push({photo:t})}));var o="";""==e.typeCd?o="类型为空":""==e.classification?o="分类为空":""==e.context?o="发布内容为空":""==e.referencePrice?o="参考价格为空":""==e.publishUserName?o="发布人为空":""==e.publishUserLink?o="联系方式为空":""==e.publishUserId?o="发布信息为空":""==e.communityId&&(o="小区信息为空"),""!=o?wx.showToast({title:o,icon:"none",duration:2e3}):(console.log("提交数据",e),s.request({url:n.url.saveJunkRequirement,header:s.getHeaders(),method:"POST",data:e,success:function(e){console.log(e),200==e.statusCode?(t.showToast({icon:"none",title:"处理成功",duration:2e3}),t.navigateBack({delta:1})):t.showToast({icon:"none",title:e.data,duration:2e3})},fail:function(t){console.log(t),wx.showToast({title:"服务器异常了",icon:"none",duration:2e3})}}))},removePhoto:function(t){console.log(t.detail.index);var e=[];this.imgList.forEach((function(i,s){s!=t.detail.index&&e.push(i)}));var i=[];this.photos.forEach((function(e,s){s!=t.detail.index&&i.push(e)})),this.photos=i,this.imgList=e},deleteImage:function(t){console.log(t);var e=this.$data.imgList;e.splice(t,1)},ChooseImage:function(t){var e=this;wx.chooseImage({count:4,sizeType:["original","compressed"],sourceType:["album"],success:function(t){console.log(t),e.$data.imgList.push(t.tempFilePaths[0]);var i="";o.base64.urlTobase64(t.tempFilePaths[0]).then((function(t){i=t,console.log("base64",i),e.photos.push(i)}))}})}}};e.default=a}).call(this,i("543d")["default"])}},[["285e","common/runtime","common/vendor"]]]);