import * as React from "react";
import { Movie } from "@utils/interface";
import { GenreType, MOVIES } from "@utils/constants";

export type HomePageContextProps = {
  movies: Movie[];
  setMovies: (filteredMovies: Movie[]) => void;
  selectedGenre: GenreType;
  setSelectedGenre: (selectedGenre: GenreType) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  isAddMovieDialogVisible: boolean;
  setIsAddMovieDialogVisible: (isMovieDetailsDialogVisible: boolean) => void;
  movieToEdit: Movie;
  setMovieToEdit: (movieToEdit: Movie) => void;
  movieToDelete: Movie;
  setMovieToDelete: (movieToEdit: Movie) => void;
  movieToView: Movie;
  setMovieToView: (movieToView: Movie) => void;
};

export const HomePageContext = React.createContext<HomePageContextProps>(
  {} as any
);

export const HomePageDataProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [searchText, setSearchText] = React.useState<string>("");
  const [selectedGenre, setSelectedGenre] = React.useState<GenreType>(
    GenreType.ALL
  );
  const [isAddMovieDialogVisible, setIsAddMovieDialogVisible] =
    React.useState(false);
  const [movieToEdit, setMovieToEdit] = React.useState<Movie>(null);
  const [movieToDelete, setMovieToDelete] = React.useState<Movie>(null);
  const [movieToView, setMovieToView] = React.useState<Movie>(null);

  React.useEffect(() => setMovies(MOVIES), []);

  const context = React.useMemo(
    () => ({
      movies,
      setMovies,
      selectedGenre,
      setSelectedGenre,
      movieToView,
      setMovieToView,
      searchText,
      setSearchText,
      isAddMovieDialogVisible,
      setIsAddMovieDialogVisible,
      movieToEdit,
      setMovieToEdit,
      movieToDelete,
      setMovieToDelete,
    }),
    [
      movies,
      setMovies,
      selectedGenre,
      setSelectedGenre,
      movieToView,
      setMovieToView,
      searchText,
      setSearchText,
      isAddMovieDialogVisible,
      setIsAddMovieDialogVisible,
      movieToEdit,
      setMovieToEdit,
      movieToDelete,
      setMovieToDelete,
    ]
  );

  return (
    <HomePageContext.Provider value={context}>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageData = (): HomePageContextProps => {
  const context = React.useContext(HomePageContext);
  if (context === undefined) {
    throw new Error("useHomePageData must be used within an AppDataContext");
  }

  return context;
};
