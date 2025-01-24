// TODO: Think better name and where to put this

import { Movie } from "./movie";

export type GetMovie200Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
