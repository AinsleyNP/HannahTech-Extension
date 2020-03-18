console.log('AAAAAAAAAAAAAAAAAAA');


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "WHATS THE TEXT?") {
        var checktext = getSelectionText();
        if (checktext !== "") {
            console.log(checktext);
            openPage(checktext);
        }
        clearSelection();
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

function clearSelection() {
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection) { document.selection.empty(); }
}

function openPage(checktext) {
    //TO BE CHANGED TO CHECKING THROUGH DATABASE AND GETTING WEBSITE BASED ON TERMS
    window.open("https://en.wikipedia.org/wiki/" + checktext)
}