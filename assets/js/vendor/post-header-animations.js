(function(){if($(".post-template:not(.page)").length){var e=function(){var e,t=-1;var n=window.navigator.userAgent;var r=n.indexOf("MSIE ");var i=n.indexOf("Trident/");if(r>0){t=parseInt(n.substring(r+5,n.indexOf(".",r)),10)}else if(i>0){var s=n.indexOf("rv:");t=parseInt(n.substring(s+3,n.indexOf(".",s)),10)}return t>-1?t:e}();var t=[32,37,38,39,40],n=0;function r(e){e=e||window.event;if(e.preventDefault)e.preventDefault();e.returnValue=false}function i(e){for(var n=t.length;n--;){if(e.keyCode===t[n]){r(e);return}}}function s(e){r(e)}function o(e){}function u(){window.onmousewheel=document.onmousewheel=o;document.onkeydown=i;document.body.ontouchmove=s}function a(){window.onmousewheel=document.onmousewheel=document.onkeydown=document.body.ontouchmove=null}var f=window.document.documentElement,l,c,h,p,d=document.getElementById("summer-post-container")||document,v=d.querySelector("button.trigger");function m(){return window.pageYOffset||f.scrollTop}function g(){l=m();if(h&&!e){if(l<0)return false;window.scrollTo(0,0)}if($(d).hasClass("notrans")){$(d).removeClass("notrans");return false}if(p){return false}if(l<=0&&c){y(0)}else if(l>0&&!c){y(1)}}function y(e){p=true;if(e){$(d).addClass("modify")}else{h=true;u();$(d).removeClass("modify")}setTimeout(function(){c=!c;p=false;if(e){h=false;a()}BackgroundCheck.refresh()},600)}var b=m();h=b===0;u();if(b){c=true;$(d).addClass("notrans");$(d).addClass("modify")}window.addEventListener("scroll",g);v.addEventListener("click",function(){y("reveal")})}})()