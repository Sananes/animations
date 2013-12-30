Animations
==========

Easily add a set of predefined animation effects for elements to fire as they enter the viewport.

I've already come across a few strange results and problems which I'm going to have to fix, mainly so most use
cases are covered. Most of the problems are because of other CSS values that the element had already or the type of
element it was (`inline` or `block`) and it's caused conflicts which has shown some very interesting results to say
the least.

I've used it in a couple sites and just tested as I go and kept it pretty basic like in this demo:

**Demo:** http://www.cloud-eight.com/github/animations/

Since it uses JavaScript to initiate the animation effect, if JavaScript is disabled it won't work. However, I did
use the `no-js/js` approach of modernizr.js and to target the CSS properties accordingly but I found it ran smoother
using a `noscript` approach and just reverting the CSS values defined by the animation.css file.

It's not pretty, but it got the job done and will do suffice until a better solution is found.

Also note that this doesn't work in Tablets/Mobiles very well yet so it's been disabled in those sized devices


How-To
======

<ul>
<li>Add the class `no-js` to your `html` tag</li>
<li>Link both animation.css and animation.js to your document</li>
<li>Copy the `noscript` from the `index.html` file after you've loaded your CSS files</li>
<li>Add the class `animate` to the desired element</li>
<li>Then add another class to that element with one of the effects: `slide-up` or `zoom-in` etc</li>
<li>If you wish to put a delay the animation add the attribute `data-anim-delay`</li>
<li>Give it a value in milliseconds to add a delay to the animation</li>
</ul>


Author
======

Joe Mottershaw, Cloud Eight<br />
http://www.cloud-eight.com


Credits
======

Visible.js, TeamDF, Digital Fusion<br />
http://www.teamdf.com
