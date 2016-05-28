$(document).ready(function(){
  var tl = new TimelineMax();
  tl.to("#frame", 1, {})
    .to('#ice1-wrapper', .5, {left: "300px"})
    .to('#ice1', .5, {left: "-300px"}, "-=.5")
    .to('#razor1', 1.5, {transformOrigin: "410px 100px", rotation: -180, ease: Power1.easeOut}, "-=.8")
    .to("#frame", .65, {})
    .to('#ice2-wrapper', .5, {left: "-300px", ease: Power2.easeIn})
    .to('#ice2', .5, {left: "300px", ease: Power2.easeIn}, "-=.5")
    .to("#frame", .65, {})
    .to('#ice-top-wrapper', .5, {left: "300px"})
    .to('#ice-top', .5, {left: "-300px"}, "-=.5")
    .to("#frame", .5, {})
    .to('#ice3-wrapper', .5, {left: "-300px"})
    .to('#ice3', .5, {left: "300px"}, "-=.5")
    .to("#frame", .35, {});
});
