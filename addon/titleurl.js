/*
"background": {
      "scripts": ["titleurl.js"]
  }
*/

browser.tabs.onUpdated.addListener(updateUrl);
browser.tabs.onActivated.addListener(updateUrl);

function updateUrl(tabId, changeInfo, tabInfo) {
    console.log(tabId, changeInfo, tabInfo);
    title = getTitle(tabInfo);
    console.log("yep",title);
    if(title){
        browser.tabs.executeScript(tabId,{code:"document.title = '"+title+"';"});
    }
}

function getTitle(tabInfo){
    var url = tabInfo.url;
    
    url = url.replace(/(https?:\/\/[^\/]*)[^:]*/i,"$1");
    
    if(tabInfo.title && tabInfo.title.indexOf(url) < 0){
        return tabInfo.title + " | " + url;
    } else if(tabInfo.title) {
        return tabInfo.title;
    }
}
