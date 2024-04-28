/*
    Project 4 Website
    Name: Dongok Yang
    Date: 2023.04.18
    Description: This is an javascript file used for Project 4 Website
*/

document.addEventListener("DOMContentLoaded", function () {
  function resetNavItems() {
    const navItems = document.querySelectorAll(".nav-items");
    navItems.forEach((item) => {
      item.style.color = "";
      item.style.backgroundColor = "";
      const img = item.querySelector("img");
      img.style.filter = "";
      if (img.alt === "home") {
        img.src = "/images/home.png";
      } else if (img.alt === "portfolio") {
        img.src = "/images/portfolio.png";
      } else if (img.alt === "resume") {
        img.src = "/images/resume.png";
      } else if (img.alt === "contact") {
        img.src = "/images/contact.png";
      }
    });
  }

  function activateNavItem(item) {
    item.style.backgroundColor = "#bbaaff";
    const img = item.querySelector("img");
    img.style.filter = "brightness(0) invert(1)";
    if (img.alt === "home") {
      img.src = "/images/home_selected.png";
    } else if (img.alt === "portfolio") {
      img.src = "/images/portfolio_selected.png";
    } else if (img.alt === "resume") {
      img.src = "/images/resume_selected.png";
    } else if (img.alt === "contact") {
      img.src = "/images/contact_selected.png";
    }
  }

  function hideAllSections() {
    document.getElementById("home_content").style.display = "none";
    document.getElementById("portfolio_content").style.display = "none";
    document.getElementById("resume_content").style.display = "none";
    document.getElementById("contact_content").style.display = "none";
  }

  function showSection(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).style.display = "block";
  }

  const navItems = document.querySelectorAll(".nav-items");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      resetNavItems();
      activateNavItem(item);

      const contentId = item.id + "_content";
      showSection(contentId);
    });
  });

  document.querySelectorAll("#navigation-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const sectionId = link.getAttribute("href").substring(1) + "_content";
      showSection(sectionId);
    });
  });

  activateNavItem(document.getElementById("home"));
  showSection("home_content");

  document.getElementById("contactForm").onsubmit = function (event) {
    document.getElementById("name_error").style.display = "none";
    document.getElementById("nameformat_error").style.display = "none";
    document.getElementById("phone_error").style.display = "none";
    document.getElementById("phoneformat_error").style.display = "none";
    document.getElementById("email_error").style.display = "none";
    document.getElementById("emailformat_error").style.display = "none";

    var errorFlag = false;

    var name = document.getElementById("name");
    name.style.backgroundColor = "white";
    var namePattern = new RegExp(/^[A-Za-z\s]+$/);
    if (name.value.trim() === "") {
      document.getElementById("name_error").style.display = "block";
      name.style.backgroundColor = "pink";
      name.focus();
      errorFlag = true;
    } else if (!namePattern.test(name.value)) {
      name.style.backgroundColor = "pink";
      name.focus();
      errorFlag = true;
      document.getElementById("nameformat_error").style.display = "block";
    }

    var phone = document.getElementById("phone");
    phone.style.backgroundColor = "white";
    var phonePattern = new RegExp(/^[0-9]{10}$/);
    if (phone.value.trim() === "") {
      phone.style.display = "block";
      phone.style.backgroundColor = "pink";
      phone.focus();
      errorFlag = true;
      document.getElementById("phone_error").style.display = "block";
    } else if (!phonePattern.test(phone.value)) {
      phone.style.backgroundColor = "pink";
      phone.focus();
      errorFlag = true;
      document.getElementById("phoneformat_error").style.display = "block";
    }

    var email = document.getElementById("email");
    email.style.backgroundColor = "white";
    var emailRegex = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
    if (email.value.trim() === "") {
      email.style.backgroundColor = "pink";
      phone.focus();
      errorFlag = true;
      document.getElementById("email_error").style.display = "block";
    } else if (!emailRegex.test(email.value)) {
      email.style.backgroundColor = "pink";
      email.focus();
      errorFlag = true;
      document.getElementById("emailformat_error").style.display = "block";
    }

    if (errorFlag) {
      event.preventDefault();
    }
  };
});
