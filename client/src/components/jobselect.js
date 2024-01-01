import "../styles/jobselect.css";
import Fade from "react-reveal/Fade";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function JobSelect() {
  const [jobList, setJobList] = useState(null);
  const indexStore = useSelector((state) => state.index);
  var jobContainer = useRef();
  var rowContainer = useRef();
  var searchBar = useRef();

  async function fetchData() {
    const result = await fetch(
      "https://saut95n2e9.execute-api.us-east-1.amazonaws.com/Test/LambdaTest",
      {
        method: "GET",
        headers: {
          genre: indexStore.homePageOption,
        },
      }
    )
      .then((result) => result.json())
      .then((data) => setJobList(data));
  }

  const Jobs = () => {
    var jobListReturn = [];
    if (jobList) {
      console.log(jobList);
      for (let i = 0; i < jobList.length; i++) {
        jobListReturn.push(
          <div className="listing-container">
            <div className="listing-title">
              <h1>{jobList[i].TITLE}</h1>
              <h2>{jobList[i].SALARY}</h2>
            </div>
            <h2>{jobList[i].DESCRIPTION}</h2>
          </div>
        );
      }
    }
    return jobListReturn;
  };

  useEffect(() => {
    if (jobContainer.current && indexStore.homePageOption !== "") {
      fetchData();
      jobContainer.current.style.display = "flex";
      jobContainer.current.addEventListener("animationend", function () {
        searchBar.current.style.width = "60vw";
        searchBar.current.style.border = "2px solid #aaf0d1";
        searchBar.current.style.padding = "10px";
        rowContainer.current.style.opacity = 100;
      });
    }
  }, [indexStore]);
  return (
    <div className="job-select-container" ref={jobContainer}>
      <input type="search" placeholder="Search..." ref={searchBar}></input>
      <div className="row-container" ref={rowContainer}>
        <Jobs></Jobs>
      </div>
    </div>
  );
}

export default JobSelect;
