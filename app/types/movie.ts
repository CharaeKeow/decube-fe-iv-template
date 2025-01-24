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

export type MovieDetail = Movie & {
  status: string;
  homepage: string;
  budget: number;
};
