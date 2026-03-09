import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';

import { useColorScheme } from '@/shared/hooks/useColorScheme';

export function RootProviders({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();

  return <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>;
}