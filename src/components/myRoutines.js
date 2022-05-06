import React from 'react';
// import {CreateRoutine, EditRoutine} from './App'
import {GetRoutinesByUser,GetCurrentUsername, DeleteRoutine} from '../api'

const MyRoutines = ({myroutines, setMyRoutines}) => {


    const handleDeleteSubmit = async ({id}) => {
        try {   
                const res = await DeleteRoutine(id)
                const myRoutines = await GetRoutinesByUser(GetCurrentUsername());
                setMyRoutines(myRoutines)
        } catch (error) {
            console.error(error)
            alert('Error Creating Routine', error)
        }
    }
    
    return (
        <>
            <div className = "Routines">
                <h1>My Routines</h1>    
                <CreateRoutine myroutines={myroutines}  setMyRoutines={setMyRoutines} />            
                {myroutines.map(({id, creatorId ,creatorName, goal, isPublic=true ,name, activities }) => (
                    <div className="RoutineCard card" key={id}> 
                        <h3>Routine: {name}</h3>
                        <em>Created by {creatorName}</em>
                        <em>Goal: </em>{goal}
                        <br />
                        {!!activities.length ? 
                            (
                            <table className="routineActivityList">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Count</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {activities.map(({ id, name, description, count, duration}) => (
                                            <tr key={id} >
                                                <td>{name}</td>
                                                <td>{description}</td>
                                                <td>{count}x</td>
                                                <td>{duration}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                            </table>
                            ) : ""
                        }
                        {/* <button key={`edit${id}`} onClick={() => handleEditSubmit({id, name, goal, isPublic})} >Edit</button> */}
                        <EditRoutine setMyRoutines={setMyRoutines} id={id} name={name} goal={goal} isPublic = {isPublic}/>
                        <button key={`delete${id}`} onClick={() => handleDeleteSubmit({id})} >Delete</button>
                    </div>
                ))}           
            </div>   

        </>
        )

}

export default MyRoutines;