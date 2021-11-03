import { FormErrors, FormData, Movie } from "@utils/interface";
import { ErrorMessage, MovieToFieldName } from "@utils/constants";

const isUrlValid = (userInput: string) => {
  const res = userInput.match(
    /(http(s)?:\/\/.)?[-a-zA-Z0-9@:%._\+~#=]+\.[a-z]*\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

  return res !== null;
};

export const validate = (values: Movie) => {
  const errors: FormErrors = {};
  if (!values.title) {
    errors.title = ErrorMessage.REQUIRED;
  }
  if (!values.genres) {
    errors.genres = ErrorMessage.REQUIRED;
  }
  if (!values.overview) {
    errors.overview = ErrorMessage.REQUIRED;
  }
  if (values.vote_average && values.vote_average < 0) {
    errors.vote_average = ErrorMessage.NOT_VALID;
  }
  if (!values.poster_path) {
    errors.poster_path = ErrorMessage.REQUIRED;
  } else if (!isUrlValid(values.poster_path)) {
    errors.poster_path = ErrorMessage.NOT_VALID;
  }
  if (!values.runtime) {
    errors.runtime = ErrorMessage.REQUIRED;
  } else if (values.runtime <= 0) {
    errors.runtime = ErrorMessage.NOT_VALID;
  }

  return errors;
};

export const formMovieData = (movie: FormData) => {
  const result = {
    ...movie,
    [MovieToFieldName.GENRES]:
      typeof movie.genres === "string" ? [movie.genres] : movie.genres,
    [MovieToFieldName.VOTE_AVERAGE]: Number(movie.vote_average),
  };
  if (movie.vote_average === "") {
    delete result.vote_average;
  }
  return result;
};
