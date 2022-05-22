import { useSelector } from "react-redux";
import "./MoviesList.css";
import Like from "../Like/Like";

const MoviesList = () => {
  const { list } = useSelector((state) => state.movieList);

  return (
    <>
      <h2>IMDB TOP 250 Movies</h2>
      <div className="tableBox">
        <table className="table table-striped ">
          <thead className="table-primary">
            <tr>
              <th scope="col">Rank</th>
              <th></th>
              <th scope="col">Title</th>
              <th scope="col">Rate</th>
              <th scope="col">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
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
                <td>
                  <Like item={item} list={list} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MoviesList;
