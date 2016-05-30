$(document).ready(function(){
  var tl = new TimelineMax();
  tl.to("#frame", 1, {})
    .to('#ice-first-shave-wrapper', .5, {left: "300px"})
    .to('#ice-first-shave', .5, {left: "-300px"}, "-=.5")
    .to('#razor-first-shave', 1.5, {transformOrigin: "410px 100px", rotation: -180, ease: Power1.easeOut}, "-=.8")
    .to("#frame", .65, {})
    .to('#ice-second-shave-wrapper', .5, {left: "-300px", ease: Power2.easeIn})
    .to('#ice-second-shave', .5, {left: "300px", ease: Power2.easeIn}, "-=.5")
    .to('#razor-second-shave', 1.25, {transformOrigin: "-205px 40px", rotation: 160, ease: Power2.easeIn}, "-=1.15")
    .to("#frame", .65, {})
    .to('#ice-top-wrapper', .5, {left: "300px"})
    .to('#ice-top', .5, {left: "-300px"}, "-=.5")
    .to('#razor-top', 1, {transformOrigin: "475px 150px", rotation: -180, left: "+=85px", top: "-=25px"}, "-=.55")
    .to("#frame", .5, {})
    .to('#ice-bottom-wrapper', .5, {left: "-300px"})
    .to('#ice-bottom', .5, {left: "300px"}, "-=.5")
    .to('#razor-bottom', 1.25, {transformOrigin: "-165px 100px", left: "-=150px", rotation: 180, ease: Sine.easeOut}, "-=.45")
    .to("#frame", .35, {})
    .from('#razor-ending', .8, {left: "-100px", ease: Back.easeOut});
});
