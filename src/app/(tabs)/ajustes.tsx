import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '@/components/Themed';
import { FloatingActionButton } from '@/components/ui/FloatingActionButton';
import { PlanListItem } from '@/components/ui/PlanListItem';

const plans = [
  { title: '1', editedAt: '2025-10-10', selected: true },
  { title: 'Cardio', editedAt: '2024-01-01' },
  { title: 'Heavy Calisthenics', editedAt: '2024-01-01' },
  { title: 'Light Calisthenics', editedAt: '2024-01-01' },
  { title: 'Nuevo plan', editedAt: '2025-10-20' },
  { title: 'PHUL', editedAt: '2024-01-01' },
  { title: 'PPL', editedAt: '2024-01-01' },
  { title: 'Pecho-Espalda-Pierna-Pecho', editedAt: '2025-09-21' },
];

export default function PlanesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header} darkColor="#0B1317" lightColor="#0B1317">
        <FontAwesome name="chevron-left" size={21} color="#DCE3E7" />
        <Text style={styles.title} darkColor="#E7ECEE" lightColor="#E7ECEE">
          Planes
        </Text>
        <View
          style={styles.headerPlaceholder}
          darkColor="transparent"
          lightColor="transparent"
        />
      </View>

      <View style={styles.content} darkColor="#0B1317" lightColor="#0B1317">
        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}>
          {plans.map((plan) => (
            <PlanListItem
              key={plan.title}
              title={plan.title}
              editedAt={plan.editedAt}
              selected={plan.selected}
            />
          ))}
        </ScrollView>

        <FloatingActionButton label="Añadir plan" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B1317',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerPlaceholder: {
    width: 20,
  },
  title: {
    fontSize: 17.5,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  list: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#0B1317',
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 100,
  },
});
