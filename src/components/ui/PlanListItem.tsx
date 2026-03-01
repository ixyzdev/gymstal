import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type PlanListItemProps = {
  title: string;
  editedAt: string;
  selected?: boolean;
};

export function PlanListItem({ title, editedAt, selected = false }: PlanListItemProps) {
  return (
    <View style={styles.wrapper} darkColor="#0B1317" lightColor="#0B1317">
      <View style={styles.content} darkColor="#0B1317" lightColor="#0B1317">
        <Text style={styles.title} darkColor="#DCE3E7" lightColor="#DCE3E7">
          {title}
        </Text>
        <Text style={styles.date} darkColor="#9AA4AA" lightColor="#9AA4AA">
          Editado: {editedAt}
        </Text>
      </View>

      <View style={styles.trailing} darkColor="#0B1317" lightColor="#0B1317">
        {selected && <FontAwesome name="check" size={20} color="#41F5FF" />}
        <Pressable hitSlop={10}>
          <FontAwesome name="ellipsis-h" size={16} color="#A2ADB3" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    gap: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 2,
  },
  date: {
    fontSize: 13,
  },
  trailing: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
