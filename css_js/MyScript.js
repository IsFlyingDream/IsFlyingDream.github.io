
//讓上方菜單frameid大小自動改變↓↓
function doneLoading() {
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
  if (textlistn.style.display ==="block") {
    HidAndShow.style.display = "none";
  } else {
    HidAndShow.style.display = "block";
  }
}

window.onresize=function(){  //每次視窗改變都會載入下列事件
	var listBtn = document.getElementById('listBtn');
	  var textlistn = document.getElementById('HidAndShow');
	if(document.body.scrollWidth >=  760){
		listBtn.style.display = "none";
		 HidAndShow.style.display = "block";
	}else{
		listBtn.style.display = "block";
		HidAndShow.style.display = "none";
	}
    
};

//上方菜單顯示與隱藏的按鈕↑↑
