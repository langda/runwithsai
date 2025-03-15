// Function to update meta tags dynamically
function updateMetaTags(title, description, imageUrl) {
  document.querySelector('meta[property="og:title"]').setAttribute("content", title);
  document.querySelector('meta[property="og:description"]').setAttribute("content", description);
  document.querySelector('meta[property="og:image"]').setAttribute("content", imageUrl);
  
  document.querySelector('meta[name="twitter:title"]').setAttribute("content", title);
  document.querySelector('meta[name="twitter:description"]').setAttribute("content", description);
  document.querySelector('meta[name="twitter:image"]').setAttribute("content", imageUrl);
}

updateMetaTags(
  "RunWithSAI - Organizer Details",
  "Join RunWithSAI for marathons and charity runs across Cambodia.",
  "https://runwithsai.com/assets/img/logo/about_us1.jpg"
);

// Page loading effect
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".page-loading");
  if (preloader) {
    preloader.classList.remove("active");
    setTimeout(() => preloader.remove(), 1000);
  }
});

// Theme toggle functionality
const themeToggle = document.getElementById("theme-mode");
const logo = document.getElementById("logo");

function updateTheme(isDark) {
  logo.src = isDark ? "assets/svg/sai_logo_white.svg" : "assets/svg/sai_logo_black.svg";
  document.body.classList.toggle("dark-theme", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (localStorage.getItem("theme") === "dark") {
  themeToggle.checked = true;
  updateTheme(true);
}

themeToggle.addEventListener("change", () => updateTheme(themeToggle.checked));

// Only show "Read more" if content exceeds the maxHeight
document.addEventListener("DOMContentLoaded", function () {
  var eventSections = document.querySelectorAll('.content-preview');
  eventSections.forEach(function (contentDiv) {
    var readMoreBtn = contentDiv.nextElementSibling; 
    var maxHeight = 300;

    if (contentDiv.scrollHeight > maxHeight) {
      contentDiv.style.maxHeight = maxHeight + "px";
      contentDiv.style.overflow = "hidden";
      readMoreBtn.style.display = "inline-block";
    }

    // Toggle "Read more" / "Read less"
    readMoreBtn.addEventListener("click", function () {
      if (contentDiv.style.maxHeight === "none") {
        contentDiv.style.maxHeight = maxHeight + "px";
        contentDiv.style.overflow = "hidden";
        readMoreBtn.textContent = "Read more";
      } else {
        contentDiv.style.maxHeight = "none";
        contentDiv.style.overflow = "visible";
        readMoreBtn.textContent = "Read less";
      }
    });
  });
});


// open modal and show selected image for each event
// Define currentIndex globally 
let currentIndex = 0;

// Function to open modal and show selected image for each event
function openImageModal(sectionName, index) {
  // Get the images for the section dynamically
  const images = JSON.parse(document.getElementById(`imageModal${sectionName}`).getAttribute('data-images'));
  
  // Reset currentIndex to 0 when the modal is opened for the first time
  currentIndex = 0;

  // Update modal with the first image (index 0)
  updateModalImage(sectionName, images);

  // Show the modal
  new bootstrap.Modal(document.getElementById(`imageModal${sectionName}`)).show();
}

// Function to update the modal image and counter
function updateModalImage(sectionName, images) {
  // Ensure the image index is within the bounds
  if (currentIndex >= 0 && currentIndex < images.length) {
    // Update the image source
    document.getElementById(`modalImage${sectionName}`).src = images[currentIndex];

    // Display the current image index starting from 1, not 0 (human-readable index)
    document.getElementById(`imageCount${sectionName}`).innerText = `${currentIndex + 1} / ${images.length}`;
  }
}

// Function to navigate to the previous image in the modal
function prevImage(sectionName) {
  const images = JSON.parse(document.getElementById(`imageModal${sectionName}`).getAttribute('data-images'));
  if (currentIndex > 0) {
    currentIndex--;
    updateModalImage(sectionName, images);
  }
}

// Function to navigate to the next image in the modal
function nextImage(sectionName) {
  const images = JSON.parse(document.getElementById(`imageModal${sectionName}`).getAttribute('data-images'));
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateModalImage(sectionName, images);
  }
}