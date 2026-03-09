import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { MenuItemList } from './components/MenuItemList';
import { menuItems } from './data/menuItems';

export function MenuScreen() {
  const router = useRouter();

  const items = menuItems.map((item) => ({
    ...item,
    onPress: item.route ? () => router.push(item.route!) : undefined,
  }));

  return (
    <View style={styles.container}>
      <MenuItemList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
