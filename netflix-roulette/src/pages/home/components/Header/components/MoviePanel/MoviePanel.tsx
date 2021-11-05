import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { AppLogo } from "@ui/AppLogo";
import { Movie } from "@utils/interface";
import { MovieVew } from "../MovieVew";
import { TopPanel } from "../../Header.styles";
import { useMoviesSearchParams } from "@hooks";

interface MoviePanelProps {
  movie: Movie;
}

export const MoviePanel = ({ movie }: MoviePanelProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesSearchParams = useMoviesSearchParams(searchParams);

  const handleClose = () => {
    const { movieId, ...data } = moviesSearchParams;
    setSearchParams(data);
  };

  return (
    <>
      <TopPanel>
        <AppLogo />
        <img
          src="../../../../../../assets/Search_Button.png"
          width={29}
          height={30}
          alt="Search Button"
          onClick={handleClose}
        />
      </TopPanel>
      <MovieVew movie={movie} />
    </>
  );
};
