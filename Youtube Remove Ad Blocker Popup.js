// ==UserScript==
// @name         Remove YouTube Ad Blocker Popup
// @namespace    http://tampermonkey.net/
// @version      2024-08-31
// @description  Removes the YouTube ad blocker popup and resumes video after 5 seconds
// @author       Loscope
// @match        https://www.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let intervalId = setInterval(function() {
        const elementsToRemove = document.querySelectorAll('tp-yt-paper-dialog');
        if (elementsToRemove.length > 0) {
            elementsToRemove.forEach(element => element.remove());
            console.log('Elements removed successfully!');
        } else {
            console.log('No elements found!');
        }
    }, 1000);
    setTimeout(function() {
        clearInterval(intervalId);
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.play();
            console.log('Video resumed successfully!');
        } else {
            console.log('Video element not found!');
        }
    }, 5000);
})();