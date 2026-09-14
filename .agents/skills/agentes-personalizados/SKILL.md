---
name: agentes-personalizados
description: Guía experta sobre cómo diseñar, configurar, estructurar e invocar Agentes Personalizados (Custom Agents) en Google Antigravity. Explica el formato de archivos Markdown con frontmatter YAML, directorios a nivel de proyecto y global, campos requeridos/opcionales, herramientas, modelos y métodos de invocación con @.
---

# Guía Oficial de Agentes Personalizados (Custom Agents en Google Antigravity)

Los **Agentes Personalizados (Custom Agents)** en Google Antigravity permiten definir personas de IA y sub-agentes especializados para roles, flujos de trabajo, auditorías y tareas específicas (ej. Revisor de Código, Diseñador de Interfaces, Tester QA, Especialista SEO Local, etc.).

Al encapsular **instrucciones de sistema**, **permisos de herramientas**, **selección de modelo LLM** y **habilidades asociadas**, transforman al asistente general en un equipo de especialistas autónomos adaptados a las necesidades del proyecto.

---

## 📂 1. Ubicaciones de Almacenamiento y Estructura de Directorios

Antigravity admite una jerarquía de dos niveles para registrar agentes personalizados:

### A. Nivel Proyecto / Espacio de Trabajo (Workspace-Level) — *Recomendado*
Los agentes se guardan dentro de la raíz del repositorio para que cualquier miembro del equipo o clon del proyecto tenga acceso inmediato mediante control de versiones (Git):

- **Rutas estándar admitidas**:
  - `<project_root>/.agent/`
  - `<project_root>/.agents/`
  - `<project_root>/.antigravity/agents/`

> **Ejemplo en este proyecto**:
> `c:\Users\Rio Belen\negocios_locales\.agent\auditor-negocio-local.md`

### B. Nivel Global (User / Machine-Level)
Disponibles de forma universal en todos los proyectos y carpetas abiertos por el usuario en su máquina:

- **Windows**: `%USERPROFILE%\.antigravity\agents\` o `%USERPROFILE%\.gemini\antigravity-ide\agents\`
- **Linux / macOS**: `~/.antigravity/agents/` o `~/.gemini/antigravity-ide/agents/`

---

## 🏷️ 2. Convención de Nombres y Extensiones

- **Extensión Oficial**: `.md` (Markdown con encabezado YAML Frontmatter). También admite `.json` o `.yaml`.
- **Nomenclatura**: Minúsculas en *kebab-case* (ej. `qa-tester.md`, `code-reviewer.md`, `disenador-ui.md`).
- **Identificador / Slug**: El nombre del archivo sin extensión (o el campo `name` en el frontmatter) define el identificador con el cual se invoca el agente mediante `@`.

---

## 📋 3. Formato del Archivo y Campos del Frontmatter YAML

Un archivo de agente consta de dos partes:
1. **Encabezado YAML Frontmatter** delimitado por `---`.
2. **Cuerpo del Prompt de Sistema (System Instructions)** en Markdown estándar.

```markdown
---
name: nombre-del-agente
description: Breve descripción de la función del agente (visible en menús y tooltips de autocompletado).
model: gemini-1.5-pro
temperature: 0.2
tools:
  - view_file
  - replace_file_content
  - run_command
skills:
  - negocio-local-html
---

# Rol e Instrucciones del Agente
Aquí se redacta la personalidad, reglas obligatorias, metodología de trabajo y formato de salida del agente.
```

### Tabla de Campos del Frontmatter

| Campo | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `name` | `string` | **Sí** | Identificador único del agente (usado al escribir `@nombre-del-agente`). |
| `description` | `string` | **Sí** | Resumen que aparece en los tooltips de autocompletado y menús de selección. |
| `model` | `string` | No | Modelo LLM asignado (ej. `gemini-1.5-pro`, `gemini-2.0-flash`, `auto`). |
| `tools` | `array` | No | Lista blanca de herramientas a las que tiene acceso el agente. Si se omite, hereda las herramientas predeterminadas. |
| `temperature` | `number` | No | Grado de determinismo / creatividad (rango `0.0` a `1.0`, ej. `0.2` para código preciso). |
| `max_tokens` | `number` | No | Límite máximo de tokens de salida. |
| `skills` | `array` | No | Habilidades (skills) pre-vinculadas que el agente cargará automáticamente. |

---

## 🚀 4. Métodos de Invocación y Uso

Un agente personalizado puede invocarse de cuatro formas:

### 1. Mención en el Chat con `@` (Chat Mention)
En la caja de entrada del chat en Antigravity IDE, escribe `@` seguido del nombre del agente:
```text
@qa-tester Verifica que el carrusel de pilares en móvil responda adecuadamente al scroll táctil.
```
El sistema muestra un menú desplegable de autocompletado con la lista de agentes de proyecto y globales.

### 2. Selector de Agente en la Cabecera del Chat
En la parte superior del panel de chat, haz clic en el menú desplegable de agentes para activar el agente como el interlocutor principal de la sesión.

### 3. Línea de Comandos (Antigravity CLI `agy`)
Invoca el agente directamente desde la terminal con el argumento `--agent`:
```bash
agy --agent code-reviewer "Audita los cambios recientes en index.html"
```

### 4. Delegación Programática entre Agentes (Subagent Tasking)
Un agente supervisor o planificador puede delegar subtareas a agentes especializados mediante llamadas de subagente, manteniendo el contexto limpio y enfocado.

---

## 💡 5. Ejemplos de Implementación de Agentes

### Ejemplo A: Auditor de Negocios Locales (`.agent/auditor-negocio-local.md`)
Especializado en validar la conformidad con [AGENTS.md](file:///c:/Users/Rio%20Belen/negocios_locales/AGENTS.md):

```markdown
---
name: auditor-negocio-local
description: Audita proyectos de negocios locales verificando la estructura oficial, degradados, responsive móvil y tokens CSS.
model: gemini-1.5-pro
temperature: 0.1
tools:
  - view_file
  - grep_search
  - run_command
skills:
  - negocio-local-html
---

Eres el Auditor Oficial de Calidad de Negocios Locales.

### Tus Responsabilidades:
1. Verificar que el archivo `index.html` consuma estrictamente los tokens CSS (`--color-accent`, etc.) y no tenga colores hardcodeados.
2. Confirmar que el Hero respete el anclaje inferior (`align-items: flex-end`) y la regla del 60% superior despejado.
3. Comprobar que en móviles (<768px) tenga `min-height: 720px !important;` y carruseles horizontales con Scroll Snap.
4. Validar el Triángulo de Contexto IA (`DATOS_NEGOCIO.json`, `FICHA_DISENO.md`, `AGENTS.md`).
```

### Ejemplo B: Diseñador de Video Scroll Scrubbing (`.agent/video-scroll-expert.md`)
Especializado en calibrar secuencias WebP para Canvas:

```markdown
---
name: video-scroll-expert
description: Extrae y calibra secuencias de fotogramas WebP para Canvas Video Scroll Scrubbing (Desktop y Mobile).
model: gemini-1.5-pro
temperature: 0.2
tools:
  - run_command
  - view_file
  - replace_file_content
skills:
  - video-to-scroll-frames
---

Eres un Ingeniero Especialista en Video Scroll Scrubbing en Canvas HTML5.

### Metodología:
1. Inspeccionar videos de origen con ffprobe para identificar orientaciones (16:9 desktop, 9:16 móvil).
2. Extraer entre 60 y 90 fotogramas WebP a 18 fps con escalado Lanczos (1920x1080 Q85 en desktop y 720x1280 Q76 en móvil).
3. Generar `poster.webp` para evitar pantallas negras.
4. Calibrar el degradado `.canvas-gradient-overlay` para proteger la lectura sin opacar al modelo.
```

---

## 🛠️ 6. Flujo de Creación Rápida de un Nuevo Agente

1. Crear la carpeta `.agent/` en la raíz del proyecto (si no existe):
   ```bash
   mkdir .agent
   ```
2. Crear el archivo Markdown con el nombre del agente:
   ```bash
   touch .agent/mi-agente.md
   ```
3. Agregar el frontmatter YAML con `name`, `description`, `model`, `tools` y `skills`.
4. Escribir el System Prompt con las reglas operativas y rol del agente.
5. Invocarlo en el chat escribiendo `@mi-agente <instrucción>`.
