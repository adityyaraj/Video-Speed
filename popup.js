document.getElementById('setSpeedButton').addEventListener('click', () => {
    const speed = parseFloat(document.getElementById('speedInput').value);
  
    if (isNaN(speed) || speed <= 0) {
      alert("Please enter a valid speed (greater than 0).");
      return;
    }
  
    // Query the active tab and execute the script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: setVideoSpeed,
        args: [speed]
      }, (results) => {
        if (chrome.runtime.lastError) {
          alert("Error: " + chrome.runtime.lastError.message);
        } else {
          console.log("Video speed set successfully.");
        }
      });
    });
  });
  
  // This function will be injected into the webpage to modify the video speed
  function setVideoSpeed(speed) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = speed;
      alert(`Video speed set to ${speed}`);
    } else {
      alert("No video element found on this page.");
    }
  }
  