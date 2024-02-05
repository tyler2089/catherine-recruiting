import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import setHomePageOption from "../actions/homepageoption";
import navbarAnimationDone from "../actions/navbaranimation";
import HomeIndex from "../pages/homeindex";
import JobSearch from "../pages/jobsearch";
import Contact from "../pages/contact";
import AboutUs from "../pages/about";
import "../styles/homepage.css";

function Homepage() {
  // Variable Declaration
  const indexStore = useSelector((state) => state.index);
  const dispatch = useDispatch();
  var homeContainer = useRef();
  var titleCard = useRef();
  var links = useRef();
  var header = useRef();
  var homeLink = useRef();
  var jobSearchLink = useRef();
  var employersLink = useRef();
  var aboutUsLink = useRef();

  // UseEffects
  useEffect(() => {
    //Navbar Intro Animation
    if (indexStore.introAnimationDone) {
      homeContainer.current.style.display = "flex";
      homeContainer.current.addEventListener("animationend", function () {
        titleCard.current.style.width = "100vw";
        links.current.style.width = "100vw";
      });

      titleCard.current.addEventListener("transitionend", function () {
        header.current.style.opacity = "100";
      });

      header.current.addEventListener("transitionend", function () {
        homeLink.current.style.opacity = "100";
      });

      homeLink.current.addEventListener("transitionend", function () {
        jobSearchLink.current.style.opacity = "100";
      });

      jobSearchLink.current.addEventListener("transitionend", function () {
        employersLink.current.style.opacity = "100";
      });

      employersLink.current.addEventListener("transitionend", function () {
        aboutUsLink.current.style.opacity = "100";
      });

      aboutUsLink.current.addEventListener("transitionend", function () {
        dispatch(navbarAnimationDone(true));
      });
    }

    // Navbar Coloring
    if (indexStore.homePageOption) {
      switch (indexStore.homePageOption) {
        case "home":
          homeLink.current.style.backgroundColor = "#001F3F";
          jobSearchLink.current.style.backgroundColor = "#4C607E";
          employersLink.current.style.backgroundColor = "#4C607E";
          aboutUsLink.current.style.backgroundColor = "#4C607E";
          break;

        case "jobsearch":
          homeLink.current.style.backgroundColor = "#4C607E";
          jobSearchLink.current.style.backgroundColor = "#001F3F";
          employersLink.current.style.backgroundColor = "#4C607E";
          aboutUsLink.current.style.backgroundColor = "#4C607E";
          break;

        case "employer":
          homeLink.current.style.backgroundColor = "#4C607E";
          jobSearchLink.current.style.backgroundColor = "#4C607E";
          employersLink.current.style.backgroundColor = "#001F3F";
          aboutUsLink.current.style.backgroundColor = "#4C607E";
          break;

        case "about":
          homeLink.current.style.backgroundColor = "#4C607E";
          jobSearchLink.current.style.backgroundColor = "#4C607E";
          employersLink.current.style.backgroundColor = "#4C607E";
          aboutUsLink.current.style.backgroundColor = "#001F3F";
          break;
      }
    }
  }, [indexStore]);

  const Display = () => {
    if (indexStore.homePageOption && indexStore.navbarAnimationDone) {
      switch (indexStore.homePageOption) {
        case "home":
          return <HomeIndex></HomeIndex>;

        case "jobsearch":
          return <JobSearch></JobSearch>;

        case "employer":
          return <Contact></Contact>;

        case "about":
          return <AboutUs></AboutUs>;
      }
    }
  };
  // JSX
  return (
    <div className="homepage-container" ref={homeContainer}>
      <div className="title-card" ref={titleCard}>
        <div className="company-name-container">
          <h1 className="company-name" ref={header}>
            Bank Talent Solutions
          </h1>
        </div>
        <nav className="navbar">
          <h3
            ref={homeLink}
            onClick={() => dispatch(setHomePageOption("home"))}
          >
            Home
          </h3>
          <h3
            ref={jobSearchLink}
            onClick={() => dispatch(setHomePageOption("jobsearch"))}
          >
            Search Jobs
          </h3>
          <h3
            ref={employersLink}
            onClick={() => dispatch(setHomePageOption("employer"))}
          >
            Employers
          </h3>
          <h3
            ref={aboutUsLink}
            onClick={() => dispatch(setHomePageOption("about"))}
          >
            About Us
          </h3>
        </nav>
      </div>
      <div className="links" ref={links}>
        <Display></Display>
      </div>
    </div>
  );
}

export default Homepage;
