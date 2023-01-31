(() => {
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = "";

    chrome.runTime.onMessage.addListener((obj, sender, senresponsedResponse) => {
        const {type, videoId, value} = obj;

        if(type === "NEW") {
            currentVideo = videoId;
            newVideoLoaded();
        }
    });
})