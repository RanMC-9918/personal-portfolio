let gallery = document.getElementById('gallery');
let navA = document.querySelectorAll("a")
let imgIndex = 0;
let shuffle = true;
setInterval(changeImg, 1000)
function changeImg() {
    if (shuffle) {
    console.log('changeImg');
    if(imgIndex == 0){
        gallery.src = 'images/academics.jpg';

    }
    else if(imgIndex == 1){
        gallery.src = 'images/extracurriculars.jpg';
        
    }
    else if(imgIndex == 2){
        gallery.src = 'images/projects.jpg';
    }
    else if(imgIndex == 3){
        gallery.src = 'images/freetime.png';
    }
    clearBackgrounds();
    navA[imgIndex].style.backgroundColor = "rgba(197, 147, 81, 0.377)";
    
    
    if(imgIndex >= 3) {
        imgIndex = 0;
    }
    else{
        imgIndex++;
    }
    }
}

navA[0].addEventListener("mouseover", ()=>{
    shuffle = false;
    clearBackgrounds();
    navA[0].style.backgroundColor = "rgba(197, 147, 81, 0.377)";
    gallery.src = 'images/academics.jpg';
})

navA[0].addEventListener("mouseout", ()=>{
    shuffle = true;
})

navA[1].addEventListener("mouseover", ()=>{
    shuffle = false;
    clearBackgrounds();
    navA[1].style.backgroundColor = "rgba(197, 147, 81, 0.377)";
    gallery.src = 'images/extracurriculars.jpg';
})

navA[1].addEventListener("mouseout", ()=>{
    shuffle = true;
})

navA[2].addEventListener("mouseover", ()=>{
    shuffle = false;
    clearBackgrounds();
    navA[2].style.backgroundColor = "rgba(197, 147, 81, 0.377)";
    gallery.src = 'images/projects.jpg';
})

navA[2].addEventListener("mouseout", ()=>{
    shuffle = true;
})

navA[3].addEventListener("mouseover", ()=>{
    shuffle = false;
    clearBackgrounds();
    navA[3].style.backgroundColor = "rgba(197, 147, 81, 0.377)";
    gallery.src = 'images/freetime.png';
})

navA[3].addEventListener("mouseout", ()=>{
    shuffle = true;
})

function clearBackgrounds() {
    for(let i = 0; i < navA.length; i++){
        navA[i].style.backgroundColor = "bisque";
    }
}