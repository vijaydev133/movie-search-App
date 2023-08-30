import { useState } from "react";
import heart from "../images/heart.png";
import heart1 from "../images/heart1.png";
import watchImg from "../images/watch.png";
import watch1Img from "../images/watch1.png";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../utils/FavSlice";
import store from "../utils/store";
import { addItem, removeItem } from "../utils/WatchlistSlice";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isFav, setIsfav] = useState(false);
  const [isWatch, setIsWatch] = useState(false);
  //   const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.fav.items);
  const selector1 = useSelector((store) => store.watch.items);
  // if (selector.includes(movie)) {
  //   setIsfav(true);
  // }
  // function addFav(movie) {

  // }
  //   window.addEventListener("load", (event) => {
  //     var image = document.querySelector("img");
  //     var isLoaded = image.complete && image.naturalHeight !== 0;
  //     console.log(isLoaded);
  //     setLoaded(isLoaded);
  //   });
  //   console.log(movie);
  return (
    <div className="shadow-xl m-4 p-4 w-72 relative" key={movie["#RANK"]}>
      {/* {!loaded ? (
        <h1>Loadingg</h1>
      ) : ( */}
      <img
        className="w-60 h-72 "
        src={movie["#IMG_POSTER"]}
        alt={movie["#AKA"]}
        // onLoad={img.classList.remove("loader")}
      />
      <img
        className="w-5 absolute bottom-4 right-14 cursor-pointer"
        src={selector.includes(movie) ? heart1 : heart}
        alt="hearIcon"
        onClick={() => {
          if (!selector.includes(movie)) {
            dispatch(addFav(movie));
          } else {
            const filtered = selector.filter(
              (f) => f["#TITLE"] != movie["#TITLE"]
            );
            console.log(filtered);
            dispatch(removeFav(filtered));
          }
        }}
      />
      <img
        className="w-5 absolute bottom-4 right-6 cursor-pointer"
        src={selector1.includes(movie) ? watch1Img : watchImg}
        alt="watchIcon"
        onClick={() => {
          if (selector1.includes(movie)) {
            const res = selector1.filter((f) => {
              return f["#TITLE"] != movie["#TITLE"];
            });
            console.log(res);
            dispatch(removeItem(res));
          } else {
            dispatch(addItem(movie));
          }
        }}
      />
      {/* } */}
      {/* //this.classList.remove('d-none') */}
      <p>Name: {movie["#TITLE"]}</p>
      <p>Year: {movie["#YEAR"]}</p>
      <p>Cast: {movie["#ACTORS"]}</p>
      <Link to={`/movie/${movie["#IMDB_ID"]}`}>Know more...</Link>
    </div>
  );
};

export default MovieCard;
