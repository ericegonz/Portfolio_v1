document.addEventListener("DOMContentLoaded",function(){new SweetScroll({});particlesJS("particles-js",{particles:{number:{value:75,density:{enable:!0,value_area:800}},color:{value:"#25528C"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.9,random:!1,anim:{enable:!1,speed:0,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:5,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#416798",opacity:.8,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:400,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:300,duration:.2},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1),function(e){e("html").removeClass("no-js"),e("header a").click(function(t){if(!e(this).hasClass("no-scroll")){t.preventDefault();var i=e(this).attr("href"),n=e(i).offset().top;e("html, body").animate({scrollTop:n+"px"},Math.abs(window.pageYOffset-e(i).offset().top)/1),e("header").hasClass("active")&&e("header, body").removeClass("active")}}),e("#to-top").click(function(){e("html, body").animate({scrollTop:0},500)}),e("#lead-down span").click(function(){var t=e("#lead").next().offset().top;e("html, body").animate({scrollTop:t+"px"},500)}),e("#experience-timeline").each(function(){$this=e(this),$userContent=$this.children("div"),$userContent.each(function(){e(this).addClass("vtimeline-content").wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>')});var t=$userContent.length;console.log(t),$this.find(".vtimeline-point").each(function(i,n){i===t-1?e(this).prepend('<div class="vtimeline-icon"><i class="fa fa-graduation-cap"></i></div>'):e(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>')}),$this.find(".vtimeline-content").each(function(){var t=e(this).data("date");t&&e(this).parent().prepend('<span class="vtimeline-date">'+t+"</span>")})}),e("#mobile-menu-open").click(function(){e("header, body").addClass("active")}),e("#mobile-menu-close").click(function(){e("header, body").removeClass("active")}),e("#view-more-projects").click(function(t){t.preventDefault(),e(this).fadeOut(300,function(){e("#more-projects").fadeIn(300)})})}(jQuery);