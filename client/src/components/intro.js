import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles/intro.css";
import setHomePage from "../actions/sethomepagedone";

function Intro() {
  const dispatch = useDispatch();
  var intro = useRef();
  var arrow = useRef();
  var container = useRef();
  useEffect(() => {
    if (intro.current) {
      intro.current.onended = function () {
        if (arrow.current) {
          arrow.current.className = "revealed";
        }
      };
    }
  }, [intro]);
  return (
    <div className="intro-container" ref={container}>
      <video autoPlay="autoplay" muted className="intro" ref={intro}>
        <source
          src={require("../static/catherineintrotest.mp4")}
          type="video/mp4"
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
