// preloader
const preloader = document.querySelector(".preloader");


// video
const pageVideo = document.getElementById('video');

// boton
const videoBtn = document.querySelector('.overlay-btn');
videoBtn.addEventListener('click', (e) => {
    if(!videoBtn.classList.contains('pause')){
        videoBtn.classList.add('pause');
        pageVideo.pause()
    }else{
        videoBtn.classList.remove('pause');
        pageVideo.play();
    }
})

window.addEventListener('load', () => {
    preloader.classList.add("hide-preloader");
});