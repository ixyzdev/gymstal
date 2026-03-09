import { useRouter, type Href } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { neutrals } from '@/shared/theme/neutrals';

export function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={8}>
          <ChevronLeft size={24} color={neutrals.textPrimary} />
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
          <SettingsRow label="Nombre de usuario" value="@usuario" />
          <Separator />
          <SettingsRow label="Correo electrónico" value="usuario@email.com" />
        </View>

        <Text style={styles.sectionLabel}>PREFERENCIAS</Text>
        <View style={styles.section}>
          <SettingsToggleRow label="Notificaciones push" />
          <Separator />
          <SettingsToggleRow label="Recordatorios de entrenamiento" defaultValue />
          <Separator />
          <SettingsToggleRow label="Sonidos" />
        </View>

        <Text style={styles.sectionLabel}>PERSONALIZACIÓN</Text>
        <View style={styles.section}>
          <SettingsRow
            label="Apariencia"
            chevron
            onPress={() => router.push('/(tabs)/menu/settings/appearance' as Href)}
          />
        </View>

        <Text style={styles.sectionLabel}>APLICACIÓN</Text>
        <View style={styles.section}>
          <SettingsRow label="Versión" value="1.0.0" />
          <Separator />
          <SettingsRow label="Privacidad y términos" chevron />
        </View>
      </ScrollView>
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

function SettingsRow({
  label,
  value,
  chevron,
  onPress,
}: {
  label: string;
  value?: string;
  chevron?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable style={styles.row} android_ripple={{ color: neutrals.surfaceSoft }} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      <View style={styles.rowRight}>
        {value && <Text style={styles.rowValue}>{value}</Text>}
        {chevron && <ChevronLeft size={16} color={neutrals.textSecondary} style={styles.chevronRight} />}
      </View>
    </Pressable>
  );
}

function SettingsToggleRow({ label, defaultValue = false }: { label: string; defaultValue?: boolean }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Switch
        value={defaultValue}
        thumbColor={neutrals.button}
        trackColor={{ false: neutrals.surface, true: neutrals.tabActive }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutrals.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: neutrals.border,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    color: neutrals.textPrimary,
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
    color: neutrals.textSecondary,
    letterSpacing: 0.8,
    marginHorizontal: 20,
    marginBottom: 8,
    marginTop: 16,
  },
  section: {
    backgroundColor: neutrals.surfaceSoft,
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
    color: neutrals.textPrimary,
    flex: 1,
  },
  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rowValue: {
    fontSize: 15,
    color: neutrals.textSecondary,
  },
  chevronRight: {
    transform: [{ rotate: '180deg' }],
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: neutrals.border,
    marginLeft: 16,
  },
});
