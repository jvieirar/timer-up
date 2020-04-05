import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';

import { IWorkout } from './model/workouts';
import { getAllWorkouts } from './services/dataService';
import WorkoutLayout from './layouts/WorkoutLayout';

function App() {
  // properties
  const [workouts, setWorkouts] = useState<IWorkout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // methods
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setTimeout(async () => {
        const workouts = await getAllWorkouts();
        setWorkouts(workouts);
      }, 1000);
      setIsLoading(false);
    })();
  }, []);

  // render
  const renderWorkout = () => {
    if (workouts?.length > 0) {
      return <WorkoutLayout workout={workouts[0]} />;
    } else {
      return <div>Please, add a workout</div>;
    }
  };

  return (
    <div className={styles.App}>
      <h1>timer up</h1>
      <h2>Workouts</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        // <ul>
        //   {workouts.map((workout) => (
        //     <li key={workout.title}>
        //       <h3>{workout.title}</h3>
        //       <ul>
        //         {workout.sets.map((set) => (
        //           <li key={set.position}>
        //             <h4>
        //               {set.title}: {set.position}/{workout.sets.length}
        //             </h4>
        //           </li>
        //         ))}
        //       </ul>
        //     </li>
        //   ))}
        // </ul>
        renderWorkout()
      )}
    </div>
  );
}

export default App;
