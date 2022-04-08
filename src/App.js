import "./styles/app/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Cookies from "js-cookie";
import Home from "./containers/Home";
// import NoMatch from "./containers/NoMatch";
import Character from "./containers/Character";
import Comics from "./containers/Comics";
import Favorites from "./containers/Favorites";
import Navbar from "./Components/Navbar/Navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faHeart, faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faHeart, faBars);

function App() {
  const [search, setSearch] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [favoritesCharacters, setFavoritesCharacters] = useState(
    JSON.parse(localStorage.getItem("favoritesCharacters")) || []
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              setIsStarted={setIsStarted}
              isStarted={isStarted}
            />
          }
        ></Route>
        <Route
          path="/comics"
          element={<Comics search={search} setSearch={setSearch} />}
        ></Route>
        <Route
          path="/character/:characterId"
          element={
            <Character
              setFavoritesCharacters={setFavoritesCharacters}
              favoritesCharacters={favoritesCharacters}
            />
          }
        ></Route>
        <Route
          path="favorites"
          element={
            <Favorites
              favoritesCharacters={favoritesCharacters}
              search={search}
              setSearch={setSearch}
              setIsStarted={setIsStarted}
              isStarted={isStarted}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
