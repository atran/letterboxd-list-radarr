import { LetterboxdMovieDetails } from "../letterboxd/movie-details";
import { RadarrMovieDetails } from "./types";

export const transformLetterboxdMovieToRadarr = (movie: LetterboxdMovieDetails): RadarrMovieDetails => {
    return {
        id: movie.tmdb ? Number.parseInt(movie.tmdb) : null,
        imdb_id: movie.imdb,
        title: movie.name,
        release_year: movie.published,
        clean_title: movie.slug,
        director: Array.isArray(movie.director) ? movie.director.join(', ') : movie.director,
        rating: movie.rating
    }
};