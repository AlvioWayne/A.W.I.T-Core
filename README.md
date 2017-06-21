A.W.I.T Core
================================

I present a new technology to simplify web development and website display.


GREETINGS!
-------------------------

One of the main problems has always been buggy or slow loading site.
Since the browser loads the content, images, menus, scripts, styles, and at the same time.
And it so happens that the user to see the content needed to wait for the full site load, and when a slow connection is not very convenient.

The first thing that makes core optimizes loading site and accelerates it.
If you write a template specifically for AWIT Core, it is possible is achieved in 50% loading rate.
Built-in security, remove from the page unwanted scripts and iframe.

Even at speeds of up to 100 kb / s poster will be displayed faster and more stable.
Future versions will work better with the code and uploading sites.
For best results, better to write template is built on AWITCore.

In the future I will write more.


CORE INCLUDED
-------------------------
- General scripts for page
- Site load acceleration
- Secure system (experimental)
- Page Full HD Background
- Absolute center for any content (only for <body> tag)
- jQuery v2.1.1 & Plugins (By John Resig)
- jQuery NiceScroll v3.5.4 (By InuYaksa)
- And more in future...

#### Only 61 Kb
Despite the fact that inside the core gathered much of its weight is less than the weight alone jQuery.min.


#### Fully customizable
Inside the core, there are custom settings.
You can enable or disable any core element (even jQuery).

#### Problems
- Disabling any element, the core will not weigh less. This problem will be solved in the future.
- Core size is still large (in future versions it will dynamically change depending on the user settings)


INSTALLATION
-------------------------

IE (Internet Explorer) and uCoz CMS not supported!
On other CMS still pass the tests ...

To install the core, write the inside of your head
```html
<script type="text/javascript" charset="windows-1252" src="path to core/!AWITCore/AWIT.Core.config?1.js"</script>
<script type="text/javascript" charset="windows-1252" src="path to core/!AWITCore/AWIT.Core.v4.0.bsmin.js"</script>
```


OPTIONS
-------------------------

#### General

```js

	true // enable
	false // disable

	var AWITCore = {
//		GENERAL
		generalStyles: true, // basic settings and styles for page
		imgAfterLoad: true, // loading images after loading the whole page and content
		BodyAbsoluteCenter: true, // everything absolute centering in body tag
		BodyAbsoluteCenterFix: true,
		
//		FONT
		FontAppend: true,
			FontAppendTags: "*", // if * font append to full page
			FontLoad: "OpenSans-Light.ttf",
			FontName: "Open Sans",
			FontWeight: "normal",
			FontStyle: "normal",
		
//		BACKGROUND
		background: true,
			back_image: "background", // if 'background' core use 'background.jpg' before the core.
//			back_image: "http://bwalles.com/wp-content/uploads/2013/05/Big-Bang-Near-Planet-In-Space-Widescreen-Wallpaper.jpg", // Url img exemple
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
	// more options for scrollbar read on http://areaaperta.com/nicescroll/ - Configuration parameters
	
```

#### CSS Clases (put in yor html code)

```html
<a class="scrollTo" href="#link">Link</a>
<div id="link"></div>
```

#### JS functions (put in yor html code)

```js
goBack()
// by clicking return to the previous page
onclick="goBack()"
// or <a onclick="goBack()">
```





