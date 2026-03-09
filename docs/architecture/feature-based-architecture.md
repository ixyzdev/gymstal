# Arquitectura basada en features — React Native + Expo Router

## Estructura

```
src/
  app/                        # Expo Router: rutas y configuración de la app
    providers/                # Providers globales (tema, i18n, estado global, etc.)
    (tabs)/                   # Grupo de rutas de tabs
      _layout.tsx             # Importa TabsNavigator desde features/tabs
      index.tsx               # Re-exporta el componente de features/ como default
      menu/
        index.tsx
        settings/
          index.tsx
      feed.tsx
      history.tsx
      stats.tsx
    _layout.tsx               # Layout raíz: carga fuentes, aplica providers
    modal.tsx
    +not-found.tsx

  features/                   # Módulos por dominio de negocio
    <feature>/
      <FeatureName>.tsx       # Componente principal de la feature (sin subcarpeta screens/)
      components/             # Componentes internos de la feature
      hooks/                  # Hooks propios de la feature
      services/               # Llamadas a API / lógica de datos
      model/                  # Tipos, interfaces y entidades del dominio
      data/                   # Mocks o datos estáticos temporales

  shared/                     # Código transversal sin lógica de negocio
    ui/                       # Componentes UI genéricos (Text, View, Placeholder...)
    hooks/                    # Hooks de plataforma/tema (useColorScheme, etc.)
    theme/                    # Tokens de diseño: colores, tipografía, espaciado

  components/
    __tests__/                # Tests de componentes compartidos raíz (pendientes)
  hooks/
    __tests__/                # Tests de hooks raíz (pendientes)
  services/
    __tests__/                # Tests de servicios raíz (pendientes)
  test/
    e2e/
    integration/
```

## Reglas de dependencia

1. `app/` importa de `features/` y `shared/`. Nunca al revés.
2. Una `feature` importa de `shared/`. Nunca de otra `feature`.
3. `shared/` no importa de `features/` ni de `app/`.

## Decisiones de diseño

### Sin subcarpeta `screens/`
Con Expo Router el enrutamiento ya está definido por los archivos en `app/`. La capa
`features/` no necesita repetir esa semántica. El componente principal va directo en
la raíz de la feature: `features/home/HomeScreen.tsx`, no `features/home/screens/HomeScreen.tsx`.

### Sin subcarpeta `views/`
No es una capa estándar. Las sub-vistas que necesiten extraerse van a `components/`
dentro de la misma feature.

### Sin subcarpeta `navigation/` para un solo archivo
Si la feature solo tiene un componente de navegación, va directo en la raíz:
`features/tabs/TabsNavigator.tsx`. Solo se crea `navigation/` si hay múltiples archivos.

### Archivos de ruta ultra-delgados
Los archivos en `app/` solo re-exportan el componente de su feature:
```ts
// app/(tabs)/index.tsx
export { HomeScreen as default } from '@/features/home/HomeScreen';
```

### Sin `index.ts` en features
Las features no exponen un barrel file. Los imports apuntan directamente al archivo:
```ts
import { ExerciseScreen } from '@/features/workout/ExerciseScreen';
```
Esto evita re-exportaciones indirectas que dificultan encontrar el origen real del código.

### `providers/` dentro de `app/`
Los providers son configuración del shell de la aplicación, no lógica de negocio.
Viven en `app/providers/` para dejar claro que son responsabilidad de la capa de app.

## Convenciones

- `PascalCase` para componentes y sus archivos.
- Import alias `@/*` apunta a `src/`.
- Estilos locales con `StyleSheet.create` dentro del mismo archivo del componente.
- Un componente por archivo.
