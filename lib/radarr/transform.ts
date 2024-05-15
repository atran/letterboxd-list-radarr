import { LetterboxdMovieDetails } from "../letterboxd/movie-details";
import { RadarrMovieDetails } from "./types";

export const transformLetterboxdMovieToRadarr = (movie: LetterboxdMovieDetails): RadarrMovieDetails => {
    return {
        id: movie.tmdb ? Number.parseInt(movie.tmdb) || null : null,
        imdb_id: movie.imdb,
        title: movie.name,
        release_year: movie.published,
        clean_title: movie.slug,
        director: movie.director.join(', '), // Convert array to comma-separated string
        rating: movie.rating
    }
};