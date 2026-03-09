import * as SecureStore from 'expo-secure-store';
import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { darkTheme, lightTheme, type Theme } from './theme';

export type ThemePreference = 'dark' | 'light' | 'system';

const STORAGE_KEY = 'gymstal.theme';

type ThemeContextValue = {
  theme: Theme;
  preference: ThemePreference;
  resolvedScheme: 'dark' | 'light';
  setPreference: (pref: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: darkTheme,
  preference: 'system',
  resolvedScheme: 'dark',
  setPreference: () => {},
});

export function AppThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');

  useEffect(() => {
    const stored = SecureStore.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light' || stored === 'system') {
      setPreferenceState(stored);
    }
  }, []);

  const setPreference = useCallback((pref: ThemePreference) => {
    setPreferenceState(pref);
    SecureStore.setItemAsync(STORAGE_KEY, pref);
  }, []);

  const resolvedScheme: 'dark' | 'light' =
    preference === 'system' ? (systemScheme ?? 'dark') : preference;

  const theme = resolvedScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, preference, resolvedScheme, setPreference }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = (): Theme => useContext(ThemeContext).theme;

export const useThemePreference = () => {
  const { preference, setPreference } = useContext(ThemeContext);
  return { preference, setPreference };
};

export const useResolvedScheme = (): 'dark' | 'light' =>
  useContext(ThemeContext).resolvedScheme;
