import { StyledSection, StyledSearchBar } from "../styles";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <form>
        <label htmlFor="spotify-search">
          Search:{" "}
          <span className="visually-hidden">
            Enter A Song, Album, or Artist
          </span>
        </label>
        <input
          id="spotify-search"
          placeholder="Enter A Song, Album, or Artist"
        />
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
