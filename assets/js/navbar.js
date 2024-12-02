const hamburger = document.querySelector(".hamburger");
const sidenavbar = document.querySelector(".sidenavbar");

hamburger.addEventListener("click",
    ()=> {
        sidenavbar.classList.toggle("hidden")
    }
)