Animations
==========

Easily add a set of predefined CSS3 animations to elements to execute as they enter the viewport or to trigger via JavaScript or mouse hover.

**Demo:** http://www.cloud-eight.com/github/animations/


Usage
=======

<ul>
  <li>Add the class `no-js` to your `html` tag</li>
  <li>Link both animations.css and animations.js to your document</li>
</ul>


Animations
==========

The bulk of the plugin will auto detect elements in view on page load, any other element assigned with the `animate` class and a `data-anim-type` attribute
will be executed as it enters the viewport.

<ul>
  <li>Add the class `animate` to the desired element</li>
  <li>Add the attribute `data-anim-type` with an animation type</li>
  <li>(Optional) Add the attribute `data-anim-delay` if you wish to put a delay (in ms) on the animation</li>
</ul>

```
<span class="animate" data-anim-type="bounceIn" data-anim-delay="200">Bouncy Bouncy</span>
```


Triggers and Hovers
===================

There are 2 types of predefined trigger functions, 1 that executes the animation once and another which loops continuously.
You can pass 2 variables into these functions and that is the ID/Class of the target element and what type of animation you want to execute.
Multiple elements can be targeted by seperating them with a comma.

```
<button onclick="triggerOnce('#logo', 'wave');">Wave Once</button>
<button onclick="triggerInfinite('#logo, #tagline', 'wave');">Wave Continuously</button>
```

You can also use `onHover*` class to assign the animation to the `:hover` psuedo selector, adding the class `infinite` will continuously loop the animation while hovering.

```
<button class="onHoverSpin">Spin Once</button>
<button class="onHoverSpin infinite">Spin Continuously</button>
```


Limitations
===========

Since this uses Digital Fusions' visible plugin, the same limitations apply to this also, in that it will not check for visibility in nested scrollable areas, only on the main viewport (window object).
Animations executing on elements entering the viewport will not work if JavaScript is disabled, it will just display the element normally.
Animations are currently limited to desktops with a screensize of 960px and higher, however Triggers and Hovers will work on the majority of touch devices.


Author
======

Joe Mottershaw, Cloud Eight<br />
http://www.cloud-eight.com


Credits
======

Visible.js, TeamDF, Digital Fusion<br />
http://www.teamdf.com