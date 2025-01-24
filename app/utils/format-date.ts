type FormatDateParams = {
  date: string;
};

// TODO: Enhance this to process more date style and different timezone
export const formatDate = ({ date }: FormatDateParams) => {
  const dateObj = new Date(date);

  return new Intl.DateTimeFormat("en-MY", {
    dateStyle: "long",
    // timeStyle: "long",
  }).format(dateObj);
};
