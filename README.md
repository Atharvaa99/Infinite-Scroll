# Infinite Scroll - Unsplash API

A responsive infinite scroll image gallery that dynamically loads random photos from Unsplash as you scroll down the page.

## Features

- Infinite scrolling functionality that loads more images as you reach the bottom
- Fetches random high-quality photos from Unsplash API
- Responsive design that works on desktop and mobile devices
- Loading indicator while images are being fetched
- Click on any image to view it on Unsplash
- Smooth user experience with image load tracking

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Unsplash API
- Font Awesome Icons

## Project Structure
```
infinite-scroll/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
└── loader.svg          # Loading animation graphic
```

## How It Works

1. On page load, the app fetches 30 random photos from Unsplash
2. Images are dynamically created and appended to the DOM
3. A scroll event listener detects when the user is within 1000px of the bottom
4. When triggered, another batch of 30 photos is loaded automatically
5. The process repeats infinitely as you continue scrolling

## Setup Instructions

1. Clone or download this repository
2. Make sure all files (`index.html`, `style.css`, `script.js`, `loader.svg`) are in the same directory
3. Open `index.html` in your web browser
4. Start scrolling to see the infinite scroll in action!

## API Information

This project uses the Unsplash API to fetch random photos. The API key is included in the code for demonstration purposes.

**Note:** The Unsplash API has rate limits (50 requests per hour for demo applications). If you plan to use this in production, you should:
- Register for your own API key at [Unsplash Developers](https://unsplash.com/developers)
- Replace the existing API key in `script.js`

## Customization

You can customize the following parameters in `script.js`:

- `count`: Number of photos to load per batch (default: 30)
- Scroll trigger distance: Change `1000` in the scroll event listener to adjust when new images load
- Image display width: Modify `.image-container` margin in `style.css`

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript features
- Fetch API
- CSS Grid/Flexbox

## License

This project is open source and available for educational purposes.

## Credits

- Photos provided by [Unsplash](https://unsplash.com)
- Fonts: Bebas Neue & Forum from Google Fonts
- Icons: Font Awesome
