$(document).ready((function(){$(window).outerWidth(),$(window).outerHeight();var t=window.navigator.userAgent,a=(t.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}});function e(t){var a=0,e=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var i=t.val().replace(" ","");t.val(i)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.val())&&t.val()!=t.attr("data-value")?r(t):(a++,s(t))}else""==t.val()||t.val()==t.attr("data-value")?(a++,s(t)):r(t);return"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(a++,t.addClass("err").parent().addClass("err"))),t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(a++,s(t))),t.hasClass("pass-2")&&(e.find(".pass-1").val()!=e.find(".pass-2").val()?s(t):r(t)),a}function s(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var a="";null!=(a=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+a+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>");t.parents(".select-block").length>0&&(t.parents(".select-block").parent().addClass("err"),t.parents(".select-block").find(".select").addClass("err"))}function r(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove(),t.parents(".select-block").length>0&&(t.parents(".select-block").parent().removeClass("err"),t.parents(".select-block").find(".select").removeClass("err").removeClass("active"))}((t=navigator.userAgent).indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1)&&$("body").addClass("ie"),a.any()&&$("body").addClass("touch"),$(".slider").length>0&&$(".slider").slick({dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,autoplaySpeed:3e3,adaptiveHeight:!0,nextArrow:'<button type="button" class="slick-next"></button>',prevArrow:'<button type="button" class="slick-prev"></button>',responsive:[{breakpoint:768,settings:{}}]}),$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),r($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||($(this).hasClass("l")&&0==$(this).parent().find(".form__label").length?$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>"):this.value=$(this).attr("data-value")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&($(this).hasClass("l")||(this.value=$(this).attr("data-value")),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text")),$(this).hasClass("vn")&&e($(this))}))})),$(".form-input__viewpass").click((function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$("form button[type=submit]").click((function(){var t=0,a=$(this).parents("form"),s=a.data("ms");return $.each(a.find(".req"),(function(a,s){t+=e($(this))})),0==t&&(function(t){t.find(".form__generalerror").hide().html("")}(a),null!=s&&""!=s?(function(t){$(".popup").hide(),popupOpen("message."+t,"")}(s),!1):void 0)})),$(".wrapper").addClass("loaded"),$(".header-menu__icon").click((function(t){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")})),$.each($(".ibg"),(function(t,a){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}));