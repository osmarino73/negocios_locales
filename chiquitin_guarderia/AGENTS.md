# Guía del Proyecto para Inteligencia Artificial: Centro de Desarrollo Infantil Chiquitín

Bienvenido agente de Inteligencia Artificial (Antigravity, Claude, ChatGPT, Gemini, etc.). Este proyecto contiene la landing page exclusiva y el sistema de contexto del **Centro de Desarrollo Infantil Chiquitín**, ubicado en **Apartadó, Antioquia, Colombia**.

---

## 📁 Triángulo de Contexto IA (Archivos Clave)

1. **`DATOS_NEGOCIO.json`**: Fuente única de verdad con los datos reales del negocio (dirección física en Apartadó, teléfono, WhatsApp pre-configurado, horario, catálogo de servicios y testimonios).
2. **`FICHA_DISENO.md`**: Manual de estilo con la paleta de colores (Verde Bambini `#8cc63f`, Azul Cielo `#5bc0eb`, Coral `#ff4757`), tipografías (`Outfit` y `Plus Jakarta Sans`) y patrones de componentes.
3. **`AGENTS.md`**: Este archivo de directrices para asegurar la continuidad del proyecto sin pérdida de contexto.
4. **`index.html`**: Landing page 100% autónoma (*standalone*), con CSS embebido, imágenes optimizadas de alta resolución por CDN y Schema.org JSON-LD local.

---

## 🏆 Reglas Obligatorias para Cualquier IA que Modifique este Proyecto

1. **Mantener Formato Standalone**:
   * Todo el CSS debe permanecer embebido en `<style>` dentro del `<head>`.
   * Cero dependencias locales rotas (usar FontAwesome y Google Fonts vía CDN y fotografías del catálogo curado `BANCO_IMAGENES.json`).
2. **SEO Local Schema.org**:
   * Mantener el marcado estructurado `@type: "ChildCare"` y `@type: "DayCare"` con la ubicación en **Apartadó, Antioquia, Colombia** y el enlace a Google Maps.
3. **Diseño Bespoke (No Genérico)**:
   * Conservar la estética de referencia **Bambini Play & Learn**: divisores de ondas en forma de nubes y colinas de césped, botones redondeados en píldora, tarjetas de testimonios en globos de diálogo (*speech bubbles*) y colores vivos y cálidos.
4. **Conversión Focalizada en WhatsApp**:
   * Todos los botones principales de llamada a la acción deben enlazar directamente al WhatsApp del negocio con el mensaje de consulta configurado.
