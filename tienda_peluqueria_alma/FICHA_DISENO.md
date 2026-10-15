# Ficha de Diseño: TIENDA Y PELUQUERIA ALMA SAS

## 🎨 Paleta de Colores Forense

- **Fondo Ébano Noche (`--bg-dark`)**: `#0b0a09`
- **Fondo Elevado (`--bg-card`)**: `#161412`
- **Acento Cobre / Camel Cálido (`--color-accent`)**: `#cbb39c`
- **Acento Hover (`--color-accent-hover`)**: `#d8c2ad`
- **Texto Principal (`--text-light`)**: `#ffffff`
- **Texto Secundario (`--text-muted`)**: `#c9c0b8`
- **Borde Suave (`--border-soft`)**: `rgba(203, 179, 156, 0.18)`

---

## ✒️ Tríada Tipográfica

1. **Titulares Display**: `DM Serif Display`, serif de autor refinada (`font-weight: 500-600`).
2. **Firma Script de Marca**: `Alex Brush`, caligrafía fluida de autor para destellos y firmas.
3. **Cuerpo & UI**: `Plus Jakarta Sans`, sans-serif geométrica minimalista.

---

## 📐 Reglas Estrictas de Tokens CSS

- Todos los elementos con acento de marca (firmas caligráficas, precios, roles, subrayados decorativos, enlaces minimalistas) deben consumir estrictamente la variable `var(--color-accent)`.
- Queda prohibido el uso de valores hardcoded en acentos para permitir la personalización dinámica instantánea.
