import { Pressable, View, Text, StyleSheet } from 'react-native'

export type MenuItemProps = {
  title: string
  description: string
  onPress?: () => void
}

export function MenuItem({ title, description, onPress }: MenuItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 20
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
