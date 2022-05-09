

const baseUrl = "https://fitnesstrac-kr.herokuapp.com/api";

export const login = async (userObject) => {
  const URL = `${baseUrl}/users/login`;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  const json = await response.json();
  console.log("this is json in login", json);

  if (!json.user) {
    return false;
  } else {
    localStorage.setItem("UserToken", json.token);
    return true;
  }
};

export const registerUser = async (userObject) => {
  const url = `${baseUrl}/users/register`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });
    const json = await response.json();
    if (!json.user) {
      return false;
    } else {
      localStorage.setItem("UserToken", json.token);
      return true;
    }
  } catch (error) {
    console.log("This is an error message for register user api error", error);
  }
};



export const getIdOfloggedInUser = async (userObject) => {
  const URL = `${baseUrl}/users/login`;

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  const json = await response.json();
  console.log("getIdofloggedInUser", json);
  return json.id;
};

export const getUser = async () => {
  const URL = `${baseUrl}/users/me`;
  try {
    const url = `${baseUrl}/users/me`;
    const token = localStorage.getItem("UserToken");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("This is an error message for getUser!", error);
  }
};

export const getMyRoutines = async (username) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    if (token) {
      response = await fetch(`${baseUrl}/users/${username}/routines`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } else {
      response = await fetch(`${baseUrl}/users/${username}/routines`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const returnedRoutine = await response.json();
    return returnedRoutine;
  } catch (error) {
    console.log("This is an error message for getMyRoutines!");
    throw error;
  }
};

// This has been exported to MyActivities. MyActivities has imported postActivity.

export const postActivity = async (name, description) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(`${baseUrl}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ name: name, description: description }),
    });
    const postedActivity = await response.json();
    return postedActivity;
  } catch (error) {
    console.log("This is an error message for postActivity!");
    throw error;
  }
};

// This has been exported to activities. Activities has imported getAllActivities.

export const getAllActivity = async () => {
  let response;
  try {
    response = await fetch(`${baseUrl}/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const returnedActivities = await response.json();
    return returnedActivities;
  } catch (error) {
    console.log("This is an error message for getAllActivity!");
    throw error;
  }
};



export const updateActivity = async (activityId, name, description) => {
  let response;
  try {
    response = await fetch(`${baseUrl}/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, description: description }),
    });
    const updatedActivity = await response.json();
    return updatedActivity;
  } catch (error) {
    console.log("This is an error message for updateActivity!");
    throw error;
  }
};

export const getRoutineByActivityId = async (activityId) => {
  let response;
  try {
    response = await fetch(`${baseUrl}/activities/${activityId}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routines = await response.json();
    return routines;
  } catch (error) {
    console.log("This is an error message for getRoutineByActivityId!");
    throw error;
  }
};

// This has been exported to routines. Routines has imported getRoutines.
export const getRoutines = async () => {
  let response;
  try {
    response = await fetch(`${baseUrl}/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const routines = await response.json();
    console.log("api", routines);
    return routines;
  } catch (error) {
    console.log("This is an error message for getRoutines!");
    throw error;
  }
};

export const updateRoutine = async (routineId, name, goal) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(`${baseUrl}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ name: name, goal: goal }),
    });
    const updatedRoutine = await response.json();
    return updatedRoutine;
  } catch (error) {
    console.log("This is an error message for updateRoutine!");
    throw error;
  }
};

export const postRoutine = async (name, goal, isPublic) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(`${baseUrl}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ name: name, goal: goal, isPublic: isPublic }),
    });
    const postedRoutine = await response.json();
    console.log(postedRoutine);
    return postedRoutine;
  } catch (error) {
    console.log("This is an error message for postRoutine!");
    throw error;
  }
};



export const postActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration
) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(`${baseUrl}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration,
      }),
    });
    const postedActivityToRoutine = await response.json();
    return postedActivityToRoutine;
  } catch (error) {
    console.log("This is an error message for postActivityToRoutine!");
    throw error;
  }
};

export const deleteRoutineByRoutineId = async (routineId) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    if (token) {
      response = await fetch(`${baseUrl}/routines/${routineId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    }
    const deleteRoutineByRoutineId = await response.json();
    return deleteRoutineByRoutineId;
  } catch (error) {
    console.log("This is an error message fordeleteRoutineByRoutineId  !");
    throw error;
  }
};

export const updateRoutineActivity = async (
  routineActivityId,
  count,
  duration
) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(
      `${baseUrl}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ count: count, duration: duration }),
      }
    );
    const updatedRoutineActivity = await response.json();
    return updatedRoutineActivity;
  } catch (error) {
    console.log("This is an error message for updateRoutineActivity!");
    throw error;
  }
};

export const deleteRoutineActivity = async (
  routineActivityId,
  count,
  duration
) => {
  const token = localStorage.getItem("UserToken");
  let response;
  try {
    response = await fetch(
      `${baseUrl}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const deletedRoutineActivity = await response.json();
    return deletedRoutineActivity;
  } catch (error) {
    console.log("This is an error message for deleteRoutineActivity!");
    throw error;
  }
};