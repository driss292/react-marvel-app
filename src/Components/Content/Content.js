import "./content.scss";
import Card from "../Card/Card";
import SearchInput from "../SearchInput/SearchInput";
import Paginate from "../Paginate/Paginate";
const Content = ({
  data,
  page,
  setPage,
  from,
  setSearch,
  search,
  favorites,
}) => {
  let numberOfPages = Math.floor(data.count / 100);
  data.count % 100 > 0 && numberOfPages++;
  return (
    <>
      {!favorites && (
        <SearchInput setSearch={setSearch} search={search} data={data} />
      )}

      <div className="content">
        {data.results.map((element, index) => {
          return <Card key={index} data={element} from={from} />;
        })}
      </div>
      {data.count > 100 && (
        <Paginate page={page} numberOfPages={numberOfPages} setPage={setPage} />
      )}
    </>
  );
};

export default Content;
