import * as React from "react";
import { connect } from "react-redux";
import { AppLogo } from "@ui/AppLogo";
import { Movie } from "@utils/interface";
import { MovieVew } from "../MovieVew";
import { TopPanel } from "../../Header.styles";
import { setMovieToView } from "@store/actions";
import {
  SetMovieToEditOrView,
  SetMovieToEditOrViewPayload,
} from "@store/interfaces";

interface MoviePanelProps {
  movie: Movie;
  setMovieToView: (
    payload: SetMovieToEditOrViewPayload
  ) => SetMovieToEditOrView;
}

const MoviePanelComponent = ({ movie, setMovieToView }: MoviePanelProps) => (
  <>
    <TopPanel>
      <AppLogo />
      <img
        src="../../../../../../assets/Search_Button.png"
        width={29}
        height={30}
        alt="Search Button"
        onClick={() => setMovieToView({ movie: null })}
      />
    </TopPanel>
    <MovieVew movie={movie} />
  </>
);

const mapDispatchToProps = {
  setMovieToView,
};

export const MoviePanel = connect(
  null,
  mapDispatchToProps
)(MoviePanelComponent);
