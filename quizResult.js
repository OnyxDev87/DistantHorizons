// var personalList = [];

// const artists = [
//   // Alternative Rock
//   {
//     name: "Radiohead",
//     genre: "Alternative Rock",
//     songs: ["Paranoid Android", "Karma Police", "Everything In Its Right Place"]
//   },
//   {
//     name: "Arctic Monkeys",
//     genre: "Alternative Rock",
//     songs: ["Do I Wanna Know?", "R U Mine?", "505"]
//   },
//   {
//     name: "The Strokes",
//     genre: "Alternative Rock",
//     songs: ["Last Nite", "Someday", "Reptilia"]
//   },
//   {
//     name: "Muse",
//     genre: "Alternative Rock",
//     songs: ["Supermassive Black Hole", "Uprising", "Starlight"]
//   },
//   {
//     name: "Foo Fighters",
//     genre: "Alternative Rock",
//     songs: ["Everlong", "The Pretender", "Best of You"]
//   },

//   // Hip-Hop / Rap
//   {
//     name: "Kendrick Lamar",
//     genre: "Hip-Hop",
//     songs: ["HUMBLE.", "Alright", "DNA."]
//   },
//   {
//     name: "J. Cole",
//     genre: "Hip-Hop",
//     songs: ["No Role Modelz", "Wet Dreamz", "Middle Child"]
//   },
//   {
//     name: "Drake",
//     genre: "Hip-Hop",
//     songs: ["God's Plan", "In My Feelings", "Hotline Bling"]
//   },
//   {
//     name: "Cardi B",
//     genre: "Hip-Hop",
//     songs: ["Bodak Yellow", "I Like It", "WAP"]
//   },
//   {
//     name: "Nicki Minaj",
//     genre: "Hip-Hop",
//     songs: ["Super Bass", "Anaconda", "Starships"]
//   },

//   // Electronic / EDM
//   {
//     name: "Daft Punk",
//     genre: "Electronic",
//     songs: ["One More Time", "Around The World", "Get Lucky"]
//   },
//   {
//     name: "Calvin Harris",
//     genre: "Electronic",
//     songs: ["Summer", "Feel So Close", "This Is What You Came For"]
//   },
//   {
//     name: "Deadmau5",
//     genre: "Electronic",
//     songs: ["Strobe", "Ghosts 'n' Stuff", "Raise Your Weapon"]
//   },
//   {
//     name: "Avicii",
//     genre: "Electronic",
//     songs: ["Wake Me Up", "Levels", "Hey Brother"]
//   },
//   {
//     name: "Marshmello",
//     genre: "Electronic",
//     songs: ["Alone", "Happier", "Friends"]
//   },

//   // Pop
//   {
//     name: "Taylor Swift",
//     genre: "Pop",
//     songs: ["All Too Well", "Shake It Off", "Love Story"]
//   },
//   {
//     name: "Billie Eilish",
//     genre: "Pop",
//     songs: ["Bad Guy", "When The Party's Over", "Everything I Wanted"]
//   },
//   {
//     name: "Ariana Grande",
//     genre: "Pop",
//     songs: ["7 Rings", "Thank U, Next", "No Tears Left To Cry"]
//   },
//   {
//     name: "Dua Lipa",
//     genre: "Pop",
//     songs: ["Don't Start Now", "Levitating", "New Rules"]
//   },
//   {
//     name: "Ed Sheeran",
//     genre: "Pop",
//     songs: ["Shape of You", "Perfect", "Thinking Out Loud"]
//   },

//   // Rock / Classic Rock
//   {
//     name: "Fleetwood Mac",
//     genre: "Classic Rock",
//     songs: ["Go Your Own Way", "Dreams", "The Chain"]
//   },
//   {
//     name: "The Rolling Stones",
//     genre: "Classic Rock",
//     songs: ["Paint It Black", "Gimme Shelter", "Sympathy For The Devil"]
//   },
//   {
//     name: "Led Zeppelin",
//     genre: "Classic Rock",
//     songs: ["Stairway to Heaven", "Whole Lotta Love", "Black Dog"]
//   },
//   {
//     name: "Queen",
//     genre: "Classic Rock",
//     songs: ["Bohemian Rhapsody", "Don't Stop Me Now", "We Will Rock You"]
//   },
//   {
//     name: "The Beatles",
//     genre: "Classic Rock",
//     songs: ["Hey Jude", "Come Together", "Let It Be"]
//   },

//   // R&B / Soul
//   {
//     name: "The Weeknd",
//     genre: "R&B",
//     songs: ["Blinding Lights", "Save Your Tears", "The Hills"]
//   },
//   {
//     name: "Beyoncé",
//     genre: "R&B",
//     songs: ["Crazy In Love", "Formation", "Halo"]
//   },
//   {
//     name: "Frank Ocean",
//     genre: "R&B",
//     songs: ["Thinkin Bout You", "Nights", "Pyramids"]
//   },
//   {
//     name: "SZA",
//     genre: "R&B",
//     songs: ["Good Days", "The Weekend", "Love Galore"]
//   },
//   {
//     name: "Miguel",
//     genre: "R&B",
//     songs: ["Adorn", "Sure Thing", "Coffee"]
//   },

//   // Metal / Heavy Metal
//   {
//     name: "Metallica",
//     genre: "Metal",
//     songs: ["Enter Sandman", "Master of Puppets", "Nothing Else Matters"]
//   },
//   {
//     name: "Iron Maiden",
//     genre: "Metal",
//     songs: ["The Trooper", "Run to the Hills", "Fear of the Dark"]
//   },
//   {
//     name: "Slipknot",
//     genre: "Metal",
//     songs: ["Psychosocial", "Duality", "Before I Forget"]
//   },
//   {
//     name: "System of a Down",
//     genre: "Metal",
//     songs: ["Chop Suey!", "Toxicity", "B.Y.O.B."]
//   },
//   {
//     name: "Black Sabbath",
//     genre: "Metal",
//     songs: ["Paranoid", "Iron Man", "War Pigs"]
//   },

//   // Indie / Folk
//   {
//     name: "Bon Iver",
//     genre: "Indie/Folk",
//     songs: ["Skinny Love", "Holocene", "Blood Bank"]
//   },
//   {
//     name: "Mumford & Sons",
//     genre: "Indie/Folk",
//     songs: ["I Will Wait", "The Cave", "Little Lion Man"]
//   },
//   {
//     name: "Vampire Weekend",
//     genre: "Indie/Folk",
//     songs: ["A-Punk", "Harmony Hall", "Cousins"]
//   },
//   {
//     name: "Florence + The Machine",
//     genre: "Indie/Folk",
//     songs: ["Dog Days Are Over", "Shake It Out", "Hunger"]
//   },
//   {
//     name: "The National",
//     genre: "Indie/Folk",
//     songs: ["I Need My Girl", "Bloodbuzz Ohio", "About Today"]
//   },

//   // Jazz
//   {
//     name: "Miles Davis",
//     genre: "Jazz",
//     songs: ["So What", "Freddie Freeloader", "Blue in Green"]
//   },
//   {
//     name: "John Coltrane",
//     genre: "Jazz",
//     songs: ["Giant Steps", "A Love Supreme", "Naima"]
//   },
//   {
//     name: "Ella Fitzgerald",
//     genre: "Jazz",
//     songs: ["Summertime", "Dream a Little Dream of Me", "Cheek to Cheek"]
//   },
//   {
//     name: "Louis Armstrong",
//     genre: "Jazz",
//     songs: ["What a Wonderful World", "La Vie En Rose", "Stardust"]
//   },
//   {
//     name: "Nina Simone",
//     genre: "Jazz",
//     songs: ["Feeling Good", "I Put a Spell on You", "Sinnerman"]
//   }
// ];

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

const personalList = [];
const artists = [
  // Alternative Rock
  {
    name: "Radiohead",
    genre: "Alternative Rock",
    songs: ["Paranoid Android", "Karma Police", "Everything In Its Right Place"]
  },
  {
    name: "Arctic Monkeys",
    genre: "Alternative Rock",
    songs: ["Do I Wanna Know?", "R U Mine?", "505"]
  },
  {
    name: "The Strokes",
    genre: "Alternative Rock",
    songs: ["Last Nite", "Someday", "Reptilia"]
  },
  {
    name: "Muse",
    genre: "Alternative Rock",
    songs: ["Supermassive Black Hole", "Uprising", "Starlight"]
  },
  {
    name: "Foo Fighters",
    genre: "Alternative Rock",
    songs: ["Everlong", "The Pretender", "Best of You"]
  },

  // Hip-Hop / Rap
  {
    name: "Kendrick Lamar",
    genre: "Hip-Hop",
    songs: ["HUMBLE.", "Alright", "DNA."]
  },
  {
    name: "J. Cole",
    genre: "Hip-Hop",
    songs: ["No Role Modelz", "Wet Dreamz", "Middle Child"]
  },
  {
    name: "Drake",
    genre: "Hip-Hop",
    songs: ["God's Plan", "In My Feelings", "Hotline Bling"]
  },
  {
    name: "Cardi B",
    genre: "Hip-Hop",
    songs: ["Bodak Yellow", "I Like It", "WAP"]
  },
  {
    name: "Nicki Minaj",
    genre: "Hip-Hop",
    songs: ["Super Bass", "Anaconda", "Starships"]
  },

  // Electronic / EDM
  {
    name: "Daft Punk",
    genre: "Electronic",
    songs: ["One More Time", "Around The World", "Get Lucky"]
  },
  {
    name: "Calvin Harris",
    genre: "Electronic",
    songs: ["Summer", "Feel So Close", "This Is What You Came For"]
  },
  {
    name: "Deadmau5",
    genre: "Electronic",
    songs: ["Strobe", "Ghosts 'n' Stuff", "Raise Your Weapon"]
  },
  {
    name: "Avicii",
    genre: "Electronic",
    songs: ["Wake Me Up", "Levels", "Hey Brother"]
  },
  {
    name: "Marshmello",
    genre: "Electronic",
    songs: ["Alone", "Happier", "Friends"]
  },

  // Pop
  {
    name: "Taylor Swift",
    genre: "Pop",
    songs: ["All Too Well", "Shake It Off", "Love Story"]
  },
  {
    name: "Billie Eilish",
    genre: "Pop",
    songs: ["Bad Guy", "When The Party's Over", "Everything I Wanted"]
  },
  {
    name: "Ariana Grande",
    genre: "Pop",
    songs: ["7 Rings", "Thank U, Next", "No Tears Left To Cry"]
  },
  {
    name: "Dua Lipa",
    genre: "Pop",
    songs: ["Don't Start Now", "Levitating", "New Rules"]
  },
  {
    name: "Ed Sheeran",
    genre: "Pop",
    songs: ["Shape of You", "Perfect", "Thinking Out Loud"]
  },

  // Rock / Classic Rock
  {
    name: "Fleetwood Mac",
    genre: "Classic Rock",
    songs: ["Go Your Own Way", "Dreams", "The Chain"]
  },
  {
    name: "The Rolling Stones",
    genre: "Classic Rock",
    songs: ["Paint It Black", "Gimme Shelter", "Sympathy For The Devil"]
  },
  {
    name: "Led Zeppelin",
    genre: "Classic Rock",
    songs: ["Stairway to Heaven", "Whole Lotta Love", "Black Dog"]
  },
  {
    name: "Queen",
    genre: "Classic Rock",
    songs: ["Bohemian Rhapsody", "Don't Stop Me Now", "We Will Rock You"]
  },
  {
    name: "The Beatles",
    genre: "Classic Rock",
    songs: ["Hey Jude", "Come Together", "Let It Be"]
  },

  // R&B / Soul
  {
    name: "The Weeknd",
    genre: "R&B",
    songs: ["Blinding Lights", "Save Your Tears", "The Hills"]
  },
  {
    name: "Beyoncé",
    genre: "R&B",
    songs: ["Crazy In Love", "Formation", "Halo"]
  },
  {
    name: "Frank Ocean",
    genre: "R&B",
    songs: ["Thinkin Bout You", "Nights", "Pyramids"]
  },
  {
    name: "SZA",
    genre: "R&B",
    songs: ["Good Days", "The Weekend", "Love Galore"]
  },
  {
    name: "Miguel",
    genre: "R&B",
    songs: ["Adorn", "Sure Thing", "Coffee"]
  },

  // Metal / Heavy Metal
  {
    name: "Metallica",
    genre: "Metal",
    songs: ["Enter Sandman", "Master of Puppets", "Nothing Else Matters"]
  },
  {
    name: "Iron Maiden",
    genre: "Metal",
    songs: ["The Trooper", "Run to the Hills", "Fear of the Dark"]
  },
  {
    name: "Slipknot",
    genre: "Metal",
    songs: ["Psychosocial", "Duality", "Before I Forget"]
  },
  {
    name: "System of a Down",
    genre: "Metal",
    songs: ["Chop Suey!", "Toxicity", "B.Y.O.B."]
  },
  {
    name: "Black Sabbath",
    genre: "Metal",
    songs: ["Paranoid", "Iron Man", "War Pigs"]
  },

  // Indie / Folk
  {
    name: "Bon Iver",
    genre: "Indie/Folk",
    songs: ["Skinny Love", "Holocene", "Blood Bank"]
  },
  {
    name: "Mumford & Sons",
    genre: "Indie/Folk",
    songs: ["I Will Wait", "The Cave", "Little Lion Man"]
  },
  {
    name: "Vampire Weekend",
    genre: "Indie/Folk",
    songs: ["A-Punk", "Harmony Hall", "Cousins"]
  },
  {
    name: "Florence + The Machine",
    genre: "Indie/Folk",
    songs: ["Dog Days Are Over", "Shake It Out", "Hunger"]
  },
  {
    name: "The National",
    genre: "Indie/Folk",
    songs: ["I Need My Girl", "Bloodbuzz Ohio", "About Today"]
  },

  // Jazz
  {
    name: "Miles Davis",
    genre: "Jazz",
    songs: ["So What", "Freddie Freeloader", "Blue in Green"]
  },
  {
    name: "John Coltrane",
    genre: "Jazz",
    songs: ["Giant Steps", "A Love Supreme", "Naima"]
  },
  {
    name: "Ella Fitzgerald",
    genre: "Jazz",
    songs: ["Summertime", "Dream a Little Dream of Me", "Cheek to Cheek"]
  },
  {
    name: "Louis Armstrong",
    genre: "Jazz",
    songs: ["What a Wonderful World", "La Vie En Rose", "Stardust"]
  },
  {
    name: "Nina Simone",
    genre: "Jazz",
    songs: ["Feeling Good", "I Put a Spell on You", "Sinnerman"]
  }
];

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
