import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import { neutrals } from '@/shared/theme/neutrals';

export function PlaceholderView({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Vista preparada para implementación futura.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: neutrals.background,
    padding: 24,
  },
  title: {
    color: neutrals.textPrimary,
    fontSize: 30,
    marginBottom: 6,
  },
  subtitle: {
    color: neutrals.textSecondary,
    fontSize: 16,
  },
});
