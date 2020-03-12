console.log('AAAAAAAAAAAAAAAAAAA');
var docscheck = /docs.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(docscheck);


chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    if (message.txt === "WHATS THE WORD?") {
        console.log(getSelectionText());
        //compare selword with database to find  match
    }
}

function getSelectionText() {
    var text = "";
    var url = window.location.href;
    if (window.getSelection) {
        if (url.match(regex)) {
            console.log("GOOGLEDOCS")
            docs.getSelection();
        }
        else {
            text = window.getSelection().toString();
            console.log('WINDOW');
        }
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
        console.log('DOCUMENT');
    }
    return text;
}


//Get the current state of the Google Docs document. After a change to the google docs document call the getGoogleDocument() again to get the changes.
var googleDocument = googleDocsUtil.getGoogleDocument();

//All the text is in the array googleDocument.text
//NOTICE: if the Google Docs document contains multiple pages, not all the pages may be loaded
var loadedText = "";
for (var i = 0; i < googleDocument.text.length; i++) {
    console.log("Text at line " + i + ": " + googleDocument.text[i]);
}

//The selected text
console.log("The selected text is: " + googleDocument.selectedText);


//Get the word at the caret
var currentWord = googleDocsUtil.getWordAtCaret(googleDocument);
console.log("The caret is at index: " + googleDocument.caret.index);
console.log("The caret is on line: " + googleDocument.caret.line);
console.log("The caret is at the index on line: " + googleDocument.caret.lineIndex);
console.log("The caret is at the word: " + currentWord);

//Gets the text from index 10 to 20
var foundText = googleDocsUtil.getText(10, 20, googleDocument);

//Higlights the index 10 to 20
googleDocsUtil.highlight(10, 20, googleDocument);

//Removes the highlight
//googleDocsUtil.removeHighlightNodes();
