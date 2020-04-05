import { IWorkout } from '../model/workouts';

const DEFAULT_WORKOUTS: IWorkout[] = [
  {
    title: 'Daily Pointers',
    sets: [
      {
        title: 'Heart up!',
        position: 1,
        cycles: [
          { exercises: [{ title: 'Fast Punches', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Bicycles', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Fast Feet', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Fast Punches', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Bicycles', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Fast Feet', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Fast Punches', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Bicycles', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Fast Feet', duration: 20 }], rests: [{ duration: 10 }] },
        ],
      },
      {
        title: 'Hercules',
        position: 2,
        cycles: [
          { exercises: [{ title: 'Push Ups', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Legs Raises', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Squads', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Push Ups', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Legs Raises', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Squads', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Push Ups', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Legs Raises', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Squads', duration: 20 }], rests: [{ duration: 10 }] },
        ],
      },
      {
        title: 'Solid',
        position: 3,
        cycles: [
          { exercises: [{ title: 'Full to elbow plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Right Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Left Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Full to elbow plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Right Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Left Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Full to elbow plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Right Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
          { exercises: [{ title: 'Left Side Plank', duration: 20 }], rests: [{ duration: 10 }] },
        ],
      },
    ],
  },
];

export async function getAllWorkouts(): Promise<IWorkout[]> {
  return DEFAULT_WORKOUTS;
}
