import { useEffect, useState } from "react";
import { DFLT_SRCH_RSLT, MOVIE_IMG_URL, MOVIE_SRCH_URL } from "../config";
import MovieCard from "./MovieCard";

const Body = () => {
  const [srchText, setSrchText] = useState("");
  const [srchResult, setSrchResult] = useState(DFLT_SRCH_RSLT.description);
  const [srch, setSrch] = useState("tamil");
  const [isFocus, setIsFocus] = useState(false);
  const [cahedObj, setCahedObj] = useState({});

  const [suggList, setSuggList] = useState([]);

  async function getData() {
    const value = await fetch(MOVIE_SRCH_URL + srchText);
    const data = await value.json();

    setSuggList(data.description);
    console.log(data);
  }
  useEffect(() => {
    // if (srchText != "") {
    let timer;
    console.log(cahedObj);
    if (cahedObj[srchText]) {
      setSuggList(cahedObj[srchText]);
    } else {
      console.log("Api call made");
      timer = setTimeout(() => srchText != "" && getData(), 200);
    }
    // }

    return () => {
      clearTimeout(timer);
    };
  }, [srchText]);

  async function srchMovie(movie) {
    const data = await fetch(MOVIE_SRCH_URL + movie);
    const json = await data.json();
    console.log(json.description);
    setSrchResult(json.description);
  }
  //   useEffect(() => {
  //     fetch();
  //   }, []);

  // console.log(srchResult);
  const arr = [];
  return (
    <div className="relative min-w-[635px]">
      <div className="flex justify-evenly mx-5 items-center">
        <p className="font-mono text-lg ">Search Result for "{srch}...."</p>
        <div className="relative z-10">
          <div className="absolute z-1  right-[74px] top-14">
            {suggList.length != 0 &&
              (srchText ? (
                suggList.map((m, i) => {
                  arr.push(m["#TITLE"]);
                  return (
                    <button
                      onClick={() => {
                        srchMovie(m["#TITLE"]);
                        setSrchText("");
                        setSrch(m["#TITLE"]);
                        setCahedObj({ ...cahedObj, [m["#TITLE"]]: [...arr] });
                        console.log(m["#TITLE"]);
                        console.log(cahedObj);
                        setSuggList([]);
                      }}
                      key={i}
                      className="border-b-2 p-2 hover:bg-gray-300  text-center bg-white  sm:w-48 md:w-56 lg:w-96 xl:w-4/4"
                    >
                      {/* {setCahedObj([...cahedObj, m["#TITLE"]])} */}
                      <h1 className="">{m["#TITLE"]}</h1>
                    </button>
                  );
                })
              ) : (
                <div>
                  <h1></h1>
                </div>
              ))}
          </div>

          <input
            className="ml-4 mr-3  bg-red-50 p-2   sm:w-48 md:w-56 lg:w-96 xl:w-4/4"
            placeholder="Search Movies"
            type="text"
            value={srchText}
            onChange={(e) => {
              setSrchText(e.target.value);
            }}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
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
