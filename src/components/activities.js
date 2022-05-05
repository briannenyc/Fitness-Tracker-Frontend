import React, {useState} from 'react';
// import {CreateActivity} from './App';

export const Activities = ({activities, setActivities}) => {
    
    return (
        <>
            <div className = "activities">
                <h1>Activities</h1>
                {activities.map(({id, name, description}) => (
                    <div className="ActivityCard card" key={id}> 
                        <h3>Activity: {name}</h3>
                        <h4>Description: {description}</h4>
                    </div>
                ))}           
            </div>
            <CreateActivity activities={activities} setActivities = {setActivities}/>
        </>
        )

}

export default Activities;