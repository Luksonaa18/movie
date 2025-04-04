import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from "../../assets/Movie.png";
import logo1 from "../../assets/Shape.png";
import logo2 from "../../assets/Shape (1).png";
import logo3 from "../../assets/tv.png";
import logo4 from "../../assets/Bookmark.png";
import logo5 from "../../assets/Oval (8).png";
import Main from "../../components/main-page/Main";
import Movie from "../../components/Movie/Movie";
import TVShow from "../../components/Tv/Index";
import "./Home.css";
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
const Home = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("main");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [moviesOnly, setMoviesOnly] = useState([
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
  ]);
  console.log(setMoviesOnly);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  console.log(handleSearchChange)
  const filteredMovies = moviesOnly.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleLogo1Click = () => {
    navigate("/main");
    setActiveSection("main");
  };
  const handleLogo1Click1 = () => {
    navigate("/movie");
    setActiveSection("movie");
  };
  const handleLogo1Click2 = () => {
    navigate("/tvshow");
    setActiveSection("tvshow");
  };
  const handleLogo1Click3 = () => {
    navigate("/bookmarks");
    setActiveSection("bookmarks");
  };

  return (
    <>
      <div className="all-home">
        <header>
          <nav>
            <img src={logo} alt="Logo" />
            <div className="icons">
              <img
                src={logo1}
                alt="Home"
                onClick={handleLogo1Click}
                style={{
                  cursor: "pointer",
                  filter:
                    activeSection === "main"
                      ? "brightness(1000%)"
                      : "brightness(70%)",
                }}
              />
              <img
                src={logo2}
                alt="Movies"
                onClick={handleLogo1Click1}
                style={{
                  cursor: "pointer",
                  filter:
                    activeSection === "movie"
                      ? "brightness(1000%)"
                      : "brightness(70%)",
                }}
              />
              <img
                src={logo3}
                alt="TV Shows"
                onClick={handleLogo1Click2}
                style={{
                  cursor: "pointer",
                  filter:
                    activeSection === "tvshow"
                      ? "brightness(1000%)"
                      : "brightness(70%)",
                }}
              />
              <img
                src={logo4}
                alt="Bookmarks"
                onClick={handleLogo1Click3}
                style={{
                  cursor: "pointer",
                  filter:
                    activeSection === "bookmarks"
                      ? "brightness(1000%)"
                      : "brightness(70%)",
                }}
              />
            </div>
            <img src={logo5} alt="Profile" />
          </nav>
        </header>
       

        {/* Content Area */}
        <div className="content-area">
          <Routes>
            <Route path="/main" element={<Main movies={filteredMovies} />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tvshow" element={<TVShow />} />
            <Route path="/bookmarks" element={<div>Bookmarks</div>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
