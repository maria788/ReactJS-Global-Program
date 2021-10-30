export enum GenreType {
  ALL = "All",
  DOCUMENTARY = "Documentary",
  COMEDY = "Comedy",
  HORROR = "Horror",
  CRIME = "Crime",
}

export const GENRES = Object.values(GenreType);

export const FALLBACK_IMG_SRC = "../../../../../../../../assets/not_found.png";

export enum MovieToFieldName {
  TITLE = "title",
  POSTER_PATH = "poster_path",
  GENRES = "genres",
  RELEASE_DATE = "release_date",
  VOTE_AVERAGE = "vote_average",
  RUNTIME = "runtime",
  OVERVIEW = "overview",
}

export enum ErrorMessage {
  REQUIRED = "Required",
  NOT_VALID = "Not valid",
}
