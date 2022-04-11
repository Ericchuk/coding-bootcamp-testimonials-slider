let Next = document.querySelector(".next");
let Prev = document.querySelector(".prev");
let section = document.querySelector(".firstdisplay");
let section1 = document.querySelector(".secondDisplay");
let button = document.querySelector("aside");

function next(){
    if(section1.style.display === "flex"){
        section1.style.display = "none";
        section.style.display = "flex"
    }else{
        section1.style.display = "flex",
        section.style.display = "none"
    }
}

Next.addEventListener("click", next);

function prev(){
    if(section.style.display !== "flex"){
        section1.style.display = "none";
        section.style.display = "flex"
    }else{
        section1.style.display = "flex",
        section.style.display = "none"
    }
}

Prev.addEventListener("click", prev);