import { type LucideIcon } from 'lucide-react-native'
import { Pressable, View, Text, StyleSheet } from 'react-native'

export type MenuItemProps = {
  title: string
  description: string
  icon?: LucideIcon
  onPress?: () => void
}

export function MenuItem({ title, description, icon: Icon, onPress }: MenuItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {Icon && <Icon size={22} style={styles.icon} />}
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 14,
  },
  icon: {
    flexShrink: 0,
  },
  text: {
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: '600'
  },
  description: {
    fontSize: 13,
    marginTop: 2
  }
})
