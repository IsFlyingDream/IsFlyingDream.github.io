
document.write('<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" type="text/javascript" charset="utf-8"></script>'); //注意,此處須為相對於index.html的絕對路徑


//為傳統js用法↓↓----------------------------------------------------------------------------------------------------
//讓上方菜單frameid大小自動改變↓↓
/*function doneLoading() {
	var frame = document.getElementsByTagName('iframe')[0].contentWindow.document.body.innerHTML = "NOFIDDLE";

	var iframe = document.getElementById("ifrm");

	// Adjusting the iframe height onload event
	iframe.onload = function () {
		iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';

	}

}
//讓上方菜單frameid大小自動改變↑↑

//上方菜單顯示與隱藏的按鈕↓↓

function listBtn() {
	var listBtn = document.getElementById('listBtn');
	var textlistn = document.getElementById('HidAndShow');
	if (textlistn.style.display === "block") {
		HidAndShow.style.display = "none";
	} else {
		HidAndShow.style.display = "block";
	}
}
function IndexlistBtn() {
	var listBtn = document.getElementById('listBtn');
	var textlistn = document.getElementById('HidAndShow');
	if (textlistn.style.display === "block") {
		HidAndShow.style.display = "none";
		var mouseFunction = document.getElementById('mouseFunction');
		mouseFunction.style['background-color'] = "";
	} else {
		HidAndShow.style.display = "block";
		var mouseFunction = document.getElementById('mouseFunction');
		mouseFunction.style['background-color'] = "rgba(0, 0, 0, .6)";
		mouseFunction.style['transition'] = "background-color 0.4s";
	}
}

window.onresize = function () {  //每次視窗改變都會載入下列事件
	var listBtn = document.getElementById('listBtn');
	var textlistn = document.getElementById('HidAndShow');
	if (document.body.scrollWidth >= 870) {
		listBtn.style.display = "none";
		HidAndShow.style.display = "block";
	} else {
		listBtn.style.display = "block";
		HidAndShow.style.display = "none";
	}
};

//上方菜單顯示與隱藏的按鈕↑↑


//滑鼠移入上方菜單↓↓
function mouseOver() {
	var mouseFunction = document.getElementById('mouseFunction');
	mouseFunction.style['background-color'] = "rgba(0, 0, 0, .6)";
	mouseFunction.style['transition'] = "background-color 0.4s";
}
function mouseOut() {
	var mouseFunction = document.getElementById('mouseFunction');
	mouseFunction.style['background-color'] = "";
}

//滑鼠移入上方菜單↑↑
//為傳統js用法↑↑----------------------------------------------------------------------------------------------------------------*/

// 以下改成Vue用法----------------------------------------------------------------------------------------------------------------




const vm = new Vue({
	el: '#VueApp',		
	data:{
		portfolios:[
			{num:1,src:'img/Portfolio1.png'},			
			{num:2,src:'img/Portfolio2.png'},
			{num:3,src:'img/Portfolio3.png'},
			{num:4,src:'img/Portfolio4.png'},
			{num:5,src:'img/Portfolio5.png'},
		],
	},
	methods: {
		listBtn() {//上方菜單顯示與隱藏的按鈕↓↓
			var listBtn = document.getElementById('listBtn');
			var textlistn = document.getElementById('HidAndShow');
			if (textlistn.style.display === "block") {
				HidAndShow.style.display = "none";
			} else {
				HidAndShow.style.display = "block";
			}
		},
		IndexlistBtn() {
			var textlistn = document.getElementById('HidAndShow');
			if (textlistn.style.display === "block") {
				HidAndShow.style.display = "none";
				var mouseFunction = document.getElementById('mouseFunction');
				mouseFunction.style['background-color'] = "";
			} else {
				HidAndShow.style.display = "block";
				var mouseFunction = document.getElementById('mouseFunction');
				mouseFunction.style['background-color'] = "rgba(0, 0, 0, .6)";
				mouseFunction.style['transition'] = "background-color 0.4s";
			}
		},//上方菜單顯示與隱藏的按鈕↑↑

		mouseOver() {//滑鼠移入上方菜單↓↓
			var mouseFunction = document.getElementById('mouseFunction');
			mouseFunction.style['background-color'] = "rgba(0, 0, 0, .6)";
			mouseFunction.style['transition'] = "background-color 0.4s";
		},
		mouseOut() {
			var mouseFunction = document.getElementById('mouseFunction');
			mouseFunction.style['background-color'] = "";
		},
		imgplay(num){//作品集頁面，點擊則會換成動圖			
			console.log("in");			
			console.log(this.portfolios[num].src);
			let tempStr = this.portfolios[num].src;
			let types = tempStr.substr(tempStr.length-3,3);
			let url = tempStr.substr(0,tempStr.length-3);
			if(types=="png"){
				url = url+"gif";
				this.portfolios[num].src = url;
			}else if(types=="gif"){
				url = url+"png";
				this.portfolios[num].src = url;
			}
		}
	},
});


//上方菜單顯示與隱藏的按鈕↓↓
window.onresize = function () {  //每次視窗改變都會載入下列事件
	var listBtn = document.getElementById('listBtn');
	var textlistn = document.getElementById('HidAndShow');
	if (document.body.scrollWidth >= 870) {
		listBtn.style.display = "none";
		HidAndShow.style.display = "block";
	} else {
		listBtn.style.display = "block";
		HidAndShow.style.display = "none";
	}
};

//上方菜單顯示與隱藏的按鈕↑↑-----------------------------

//實現輪播全頻↓↓-----------------------------
var $item = $('.carousel-item');
var $wHeight = $(window).height();
 
$item.height($wHeight);
$item.addClass('full-screen');
 
$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});
 
$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});
//實現輪播全頻↑↑-----------------------------

//改變輪播時間↓↓ 5000=5秒-----------------------------
$('.carousel').carousel({
	interval: 5000
  });
//改變輪播時間↑↑-----------------------------

