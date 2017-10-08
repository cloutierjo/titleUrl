// window.addEventListener('load', updateUrl, false);
browser.runtime.onMessage.addListener(updateUrl)
updateUrl()

function updateUrl() {
	var url = document.URL;

	url = url.replace(/(https?:\/\/[^\/]*\/)[^:]*/i, "$1");

	if (document.title.indexOf(url) < 0) {
		var separatorPromise = browser.storage.local.get("separator");
		separatorPromise.then(updateTitle);
	}

	function updateTitle(result) {
		let separator = "|";
		if (result.separator) {
			separator = result.separator;
		}
		document.title = document.title + " " + separator + " " + url;
	}
}
