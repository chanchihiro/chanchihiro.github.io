$(function(){


	var duration = 2000;

	//最初の表示
	$(window).load(function() {
		$(".title").delay(500).fadeIn("500");
 	});

	//タイトルページ
	$("#enter").on("click",function(){

		//ロゴ1が右にに分かれる
		$("#logo1").animate({
			"width":"40%",
			"right":"50%"
		},duration,function(){

			//分かれた後の動き
			$("#logo1").animate({
				"opacity":"0"
			},duration);
			$("#profile").animate({
				"opacity":"1"
			},duration);
			$("#work").animate({
				"opacity":"1"
			},duration);
			$(".title").animate({
				"z-index":"-10",
				"opacity":"0"
			},duration);

			}
		);

		//ロゴ2が左に動く
		$("#logo2").animate({
			"width":"40%",
			"right":"-50%"
		},duration,function(){

			//分かれた後の動き
			$("#logo2").animate({
				"opacity":"0"
			},duration);
			});


		//ボタンとロゴが消える
		$(this).hide(2000);
		$("#logo3").hide();

	});


	//マウスの位置で変化

	var $window = $(window);
	var $left = $(".left");
	var $right = $(".right");
	var leftOffsetLeft = $left.offset().left;
	var rightOffsetLeft = $right.offset().left;

	$window.on("mouseover",function(e){
		if(e.pageX > leftOffsetLeft){
			$(".left").addClass("logo4").animate({
				"width":"70%",
			});
			$(".right").animate({
				"width":"30%"
			});
		}else{
			$(".left").removeClass("logo4").animate({
				"width":"30%"
			});
			$(".right").animate({
				"width":"70%",
				"background-color":"rgba(255,255,255,0.8)"
			});
		}
	});

	$(".title").on("mouseover",function(){
			$(".left").css({
				"width":"50%"
			});
			$(".right").css({
				"width":"50%"
			});
	});






	//プロフィール表示
	var $profile = $("#profile");
	$profile.on("click",function(){
			$(".profile").animate({
				"left":"0"
			});
			$(".left").animate({
				"right":"-100%"
			});
			$(".right").animate({
				"left":"100%"
			});
	});

	//プロフィールからトップへ
	$("#totop").on("click",function(){
			$(".profile").animate({
				"left":"-100%"
			});
			$(".left").animate({
				"right":"0%"
			});
			$(".right").animate({
				"left":"0%"
			});
	});


	//ワークを表示
	var $work = $("#work");
	$work.on("click",function(){
			$(".work").animate({
				"right":"0"
			});
			$(".left").animate({
				"right":"100%"
			});
			$(".right").animate({
				"left":"-100%"
			});
	});

	//ワークからトップへ
	$("#fortop").on("click",function(){
			$(".work").animate({
				"right":"-100%"
			});
			$(".left").animate({
				"right":"0%"
			});
			$(".right").animate({
				"left":"0%"
			});
	});


	// ページの場所の取得
	var width = $(window).width();
	$(".all").on("mousemove",function(e){
		if(e.pageX < width/2){
			$(".right").css({
				"backgroundColor":"#"
			},duration);
		}else{
			$(".right").css({
				"backgroundColor":"#fff"
			},duration);
		}
	});

});