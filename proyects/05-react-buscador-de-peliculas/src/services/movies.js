const API_KEY = "48962f91";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const respone = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
    console.log(respone);
    const json = await respone.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error fetching movies");
  }
};
