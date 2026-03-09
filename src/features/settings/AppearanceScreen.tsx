import { useRouter } from 'expo-router';
import { Check, ChevronLeft, Moon, Sun, Smartphone } from 'lucide-react-native';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { neutrals } from '@/shared/theme/neutrals';

type ThemeOption = 'light' | 'dark' | 'system';

const themeOptions: { value: ThemeOption; label: string; description: string; Icon: typeof Sun }[] = [
  { value: 'light', label: 'Claro', description: 'Fondo blanco, texto oscuro', Icon: Sun },
  { value: 'dark', label: 'Oscuro', description: 'Fondo oscuro, texto claro', Icon: Moon },
  { value: 'system', label: 'Sistema', description: 'Sigue la configuración del dispositivo', Icon: Smartphone },
];

export function AppearanceScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  // TODO: wire to real theme state
  const selected: ThemeOption = 'dark';

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={8}>
          <ChevronLeft size={24} color={neutrals.textPrimary} />
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
            const isSelected = selected === option.value;
            const isLast = index === themeOptions.length - 1;
            return (
              <View key={option.value}>
                <Pressable style={styles.optionRow} android_ripple={{ color: neutrals.surface }}>
                  <View style={styles.optionIcon}>
                    <option.Icon size={20} color={isSelected ? neutrals.textPrimary : neutrals.textSecondary} />
                  </View>
                  <View style={styles.optionText}>
                    <Text style={[styles.optionLabel, isSelected && styles.optionLabelSelected]}>
                      {option.label}
                    </Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                  </View>
                  {isSelected && <Check size={18} color={neutrals.tabActive} />}
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
    color: neutrals.textSecondary,
  },
  optionLabelSelected: {
    color: neutrals.textPrimary,
    fontWeight: '600',
  },
  optionDescription: {
    fontSize: 12,
    color: neutrals.textSecondary,
    marginTop: 2,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: neutrals.border,
    marginLeft: 16,
  },
});
