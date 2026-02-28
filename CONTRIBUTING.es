# Contribuir a Things

**[English](CONTRIBUTING)** | **[Español](CONTRIBUTING.es)** | **[Galego](CONTRIBUTING.gl)**

---

En primer lugar, ¡gracias por considerar contribuir a Things! Son personas como tú las que hacen de Things una herramienta tan genial.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
  - [Reportar Bugs](#reportar-bugs)
  - [Sugerir Funcionalidades](#sugerir-funcionalidades)
  - [Contribuir Código](#contribuir-código)
- [Estructura del Repositorio](#estructura-del-repositorio)

## 📜 Código de Conducta

Este proyecto y todas las personas que participan en él se rigen por nuestro compromiso de proporcionar una comunidad acogedora e inspiradora para todos. Por favor, sé respetuoso y constructivo en tus interacciones.

## 🤝 ¿Cómo Puedo Contribuir?

### 🐛 Reportar Bugs

Antes de crear reportes de bugs, por favor revisa los [issues existentes](../../issues) para evitar duplicados. Cuando crees un reporte de bug, incluye tantos detalles como sea posible usando nuestra [plantilla de reporte de bugs](.github/ISSUE_TEMPLATE/issue_report.yaml).

**Para reportar un bug:**

1. Ve a la pestaña [Issues](../../issues)
2. Haz clic en "New Issue"
3. Selecciona "🐛 Bug Report"
4. Completa la plantilla en tu idioma preferido (English, Español, o Galego)

**Los buenos reportes de bugs incluyen:**

- **Título claro** - Describe el problema de forma concisa
- **Pasos para reproducir** - Pasos detallados para que otros puedan replicar el problema
- **Comportamiento esperado** - Lo que esperabas que ocurriera
- **Comportamiento actual** - Lo que realmente ocurrió
- **Detalles del entorno** - SO, navegador, versión de la app
- **Capturas/logs** - Evidencia visual o mensajes de error si aplica
- **Nivel de severidad** - ¿Qué tan crítico es este problema?

**Ejemplo:**

> **Título:** [BUG]: La app se cierra al guardar un elemento con caracteres especiales
>
> **Pasos:**
> 1. Abrir la app
> 2. Crear un nuevo elemento con título "Test & Ejemplo"
> 3. Hacer clic en guardar
> 4. La app se cierra
>
> **Esperado:** El elemento debería guardarse exitosamente
>
> **Actual:** La app se cierra con error "Invalid character"
>
> **Entorno:** iOS 16.5, Things v1.2.0

### ✨ Sugerir Funcionalidades

¡Las sugerencias de funcionalidades son bienvenidas! Por favor usa nuestra [plantilla de solicitud de funcionalidad](.github/ISSUE_TEMPLATE/feature_request.yaml) para asegurar que tenemos toda la información necesaria.

**Para sugerir una funcionalidad:**

1. Ve a la pestaña [Issues](../../issues)
2. Haz clic en "New Issue"
3. Selecciona "✨ Feature Request"
4. Completa la plantilla en tu idioma preferido (English, Español, o Galego)

**Las buenas solicitudes de funcionalidad incluyen:**

- **Planteamiento del problema** - ¿Qué problema resuelve esto?
- **Solución propuesta** - ¿Cómo te gustaría que funcionara?
- **Alternativas consideradas** - ¿Qué otras soluciones pensaste?
- **Nivel de prioridad** - ¿Qué tan importante es esto para ti?
- **Casos de uso** - ¿Quién se beneficiaría de esta funcionalidad?
- **Contexto adicional** - Capturas, mockups o ejemplos

**Ejemplo:**

> **Título:** [FEATURE]: Añadir etiquetas para organizar elementos
>
> **Problema:** Tengo muchos elementos y es difícil encontrar los relacionados
>
> **Solución:** Añadir un sistema de etiquetas donde los usuarios puedan crear etiquetas personalizadas y filtrar elementos por etiquetas
>
> **Alternativas:** Categorías o carpetas, pero las etiquetas son más flexibles
>
> **Prioridad:** Alta - mejoraría mucho la organización
>
> **Caso de uso:** Estudiantes organizando materiales de estudio, profesionales gestionando proyectos

### 💻 Contribuir Código

¿Quieres contribuir código? ¡Eso es genial!

**Este repositorio es solo para issues y discusiones del proyecto.** Para contribuciones de código, por favor dirígete al repositorio específico al que quieres contribuir:

- **[Frontend](https://github.com/LLEIDAHACKERS/things-frontend)** - Aplicación móvil
- **[Extension](https://github.com/LLEIDAHACKERS/things-extension)** - Extensión de navegador
- **[Backend](https://github.com/LLEIDAHACKERS/things-backend)** - API y servicios

Cada repositorio tiene su propia guía CONTRIBUTING con:
- Instrucciones de configuración
- Flujo de desarrollo
- Guías de commits
- Proceso de pull request
- Guías de estilo de código
- Requisitos de testing

**Flujo general:**

1. Encuentra o crea un issue en este repositorio central
2. Comenta en el issue para que otros sepan que estás trabajando en él
3. Ve al repositorio específico (frontend/backend/extension)
4. Sigue la guía CONTRIBUTING de ese repositorio
5. Referencia el número de issue de este repositorio en tu PR

## 🌿 Estrategia de Ramas

Todos los repositorios de Things siguen el mismo modelo de ramas:

```
main
 └── develop
      ├── feat/nombre-rama o feat/id-issue
      └── fix/nombre-rama o fix/id-issue
```

### Tipos de Ramas

- **`main`** - Código listo para producción. Rama protegida, solo acepta merges desde `develop`
- **`develop`** - Rama de integración para funcionalidades. Todo el desarrollo ocurre aquí primero
- **`feat/*`** - Nuevas funcionalidades (ej., `feat/autenticacion-usuario` o `feat/123`)
- **`fix/*`** - Correcciones de bugs (ej., `fix/crash-login` o `fix/456`)

### Convenciones de Nomenclatura

**Opción 1: Nombre descriptivo**
```bash
git checkout -b feat/modo-oscuro
git checkout -b fix/fuga-memoria
```

**Opción 2: ID de Issue**
```bash
git checkout -b feat/123
git checkout -b fix/456
```

**Opción 3: Combinado**
```bash
git checkout -b feat/123-modo-oscuro
git checkout -b fix/456-fuga-memoria
```

### Ejemplo de Flujo de Trabajo

```bash
# Empezar desde develop
git checkout develop
git pull origin develop

# Crear tu rama de funcionalidad
git checkout -b feat/123-añadir-etiquetas

# Hacer tus cambios y commit
git add .
git commit -m "feat: añadir sistema de etiquetas"

# Push a tu fork
git push origin feat/123-añadir-etiquetas

# Crear PR a la rama develop (¡no a main!)
```

**Importante:** Siempre crea PRs apuntando a la rama `develop`, nunca directamente a `main`.

## 🏗️ Estructura del Repositorio

Things está organizado en tres repositorios principales:

- **[things-frontend](https://github.com/LLEIDAHACKERS/things-frontend)** - Aplicación móvil (iOS/Android)
- **[things-extension](https://github.com/LLEIDAHACKERS/things-extension)** - Extensión de navegador (Chrome/Firefox/Safari)
- **[things-backend](https://github.com/LLEIDAHACKERS/things-backend)** - API y servicios backend

**Este repositorio** sirve como centro para:
- Issues y reportes de bugs del proyecto
- Solicitudes de funcionalidades que abarcan múltiples componentes
- Discusiones y preguntas generales
- Roadmap y planificación del proyecto
- Documentación

## 💬 Obtener Ayuda

- **¿Preguntas?** Abre una [Discusión](../../discussions)
- **¿Encontraste un bug?** Crea un [Reporte de Bug](../../issues/new/choose)
- **¿Idea de funcionalidad?** Envía una [Solicitud de Funcionalidad](../../issues/new/choose)
- **¿Necesitas aclaración?** Comenta en issues existentes

## 🙏 ¡Gracias!

Tus contribuciones, ya sea reportando bugs, sugiriendo funcionalidades o escribiendo código, hacen una diferencia real. Apreciamos tu tiempo y esfuerzo en ayudar a hacer Things mejor para todos.

---

Hecho con ❤️ por la comunidad [LleidaHackers](https://github.com/LLEIDAHACKERS)
