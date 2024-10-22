# Video Speed Chrome Extension

This Chrome extension allows you to easily change the playback speed of HTML5 videos on any webpage. You can enter a custom speed value to increase or decrease the video playback rate.

## Features
- Adjust video playback speed by entering a custom value.
- Works on any webpage with HTML5 video elements (e.g., YouTube, video players).
- Simple and user-friendly popup interface.

## Requirements
- Google Chrome

## Installation
Clone or download this repository to your local machine:

```bash
git clone https://github.com/your-username/video-speed-controller.git
```

1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable Developer mode by toggling the switch in the top right corner.
3. Click the **Load unpacked** button and select the folder where you cloned or extracted this repository.
4. The extension should now appear in your list of installed extensions.

## Usage

1. Go to any webpage that has an HTML5 video (e.g., YouTube).
2. Click on the extension icon in the Chrome toolbar.
3. A popup will appear where you can enter your desired playback speed (e.g., `1.5` for 1.5x speed, `0.5` for half speed).
4. Click the **Set Speed** button, and the video speed will be adjusted accordingly.

## Project Structure
```bash
video-speed/
│
├── manifest.json   # Chrome extension configuration
├── popup.html      # The HTML structure of the popup window
├── popup.js        # JavaScript that handles user input and modifies video speed
├── icon.png        # Extension icon (optional)
└── README.md       # This file
```
## Files Overview
- **manifest.json**: Describes the extension's metadata, permissions, and popup action.
- **popup.html**: Defines the UI for the extension's popup window.
- **popup.js**: Contains the logic for fetching user input, querying the active tab, and setting the video playback speed.
- **icon.png**: The icon that appears in the Chrome toolbar for the extension.

## Known Issues
- Only works on webpages with HTML5 video elements.
- The extension will not work on embedded videos using non-standard players or custom video containers.

## Contributing
Feel free to open issues or submit pull requests if you have any suggestions or improvements. Contributions are always welcome!

## License
This project is licensed under the MIT License - see the LICENSE file for details.
