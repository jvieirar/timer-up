import React, { useState, useEffect } from 'react';

import Header from '../Header';
import StatusBar from '../StatusBar';
import styles from './WorkoutLayout.module.scss';
import { IWorkout } from '../../model/workouts';

interface Props {
  workout: IWorkout;
  // title: string;
}

const WorkoutLayout = (props: Props) => {
  // properties
  const { workout } = props;
  const [setPosition, setSetPosition] = useState<number>(1);
  const [cyclePosition, setCyclePosition] = useState<number>(1);
  // const [cyclePosition, setCyclePosition] = useState<number>(1);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [clock, setClock] = useState<number>(0);

  // methods
  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const startTimer = () => {
    let duration = workout.sets[setPosition].cycles[cyclePosition].exercises[0].duration;
    setClock(duration);
    setIsRunning(true);
    setTimer(
      setInterval(() => {
        setClock((curr) => curr - 1);
        duration -= 1;
        console.log({ duration });

        if (duration === 1) {
          console.log('Should stop now');

          setIsRunning(false);
          // @ts-ignore
          clearInterval(timer);
          setTimer(null);
        }
      }, 1000),
    );
  };

  // render
  return (
    <>
      <Header title={workout.title} />
      <main>
        <h2>{workout.title}</h2>
        <section>TIMEOUT: {clock}</section>
        <button onClick={startTimer}>START</button>
      </main>
      <StatusBar />
    </>
  );
};

export default WorkoutLayout;
