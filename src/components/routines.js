import React, { useState, useEffect } from "react";
import { getRoutines } from "../api";



export const Routines = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(async () => {
    const allRoutines = await getRoutines();
    setRoutines(allRoutines);
  }, []);

 
  return (
    <div className="contentBox">
      <div className="boxForContent">
        {routines.map((routine) => (
          <div className="content" key={routine.id}>
            <h2>Routine Name : {routine.name}</h2>
            <h2>Routine Goal : {routine.goal}</h2>
            <h2>Routine Creator : {routine.creatorName}</h2>

            <h2>Activity Details : </h2>

            {routine.activities
              ? routine.activities.map((rActivity) => (
                  <div key={rActivity.id}>
                    <h2>Name : {rActivity.name}</h2>
                    <h2>Description : {rActivity.description}</h2>
                    <h2>Duration: {rActivity.duration}</h2>
                    <h2>Count: {rActivity.count}</h2>
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routines;
