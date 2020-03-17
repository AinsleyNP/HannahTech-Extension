console.log('AAAAAAAAAAAAAAAAAAA');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "WHATS THE TEXT?") {
        var checktext = getSelectionText();
        if (checktext !== "") {
            console.log(checktext);
        }
    }
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
        console.log('DOCUMENT');
    }
    return text;
}
