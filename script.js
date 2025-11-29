const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray =[];
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

//Unsplash Api
const count = 30;
const apiKey = 'ejchfqBB3x0O6qJXWlV6XSVXMeK7M852IXbxMBPmLcE';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded(){
  imagesLoaded++;
  if(imagesLoaded ===  totalImages){
    ready = true;
    loader.hidden = true;
    imagesLoaded = 0;
  }
  console.log(imagesLoaded);
  console.log(totalImages);
  console.log('ready',ready);
}

// Create elemets for Display
function displayPhotos(){
  totalImages = 0;
  totalImages = photosArray.length;
  // Run for each object in photosArray
  photosArray.forEach((photo) => {
    //Create an anchor element to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target','_blank');

    //Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('title', photo.alt_description);
    img.setAttribute('alt', photo.alt_description);

    // Event Listener, check when each image is finished loading
    img.addEventListener('load', imageLoaded);
    //Put <img> inside the <a>, then put both inside image-container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash
async function getPhotos(){
  try{
    const response = await fetch(apiUrl);
    photosArray  = await response.json();
    displayPhotos();
  }catch(error){
        
  }
}

// Check to see if scrolling near bottom of page to load more photos
window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
    ready = false;
    getPhotos();
  }
});
// On load
getPhotos();
