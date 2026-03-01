import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type PlaceholderTabScreenProps = {
  title: string;
  subtitle: string;
};

export function PlaceholderTabScreen({ title, subtitle }: PlaceholderTabScreenProps) {
  return (
    <View style={styles.container} darkColor="#0B1317" lightColor="#0B1317">
      <Text style={styles.title} darkColor="#E7ECEE" lightColor="#E7ECEE">
        {title}
      </Text>
      <Text style={styles.subtitle} darkColor="#A8B1B5" lightColor="#A8B1B5">
        {subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    opacity: 0.75,
  },
});
