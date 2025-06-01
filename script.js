var personalList = [];

var scores = [
  { genre: "Alternative Rock", score: 0 },
  { genre: "Hip-Hop", score: 0 },
  { genre: "Electronic", score: 0 },
  { genre: "Pop", score: 0 },
  { genre: "Classic Rock", score: 0 },
  { genre: "R&B", score: 0 },
  { genre: "Metal", score: 0 },
  { genre: "Indie/Folk", score: 0 },
  { genre: "Jazz", score: 0 } 
]

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

function addToPersonalList() {
  for (let i = 0; i < artists.length; i++) {
    personalList.push({
      name: artists[i].name,
      genre: artists[i].genre,
      songs: artists[i].songs
    });
  }
}
//Appends artists name, genre, and songs into personalList

function removeFromPersonalList(artistName) {
  personalList = personalList.filter(artist => artist.name !== artistName);
}

function getAnswer() {
  const form = document.getElementById("musicQuiz");
  const formData = new FormData(form);
  const answers = [];

  formData.forEach((value) => {
    answers.push(String(value));
  });

  return answers;
}

function cullPersonalList(answers) {
  scores.forEach(g => g.score = 0);

  for (let i = 0; i < personalList.length; i++) {
    const artist = personalList[i];
    if (answers.includes(artist.genre)) {
      const genre = scores.find(g => g.genre === artist.genre);
      if (genre) genre.score++;
    }
  }
  return scores;
}

let mGenre = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i].score > topGenre.score) {
    topGenre = scores[i];
  }
}

function results(answers) {
  const scores = cullPersonalList(answers);
  const topGenres = scores.sort((a, b) => b.score - a.score).slice(0, 4);
  localStorage.setItem("topGenres", JSON.stringify(topGenres));
  window.location.href = "quizResult.html";
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

function submitQuiz(event) {
  if (event) event.preventDefault();
  personalList = [];
  addToPersonalList();
  const answers = getAnswer();
  results(answers);
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("musicQuiz");
  if (form) {
    form.addEventListener("submit", submitQuiz);
  }
});

function resetQuiz() {
  const form = document.getElementById("musicQuiz");
  form.reset();
  document.getElementById("results").innerHTML = "";
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
  localStorage.removeItem('topGenres');
}


document.addEventListener("DOMContentLoaded", function() {
  const imagePaths = [
    "images/note1.png",
    "images/note2.png",
    "images/note3.png"
  ];

  const container = document.getElementById("image-container");
  const usedPositions = [];
  const MIN_DISTANCE = 100; // in pixels

  function isTooClose(x, y) {
    return usedPositions.some(pos => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < MIN_DISTANCE;
    });
  }

  imagePaths.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "floating-image";

    let x, y;
    let attempts = 0;

    // Try 50 times to find a non-clumped position
    do {
      x = Math.random() * (window.innerWidth - 100); // subtract image width
      y = Math.random() * (window.innerHeight - 100);
      attempts++;
    } while (isTooClose(x, y) && attempts < 50);

    usedPositions.push({ x, y });

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    container.appendChild(img);
  });
});

