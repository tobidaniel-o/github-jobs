import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function UserSelect({ filterJobs }) {
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
          <div className="search">
            <FaSearch />
          </div>
        </form>
      </div>
    </div>
  );
}
