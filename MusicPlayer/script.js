console.log("Welcome");
let progress = document.getElementById("slider");
let AudioElement = new Audio('Songs/1.mp3');
let MastPlay = document.getElementById('play');
let Songs = Array.from(document.getElementsByClassName("song"));
let songitem = [
    {
        name: "Ishq",
        duration: "03:21"
    },
    {
        name: "Gunday",
        duration: "05:21"
    },
    {
        name: "Don",
        duration: "01:29"
    },
    {
        name: "SOTY",
        duration: "05:23"
    },
    {
        name: "Vicky Donor",
        duration: "09:12"
    },
    {
        name: "Zero",
        duration: "07:21"
    },
    {
        name: "Zinda",
        duration: "06:27"
    },
    {
        name: "Hero",
        duration: "08:21"
    },
    {
        name: "New York",
        duration: "11:21"
    }
]
Songs.forEach(((element, i) => {
    element.getElementsByClassName("heading")[0].innerText = songitem[i].name;
    element.getElementsByClassName("time")[0].innerText = songitem[i].duration;
}
));
MastPlay.addEventListener('click', () => {
    if (AudioElement.paused || AudioElement.currentTime <= 0) {
        AudioElement.play();
        MastPlay.classList.remove("fa-play-circle");
        MastPlay.classList.add("fa-pause-circle")
    }
    else {
        AudioElement.pause();
        MastPlay.classList.remove("fa-pause-circle");
        MastPlay.classList.add("fa-play-circle")
    }
})
const makeallplays =() =>
{
    Array.from(document.getElementsByClassName("song")).forEach((element, i) => {
        element.getElementsByTagName("i")[0].classList.add("fa-play-circle");
        element.getElementsByTagName("i")[0].classList.remove("fa-pause-circle");

    })
}

AudioElement.addEventListener('timeupdate', () => {
    p = parseInt((AudioElement.currentTime / AudioElement.duration) * 100);
    progress.value = p;
})
progress.addEventListener('change', () => {
    AudioElement.currentTime = (progress.value * AudioElement.duration) / 100;
})
Array.from(document.getElementsByClassName("song")).forEach((element, i) => {
    element.addEventListener('click', () => {
            makeallplays();
            AudioElement.src = "Songs/2.mp3";
            element.getElementsByTagName("i")[0].classList.remove("fa-play-circle");
            element.getElementsByTagName("i")[0].classList.add("fa-pause-circle");
            AudioElement.play();
            MastPlay.classList.remove("fa-play-circle");
            MastPlay.classList.add("fa-pause-circle")
         })

})