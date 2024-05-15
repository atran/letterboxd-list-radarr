export interface RadarrMovieDetails {
    id: number | null;
    imdb_id: string;
    title: string;
    release_year: string;
    clean_title: string;
    director: string; // Single string after joining array elements
    rating: string;
}
