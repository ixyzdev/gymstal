import { Button } from 'react-native-paper';

import { neutrals } from '@/shared/theme/neutrals';

export function BottomQuickAction({ label }: { label: string }) {
  return (
    <Button
      mode="contained"
      icon="dumbbell"
      buttonColor={neutrals.surfaceSoft}
      textColor={neutrals.textPrimary}
      contentStyle={{ paddingVertical: 8 }}
      style={{ borderRadius: 14 }}>
      {label}
    </Button>
  );
}
