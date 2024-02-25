import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import setJobList from "../actions/setJobList";
import fetchData from "../components/fetchjobdata.js";
import deleteJob from "../components/admindeletejob";
import "../styles/adminviewjobs.css";
import postData from "../components/adminpostjob.js";
const AdminViewJobs = ({ jobList }) => {
  const indexStore = useSelector((state) => state.index);
  const dispatch = useDispatch();
  const [jobIsEditing, setJobIsEditing] = useState(null);
  const title = useRef(null);
  const company = useRef(null);
  const industry = useRef(null);
  const description = useRef(null);
  const salary = useRef(null);
  const handleDelete = (jobId) => {
    // Add your logic here to handle the deletion of the job with the given jobId
    deleteJob(indexStore.accessToken, jobId).then((result) => {
      dispatch(setJobList(fetchData()));
    });
  };

  const handleEdit = (jobId) => {
    // Add your logic here to handle the editing of the job with the given jobId
    setJobIsEditing(jobId);
  };

  return (
    <div className="adminviewjobs-container">
      <div className="adminviewjobs-list">
        {jobList.map((job) => (
          <div className="job-card" key={job.ID}>
            {jobIsEditing === job.ID ? (
              <div className="job-card-info-editing">
                <div>
                  <h2>Title</h2>
                  <input type="text" defaultValue={job.TITLE} ref={title} />
                </div>
                <div>
                  <h3>Company</h3>
                  <input type="text" defaultValue={job.COMPANY} ref={company} />
                </div>
                <div>
                  <h3>Industry</h3>
                  <select
                    id="industry"
                    name="industry"
                    defaultValue={job.GENRE}
                    ref={industry}
                  >
                    <option value="banking">Banking</option>
                    <option value="compliance">Compliance</option>
                    <option value="it">I.T.</option>
                    <option value="administration">Administration</option>
                    <option value="mortgage">Mortgage</option>
                  </select>
                </div>
                <div>
                  <h3>Description</h3>
                  <textarea
                    className="job-info-textarea-editing"
                    defaultValue={job.DESCRIPTION}
                    ref={description}
                  />
                </div>
                <div>
                  <h3>Salary</h3>
                  <input type="text" defaultValue={job.SALARY} ref={salary} />
                </div>
              </div>
            ) : (
              <div className="job-card-info">
                <h2>{job.TITLE}</h2>
                <p>Company: {job.COMPANY}</p>
                <p>
                  Industry:{" "}
                  {job.GENRE.charAt(0).toUpperCase() +
                    job.GENRE.substr(1, job.GENRE.length - 1)}
                </p>
                <p style={{ whiteSpace: "pre-line" }}>{job.DESCRIPTION}</p>
                <p>
                  Salary:{" "}
                  {job.HOURLY === 0
                    ? `from $${Number(job.SALARY).toFixed(0)}`
                    : `$${Number(job.SALARY).toFixed(2)}/hour`}
                </p>
              </div>
            )}
            {jobIsEditing === job.ID ? (
              <div className="job-card-buttons">
                <button onClick={() => setJobIsEditing(null)}>Cancel</button>
                <button
                  onClick={() =>
                    postData(
                      indexStore.accessToken,
                      title.current.value,
                      salary.current.value,
                      description.current.value,
                      company.current.value,
                      job.HOURLY,
                      industry.current.value,
                      job.ID
                    ).then((result) => {
                      fetchData().then((result) => {
                        dispatch(setJobList(result));
                      });
                      setJobIsEditing(null);
                    })
                  }
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="job-card-buttons">
                <button
                  className="delete-button"
                  onClick={() => handleDelete(job.ID)}
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(job.ID)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminViewJobs;
