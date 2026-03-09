import { type LucideIcon } from 'lucide-react-native';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/shared/theme/ThemeContext';
import type { Theme } from '@/shared/theme/theme';

export type MenuItemProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  onPress?: () => void;
};

const createStyles = (t: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
      gap: 14,
    },
    icon: {
      flexShrink: 0,
    },
    text: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '600',
      color: t.textPrimary,
    },
    description: {
      fontSize: 13,
      marginTop: 2,
      color: t.textSecondary,
    },
  });

export function MenuItem({ title, description, icon: Icon, onPress }: MenuItemProps) {
  const t = useTheme();
  const styles = useMemo(() => createStyles(t), [t]);

  return (
    <Pressable style={styles.container} onPress={onPress} android_ripple={{ color: t.surfaceSoft }}>
      {Icon && <Icon size={22} color={t.textSecondary} style={styles.icon} />}
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
}
