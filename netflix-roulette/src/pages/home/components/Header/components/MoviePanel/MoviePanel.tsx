import * as React from "react";
import { AppLogo } from "@ui/AppLogo";
import { Movie } from "@utils/interface";
import { MovieVew } from "../MovieVew";
import { TopPanel } from "../../Header.styles";
import { useHomePageData } from "@data/HomePageDataProvider";

interface MoviePanel {
  movie: Movie;
}

export const MoviePanel = ({ movie }: MoviePanel) => {
  const { setMovieToView } = useHomePageData();

  return (
    <>
      <TopPanel>
        <AppLogo />
        <img
          src="../../../../../../assets/Search_Button.png"
          width={29}
          height={30}
          alt="Search Button"
          onClick={() => setMovieToView(null)}
        />
      </TopPanel>
      <MovieVew movie={movie} />
    </>
  );
};
