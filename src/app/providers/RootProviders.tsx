import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';

import { useColorScheme } from '@/shared/hooks/useColorScheme';
import { neutrals } from '@/shared/theme/neutrals';

const navigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: neutrals.background,
    card: neutrals.surfaceSoft,
    text: neutrals.textPrimary,
    border: neutrals.border,
    primary: neutrals.button,
  },
};

const navigationLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: neutrals.background,
    card: neutrals.surfaceSoft,
    text: neutrals.textPrimary,
    border: neutrals.border,
    primary: neutrals.button,
  },
};

const paperDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: neutrals.background,
    surface: neutrals.surface,
    onSurface: neutrals.textPrimary,
    onBackground: neutrals.textPrimary,
    primary: neutrals.button,
    onPrimary: neutrals.buttonText,
    outline: neutrals.border,
  },
};

const paperLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    background: neutrals.background,
    surface: neutrals.surface,
    onSurface: neutrals.textPrimary,
    onBackground: neutrals.textPrimary,
    primary: neutrals.button,
    onPrimary: neutrals.buttonText,
    outline: neutrals.border,
  },
};

export function RootProviders({ children }: PropsWithChildren) {
  const colorScheme = useColorScheme();
  const navigationTheme = colorScheme === 'dark' ? navigationDarkTheme : navigationLightTheme;
  const paperTheme = colorScheme === 'dark' ? paperDarkTheme : paperLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={navigationTheme}>{children}</ThemeProvider>
    </PaperProvider>
  );
}
