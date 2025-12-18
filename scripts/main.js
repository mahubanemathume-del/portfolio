let images = ["image1.jpg", 
              "image2.jpg",
              "image3.jpg",          
];
let index = 0;
let imgElement = document.querySelector(".hero-img");

function showImage() {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    index = (index + 1) % images.length;
    imgElement.src = images[index];
    imgElement.style.opacity = 1;
  }, 500); //
}

setInterval(showImage, 5000);

