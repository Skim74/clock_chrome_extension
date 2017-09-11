let mycolor;

window.addEventListener('load', bgColor, false);

function bgColor() {
  colorWell.oninput = function(ev) {
    color = '#' + document.getElementById('colorWell').value;
    chrome.browserAction.setBadgeBackgroundColor({color});
  }
}
