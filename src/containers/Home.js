import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../Components/Content/Content";

const Home = ({ search, setSearch }) => {
  const [characters, setCharacters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(
      `https://my-express-marvel-api.herokuapp.com/characters?name=${search}&page=${page}`,
      setCharacters,
      setIsLoading
    );
  }, [search, page]);
  return isLoading ? (
    <span>En chargement</span>
  ) : (
    <Content
      data={characters}
      page={page}
      setPage={setPage}
      setSearch={setSearch}
      from="characters"
      search={search}
    />
  );
};

export default Home;
