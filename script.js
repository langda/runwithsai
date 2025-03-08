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
  "https://runwithsai.com/assets/img/logo/about_us.png"
);

// page loading
(function () {
    window.onload = function () {
      const preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
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
