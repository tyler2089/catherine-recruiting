import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setHomePageOption from "../actions/homepageoption";
import "../styles/homepage.css";

function Homepage() {
  // Variable Declaration
  const indexStore = useSelector((state) => state.index);
  const dispatch = useDispatch();
  var homeContainer = useRef();
  var titleCard = useRef();
  var links = useRef();
  var header = useRef();
  var banking = useRef();
  var healthcare = useRef();
  var energy = useRef();
  var linkContainer = useRef();

  // UseEffects
  useEffect(() => {
    if (indexStore.introAnimationDone && indexStore.homePageOption === "") {
      homeContainer.current.style.display = "flex";
      homeContainer.current.addEventListener("animationend", function () {
        titleCard.current.style.width = "100vw";
        links.current.style.width = "100vw";
        titleCard.current.addEventListener("transitionend", function () {
          header.current.style.opacity = 100;
          header.current.addEventListener("transitionend", function () {
            banking.current.style.opacity = 100;
            banking.current.addEventListener("transitionend", function () {
              healthcare.current.style.opacity = 100;
              healthcare.current.addEventListener("transitionend", function () {
                energy.current.style.opacity = 100;
              });
            });
          });
        });
      });
    }
  }, [indexStore]);
  // JSX
  return (
    <div className="homepage-container" ref={homeContainer}>
      <div className="title-card" ref={links}>
        <h1 ref={header}>Which industry are you here for?</h1>
      </div>
      <div className="links" ref={titleCard}>
        <div className="link-container" ref={linkContainer}>
          <h2
            ref={banking}
            onClick={() => {
              dispatch(setHomePageOption("banking"));
            }}
          >
            Banking
          </h2>
          <h2
            id="test"
            ref={healthcare}
            onClick={() => {
              dispatch(setHomePageOption("healthcare"));
            }}
          >
            Healthcare
          </h2>
          <h2
            ref={energy}
            onClick={() => {
              dispatch(setHomePageOption("energy"));
            }}
          >
            Renewable Energy
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
