
/** !#en
AnySDK is a third party solution that offers game developers SDK integration without making changes to the SDK's features or parameters.It can do all of this while remaining invisible to your end user.Our goal is to handle all the tedious SDK integration work for you so that you can use your time to focus on the game itself.No matter if it’s the channel SDK, user system, payment system, ad system, statistics system, sharing system or any other type of SDK: we’ll take care of it for you.
!#zh
AnySDK 为 CP 提供一套第三方 SDK 接入解决方案，整个接入过程，不改变任何 SDK 的功能、特性、参数等，对于最终玩家而言是完全透明无感知的。
目的是让 CP 商能有更多时间更专注于游戏本身的品质，所有 SDK 的接入工作统统交给我们吧。第三方 SDK 包括了渠道SDK、用户系统、支付系统、广告系统、统计系统、分享系统等等。 */
anysdk {	
	/** !#en
	agent manager of plugin
	!#zh
	插件管理对象 */
	export var agentManager: anysdk.AgentManager;	
	/** !#en
	agent manager of plugin
	!#zh
	插件管理类 */
	export class AgentManager {		
		/**
		!#en
		AppKey appSecret and privateKey are the only three parameters generated
		after the packing tool client finishes creating the game.
		The oauthLoginServer parameter is the API address provided by the game service
		to login verification
		!#zh
		appKey、appSecret、privateKey是通过 AnySDK 客户端工具创建游戏后生成的。
		oauthLoginServer参数是游戏服务提供的用来做登陆验证转发的接口地址。
		@param appKey appKey
		@param appSecret appSecret
		@param privateKey privateKey
		@param oauthLoginServer oauthLoginServer 
		*/
		init(appKey: string, appSecret: string, privateKey: string, oauthLoginServer: string): void;		
		/**
		!#en
		load all plugins, the operation includes SDK`s initialization
		!#zh
		加载所有插件，该操作包含了 SDKs 初始化
		@param callback callback
		@param target The object to bind to. 
		*/
		loadAllPlugins(callback: Function, target: any): void;		
		/**
		!#en
		unload all plugins
		!#zh
		卸载插件 
		*/
		unloadAllPlugins(): void;		
		/**
		!#en
		get user system plugin
		!#zh
		获取用户系统插件 
		*/
		getUserPlugin(): anysdk.ProtocolUser;		
		/**
		!#en
		get IAP system plugins
		!#zh
		获取支付系统插件 
		*/
		getIAPPlugins(): anysdk.ProtocolIAP;		
		/**
		!#en
		get IAP system plugin
		!#zh
		获取支付系统插件 
		*/
		getIAPPlugin(): anysdk.ProtocolIAP;		
		/**
		!#en
		get social system plugin
		!#zh
		获取社交系统插件 
		*/
		getSocialPlugin(): anysdk.ProtocolSocial;		
		/**
		!#en
		get share system plugin
		!#zh
		获取分享系统插件 
		*/
		getSharePlugin(): anysdk.ProtocolShare;		
		/**
		!#en
		get analytics system plugin
		!#zh
		获取统计系统插件 
		*/
		getAnalyticsPlugin(): anysdk.ProtocolAnalytics;		
		/**
		!#en
		get ads system plugin
		!#zh
		获取广告系统插件 
		*/
		getAdsPlugin(): anysdk.ProtocolAds;		
		/**
		!#en
		get push system plugin
		!#zh
		获取推送系统插件 
		*/
		getPushPlugin(): anysdk.ProtocolPush;		
		/**
		!#en
		get REC system plugin
		!#zh
		获取录屏系统插件 
		*/
		getRECPlugin(): anysdk.ProtocolREC;		
		/**
		!#en
		get crash system plugin
		!#zh
		获取崩溃分析系统插件 
		*/
		getCrashPlugin(): anysdk.ProtocolCrash;		
		/**
		!#en
		get ad track system plugin
		!#zh
		获取广告追踪系统插件 
		*/
		getAdTrackingPlugin(): anysdk.ProtocolAdTracking;		
		/**
		!#en
		get custom system plugin
		!#zh
		获取自定义系统插件 
		*/
		getCustomPlugin(): anysdk.ProtocolCustom;		
		/**
		!#en
		get custom parameter
		!#zh
		获取自定义参数 
		*/
		getCustomParam(): string;		
		/**
		!#en
		get channel id
		!#zh
		获取渠道唯一表示符 
		*/
		getChannelId(): string;		
		/**
		!#en
		get status of analytics
		!#zh
		获取统计状态 
		*/
		isAnaylticsEnabled(): boolean;		
		/**
		!#en
		set whether to analytics
		!#zh
		设置是否统计
		@param enabled enabled 
		*/
		setIsAnaylticsEnabled(enabled: boolean): void;		
		/**
		!#en
		destory instance
		!#zh
		销毁单例 
		*/
		static end(): void;		
		/**
		!#en
		get instance
		!#zh
		获取单例 
		*/
		static getInstance(): anysdk.AgentManager;	
	}	
	/** !#en
	plugin protocol
	!#zh
	插件协议 */
	export class PluginProtocol {		
		/**
		!#en
		Check whether the function is supported
		!#zh
		判断函数是否支持
		@param functionName functionName 
		*/
		isFunctionSupported(functionName: string): boolean;		
		/**
		!#en
		get plugin name
		!#zh
		获取插件名称 
		*/
		getPluginName(): string;		
		/**
		!#en
		get plugin version
		!#zh
		获取插件版本 
		*/
		getPluginVersion(): string;		
		/**
		!#en
		get SDK version
		!#zh
		获取 SDK 版本 
		*/
		getSDKVersion(): string;		
		/**
		!#en
		void methods for reflections with parameter
		!#zh
		反射调用带参数的void方法
		@param funName funName
		@param args optional arguments 
		*/
		callFuncWithParam(funName: string, ...args: any|anysdk.PluginParam[]): void;		
		/**
		!#en
		String methods for reflections with parameter
		!#zh
		反射调用带参数的 String 方法
		@param funName funName
		@param args optional arguments 
		*/
		callStringFuncWithParam(funName: string, ...args: any|anysdk.PluginParam[]): string;		
		/**
		!#en
		int methods for reflections with parameter
		!#zh
		反射调用带参数的 Int 方法
		@param funName funName
		@param args optional arguments 
		*/
		callIntFuncWithParam(funName: string, ...args: any|anysdk.PluginParam[]): number;		
		/**
		!#en
		boolean methods for reflections with parameter
		!#zh
		反射调用带参数的 boolean 方法
		@param funName funName
		@param args optional arguments 
		*/
		callBoolFuncWithParam(funName: string, ...args: any|anysdk.PluginParam[]): boolean;		
		/**
		!#en
		float methods for reflections with parameter
		!#zh
		反射调用带参数的 float 方法
		@param funName funName
		@param args optional arguments 
		*/
		callFloatFuncWithParam(funName: string, ...args: any|anysdk.PluginParam[]): number;	
	}	
	/** !#en
	user protocol
	!#zh
	用户系统协议接口 */
	export class ProtocolUser extends PluginProtocol {		
		/**
		!#en
		login interface
		!#zh
		登录接口
		@param args optional arguments 
		*/
		login(...args: string|any[]): void;		
		/**
		!#en
		get status of login
		!#zh
		获取登录状态 
		*/
		isLogined(): boolean;		
		/**
		!#en
		get user ID
		!#zh
		获取用户唯一标示符 
		*/
		getUserID(): string;		
		/**
		!#en
		get plugin ID
		!#zh
		获取插件ID 
		*/
		getPluginId(): string;		
		/**
		!#en
		set listener
		!#zh
		设置用户系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取用户系统的监听 
		*/
		getListener(): Function;		
		/**
		!#en
		logout
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		登出，调用前需要判断属性是否存在 
		*/
		logout(): void;		
		/**
		!#en
		show toolbar
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示悬浮窗，调用前需要判断属性是否存在
		@param place place 
		*/
		showToolBar(place: anysdk.ToolBarPlace): void;		
		/**
		!#en
		hide toolbar
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		隐藏悬浮窗，调用前需要判断属性是否存在 
		*/
		hideToolBar(): void;		
		/**
		!#en
		enter platform
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示平台中心，调用前需要判断属性是否存在 
		*/
		enterPlatform(): void;		
		/**
		!#en
		show exit page
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示退出界面，调用前需要判断属性是否存在 
		*/
		exit(): void;		
		/**
		!#en
		show pause page
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示暂停界面，调用前需要判断属性是否存在 
		*/
		pause(): void;		
		/**
		!#en
		Real-name registration
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		实名注册，调用前需要判断属性是否存在 
		*/
		realNameRegister(): void;		
		/**
		!#en
		Anti-addiction query
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		防沉迷查询，调用前需要判断属性是否存在 
		*/
		antiAddictionQuery(): void;		
		/**
		!#en
		submit game role information
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		提交角色信息，调用前需要判断属性是否存在
		@param data data 
		*/
		submitLoginGameRole(data: any): void;		
		/**
		!#en
		get user information
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		获取用户信息，调用前需要判断属性是否存在
		@param info info 
		*/
		getUserInfo(info: any): void;		
		/**
		!#en
		set login type
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		设置登录类型，调用前需要判断属性是否存在
		@param info info 
		*/
		getAvailableLoginType(info: any): void;		
		/**
		!#en
		set login type
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		设置登录类型，调用前需要判断属性是否存在
		@param loginType loginType 
		*/
		setLoginType(loginType: string): void;		
		/**
		!#en
		send to desktop
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		发送到桌面，调用前需要判断属性是否存在 
		*/
		sendToDesktop(): void;		
		/**
		!#en
		open bbs
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		打开论坛，调用前需要判断属性是否存在 
		*/
		openBBS(): void;	
	}	
	/** !#en
	IAP protocol
	!#zh
	支付系统协议接口 */
	export class ProtocolIAP extends PluginProtocol {		
		/**
		!#en
		pay interface
		!#zh
		支付接口
		@param info Type:map 
		*/
		payForProduct(info: any): void;		
		/**
		!#en
		get order ID
		!#zh
		获取订单ID 
		*/
		getOrderId(): string;		
		/**
		!#en
		reset the pay status
		!#zh
		重置支付状态 
		*/
		static resetPayState(): void;		
		/**
		!#en
		get plugin ID
		!#zh
		获取插件ID 
		*/
		getPluginId(): string;		
		/**
		!#en
		set listener
		!#zh
		设置支付系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取支付系统的监听 
		*/
		getListener(): Function;	
	}	
	/** !#en
	analytics protocol
	!#zh
	统计系统协议接口 */
	export class ProtocolAnalytics extends PluginProtocol {		
		/**
		!#en
		Start a new session.
		!#zh
		启动会话 
		*/
		startSession(): void;		
		/**
		!#en
		 Stop a session.
		!#zh
		关闭会话 
		*/
		stopSession(): void;		
		/**
		!#en
		Set the timeout for expiring a session.
		!#zh
		设置会话超时时间
		@param millis Type: long 
		*/
		setSessionContinueMillis(millis: number): void;		
		/**
		!#en
		log an error
		!#zh
		捕捉异常
		@param errorId errorId
		@param message message 
		*/
		logError(errorId: string, message: string): void;		
		/**
		!#en
		log an event.
		!#zh
		捕捉事件
		@param errorId errorId
		@param args optional arguments Type: map 
		*/
		logEvent(errorId: string, ...args: any[]): void;		
		/**
		!#en
		Track an event begin.
		!#zh
		统计事件开始
		@param eventId eventId 
		*/
		logTimedEventBegin(eventId: string): void;		
		/**
		!#en
		Track an event end.
		!#zh
		统计事件结束
		@param eventId eventId 
		*/
		logTimedEventEnd(eventId: string): void;		
		/**
		!#en
		set Whether to catch uncaught exceptions to server.
		!#zh
		设置是否开启自动异常捕捉
		@param enabled enabled 
		*/
		setCaptureUncaughtException(enabled: boolean): void;		
		/**
		!#en
		analytics account information
		!#zh
		统计玩家帐户信息
		@param paramMap Type: map 
		*/
		setAccount(paramMap: any): void;		
		/**
		!#en
		track user to request payment
		!#zh
		跟踪用户支付请求
		@param paramMap Type: map 
		*/
		onChargeRequest(paramMap: any): void;		
		/**
		!#en
		track Successful payment
		!#zh
		追踪用户支付成功
		@param orderID orderID 
		*/
		onChargeSuccess(orderID: string): void;		
		/**
		!#en
		track failed payment
		!#zh
		追踪用户支付失败
		@param paramMap Type: map 
		*/
		onChargeFail(paramMap: any): void;		
		/**
		!#en
		track Successful payment
		!#zh
		统计玩家支付成功
		@param paramMap Type: map 
		*/
		onChargeOnlySuccess(paramMap: any): void;		
		/**
		!#en
		track user purchase
		!#zh
		统计玩家消费
		@param paramMap Type: map 
		*/
		onPurchase(paramMap: any): void;		
		/**
		!#en
		track user to use goods
		!#zh
		统计玩家使用道具
		@param paramMap Type: map 
		*/
		onUse(paramMap: any): void;		
		/**
		!#en
		track user to reward goods
		!#zh
		统计玩家获取奖励
		@param paramMap Type: map 
		*/
		onReward(paramMap: any): void;		
		/**
		!#en
		 start level
		!#zh
		开始关卡
		@param paramMap Type: map 
		*/
		startLevel(paramMap: any): void;		
		/**
		!#en
		finish level
		!#zh
		结束关卡
		@param levelID levelID 
		*/
		finishLevel(levelID: string): void;		
		/**
		!#en
		failed level
		!#zh
		关卡失败
		@param paramMap Type: map 
		*/
		failLevel(paramMap: any): void;		
		/**
		!#en
		start task
		!#zh
		开始任务
		@param paramMap Type: map 
		*/
		startTask(paramMap: any): void;		
		/**
		!#en
		finish task
		!#zh
		完成任务
		@param taskID taskID 
		*/
		finishTask(taskID: string): void;		
		/**
		!#en
		failed task
		!#zh
		任务失败
		@param paramMap Type: map 
		*/
		failTask(paramMap: any): void;	
	}	
	/** !#en
	share protocol
	!#zh
	分享系统协议接口 */
	export class ProtocolShare extends PluginProtocol {		
		/**
		!#en
		share interface
		!#zh
		分享
		@param info Type: map 
		*/
		share(info: any): void;		
		/**
		!#en
		set listener
		!#zh
		设置分享系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取分享系统的监听 
		*/
		getListener(): Function;	
	}	
	/** !#en
	ads protocol
	!#zh
	广告系统协议接口 */
	export class ProtocolAds extends PluginProtocol {		
		/**
		!#en
		hide ads view
		!#zh
		隐藏广告
		@param adstype adstype
		@param idx idx 
		*/
		hideAds(adstype: anysdk.AdsType, idx: number): void;		
		/**
		!#en
		preload ads view
		!#zh
		预加载广告
		@param adstype adstype
		@param idx idx 
		*/
		preloadAds(adstype: anysdk.AdsType, idx: number): void;		
		/**
		!#en
		query points
		!#zh
		查询分数 
		*/
		queryPoints(): number;		
		/**
		!#en
		get whether the ads type is supported
		!#zh
		获取广告类型是否支持
		@param arg0 arg0 
		*/
		isAdTypeSupported(arg0: anysdk.AdsType): boolean;		
		/**
		!#en
		spend point
		!#zh
		消费分数
		@param points points 
		*/
		spendPoints(points: number): void;		
		/**
		!#en
		set listener
		!#zh
		设置广告系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取广告系统的监听 
		*/
		getListener(): Function;	
	}	
	/** !#en
	social protocol
	!#zh
	社交系统协议接口 */
	class ProtocolSocial extends PluginProtocol {		
		/**
		!#en
		sign in
		!#zh
		登录 
		*/
		signIn(): void;		
		/**
		!#en
		 sign out
		!#zh
		登出 
		*/
		signOut(): void;		
		/**
		!#en
		submit score
		!#zh
		提交分数
		@param leadboardID leadboardID
		@param score Type: long 
		*/
		submitScore(leadboardID: string, score: number): void;		
		/**
		!#en
		show the id of Leaderboard page
		!#zh
		根据唯一标识符显示排行榜
		@param leaderboardID leaderboardID 
		*/
		showLeaderboard(leaderboardID: string): void;		
		/**
		!#en
		show the page of achievements
		!#zh
		显示成就榜 
		*/
		showAchievements(): void;		
		/**
		!#en
		unlock achievement
		!#zh
		解锁成就
		@param info Type: map 
		*/
		share(info: any): void;		
		/**
		!#en
		set listener
		!#zh
		设置社交系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取社交系统的监听 
		*/
		getListener(): Function;		
		/**
		!#en
		get friends info
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		获取好友信息，调用前需要判断属性是否存在 
		*/
		pauseRecording(): void;		
		/**
		!#en
		interact
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		订阅，调用前需要判断属性是否存在 
		*/
		interact(): void;		
		/**
		!#en
		subscribe
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		关注，调用前需要判断属性是否存在 
		*/
		subscribe(): void;	
	}	
	/** !#en
	push protocol
	!#zh
	推送系统协议接口 */
	export class ProtocolPush extends PluginProtocol {		
		/**
		!#en
		start Push services
		!#zh
		启动推送服务 
		*/
		startPush(): void;		
		/**
		!#en
		close Push services
		!#zh
		暂停推送服务 
		*/
		closePush(): void;		
		/**
		!#en
		delete alias
		!#zh
		删除别名
		@param alias alias 
		*/
		delAlias(alias: string): void;		
		/**
		!#en
		set alias
		!#zh
		设置别名
		@param alias alias 
		*/
		setAlias(alias: string): void;		
		/**
		!#en
		delete tags
		!#zh
		删除标签
		@param tags Type: list 
		*/
		delTags(tags: any): void;		
		/**
		!#en
		set tags
		!#zh
		设置标签
		@param tags Type: list 
		*/
		setTags(tags: any): void;		
		/**
		!#en
		set listener
		!#zh
		设置推送系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取推送系统的监听 
		*/
		getListener(): Function;	
	}	
	/** !#en
	crash protocol
	!#zh
	崩溃分析系统协议接口 */
	export class ProtocolCrash extends PluginProtocol {		
		/**
		!#en
		set user identifier
		!#zh
		统计用户唯一标识符
		@param identifier identifier 
		*/
		setUserIdentifier(identifier: string): void;		
		/**
		!#en
		The uploader captured in exception information
		!#zh
		上报异常信息
		@param message message
		@param exception exception 
		*/
		reportException(message: string, exception: string): void;		
		/**
		!#en
		customize logging
		!#zh
		自定义日志记录
		@param breadcrumb breadcrumb 
		*/
		leaveBreadcrumb(breadcrumb: string): void;	
	}	
	/** !#en
	REC protocol
	!#zh
	录屏系统协议接口 */
	export class ProtocolREC extends PluginProtocol {		
		/**
		!#en
		share video
		!#zh
		分享视频
		@param info Type: map 
		*/
		share(info: any): void;		
		/**
		!#en
		Start to record video
		!#zh
		开始录制视频 
		*/
		startRecording(): void;		
		/**
		!#en
		Start to record video
		!#zh
		结束录制视频 
		*/
		stopRecording(): void;		
		/**
		!#en
		set listener
		!#zh
		设置录屏系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取录屏系统的监听 
		*/
		getListener(): Function;		
		/**
		!#en
		pause to record video
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		暂停录制视频，调用前需要判断属性是否存在 
		*/
		pauseRecording(): void;		
		/**
		!#en
		resume to record video
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		恢复录制视频，调用前需要判断属性是否存在 
		*/
		resumeRecording(): void;		
		/**
		!#en
		get whether the device is isAvailable
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		获取设备是否可用，调用前需要判断属性是否存在 
		*/
		isAvailable(): boolean;		
		/**
		!#en
		get status of recording
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		获取录制状态，调用前需要判断属性是否存在 
		*/
		isRecording(): boolean;		
		/**
		!#en
		show toolbar
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示悬浮窗，调用前需要判断属性是否存在 
		*/
		showToolBar(): void;		
		/**
		!#en
		hide toolbar
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		隐藏悬浮窗，调用前需要判断属性是否存在 
		*/
		hideToolBar(): void;		
		/**
		!#en
		show video center
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示视频中心，调用前需要判断属性是否存在 
		*/
		showVideoCenter(): void;		
		/**
		!#en
		enter platform
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		显示平台中心，调用前需要判断属性是否存在 
		*/
		enterPlatform(): void;		
		/**
		!#en
		Set the video data, it is recommended to check whether are recorded firstly
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		设置视频相关数据，建议先检查是否是正在录制，调用前需要判断属性是否存在
		@param info Type: map 
		*/
		setMetaData(info: any): void;	
	}	
	/** !#en
	ad tracking protocol
	!#zh
	广告追踪系统协议接口 */
	export class ProtocolAdTracking extends PluginProtocol {		
		/**
		!#en
		Call this method if you want to track register events as happening during a section.
		!#zh
		统计用户注册信息
		@param productInfo Type: map 
		*/
		onPay(productInfo: any): void;		
		/**
		!#en
		Call this method if you want to track register events as happening during a section.
		!#zh
		统计用户注册信息
		@param userInfo Type: map 
		*/
		onLogin(userInfo: any): void;		
		/**
		!#en
		Call this method if you want to track register events as happening during a section.
		!#zh
		统计用户注册信息
		@param userId userId 
		*/
		onRegister(userId: string): void;		
		/**
		!#en
		Call this method if you want to track custom events with parameters as happening during a section.
		!#zh
		统计自定义事件
		@param eventId eventId
		@param paramMap Type: map 
		*/
		trackEvent(eventId: string, paramMap: any): void;		
		/**
		!#en
		Call this method with parameters if you want to create role as happening during a section.
		!#zh
		统计创建角色事件，调用前需要判断属性是否存在
		@param userInfo Type: map 
		*/
		onCreateRole(userInfo: any): void;		
		/**
		!#en
		Call this method if you want to track levelup events with parameters as happening during a section.
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		统计角色升级事件，调用前需要判断属性是否存在
		@param info Type: map 
		*/
		onLevelUp(info: any): void;		
		/**
		!#en
		Invoke this method with parameters if you want to start to pay as happening during a section.
		Before to invoke, you need to verdict whether this properties existed
		!#zh
		统计开始充值事件，调用前需要判断属性是否存在
		@param info Type: map 
		*/
		onStartToPay(info: any): void;	
	}	
	/** !#en
	custom protocol
	!#zh
	自定义系统协议接口 */
	export class ProtocolCustom extends PluginProtocol {		
		/**
		!#en
		set listener
		!#zh
		设置自定义系统的监听
		@param listener listener
		@param target target 
		*/
		setListener(listener: Function, target: any): void;		
		/**
		!#en
		get listener
		!#zh
		获取自定义系统的监听 
		*/
		getListener(): Function;	
	}	
	/** !#en
	Data structure class
	!#zh
	数据结构类 */
	export class PluginParam {		
		/**
		!#en
		create plugin parameters
		!#zh
		创建对象
		@param parameters parameters 
		*/
		static create(parameters: number|string|any): anysdk.PluginParam;	
	}	
	/** !#en The callback of user system
	!#zh 用户系统回调 */
	export enum UserActionResultCode {		
		kInitSuccess = 0,
		kInitFail = 0,
		kLoginSuccess = 0,
		kLoginNetworkError = 0,
		kLoginNoNeed = 0,
		kLoginFail = 0,
		kLoginCancel = 0,
		kLogoutSuccess = 0,
		kLogoutFail = 0,
		kPlatformEnter = 0,
		kPlatformBack = 0,
		kPausePage = 0,
		kExitPage = 0,
		kAntiAddictionQuery = 0,
		kRealNameRegister = 0,
		kAccountSwitchSuccess = 0,
		kAccountSwitchFail = 0,
		kOpenShop = 0,
		kAccountSwitchCancel = 0,
		kUserExtension = 0,
		kSendToDesktopSuccess = 0,
		kSendToDesktopFail = 0,
		kGetAvailableLoginTypeSuccess = 0,
		kGetAvailableLoginTypeFail = 0,
		kGetUserInfoSuccess = 0,
		kGetUserInfoFail = 0,
		kOpenBBSSuccess = 0,
		kOpenBBSFail = 0,	
	}	
	/** !#en The toolbar position of user type
	!#zh 用户系统悬浮窗位置 */
	export enum ToolBarPlace {		
		kToolBarTopLeft = 0,
		kToolBarTopRight = 0,
		kToolBarMidLeft = 0,
		kToolBarMidRight = 0,
		kToolBarBottomLeft = 0,
		kToolBarBottomRight = 0,	
	}	
	/** !#en The callback of requesting reStringge
	!#zh 支付系统支付请求回调 */
	export enum PayResultCode {		
		kPaySuccess = 0,
		kPayFail = 0,
		kPayCancel = 0,
		kPayNetworkError = 0,
		kPayProductionInforIncomplete = 0,
		kPayInitSuccess = 0,
		kPayInitFail = 0,
		kPayNowPaying = 0,
		kPayReStringgeSuccess = 0,
		kPayExtension = 0,
		kPayNeedLoginAgain = 0,
		kRequestSuccess = 0,
		kRequestFail = 0,	
	}	
	/** !#en The enum of account type
	!#zh 统计系统的账号类型 */
	export enum AccountType {		
		ANONYMOUS = 0,
		REGISTED = 0,
		SINA_WEIBO = 0,
		TENCENT_WEIBO = 0,
		QQ = 0,
		ND91 = 0,	
	}	
	/** !#en The enum of account operation
	!#zh 统计系统的账号操作 */
	export enum AccountOperate {		
		LOGIN = 0,
		LOGOUT = 0,
		REGISTER = 0,	
	}	
	/** !#en The enum of gender
	!#zh 统计系统的账号性别 */
	export enum AccountGender {		
		MALE = 0,
		FEMALE = 0,
		UNKNOWN = 0,	
	}	
	/** !#en The enum of task type
	!#zh 统计系统的任务类型 */
	export enum TaskType {		
		GUIDE_LINE = 0,
		MAIN_LINE = 0,
		BRANCH_LINE = 0,
		DAILY = 0,
		ACTIVITY = 0,
		OTHER = 0,	
	}	
	/** !#en The callback of share system
	!#zh 分享系统回调 */
	export enum ShareResultCode {		
		kShareSuccess = 0,
		kShareFail = 0,
		kShareCancel = 0,
		kShareNetworkError = 0,
		kShareExtension = 0,	
	}	
	/** !#en The callback of social system
	!#zh 社交系统回调 */
	export enum SocialRetCode {		
		kScoreSubmitSucceed = 0,
		kScoreSubmitfail = 0,
		kAchUnlockSucceed = 0,
		kAchUnlockFail = 0,
		kSocialSignInSucceed = 0,
		kSocialSignInFail = 0,
		kSocialSignOutSucceed = 0,
		kSocialSignOutFail = 0,
		kSocialGetGameFriends = 0,
		kSocialExtensionCode = 0,
		kSocialGetFriendsInfoSuccess = 0,
		kSocialGetFriendsInfoFail = 0,
		kSocialAlreadySubscription = 0,
		kSocialNoSubscription = 0,
		kSocialSubscriptionFail = 0,	
	}	
	/** !#en The callback of ads system
	!#zh 广告系统回调 */
	export enum AdsResultCode {		
		kAdsReceived = 0,
		kAdsShown = 0,
		kAdsDismissed = 0,
		kPointsSpendSucceed = 0,
		kPointsSpendFailed = 0,
		kNetworkError = 0,
		kUnknownError = 0,
		kOfferWallOnPointsChanged = 0,
		kRewardedVideoWithReward = 0,
		kInAppPurchaseFinished = 0,
		kAdsClicked = 0,
		kAdsExtension = 0,	
	}	
	/** !#en The enum of ads position
	!#zh 广告位置 */
	export enum AdsPos {		
		kPosCenter = 0,
		kPosTop = 0,
		kPosTopLeft = 0,
		kPosTopRight = 0,
		kPosBottom = 0,
		kPosBottomLeft = 0,
		kPosBottomRight = 0,	
	}	
	/** !#en The enum of ads type
	!#zh 广告类型 */
	export enum AdsType {		
		AD_TYPE_BANNER = 0,
		AD_TYPE_FULLSCREEN = 0,
		AD_TYPE_MOREAPP = 0,
		AD_TYPE_OFFERWALL = 0,
		AD_TYPE_REWARDEDVIDEO = 0,
		AD_TYPE_NATIVEEXPRESS = 0,
		AD_TYPE_NATIVEADVANCED = 0,	
	}	
	/** !#en The callback of push system
	!#zh 推送系统回调 */
	export enum PushActionResultCode {		
		kPushReceiveMessage = 0,
		kPushExtensionCode = 0,	
	}	
	/** !#en The callback of custom system
	!#zh 自定义系统回调 */
	export enum CustomResultCode {		
		kCustomExtension = 0,	
	}	
	/** !#en The callback of REC system
	!#zh 录屏系统回调 */
	export enum RECResultCode {		
		kRECInitSuccess = 0,
		kRECInitFail = 0,
		kRECStartRecording = 0,
		kRECStopRecording = 0,
		kRECPauseRecording = 0,
		kRECResumeRecording = 0,
		kRECEnterSDKPage = 0,
		kRECQuitSDKPage = 0,
		kRECShareSuccess = 0,
		kRECShareFail = 0,
		kRECExtension = 0,	
	}
}

/** !#en
The global main namespace of DragonBones, all classes, functions,
properties and constants of DragonBones are defined in this namespace
!#zh
DragonBones 的全局的命名空间，
与 DragonBones 相关的所有的类，函数，属性，常量都在这个命名空间中定义。 */
declare module dragonBones {	
	/** !#en
	The Armature Display of DragonBones <br/>
	<br/>
	(Armature Display has a reference to a DragonBonesAsset and stores the state for ArmatureDisplay instance,
	which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
	Multiple Armature Display can use the same DragonBonesAsset which includes all animations, skins, and attachments.) <br/>
	!#zh
	DragonBones 骨骼动画 <br/>
	<br/>
	(Armature Display 具有对骨骼数据的引用并且存储了骨骼实例的状态，
	它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
	多个 Armature Display 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。)<br/> */
	export class ArmatureDisplay extends cc._RendererUnderSG {		
		/** !#en
		The DragonBones data contains the armatures information (bind pose bones, slots, draw order,
		attachments, skins, etc) and animations but does not hold any state.<br/>
		Multiple ArmatureDisplay can share the same DragonBones data.
		!#zh
		骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
		attachments，皮肤等等）和动画但不持有任何状态。<br/>
		多个 ArmatureDisplay 可以共用相同的骨骼数据。 */
		dragonAsset: DragonBonesAsset;		
		/** !#en
		The atlas asset for the DragonBones.
		!#zh
		骨骼数据所需的 Atlas Texture 数据。 */
		dragonAtlasAsset: DragonBonesAtlasAsset;		
		/** !#en The name of current armature.
		!#zh 当前的 Armature 名称。 */
		armatureName: string;		
		/** !#en The name of current playing animation.
		!#zh 当前播放的动画名称。 */
		animationName: string;		
		_defaultArmatureIndex: number;		
		/** !#en The time scale of this armature.
		!#zh 当前骨骼中所有动画的时间缩放率。 */
		timeScale: number;		
		/** !#en The play times of the default animation.
		     -1 means using the value of config file;
		     0 means repeat for ever
		     >0 means repeat times
		!#zh 播放默认动画的循环次数
		     -1 表示使用配置文件中的默认值;
		     0 表示无限循环
		     >0 表示循环次数 */
		playTimes: number;		
		/** !#en Indicates whether open debug bones.
		!#zh 是否显示 bone 的 debug 信息。 */
		debugBones: boolean;		
		/**
		!#en
		Play the specified animation.
		Parameter animName specify the animation name.
		Parameter playTimes specify the repeat times of the animation.
		-1 means use the value of the config file.
		0 means play the animation for ever.
		>0 means repeat times.
		!#zh
		播放指定的动画.
		animName 指定播放动画的名称。
		playTimes 指定播放动画的次数。
		-1 为使用配置文件中的次数。
		0 为无限循环播放。
		>0 为动画的重复次数。
		@param animName animName
		@param playTimes playTimes 
		*/
		playAnimation(animName: string, playTimes: number): dragonBones.AnimationState;		
		/**
		!#en
		Get the all armature names in the DragonBones Data.
		!#zh
		获取 DragonBones 数据中所有的 armature 名称 
		*/
		getArmatureNames(): any[];		
		/**
		!#en
		Get the all animation names of specified armature.
		!#zh
		获取指定的 armature 的所有动画名称。
		@param armatureName armatureName 
		*/
		getAnimationNames(armatureName: string): any[];		
		/**
		!#en
		Add event listener for the DragonBones Event.
		!#zh
		添加 DragonBones 事件监听器。
		@param eventType eventType
		@param listener listener
		@param target target 
		*/
		addEventListener(eventType: dragonBones.EventObject, listener: Function, target: any): void;		
		/**
		!#en
		Remove the event listener for the DragonBones Event.
		!#zh
		移除 DragonBones 事件监听器。
		@param eventType eventType
		@param listener listener
		@param target target 
		*/
		removeEventListener(eventType: dragonBones.EventObject, listener: Function, target: any): void;		
		/**
		!#en
		Build the armature for specified name.
		!#zh
		构建指定名称的 armature 对象
		@param armatureName armatureName 
		*/
		buildArmature(armatureName: string): dragonBones.Armature;		
		/**
		!#en
		Get the current armature object of the ArmatureDisplay.
		!#zh
		获取 ArmatureDisplay 当前使用的 Armature 对象 
		*/
		armature(): any;	
	}	
	/** !#en The skeleton data of dragonBones.
	!#zh dragonBones 的 骨骼数据。 */
	export class DragonBonesAsset extends cc.Asset {		
		/** !#en See http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html
		!#zh 可查看 DragonBones 官方文档 http://developer.egret.com/cn/github/egret-docs/DB/dbLibs/dataFormat/index.html */
		dragonBonesJson: string;	
	}	
	/** !#en The skeleton atlas data of dragonBones.
	!#zh dragonBones 的骨骼纹理数据。 */
	export class DragonBonesAtlasAsset extends cc.Asset {		
		atlasJson: string;		
		texture: cc.Texture2D;	
	}
}

/** !#en
The global main namespace of Spine, all classes, functions,
properties and constants of Spine are defined in this namespace
!#zh
Spine 的全局的命名空间，
与 Spine 相关的所有的类，函数，属性，常量都在这个命名空间中定义。 */
declare module sp {	
	/** !#en
	The skeleton of Spine <br/>
	<br/>
	(Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
	which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
	Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/>
	!#zh
	Spine 骨骼动画 <br/>
	<br/>
	(Skeleton 具有对骨骼数据的引用并且存储了骨骼实例的状态，
	它由当前的骨骼动作，slot 颜色，和可见的 slot attachments 组成。<br/>
	多个 Skeleton 可以使用相同的骨骼数据，其中包括所有的动画，皮肤和 attachments。 */
	export class Skeleton extends cc._RendererUnderSG {		
		/** !#en The skeletal animation is paused?
		!#zh 该骨骼动画是否暂停。 */
		paused: boolean;		
		/** !#en
		The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
		attachments, skins, etc) and animations but does not hold any state.<br/>
		Multiple skeletons can share the same skeleton data.
		!#zh
		骨骼数据包含了骨骼信息（绑定骨骼动作，slots，渲染顺序，
		attachments，皮肤等等）和动画但不持有任何状态。<br/>
		多个 Skeleton 可以共用相同的骨骼数据。 */
		skeletonData: SkeletonData;		
		/** !#en The name of default skin.
		!#zh 默认的皮肤名称。 */
		defaultSkin: string;		
		/** !#en The name of default animation.
		!#zh 默认的动画名称。 */
		defaultAnimation: string;		
		/** !#en The name of current playing animation.
		!#zh 当前播放的动画名称。 */
		animation: string;		
		_defaultSkinIndex: number;		
		/** !#en TODO
		!#zh 是否循环播放当前骨骼动画。 */
		loop: boolean;		
		/** !#en Indicates whether to enable premultiplied alpha.
		You should disable this option when image's transparent area appears to have opaque pixels,
		or enable this option when image's half transparent area appears to be darken.
		!#zh 是否启用贴图预乘。
		当图片的透明区域出现色块时需要关闭该选项，当图片的半透明区域颜色变黑时需要启用该选项。 */
		premultipliedAlpha: boolean;		
		/** !#en The time scale of this skeleton.
		!#zh 当前骨骼中所有动画的时间缩放率。 */
		timeScale: number;		
		/** !#en Indicates whether open debug slots.
		!#zh 是否显示 slot 的 debug 信息。 */
		debugSlots: boolean;		
		/** !#en Indicates whether open debug bones.
		!#zh 是否显示 bone 的 debug 信息。 */
		debugBones: boolean;		
		/**
		!#en Computes the world SRT from the local SRT for each bone.
		!#zh 重新更新所有骨骼的世界 Transform，
		当获取 bone 的数值未更新时，即可使用该函数进行更新数值。
		
		@example 
		```js
		var bone = spine.findBone('head');
		cc.log(bone.worldX); // return 0;
		spine.updateWorldTransform();
		bone = spine.findBone('head');
		cc.log(bone.worldX); // return -23.12;
		``` 
		*/
		updateWorldTransform(): void;		
		/**
		!#en Sets the bones and slots to the setup pose.
		!#zh 还原到起始动作 
		*/
		setToSetupPose(): void;		
		/**
		!#en
		Sets the bones to the setup pose,
		using the values from the `BoneData` list in the `SkeletonData`.
		!#zh
		设置 bone 到起始动作
		使用 SkeletonData 中的 BoneData 列表中的值。 
		*/
		setBonesToSetupPose(): void;		
		/**
		!#en
		Sets the slots to the setup pose,
		using the values from the `SlotData` list in the `SkeletonData`.
		!#zh
		设置 slot 到起始动作。
		使用 SkeletonData 中的 SlotData 列表中的值。 
		*/
		setSlotsToSetupPose(): void;		
		/**
		!#en
		Finds a bone by name.
		This does a string comparison for every bone.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone object.
		!#zh
		通过名称查找 bone。
		这里对每个 bone 的名称进行了对比。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Bone 对象。
		@param boneName boneName 
		*/
		findBone(boneName: string): sp.spine.Bone;		
		/**
		!#en
		Finds a slot by name. This does a string comparison for every slot.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot object.
		!#zh
		通过名称查找 slot。这里对每个 slot 的名称进行了比较。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Slot 对象。
		@param slotName slotName 
		*/
		findSlot(slotName: string): sp.spine.Slot;		
		/**
		!#en
		Finds a skin by name and makes it the active skin.
		This does a string comparison for every skin.<br>
		Note that setting the skin does not change which attachments are visible.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin object.
		!#zh
		按名称查找皮肤，激活该皮肤。这里对每个皮肤的名称进行了比较。<br>
		注意：设置皮肤不会改变 attachment 的可见性。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Skin 对象。
		@param skinName skinName 
		*/
		setSkin(skinName: string): sp.spine.Skin;		
		/**
		!#en
		Returns the attachment for the slot and attachment name.
		The skeleton looks first in its skin, then in the skeleton data’s default skin.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment object.
		!#zh
		通过 slot 和 attachment 的名称获取 attachment。Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.Attachment 对象。
		@param slotName slotName
		@param attachmentName attachmentName 
		*/
		getAttachment(slotName: string, attachmentName: string): sp.spine.Attachment;		
		/**
		!#en
		Sets the attachment for the slot and attachment name.
		The skeleton looks first in its skin, then in the skeleton data’s default skin.
		!#zh
		通过 slot 和 attachment 的名字来设置 attachment。
		Skeleton 优先查找它的皮肤，然后才是 Skeleton Data 中默认的皮肤。
		@param slotName slotName
		@param attachmentName attachmentName 
		*/
		setAttachment(slotName: string, attachmentName: string): void;		
		/**
		!#en Sets skeleton data to sp.Skeleton.
		!#zh 设置 Skeleton 中的 Skeleton Data。
		@param skeletonData skeletonData
		@param ownsSkeletonData ownsSkeletonData 
		*/
		setSkeletonData(skeletonData: sp.spine.SkeletonData, ownsSkeletonData: sp.spine.SkeletonData): void;		
		/**
		!#en Sets animation state data.<br>
		The parameter type is {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.AnimationStateData.
		!#zh 设置动画状态数据。<br>
		参数是 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.AnimationStateData。
		@param stateData stateData 
		*/
		setAnimationStateData(stateData: sp.spine.AnimationStateData): void;		
		/**
		!#en
		Mix applies all keyframe values,
		interpolated for the specified time and mixed with the current values.
		!#zh 为所有关键帧设定混合及混合时间（从当前值开始差值）。
		@param fromAnimation fromAnimation
		@param toAnimation toAnimation
		@param duration duration 
		*/
		setMix(fromAnimation: string, toAnimation: string, duration: number): void;		
		/**
		!#en Sets event listener.
		!#zh 设置动画事件监听器。
		@param target target
		@param callback callback 
		*/
		setAnimationListener(target: any, callback: Function): void;		
		/**
		!#en Set the current animation. Any queued animations are cleared.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
		!#zh 设置当前动画。队列中的任何的动画将被清除。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
		@param trackIndex trackIndex
		@param name name
		@param loop loop 
		*/
		setAnimation(trackIndex: number, name: string, loop: boolean): sp.spine.TrackEntry;		
		/**
		!#en Adds an animation to be played delay seconds after the current or last queued animation.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
		!#zh 添加一个动画到动画队列尾部，还可以延迟指定的秒数。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
		@param trackIndex trackIndex
		@param name name
		@param loop loop
		@param delay delay 
		*/
		addAnimation(trackIndex: number, name: string, loop: boolean, delay?: number): sp.spine.TrackEntry;		
		/**
		!#en Find animation with specified name.
		!#zh 查找指定名称的动画
		@param name name 
		*/
		findAnimation(name: string): sp.spine.Animation;		
		/**
		!#en Returns track entry by trackIndex.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry object.
		!#zh 通过 track 索引获取 TrackEntry。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.TrackEntry 对象。
		@param trackIndex trackIndex 
		*/
		getCurrent(trackIndex: void): sp.spine.TrackEntry;		
		/**
		!#en Clears all tracks of animation state.
		!#zh 清除所有 track 的动画状态。 
		*/
		clearTracks(): void;		
		/**
		!#en Clears track of animation state by trackIndex.
		!#zh 清除出指定 track 的动画状态。
		@param trackIndex trackIndex 
		*/
		clearTrack(trackIndex: number): void;		
		/**
		!#en Set the start event listener.
		!#zh 用来设置开始播放动画的事件监听。
		@param listener listener 
		*/
		setStartListener(listener: Function): void;		
		/**
		!#en Set the interrupt event listener.
		!#zh 用来设置动画被打断的事件监听。
		@param listener listener 
		*/
		setInterruptListener(listener: Function): void;		
		/**
		!#en Set the end event listener.
		!#zh 用来设置动画播放完后的事件监听。
		@param listener listener 
		*/
		setEndListener(listener: Function): void;		
		/**
		!#en Set the dispose event listener.
		!#zh 用来设置动画将被销毁的事件监听。
		@param listener listener 
		*/
		setDisposeListener(listener: Function): void;		
		/**
		!#en Set the complete event listener.
		!#zh 用来设置动画播放一次循环结束后的事件监听。
		@param listener listener 
		*/
		setCompleteListener(listener: Function): void;		
		/**
		!#en Set the animation event listener.
		!#zh 用来设置动画播放过程中帧事件的监听。
		@param listener listener 
		*/
		setEventListener(listener: Function): void;		
		/**
		!#en Set the start event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画开始播放的事件监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackStartListener(entry: sp.spine.TrackEntry, listener: Function): void;		
		/**
		!#en Set the interrupt event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画被打断的事件监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackInterruptListener(entry: sp.spine.TrackEntry, listener: Function): void;		
		/**
		!#en Set the end event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画播放结束的事件监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackEndListener(entry: sp.spine.TrackEntry, listener: Function): void;		
		/**
		!#en Set the dispose event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画即将被销毁的事件监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackDisposeListener(entry: sp.spine.TrackEntry, listener: Function): void;		
		/**
		!#en Set the complete event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画一次循环播放结束的事件监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackCompleteListener(entry: sp.spine.TrackEntry, listener: Function): void;		
		/**
		!#en Set the event listener for specified TrackEntry (only supported on Web).
		!#zh 用来为指定的 TrackEntry 设置动画帧事件的监听。（只支持 Web 平台）
		@param entry entry
		@param listener listener 
		*/
		setTrackEventListener(entry: sp.spine.TrackEntry, listener: Function): void;	
	}	
	/** !#en The skeleton data of spine.
	!#zh Spine 的 骨骼数据。 */
	export class SkeletonData extends cc.Asset {		
		/** !#en See http://en.esotericsoftware.com/spine-json-format
		!#zh 可查看 Spine 官方文档 http://zh.esotericsoftware.com/spine-json-format */
		skeletonJson: any;		
		atlasText: string;		
		textures: cc.Texture2D[];		
		/** !#en
		A scale can be specified on the JSON or binary loader which will scale the bone positions,
		image sizes, and animation translations.
		This can be useful when using different sized images than were used when designing the skeleton
		in Spine. For example, if using images that are half the size than were used in Spine,
		a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
		resolution texture atlases.
		see http://en.esotericsoftware.com/spine-using-runtimes#Scaling
		!#zh 可查看 Spine 官方文档： http://zh.esotericsoftware.com/spine-using-runtimes#Scaling */
		scale: number;		
		/**
		!#en Get the included SkeletonData used in spine runtime.<br>
		Returns a {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.SkeletonData object.
		!#zh 获取 Spine Runtime 使用的 SkeletonData。<br>
		返回一个 {{#crossLinkModule "sp.spine"}}sp.spine{{/crossLinkModule}}.SkeletonData 对象。
		@param quiet quiet 
		*/
		getRuntimeData(quiet?: boolean): sp.spine.SkeletonData;	
	}	
	/** !#en The event type of spine skeleton animation.
	!#zh 骨骼动画事件类型。 */
	export enum AnimationEventType {		
		START = 0,
		END = 0,
		COMPLETE = 0,
		EVENT = 0,	
	}
}

/** !#en
`sp.spine` is the namespace for official Spine Runtime, which officially implemented and maintained by Spine.<br>
Please refer to the official documentation for its detailed usage: [http://en.esotericsoftware.com/spine-using-runtimes](http://en.esotericsoftware.com/spine-using-runtimes)
!#zh
sp.spine 模块是 Spine 官方运行库的 API 入口，由 Spine 官方统一实现和维护，具体用法请参考：[http://zh.esotericsoftware.com/spine-using-runtimes](http://zh.esotericsoftware.com/spine-using-runtimes) */
declare module sp.spine {
}

/** !#en Some JavaScript decorators which can be accessed with "cc._decorator".
!#zh 一些 JavaScript 装饰器，目前可以通过 "cc._decorator" 来访问。
（这些 API 仍不完全稳定，有可能随着 JavaScript 装饰器的标准实现而调整） */
declare module cc._decorator {	
	/**
	!#en
	Declare the standard [ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
	as CCClass, please see [Class](/docs/editors_and_tools/creator-chapters/scripting/class/) for details.
	!#zh
	将标准写法的 [ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 声明为 CCClass，具体用法请参阅[类型定义](/docs/creator/scripting/class/)。
	@param name The class name used for serialization.
	
	@example 
	```js
	const {ccclass} = cc._decorator;
	
	// define a CCClass, omit the name
	&#64;ccclass
	class NewScript extends cc.Component {
	    // ...
	}
	
	// define a CCClass with a name
	&#64;ccclass('LoginData')
	class LoginData {
	    // ...
	}
	``` 
	*/
	export function ccclass(name?: string): Function;
	export function ccclass(_class?: Function): void;	
	/**
	!#en
	Declare property for [CCClass](/docs/editors_and_tools/creator-chapters/scripting/class/).
	!#zh
	定义 [CCClass](/docs/creator/scripting/class/) 所用的属性。
	@param options an object with some property attributes
	
	@example 
	```js
	const {ccclass, property} = cc._decorator;
	
	&#64;ccclass
	class NewScript extends cc.Component {
	    &#64;property({
	        type: cc.Node
	    })
	    targetNode1 = null;
	
	    &#64;property(cc.Node)
	    targetNode2 = null;
	
	    &#64;property(cc.Button)
	    targetButton = null;
	
	    &#64;property
	    _width = 100;
	
	    &#64;property
	    get width () {
	        return this._width;
	    }
	
	    &#64;property
	    set width (value) {
	        return this._width = value;
	    }
	
	    &#64;property
	    offset = new cc.Vec2(100, 100);
	
	    &#64;property(cc.Vec2)
	    offsets = [];
	
	    &#64;property(cc.Texture2D)
	    texture = "";
	}
	
	// above is equivalent to (上面的代码相当于):
	
	var NewScript = cc.Class({
	    properties: {
	        targetNode1: {
	            default: null,
	            type: cc.Node
	        },
	
	        targetNode2: {
	            default: null,
	            type: cc.Node
	        },
	
	        targetButton: {
	            default: null,
	            type: cc.Button
	        },
	
	        _width: 100,
	
	        width: {
	            get () {
	                return this._width;
	            },
	            set (value) {
	                this._width = value;
	            }
	        },
	
	        texture: {
	            default: "",
	            url: cc.Texture2D
	        },
	    }
	});
	``` 
	*/
	export function property(options?: {type?: any; url?: typeof cc.RawAsset; visible?: boolean|(() => boolean); displayName?: string; tooltip?: string; multiline?: boolean; readonly?: boolean; min?: number; max?: number; step?: number; range?: number[]; slide?: boolean; serializable?: boolean; editorOnly?: boolean; override?: boolean; animatable?: boolean; default?: any}): Function;
	export function property(_target: Object, _key: any, _desc?: any): void;	
	/**
	!#en
	Makes a CCClass that inherit from component execute in edit mode.<br>
	By default, all components are only executed in play mode,
	which means they will not have their callback functions executed while the Editor is in edit mode.
	!#zh
	允许继承自 Component 的 CCClass 在编辑器里执行。<br>
	默认情况下，所有 Component 都只会在运行时才会执行，也就是说它们的生命周期回调不会在编辑器里触发。
	
	@example 
	```js
	const {ccclass, executeInEditMode} = cc._decorator;
	
	&#64;ccclass
	&#64;executeInEditMode
	class NewScript extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function executeInEditMode(): Function;
	export function executeInEditMode(_class: Function): void;	
	/**
	!#en
	Automatically add required component as a dependency for the CCClass that inherit from component.
	!#zh
	为声明为 CCClass 的组件添加依赖的其它组件。当组件添加到节点上时，如果依赖的组件不存在，引擎将会自动将依赖组件添加到同一个节点，防止脚本出错。该设置在运行时同样有效。
	@param requiredComponent requiredComponent
	
	@example 
	```js
	const {ccclass, requireComponent} = cc._decorator;
	
	&#64;ccclass
	&#64;requireComponent(cc.Sprite)
	class SpriteCtrl extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function requireComponent(requiredComponent: typeof cc.Component): Function;	
	/**
	!#en
	The menu path to register a component to the editors "Component" menu. Eg. "Rendering/CameraCtrl".
	!#zh
	将当前组件添加到组件菜单中，方便用户查找。例如 "Rendering/CameraCtrl"。
	@param path The path is the menu represented like a pathname.
	                       For example the menu could be "Rendering/CameraCtrl".
	
	@example 
	```js
	const {ccclass, menu} = cc._decorator;
	
	&#64;ccclass
	&#64;menu("Rendering/CameraCtrl")
	class NewScript extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function menu(path: string): Function;	
	/**
	!#en
	The execution order of lifecycle methods for Component.
	Those less than 0 will execute before while those greater than 0 will execute after.
	The order will only affect onLoad, onEnable, start, update and lateUpdate while onDisable and onDestroy will not be affected.
	!#zh
	设置脚本生命周期方法调用的优先级。优先级小于 0 的组件将会优先执行，优先级大于 0 的组件将会延后执行。优先级仅会影响 onLoad, onEnable, start, update 和 lateUpdate，而 onDisable 和 onDestroy 不受影响。
	@param order The execution order of lifecycle methods for Component. Those less than 0 will execute before while those greater than 0 will execute after.
	
	@example 
	```js
	const {ccclass, executionOrder} = cc._decorator;
	
	&#64;ccclass
	&#64;executionOrder(1)
	class CameraCtrl extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function executionOrder(order: number): Function;	
	/**
	!#en
	Prevents Component of the same type (or subtype) to be added more than once to a Node.
	!#zh
	防止多个相同类型（或子类型）的组件被添加到同一个节点。
	
	@example 
	```js
	const {ccclass, disallowMultiple} = cc._decorator;
	
	&#64;ccclass
	&#64;disallowMultiple
	class CameraCtrl extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function disallowMultiple(): Function;
	export function disallowMultiple(_class: Function): void;	
	/**
	!#en
	If specified, the editor's scene view will keep updating this node in 60 fps when it is selected, otherwise, it will update only if necessary.<br>
	This property is only available if executeInEditMode is true.
	!#zh
	当指定了 "executeInEditMode" 以后，playOnFocus 可以在选中当前组件所在的节点时，提高编辑器的场景刷新频率到 60 FPS，否则场景就只会在必要的时候进行重绘。
	
	@example 
	```js
	const {ccclass, playOnFocus, executeInEditMode} = cc._decorator;
	
	&#64;ccclass
	&#64;executeInEditMode
	&#64;playOnFocus
	class CameraCtrl extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function playOnFocus(): Function;
	export function playOnFocus(_class: Function): void;	
	/**
	!#en
	Specifying the url of the custom html to draw the component in **Properties**.
	!#zh
	自定义当前组件在 **属性检查器** 中渲染时所用的网页 url。
	@param url url
	
	@example 
	```js
	const {ccclass, inspector} = cc._decorator;
	
	&#64;ccclass
	&#64;inspector("packages://inspector/inspectors/comps/camera-ctrl.js")
	class NewScript extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function inspector(path: string): Function;	
	/**
	!#en
	The custom documentation URL.
	!#zh
	指定当前组件的帮助文档的 url，设置过后，在 **属性检查器** 中就会出现一个帮助图标，用户点击将打开指定的网页。
	@param url url
	
	@example 
	```js
	const {ccclass, help} = cc._decorator;
	
	&#64;ccclass
	&#64;help("app://docs/html/components/spine.html")
	class NewScript extends cc.Component {
	    // ...
	}
	``` 
	*/
	export function help(path: string): Function;	
	/**
	NOTE:<br>
	The old mixins implemented in cc.Class(ES5) behaves exact the same as multiple inheritance.
	But since ES6, class constructor can't be function-called and class methods become non-enumerable,
	so we can not mix in ES6 Classes.<br>
	See:<br>
	[https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32](https://esdiscuss.org/topic/traits-are-now-impossible-in-es6-until-es7-since-rev32)<br>
	One possible solution (but IDE unfriendly):<br>
	[http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)<br>
	<br>
	NOTE:<br>
	You must manually call mixins constructor, this is different from cc.Class(ES5).
	@param ctor constructors to mix, only support ES5 constructors or classes defined by using `cc.Class`,
	                            not support ES6 Classes.
	
	@example 
	```js
	const {ccclass, mixins} = cc._decorator;
	
	class Animal { ... }
	
	const Fly = cc.Class({
	    constructor () { ... }
	});
	
	&#64;ccclass
	&#64;mixins(cc.EventTarget, Fly)
	class Bird extends Animal {
	    constructor () {
	        super();
	
	        // You must manually call mixins constructor, this is different from cc.Class(ES5)
	        cc.EventTarget.call(this);
	        Fly.call(this);
	    }
	    // ...
	}
	``` 
	*/
	export function mixins(ctor: Function, ...rest: Function[]): Function;
}

/** This module provides some JavaScript utilities.
All members can be accessed with "cc.js". */
declare module cc.js {	
	/**
	Check the obj whether is number or not
	If a number is created by using 'new Number(10086)', the typeof it will be "object"...
	Then you can use this function if you care about this case.
	@param obj obj 
	*/
	export function isNumber(obj: any): boolean;	
	/**
	Check the obj whether is string or not.
	If a string is created by using 'new String("blabla")', the typeof it will be "object"...
	Then you can use this function if you care about this case.
	@param obj obj 
	*/
	export function isString(obj: any): boolean;	
	/**
	This method is deprecated, use cc.js.mixin please.<br>
	Copy all properties not defined in obj from arguments[1...n]
	@param obj object to extend its properties
	@param sourceObj source object to copy properties from 
	*/
	export function addon(obj: any, ...sourceObj: any[]): any;	
	/**
	copy all properties from arguments[1...n] to obj
	@param obj obj
	@param sourceObj sourceObj 
	*/
	export function mixin(obj: any, ...sourceObj: any[]): any;	
	/**
	Derive the class from the supplied base class.
	Both classes are just native javascript constructors, not created by cc.Class, so
	usually you will want to inherit using {{#crossLink "cc/Class:method"}}cc.Class {{/crossLink}} instead.
	@param cls cls
	@param base the baseclass to inherit 
	*/
	export function extend(cls: Function, base: Function): Function;	
	/**
	Get super class
	@param ctor the constructor of subclass 
	*/
	export function getSuper(ctor: Function): Function;	
	/**
	Removes all enumerable properties from object
	@param obj obj 
	*/
	export function clear(obj: any): void;	
	/**
	Get property descriptor in object and all its ancestors
	@param obj obj
	@param name name 
	*/
	export function getPropertyDescriptor(obj: any, name: string): any;	
	/**
	Define value, just help to call Object.defineProperty.<br>
	The configurable will be true.
	@param obj obj
	@param prop prop
	@param value value
	@param writable writable
	@param enumerable enumerable 
	*/
	export function value(obj: any, prop: string, value: any, writable?: boolean, enumerable?: boolean): void;	
	/**
	Define get set accessor, just help to call Object.defineProperty(...)
	@param obj obj
	@param prop prop
	@param getter getter
	@param setter setter
	@param enumerable enumerable 
	*/
	export function getset(obj: any, prop: string, getter: Function, setter: Function, enumerable?: boolean): void;	
	/**
	Define get accessor, just help to call Object.defineProperty(...)
	@param obj obj
	@param prop prop
	@param getter getter
	@param enumerable enumerable
	@param configurable configurable 
	*/
	export function get(obj: any, prop: string, getter: Function, enumerable?: boolean, configurable?: boolean): void;	
	/**
	Define set accessor, just help to call Object.defineProperty(...)
	@param obj obj
	@param prop prop
	@param setter setter
	@param enumerable enumerable
	@param configurable configurable 
	*/
	export function set(obj: any, prop: string, setter: Function, enumerable?: boolean, configurable?: boolean): void;	
	/**
	Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
	(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
	@param objOrCtor instance or constructor 
	*/
	export function getClassName(objOrCtor: any|Function): string;	
	/**
	Register the class by specified name manually
	@param className className
	@param constructor constructor 
	*/
	export function setClassName(className: string, constructor: Function): void;	
	/**
	Unregister a class from fireball.
	
	If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
	Please note that its still your responsibility to free other references to the class.
	@param constructor the class you will want to unregister, any number of classes can be added 
	*/
	export function unregisterClass(...constructor: Function[]): void;	
	/**
	Get the registered class by name
	@param classname classname 
	*/
	export function getClassByName(classname: string): Function;	
	/**
	Defines a polyfill field for obsoleted codes.
	@param obj YourObject or YourClass.prototype
	@param obsoleted "OldParam" or "YourClass.OldParam"
	@param newPropName "NewParam"
	@param writable writable 
	*/
	export function obsolete(obj: any, obsoleted: string, newPropName: string, writable?: boolean): void;	
	/**
	Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
	@param obj YourObject or YourClass.prototype
	@param objName "YourObject" or "YourClass"
	@param props props
	@param writable writable 
	*/
	export function obsoletes(obj: any, objName: any, props: any, writable?: boolean): void;	
	/**
	A string tool to construct a string with format string.
	for example:
	     cc.js.formatStr("a: %s, b: %s", a, b);
	     cc.js.formatStr(a, b, c); 
	*/
	export function formatStr(): string;	
	/** undefined */
	export class array {		
		/**
		Removes the array item at the specified index.
		@param array array
		@param index index 
		*/
		static removeAt(array: any[], index: number): void;		
		/**
		Removes the array item at the specified index.
		It's faster but the order of the array will be changed.
		@param array array
		@param index index 
		*/
		static fastRemoveAt(array: any[], index: number): void;		
		/**
		Removes the first occurrence of a specific object from the array.
		@param array array
		@param value value 
		*/
		static remove(array: any[], value: any): boolean;		
		/**
		Removes the first occurrence of a specific object from the array.
		It's faster but the order of the array will be changed.
		@param array array
		@param value value 
		*/
		static fastRemove(array: any[], value: number): void;		
		/**
		Verify array's Type
		@param array array
		@param type type 
		*/
		static verifyType(array: any[], type: Function): boolean;		
		/**
		Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.
		@param array Source Array
		@param minusArr minus Array 
		*/
		static removeArray(array: any[], minusArr: any[]): void;		
		/**
		Inserts some objects at index
		@param array array
		@param addObjs addObjs
		@param index index 
		*/
		static appendObjectsAt(array: any[], addObjs: any[], index: number): any[];		
		/**
		Exact same function as Array.prototype.indexOf.
		HACK: ugliy hack for Baidu mobile browser compatibility,
		stupid Baidu guys modify Array.prototype.indexOf for all pages loaded,
		their version changes strict comparison to non-strict comparison,
		it also ignores the second parameter of the original API,
		and this will cause event handler enter infinite loop.
		Baidu developers, if you ever see this documentation,
		here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
		Seriously !
		@param searchElement Element to locate in the array.
		@param fromIndex The index to start the search at 
		*/
		static indexOf(searchElement: any, fromIndex?: number): number;		
		/**
		Determines whether the array contains a specific value.
		@param array array
		@param value value 
		*/
		static contains(array: any[], value: any): boolean;		
		/**
		Copy an array's item to a new array (its performance is better than Array.slice)
		@param array array 
		*/
		static copy(array: any[]): any[];	
	}	
	/** !#en
	A fixed-length object pool designed for general type.<br>
	The implementation of this object pool is very simple,
	it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
	!#zh
	长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
	这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。 */
	export class Pool {		
		/**
		!#en
		Constructor for creating an object pool for the specific object type.
		You can pass a callback argument for process the cleanup logic when the object is recycled.
		!#zh
		使用构造函数来创建一个指定对象类型的对象池，您可以传递一个回调函数，用于处理对象回收时的清理逻辑。
		@param cleanupFunc the callback method used to process the cleanup logic when the object is recycled.
		@param size initializes the length of the array 
		*/
		constructor(cleanupFunc?: (obj: any) => void, size: number);		
		/**
		!#en
		Get and initialize an object from pool. This method defaults to null and requires the user to implement it.
		!#zh
		获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
		@param params parameters to used to initialize the object 
		*/
		get(...params: any[]): any;		
		/** !#en
		The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
		the maximum will not exceed the size specified when the constructor is called.
		!#zh
		当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。 */
		count: number;		
		/**
		!#en
		Get an object from pool, if no available object in the pool, null will be returned.
		!#zh
		获取对象池中的对象，如果对象池没有可用对象，则返回空。 
		*/
		_get(): any;		
		/**
		!#en Put an object into the pool.
		!#zh 向对象池返还一个不再需要的对象。 
		*/
		put(): void;	
	}
}
declare let jsb: any;
