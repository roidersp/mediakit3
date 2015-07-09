
var w=$(window).width();
var h=$(window).height();
var r=0;

$("#indepth_juanes").css("height",h+"px");
$(".indepth_formato_modal").css("height",h+"px")
$(".indepth_formato_img_cont.h .indepth_formato_modal_img ").css("height",(h*.99)+"px");
$("#indepth_juanfluencer_back").css("height",(h/1.8)+"px");
$("#indepth_juanificate_back").css("height",(h/2)+"px");
$(".indepth_juanificate_content").css("padding",(h/6)+"px 0" );

$("#myMenu").hover(
	function(){
		
		$(".indepth_menu_bar_cont").animate({
			width: "116px"
		},500);
	},
	function(){
		$(".indepth_menu_bar_cont").animate({
			width: "0"
		},500);
		
		
	}
);


$(document).on("click",".indepth_formato_item",function(){
	r=$(this).attr("num");
	
	$(".indepth_formato_img_cont").css("display","none");
	$(".indepth_formato_modal").css("display","table");
	
	
	$(".indepth_formato_img_cont.w").css("height",(h-5)+"px");
	
	$("#indepth_fomato_"+r).css("display","table-cell");
});


$(document).on("click",".indepth_formato_modal",function(){
	$(".indepth_formato_modal").css("display","none");
});


$(document).on("click",".indepth_formato_img_cont",function(){
	$(".indepth_formato_modal").css("display","none");
});



$(document).ready(function() {
	
	
	
	
    $('#indepth_page1').fullpage({
	    menu: '#myMenu',
		anchors: ['quien-soy','quien-soy2','quien-soy3','mis-visitantes','indepth-numeros','indepth-juan-lab','indepth-formatos','indepth-influencers','indepth-showroom','juanificate'],
	    scrollOverflow: true,
	    normalScrollElements: '.indepth_formato_img_cont, .indepth_formato_modal',
	    scrollbar: true,
	    slideSelector: '.visitantes_slide',
	    slidesNavigation: true,
	    controlArrows: false,
	    scrollingSpeed: 1000,
	    afterLoad: function(anchorLink, index){
            var leavingSection = $(this);
			
			console.log(index);
			
            //after leaving section 2
            if(index <= 3 ){
	            console.log("down "+index);
                $("#indepth_quien").addClass("iactive");
                if(index==3){
	                $("#myMenu li:first").addClass("active");
                }
            }else{
	            $("#indepth_quien").removeClass("iactive");
            }
            
            
            

            
            

            
        }
    });
    
    
    $(".fp-slidesNav.bottom").css({
	    "margin-left": 0,
	    "left": 0,
	    "width":"100%"
    });
    
    $("#fp-nav ul, .fp-slidesNav ul").css({
	    "margin": "auto",
	    "display": "table"
    })
    
});


var zoom = function(jornada, x, y, num){
	var total_w;
	if(w>h){
		x=(x*w)/1920;
		y=(y*w)/1920;
	}else{
		x=(x*(w*2))/1920;
		y=(y*(w*2))/1920;
	}
	
	
	
	
	$("#indepth_gif_"+jornada).css({
		"bottom": x,
		"left": y
	});
}



//zoom("1", 228, 270, "1");



window.onload = function() {
	var size_ball=150;
	if(w<=736){
		 size_ball=120;
	}
	
	if(w<=600){
		size_ball=90;
	}
	
	if(w<=320){
		size_ball=80;
	}
	
	console.log(size_ball);
	<!--  selecciono la clase javascript -->
    var javascript = document.querySelector('.mexico');
    new EasyPieChart(javascript, {
			<!-- activo la animación y establezco su duración a un segundo -->
			animate: ({ duration: 1000, enabled: true }),
			<!-- aumento la longitud de las lineas de la gráfica -->
			scaleLength:0,
			<!-- aumento el tamaño de la gráfica -->
			size:size_ball,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 7,
			rotate:0,
			<!-- añado el número del porcentaje que se muestra en el span -->
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	var html5 = document.querySelector('.usa');
    new EasyPieChart(html5, {
			animate: ({ duration: 2000, enabled: true }),
			scaleLength:0,
			size:size_ball,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 6,
			rotate:0,
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	var css = document.querySelector('.mundo');
    new EasyPieChart(css, {
			animate: ({ duration: 3000, enabled: true }),
			scaleLength:0,
			size:size_ball,
			barColor:'#1e2328',
			trackColor: "#d4ced1",
			lineWidth: 5,
			rotate:0,
			onStep: function(from, to, percent) {
				//this.el.children[0].innerHTML = Math.round(percent);
			}
    });
	}


$(window).on("resize", function(){
	 w=$(window).width();
	 h=$(window).height();
	 $("#indepth_juanes").css("height",h+"px");
$(".indepth_formato_modal").css("height",h+"px")
$(".indepth_formato_img_cont.h .indepth_formato_modal_img ").css("height",(h*.99)+"px");
});


