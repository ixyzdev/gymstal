import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

type TabIconName = React.ComponentProps<typeof FontAwesome>['name'];

function TabBarIcon({ name, color }: { name: TabIconName; color: string }) {
  return <FontAwesome size={20} style={{ marginBottom: -2 }} name={name} color={color} />;
}

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="ajustes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#E7ECEE',
        tabBarInactiveTintColor: '#A8B1B5',
        tabBarStyle: {
          backgroundColor: '#10272E',
          borderTopColor: '#152D34',
          height: 74,
          paddingTop: 8,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        sceneStyle: {
          backgroundColor: '#0B1317',
        },
      }}>
      <Tabs.Screen
        name="ejercicio"
        options={{
          title: 'Ejercicio',
          tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <TabBarIcon name="comment-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="estadisticas"
        options={{
          title: 'Estadísticas',
          tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="historial"
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="two" options={{ href: null }} />
    </Tabs>
  );
}
