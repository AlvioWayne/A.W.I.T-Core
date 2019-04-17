	$AWITCore({ // true - on, false - off
		Init: true,
		UP: false,
		
		BaseStyle: true,
		CustomStylesScripts: [],
		StyleVer: '',
		WowNew: true,
		ImgAfterLoad: true,
		BodyAbsoluteCenter: false,
		
//		SCROLLBAR
		ScrolllToID: true,
		
//		FONTS
		FontLoad: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600",
			fl_name: "Roboto",
			fl_pageShowWhait: true,
		FontAwesome: true,
		
//		BACKGROUND
		FullPageBackground: false,
//			Back_Type: "fullpage", // fullpage, container (just type id of container)
			Back_HD: "background.jpg", // if 'background' core use 'background.jpg' before the core.
			Back_Low: "background_low.jpg", // if 'background_low' core use 'background_low.jpg' before the core.
			Back_Overlay: false,
				Back_Size: "cover",
				Back_Repeat: "no-repeat",
				Back_Position: "center center",
				Back_Animation: "ac_fadeIn", // 'none', 'fadeIn'
				Back_AnimSpeed: "700", // in ms
		
//		FOT DEVELOPERS
		ShowFPS: false,
		
		// Device block
		desktopBlock: false,
		tabletBlock: false,
		mobileBlock: false,
			deviceBlockText: "For now,<br>site (or page) temporary<br>not supported on this device.",
		
	});
	
	
	