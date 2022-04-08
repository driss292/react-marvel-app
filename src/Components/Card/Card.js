import "./card.scss";

import DP from "../../assets/images/DP.jpeg";
import { Link } from "react-router-dom";

const Card = ({ data, from }) => {
  //set image path

  const imgPath = data.thumbnail.path + "." + data.thumbnail.extension;
  //   const name = data.name

  return (
    <Link
      to={from === "characters" ? `/character/${data._id}` : "#"}
      data={data}
    >
      <div className="card">
        <div className="card-content">
          {data.name && <div className="card-header">{data.name}</div>}
          {data.title && <div className="card-header">{data.title}</div>}
          <div
            className="card-body"
            style={
              !data.thumbnail.path.includes("image_not_available")
                ? {
                    backgroundImage: `url(${imgPath})`,
                  }
                : { backgroundImage: `url(${DP})` }
            }
          ></div>
          <div className="card-footer">{data.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
