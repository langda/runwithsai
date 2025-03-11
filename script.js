// Function to update meta tags dynamically
function updateMetaTags(title, description, imageUrl) {
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute("content", imageUrl);

  document
    .querySelector('meta[name="twitter:title"]')
    .setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')
    .setAttribute("content", description);
  document
    .querySelector('meta[name="twitter:image"]')
    .setAttribute("content", imageUrl);
}

updateMetaTags(
  "RunWithSAI - Organizer Details",
  "Join RunWithSAI for marathons and charity runs across Cambodia.",
  "https://runwithsai.com/assets/img/logo/about_us1.jpg"
);

// page loading
(function () {
  window.onload = function () {
    const preloader = document.querySelector(".page-loading");
    preloader.classList.remove("active");
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();

// change sai_logo base on darkmode
const themeToggle = document.getElementById("theme-mode");
const logo = document.getElementById("logo");

if (localStorage.getItem("theme") === "dark") {
  themeToggle.checked = true;
  logo.src = "assets/img/svg/sai_logo_white.svg";
  document.body.classList.add("dark-theme");
}

themeToggle.addEventListener("change", function () {
  if (themeToggle.checked) {
    logo.src = "assets/img/svg/sai_logo_white.svg";
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    logo.src = "assets/img/svg/sai_logo_black.svg";
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
});

// List all image of Run by Heart
const images = [
  "assets/img/charity/run_by_heart/run_by_heart1.jpg",
  "assets/img/charity/run_by_heart/run_by_heart2.jpg",
  "assets/img/charity/run_by_heart/run_by_heart3.jpg",
  "assets/img/charity/run_by_heart/run_by_heart4.jpg",
  "assets/img/charity/run_by_heart/run_by_heart5.jpg",
  "assets/img/charity/run_by_heart/run_by_heart6.jpg",
  "assets/img/charity/run_by_heart/run_by_heart7.jpg",
  "assets/img/charity/run_by_heart/run_by_heart8.jpg",
  "assets/img/charity/run_by_heart/run_by_heart9.jpg"
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  let visibleImages = 4;
  let remainingImages = images.length - visibleImages;

  if (remainingImages > 0) {
    document.getElementById("remainingCount").innerText = `+${remainingImages}`;
  } else {
    document.querySelector(".overlay").style.display = "none";
  }
});

// Open modal & show selected image
function openImageModal(index) {
  currentIndex = index;
  updateModalImage();
  new bootstrap.Modal(document.getElementById("imageModal")).show();
}

// Update image & counter in modal
function updateModalImage() {
  document.getElementById("modalImage").src = images[currentIndex];
  document.getElementById("imageCount").innerText = `${currentIndex + 1} / ${images.length}`;
}

// Navigate previous image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateModalImage();
  }
}

// Navigate next image
function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateModalImage();
  }
}



// List all image of RunWithSai Virtual Run
const imagesVirtualRun = [
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual1.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual2.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual3.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual4.jpg", 
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual5.jpg", 
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual6.jpg", 
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual7.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual8.jpg", 
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual9.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual10.jpg",
  "assets/img/charity/run_with_sai_virtual/run_with_sai_virtual11.jpg"
];

let currentIndexVirtualRun = 0;

document.addEventListener("DOMContentLoaded", function () {
  let visibleImagesVirtualRun = 4;
  let remainingImagesVirtualRun = imagesVirtualRun.length - visibleImagesVirtualRun;

  if (remainingImagesVirtualRun > 0) {
    document.getElementById("remainingCountVirtualRun").innerText = `+${remainingImagesVirtualRun}`;
  } else {
    document.querySelector(".overlay").style.display = "none";
  }
});

// Open modal & show selected image
function openImageModalVirtualRun(index) {
  currentIndex = index;
  updateModalImageVirtualRun();
  new bootstrap.Modal(document.getElementById("imageModalVirtualRun")).show();
}

// Update image & counter in modal
function updateModalImageVirtualRun() {
  document.getElementById("modalImageVirtualRun").src = imagesVirtualRun[currentIndex];
  document.getElementById("imageCountVirtualRun").innerText = `${currentIndex + 1} / ${imagesVirtualRun.length}`;
}

// Navigate previous image
function prevImageVirtualRun() {
  if (currentIndex > 0) {
    currentIndex--;
    updateModalImageVirtualRun();
  }
}

// Navigate next image
function nextImageVirtualRun() {
  if (currentIndex < imagesVirtualRun.length - 1) {
    currentIndex++;
    updateModalImageVirtualRun();
  }
}

