import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/movlist">IMDB Top 250 Movies</Link>
      <Link to="/favmov">Favorite Movies</Link>
    </div>
  );
};

export default Home;
