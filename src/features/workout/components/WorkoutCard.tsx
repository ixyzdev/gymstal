import { View } from 'react-native';
import { Button, Card, IconButton, Text } from 'react-native-paper';

import { neutrals } from '@/shared/theme/neutrals';

type WorkoutCardProps = {
  title: string;
  primaryAction: string;
  secondaryActionIcon: 'delete-outline' | 'pencil-outline';
};

export function WorkoutCard({ title, primaryAction, secondaryActionIcon }: WorkoutCardProps) {
  return (
    <Card style={{ backgroundColor: neutrals.surface, borderRadius: 12 }}>
      <Card.Content>
        <Text style={{ color: neutrals.textPrimary, fontSize: 34, fontWeight: '700', marginBottom: 24 }}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
          <IconButton icon={secondaryActionIcon} iconColor={neutrals.button} size={20} />
          <Button
            mode="contained"
            icon="play-circle-outline"
            buttonColor={neutrals.button}
            textColor={neutrals.buttonText}
            style={{ borderRadius: 28 }}>
            {primaryAction}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}
