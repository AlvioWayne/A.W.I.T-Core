/*!	A.W.I.T.Core



	Version 4.0.39 (beta) Stable
	By Alvio Wayne 2016 (11/04/2016)



	Installation:
	Insert < script type="text/javascript" charset="windows-1252" src="/AWITCore/AWIT.Core.config?1.js" >< /script >
	Insert < script type="text/javascript" charset="windows-1252" src="/AWITCore/AWIT.Core.v4.0.bsmin.js" >< /script >
	to the head of the document (remove spaces in the script tag)



*/



//	USER CONFIG
//	true - on, false - off,
	var AWITCore = {
//		GENERAL
		generalStyles: true,
		imgAfterLoad: true,
		BodyAbsoluteCenter: true,
		BodyAbsoluteCenterFix: true,
		
//		FONT
		FontAppend: false,
			FontAppendTags: "*", // if * font append to full page
			FontLoad: "OpenSans-Light.ttf",
			FontName: "Open Sans",
			FontWeight: "normal",
			FontStyle: "normal",
		
//		BACKGROUND
		background: false,
			back_image: "background", // if 'background' core use 'background.jpg' before the core.
			back_image_low: "background_low", // if 'background_low' core use 'background_low.jpg' before the core.
			
			back_size: "cover",
			back_repeat: "no-repeat",
			back_position: "center center",
			back_animation: "fadeIn", // 'none', 'fadeIn',
		
//		SECURE (experimental)
		Secure: false,
		extraSecure: false, // Over time, the code clears. All script, iframe remove from page source.
		codeOrder: true,
		pageSelectionLock: false,
		mouseLock: false,
		
//		SITE (or page) NOT WORK ON:
		desktop: false,
		tablet: false,
		smartphone: false,
		deviceAlertText: "",
		
		tablet_landscape: false,
		tablet_portrait: false,
		smartphone_landscape: false,
		smartphone_portrait: false,
		deviceAlertOrientationText: "",
	};
	var AWITCoreScrollbar = {
//		SCROLLBAR
		Scrollator: true,
			ScrollToTags: 'body, .scroll', // enter tags separated by commas // do not enter html tag
			scrollbarOnBodyPosition: "top: 0px; right: 0px; bottom: 0px;",
			minHandleHeightPercent: '20',
			refreshTime: '1', // in ms
			zIndex: '999',
			autoHide: false,
			autoHideDelay: '3500', // in ms
		
			// Style
			scrollbarColor: "rgba(255, 255, 255, 0.9)",
			scrollbarWidth: "14px",
			scrollbarBorder: "5px solid rgba(0, 0, 0, 0);",
			scrollbarBorderRadius: "16px",
			scrollbarShadow: "0 0 5px rgba(0,0,0,0.3)",
			scrollbarCustomStyle: "",
		
//		SCROLL TO TOP
		ScrollTop: true,
			ScrollTop_color: "rgba(255,255,255,0.9)",
			ScrollTop_hovercolor: "rgba(255,255,255,1)",
			ScrollTop_position: "bottom: 35px; right: 50px;",
			ScrollTop_speed: '350', // in ms
	};



























