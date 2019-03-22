function updateUrl(tabId, changeInfo, tabInfo) {
	if(typeof changeInfo !== 'undefined' && typeof changeInfo.url !== 'undefined') {
        browser.tabs.sendMessage(tabId, {action:"updateUrl"});
    }
}

function updateTab(tab, changeInfo, tabInfo) {
    updateUrl(tab.tabId, changeInfo, tabInfo)
}

browser.tabs.onUpdated.addListener(updateUrl);
browser.tabs.onActivated.addListener(updateTab);
