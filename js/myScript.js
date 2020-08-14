var openGnb = document.querySelector(".open_gnb")
var elHeader = document.querySelector(".header_cont")
var elOutlayer = document.querySelector(".outlayer")

function openNav(){
    elHeader.classList.toggle("on")
    elOutlayer.classList.toggle("on")
}
openGnb.addEventListener("click", openNav)
elOutlayer.addEventListener("click", openNav)

var winWidth
function winResize(){
    winWidth = window.innerWidth
    if(winWidth > 800){elHeader.classList.remove("on")}
}
window.addEventListener("resize", winResize)
