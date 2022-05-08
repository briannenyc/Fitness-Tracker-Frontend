import React, { useState } from "react";
import { updateRoutine } from "../api";

const Update = (props) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const { routines, setRoutines } = props;
  const { loggedIn } = props;

  const [hasTriggeredError, setHasTriggeredError] = useState(false);

  const handleSubmit = async (event, id) => {
    event.preventDefault();

    const newRoutine = {
      name: name,
      goal: goal,
    };
    const sendRoutine = await updateRoutine(id, name, goal);
    const found = routines.find((routine) => routine.id === id);
    setRoutines([...routines, sendRoutine, found]);
  };

  const handleName = (event) => setName(event.target.value);
  const handleGoal = (event) => setGoal(event.target.value);

  if (hasTriggeredError)
    return (
      <p style={{ color: "red" }}>
        {" "}
        Please update accordingly!{" "}
      </p>
    );

  return (
    <div>
      {!loggedIn ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" value={name} onChange={handleName} />
            <label htmlFor="goal">Goal</label>
            <input type="text" name="goal" value={goal} onChange={handleGoal} />

            <button type="submit">Submit</button>
          </form>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Update;
