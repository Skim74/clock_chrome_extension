document.addEventListener('DOMContentLoaded', startup);
chrome.runtime.onStartup.addListener(startup);


function startup() {
    chrome.browserAction.setBadgeBackgroundColor({color:'#b00'});
    chrome.browserAction.setBadgeText({text:'hi'});
    renderTime();
}
chrome.alarms.create("tick", {delayInMinutes: 0.1, periodInMinutes: 0.4} );

chrome.alarms.onAlarm.addListener(function(alarm) {
  renderTime();
});

function renderTime(color) {
  chrome.browserAction.setBadgeText({text:currentTime()});
};

function currentTime() {
  const d = new Date();
  const hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  const minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
  const seconds = d.getSeconds();
  return hours + ':' + minutes;
};
