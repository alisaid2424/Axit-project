// Toggle the mobile menu
const navbarToggler = document.getElementById('navbar-toggler');
const mobileMenu = document.getElementById('mobile-menu');

navbarToggler.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(event) {
  if (!navbarToggler.contains(event.target) && !mobileMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden');
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth >= 767) {
    mobileMenu.classList.add('hidden'); 
  }
});




//handle Tabs Section
let switcherLis = document.querySelectorAll(".tab-switch li");
let tabContent = document.querySelectorAll(".tabs-content div");

switcherLis.forEach((li) => {
  li.addEventListener("click", (event) => {
    // remove class selected from all lis
    switcherLis.forEach((el) => {
      el.classList.remove("selected");
    });
    // add class selected on current element
    event.currentTarget.classList.add("selected");

    // not display all tab content
    tabContent.forEach((el) => {
      el.style.display = "none";
    });

    // display the content of the clicked tab
    document.querySelectorAll(event.currentTarget.dataset.class).forEach((el) => {
      el.style.display = "block";
    });
  });
});



// Navigation scroll to up with btn
window.addEventListener("scroll" , () => {
  if (window.scrollY >= 200) {
    document.querySelector(".btn-scroll-top").style.display = "block";
    document.querySelector(".btn-scroll-top").style.opacity = "1";
  } else {
    document.querySelector(".btn-scroll-top").style.display = "none";
    document.querySelector(".btn-scroll-top").style.opacity = "0";
  }
});

document.querySelector(".btn-scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



//update date now
document.querySelector(".footer .date-now").innerHTML = new Date().getFullYear();
