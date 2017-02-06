// window.addEventListener('load', updateUrl, false);
browser.runtime.onMessage.addListener(updateUrl)
updateUrl()

function updateUrl() {
    var title = getTitle();
    if(title){
       document.title = title;
    }
}

function getTitle(){
    var url = document.URL;
    
    url = url.replace(/(https?:\/\/[^\/]*)[^:]*/i,"$1");
    
    if(document.title.indexOf(url) < 0){
        return document.title + " | " + url;
    } else {
        return document.title;
    }
}
