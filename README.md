Animations
==========

Easily add a set of predefined CSS3 animations to elements to execute as they enter the viewport or to trigger via JavaScript or mouse hover. If you do end up using it on your site, let me know so I can see how people are implementing and using it :)

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

| Animation        | Class Name     |
|:----------------:|:--------------:|
| Fade In          | fadeIn         |
| Fade In Up       | fadeInUp       |
| Fade In Down     | fadeInDown     |
| Fade In Left     | fadeInLeft     |
| Fade In Right    | fadeInRight    |
| Fade Out         | fadeOut        |
| Fade Out Up      | fadeOutUp      |
| Fade Out Down    | fadeOutDown    |
| Fade Out Left    | fadeOutLeft    |
| Fade Out Right   | fadeOutRight   |
| Zoom In          | zoomIn         |
| Zoom In Up       | zoomInUp       |
| Zoom In Down     | zoomInDown     |
| Zoom In Left     | zoomInLeft     |
| Zoom In Right    | zoomInright    |
| Zoom Out         | zoomOut        |
| Zoom Out Up      | zoomOutUp      |
| Zoom Out Down    | zoomOutDown    |
| Zoom Out Left    | zoomOutLeft    |
| Zoom Out Right   | zoomOutRight   |
| Bounce In        | bounceIn       |
| Bounce In Up     | bounceInUp     |
| Bounce In Down   | bounceInDown   |
| Bounce In Left   | bounceInLeft   |
| Bounce In Right  | bounceInRight  |
| Bounce Out       | bounceOut      |
| Bounce Out Up    | bounceOutUp    |
| Bounce Out Down  | bounceOutDown  |
| Bounce Out Left  | bounceOutLeft  |
| Bounce Out Right | bounceOutRight |
| Spin Left        | spinRight      |
| Spin Right       | spinLeft       |


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

| Animation  | Triggers | Hovers | Class Name |
|:----------:|:--------:|:------:|:----------:|
| Flash      | Yes      | Yes    | flash      |
| Strobe     | Yes      | Yes    | strobe     |
| Shake      | Yes      | Yes    | shake      |
| Bounce     | Yes      | Yes    | bounce     |
| Tada       | Yes      | Yes    | tada       |
| Wave       | Yes      | Yes    | wave       |
| Spin       | Yes      | Yes    | spin       |
| Pullback   | Yes      | Yes    | pullback   |
| Wobble     | Yes      | Yes    | wobble     |
| Pulse      | Yes      | Yes    | pulse      |
| Pulsate    | Yes      | Yes    | pulsate    |
| Heartbeat  | Yes      | Yes    | heartbeat  |
| Panic      | Yes      | Yes    | panic      |
| Explode    | Yes      | No     | explode    |
| Random     | Yes      | No     | random     |


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
