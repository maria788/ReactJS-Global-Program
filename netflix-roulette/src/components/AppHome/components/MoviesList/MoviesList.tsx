import * as React from "react";
import { List, ListItem } from "@material-ui/core";
import { Movie } from "../../AppHome";

interface MoviesListProps {
  movies: Movie[];
}

export class MoviesList extends React.Component<MoviesListProps, {}> {
  render() {
    return (
      <List component="ul">
        {this.props.movies.map((movie) => (
          <ListItem key={movie.title}>{movie.title}</ListItem>
        ))}
      </List>
    );
  }
}
