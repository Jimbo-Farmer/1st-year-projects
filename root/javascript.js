const screenshots = document.querySelectorAll(".modal");

for(let i = 0; i < screenshots.length; i++){
    screenshots[i].addEventListener("click", function(){
        event.target.classList.toggle("open");
    })
}