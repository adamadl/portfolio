window.onscroll = function() {scrollFunction()}
window.onresize = function() {scrollFunction()};

// const toggleBtn = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('header-links')[0]
// toggleBtn.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// })


document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementsByClassName('toggle-button')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    const navLinks = document.querySelectorAll('.navbar-links a');
    toggleBtn.addEventListener('click', (event) => {
        if(toggleBtn.getAttribute('href') === '#'){
            event.preventDefault();
        }
        navbarLinks.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        })
    })
});

function scrollFunction() {
    console.log("function")
    const nav = document.getElementById("nav");
    const isMobileView = window.innerWidth <= 800;
    if(!isMobileView){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            nav.style.backgroundColor = "rgb(25, 25, 25)";
            nav.classList.add("shrunk");
            
        }
        else{
            nav.style.backgroundColor = "transparent";
            nav.classList.remove("shrunk");
        }
    }
    else{
        nav.style.backgroundColor = "#1f2937";
        nav.classList.remove("shrunk");
    }
}