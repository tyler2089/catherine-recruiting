import "../styles/homeindex.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import image from "../static/pexels-lukas-590016.jpg";
function HomeIndex() {
  const indexStore = useSelector((state) => state.index);
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
        <h1>Don't settle for average.</h1>
        <h1>Let us do the heavy lifting.</h1>
      </div>
      <div className="button-container">
        <button className="button-89">Search Jobs</button>
        <button className="button-89">Employers</button>
      </div>
    </div>
  );
}

export default HomeIndex;
