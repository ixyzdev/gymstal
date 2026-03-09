import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { neutrals } from '@/shared/theme/neutrals';

import { MenuItemList } from './components/MenuItemList';
import { menuItems } from './data/menuItems';

export function MenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const items = useMemo(
    () =>
      menuItems.map((item) => ({
        ...item,
        onPress: item.route ? () => router.push(item.route!) : undefined,
      })),
    [router]
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom }]}
        showsVerticalScrollIndicator={false}
      >
        <MenuItemList items={items} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutrals.background,
  },
  content: {
    flexGrow: 1,
  },
})
