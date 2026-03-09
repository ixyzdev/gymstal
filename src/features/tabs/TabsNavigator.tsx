import { Tabs } from 'expo-router';
import { House, Menu } from 'lucide-react-native';
import { Platform } from 'react-native';

import { neutrals } from '@/shared/theme/neutrals';

export function TabsNavigator() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: neutrals.tabActive,
        tabBarInactiveTintColor: neutrals.tabInactive,
        tabBarStyle: {
          backgroundColor: neutrals.background,
          borderTopColor: neutrals.border,
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
