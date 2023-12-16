import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/homepage.css";

function Homepage() {
  const indexStore = useSelector((state) => state.index);
  var homeContainer = useRef();
  var titleCard = useRef();
  var links = useRef();
  var header = useRef();
  var banking = useRef();
  var healthcare = useRef();
  var energy = useRef();
  var linkContainer = useRef();

  useEffect(() => {
    if (
      indexStore.introAnimationDone &&
      homeContainer.current.className === "homepage-no"
    ) {
      homeContainer.current.className = "homepage-container";
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
  return (
    <div className="homepage-no" ref={homeContainer}>
      <div className="title-card" ref={links}>
        <h1 ref={header}>Which industry are you here for?</h1>
      </div>
      <div className="links" ref={titleCard}>
        <div className="link-container" ref={linkContainer}>
          <h2 ref={banking}>Banking</h2>
          <h2 id="test" ref={healthcare}>
            Healthcare
          </h2>
          <h2 ref={energy}>Renewable Energy</h2>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
