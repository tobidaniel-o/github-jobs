export default function DisplayJobs({ allJobs }) {
  // converting timestamp to hours
  const timeConverter = (timeStamp) => {
    let date = new Date(timeStamp * 1000);
    let hours = date.getHours();
    let formattedTime = `${hours}h ago`;
    return formattedTime;
  };

  // returns each job card
  return (
    <>
      {allJobs.map((job, key) => {
        const { commitment, department, location, team } = job.categories;
        return (
          <div className="card" key={key}>
            <div className="timeAndType">
              <p className="time">{timeConverter(job.createdAt)}</p>
              <p className="type">{commitment}</p>
            </div>
            <p className="position">{job.text}</p>
            <p className="deptTeam">
              {department}, {team}
            </p>
            <p className="location">{location}</p>
            <div className="buttons">
              <a className="btn" href={job.applyUrl} target="_blank">
                Apply
              </a>
              <a className="btn" href={job.hostedUrl} target="_blank">
                About
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
