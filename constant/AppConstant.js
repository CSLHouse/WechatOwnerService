/**
 * 应用相关常量
 * 
 * add by wuxw 2019-12-28
 */
class AppConstant {
	
	static wAppId="wx43458162e3c31d92"; //微信AppId
  /**
  * 应用信息，主要是用来和后端服务交互时的时候用
  */
  // #ifdef MP-WEIXIN
  static appId = "992019111758490006";
  static appSecurity = "";
  // #endif
  
  // #ifdef H5
  
  static appId = "992020061452450002";
  static appSecurity = "";
  // #endif
  
  // #ifdef APP-PLUS
  static appId = "992020061440050003";
  static appSecurity = "";
  // #endif
}

module.exports = AppConstant;