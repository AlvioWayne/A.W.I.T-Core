/*!	A.W.I.T.Core



	Version 5 (5.16.0 Monolith | 26.12.2017)
	By Alvio Wayne 2017



	Installation:
	Insert < script type="text/javascript" charset="windows-1252" src="/AWITCore/AWIT.Core5.Init.min.js" >< /script >
	Insert < script type="text/javascript" charset="windows-1252" src="/AWITCore/AWIT.Core5.config?1.js" >< /script >
	Insert < script type="text/javascript" charset="windows-1252" src="/AWITCore/AWIT.Core5.bsmin.js" >< /script >
	to the head of the document (remove spaces in the script tag)



*/



//	USER CONFIG
//	true - on, false - off,
	var AWITCoreConfig = {
		HomeLink: ['http://localhost/GE/Fase_III_L/', 'http://localhost/GE/Fase_III_L/index.html'],
//		HomeLink: ['http://awdevge.kaufi.com.ua/v3m/', 'http://awdevge.kaufi.com.ua/v3m/index.html'],
		
		ImgAfterLoad: true,
		BodyAbsoluteCenter: false,
		StyledSelect: false,
		StyledCheckboxRadio: false,
		StyledInputText: false,
		StyledTextarea: false,
		ScrolllToID: true,
		WowNew: true,
		
//		BACKGROUND
		FullPageBackground: true,
			background_HD: "background.jpg", // if 'background' core use 'background.jpg' before the core.
			background_low: "background_low.jpg", // if 'background_low' core use 'background_low.jpg' before the core.
			background_overlay: true,
				back_size: "cover",
				back_repeat: "no-repeat",
				back_position: "center center",
				back_animation: "fadeIn", // 'none', 'fadeIn'
				back_anim_speed: "700", // in ms
				
//		FONT
		FontAwesome: false,
			FA_minCss: false,
		FontAppend: true,
//			fontAppendTags: ".about, article", // if * font append to all page
			fontLoad: "OpenSans-Light.ttf",
			fontName: "Open Sans",
//			fontFadeIn: false,
//			fontFadeIn_speed: "500", // in ms
//			fontFadeIn_delay: "600", // in ms
		
//		SITE (or page) NOT WORK ON:
		desktopBlock: false,
		tabletBlock: false,
		mobileBlock: false,
			deviceBlockText: "For now,<br>site (or page) temporary<br>not supported on this device.",
		
//		EXPERIMENTAL
		Secure: false,
		ShowFPS: false,
//		pageInitDelay: '', // in ms
	};
	var AWITCoreScrollbar = {
//		SCROLLBAR
		Scrollator: true,
		AutoAppend: true, // (experimental)
			ScrollToTags: 'body', // enter tags separated by commas // do not enter html tag
			refreshTime: '10', // in ms
			zIndex: '9997',
			autoHide: false,
			autoHideDelay: '3500', // in ms
			
			// Style
			scrollbarOnBodyPosition: "top: 0px; right: 0px; bottom: 0px;",
			minHandleHeightPercent: '20',
			scrollbarWidth: "14px",
			scrollbarColor: "rgba(255, 255, 255, 1)",
			scrollbarShadow: "0 0 5px rgba(0,0,0,0.3)",
			scrollbarBorder: "border-left: 9px solid rgba(0, 0, 0, 0);",
			scrollbarBorderRadius: "16px",
			scrollbarCustomStyle: "",
		
//		SCROLL TO TOP
		ScrollTop: true,
			ScrollTop_color: "rgba(255,255,255,0.3)",
			ScrollTop_hovercolor: "rgba(255,255,255,0.7)",
			ScrollTop_position: "bottom: 35px; right: 50px;",
			ScrollTop_speed: '350', // in ms
			ScrollTop_zIndex: '9997',
	};
	var RCMenuBeta = {
		Active: true,
		RightClickMenu: false,
		contextMenuOnMouseHold: false,
		
		RCM_mouseSelectionLock: false,
		UnrelatedStyles: false,
		mouseClickMiddle: false,
		
		styleMain: 'RCMenu_style',
		styleTablet: 'RCMenu_style',
		styleMobile: 'RCMenu_styleMobile',
		
		ID: '#RCMenu',
		Open: '#RCMenuOpen',
		OpenButton: '#RCMenuButton',
		Close: '#RCMenuClose',
		Tab: '#RCMenu ul li button',
		GoBack: '#goBack',
		
		NavClass: 'navbar',
		NavTitle: '.navbar > input[name="pageTitle"]',
		NavFavicon: '.navbar #favicon',
		PageTitle: document.title,
		PageFavicon: true,
	};

























