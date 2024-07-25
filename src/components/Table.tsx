import { useState } from "react";
import NavBar from "./NavBar";
import data from "./students.json";
import ReactPaginate from "react-paginate";
const Table = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [active, setActive] = useState(false);
  const [inactive, setInactive] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handleActivechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActive(event.target.checked);
  };

  const handleInactiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInactive(event.target.checked);
  };

  const handleMaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMale(event.target.checked);
  };

  const handleFemaleChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setFemale(event.target.checked);
  };
  const filteredData = data.filter((student) => {
    let statusmatch = false;
    if (active && !inactive) {
      statusmatch = student.status === "active";
    } else if (!active && inactive) {
      statusmatch = student.status === "inactive";
    } else {
      statusmatch = true;
    }

    let genderMatch = false;
    if (male && !female) {
      genderMatch = student.gender === "male";
    } else if (!male && female) {
      genderMatch = student.gender === "female";
    } else {
      genderMatch = true;
    }
    return statusmatch && genderMatch;
  });

  const studentsPerPage = 8;

  const pagesVisited = pageNumber * studentsPerPage;

  const displayStudents = filteredData
    .slice(pagesVisited, pagesVisited + studentsPerPage)
    .map((student, index) => {
      return (
        <tr key={index} className="bg-white odd:bg-gray-100">
          <td className="px-4 py-2 border">{student.first_name}</td>
          <td className="px-4 py-2 border">{student.last_name}</td>
          <td className="px-4 py-2 border">{student.status}</td>
          <td className="px-4 py-2 border">{student.gender}</td>
          <td className="px-4 py-2 border">{student.points}</td>
          <td className="px-4 py-2 border">{student.personal_number}</td>
          <td className="px-4 py-2 border">{student.email}</td>
          <td className="px-4 py-2 border">{student.mobile_number}</td>
          <td className="px-4 py-2 border">{student.address}</td>
          <td className="px-4 py-2 border">{student.date_of_birth}</td>
        </tr>
      );
    });

  const pageCount = Math.ceil(data.length / studentsPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <NavBar />
      <div className="flex justify-evenly">
        <div>
          <div className="flex ml-12 mt-8 flex-col">
            <h2>Filter Bar</h2>
            <div>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={handleActivechange}
                />
                Active
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={inactive}
                  onChange={handleInactiveChange}
                />
                Inactive
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={male}
                  onChange={handleMaleChange}
                />
                Male
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={female}
                  onChange={handleFemaleChange}
                />
                Female
              </label>
            </div>
          </div>
        </div>
        <label htmlFor="">
          <input
            type="text"
            className="mt-10"
            placeholder="Enter Here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          Search
        </label>
      </div>
      <table className=" table-auto mt-20 ml-10">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-2 border">First Name</th>
            <th className="px-4 py-2 border">Last Name</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Points</th>
            <th className="px-4 py-2 border">Personal Number</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Mobile Number</th>
            <th className="px-4 py-2 border">Address </th>
            <th className="px-4 py-2 border">DOB</th>
          </tr>
        </thead>
        <tbody>{displayStudents}</tbody>
      </table>
      <ReactPaginate
        className="flex justify-center justify-evenly pt-10"
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextClassName={"disabled"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Table;
