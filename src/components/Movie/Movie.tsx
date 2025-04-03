
import "./Movie.css";
import { FaRegBookmark } from "react-icons/fa6";

// Import your images
import rectangle1 from "../../assets/Rectangle (1).png";
import rectangle3 from "../../assets/Rectangle (3).png";
import rectangle4 from "../../assets/Rectangle (4).png";
import rectangle7 from "../../assets/Rectangle (7).png";
import rectangle10 from "../../assets/Rectangle (10).png";
import rectangle12 from "../../assets/Rectangle (12).png";
import rectangle13 from "../../assets/Rectangle (13).png";
import rectangle14 from "../../assets/Rectangle (14).png";
import rectangle15 from "../../assets/Rectangle (15).png";
import rectangle17 from "../../assets/Rectangle (17).png";
import rectangle22 from "../../assets/Rectangle (22).png";
import rectangle24 from "../../assets/Rectangle (24).png";

// Movie type definition
export type Movie = {
  title: string;
  img: string;
  year: string;
  type: string;
  icon: any;
};

const Movie = () => {
  const moviesOnly: Array<Movie> = [
    {
      title: "The Great Lands",
      img: rectangle1,
      year: "2019",
      type: "Movie",
      icon: <FaRegBookmark />,
    },
    {
      title: "Earth's Untouched",
      img: rectangle3,
      year: "2017",
      type: "Movie 18+",
      icon: <FaRegBookmark />,
    },
    {
      title: "No Land Beyond",
      img: rectangle4,
      year: "2019",
      type: "Movie",
      icon: <FaRegBookmark />,
    },
    {
      title: "Same Answer II",
      img: rectangle7,
      year: "2017",
      type: "Movie E",
      icon: <FaRegBookmark />,
    },
    {
      title: "Relentless",
      img: rectangle10,
      year: "2017",
      type: "Movie PG",
      icon: <FaRegBookmark />,
    },
    {
      title: "Van Life",
      img: rectangle12,
      year: "2015",
      type: "Movie PG",
      icon: <FaRegBookmark />,
    },
    {
      title: "The Heiress",
      img: rectangle13,
      year: "2021",
      type: "Movie PG",
      icon: <FaRegBookmark />,
    },
    {
      title: "Off the Track",
      img: rectangle14,
      year: "2017",
      type: "Movie 18+",
      icon: <FaRegBookmark />,
    },
    {
      title: "Whispering Hill",
      img: rectangle15,
      year: "2017",
      type: "Movie E",
      icon: <FaRegBookmark />,
    },
    {
      title: "Lone Heart",
      img: rectangle17,
      year: "2017",
      type: "Movie E",
      icon: <FaRegBookmark />,
    },
    {
      title: "Darker",
      img: rectangle22,
      year: "2017",
      type: "Movie 18+",
      icon: <FaRegBookmark />,
    },
    {
      title: "Mission: Saturn",
      img: rectangle24,
      year: "2017",
      type: "Movie PG",
      icon: <FaRegBookmark />,
    },
  ];

  return (
    <div className="movie-container">
      <h1 style={{marginLeft:"20px"}}>Movies</h1>
      <div className="map2">
      {moviesOnly?.map((recos) => (
            <div className="reco-movie">
              <div className="images">
                <img src={recos.img} alt="" />
                <div className="bookmark">{recos.icon}</div>
              </div>

              <div className="rec-texts">
                <div className="years-rec">
                  <h5>{recos.year}</h5>
                  <h5>{recos.type}</h5>
                </div>
                <h3>{recos.title}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;