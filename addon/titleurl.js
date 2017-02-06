
browser.tabs.onUpdated.addListener(updateUrl);
browser.tabs.onActivated.addListener(updateUrl);

function updateUrl(tabId, changeInfo, tabInfo) {
    browser.tabs.sendMessage(tabId, {action:"updateTitle"});
}

