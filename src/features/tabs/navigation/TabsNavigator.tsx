import { Tabs } from 'expo-router';

import { MaterialTabBar } from '@/features/tabs/components/MaterialTabBar';
import { neutrals } from '@/shared/theme/neutrals';

export function TabsNavigator() {
  return (
    <Tabs
      tabBar={(props) => <MaterialTabBar {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: neutrals.background },
        headerTintColor: neutrals.textPrimary,
        sceneStyle: { backgroundColor: neutrals.background },
      }}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="feed" options={{ headerShown: false }} />
      <Tabs.Screen name="stats" options={{ headerShown: false }} />
      <Tabs.Screen name="history" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
    </Tabs>
  );
}
