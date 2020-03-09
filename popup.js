// JavaScript source code
let changeColor = document.getElementById('changeColor');
let redirect = document.getElementById('redirect');

let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

redirect.onclick = function () {
    window.open('https://mel.np.edu.sg/bbcswebdav/institution/login/MeL-login.html', 'test', params)
};

changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};
chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});