import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { accessToken, logout, getCurrentUserProfile } from "./spotify";
import { catchErrors } from "./utils";
import "./App.css";
import Container from "./Test";
import Profile from "./Profile";

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
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
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
