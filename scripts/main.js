let images = ["image1.jpg", 
              "image2.jpg",
              "image3.jpg",          
];
let index = 0;
let imgElement = document.querySelector(".hero-img");

function showImage() {
  imgElement.style.opacity = 0; // fade out current
  setTimeout(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index]; // swap image
    imgElement.style.opacity = 1;   // fade in new
  }, 500); // overlap timing
}

setInterval(showImage, 5000);
