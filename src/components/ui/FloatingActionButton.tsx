import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

type FloatingActionButtonProps = {
  label: string;
};

export function FloatingActionButton({ label }: FloatingActionButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <View style={styles.row} darkColor="transparent" lightColor="transparent">
        <FontAwesome name="plus" size={20} color="#41F5FF" />
        <Text style={styles.text} darkColor="#41F5FF" lightColor="#41F5FF">
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 18,
    bottom: 24,
    borderRadius: 16,
    backgroundColor: '#173A46',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: '#1E4A58',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.35)',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontWeight: '700',
    fontSize: 22 / 2,
  },
});
