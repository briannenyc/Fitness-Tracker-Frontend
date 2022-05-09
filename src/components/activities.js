import React, {useState, useEffect} from 'react';
import {getAllActivity} from '../api';

const Activities = (props) => {
  const { activities, setActivities } = props;

  useEffect(() => {
    (async () => {
      const activities = await getAllActivity();
      setActivities(activities);
    })();
  }, []);

  return (
    <div className="informationBox">
      <div className="box_of_information">
        <h1>Please look at all of the activities available for tracking!</h1>

        {activities.map((activity) => (
          <div className="information" key={activity.id}>
            <h2> Activity Name : {activity.name}</h2>
            <h2>Activity Description: {activity.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;

