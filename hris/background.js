//Wait for click

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        "file": "popup.js"
    }, function(){ 
        "popup.js";
    });
  })