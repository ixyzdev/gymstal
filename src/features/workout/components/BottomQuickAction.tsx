import { Button } from 'react-native-paper';

import { useTheme } from '@/shared/theme/ThemeContext';

export function BottomQuickAction({ label }: { label: string }) {
  const t = useTheme();
  return (
    <Button
      mode="contained"
      icon="dumbbell"
      buttonColor={t.surfaceSoft}
      textColor={t.textPrimary}
      contentStyle={{ paddingVertical: 8 }}
      style={{ borderRadius: 14 }}>
      {label}
    </Button>
  );
}
