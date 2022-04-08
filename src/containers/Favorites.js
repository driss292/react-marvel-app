import { useState } from "react";
import Content from "../Components/Content/Content";
const Favorites = ({ favoritesCharacters, setSearch }) => {
  const data = {
    count: favoritesCharacters.length,
    limit: 100,
    results: favoritesCharacters,
  };
  const [page, setPage] = useState(1);
  return (
    <Content
      data={data}
      page={page}
      setPage={setPage}
      setSearch={setSearch}
      from="characters"
      favorites={true}
    />
  );
};
export default Favorites;
