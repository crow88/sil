define([],function(){var a={mAnimShake:function(a,b,c){var d=$(".prt-scene-stage");d.addClass(a).css({"animation-duration":b,"-webkit-animation-duration":b,"animation-iteration-count":c,"-webkit-animation-iteration-count":c}).on("animationend webkitAnimationEnd",function(){$(this).removeClass(a).css("-webkit-animation","")})}};return a});