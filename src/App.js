import { useState, useEffect } from "react";
import axios from "axios";
import DisplayJobs from "./DisplayJobs";
import UserSelect from "./UserSelect.js";
import Footer from "./Footer";
import "./App.css";

function App() {
  // 1. Initialize state
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.lever.co/v0/postings/leverdemo",
      dataResponse: "JSON",
      params: {},
    })
      .then((response) => {
        //update the jobs state variable with the items from our API
        const jobsDataArray = response.data;
        setJobs(jobsDataArray);
        setFilteredJobs(jobsDataArray);
      })
      .catch((error) => {
        alert(`Ooops!!! ${error}`);
      });
  }, []);

  const getJobs = (chosenJob) => {
    // the code that will filter out and make a new array of user's chosen department
    // make a copy of all the jobs
    const copyOfAllJobs = [...jobs];
    // filter out only jobs with user's selection
    const filteredJobsArray = copyOfAllJobs.filter((job) => {
      return job.categories.department === chosenJob;
    });

    // Update filteredJobs array
    setFilteredJobs(filteredJobsArray);
  };

  return (
    <div className="App">
      <header>
        <h1 className="wrapper">GitHubJobs</h1>
      </header>

      <UserSelect filterJobs={getJobs} />

      <div className="cardContainer">
        <div className="wrapper">
          <div className="classWrapper">
            <DisplayJobs allJobs={filteredJobs} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
