import * as React from "react";
import { StyledButton, StyledTextField } from "./SearchBar.styles";
import { Box } from "@material-ui/core";

interface CounterProps {
  handleSearch: (searchValue: string) => void;
}

interface CounterState {
  searchValue: string;
}

export class SearchBar extends React.Component<CounterProps, CounterState> {
  state = { searchValue: "" };

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    return (
      <Box display="flex" alignItems="center">
        <StyledTextField
          variant="filled"
          type="search"
          label="What do you want to watch?"
          onChange={this.handleInputChange.bind(this)}
          InputLabelProps={{
            style: { color: "#fff" },
          }}
          InputProps={{
            style: { color: "#fff" },
          }}
        />
        <Box ml={3}>
          <StyledButton
            variant="outlined"
            onClick={() => this.props.handleSearch(this.state.searchValue)}
          >
            Search
          </StyledButton>
        </Box>
      </Box>
    );
  }
}
