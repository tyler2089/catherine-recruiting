import "../styles/jobsearch.css";
import { useEffect, useState, useRef } from "react";
function JobSearch() {
  const [filterSelection, setFilterSelection] = useState(null);

  return (
    <div className="jobsearch-container">
      <div className="jobfilter-container">
        <navbar className="jobfilter-navbar">
          <h2
            onClick={() => setFilterSelection("banking")}
            className={filterSelection === "banking" ? "selected" : null}
          >
            Banking
          </h2>
          <h2
            onClick={() => setFilterSelection("energy")}
            className={filterSelection === "energy" ? "selected" : null}
          >
            Renewable Energy
          </h2>
          <h2
            onClick={() => setFilterSelection("healthcare")}
            className={filterSelection === "healthcare" ? "selected" : null}
          >
            Healthcare
          </h2>
        </navbar>
        <div className="jobfilter-searchbar">
          <input type="text"></input>
          <h2>Search</h2>
        </div>
      </div>
      <div className="job-container"></div>
    </div>
  );
}

export default JobSearch;
