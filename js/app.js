const header = document.querySelector("header");
function transbar(){
    header.classList.toggle("scrolled",window.pageYOffset>0);
}
window.addEventListener("scroll",transbar);
const activepage=Window.location;
console.log();