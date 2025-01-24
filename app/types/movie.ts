// "adult": false,
// "backdrop_path": "/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg",
// "genre_ids": [
//   28,
//   878,
//   35,
//   10751
// ],
// "id": 939243,
// "original_language": "en",
// "original_title": "Sonic the Hedgehog 3",
// "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
// "popularity": 6277.745,
// "poster_path": "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
// "release_date": "2024-12-19",
// "title": "Sonic the Hedgehog 3",
// "video": false,
// "vote_average": 7.723,
// "vote_count": 849

export type Movie = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
};
