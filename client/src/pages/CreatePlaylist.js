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
  });

  // console.log(searchResults);

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
          {/* {searchResults &&
            searchResults.tracks.items.map((item) => (
              <div key={item.id}>
                <img
                  alt=""
                  src={item.album.images[0].url}
                  width={item.album.images[0].width}
                  height={item.album.images[0].height}
                  className="mr-1 mb-1"
                />
                <div className="track__info">
                  <h3>{item.name}</h3>
                  <p>
                    {item.artist} | {item.album}
                  </p>
                </div>
              </div>
            ))} */}
        </SectionWrapper>
      </main>
    </>
  );
};

export default CreatePlaylist;
