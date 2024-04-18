const newSong = document.createElement("li");
newSong.innerHTML = '<button type="button" style="border: none" id="F" class="play"><b> "Live and die"</b> by Joe Public</button>';
document.querySelector("ol").appendChild(newSong);
const newSong2 = document.createElement("li");
newSong2.innerHTML = '<button type="button" style="border: none" id="G" class="play"><b> "Something"</b> by Weezer</button>';
document.querySelector("ol").appendChild(newSong2);

document.querySelectorAll(".play").forEach(item => {
    item.addEventListener("click", event => {
        document.getElementById("playing").innerText = event.currentTarget.innerText;
    })
})

function playsong1(){
    const audio = document.getElementById('audio');
    audio.src = './songs/song1.mp3';
    audio.play();
}