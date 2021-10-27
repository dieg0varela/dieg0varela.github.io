new fullpage('#fullpage', {
    autoScrolling : true,
    navigation: true,
    onLeave: (origin,destination,direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});
    }
})


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("HeaderNavigation-Items");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}