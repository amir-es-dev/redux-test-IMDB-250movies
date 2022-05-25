import { useDispatch } from "react-redux";
import { favActions } from "../../redux/favSlice";
import { listActions } from "../../redux/listSlice";

const Like = ({ item, list }) => {
  const { getList } = listActions;
  const { addMovie, removeMovie } = favActions;
  const dispatch = useDispatch();

  const handleLike = () => {
    const newlist = [...list];
    const index = newlist.indexOf(item);
    newlist[index] = { ...item };
    newlist[index].like = !item.like;
    dispatch(getList(newlist));
    item.like ? dispatch(removeMovie(item.id)) : dispatch(addMovie(item));
  };

  return (
    <>
      <i
        className={`bi bi-heart${item.like ? "-fill" : ""}`}
        style={{ color: "red", fontSize: "1.5rem", cursor: "pointer" }}
        onClick={handleLike}
      ></i>
    </>
  );
};

export default Like;
