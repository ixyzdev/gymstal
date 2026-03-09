import { palette } from './palette';

export const darkTheme = {
  // Backgrounds
  background: palette.black,
  surface: palette.slate,
  surfaceSoft: palette.slateDeep,

  // Text
  textPrimary: palette.white,
  textSecondary: palette.silver,

  // Borders
  border: palette.slateMid,

  // Buttons
  button: palette.white,
  buttonText: palette.black,

  // Accent (primary action color — brand, stays same across themes)
  accent: palette.teal,

  // Tab bar
  tabActive: palette.teal,
  tabInactive: palette.silver,
} as const;

export const lightTheme = {
  // Backgrounds
  background: palette.white,
  surface: palette.lightSurface,
  surfaceSoft: palette.lightSurfaceSoft,

  // Text
  textPrimary: palette.black,
  textSecondary: palette.lightTextSecondary,

  // Borders
  border: palette.lightBorder,

  // Buttons
  button: palette.black,
  buttonText: palette.white,

  // Accent (same teal — brand consistency)
  accent: palette.teal,

  // Tab bar
  tabActive: palette.teal,
  tabInactive: palette.lightTabInactive,
} as const;

export type Theme = typeof darkTheme;
