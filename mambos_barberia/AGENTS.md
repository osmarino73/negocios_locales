# Instrucciones de Agente: Mambo's Barberia (Medellín, Antioquia)

Este directorio contiene el sitio web oficial y los datos estructurados para **Mambo's Barberia**, barbería prémium ubicada en Medellín, Antioquia.

---

## 🎯 Información Esencial del Negocio
* **Nombre Comercial**: Mambo's Barberia
* **Categoría**: Barbería VIP & Grooming Masculino
* **Ubicación**: Medellín, Antioquia, Colombia
* **Teléfono & WhatsApp**: (+57) 314 782 9104 (`+573147829104`)
* **Calificación**: 5.0★ (50 reseñas en Google Maps)
* **Horario**: Lunes a Sábado: 8:30 AM – 8:30 PM | Domingos: 9:30 AM – 5:00 PM
* **Iframe Google Maps**: `https://maps.google.com/maps?q=Mambo%27s+Barberia,+Medell%C3%ADn,+Antioquia,+Colombia&t=&z=16&ie=UTF8&iwloc=&output=embed`

---

## 📐 Reglas Mandatorias de Desarrollo

1. **Autonomía Total**: El archivo `index.html` debe ser 100% autónomo y autocontenido con estilos CSS embebidos dentro de `<style>`.
2. **Fotografías Hero**: Se utilizan los archivos locales optimizados WebP:
   - Escritorio: `assets/hero_desktop.webp` (16:9 2K)
   - Móvil: `assets/hero_mobile.webp` (9:16 2K)
3. **Smart Header**:
   - Logotipo tipográfico puro sin íconos ni emojis (`MAMBO'S BARBERIA`).
   - Auto-hide al scrollear hacia abajo y reaparición inmediata al subir.
   - En móvil (< 768px): Logotipo al 100% de ancho sin cortes. Cero botón «Agendar» en navbar móvil y cero menú hamburguesa.
4. **Hero Inmersivo**:
   - En escritorio: Anclaje inferior estricto (`align-items: flex-end`) con más del 60% superior despejado.
   - En móvil: Estrictamente `min-height: 720px !important`, texto en mitad inferior y modelo visible.
5. **Servicios Full-Bleed Minimalistas**:
   - Grid 3 columnas escritorio, 2 columnas móvil.
   - Tarjetas 3:4 con foto 100%, degradado inferior, precio en Fila 1 y `AGENDAR ➔` en Fila 2.
6. **Sobre Nosotros & Profesionales**:
   - Foto de ambiente representativa de barbería (`photo-1585747860715-2ba37e788b70`).
   - Profesionales en grid de 4 columnas en escritorio y carrusel horizontal deslizable (Scroll Snap) con efecto «Peek» en móvil.
7. **Prohibición de Barras Inferiores Fijas**: Cero menús fijos inferiores en móvil. Únicamente botón flotante circular de WhatsApp (`.whatsapp-float`) con soporte de safe-area.
8. **Consumo de Tokens**: Todos los acentos cromáticos consumen obligatoriamente `var(--color-accent)`.
