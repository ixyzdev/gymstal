import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, View } from '@/components/Themed';

const weekDays = ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'];
const calendarDays = [
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '1',
];

export default function HistorialScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} darkColor="#0B1317" lightColor="#0B1317">
        <Text style={styles.screenTitle} darkColor="#E7ECEE" lightColor="#E7ECEE">
          Historial
        </Text>

        <View style={styles.calendarCard} darkColor="#435053" lightColor="#435053">
          <View style={styles.monthRow} darkColor="transparent" lightColor="transparent">
            <FontAwesome name="chevron-left" size={14} color="#C4CDD1" />
            <Text style={styles.monthLabel} darkColor="#D8DEE0" lightColor="#D8DEE0">
              febrero
            </Text>
            <FontAwesome name="chevron-right" size={14} color="#C4CDD1" />
          </View>

          <View style={styles.weekRow} darkColor="transparent" lightColor="transparent">
            {weekDays.map((day) => (
              <Text key={day} style={styles.weekDay} darkColor="#D0D7DA" lightColor="#D0D7DA">
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.daysGrid} darkColor="transparent" lightColor="transparent">
            {calendarDays.map((day, index) => {
              const isSelected = day === '27' && index === 32;

              return (
                <View
                  key={`${day}-${index}`}
                  style={styles.dayCell}
                  darkColor="transparent"
                  lightColor="transparent">
                  <View
                    style={[styles.dayBadge, isSelected && styles.dayBadgeSelected]}
                    darkColor="transparent"
                    lightColor="transparent">
                    <Text
                      style={[styles.dayLabel, isSelected && styles.dayLabelSelected]}
                      darkColor="#DCE3E7"
                      lightColor="#DCE3E7">
                      {day}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.emptyState} darkColor="#0B1317" lightColor="#0B1317">
          <FontAwesome name="info-circle" size={28} color="#D7DFE1" />
          <Text style={styles.emptyText} darkColor="#D6DDE0" lightColor="#D6DDE0">
            No hay registros en febrero
          </Text>
          <Text style={styles.emptyText} darkColor="#D6DDE0" lightColor="#D6DDE0">
            Complete una sesión o cambie a otro mes
          </Text>
          <Text style={styles.emptyText} darkColor="#D6DDE0" lightColor="#D6DDE0">
            para ver sus sesiones.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B1317',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  screenTitle: {
    textAlign: 'center',
    fontSize: 34 / 2,
    fontWeight: '500',
    marginBottom: 16,
  },
  calendarCard: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  monthLabel: {
    fontSize: 24 / 2,
    fontWeight: '500',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 6,
  },
  weekDay: {
    width: '14.28%',
    textAlign: 'center',
    fontSize: 13 / 1,
    fontWeight: '400',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 8,
  },
  dayCell: {
    width: '14.28%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  dayBadgeSelected: {
    borderColor: '#41F5FF',
  },
  dayLabel: {
    fontSize: 25 / 2,
  },
  dayLabelSelected: {
    color: '#9EEFFF',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 26,
    gap: 4,
  },
  emptyText: {
    fontSize: 33 / 2,
    textAlign: 'center',
    lineHeight: 24,
  },
});
