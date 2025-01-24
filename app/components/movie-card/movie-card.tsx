import { Movie } from "@/app/types/movie";
import { cn } from "@/app/utils/cn";
import { formatDate } from "@/app/utils/format-date";

type MovieCardProps = {
  movie: Movie;
};

type MovieDataRowProps = {
  label: string;
  data: string | number;
  className?: string;
};

const MovieDataRow = ({ data, label, className }: MovieDataRowProps) => {
  return (
    <div className={cn("flex gap-x-2", className)}>
      <div className="font-semibold">{label}: </div>
      <div>{data}</div>
    </div>
  );
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  const { original_title, overview, release_date, popularity } = movie;

  return (
    <div className="w-[600px] bg-blue-300 rounded-md p-4">
      <MovieDataRow label="Title" data={original_title} className="text-2xl" />
      <MovieDataRow label="Overview" data={overview} />
      <MovieDataRow
        label="Release Date"
        data={formatDate({ date: release_date })}
      />
      <MovieDataRow label="Popularity" data={popularity} />
    </div>
  );
};
