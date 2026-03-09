import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppThemeProvider, useResolvedScheme } from '@/shared/theme/ThemeContext';

function NavThemeConnector({ children }: PropsWithChildren) {
  const scheme = useResolvedScheme();
  return (
    <NavThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </NavThemeProvider>
  );
}

export function RootProviders({ children }: PropsWithChildren) {
  return (
    <SafeAreaProvider>
      <AppThemeProvider>
        <NavThemeConnector>{children}</NavThemeConnector>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
