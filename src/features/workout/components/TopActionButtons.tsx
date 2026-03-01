import { View } from 'react-native';
import { Button } from 'react-native-paper';

import type { TopAction } from '@/features/workout/data/workoutMockData';
import { neutrals } from '@/shared/theme/neutrals';

export function TopActionButtons({ actions }: { actions: TopAction[] }) {
  return (
    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 18 }}>
      {actions.map((action) => (
        <Button
          key={action.id}
          mode={action.variant}
          compact
          icon={action.id === 'plan' ? 'clipboard-text-outline' : 'pencil-outline'}
          textColor={action.variant === 'outlined' ? neutrals.button : neutrals.buttonText}
          buttonColor={action.variant === 'contained' ? neutrals.tabActive : undefined}
          style={{ flex: 1, borderColor: neutrals.border }}>
          {action.label}
        </Button>
      ))}
    </View>
  );
}
