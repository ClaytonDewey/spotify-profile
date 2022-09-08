import { useState, useEffect, useCallback } from "react";
import { SectionWrapper, TrackList, Loader } from "../components";
import { StyledHeader, StyledSearchBar } from "../styles";
import { catchErrors } from "../utils";
import { search } from "../spotify";

const CreatePlaylist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(undefined);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { data } = await search(searchTerm);
      setSearchResults(data);
    },
    [searchTerm]
  );

  useEffect(() => {
    catchErrors(handleSubmit());
  }, [handleSubmit]);

  if (searchResults) {
    console.log(searchResults.tracks.items);
  }

  return (
    <>
      <StyledHeader>
        <StyledSearchBar>
          <div className="header__inner">
            <form onSubmit={handleSubmit}>
              <label htmlFor="spotify-search">
                Search:{" "}
                <span className="visually-hidden">
                  Enter A Song, Album, or Artist
                </span>
              </label>
              <input
                id="spotify-search"
                placeholder="Enter A Song, Album, or Artist"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </StyledSearchBar>
      </StyledHeader>

      <main>
        {searchResults ? (
          <SectionWrapper title="Top Tracks" breadcrumb={true}>
            {searchResults && searchResults.tracks.items && (
              <TrackList tracks={searchResults.tracks.items} />
            )}
          </SectionWrapper>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default CreatePlaylist;
