import { useState, useEffect } from "react";
import { fetchData } from "../functions/fetchData";
import Content from "../Components/Content/Content";

const Comics = ({ search, setSearch }) => {
  const [comics, setComics] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(
      `http://localhost:4000/comics?title=${search}&page=${page}`,
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

// import axios from "axios";
// import { useState, useEffect } from "react";
// import Paginate from "../Components/Paginate";
// import Search from "../Components/Search";
// import CardComics from "../Components/CardComics";

// export default function Comics({ addFav }) {
//   const [data, setData] = useState();
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [numberOfPage, setNumberOfPage] = useState();
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
// `http://localhost:4000/comics?title=${search}&page=${page}`
//       );
//       setData(response.data);
//       setNumberOfPage(Math.ceil(response.data.count / response.data.limit));
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [search, page]);
//   return isLoading ? (
//     <p>Chargement...</p>
//   ) : (
//     <div className="wrapper">
//       <div className="search">
//         <Search setSearch={setSearch} search={search} />
//       </div>
//       <div className="paginate-container">
//         <Paginate setPage={setPage} numberOfPage={numberOfPage} page={page} />
//       </div>
//       <div className="container">
//         {data.results.map((result) => {
//           return (
//             <CardComics
//               key={result._id}
//               title={result.title}
//               description={result.description}
//               picture={result.thumbnail.path + "." + result.thumbnail.extension}
//               id={result._id}
//               addFav={addFav}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
