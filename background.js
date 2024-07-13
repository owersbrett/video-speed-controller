chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed.")
    chrome.contextMenus.create({
        id: "incrementPlaybackRate",
        title: "Faster Video",
        contexts: ["all"]
    });

    
    chrome.contextMenus.create({
        id: "3x",
        title: "3x",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "2.5x",
        title: "2.5x",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "2x",
        title: "2x",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "1.5x",
        title: "1.5x",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "1x",
        title: "1x",
        contexts: ["all"]
    });
    chrome.contextMenus.create({
        id: "0.5x",
        title: "0.5x",
        contexts: ["all"]
    });

    chrome.contextMenus.create({
        id: "decrementPlaybackRate",
        title: "Slower Video",
        contexts: ["all"]
    });
});


chrome.contextMenus.onClicked.addListener((info, tab) => {

    
    if (info.menuItemId === "3x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: threeTimesSpeed
        });
    }
    if (info.menuItemId === "2.5x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: twoPointFiveTimesSpeed
        });
    }
    if (info.menuItemId === "2x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: twoTimesSpeed
        });
    }
    if (info.menuItemId === "1.5x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: onePointFiveTimesSpeed
        });
    }
    if (info.menuItemId === "1x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: oneTimesSpeed
        });
    }
    if (info.menuItemId === "0.5x") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: oneTimesSpeed
        });
    }
    if (info.menuItemId === "incrementPlaybackRate") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: incrementPlaybackRate
        });
    }
    if (info.menuItemId === "decrementPlaybackRate") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: decrementPlaybackRate
        });
    }
});

function threeTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = 3;
    });
}
function twoPointFiveTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = 2.5;
    });
}
function twoTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = 2;
    });
}
function onePointFiveTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = 1.5;
    });
}
function oneTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = 1;
    });
}
function oneTimesSpeed() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = .5;
    });
}
function incrementPlaybackRate() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = e.playbackRate + .5;
    });
}
function decrementPlaybackRate() {
    document.querySelectorAll('video').forEach((e) => {
        e.playbackRate = e.playbackRate - .5;;
    });
}
