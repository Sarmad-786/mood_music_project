const moodSelect = document.getElementById("mood");
const showSongsBtn = document.getElementById("showSongs");
const songList = document.getElementById("songList");

const songs = {
  happy: [
    "Happy - Pharrell Williams",
    "Good Life - Kanye West",
    "Walking on Sunshine - Katrina & The Waves"
  ],
  sad: [
    "Someone Like You - Adele",
    "Stay With Me - Sam Smith",
    "Fix You - Coldplay"
  ],
  chill: [
    "Lo-fi Beats",
    "Chillhop Essentials",
    "Weightless - Marconi Union"
  ]
};

showSongsBtn.addEventListener("click", () => {
  const selectedMood = moodSelect.value;
  songList.innerHTML = "";

  if (songs[selectedMood]) {
    songs[selectedMood].forEach(song => {
      const li = document.createElement("li");
      li.textContent = song;
      songList.appendChild(li);
    });
  } else {
    alert("Please select a mood!");
  }
});