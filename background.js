console.log('WE ARE IN THE BACKGROUND');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "WHATS THE TEXT?"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}

//CONTEXT MENU (RIGHT CLICKING)
var contextMenuItem = {
    "id": "SearchSelected",
    "title": "Find on Wikipedia",
    "contexts": ["selection"],
}
var contextMenuItem2 = {
    "id": "ReplaceText",
    "title":"Replace Text",
    "contexts": ["selection"],
}

chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.create(contextMenuItem2);

chrome.contextMenus.onClicked.addListener(function (clickData,tab) {
    if (clickData.menuItemId == "SearchSelected") {
        let msg = {
            txt: "OPEN THE WIKIPEDIA PAGE"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
    else if (clickData.menuItemId == "ReplaceText") {
        let msg = {
            txt: "DO SOMETHING WITH THE TEXT"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
});