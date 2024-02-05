import "../styles/homeindex.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import setHomePageOption from "../actions/homepageoption";
import image from "../static/pexels-lukas-590016.jpg";
import Fade from "react-reveal/Slide";

function HomeIndex() {
  const indexStore = useSelector((state) => state.index);
  const dispatch = useDispatch();
  const [homeSelected, setHomeSelected] = useState(null);

  var backgroundImage = useRef(null);
  var header1 = useRef(null);
  var header2 = useRef(null);
  useEffect(() => {
    if (
      indexStore.homePageOption === "home" &&
      indexStore.navbarAnimationDone
    ) {
      setHomeSelected(true);
    } else {
      setHomeSelected(false);
    }
  }, [homeSelected]);

  return (
    <div
      className="homeindex-container"
      style={{ opacity: homeSelected ? "100" : "0" }}
      ref={backgroundImage}
    >
      <div className="homeindex-header">
        <h1>Where talent meets opportunity.</h1>
      </div>
      <div className="button-container">
        <button
          className="hover-underline-animation"
          onClick={() => dispatch(setHomePageOption("jobsearch"))}
        >
          Search Jobs
        </button>
        <button
          className="hover-underline-animation"
          onClick={() => dispatch(setHomePageOption("employer"))}
        >
          Employers
        </button>
      </div>
    </div>
  );
}

export default HomeIndex;
