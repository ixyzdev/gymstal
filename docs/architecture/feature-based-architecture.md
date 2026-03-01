# Arquitectura basada en features (React Native + Expo Router) — 2026

## Objetivo
Escalar el proyecto con una estructura por dominio (feature-first), manteniendo desacoplamiento entre UI compartida, navegación y casos de uso de cada feature.

## Estructura

```txt
src/
  app/                          # Capa de rutas (expo-router)
    providers/                  # Providers globales de app
  features/                     # Módulos por capacidad de negocio
    <feature>/
      screens/                  # Pantallas de la feature
      navigation/               # Navegación interna de la feature (si aplica)
      components/               # Componentes propios de la feature
      hooks/                    # Hooks propios de la feature
      services/                 # Integraciones/API de la feature
      model/                    # Tipos, entidades y lógica de dominio
  shared/                       # Reuso transversal sin lógica de negocio específica
    ui/                         # Componentes UI reutilizables
    hooks/                      # Hooks de plataforma/tema reutilizables
    theme/                      # Tokens, colores y sistema visual
```

## Reglas de dependencia (import direction)
1. `app` puede importar de `features` y `shared`.
2. Una `feature` puede importar de `shared`.
3. Una `feature` **no** debe importar de otra `feature` (usar contratos/eventos o capa `shared` si se requiere reuso).
4. `shared` no debe importar de `features` ni de `app`.

## Buenas prácticas 2026 aplicadas
- **Route files delgados**: archivos en `src/app` solo componen y delegan a pantallas en `features`.
- **Feature encapsulation**: cada pantalla vive en su feature.
- **Shared UI explícito**: componentes de infraestructura visual en `shared/ui`.
- **Tema centralizado**: tokens de color en `shared/theme`.
- **Providers aislados**: composición global en `app/providers` para evolucionar fácilmente (analytics, i18n, state, etc.).

## Convenciones
- `PascalCase` para componentes y archivos de componente.
- Import alias `@/*` para evitar rutas relativas profundas.
- Un `screen` por archivo, con estilos locales (`StyleSheet.create`).

## Próximos pasos recomendados
- Añadir `index.ts` por carpeta para API pública de cada feature/shared.
- Incorporar testing por feature (`__tests__` cerca de la implementación).
- Agregar reglas ESLint para restringir imports entre features.
