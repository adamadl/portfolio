window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    console.log("function")
    const nav = document.getElementById("nav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        nav.style.backgroundColor = "rgb(25, 25, 25)";
        nav.classList.add("shrunk");
        
    }
    else{
        nav.style.backgroundColor = "transparent";
        nav.classList.remove("shrunk");
    }
}