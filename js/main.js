$.init();

$(".scroll-news a").length && $(function() {
	var $newsList = $(".scroll-news a");
	var len = $newsList.length;
	var timer;
	if(len > 1) {
		var cur = 0;
		timer = setInterval(function() {
			$newsList.eq(cur).hide();
			cur = ++cur % len;
			$newsList.eq(cur).show();
		}, 5000);
	}

});

function checkKeywowrd() {
	var keyword = $('#keyword').val();
	if(!keyword) {
		alert("请输入关键字!")
		return false;
	} else {
		return true;
	}
}