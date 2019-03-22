function restoreOptions() {
	browser.storage.local.get().then(function(data) {
		Object.keys(data).forEach(function(key){
			settings[key] = data[key];
		});
		return settings;
	}).then(function(settings) {
		Object.keys(settings).forEach(function(key){
			var input = document.getElementById(key);
			if (input){
				if (input.type === "checkbox"){
					input.checked = settings[key];
				} else {
					input.value = settings[key];
				}
			}
		});
	});
}

function saveOptions(e) {
	e.preventDefault();

	var obj = {};
	
	Object.keys(settings).forEach(function(key){
		var input = document.getElementById(key);
		if (input){
			if (input.type === "checkbox"){
				obj[key] = input.checked;
			} else {
				obj[key] = input.value;
			}
		}
	});
	browser.storage.local.set(obj);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("form").addEventListener("submit", saveOptions);
