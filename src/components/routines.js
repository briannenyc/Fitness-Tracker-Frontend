import React from 'react';

export const Routines = ({routines}) => {
    
    return (
        <div className = "routines">
            <h1>Routines</h1>
            {routines.map(({id, creatorId ,creatorName, goal, isPublic ,name, activities }) => (
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
                </div>
            ))}           
        </div>   
        )

}

export default Routines;