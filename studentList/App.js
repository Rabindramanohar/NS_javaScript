import React from "react";
import "./styles.css";
import StudentList from "./studentList";
import StudentDetail from "./studentDetail";

import { Box } from "@material-ui/core";

export default function App() {
  const studentList = [
    {
      id: 1,
      name: "Robin",
      hobby: "Coding",
      about_me: "I love code"
    },
    {
      id: 2,
      name: "Rohan",
      hobby: "Coding",
      about_me: "I love Js"
    },
    {
      id: 3,
      name: "Rohan",
      hobby: "Coding",
      about_me: "I love Js"
    },
    {
      id: 4,
      name: "Rohan",
      hobby: "Coding",
      about_me: "I love Js"
    },
    {
      id: 5,
      name: "Rohan",
      hobby: "Coding",
      about_me: "I love Js"
    }
  ];

  const [student, setStudent] = React.useState({});
  const [filterValue, setFilterValue] = React.useState("");

  const handleClick = (student) => setStudent(student);

  const handleChange = (event) => {
    setStudent({});
    setFilterValue(event.target.value);
  };

  return (
    <Box display={"flex"}>
      <StudentList
        students={studentList.filter((student) =>
          student.name.toLowerCase().includes(filterValue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <StudentDetail student={student} />
    </Box>
  );
}
