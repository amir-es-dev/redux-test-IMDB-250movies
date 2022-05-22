import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import MoviesList from "./Components/MoviesList/MoviesList";
import FavoriteMovies from "./Components/FavoriteMovies/FavoriteMovies";
import { useEffect } from "react";
import { listActions } from "./redux/listSlice";
import { useDispatch } from "react-redux";

function App() {
  const { getList } = listActions;
  const dispatch = useDispatch();

  async function getMovies() {
    try {
      const responce = await fetch(
        "https://imdb-api.com/en/API/Top250Movies/k_v2qte7s3"
      );
      const data = await responce.json();
      dispatch(getList(data.items));
      console.log(data.items);
    } catch (e) {
      alert("ERROR");
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="movlist" element={<MoviesList />} />
        <Route path="favmov" element={<FavoriteMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
