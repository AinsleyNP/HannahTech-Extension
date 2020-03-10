console.log('AAAAAAAAAAAAAAAAAAA');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "WHATS THE WORD?") {
        var selword = getSelectionText();
        console.log(selword);
        //compare selword with database to find  match
    }
}


function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}