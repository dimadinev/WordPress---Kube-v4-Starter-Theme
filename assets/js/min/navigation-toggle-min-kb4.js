!function($){function t(i,e){return new t.prototype.init(i,e)}$.fn.navigationToggle=function(i){return this.each(function(){$.data(this,"navigationToggle",{}),$.data(this,"navigationToggle",t(this,i))})},$.NavigationToggle=t,$.NavigationToggle.NAME="navigation-toggle",$.NavigationToggle.VERSION="1.0",$.NavigationToggle.opts={target:!1},t.fn=$.NavigationToggle.prototype={init:function(t,i){this.$element=t!==!1?$(t):!1,this.loadOptions(i),this.$target=$(this.opts.target),this.$toggle=this.$element.find("span"),this.$toggle.on("click",$.proxy(this.onClick,this)),this.build(),$(window).resize($.proxy(this.build,this))},loadOptions:function(t){this.opts=$.extend({},$.extend(!0,{},$.NavigationToggle.opts),this.$element.data(),t)},setCallback:function(t,i,e){var o=$._data(this.$element[0],"events");if(o&&"undefined"!=typeof o[t]){for(var a=[],n=o[t].length,s=0;n>s;s++){var g=o[t][s].namespace;if(g=="tools."+$.NavigationToggle.NAME||g==$.NavigationToggle.NAME+".tools"){var l=o[t][s].handler;a.push("undefined"==typeof e?l.call(this,i):l.call(this,i,e))}}return 1==a.length?a[0]:a}return"undefined"==typeof e?i:e},build:function(){var t=window.matchMedia("(max-width: 767px)");t.matches?this.$target.hasClass("navigation-target-show")||(this.$element.addClass("navigation-toggle-show").show(),this.$target.addClass("navigation-target-show").hide()):(this.$element.removeClass("navigation-toggle-show").hide(),this.$target.removeClass("navigation-target-show").show())},onClick:function(t){t.stopPropagation(),t.preventDefault(),this.isTargetHide()?(this.$element.addClass("navigation-toggle-show"),this.$target.show(),this.setCallback("show",this.$target)):(this.$element.removeClass("navigation-toggle-show"),this.$target.hide(),this.setCallback("hide",this.$target))},isTargetHide:function(){return"none"==this.$target[0].style.display?!0:!1}},$(window).on("load.tools.navigation-toggle",function(){$('[data-tools="navigation-toggle"]').navigationToggle()}),t.prototype.init.prototype=t.prototype}(jQuery);
//# sourceMappingURL=./navigation-toggle-min-kb4.js.map