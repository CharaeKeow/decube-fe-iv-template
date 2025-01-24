// TODO: Create wrapper for fetch
export const getMovieList = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/3/movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
  });
};
