import { useEffect, useState } from "react";
import { DFLT_SRCH_RSLT, MOVIE_IMG_URL, MOVIE_SRCH_URL } from "../config";
import MovieCard from "./MovieCard";

const Body = () => {
  const [srchText, setSrchText] = useState("tamil");
  const [srchResult, setSrchResult] = useState(DFLT_SRCH_RSLT.description);
  const [srch, setSrch] = useState("tamil");

  async function srchMovie(movie) {
    const data = await fetch(MOVIE_SRCH_URL + movie);
    const json = await data.json();
    // console.log(json.description);
    setSrchResult(json.description);
  }
  //   useEffect(() => {
  //     fetch();
  //   }, []);

  // console.log(srchResult);
  return (
    <div className="">
      <div className="flex justify-between mx-5 items-center">
        <p className="font-mono text-lg ">Search Result for "{srch}...."</p>
        <div>
          <input
            className="ml-4 mr-3 bg-red-50 p-2"
            placeholder="Search Movies"
            type="text"
            value={srchText}
            onChange={(e) => {
              setSrchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (srchText) {
                srchMovie(srchText);
                setSrch(srchText);
              }
            }}
            className="bg-slate-200 p-2 "
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {srchResult.length == 0 ? (
          <h1>Loading...</h1>
        ) : (
          srchResult.map((movie) => {
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
    </div>
  );
};

export default Body;
