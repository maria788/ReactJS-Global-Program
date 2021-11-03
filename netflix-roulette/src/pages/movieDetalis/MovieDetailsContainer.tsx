import * as React from "react";
import { Formik } from "formik";
import {
  addMovie,
  editMovie,
  setIsAddMovieDialogVisible,
  setMovieToEdit,
} from "@store/actions";
import { MovieDetails } from "./MovieDetails";
import { formMovieData, validate } from "./utils";
import { FormData } from "@utils/interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers";

export const MovieDetailsContainer = () => {
  const dispatch = useDispatch();
  const { isAddMovieDialogVisible, movieToEdit } = useSelector(
    ({ appState }: RootState) => appState
  );
  const handleDialogClose = React.useCallback(() => {
    isAddMovieDialogVisible &&
      dispatch(setIsAddMovieDialogVisible({ isAddMovieDialogVisible: false }));
    movieToEdit && dispatch(setMovieToEdit({ movie: null }));
  }, [isAddMovieDialogVisible, movieToEdit]);

  const onSubmit = (values: FormData) => {
    const payload = { movie: formMovieData(values) };
    movieToEdit ? dispatch(editMovie(payload)) : dispatch(addMovie(payload));
  };

  return (
    (isAddMovieDialogVisible || movieToEdit) && (
      <Formik
        initialValues={movieToEdit || {}}
        onSubmit={onSubmit}
        validate={validate}
        validateOnMount
      >
        <MovieDetails
          handleDialogClose={handleDialogClose}
          movieToEdit={movieToEdit}
        />
      </Formik>
    )
  );
};
