/* setp up close and open action for navbar */
let closeBtn = document.getElementById("close-menu");
closeBtn.addEventListener("click",function(event){
    event.currentTarget.parentElement.style.cssText = "transform: translateX(100%)";
    document.getElementById("overlay").style.display = "none";
})

let openBtn = document.getElementById("open-menu");
openBtn.addEventListener("click",function(event){
    let nav = document.getElementById("main-nav")
    nav.style.cssText = "transform: translateX(-100%)";
    document.getElementById("overlay").style.display = "block";
})

/* set up drop down */
let dropDownMenu = document.querySelectorAll(".drop-down-menu");
dropDownMenu.forEach((element)=>{
    element.addEventListener("click",function(event){
        let activeDrop = document.querySelector(".drop-down.active");
        currentEle = event.currentTarget;
        dropDown = currentEle.querySelector(".drop-down");
        if (activeDrop && activeDrop !== dropDown){
            activeDrop.classList.remove("active");
            activeDrop.parentElement.querySelector("img").setAttribute("src","./images/icon-arrow-down.svg")
        } 
        if (dropDown.classList.contains("active")){
            //change arrow image
            currentEle.children[1].setAttribute("src","./images/icon-arrow-down.svg")
        }else{
            currentEle.children[1].setAttribute("src","./images/icon-arrow-up.svg")
        }
        dropDown.classList.toggle("active")
    });
})