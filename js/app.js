new fullpage('#fullpage', {
    autoScrolling : true,
    navigation: true,
    onLeave: (origin,destination,direction) =>{
        const index = destination.index;
        const section = destination.item;
        const tl = new TimelineMax({delay: 0.5});
        switch (index){
            case 0:
                const img1 = section.querySelector('.section img');
                const title = section.querySelector('.section .Hello');
                const text1 = section.querySelector('.section .text');
                tl.fromTo(img1,0.5, {x: '50', opacity: 0}, {x: 0, opacity: 1});
                tl.fromTo(text1,0.5, {x: '-50', opacity: 0}, {x: 0, opacity: 1});
                break;
            case 1:
                const triangle = section.querySelector('.section #triangle');
                const img2 = section.querySelector('.section #platform');
                const text2 = section.querySelector('.section .text');
                tl.fromTo(triangle, 0.5, {x: '50', opacity: 0}, {x: 0, opacity: 1});
                tl.fromTo(img2, 0.5, {x: '-50', opacity: 0}, {x: 0, opacity: 1});
                tl.fromTo(text2, 0.5, {y: '-50', opacity: 0}, {y: 0, opacity: 1});
                break;
            case 2:
                const platformText = section.querySelector('.section .text');
                tl.fromTo(platformText, 0.5, {y: '-50', opacity: 0}, {y: 0, opacity: 1});
                break;
            case 3:
                const aboutUsText = section.querySelector('.section .text');
                tl.fromTo(aboutUsText, 0.5, {y: '-50', opacity: 0}, {y: 0, opacity: 1});
                break;
        }
        //tl.fromTo(title,0.5, {y: '50', opacity: 0}, {y: 0, opacity: 1});
        
        //tl.fromTo(title,0.5, {x: '-50', opacity: 0}, {x: 0, opacity: 1});
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