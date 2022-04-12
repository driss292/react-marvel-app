import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../Components/Content/Content";

const Comics = ({ search, setSearch }) => {
  const [comics, setComics] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(
      `https://my-express-marvel-api.herokuapp.com/comics?title=${search}&page=${page}`,
      setComics,
      setIsLoading
    );
  }, [search, page]);

  return isLoading ? (
    <span>en chargement</span>
  ) : (
    <Content
      data={comics}
      page={page}
      setPage={setPage}
      setSearch={setSearch}
      from="comics"
    />
  );
};

export default Comics;
