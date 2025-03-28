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

    // Check if content exceeds maxHeight
    if (contentDiv.scrollHeight > maxHeight) {
      contentDiv.style.maxHeight = maxHeight + "px";
      contentDiv.style.overflow = "hidden";
      readMoreBtn.style.display = "inline-block"; 
    }

    // Remove the toggle functionality
    // Instead, route to the event's detail page when "Read more" is clicked
    readMoreBtn.addEventListener("click", function (event) {
      event.preventDefault(); 
      var eventUrl = readMoreBtn.getAttribute("href"); 
      if (eventUrl) {
        window.location.href = eventUrl;
      }
    });
  });
});

   // Function to open the image modal and display the selected image
   function openImageModal(sectionName, index) {
    const modalElement = document.getElementById(`imageModal${sectionName}`);
    const images = JSON.parse(modalElement.getAttribute('data-images'));

    // Set the current index to the clicked image index
    currentIndex = parseInt(index);

    // Update the modal image and counter
    updateModalImage(sectionName, images);

    // Show the modal
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  // Function to update the modal image and counter
  function updateModalImage(sectionName, images) {
    if (currentIndex >= 0 && currentIndex < images.length) {
      // Ensure correct image URL extraction
      const imageUrl = images[currentIndex].url ? images[currentIndex].url : images[currentIndex];
  
      // Update the image source
      document.getElementById(`modalImage${sectionName}`).src = imageUrl;
  
      // Update counter
      document.getElementById(`imageCount${sectionName}`).innerText = `${currentIndex + 1} / ${images.length}`;
    }
  }
  

  // Function to navigate to the previous image
  function prevImage(sectionName) {
    const modalElement = document.getElementById(`imageModal${sectionName}`);
    const images = JSON.parse(modalElement.getAttribute('data-images'));

    if (currentIndex > 0) {
      currentIndex--;
      updateModalImage(sectionName, images);
    }
  }

  // Function to navigate to the next image
  function nextImage(sectionName) {
    const modalElement = document.getElementById(`imageModal${sectionName}`);
    const images = JSON.parse(modalElement.getAttribute('data-images'));

    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateModalImage(sectionName, images);
    }
  }

  // Initialize the modal when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    const modalElement = document.getElementById('imageModalevent-gallery');
    if (modalElement) {
      const images = JSON.parse(modalElement.getAttribute('data-images'));
      if (images.length > 0) {
        currentIndex = 0;
        updateModalImage('event-gallery', images);
      }
    }
  });
