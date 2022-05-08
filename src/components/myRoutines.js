import React, { useState, useEffect } from "react";
import {
  deleteRoutineByRoutineId,
  postRoutine,
  getMyRoutines,
  updateRoutine,
} from "../api";

export const myRoutines = () => {
  const { routines, setRoutines, username, user, myRoutines, setMyRoutines } =
    props;
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = async (routineId, event) => {
    event.preventDefault();
    await deleteRoutineByRoutineId(routineId);
    const remainingRoutines = myRoutines.filter(
      (routine) => routineId !== routine.id
    );
    setRoutines(remainingRoutines);
  };

  const handleRoutine = async () => {
    console.log("creating a new routine");
    const routineData = await postRoutine(name, goal, isPublic);
    console.log("routineData", routineData);
    const newRoutineList = [routineData, ...routines];
    console.log("newRoutineList", newRoutineList);
    setRoutines(newRoutineList);
    setName("");
    setGoal("");
    setIsPublic(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleIsPublic = () => {
    setIsPublic(!isPublic);
  };

  const handleEdit = async (id) => {
    const sendRoutine = await updateRoutine(id, name, goal);
  };

  useEffect(() => {
    (async () => {
      const userName = localStorage.getItem("username");
      const myRoutines = await getMyRoutines(userName);
      console.log(
        "myRoutines",
        myRoutines,
        typeof myRoutines,
        JSON.parse(JSON.stringify(myRoutines))
      );
      setMyRoutines(myRoutines);
    })();
  }, [myRoutines]);

  return (
    <div>
      <div>
        {" "}
        <h2>Create a new routine:</h2>
        <div className="boxForContent">
          Name:
          <input value={name} onChange={handleNameChange} />
          Goal :
          <input value={goal} onChange={handleGoalChange} />
          Public :
          <input
            type="checkbox"
            name="isPublic"
            value={isPublic}
            onChange={handleIsPublic}
          />
          <button onClick={handleRoutine}>Submit New Activitiy</button>
        </div>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        {" "}
        <h2> Here all your routines </h2>
        <pre>
          <code>{JSON.stringify(myRoutines, null, 2)}</code>
        </pre>
        {/* <pre><code>{JSON.parse(myRoutines)}</code></pre> */}
        <div>{myRoutines.name}</div>
        <div>{myRoutines.goal}</div>
        {/* <div>{typeof(myRoutines)=="object"? "loading" : myRoutines.map(routine =>
                <div className="activities" key={routine.name}>
                    <h2>{routine.name}</h2>
                    <p>{routine.goal}</p> 
                    {<button key={routine.id} onClick={() => { setEditOpen({ open: !editOpen, id: routine.id }) }} editOpen={editOpen}>Edit</button>}
                    {editOpen.open && editOpen.id === routine.id ? <> Name:
                        <input value={name}
                            onChange={handleNameChange} />
                        Goal :
                        <input value={goal}
                            onChange={handleGoalChange} /><button onClick={handleEdit(routine.id)}>Submit Edited Routine</button> </> : null}
                    {<button onClick={(event) => { handleDelete(routine.id, event) }}>Delete</button>}
                </div>
            )}</div> */}
      </div>
    </div>
  );
};
//   const [routines, setRoutines] = useState([]);
//   useEffect(async () => {
//     const allRoutines = await GetAllRoutines();
//     setRoutines(allRoutines);
//   }, []);

// const MyRoutines = ({myroutines, setMyRoutines}) => {

//     const handleDeleteSubmit = async ({id}) => {
//         try {
//                 const res = await DeleteRoutine(id)
//                 const myRoutines = await GetRoutinesByUser(GetCurrentUsername());
//                 setMyRoutines(myRoutines)
//         } catch (error) {
//             console.error(error)
//             alert('Error Creating Routine', error)
//         }
//     }

//   return (
//     <>
//       <div className="Routines">
//         <h1>My Routines</h1>
//         <CreateRoutine myroutines={myroutines} setMyRoutines={setMyRoutines} />
//         {myroutines.map(
//           ({
//             id,
//             creatorId,
//             creatorName,
//             goal,
//             isPublic = true,
//             name,
//             activities,
//           }) => (
//             <div className="RoutineCard card" key={id}>
//               <h3>Routine: {name}</h3>
//               <em>Created by {creatorName}</em>
//               <em>Goal: </em>
//               {goal}
//               <br />
//               {!!activities.length ? (
//                 <table className="routineActivityList">
//                   <thead>
//                     <tr>
//                       <th>Name</th>
//                       <th>Description</th>
//                       <th>Count</th>
//                       <th>Duration</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {activities.map(
//                       ({ id, name, description, count, duration }) => (
//                         <tr key={id}>
//                           <td>{name}</td>
//                           <td>{description}</td>
//                           <td>{count}x</td>
//                           <td>{duration}</td>
//                         </tr>
//                       )
//                     )}
//                   </tbody>
//                 </table>
//               ) : (
//                 ""
//               )}
//               <button
//                 key={`edit${id}`}
//                 onClick={() => handleEditSubmit({ id, name, goal, isPublic })}
//               >
//                 Edit
//               </button>
//               <EditRoutine
//                 setMyRoutines={setMyRoutines}
//                 id={id}
//                 name={name}
//                 goal={goal}
//                 isPublic={isPublic}
//               />
//               <button
//                 key={`delete${id}`}
//                 onClick={() => handleDeleteSubmit({ id })}
//               >
//                 Delete
//               </button>
//             </div>
//           )
//         )}
//       </div>
//     </>
//   );
// };

export default myRoutines;
