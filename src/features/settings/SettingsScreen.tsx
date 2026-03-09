import { useRouter, type Href } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

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
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14,
      paddingHorizontal: 16,
      minHeight: 52,
    },
    rowLabel: {
      fontSize: 15,
      color: t.textPrimary,
      flex: 1,
    },
    rowRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    rowValue: {
      fontSize: 15,
      color: t.textSecondary,
    },
    chevronRight: {
      transform: [{ rotate: '180deg' }],
    },
    separator: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: t.border,
      marginLeft: 16,
    },
  });

type StylesType = ReturnType<typeof createStyles>;

export function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={8}>
          <ChevronLeft size={24} color={t.textPrimary} />
        </Pressable>
        <Text style={styles.headerTitle}>Configuración</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>CUENTA</Text>
        <View style={styles.section}>
          <SettingsRow label="Nombre de usuario" value="@usuario" styles={styles} t={t} />
          <View style={styles.separator} />
          <SettingsRow label="Correo electrónico" value="usuario@email.com" styles={styles} t={t} />
        </View>

        <Text style={styles.sectionLabel}>PREFERENCIAS</Text>
        <View style={styles.section}>
          <SettingsToggleRow label="Notificaciones push" t={t} styles={styles} />
          <View style={styles.separator} />
          <SettingsToggleRow label="Recordatorios de entrenamiento" defaultValue t={t} styles={styles} />
          <View style={styles.separator} />
          <SettingsToggleRow label="Sonidos" t={t} styles={styles} />
        </View>

        <Text style={styles.sectionLabel}>PERSONALIZACIÓN</Text>
        <View style={styles.section}>
          <SettingsRow
            label="Apariencia"
            chevron
            styles={styles}
            t={t}
            onPress={() => router.push('/(tabs)/menu/settings/appearance' as Href)}
          />
        </View>

        <Text style={styles.sectionLabel}>APLICACIÓN</Text>
        <View style={styles.section}>
          <SettingsRow label="Versión" value="1.0.0" styles={styles} t={t} />
          <View style={styles.separator} />
          <SettingsRow label="Privacidad y términos" chevron styles={styles} t={t} />
        </View>
      </ScrollView>
    </View>
  );
}

function SettingsRow({
  label,
  value,
  chevron,
  onPress,
  styles,
  t,
}: {
  label: string;
  value?: string;
  chevron?: boolean;
  onPress?: () => void;
  styles: StylesType;
  t: Theme;
}) {
  return (
    <Pressable style={styles.row} android_ripple={{ color: t.surfaceSoft }} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowRight}>
        {value && <Text style={styles.rowValue}>{value}</Text>}
        {chevron && <ChevronLeft size={16} color={t.textSecondary} style={styles.chevronRight} />}
      </View>
    </Pressable>
  );
}

function SettingsToggleRow({
  label,
  defaultValue = false,
  t,
  styles,
}: {
  label: string;
  defaultValue?: boolean;
  t: Theme;
  styles: StylesType;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Switch
        value={defaultValue}
        thumbColor={t.button}
        trackColor={{ false: t.surface, true: t.accent }}
      />
    </View>
  );
}
