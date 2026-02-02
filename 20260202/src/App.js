import React from "react";
import StudentCard from "./StudentCard";

function App() {
  //  Student details stored in an array
  const students = [
    { name: "Deekshith Goud", rollNo: "2303A52104", marks: 89 },
    { name: "shiva harsha", rollNo: "2303A52375", marks: 92 },
    { name: "pintu", rollNo: "2303A52100", marks: 76 },
    { name: "Billa", rollNo: "2303A52106", marks: 84 },
    { name: "anirudh", rollNo: "2303A52103", marks: 91 }
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Marks Card</h1>

      {/*  Passing data as props via mapping */}
      {students.map((s, index) => (
        <StudentCard
          key={s.rollNo + index}
          name={s.name}
          rollNo={s.rollNo}
          marks={s.marks}
        />
      ))}
    </div>
  );
}

export default App;