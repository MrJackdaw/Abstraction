// Abstraction Builder v.1.0 Beta - Abstract Method � 2009-2011. "Abstraction" is a trademark of Abstract Method //
$(document).ready(function(){jQuery.mouse.init();jQuery.key.init()});jQuery.mouse={init:function(){window.onmousemove=this.calc_position},calc_position:function(a){if(!a){var a=window.event}if(a.pageX||a.pageY){jQuery.mouse.posx=a.pageX;jQuery.mouse.posy=a.pageY}else{if(a.clientX||a.clientY){jQuery.mouse.posx=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;jQuery.mouse.posy=a.clientY+document.body.scrollTop+document.documentElement.scrollTop}}},pos:function(a){switch(a){default:return[this.posx,this.posy];break;case"x":return this.posx;break;case"y":return this.posy;break}},x:function(){return this.posx},y:function(){return this.posy}};jQuery.key={init:function(){window.onkeydown=this.calc_keydown;window.onkeyup=this.calc_keyup},down_callbacks:{},up_callbacks:{},calc_keydown:function(c){if(window.event){var d=c.keyCode}else{if(c.which){var d=c.which}}var b=String.fromCharCode(d);var a=jQuery.key.down_callbacks[b];if(typeof a=="function"){a()}jQuery.key[b]=true},calc_keyup:function(c){if(window.event){var d=c.keyCode}else{if(c.which){var d=c.which}}var a=String.fromCharCode(d);var b=jQuery.key.up_callbacks[a];if(typeof b=="function"){b()}delete jQuery.key[a]},down:function(c,d){if(d){for(var b in c){this.down_callbacks[c[b].toUpperCase()]=d}return this}else{var a=true;for(var b in c){if(this[c[b].toUpperCase()]==undefined){a=false;break}}return a}},up:function(b,c){for(var a in b){this.up_callbacks[b[a].toUpperCase()]=c}return this}};