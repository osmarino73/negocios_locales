# AGENTS.md - Contexto y Reglas de Desarrollo para BeautyFlow AI

¡Bienvenido, agente de IA! Este proyecto contiene la Landing Page de captura B2B y la plataforma SaaS **BeautyFlow AI** para Salones de Belleza, Barberías y Spas.

## 📌 Reglas de Código & Estructura
1. **Archivo Standalone**: Toda modificación visual o funcional debe compilarse también mediante `node build_standalone.js` para generar `salones_belleza_saas_standalone.html`.
2. **Estilo B2B de Alto Nivel**: Utiliza el sistema de diseño de `FICHA_DISENO.md` (Dark Mode Glassmorphism con Rose Gold + Cyan Neon).
3. **Fuente Única de Verdad**: Los textos y datos comerciales se leen desde `DATOS_NEGOCIO.json`.
4. **Diseño Responsivo**: Toda nueva sección debe ser 100% responsiva (móvil primero, probado en pantallas de 360px hasta 4K).

## 🚀 Comandos
- Para compilar el standalone HTML autónomo:
  `node build_standalone.js`
