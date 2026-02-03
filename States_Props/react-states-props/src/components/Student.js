import { useState } from "react";
import "./Student.css";

function Student(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="student-card">
      <h2>Student Component</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>

      <p><strong>Clicks:</strong> {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Student;
