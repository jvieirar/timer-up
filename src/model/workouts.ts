export interface IWorkout {
  title: string;
  sets: ISet[];
}

export interface IWarmUp {
  duration: number;
  title?: string;
}

export interface IStretch {
  duration: number;
  title?: string;
}

export interface ISet {
  position: number;
  cycles: ICycle[];
  title?: string;
  warmUp?: IWarmUp;
  stretch?: IStretch;
}

export interface ICycle {
  exercises: IExercise[];
  rests: IRest[];
  title?: string;
}

export interface IRest {
  duration: number;
}

export interface IExercise {
  title: string;
  duration: number;
}
