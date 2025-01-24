import { MoviePageView } from "@/app/components/movie-page-view/movie-page-view";
import { getMovieById } from "@/app/data-access/server/get-movie-by-id";
import { MovieDetail } from "@/app/types/movie";

type MoviePageParams = {
  params: { id: string };
};

export default async function MoviePage({ params }: MoviePageParams) {
  // console.log({ params });
  const id = params.id;

  // TODO: See if really need to handle this
  if (!id) {
    return <div>Error: no id</div>;
  }

  const res = await getMovieById(id);

  if (!res.ok) {
    return <div>Fail fetching movie list data</div>;
  }

  const resData: MovieDetail = await res.json();

  console.log({ resData });

  return <MoviePageView movieDetail={resData} />;
}
