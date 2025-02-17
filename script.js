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
