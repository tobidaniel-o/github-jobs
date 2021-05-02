import { useState, useEffect } from "react";
import axios from "axios";
import DisplayJobs from "./components/DisplayJobs";
import UserSelect from "./components/UserSelect.js";
import Footer from "./components/Footer";
import "./App.css";
import DarkMode from "./components/Darkmode";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  // 1. Initialize state
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
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
        <div className="headerContainer wrapper">
          <h1 >jobfinder</h1>
          <DarkMode />
        </div>
      </header>

      <UserSelect filterJobs={getJobs} />

      <div className="cardContainer">
        <div className="wrapper">
          <div className="classWrapper">
            {loading ? (
              <Loader
                className="loading"
                type="TailSpin"
                color="#00BFFF"
                height={40}
                width={40}
                timeout={30000}
              />
            ) : (
              <DisplayJobs allJobs={filteredJobs} />
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
