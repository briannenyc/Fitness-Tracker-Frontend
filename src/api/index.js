import axios from "axios";

// const apiURL = "http://localhost:3002/api";

const apiURL ="https://fitnesstrac-kr.herokuapp.com/api"

const getHeaders = () => {
    return {
        'Content-type': 'application/json',
        Authorization: `Bearer ${getCurrentToken()}`
    }
}

// Auth Functions
export function storeCurrentUser(data) {
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    localStorage.setItem('currentUsername', JSON.stringify(data.user.username));
    localStorage.setItem('currentUserID', JSON.stringify(data.user.id));
    localStorage.setItem('currentToken', JSON.stringify(data.token));
}

export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUsername');
    localStorage.removeItem('currentUserID');
    localStorage.removeItem('currentToken');
}

export function GetCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user;
}

export function GetCurrentUserID() {
    const userID = localStorage.getItem('currentUserID');
    return userID;
}

export function GetCurrentUsername() {
    const userName = JSON.parse(localStorage.getItem('currentUsername'));
    return userName;
}
export function getCurrentToken() {
    const token = JSON.parse(localStorage.getItem('currentToken'));
    return token;
}


// Site Check
export async function healthCheck() {
    const URL = `${apiURL}/health`
    try {
        const { data } =  await axios.get(URL);
        return data;
    } catch (error) {
        console.error(error)
    }
};

// User functions

export async function registerNewUser( username, password) {
    const URL = `${apiURL}/users/register`
    try {
        const {data} = await axios.post(`${URL}`, {
            username,
            password
        })
        storeCurrentUser(data)
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function loginExistingUser(username, password) {
    const URL = `${apiURL}/users/login`
    try {
        const {data} =  await axios.post(`${URL}`, {
            username,
            password
        })
        storeCurrentUser(data)
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function GetLoggedInUser() {
    const URL = `${apiURL}/users/me`
    try {
        const {data} =  await axios.get(`${URL}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

// Activities

export async function GetAllActivities() {
    const URL = `${apiURL}/activities`
    try {
        const {data} =  await axios.get(`${URL}`)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function CreateNewActivity(name, description) {
    const URL = `${apiURL}/activities`
    try {
        const {data} = await axios.post(`${URL}`, {
                name:name,
                description:description
            },
            {
                headers: { Authorization: 'Bearer ' + getCurrentToken() }
            }
        )
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function UpdateActivity(activityID, name, description) {
    const URL = `${apiURL}/activities/${activityID}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            name:name,
            description:description
        })
        return data
    } catch (error) {
        console.error(error)
    }
};

// Routines

export async function GetAllRoutines() {
    const URL = `${apiURL}/routines`
    try {
        const {data} = await axios.get(`${URL}`)
        return data;
    } catch (error) {
        console.error(error)
    }
}

export async function GetRoutinesByUser(userName) {
    const URL = `${apiURL}/users/${userName}/routines`
    try {
        const {data} = await axios.get(`${URL}`,
            {
                headers: { Authorization: 'Bearer ' + getCurrentToken() }
            }
        )
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function GetRoutinesByActivity(ActivityID) {
    const URL = `${apiURL}/activities/${ActivityID}/routines`
    try {
        const {data} = await axios.get(`${URL}`)
        return data
    } catch (error) {
        console.error(error)
    }
}

export async function CreateNewRoutine(name, goal, isPublic) {
    const URL = `${apiURL}/routines`
    try {
        const {data} = await axios.post(`${URL}`, {
            name:name,
            goal:goal,
            isPublic:isPublic
        }, {
                headers: { Authorization: 'Bearer ' + getCurrentToken() }
            }
        )
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function UpdateRoutine(id, name, goal, isPublic) {
    const URL = `${apiURL}/routines/${id}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            id ,
            name:name,
            goal:goal,
            isPublic:isPublic
        }, {
            headers: { Authorization: 'Bearer ' + getCurrentToken() }
        })
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function DeleteRoutine(routineID) {
    const URL = `${apiURL}/routines/${routineID}`
    try {
        const {data} = await axios.delete(`${URL}`,
            {
                headers: { Authorization: 'Bearer ' + getCurrentToken() }
            })
        return data
    } catch (error) {
        console.error(error)
    }
};

// Routine Activities
export async function CreateNewRoutineActivity(routineID, count, duration) {
    const URL = `${apiURL}/routines/${routineID}/activities`
    try {
        const {data} = await axios.post(`${URL}`, {
            count:count,
            duration:duration
        })
        return data
    } catch (error) {
        console.error(error)
    }
};

export async function UpdateRoutineActivity(routineActivityID, count, duration) {
    const URL = `${apiURL}/routine_activities/${routineActivityID}`
    try {
        const {data} = await axios.patch(`${URL}`, {
            count:count,
            duration:duration
        }, {
            headers: { Authorization: 'Bearer ' + getCurrentToken() }
        })
        return data
    } catch (error) {
        
    }
};

export async function DeleteRoutineActivity(routineActivityID) {
    const URL = `${apiURL}/routine_activities/${routineActivityID}`
    try {
        const {data} = await axios.delete(`${URL}`, {
                count:count,
                duration:duration
            }, {
                headers: { Authorization: 'Bearer ' + getCurrentToken() }
            }
        )
        return data
    } catch (error) {
        console.error(error)
    }
};