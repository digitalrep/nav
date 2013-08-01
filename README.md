DigitalRepInfo Jquery Very Simple Nav
=====================================

Included Files:
---------------
<table>
  <tr><th>Description</th><th>File</th></tr>
  <tr><td>Example usage:</td><td>example.htm</td></tr>
  <tr><td>CSS:</td><td>css/nav.css</td></tr>
  <tr><td>Javascript:</td><td>js/nav.js</td></tr>
</table>

How to use it:
--------------

Unzip the files to your htdocs folder on your web server. 

Inside your html document, in the head section, include the css file (before the javascript):
```
<link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />
```
Next, inside your html document's head section, include the jquery javascript source file:
```
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
```
Also include the fader javascript source file: 
```
<script type="text/javascript" src="js/nav.js"></script> 
```
Edit the CSS of nav.css to make the menu look how you want it to look. 

Note that:
----------

- This menu is so simple it can only have two levels!

Finally, in your html, include this code:
-----------------------------------------
```
  <nav>
    <ul id="navigation">
	  <div class="before"></div>
	  <li class="navsingle"> <a href="#"> (=^.^=) </a> </li>
	  <li class="firstlevel"> <a href="#"> I have more... </a> </li>
	  <li class="navsingle"> <a href="#"> >< ,(o> </a> </li>
	  <li class="firstlevel"> <a href="#"> I'm hiding stuff </a> </li>
	  <li class="navsingle"> <a href="#"> >(o.o)<</a></li><div class="after"></div>
	</ul>
  </nav>  
  <div id="secondlevelcontainer">
    <div class="secondlevel">
	  <a href="#">This is some - </a>
	  <a href="#">And the rest!</a>
    </div>
    <div class="secondlevel">
	  <a href="#">Stop hiding me!!!</a>
	  <a href="#">Here I am!</a>
	  <a href="#">I'm quite large, aren't I?</a>
    </div>
  </div>
```
Live demo:
----------
http://www.digitalrep.info/samples/view/nav

Supported Browsers:
-------------------

Works in Internet Explorer 9 & 10, Chrome 27.0.1453.110 m, Firefox 21.0, and Safari 5.1.7. 
To support older versions of Internet Explorer, consider using html5shiv.js.