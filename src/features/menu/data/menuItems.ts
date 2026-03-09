import { Href } from 'expo-router'
import {
  CircleHelp,
  Settings,
  User,
  type LucideIcon
} from 'lucide-react-native'

export type MenuItemData = {
  id: string
  title: string
  description: string
  icon?: LucideIcon
  route?: Href
}

export const menuItems: MenuItemData[] = [
  {
    id: 'profile',
    title: 'Perfil',
    description: 'Edita tu información personal',
    icon: User
  },
  {
    id: 'settings',
    title: 'Configuración',
    description: 'Preferencias de la app',
    icon: Settings,
    route: '/(tabs)/menu/settings' as const
  },
  {
    id: 'help',
    title: 'Ayuda',
    description: 'Preguntas frecuentes y soporte',
    icon: CircleHelp
  }
]
