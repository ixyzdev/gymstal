import { Tabs } from 'expo-router';
import { House, Menu } from 'lucide-react-native';
import { Platform } from 'react-native';

import { useTheme } from '@/shared/theme/ThemeContext';

export function TabsNavigator() {
  const t = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: t.tabActive,
        tabBarInactiveTintColor: t.tabInactive,
        tabBarStyle: {
          backgroundColor: t.background,
          borderTopColor: t.border,
          paddingBottom: Platform.OS === 'android' ? 8 : 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <House color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="feed"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="stats"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Menu color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
