// ./types.ts or another appropriate file
export interface RadarrMovieDetails {
    id: number | null;
    imdb_id: string;
    title: string;
    release_year: string;
    clean_title: string;
    director: string;
    rating: string;
    watches: number; // Add the watches property
}