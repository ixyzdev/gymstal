import { View } from 'react-native';
import { Button, Card, IconButton, Text } from 'react-native-paper';

import { useTheme } from '@/shared/theme/ThemeContext';

type WorkoutCardProps = {
  title: string;
  primaryAction: string;
  secondaryActionIcon: 'delete-outline' | 'pencil-outline';
};

export function WorkoutCard({ title, primaryAction, secondaryActionIcon }: WorkoutCardProps) {
  const t = useTheme();
  return (
    <Card style={{ backgroundColor: t.surface, borderRadius: 12 }}>
      <Card.Content>
        <Text style={{ color: t.textPrimary, fontSize: 34, fontWeight: '700', marginBottom: 24 }}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
          <IconButton icon={secondaryActionIcon} iconColor={t.button} size={20} />
          <Button
            mode="contained"
            icon="play-circle-outline"
            buttonColor={t.button}
            textColor={t.buttonText}
            style={{ borderRadius: 28 }}>
            {primaryAction}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
