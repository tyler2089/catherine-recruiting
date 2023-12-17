import "../styles/jobselect.css";
import Fade from "react-reveal/Fade";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import setJobSelectAnimation from "../actions/jobselectanimation";

function JobSelect() {
  const indexStore = useSelector((state) => state.index);
  var jobContainer = useRef();
  var rowContainer = useRef();
  var searchBar = useRef();
  var jobList = [];

  jobList.push({
    title: "Recruiting Agent",
    salary: "$100,000 / year",
    company: "Catherine Recruiting",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  jobList.push({
    title: "Software Engineer",
    salary: "$60,000 / year",
    company: "Tyler Customer Creations",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  jobList.push({
    title: "Waiter",
    salary: "$15 / hour + tips",
    company: "Culver's",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  jobList.push({
    title: "Recruiting Agent",
    salary: "$100,000 / year",
    company: "Catherine Recruiting",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  jobList.push({
    title: "Software Engineer",
    salary: "$60,000 / year",
    company: "Tyler Customer Creations",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  jobList.push({
    title: "Waiter",
    salary: "$15 / hour + tips",
    company: "Culver's",
    description:
      "Sicut agens recrutatorius, incumbit mihi munus inveniendi et eligendi candidatos idoneos qui, peritia et qualitatibus suis, possint effici optimos candidatos ad diversas occupationes. Munus meum est non solum discernere aptitudines et peritias eorum qui possunt contribuere ad successum clientium, sed etiam collocare eos in locis ubi possint exsistere et crescere. Cum cura et peritia, quaero et selecio candidatos qui sint congruentes non solum cum postulationibus specificis operum, sed etiam cum culture et valibus organizationum clientium. Per hoc, spero non solum beneficium recrutationis optime implere, sed etiam ad progressionem et prosperitatem societatum et individuorum facere.",
  });

  const Jobs = () => {
    var jobListReturn = [];
    for (let i = 0; i < jobList.length; i++) {
      jobListReturn.push(
        <div className="listing-container">
          <div className="listing-title">
            <h1>{jobList[i].title}</h1>
            <h2>{jobList[i].company}</h2>
          </div>
          <h2>{jobList[i].salary}</h2>
        </div>
      );
    }
    return jobListReturn;
  };

  useEffect(() => {
    if (jobContainer.current && indexStore.homePageOption !== "") {
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
