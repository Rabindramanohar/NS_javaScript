import React from "react";
import "./styles.css";
export default function ViewDetail({ student = {} }) {
  return (
    <div className="right-container">
      <div>{student.name}</div>
      <div>{student.hobby}</div>
      <div>{student.aboutMe}</div>
    </div>
  );
}
