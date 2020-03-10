console.log('WE ARE IN THE BACKGROUND');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
        txt: "WHATS THE WORD?"
    }
    chrome.tabs.sendMessage(tab.id,msg);
}
