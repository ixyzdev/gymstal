import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { BottomQuickAction } from '@/features/workout/components/BottomQuickAction';
import { SectionTitle } from '@/features/workout/components/SectionTitle';
import { TopActionButtons } from '@/features/workout/components/TopActionButtons';
import { WorkoutCard } from '@/features/workout/components/WorkoutCard';
import {
  currentWorkout,
  quickAction,
  upcomingWorkouts,
  topActions,
} from '@/features/workout/data/workoutMockData';
import { useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

const createStyles = (t: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: t.background,
    },
    content: {
      paddingHorizontal: 12,
      paddingTop: 56,
      paddingBottom: 96,
      gap: 4,
    },
    sectionHeading: {
      color: t.textSecondary,
      fontSize: 28,
      marginBottom: 10,
      marginTop: 4,
    },
    nextSection: {
      marginTop: 22,
    },
    bottomActionContainer: {
      marginTop: 56,
      alignSelf: 'flex-end',
      width: 220,
    },
  });

export function ExerciseScreen() {
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);

  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.content}>
        <SectionTitle title="LiftLog" />

        <TopActionButtons actions={topActions} />

        <Text style={styles.sectionHeading}>Entrenamiento actual</Text>
        <WorkoutCard
          title={currentWorkout.title}
          primaryAction={currentWorkout.primaryAction}
          secondaryActionIcon="delete-outline"
        />

        <Text style={[styles.sectionHeading, styles.nextSection]}>Próximos entrenamientos</Text>
        {upcomingWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            title={workout.title}
            primaryAction={workout.primaryAction}
            secondaryActionIcon="pencil-outline"
          />
        ))}

        <View style={styles.bottomActionContainer}>
          <BottomQuickAction label={quickAction.label} />
        </View>
      </ScrollView>
    </View>
  );
}
