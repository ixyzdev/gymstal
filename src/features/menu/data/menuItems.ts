import { Href } from 'expo-router'

export type MenuItemData = {
  id: string
  title: string
  description: string
  route?: Href
}

export const menuItems: MenuItemData[] = [
  {
    id: 'profile',
    title: 'Perfil',
    description: 'Edita tu información personal',
  },
  {
    id: 'settings',
    title: 'Configuración',
    description: 'Preferencias de la app',
    route: './settings',
  },
  {
    id: 'notifications',
    title: 'Notificaciones',
    description: 'Gestiona tus alertas y recordatorios',
  },
  {
    id: 'help',
    title: 'Ayuda',
    description: 'Preguntas frecuentes y soporte',
  },
]
