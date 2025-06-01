var personalList = [];

const artists = [/* your full artist list here, unchanged */];

function addToPersonalList() {
  for (let i = 0; i < artists.length; i++) {
    personalList.push({
      name: artists[i].name,
      genre: artists[i].genre,
      songs: artists[i].songs
    });
  }
}

function displayArtists(artists) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  let artistList = artists;
  if (typeof artists === "string") {
    try {
      artistList = JSON.parse(artists);
    } catch (e) {
      artistList = [];
    }
  }

  for (let i = 0; i < 4; i++) {
    const artist = artistList[i];
    const artistDiv = document.createElement("div");
    artistDiv.className = "artist";
    artistDiv.innerHTML = `<h3>${artist.name} (${artist.genre})</h3><ul>${artist.songs.map(song => `<li>${song}</li>`).join("")}</ul>`;
    resultsDiv.appendChild(artistDiv);
  }
}

function doTheThing() {
  addToPersonalList();

  const topGenresJSON = localStorage.getItem('topGenres');
  if (!topGenresJSON) return;

  let topGenres;
  try {
    topGenres = JSON.parse(topGenresJSON);
  } catch (e) {
    console.error("Failed to parse topGenres:", e);
    return;
  }

  const topGenreNames = topGenres.map(g => g.genre);

  const topArtists = personalList.filter(artist => topGenreNames.includes(artist.genre));

  displayArtists(topArtists);

  const topGenreText = topGenres.length > 0 ? `Top Genre: ${topGenres[0].genre}` : "Top Genre: N/A";
  document.getElementById("mainGenre").textContent = topGenreText;

  localStorage.removeItem('topGenres');
}

    let topGenre = scores[0];
    for (let i = 1; i < scores.length; i++) {
      if (scores[i].score > topGenre.score) {
        topGenre = scores[i];
      }
    }
    //Sorts through the scores of genres and selects genre with greatest value
        document.getElementById("mainGenre").textContent =
      `Top Genre: ${topGenre.genre} `;


document.addEventListener("DOMContentLoaded", doTheThing);
