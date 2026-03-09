/**
 * Primitive color palette — raw hex values only.
 * Do NOT import this in components. Use semantic tokens from `theme.ts` instead.
 */
export const palette = {
  // Core
  black: '#101314',
  teal: '#027368',
  slate: '#5D7173',
  silver: '#B4BEBF',
  white: '#F2F2F2',

  // Dark theme intermediates
  slateDeep: '#1e3032', // surface-soft on dark
  slateMid: '#3d5153',  // border on dark

  // Light theme surfaces
  lightSurface: '#E4E9EA',
  lightSurfaceSoft: '#EEF1F1',
  lightBorder: '#C5CED0',

  // Light theme text (slightly darker than slate for WCAG AA compliance on white)
  lightTextSecondary: '#475C60',
  lightTabInactive: '#7A9193',
} as const;

export type Palette = typeof palette;
