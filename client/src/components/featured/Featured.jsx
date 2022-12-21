import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error, reFatch} = useFetch("/hotels/countByCity?cities=Salerno,Napoli,Caserta");

  return (
    <div className="featured">

    {loading ? ("Loading please wait"): (
      <>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/641790.jpg?k=e59c841ba6c4dd3496f2d57cce01f05f11ce901d7ec78832ea38861de11deb66&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Salerno</h1>
            <h2>{data[0]} {data[0] == 1 ? ("struttura") : ("strutture")}</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/641091.webp?k=6b4c99444b439d2ce4dbf5a479674965a4f196f4cab39bf7dd34e214f1d30b83&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Napoli</h1>
            <h2>{data[1]} {data[1] == 1 ? ("struttura") : ("strutture")}</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/671622.jpg?k=b006a417549e2f1da48009aab1ea15abbdb7966c4c93007f3e3a51715eff8f62&o="
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Caserta</h1>
            <h2>{data[2]} {data[2] == 1 ? ("struttura") : ("strutture")}</h2>
          </div>
        </div>
      </>
    )}
    </div>
  );
};

export default Featured;
