import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

import { MenuItemList } from './components/MenuItemList';
import { menuItems } from './data/menuItems';

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    content: {
      flexGrow: 1,
    },
  });

export function MenuScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);

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
