import { useState, useEffect, useCallback } from "react";
import { SectionWrapper } from "../components";
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

  console.log(searchTerm);

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
        <SectionWrapper title="Search Results" breadcrumb={true}>
          {searchResults &&
            searchResults.tracks.items.map((item) => (
              <div key={item.id}>
                <img
                  alt={item.album.name}
                  src={item.album.images[0].url}
                  style={{
                    width: 120,
                    height: "auto",
                  }}
                />
                <div className="track__info">
                  <h3>{item.name}</h3>
                  <p>
                    {item.artists[0].name} | {item.album.name}
                  </p>
                </div>
              </div>
            ))}
        </SectionWrapper>
      </main>
    </>
  );
};

export default CreatePlaylist;
