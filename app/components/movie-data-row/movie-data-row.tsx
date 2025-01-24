import { cn } from "@/app/utils/cn";

type MovieDataRowProps = {
  label: string;
  data: string | number;
  className?: string;
};

export const MovieDataRow = ({ data, label, className }: MovieDataRowProps) => {
  return (
    <div className={cn("flex gap-x-2", className)}>
      <div className="font-semibold">{label}: </div>
      <div>{data}</div>
    </div>
  );
};
