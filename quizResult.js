// var personalList = [];

// const artists = [/* your full artist list here, unchanged */];

// function addToPersonalList() {
//   for (let i = 0; i < artists.length; i++) {
//     personalList.push({
//       name: artists[i].name,
//       genre: artists[i].genre,
//       songs: artists[i].songs
//     });
//   }
// }

// function displayArtists(artists) {
//   const resultsDiv = document.getElementById("results");
//   resultsDiv.innerHTML = "";

//   let artistList = artists;
//   if (typeof artists === "string") {
//     try {
//       artistList = JSON.parse(artists);
//     } catch (e) {
//       artistList = [];
//     }
//   }

//   for (let i = 0; i < 4; i++) {
//     const artist = artistList[i];
//     const artistDiv = document.createElement("div");
//     artistDiv.className = "artist";
//     artistDiv.innerHTML = `<h3>${artist.name} (${artist.genre})</h3><ul>${artist.songs.map(song => `<li>${song}</li>`).join("")}</ul>`;
//     resultsDiv.appendChild(artistDiv);
//   }
// }

// function doTheThing() {
//   addToPersonalList();

//   const topGenresJSON = localStorage.getItem('topGenres');
//   if (!topGenresJSON) return;

//   let topGenres;
//   try {
//     topGenres = JSON.parse(topGenresJSON);
//   } catch (e) {
//     console.error("Failed to parse topGenres:", e);
//     return;
//   }

//   const topGenreNames = topGenres.map(g => g.genre);

//   const topArtists = personalList.filter(artist => topGenreNames.includes(artist.genre));

//   displayArtists(topArtists);

//   const topGenreText = topGenres.length > 0 ? `Top Genre: ${topGenres[0].genre}` : "Top Genre: N/A";
//   document.getElementById("mainGenre").textContent = topGenreText;

//   localStorage.removeItem('topGenres');
// }

//     let topGenre = scores[0];
//     for (let i = 1; i < scores.length; i++) {
//       if (scores[i].score > topGenre.score) {
//         topGenre = scores[i];
//       }
//     }
//     //Sorts through the scores of genres and selects genre with greatest value
//         document.getElementById("mainGenre").textContent =
//       `Top Genre: ${topGenre.genre} `;


// document.addEventListener("DOMContentLoaded", doTheThing);


// Assume `artists` is defined elsewhere (full list of { name, genre, songs: [...] }).

const personalList = [];
const artists = [ /* your full artist list here, unchanged */ ];

function addAllArtistsToPersonalList() {
  // Populate personalList once
  for (let i = 0; i < artists.length; i++) {
    personalList.push({
      name: artists[i].name,
      genre: artists[i].genre,
      songs: artists[i].songs
    });
  }
}

function displayArtistsForGenre(genre) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  // Filter out only those artists matching the given genre
  const matches = personalList.filter(artist => artist.genre === genre);

  if (matches.length === 0) {
    resultsDiv.innerHTML = "<p>No artists found for this genre.</p>";
    return;
  }

  // For each matching artist, create a div with name + song list
  matches.forEach(artist => {
    const artistDiv = document.createElement("div");
    artistDiv.className = "artist";
    artistDiv.innerHTML = `
      <h3>${artist.name} (${artist.genre})</h3>
      <ul>
        ${artist.songs.map(song => `<li>${song}</li>`).join("")}
      </ul>
    `;
    resultsDiv.appendChild(artistDiv);
  });
}

function displayNextThreeGenres(topGenres) {
  const otherGenresUl = document.getElementById("otherGenres");
  otherGenresUl.innerHTML = "";

  // Grab up to 3 entries after index 0
  for (let i = 1; i <= 3; i++) {
    if (!topGenres[i]) break;
    const li = document.createElement("li");
    li.className = "genre-item";
    li.textContent = `${i + 1}. ${topGenres[i].genre} (score: ${topGenres[i].score})`;
    otherGenresUl.appendChild(li);
  }

  // If fewer than 4 total genres, note accordingly
  if (topGenres.length <= 1) {
    const li = document.createElement("li");
    li.className = "genre-item";
    li.textContent = "No additional genres.";
    otherGenresUl.appendChild(li);
  }
}

function doTheThing() {
  addAllArtistsToPersonalList();

  const topGenresJSON = localStorage.getItem("topGenres");
  if (!topGenresJSON) {
    console.error("No topGenres found in localStorage.");
    document.getElementById("mainGenre").textContent = "Top Genre: N/A";
    return;
  }

  let topGenres;
  try {
    topGenres = JSON.parse(topGenresJSON);
  } catch (e) {
    console.error("Failed to parse topGenres:", e);
    document.getElementById("mainGenre").textContent = "Top Genre: N/A";
    return;
  }

  if (!Array.isArray(topGenres) || topGenres.length === 0) {
    document.getElementById("mainGenre").textContent = "Top Genre: N/A";
    return;
  }

  // 1) Set the main genre text (the first entry)
  const mainGenreObj = topGenres[0];
  document.getElementById("mainGenre").textContent = `Top Genre: ${mainGenreObj.genre}`;

  // 2) Display all artists for that genre
  displayArtistsForGenre(mainGenreObj.genre);

  // 3) Show the next three genre names + scores
  displayNextThreeGenres(topGenres);

  // 4) (Optional) remove topGenres if you don't want to persist
  // localStorage.removeItem("topGenres");
}

document.addEventListener("DOMContentLoaded", doTheThing);
