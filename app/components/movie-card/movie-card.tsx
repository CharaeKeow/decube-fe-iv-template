import { Movie } from "@/app/types/movie";
import { formatDate } from "@/app/utils/format-date";
import Link from "next/link";
import { MovieDataRow } from "../movie-data-row/movie-data-row";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { original_title, overview, release_date, popularity, id } = movie;

  // TODO: Revisit this whether it's a best practice (i forogt)
  return (
    <Link
      href={`/movie/${id}`}
      className="w-[600px] bg-blue-300 rounded-md p-4"
    >
      <MovieDataRow label="Title" data={original_title} className="text-2xl" />
      <MovieDataRow label="Overview" data={overview} />
      <MovieDataRow
        label="Release Date"
        data={formatDate({ date: release_date })}
      />
      <MovieDataRow label="Popularity" data={popularity} />
    </Link>
  );
};
