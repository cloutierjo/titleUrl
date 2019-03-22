browser.runtime.onMessage.addListener(updateUrl)
updateUrl()

function updateUrl() {
	getTitle();
}

function getTitle() {
	var url = document.URL;

	if (document.title.indexOf(url) < 0) {
		browser.storage.local.get().then(function(data) {
			Object.keys(data).forEach(function(key){
				settings[key] = data[key];
			});
			return settings;
		}).then(function(settings){
			var group = "$1";
			if (settings.hideProtocol) {
				group = "$2"
			}
			turl = url.replace(/(https?:\/\/([^\/]*\/)).*/i, group);
			
			if (settings.fullURL) {
				turl = url;
			}
			
			if (document.title.indexOf(turl) < 0) {
				document.title = document.title + " " + settings.separator + " " + turl;
			}		
		});
	}
}
