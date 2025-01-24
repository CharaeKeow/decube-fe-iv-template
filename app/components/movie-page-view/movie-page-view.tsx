import { MovieDetail } from "@/app/types/movie";
import { MovieDataRow } from "../movie-data-row/movie-data-row";
import { formatDate } from "@/app/utils/format-date";

type MoviePageViewProps = {
  movieDetail: MovieDetail;
};

export const MoviePageView = ({ movieDetail }: MoviePageViewProps) => {
  const {
    original_title,
    status,
    release_date,
    popularity,
    overview,
    homepage,
  } = movieDetail;

  return (
    <div className="w-full">
      <div className="w-[600px] bg-blue-300 rounded-md p-4 mx-auto mt-10">
        <MovieDataRow data={original_title} label="Original Title" />
        <MovieDataRow data={overview} label="Overview" />
        <MovieDataRow data={status} label="Status" />
        <MovieDataRow
          data={formatDate({ date: release_date })}
          label="Released Date"
        />
        <MovieDataRow data={popularity} label="Popularity" />
        {/* TODO: Make this as link */}
        <MovieDataRow data={homepage} label="Homepage" />
      </div>
    </div>
  );
};
