import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: t.background,
      padding: 24,
    },
    title: {
      color: t.textPrimary,
      fontSize: 30,
      marginBottom: 6,
    },
    subtitle: {
      color: t.textSecondary,
      fontSize: 16,
    },
  });

export function PlaceholderView({ title }: { title: string }) {
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Vista preparada para implementación futura.</Text>
    </View>
  );
}
