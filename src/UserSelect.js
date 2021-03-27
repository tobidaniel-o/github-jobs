// get user's selection
// somehow pass it to App.js
// use it to filter the jobs array

import { useState } from "react";

export default function UserSelect({ filterJobs }) {
  // Initiate state to hold user's chosen value from dropdown

  const [userChoice, setUserChoice] = useState("placeholder");

  // Gets user's department value from the dropdown
  const handleUserChoice = (event) => {
    setUserChoice(event.target.value);
    filterJobs(event.target.value);
  };

  return (
    <div className="header">
      <div className="wrapper">
        <form action="">
          <label htmlFor="filterByDepartment"></label>
          <select
            id="filterByDepartment"
            value={userChoice}
            onChange={handleUserChoice}
          >
            <option value="placeholder" disabled>
              Filter by department...
            </option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
            <option value="Business Development">Business Development</option>
            <option value="Finance">Finance</option>
            <option value="General">General</option>
            <option value="Marketing">Marketing</option>
            <option value="Legal">Legal</option>
            <option value="Customer Success">Customer Success</option>
          </select>
        </form>
      </div>
    </div>
  );
}
