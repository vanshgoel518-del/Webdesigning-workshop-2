import "./App.css";

function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  const students = [
    { name: "Rahul Sharma", course: "Computer Science", marks: 85 },
    { name: "Anita Verma", course: "Information Technology", marks: 92 },
    { name: "Rohan Gupta", course: "Electronics", marks: 78 },
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;