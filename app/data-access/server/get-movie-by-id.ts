// TODO: Create wrapper for fetch
export const getMovieById = async (movieId: string) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/3/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
};
