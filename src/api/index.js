// import axios from "axios";

// const apiURL ="https://fitnesstrac-kr.herokuapp.com/api"

// const getHeaders = () => {
//     return {
//         'Content-type': 'application/json',
//         Authorization: `Bearer ${getCurrentToken()}`
//     }
// }

// // Auth Functions
// export function storeCurrentUser(data) {
//     localStorage.setItem('currentUser', JSON.stringify(data.user));
//     localStorage.setItem('currentUsername', JSON.stringify(data.user.username));
//     localStorage.setItem('currentUserID', JSON.stringify(data.user.id));
//     localStorage.setItem('currentToken', JSON.stringify(data.token));
// }

// export function clearCurrentUser() {
//     localStorage.removeItem('currentUser');
//     localStorage.removeItem('currentUsername');
//     localStorage.removeItem('currentUserID');
//     localStorage.removeItem('currentToken');
// }

// export function GetCurrentUser() {
//     const user = JSON.parse(localStorage.getItem('currentUser'));
//     return user;
// }

// export function GetCurrentUserID() {
//     const userID = localStorage.getItem('currentUserID');
//     return userID;
// }

// // imported in CreateRoutine
// export function GetCurrentUsername() {
//     const userName = JSON.parse(localStorage.getItem('currentUsername'));
//     return userName;
// }
// export function getCurrentToken() {
//     const token = JSON.parse(localStorage.getItem('currentToken'));
//     return token;
// }


// // Site Check
// export async function healthCheck() {
//     const URL = `${apiURL}/health`
//     try {
//         const { data } =  await axios.get(URL);
//         return data;
//     } catch (error) {
//         console.error(error)
//     }
// };

// // User functions

// export async function registerNewUser( username, password) {
//     const URL = `${apiURL}/users/register`
//     try {
//         const {data} = await axios.post(`${URL}`, {
//             username,
//             password
//         })
//         storeCurrentUser(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function loginExistingUser(username, password) {
//     const URL = `${apiURL}/users/login`
//     try {
//         const {data} =  await axios.post(`${URL}`, {
//             username,
//             password
//         })
//         storeCurrentUser(data)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function GetLoggedInUser() {
//     const URL = `${apiURL}/users/me`
//     try {
//         const {data} =  await axios.get(`${URL}`)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// // Activities

// export async function GetAllActivities() {
//     const URL = `${apiURL}/activities`
//     try {
//         const {data} =  await axios.get(`${URL}`)
//         return data;
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function CreateNewActivity(name, description) {
//     const URL = `${apiURL}/activities`
//     try {
//         const {data} = await axios.post(`${URL}`, {
//                 name:name,
//                 description:description
//             },
//             {
//                 headers: { Authorization: 'Bearer ' + getCurrentToken() }
//             }
//         )
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function UpdateActivity(activityID, name, description) {
//     const URL = `${apiURL}/activities/${activityID}`
//     try {
//         const {data} = await axios.patch(`${URL}`, {
//             name:name,
//             description:description
//         })
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// // Routines

// // imported to CreateRoutines
// export async function GetAllRoutines() {
//     const URL = `${apiURL}/routines`
//     try {
//         const {data} = await axios.get(`${URL}`)
//         return data;
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function GetRoutinesByUser(userName) {
//     const URL = `${apiURL}/users/${userName}/routines`
//     try {
//         const {data} = await axios.get(`${URL}`,
//             {
//                 headers: { Authorization: 'Bearer ' + getCurrentToken() }
//             }
//         )
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// export async function GetRoutinesByActivity(ActivityID) {
//     const URL = `${apiURL}/activities/${ActivityID}/routines`
//     try {
//         const {data} = await axios.get(`${URL}`)
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

// // imported to CreateRoutine
// export async function CreateNewRoutine(name, goal, isPublic) {
//     const URL = `${apiURL}/routines`
//     try {
//         const {data} = await axios.post(`${URL}`, {
//             name:name,
//             goal:goal,
//             isPublic:isPublic
//         }, {
//                 headers: { Authorization: 'Bearer ' + getCurrentToken() }
//             }
//         )
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function UpdateRoutine(id, name, goal, isPublic) {
//     const URL = `${apiURL}/routines/${id}`
//     try {
//         const {data} = await axios.patch(`${URL}`, {
//             id ,
//             name:name,
//             goal:goal,
//             isPublic:isPublic
//         }, {
//             headers: { Authorization: 'Bearer ' + getCurrentToken() }
//         })
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function DeleteRoutine(routineID) {
//     const URL = `${apiURL}/routines/${routineID}`
//     try {
//         const {data} = await axios.delete(`${URL}`,
//             {
//                 headers: { Authorization: 'Bearer ' + getCurrentToken() }
//             })
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// // Routine Activities
// export async function CreateNewRoutineActivity(routineID, count, duration) {
//     const URL = `${apiURL}/routines/${routineID}/activities`
//     try {
//         const {data} = await axios.post(`${URL}`, {
//             count:count,
//             duration:duration
//         })
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

// export async function UpdateRoutineActivity(routineActivityID, count, duration) {
//     const URL = `${apiURL}/routine_activities/${routineActivityID}`
//     try {
//         const {data} = await axios.patch(`${URL}`, {
//             count:count,
//             duration:duration
//         }, {
//             headers: { Authorization: 'Bearer ' + getCurrentToken() }
//         })
//         return data
//     } catch (error) {
        
//     }
// };

// export async function DeleteRoutineActivity(routineActivityID) {
//     const URL = `${apiURL}/routine_activities/${routineActivityID}`
//     try {
//         const {data} = await axios.delete(`${URL}`, {
//                 count:count,
//                 duration:duration
//             }, {
//                 headers: { Authorization: 'Bearer ' + getCurrentToken() }
//             }
//         )
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// };

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
    const deletedRoutine = await response.json();
    return deletedRoutine;
  } catch (error) {
    console.log("This is an error message for deleteRoutine!");
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