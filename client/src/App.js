import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import styled from "styled-components/macro";
import { GlobalStyle } from "./styles";
import Container from "./Test";
import Profile from "./Profile";

const StyledLogInButton = styled.a`
  background-color: var(--green);
  color: var(--white);
  padding: 10px 20px;
  margin: 20px auto;
  border-radius: 30px;
  display: inline-block;
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <StyledLogInButton href="http://localhost:8888/login">
            Log in to Spotify
          </StyledLogInButton>
        ) : (
          <Router>
            <ScrollToTop />
            <Routes>
              <Route
                path="/top-artists"
                element={<Container title={"Top Artists"} />}
              />
              <Route
                path="/top-tracks"
                element={<Container title={"Top Tracks"} />}
              />
              <Route
                path="/playlists/:id"
                element={<Container title={"Playlist xxx"} />}
              />
              <Route
                path="/playlists"
                element={<Container title={"Playlists"} />}
              />
              <Route
                path="/"
                element={<Profile logout={logout} profile={profile} />}
              />
            </Routes>
          </Router>
        )}
      </header>
    </div>
  );
}

export default App;
