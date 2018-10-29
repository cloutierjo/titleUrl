
function updateUrl(tabId, changeInfo, tabInfo) {
    if (changeInfo.url) {
        browser.tabs.sendMessage(tabId, {action:"updateUrl"});
    }
}

function updateTab(tab, changeInfo, tabInfo) {
    updateUrl(tab.tabId, changeInfo, tabInfo)
}


browser.tabs.onUpdated.addListener(updateUrl);
browser.tabs.onActivated.addListener(updateTab);
