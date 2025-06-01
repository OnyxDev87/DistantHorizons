const personalList = [];
const artists = [
  // Alternative Rock
  {
    name: "Radiohead",
    genre: "Alternative Rock",
    songs: ["Paranoid Android", "Karma Police", "Everything In Its Right Place"],
    image: "images/radiohead2.png"
  },
  {
    name: "Arctic Monkeys",
    genre: "Alternative Rock",
    songs: ["Do I Wanna Know?", "R U Mine?", "505"],
    image: "images/monkey.jfif"
  },
  {
    name: "The Strokes",
    genre: "Alternative Rock",
    songs: ["Last Nite", "Someday", "Reptilia"],
    image: "images/strokes.jfif"
  },
  {
    name: "Muse",
    genre: "Alternative Rock",
    songs: ["Supermassive Black Hole", "Uprising", "Starlight"],
    image: "images/muse.jfif"
  },
  {
    name: "Foo Fighters",
    genre: "Alternative Rock",
    songs: ["Everlong", "The Pretender", "Best of You"],
    image: "images/"
  },

  // Hip-Hop / Rap
  {
    name: "Kendrick Lamar",
    genre: "Hip-Hop",
    songs: ["HUMBLE.", "Alright", "DNA."],
    image: "images/"
  },
  {
    name: "J. Cole",
    genre: "Hip-Hop",
    songs: ["No Role Modelz", "Wet Dreamz", "Middle Child"],
    image: "images/"
  },
  {
    name: "Drake",
    genre: "Hip-Hop",
    songs: ["God's Plan", "In My Feelings", "Hotline Bling"],
    image: "images/"
  },
  {
    name: "Cardi B",
    genre: "Hip-Hop",
    songs: ["Bodak Yellow", "I Like It", "WAP"],
    image: "images/"
  },
  {
    name: "Nicki Minaj",
    genre: "Hip-Hop",
    songs: ["Super Bass", "Anaconda", "Starships"],
    image: "images/"
  },

  // Electronic / EDM
  {
    name: "Daft Punk",
    genre: "Electronic",
    songs: ["One More Time", "Around The World", "Get Lucky"],
    image: "images/"
  },
  {
    name: "Calvin Harris",
    genre: "Electronic",
    songs: ["Summer", "Feel So Close", "This Is What You Came For"],
    image: "images/"
  },
  {
    name: "Deadmau5",
    genre: "Electronic",
    songs: ["Strobe", "Ghosts 'n' Stuff", "Raise Your Weapon"],
    image: "images/"
  },
  {
    name: "Avicii",
    genre: "Electronic",
    songs: ["Wake Me Up", "Levels", "Hey Brother"],
    image: "images/"
  },
  {
    name: "Marshmello",
    genre: "Electronic",
    songs: ["Alone", "Happier", "Friends"],
    image: "images/"
  },

  // Pop
  {
    name: "Taylor Swift",
    genre: "Pop",
    songs: ["All Too Well", "Shake It Off", "Love Story"],
    image: "images/"
  },
  {
    name: "Billie Eilish",
    genre: "Pop",
    songs: ["Bad Guy", "When The Party's Over", "Everything I Wanted"],
    image: "images/"
  },
  {
    name: "Ariana Grande",
    genre: "Pop",
    songs: ["7 Rings", "Thank U, Next", "No Tears Left To Cry"],
    image: "images/"
  },
  {
    name: "Dua Lipa",
    genre: "Pop",
    songs: ["Don't Start Now", "Levitating", "New Rules"],
    image: "images/"
  },
  {
    name: "Ed Sheeran",
    genre: "Pop",
    songs: ["Shape of You", "Perfect", "Thinking Out Loud"],
    image: "images/"
  },

  // Rock / Classic Rock
  {
    name: "Fleetwood Mac",
    genre: "Classic Rock",
    songs: ["Go Your Own Way", "Dreams", "The Chain"],
    image: "images/"
  },
  {
    name: "The Rolling Stones",
    genre: "Classic Rock",
    songs: ["Paint It Black", "Gimme Shelter", "Sympathy For The Devil"],
    image: "images/"
  },
  {
    name: "Led Zeppelin",
    genre: "Classic Rock",
    songs: ["Stairway to Heaven", "Whole Lotta Love", "Black Dog"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Queen",
    genre: "Classic Rock",
    songs: ["Bohemian Rhapsody", "Don't Stop Me Now", "We Will Rock You"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "The Beatles",
    genre: "Classic Rock",
    songs: ["Hey Jude", "Come Together", "Let It Be"],
    image: "https://via.placeholder.com/220"
  },

  // R&B / Soul
  {
    name: "The Weeknd",
    genre: "R&B",
    songs: ["Blinding Lights", "Save Your Tears", "The Hills"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Beyoncé",
    genre: "R&B",
    songs: ["Crazy In Love", "Formation", "Halo"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Frank Ocean",
    genre: "R&B",
    songs: ["Thinkin Bout You", "Nights", "Pyramids"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "SZA",
    genre: "R&B",
    songs: ["Good Days", "The Weekend", "Love Galore"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Miguel",
    genre: "R&B",
    songs: ["Adorn", "Sure Thing", "Coffee"],
    image: "https://via.placeholder.com/220"
  },

  // Metal / Heavy Metal
  {
    name: "Metallica",
    genre: "Metal",
    songs: ["Enter Sandman", "Master of Puppets", "Nothing Else Matters"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Iron Maiden",
    genre: "Metal",
    songs: ["The Trooper", "Run to the Hills", "Fear of the Dark"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Slipknot",
    genre: "Metal",
    songs: ["Psychosocial", "Duality", "Before I Forget"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "System of a Down",
    genre: "Metal",
    songs: ["Chop Suey!", "Toxicity", "B.Y.O.B."],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Black Sabbath",
    genre: "Metal",
    songs: ["Paranoid", "Iron Man", "War Pigs"],
    image: "https://via.placeholder.com/220"
  },

  // Indie / Folk
  {
    name: "Bon Iver",
    genre: "Indie/Folk",
    songs: ["Skinny Love", "Holocene", "Blood Bank"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Mumford & Sons",
    genre: "Indie/Folk",
    songs: ["I Will Wait", "The Cave", "Little Lion Man"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Vampire Weekend",
    genre: "Indie/Folk",
    songs: ["A-Punk", "Harmony Hall", "Cousins"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "Florence + The Machine",
    genre: "Indie/Folk",
    songs: ["Dog Days Are Over", "Shake It Out", "Hunger"],
    image: "https://via.placeholder.com/220"
  },
  {
    name: "The National",
    genre: "Indie/Folk",
    songs: ["I Need My Girl", "Bloodbuzz Ohio", "About Today"],
    image: "https://www.google.com/imgres?q=the%20nationa%20artist%20png&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F65%2FNatlArtist.png"
  },

  // Jazz
  {
    name: "Miles Davis",
    genre: "Jazz",
    songs: ["So What", "Freddie Freeloader", "Blue in Green"],
    image: "https://www.google.com/imgres?q=miles%20davis%20png&imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F572%2F743%2Fpng-clipart-jazz-musician-miles-monk-at-newport-miles-ahead-miles-miscellaneous-microphone.png"
  },
  {
    name: "John Coltrane",
    genre: "Jazz",
    songs: ["Giant Steps", "A Love Supreme", "Naima"],
    image: "https://www.google.com/imgres?q=john%20coltrane&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fgettyimages-1149694614-copy.jpg"
  },
  {
    name: "Ella Fitzgerald",
    genre: "Jazz",
    songs: ["Summertime", "Dream a Little Dream of Me", "Cheek to Cheek"],
    image: "images/ella.jfif"
  },
  {
    name: "Louis Armstrong",
    genre: "Jazz",
    songs: ["What a Wonderful World", "La Vie En Rose", "Stardust"],
    image: "images/arm/jfif"
  },
  {
    name: "Nina Simone",
    genre: "Jazz",
    songs: ["Feeling Good", "I Put a Spell on You", "Sinnerman"],
    image: "images/ninasimone.jfif"
  }
];

// Populate personalList once
function addAllArtistsToPersonalList() {
  for (let i = 0; i < artists.length; i++) {
    personalList.push({
      name: artists[i].name,
      genre: artists[i].genre,
      songs: artists[i].songs,
      image: artists[i].image
    });
  }
}

// Display up to FOUR artist boxes in a row
function displayArtistsForGenre(genre) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const matches = personalList.filter(artist => artist.genre === genre);
  const topFour = matches.slice(0, 4);

  if (topFour.length === 0) {
    resultsDiv.innerHTML = "<p style='color:#666'>No artists found for this genre.</p>";
    return;
  }

  topFour.forEach(artist => {
    const artistDiv = document.createElement("div");
    artistDiv.className = "artist";

    const imgEl = document.createElement("img");
    imgEl.src = artist.image;
    imgEl.alt = artist.name;

    const songListDiv = document.createElement("div");
    songListDiv.className = "song-list";
    songListDiv.innerHTML = `
      <h3>${artist.name}</h3>
      <ul>
        ${artist.songs.map(song => `<li>${song}</li>`).join("")}
      </ul>
    `;

    artistDiv.appendChild(imgEl);
    artistDiv.appendChild(songListDiv);
    resultsDiv.appendChild(artistDiv);
  });
}

// Display next three sub-genre boxes with hover listing artists
function displayNextThreeSubGenres(topGenres) {
  const otherGenresDiv = document.getElementById("otherGenres");
  otherGenresDiv.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    if (!topGenres[i]) break;
    const genreObj = topGenres[i];
    const genreName = genreObj.genre;

    const box = document.createElement("div");
    box.className = "genre-box";

    const label = document.createElement("div");
    label.className = "genre-label";
    label.textContent = genreName;

    const artistListDiv = document.createElement("div");
    artistListDiv.className = "artist-list";

    const artistsInThisGenre = personalList
      .filter(a => a.genre === genreName)
      .map(a => a.name);

    if (artistsInThisGenre.length === 0) {
      artistListDiv.innerHTML = `
        <h3>${genreName}</h3>
        <p style="font-size:0.9rem; color:#666;">No artists found.</p>
      `;
    } else {
      artistListDiv.innerHTML = `
        <h3>${genreName}</h3>
        <ul>
          ${artistsInThisGenre.map(name => `<li>${name}</li>`).join("")}
        </ul>
      `;
    }

    box.appendChild(label);
    box.appendChild(artistListDiv);
    otherGenresDiv.appendChild(box);
  }

  if (topGenres.length <= 1) {
    const note = document.createElement("p");
    note.style.color = "#666";
    note.textContent = "No additional sub-genres.";
    otherGenresDiv.appendChild(note);
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

  const mainGenreObj = topGenres[0];
  document.getElementById("mainGenre").textContent = mainGenreObj.genre;

  displayArtistsForGenre(mainGenreObj.genre);
  displayNextThreeSubGenres(topGenres);
}

document.addEventListener("DOMContentLoaded", doTheThing);
