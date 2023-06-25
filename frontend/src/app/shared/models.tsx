export interface Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  genre: string;
  posterUrl: string;
  rating: number;
  releaseYear: number;
  reviewIds: Array<string>;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface Cinemas {
  id: string;
  name: string;
  movieIds: string[];
}