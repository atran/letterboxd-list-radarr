import { LetterboxdMovieDetails } from "../letterboxd/movie-details";
import { RadarrMovieDetails } from "./types";

// Extract watchers from a string
const extractWatchers = (val?: string): number => {
    if (!val) {
        return 0;
    }
    const match = val.match(/Watched by ([\d,]+)&nbsp;members/);
    if (match && match[1]) {
        // Remove commas and convert to integer
        return parseInt(match[1].replace(/,/g, ''), 10);
    }
    return 0;
};

export const transformLetterboxdMovieToRadarr = (movie: LetterboxdMovieDetails): RadarrMovieDetails => {
    return {
        id: movie.tmdb ? Number.parseInt(movie.tmdb) || null : null,
        imdb_id: movie.imdb,
        title: movie.name,
        release_year: movie.published,
        clean_title: movie.slug,
        director: movie.director.join(', '), // Convert array to comma-separated string
        rating: movie.rating,
        watches: extractWatchers(movie.watches.toString()) // Convert number to string for extraction
    };
};
