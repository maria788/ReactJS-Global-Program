import * as React from "react";
import { useDispatch } from "react-redux";
import { AppLogo } from "@ui/AppLogo";
import { Movie } from "@utils/interface";
import { MovieVew } from "../MovieVew";
import { TopPanel } from "../../Header.styles";
import { setMovieToView } from "@store/actions";

interface MoviePanelProps {
  movie: Movie;
}

export const MoviePanel = ({ movie }: MoviePanelProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <TopPanel>
        <AppLogo />
        <img
          src="../../../../../../assets/Search_Button.png"
          width={29}
          height={30}
          alt="Search Button"
          onClick={() => dispatch(setMovieToView({ movie: null }))}
        />
      </TopPanel>
      <MovieVew movie={movie} />
    </>
  );
};
