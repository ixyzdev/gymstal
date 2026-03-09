import { View } from 'react-native';
import { Button } from 'react-native-paper';

import type { TopAction } from '@/features/workout/data/workoutMockData';
import { useTheme } from '@/shared/theme/ThemeContext';

export function TopActionButtons({ actions }: { actions: TopAction[] }) {
  const t = useTheme();
  return (
    <View style={{ flexDirection: 'row', gap: 10, marginBottom: 18 }}>
      {actions.map((action) => (
        <Button
          key={action.id}
          mode={action.variant}
          compact
          icon={action.id === 'plan' ? 'clipboard-text-outline' : 'pencil-outline'}
          textColor={action.variant === 'outlined' ? t.button : t.buttonText}
          buttonColor={action.variant === 'contained' ? t.tabActive : undefined}
          style={{ flex: 1, borderColor: t.border }}>
          {action.label}
        </Button>
      ))}
    </View>
  );
}
