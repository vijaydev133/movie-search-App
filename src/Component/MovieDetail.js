import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  //   console.log(id);
  const [data, setdata] = useState();

  useEffect(() => {
    async function getData() {
      const value = await fetch("https://search.imdbot.workers.dev/?tt=" + id);
      const data = await value.json();

      //   console.log(data);
      setdata(data);
      console.log(data?.short?.trailer?.embedUrl);
    }
    // const value = fetch("https://search.imdbot.workers.dev/?tt=" + id);
    // value
    //   .then((res) => res.json())
    //   .then((data) => {
    //     return data;
    //     // console.log(data.short.image);
    //   });

    getData();
  }, []);

  return data ? (
    <div className="flex flex-col justify-center items-center  py-10">
      <div className="relative">
        <img className="w-[500px]" src={data?.short?.image} alt="thumbnail" />
        <p className="absolute bg-red-700 text-white p-5 top-0 font-bold text-lg">
          {data?.short["@type"]}
        </p>
      </div>

      <p className="mt-5">Name: {data?.short?.name}</p>
      <p>Cast: {data?.short?.actor.map((e) => e.name).join(", ")}</p>
      <p className="w-2/3">Description: {data?.short?.description}</p>
      <p>
        Rating:
        {data?.short?.aggregateRating?.ratingValue
          ? data?.short?.aggregateRating?.ratingValue
          : "No rating"}
      </p>
      <p>Genre : {data?.short?.genre.join(", ")}</p>
      {data?.short?.trailer?.embedUrl ? (
        <Link
          className="font-serif underline"
          to={data?.short?.trailer?.embedUrl}
          target="_blank"
        >
          Click here to Watch trailer🎥
        </Link>
      ) : (
        ""
      )}
    </div>
  ) : (
    <h1>loadingg</h1>
  );
};

export default MovieDetail;
