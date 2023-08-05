import { useState } from "react";
import { library, icon } from "@fortawesome/fontawesome-svg-core";

// function App() {
//   const [job, setJob] = useState("");
//   // useState initial state callback  tránh lặp code
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem("job"));
//     console.log(storageJobs);
//     return storageJobs;
//   });
//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const newJobs = [...prev, job];
//       // save to local storage
//       localStorage.setItem("job", JSON.stringify(newJobs));
//       return newJobs;
//     });
//     setJob("");
//   };
//   return (
//     <div style={{ padding: 120 }} className="App">
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>ADD</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const [job, setJob] = useState("");
  const [todolist, setTodolist] = useState(() => {
    const innitialize = JSON.parse(localStorage.getItem("job"));
    return innitialize ?? [];
  });

  const handleDelete = (index) => {
    const newJobDelete = todolist.filter((item, i) => i !== index);
    localStorage.setItem("job", JSON.stringify(newJobDelete));
    setTodolist(newJobDelete);
  };
  const handleClick = () => {
    if (!job) return;
    setTodolist((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("job", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 150 }}>
      <input
        value={job}
        onChange={(e) => {
          setJob(e.target.value);
        }}
      />
      <button onClick={handleClick}>Click me!!</button>

      <ul>
        {todolist.map((job, index) => (
          <li key={index}>
            {job} <button onClick={() => handleDelete(index)}>Xoa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
