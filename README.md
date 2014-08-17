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

#### Only 79 Kb
Despite the fact that inside the core gathered much of its weight is less than the weight alone jQuery.min.


#### Fully customizable
Inside the core, there are custom settings.
You can enable or disable any core element (even jQuery).

#### Problems
- Disabling any element, the core will not weigh less. This problem will be solved in the future.
- Not display on smartphones, due to lack of support js and css3 animation in some browsers.
- Core size is still large (in future versions it will dynamically change depending on the user settings)


INSTALLATION
-------------------------

IE (Internet Explorer) and uCoz CMS not supported!
On other CMS still pass the tests ...

To install the core, write the inside of your head
```html
<script type="text/javascript" charset="windows-1252" src="path to core/!AWITCore/AWIT.Core.bsmin.js"</script>
```

And add to the tag body style="display:none"
```html
<body style="display:none">
```


OPTIONS
-------------------------

#### General

```js
true // enable
false // disable

jQuery
// connects jQuery
jQueryCookie
// connects jQueryCookie
generalStyles
// basic settings and styles for page
imgAfterLoad
// loading images after loading the whole page and content
absoluteCenter
// everything absolute centering in body tag
```

#### Background

```js
back_hd
// connection background image (in a good or HD quality) to the site,
// put "background.jpg" beside the core
back_low
// connection background image (with low quality preview) on the site,
// put "background_low.jpg" beside the core
back_position
// background image position (default centered)
```

#### Scroll to top (will not always work)

```js
arrowScrollTop
// button to scroll to the top of the page
arrow_color
// change color
arrow_hovercolor
// change hover color
```

#### Secure (experimental)

```js
codeOrder
// organization and code cleanup, when the page opens
scriptRemove
// removes all <script> tags of page, when the page opens
iframeRemove
// removes all tags <iframe> from the page, when the page opens
mouseLock
// blocks the right mouse button
```

#### Nicescroll

```js
jQueryNiceScroll
// by far the best scroll bar for the site,
active
// enable or disable
tag
// main tag for the entire page to be assigned to the scroll,
// use "body" or "html"
zindex
// change z-index for scrollbar (default: 9999)
scrollspeed
// scrolling speed (default: 60)
cursorcolor
// change cursor color
cursorwidth
// cursor width in pixel
cursorborder
// css definition for cursor border
cursorborderradius
// border radius in pixel for cursor
autohidemode
// auto-hide the cursor
spacebarenabled
// enable page down scrolling when space bar has pressed (default: false)
smoothscroll
// scroll with ease movement (default: true)
```
And many more options ... read on the site [http://areaaperta.com/nicescroll/](http://areaaperta.com/nicescroll/) - Configuration parameters

#### CSS Clases (put in yor html code)

```css
.dn
/* hide block using display: none; */
.db*
/* display block using display: block; */
.scrollTo
/* activation of the scroll to the desired id, example: */
```
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





