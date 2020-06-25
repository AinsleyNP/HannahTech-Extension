
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


//DATABASE STUFF (HOPEFULLY)
function openPage(checktext) {
    //TO BE CHANGED TO CHECKING THROUGH DATABASE AND GETTING WEBSITE BASED ON TERMS
    window.open("https://en.wikipedia.org/wiki/" + checktext)
}
function openHannahPage(checktext) {
    window.open("http://localhost/HannahConcept.html?q="+checktext)
}

function loadDB() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "getcustomer.php?q=" + str, true);
    xhttp.send();
}