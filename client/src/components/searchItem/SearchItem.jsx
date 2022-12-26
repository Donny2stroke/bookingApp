import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0] ? item.photos[0] : "https://st.ilfattoquotidiano.it/wp-content/uploads/2019/12/27/booking1200-690x362.jpg"}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m dal centro</span>
        <span className="siTaxiOp">Taxi aeroportuale gratuito</span>
        <span className="siSubtitle">
          {item.type}
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Cancellazione gratuita </span>
        <span className="siCancelOpSubtitle">
          Puoi annullare più tardi, quindi assicurati questo fantastico prezzo oggi!
        </span>
      </div>
      <div className="siDetails">
        { item.rating &&<div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">€{item.cheapestPrice}</span>
          <span className="siTaxOp">Tasse incluse</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Visualizza disponibilità</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
