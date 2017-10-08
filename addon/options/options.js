function restoreOptions() {
	var separatorPromise = browser.storage.local.get("separator");
	separatorPromise.then(setSeparator, onError);

	function setSeparator(result) {
		if (result.separator) {
			document.getElementById("separatorField").value = result.separator;
		} else { // on first install, set separator to "|" and save to storage
			document.getElementById("separatorField").value = "|";
			document.getElementById("saveButton").click();
		}
	}

	function onError(error) { //reset to default
		document.getElementById("separatorField").value = "|";
	}
}

function saveOptions(e) {
	e.preventDefault();
	browser.storage.local.set({
		separator: document.getElementById("separatorField").value
	});
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("form").addEventListener("submit", saveOptions);
