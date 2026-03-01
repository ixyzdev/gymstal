import { Text } from 'react-native-paper';

import { neutrals } from '@/shared/theme/neutrals';

export function SectionTitle({ title }: { title: string }) {
  return <Text style={{ color: neutrals.textSecondary, fontSize: 28, textAlign: 'center', marginBottom: 20 }}>{title}</Text>;
}
