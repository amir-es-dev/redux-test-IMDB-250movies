import "./FavoriteMovies.css";
import { useSelector } from "react-redux";

const FavoriteMovies = () => {
  const { favlist } = useSelector((state) => state.favList);

  return (
    <>
      <h2>FAVORITE MOVIES</h2>
      <div className="favTableBox">
        <table className="table table-striped">
          <thead className="table-primary">
            <tr>
              <th scope="col">Rank</th>
              <th></th>
              <th scope="col">Title</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {favlist.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.rank}</th>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>{item.fullTitle}</td>
                <td>
                  <i
                    className="bi bi-star-fill"
                    style={{ color: "#ffbb33" }}
                  ></i>
                  {item.imDbRating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FavoriteMovies;
