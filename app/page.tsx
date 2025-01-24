import { HomePageView } from "./components/homepage-view/homepage-view";
import { getMovieList } from "./data-access/server/get-movie-list";
import { GetMovie200Response } from "./types/api-response";

export default async function HomePage() {
  // Fetch movie list
  const res = await getMovieList();

  if (!res.ok) {
    return <div>Fail fetching movie list data</div>;
  }

  const resData: GetMovie200Response = await res.json();

  const movies = resData.results;

  // console.log({ movies });

  return <HomePageView movies={movies} />;
}
