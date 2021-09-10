export enum GenreType {
    DOCUMENTARY = "Documentary",
    COMEDY = "Comedy",
    HORROR = "Horror",
    CRIME = "Crime",
    ALL = "All",
}

export const GENRES = [GenreType.ALL, GenreType.DOCUMENTARY, GenreType.COMEDY, GenreType.HORROR, GenreType.CRIME];

export const MOVIES = [
  {
    id: 181808,
    title: "Star Wars: The Last Jedi",
    tagline: "The Saga Continues",
    vote_average: 7.1,
    vote_count: 4732,
    release_date: "2017-12-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    budget: 200000000,
    revenue: 1325937250,
    genres: ["Fantasy", "Adventure", "Science Fiction"],
    runtime: 152,
  },
  {
    id: 272,
    title: "Batman Begins",
    tagline: "Evil fears the knight.",
    vote_average: 7.5,
    vote_count: 9138,
    release_date: "2005-06-10",
    poster_path:
      "https://image.tmdb.org/t/p/w500/dr6x4GyyegBWtinPBzipY02J2lV.jpg",
    overview:
      "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    budget: 150000000,
    revenue: 374218673,
    genres: ["Action", "Crime", "Drama"],
    runtime: 140,
  },
  {
    id: 354912,
    title: "Coco",
    tagline: "The celebration of a lifetime",
    vote_average: 7.8,
    vote_count: 3619,
    release_date: "2017-10-27",
    poster_path:
      "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    budget: 175000000,
    revenue: 700920729,
    genres: ["Adventure", "Comedy", "Family", "Animation"],
    runtime: 105,
  },
  {
    id: 206647,
    title: "Spectre",
    tagline: "A Plan No One Escapes",
    vote_average: 6.3,
    vote_count: 5402,
    release_date: "2015-10-26",
    poster_path:
      "https://image.tmdb.org/t/p/w500/hE24GYddaxB9MVZl1CaiI86M3kp.jpg",
    overview:
      "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    budget: 245000000,
    revenue: 880674609,
    genres: ["Action", "Adventure", "Crime"],
    runtime: 148,
  },
  {
    id: 270303,
    title: "It Follows",
    tagline: "It doesn't think, it doesn't feel, it doesn't give up",
    vote_average: 6.6,
    vote_count: 2420,
    release_date: "2014-11-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/4MrwJZr0R9LbyOgZqwLNmtzzxbu.jpg",
    overview:
      "For 19-year-old Jay, fall should be about school, boys and weekends out at the lake. But a seemingly innocent physical encounter turns sour and gives her the inescapable sense that someone, or something, is following her. Faced with this burden, Jay and her teenage friends must find a way to escape the horror that seems to be only a few steps behind.",
    budget: 2000000,
    revenue: 14674076,
    genres: ["Horror", "Thriller"],
    runtime: 100,
  },
  {
    id: 474753,
    title: "The China Hustle",
    tagline: "There are no good guys in this story.",
    vote_average: 6.5,
    vote_count: 5,
    release_date: "2018-03-30",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3k6a2ZshjaFdN23bUm3kRdxr5Ny.jpg",
    overview:
      "An unsettling and eye-opening Wall Street horror story about Chinese companies, the American stock market, and the opportunistic greed behind the biggest heist you've never heard of.",
    budget: 0,
    revenue: 0,
    genres: ["Documentary"],
    runtime: 82,
  },
  {
    id: 16290,
    title: "Jackass 3D",
    tagline: "Don't try this at home",
    vote_average: 6.4,
    vote_count: 509,
    release_date: "2010-10-15",
    poster_path:
      "https://image.tmdb.org/t/p/w500/5j9VFEVjYn0FtqZGqDcmMPYSVoY.jpg",
    overview:
      "Jackass 3D is a 3-D film and the third movie of the Jackass series. It follows the same premise as the first two movies, as well as the TV series. It is a compilation of various pranks, stunts and skits. Before the movie begins, a brief introduction is made by Beavis and Butt-head explaining the 3D technology behind the movie. The intro features the cast lining up and then being attacked by various objects in slow-motion. The movie marks the 10th anniversary of the franchise, started in 2000.",
    budget: 20000000,
    revenue: 117224271,
    genres: ["Comedy", "Documentary", "Action"],
    runtime: 94,
  },
];