
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
