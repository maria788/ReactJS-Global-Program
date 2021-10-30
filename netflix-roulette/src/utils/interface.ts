export interface Movie {
  id?: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface FormErrors {
  title?: string;
  release_date?: string;
  poster_path?: string;
  overview?: string;
  genres?: string;
  runtime?: string;
  vote_average?: string;
}

export interface FormData {
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  genres: string;
  runtime: number;
  vote_average: string;
}
