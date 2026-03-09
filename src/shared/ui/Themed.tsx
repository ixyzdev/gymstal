import { Text as DefaultText, View as DefaultView } from 'react-native';

import { useResolvedScheme, useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof Pick<Theme, 'textPrimary' | 'background'>,
) {
  const t = useTheme();
  const scheme = useResolvedScheme();
  const colorFromProps = scheme === 'dark' ? props.dark : props.light;
  if (colorFromProps) return colorFromProps;
  return t[colorName];
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'textPrimary');
  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
