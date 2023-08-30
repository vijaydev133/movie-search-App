import { useSelector } from "react-redux";
import store from "../utils/store";
import { useState } from "react";
import MovieCard from "./MovieCard";

const Favourites = () => {
  const fav = useSelector((store) => store.fav.items);
  // const m = useSelector((store) => store.fav.items);
  // favList(m);
  console.log(fav);
  return (
    <div className="flex flex-wrap justify-center">
      {fav.length == 0 ? (
        <h1>No Data Found...</h1>
      ) : (
        fav.map((movie) => {
          return (
            movie["#ACTORS"] &&
            movie["#TITLE"] &&
            movie["#YEAR"] &&
            movie["#IMG_POSTER"] && (
              <MovieCard key={movie["#RANK"]} movie={movie} />
            )
          );
        })
      )}
    </div>
  );
};

export default Favourites;
