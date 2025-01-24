import { Movie } from "@/app/types/movie";
import { MovieCard } from "../movie-card/movie-card";

type HomePageViewProps = {
  movies: Movie[];
};

export const HomePageView = ({ movies }: HomePageViewProps) => {
  return (
    <div className="w-full">
      <div className="w-[1020px] items-center flex flex-col gap-y-2 mx-auto">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
};
