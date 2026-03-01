import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';

import { neutrals } from '@/shared/theme/neutrals';

const iconByRouteName: Record<string, string> = {
  index: 'dumbbell',
  feed: 'post-outline',
  stats: 'chart-box-outline',
  history: 'history',
  settings: 'cog-outline',
};

const labelByRouteName: Record<string, string> = {
  index: 'Ejercicio',
  feed: 'Feed',
  stats: 'Estadísticas',
  history: 'Historial',
  settings: 'Ajustes',
};

export function MaterialTabBar({ navigation, state, descriptors, insets }: BottomTabBarProps) {
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      activeColor={neutrals.textPrimary}
      inactiveColor={neutrals.tabInactive}
      style={{ backgroundColor: neutrals.surfaceSoft, borderTopWidth: 0 }}
      getLabelText={({ route }) => labelByRouteName[route.name] ?? route.name}
      getBadge={({ route }) => descriptors[route.key]?.options?.tabBarBadge}
      getColor={() => neutrals.textPrimary}
      getFocusedIcon={({ route }) => iconByRouteName[route.name] ?? 'circle-outline'}
      getUnfocusedIcon={({ route }) => iconByRouteName[route.name] ?? 'circle-outline'}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
          return;
        }

        navigation.navigate(route.name, route.params);
      }}
    />
  );
}
