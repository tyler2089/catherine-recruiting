import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/intro.css";
import setHomePage from "../actions/sethomepagedone";
import setIntroAnimationDone from "../actions/introanimationdone";
function Intro() {
  // Variable Declaration
  const indexStore = useSelector((state) => state.index);
  const dispatch = useDispatch();
  var intro = useRef();
  var arrow = useRef();
  var container = useRef();

  // UseEffects
  useEffect(() => {
    if (intro.current) {
      intro.current.onended = function () {
        if (arrow.current) {
          arrow.current.className = "revealed";
        }
      };
    }
  }, [intro]);

  useEffect(() => {
    if (indexStore.homePageDone) {
      container.current.className = "container-wipe";
      container.current.addEventListener("animationend", function () {
        dispatch(setIntroAnimationDone(true));
        container.current.style.display = "none";
      });
    }
  }, [indexStore]);
  // JSX
  return (
    <div className="intro-container" ref={container}>
      <video
        autoPlay="autoplay"
        muted
        className="intro"
        ref={intro}
        playsInline
      >
        <source
          src={require("../static/catherineintrotest.mp4")}
          type="video/mp4"
        ></source>
        <source
          src={require("../static/catherineintrotest.webm")}
          type="video/webm"
        ></source>
      </video>
      <div className="not-revealed" ref={arrow}>
        <h1
          onClick={() => {
            dispatch(setHomePage(true));
          }}
        >
          ^
        </h1>
      </div>
    </div>
  );
}

export default Intro;
