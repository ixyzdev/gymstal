import { Text } from 'react-native-paper';

import { useTheme } from '@/shared/theme/ThemeContext';

export function SectionTitle({ title }: { title: string }) {
  const t = useTheme();
  return <Text style={{ color: t.textSecondary, fontSize: 28, textAlign: 'center', marginBottom: 20 }}>{title}</Text>;
}
