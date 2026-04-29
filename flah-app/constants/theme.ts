/**
 * Flash ERP Design Tokens – "Professional Compact" palette
 * Aligned with the web admin's Slate/Indigo system.
 */

import { Platform } from 'react-native';

// ─── Core Palette ─────────────────────────────────────────────────────────
export const Palette = {
  // Primary – Indigo
  indigo600: '#4f46e5',
  indigo500: '#6366f1',
  indigo400: '#818cf8',
  indigo100: '#e0e7ff',
  indigo50: '#eef2ff',

  // Slate (backgrounds & text)
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate400: '#94a3b8',
  slate300: '#cbd5e1',
  slate200: '#e2e8f0',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  white: '#ffffff',

  // Status colours
  emerald500: '#10b981',
  emerald100: '#d1fae5',
  amber500: '#f59e0b',
  amber100: '#fef3c7',
  red500: '#ef4444',
  red100: '#ffe4e6',
  blue500: '#3b82f6',
  blue100: '#dbeafe',
  purple500: '#7c3aed',
  purple100: '#ede9fe',
};

// ─── Semantic Color Map ────────────────────────────────────────────────────
export const Colors = {
  light: {
    // Backgrounds
    background: Palette.slate100,
    surface: Palette.white,
    surfaceAlt: Palette.slate50,

    // Text
    text: Palette.slate900,
    textSecondary: Palette.slate600,
    textMuted: Palette.slate400,

    // Borders
    border: Palette.slate200,
    borderFocus: Palette.indigo500,

    // Actions
    tint: Palette.indigo600,
    primary: Palette.indigo600,
    primaryLight: Palette.indigo100,
    primaryText: Palette.white,

    // Tab bar
    icon: Palette.slate500,
    tabIconDefault: Palette.slate400,
    tabIconSelected: Palette.indigo600,

    // Status
    success: Palette.emerald500,
    successBg: Palette.emerald100,
    warning: Palette.amber500,
    warningBg: Palette.amber100,
    danger: Palette.red500,
    dangerBg: Palette.red100,
    info: Palette.blue500,
    infoBg: Palette.blue100,
  },
  dark: {
    background: Palette.slate900,
    surface: Palette.slate800,
    surfaceAlt: Palette.slate700,
    text: '#f1f5f9',
    textSecondary: Palette.slate400,
    textMuted: Palette.slate500,
    border: '#1e293b',
    borderFocus: Palette.indigo400,
    tint: Palette.indigo400,
    primary: Palette.indigo500,
    primaryLight: '#312e81',
    primaryText: Palette.white,
    icon: Palette.slate400,
    tabIconDefault: Palette.slate500,
    tabIconSelected: Palette.indigo400,
    success: Palette.emerald500,
    successBg: '#064e3b',
    warning: Palette.amber500,
    warningBg: '#78350f',
    danger: Palette.red500,
    dangerBg: '#7f1d1d',
    info: Palette.blue500,
    infoBg: '#1e3a5f',
  },
};

// ─── Attendance Phase Colours (used in index.tsx) ─────────────────────────
export const AttendanceColors = {
  check_in: Palette.indigo600,
  check_out: Palette.amber500,
  overtime_in: Palette.purple500,
  overtime_out: Palette.emerald500,
};

// ─── Typography ───────────────────────────────────────────────────────────
export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
});

// ─── Spacing Scale (compact enterprise) ───────────────────────────────────
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
};

// ─── Border Radius ─────────────────────────────────────────────────────────
export const Radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};
