
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    var checktext = getSelectionText();
    if (checktext !== "") {
        if (message.txt === "WHATS THE TEXT?") {
            console.log(checktext);
            alert(checktext);
            clearSelection();
        }
        else if (message.txt === "OPEN THE WIKIPEDIA PAGE") {
            clearSelection();
            openPage(checktext);
        }
        else if (message.txt === "OPEN ON HANNAH") {
            clearSelection();
            openHannahPage(checktext);
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

function clearSelection() {
    if (window.getSelection) { window.getSelection().removeAllRanges(); }
    else if (document.selection) { document.selection.empty(); }
}


// Open Page based on text selected
function openPage(checktext) {
    window.open("https://en.wikipedia.org/wiki/" + checktext)
}
function openHannahPage(checktext) {
    window.open("http://localhost/HannahConcept.html?q="+checktext)
}
