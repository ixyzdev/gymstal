import { useRouter } from 'expo-router';
import { Check, ChevronLeft, Moon, Smartphone, Sun } from 'lucide-react-native';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme, useThemePreference, type ThemePreference } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

const themeOptions: { value: ThemePreference; label: string; description: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Claro', description: 'Fondo blanco, texto oscuro', Icon: Sun },
  { value: 'dark', label: 'Oscuro', description: 'Fondo oscuro, texto claro', Icon: Moon },
  { value: 'system', label: 'Sistema', description: 'Sigue la configuración del dispositivo', Icon: Smartphone },
];

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: t.border,
    },
    backButton: {
      padding: 4,
    },
    headerTitle: {
      flex: 1,
      textAlign: 'center',
      fontSize: 17,
      fontWeight: '600',
      color: t.textPrimary,
    },
    headerRight: {
      width: 32,
    },
    content: {
      paddingTop: 24,
    },
    sectionLabel: {
      fontSize: 12,
      fontWeight: '600',
      color: t.textSecondary,
      letterSpacing: 0.8,
      marginHorizontal: 20,
      marginBottom: 8,
      marginTop: 16,
    },
    section: {
      backgroundColor: t.surfaceSoft,
      marginHorizontal: 16,
      borderRadius: 12,
      overflow: 'hidden',
    },
    optionRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
      paddingHorizontal: 16,
      gap: 14,
      minHeight: 64,
    },
    optionIcon: {
      width: 32,
      alignItems: 'center',
    },
    optionText: {
      flex: 1,
    },
    optionLabel: {
      fontSize: 15,
      color: t.textSecondary,
    },
    optionLabelSelected: {
      color: t.textPrimary,
      fontWeight: '600',
    },
    optionDescription: {
      fontSize: 12,
      color: t.textSecondary,
      marginTop: 2,
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: t.border,
      marginLeft: 16,
    },
  });

export function AppearanceScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);
  const { preference, setPreference } = useThemePreference();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={8}>
          <ChevronLeft size={24} color={t.textPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>Apariencia</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>TEMA</Text>
        <View style={styles.section}>
          {themeOptions.map((option, index) => {
            const isSelected = preference === option.value;
            const isLast = index === themeOptions.length - 1;
            return (
              <View key={option.value}>
                <Pressable
                  style={styles.optionRow}
                  android_ripple={{ color: t.surface }}
                  onPress={() => setPreference(option.value)}
                >
                  <View style={styles.optionIcon}>
                    <option.Icon
                      size={20}
                      color={isSelected ? t.accent : t.textSecondary}
                    />
                  </View>
                  <View style={styles.optionText}>
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                      {option.label}
                    </Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                  </View>
                  {isSelected && <Check size={18} color={t.accent} />}
                </Pressable>
                {!isLast && <View style={styles.separator} />}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
