

import { FaRegBookmark } from "react-icons/fa6";

// Import your images
import rectangle2 from "../../assets/Rectangle (2).png";
import rectangle5 from "../../assets/Rectangle (5).png";
import rectangle6 from "../../assets/Rectangle (6).png";
import rectangle8 from "../../assets/Rectangle (8).png";
import rectangle9 from "../../assets/Rectangle (9).png";
import rectangle11 from "../../assets/Rectangle (11).png";
import rectangle16 from "../../assets/Rectangle (16).png";
import rectangle18 from "../../assets/Rectangle (18).png";
import rectangle19 from "../../assets/Rectangle (19).png";
import rectangle20 from "../../assets/Rectangle (20).png";
import rectangle21 from "../../assets/Rectangle (21).png";
import rectangle23 from "../../assets/Rectangle (23).png";

// TVShow type definition
export type TVShow = {
  title: string;
  img: string;
  year: string;
  type: string;
  icon: any;
};

const TVShow = () => {
  // Data for TV Shows only (filtering out movies)
  const tvShowsOnly: Array<TVShow> = [
    {
      title: "The Diary",
      img: rectangle2,
      year: "2019",
      type: "TV Series",
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
      title: "Community of Ours",
      img: rectangle11,
      year: "2018",
      type: "TV Series 18+",
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
      title: "Unresolved Cases",
      img: rectangle23,
      year: "2018",
      type: "TV Series 18+",
      icon: <FaRegBookmark />,
    },
  ];

  return (
    <div className="tvshow-container">
      <h1 style={{marginLeft:"20px"}}>TV Shows</h1>
      <div className="map2">
      {tvShowsOnly?.map((recos) => (
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

export default TVShow;