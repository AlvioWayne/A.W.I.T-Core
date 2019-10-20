A.W.I.T Core 6 Monolith
================================

I present a new technology to simplify web development and website display.


GREETINGS!
-------------------------

One of the main problems of loading a page on a site is its instability.
The appearance of the content even before the full loading of styles, scripts, as well as page hangs.

The сore fixes this, allows you to optimize and stabilize the site loading, as well as speed it up due to the delayed loading of images, etc.

Still in work ...
Therefore, in the next versions, it is possible to change the names of functions, styles, structure of files.

#### Documentation in development...


CORE INCLUDED
-------------------------
- jQuery v3.3.1 & Plugins (By John Resig)
- General styles & scripts for load acceleration
- modernizr 3.5.0
- Device detect and realtime orientation change
- Information about browser and OS
- Full HD Background
- And more...


#### Only 95 Kb (bsmin version)
Despite the fact that inside the core gathered much of its weight is less than the weight alone jQuery.min.


#### Fully customizable
Inside the core, there are custom settings.
You can enable or disable any core element (even jQuery).


INSTALLATION
-------------------------

IE (Internet Explorer) and uCoz CMS not supported!

To install the core, write the inside of your head
```html
<script type='text/javascript' charset='windows-1252' src='path_to_AWITCore_folder/AWIT.Core6.bsmin.js'></script>
<script type='text/javascript' src='AWITCore/AWIT.Core6.config.js'></script>
```

Or for PHP (NEW in "A.W.I.T Core 6")
```php
<?php
include $tpl_path.'path_to_AWITCore_folder/php/AWIT.Core6.php';
```
Then in "AWIT.Core6.config.php" on\off options or add your files:
```php
<?php
$AC_addCJ[] = ACPath.'styles/custom/css.css';
$AC_addCJ[] = ACPath.'styles/custom/js.js';
```





























