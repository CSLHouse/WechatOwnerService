(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-viewPersonFace-viewPersonFace"],{"2f64":function(t,a,e){"use strict";e.r(a);var n=e("cc2d"),o=e("435a");for(var c in o)"default"!==c&&function(t){e.d(a,t,(function(){return o[t]}))}(c);e("8c62");var i,d=e("f0c5"),r=Object(d["a"])(o["default"],n["b"],n["c"],!1,null,"666ddcb2",null,!1,n["a"],i);a["default"]=r.exports},"435a":function(t,a,e){"use strict";e.r(a);var n=e("53ad"),o=e.n(n);for(var c in n)"default"!==c&&function(t){e.d(a,t,(function(){return n[t]}))}(c);a["default"]=o.a},"45b5":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".vpf_context[data-v-666ddcb2]{padding:%?30?% %?20?%}.vpf_context .vpf_row[data-v-666ddcb2]{background-color:#fff;overflow:hidden}.vpf_row_black[data-v-666ddcb2]{height:%?40?%}.vpf_row_title[data-v-666ddcb2]{padding-left:%?40?%;font-size:%?31?%;font-weight:700}.vpf_row_col[data-v-666ddcb2]{text-align:center}.vpf_row_top[data-v-666ddcb2]{margin-top:%?60?%}.vpf_row_black_01[data-v-666ddcb2]{height:%?80?%}.vpf_row_black_02[data-v-666ddcb2]{height:%?100?%}.vpf_row_black_03[data-v-666ddcb2]{height:%?140?%}.vpf_row_black_04[data-v-666ddcb2]{height:%?40?%}.vpf_icon_text[data-v-666ddcb2]{font-size:%?100?%;color:#0a0}.vpf_row_col_t uni-text[data-v-666ddcb2]{font-size:%?30?%;color:#8a8a8a}.vpf_btn[data-v-666ddcb2]{width:80%;margin:0 auto}.vpf_image[data-v-666ddcb2]{text-align:center}",""]),t.exports=a},"53ad":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("675c"),o=n.constant,c=n.factory,i={data:function(){return{face:null,btnValue:"采集人脸"}},components:{},props:{},onLoad:function(t){n.onLoad(t),this.face=""},onReady:function(){},onShow:function(){this.loadOwnerFace()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{collectFace:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var e=c.base64.urlTobase64(a.tempFilePaths);t.uploadOwnerPhoto(e)}})},uploadOwnerPhoto:function(t){var a=this;n.getOwner((function(e){var c=e.memberId,i=e.communityId,d={memberId:c,communityId:i,photo:t};n.request({url:o.url.uploadOwnerPhoto,header:n.getHeaders(),method:"POST",data:d,success:function(t){console.log(t),200==t.statusCode?a.loadOwnerFace():wx.showToast({title:"人脸上传失败",icon:"none",duration:2e3})},fail:function(t){wx.showToast({title:"服务器异常了",icon:"none",duration:2e3}),a.uploadFlag=!1}})}))},loadOwnerFace:function(){var t=this;n.getOwner((function(a){var e=o.url.getOwnerPhotoPath+"?objId="+a.memberId+"&communityId="+a.communityId+"&fileTypeCd=10000&time="+new Date;t.face=e}))}}};a.default=i},8121:function(t,a,e){var n=e("45b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("5b2d2bde",n,!0,{sourceMap:!1,shadowMode:!1})},"8c62":function(t,a,e){"use strict";var n=e("8121"),o=e.n(n);o.a},cc2d:function(t,a,e){"use strict";var n,o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"vpf_context"},[e("v-uni-view",{staticClass:"vpf_row"},[e("v-uni-view",{staticClass:"vpf_row_black"}),e("v-uni-view",{staticClass:"vpf_row_title"},[e("v-uni-text",[t._v("人脸信息")])],1),e("v-uni-view",{staticClass:"vpf_row_black_01"}),e("v-uni-view",{staticClass:"vpf_image"},[e("v-uni-view",{staticClass:"padding"},[e("v-uni-image",{staticClass:"round cu-avatar",staticStyle:{width:"480upx",height:"480upx","background-color":"#eeeeee"},attrs:{src:t.face,mode:"scaleToFill"}})],1)],1),e("v-uni-view",{staticClass:"vpf_row_black_03"}),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-green lg",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.collectFace()}}},[t._v(t._s(t.btnValue))])],1),e("v-uni-view",{staticClass:"vpf_row_black_04"})],1)],1)},c=[];e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return n}))}}]);