console.log("Welcome to Spotify")

// Initalize the variables
let songIndex =0;
let audioElement =new Audio('1.mp3');
let masterPlay= document.getElementById('masterplay');
let myProgressBar= document.getElementById('myprogressBar')
let songs=[
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
    {songName: "Salam-e-Is", filePath: "song/1.mp3", coverPath:"cover/1.jpg"},
]

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

// listen to event
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update Seekbar
})
