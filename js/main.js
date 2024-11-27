//On Scroll Function
function navMenu() {
  let navBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 120) {
      navBar.classList.add("navbar-sticky-moved-up");
    } else {
      navBar.classList.remove("navbar-sticky-moved-up");
    }
    //Apply Transition
    if (scroll >= 250) {
      navBar.classList.add(".navbar-sticky-transitioned");
      scrollTopButton.classList.add("scrollActive");
    } else {
      navBar.classList.remove(".navbar-sticky-transitioned");
      scrollTopButton.classList.remove("scrollActive");
    }
    //Sticky on
    if (scroll >= 500) {
      navBar.classList.add("navbar-sticky-on");
    } else {
      navBar.classList.remove("navbar-sticky-on");
    }
  };
}
navMenu();
// counter design
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 10, 2000);
  counter("count2", 0, 20, 3000);
  counter("count3", 0, 30, 4000);
  counter("count4", 0, 10, 2000);
});

//App-Screen

// Side Navigation Bar Close While We click ON Navigation Links
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
  a.addEventListener("click",function(){
    navCollapse.classList.remove("show");
  })
})