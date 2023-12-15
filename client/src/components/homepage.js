import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/homepage.css";
function Homepage() {
  const indexStore = useSelector((state) => state.index);
  var homeContainer = useRef();
  var titleCard = useRef();
  var links = useRef();
  useEffect(() => {
    if (indexStore.homePageDone) {
      homeContainer.current.className = "homepage-container";
      homeContainer.current.addEventListener("animationend", function () {
        titleCard.current.style.width = "100vw";
        links.current.style.width = "100vw";
      });
    }
  }, [indexStore]);
  return (
    <div className="homepage-no" ref={homeContainer}>
      <div className="title-card" ref={titleCard}></div>
      <div className="links" ref={links}></div>
    </div>
  );
}

export default Homepage;
