import React, { useState } from "react";
import rectangle from "../../assets/Rectangle.png";
import rectangle1 from "../../assets/Rectangle (1).png";
import rectangle2 from "../../assets/Rectangle (2).png";
import rectangle3 from "../../assets/Rectangle (3).png";
import rectangle4 from "../../assets/Rectangle (4).png";
import rectangle5 from "../../assets/Rectangle (5).png";
import rectangle6 from "../../assets/Rectangle (6).png";
import rectangle7 from "../../assets/Rectangle (7).png";
import rectangle8 from "../../assets/Rectangle (8).png";
import rectangle9 from "../../assets/Rectangle (9).png";
import rectangle10 from "../../assets/Rectangle (10).png";
import rectangle11 from "../../assets/Rectangle (11).png";
import rectangle12 from "../../assets/Rectangle (12).png";
import rectangle13 from "../../assets/Rectangle (13).png";
import rectangle14 from "../../assets/Rectangle (14).png";
import rectangle15 from "../../assets/Rectangle (15).png";
import rectangle16 from "../../assets/Rectangle (16).png";
import rectangle17 from "../../assets/Rectangle (17).png";
import rectangle18 from "../../assets/Rectangle (18).png";
import rectangle19 from "../../assets/Rectangle (19).png";
import rectangle20 from "../../assets/Rectangle (20).png";
import rectangle21 from "../../assets/Rectangle (21).png";
import rectangle22 from "../../assets/Rectangle (22).png";
import rectangle23 from "../../assets/Rectangle (23).png";
import rectangle24 from "../../assets/Rectangle (24).png";
import { FaRegBookmark } from "react-icons/fa6";
import "./Main.css";

export type Movie = {
  title: string;
  img: string;
  year: string;
  type: string;
};

// Your movie data
const Movies: Array<Movie> = [
  {
    title: "Beyond Earth",
    img: "https://s3-alpha-sig.figma.com/img/50bc/c8ca/b6a33be28961aee8f50ab8a2dd6830c2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PI1sbp~LzTxtnEXLT2q5Lu86Fs39lGLiENmqjsJ65sVua0hnQkMBVlHOc2CxHrOxNdz1vFNdPeSEmbkDrVDMJ21i7Pzkx8vc6gL-CEKEsaB1hCroawC3cYq~y6FsYACTgsz1yZHadkyV8946BA21W6ys8Ab6tLf-FyEfzpsICRcOBZXifyYQ-wiAIE0lGkOrqoAdlZAL15jxmKhNpCbjiZGBFbVubFRe2Ow19GbYaX7HUe69Djb3nvin2Caj-uaFI~DorBVGVr5MqUoQllu2vEEFQuOfWUtW1hEzN8~lYnfqDzctKn0WXCUgXwXMsQ~m15-FHvzliVeE-l7iNEx-iA__,",
    year: "2019",
    type: "Movie",
  },
];
export type Recommended = {
  title: string;
  img: string;
  year: string;
  type: string;
  icon: any;
};
const recommend: Array<Recommended> = [
  {
    title: "The Great Lands",
    img: rectangle1,
    year: "2019",
    type: "Movie",
    icon: <FaRegBookmark />,
  },
  {
    title: "The Diary",
    img: rectangle2,
    year: "2019",
    type: "TV Series",
    icon: <FaRegBookmark />,
  },
  {
    title: "Earth’s Untouched",
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
    title: "During the Hunt",
    img: rectangle5,
    year: "2016",
    type: "TV Series PG",
    icon: <FaRegBookmark />,
  },
  {
    title: "Autosport the Series",
    img: rectangle6,
    year: "2016",
    type: "TV Series 18+",
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
    title: "Below Echo",
    img: rectangle8,
    year: "2016",
    type: "TV Series PG",
    icon: <FaRegBookmark />,
  },
  {
    title: "The Rockies",
    img: rectangle9,
    year: "2015",
    type: "TV Series E",
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
    title: "Community of Ours",
    img: rectangle11,
    year: "2018",
    type: "TV Series 18+",
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
    title: "112",
    img: rectangle16,
    year: "2013",
    type: "TV Series PG",
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
    title: "Production Line",
    img: rectangle18,
    year: "2018",
    type: "TV Series PG",
    icon: <FaRegBookmark />,
  },
  {
    title: "Dogs",
    img: rectangle19,
    year: "2016",
    type: "TV Series E",
    icon: <FaRegBookmark />,
  },
  {
    title: "Asia in 24 Days",
    img: rectangle20,
    year: "2020",
    type: "TV Series PG",
    icon: <FaRegBookmark />,
  },
  {
    title: "The Tasty Tour",
    img: rectangle21,
    year: "2016",
    type: "TV Series PG",
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
    title: "Unresolved Cases",
    img: rectangle23,
    year: "2018",
    type: "TV Series 18+",
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
export type MovieType = {
  title: string;
  img: string;
  year: string;
  type: string;
};

interface MovieProps {
  movies: MovieType[];
}
const Main: React.FC<MovieProps> = ({ movies }) => {
  const [movie, setMovie] = useState<Array<Movie>>(Movies);
 console.log(setMovie)

  return (
    <>
      <div className="map">
        <div className="map1">
          <h1>Trending</h1>
          {movie.map((movies, index) => (
            <div key={index} className="movie">
              <div
                className="first"
                style={{
                  backgroundImage: `url(${rectangle})`, // Set rectangle as background
                  backgroundSize: "cover", // Ensure the image covers the entire div
                  backgroundPosition: "center", // Position the image at the center
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "end",
                  padding: "10px",
                  borderRadius: "12px",
                }}
              >
                <div className="type">
                  <span>{movies.year}</span>
                  <span>{movies.type}</span>
                </div>
                <h1>{movies.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <h1>Recommended For You</h1>
        <div className="map2">
          {movies.length === 0 ? (
            <p>No movies found matching your search.</p>
          ) : (
            movies.map((recos, index) => (
              <div key={index} className="reco-movie">
                <div className="images">
                  <img src={recos.img} alt={recos.title} />
                  <div className="bookmark">
                    <FaRegBookmark />
                  </div>
                </div>
                <div className="rec-texts">
                  <div className="years-rec">
                    <h5>{recos.year}</h5>
                    <h5>{recos.type}</h5>
                  </div>
                  <h3>{recos.title}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
