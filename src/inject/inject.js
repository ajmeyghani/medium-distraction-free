chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

    document.getElementsByClassName('js-postShareWidget')[0].remove();


	}
	}, 10);
});
