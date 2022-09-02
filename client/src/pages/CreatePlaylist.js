import { useState, useEffect } from "react";
import { SectionWrapper } from "../components";
import { StyledHeader, StyledSearchBar } from "../styles";
import { catchErrors } from "../utils";
import { search } from "../spotify";

const CreatePlaylist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});

  useEffect(() => {
    const fetchData = async (e) => {
      const { data } = await search(searchTerm);
      setSearchResults(data);
    };

    catchErrors(fetchData());
  }, [searchTerm]);

  console.log(searchResults.tracks.items);

  return (
    <>
      <StyledHeader>
        <StyledSearchBar>
          <div className="header__inner">
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </StyledSearchBar>
      </StyledHeader>

      <main>
        <SectionWrapper title="Search Results" breadcrumb={true}>
          <p>Search results...</p>
        </SectionWrapper>
      </main>
    </>
  );
};

export default CreatePlaylist;
