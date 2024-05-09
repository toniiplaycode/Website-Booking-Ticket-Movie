import { useEffect, useState } from "react";
import TypeofMovieItem from "./TypeofMovieItem";
import axios from "axios";

const TypeofMovie = () => {
  const [typeFilms, setTypeFilms] = useState();

  useEffect(() => {
    const getType = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/typeFilm/getAll"
        );
        setTypeFilms(res.data.all);
      } catch (error) {
        console.log("eror from fetch type films !!!: ", error);
      }
    };
    getType();
  }, []);

  const selectedAll = {
    nameTypeFilm: "Tất Cả",
  };

  return (
    <div className="typof-movies-container">
      <TypeofMovieItem item={selectedAll} />
      {typeFilms &&
        typeFilms.map((item, index) => (
          <TypeofMovieItem key={index} item={item} />
        ))}
    </div>
  );
};

export default TypeofMovie;
