import currentWorkoutJson from '@/features/workout/data/current-workout.json';
import quickActionJson from '@/features/workout/data/quick-action.json';
import topActionsJson from '@/features/workout/data/top-actions.json';
import upcomingWorkoutsJson from '@/features/workout/data/upcoming-workouts.json';

export type WorkoutActionVariant = 'outlined' | 'contained';

export type CurrentWorkout = {
  id: string;
  title: string;
  primaryAction: string;
  secondaryAction: string;
};

export type UpcomingWorkout = {
  id: string;
  title: string;
  primaryAction: string;
  secondaryAction: string;
};

export type TopAction = {
  id: string;
  label: string;
  variant: WorkoutActionVariant;
};

export type QuickAction = {
  id: string;
  label: string;
};

export const currentWorkout: CurrentWorkout = currentWorkoutJson;
export const upcomingWorkouts: UpcomingWorkout[] = upcomingWorkoutsJson;
export const topActions: TopAction[] = topActionsJson;
export const quickAction: QuickAction = quickActionJson;
