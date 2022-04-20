
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let isplaying = false;

// For play function
const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};
// For pause function
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if (isplaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

// Song prev or next
const songs = [
    {
        name: "ektarfa",
        title:"Ek tarfa",
        artist:"Darshan Raval",
    },
    {
        name: "baari",
        title:"Baari",
        artist:"Bilal Saeed",
    },
    {
        name: "excuses",
        title:"Excuses",
        artist:"AP Dhillon",
    },
    {
        name: "hosana",
        title:"Hosanna",
        artist:"A.R.Rahman",
    },
    {
        name: "kaun",
        title:"Kaun Faya Kun",
        artist:"Mohit Chauhan",
    },
    {
        name: "meherma",
        title:"Mehrama",
        artist:"Darshan Raval",
    },
    {
        name: "soch",
        title:"Soch na Sake",
        artist:"Arijit Singh",
    },
    {
        name: "tumse",
        title:"Tum Se Hi",
        artist:"Mohit Chauhan",
    }
]

//changing the music
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";
};
loadSong(songs);

index = 0;
loadSong(songs[index]);

const nextsong = () => {
    index = (index + 1) % songs.length;
    loadSong(songs[index]);
    playMusic();
};
const prevsong = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(songs[index]);
    playMusic();
};

next.addEventListener('click', nextsong);
prev.addEventListener('click', prevsong);