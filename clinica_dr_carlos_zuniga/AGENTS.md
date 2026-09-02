# Clínica Dr. Carlos Zúñiga - Guía de Continuidad para Agentes de IA

Bienvenido al proyecto web de la **Clínica Dr. Carlos Zúñiga** en Apartadó, Antioquia. Este archivo proporciona el contexto técnico y operativo para que cualquier Inteligencia Artificial pueda continuar, extender o mantener el proyecto de manera autónoma y precisa.

---

## 📌 1. Estructura del Proyecto
* `index.html`: Página web 100% autónoma (standalone) con estilos CSS embebidos, Schema.org JSON-LD (`@type: "MedicalClinic"` / `"Physician"`), OpenGraph y mapa interactivo.
* `DATOS_NEGOCIO.json`: Fuente única de la verdad con teléfonos, WhatsApp, horarios, dirección y catálogo de procedimientos quirúrgicos y médicos.
* `FICHA_DISENO.md`: Sistema de diseño, paleta de colores Medical Cyan Teal (`#45b6c2`) & Deep Marine Blue (`#0d2b45`), tipografía `Plus Jakarta Sans` y `Outfit`.
* `AGENTS.md`: Este archivo de instrucciones y lineamientos.

---

## 🏛️ 2. Arquitectura de 4 Secciones Estrictas
1. **`#inicio`**: Hero Header Inmersivo Full-Width con paciente/médico a la derecha, degradado azul hielo `#f0f8fa` a la izquierda, módulo integrado de contacto rápido y botón de agendamiento.
2. **`#servicios`**: Catálogo de 6 procedimientos (Mamoplastia, Rinoplastia, Liposucción HD, Armonización Facial, Abdominoplastia y Blefaroplastia).
3. **`#nosotros`**: Vitrina médica con credenciales del Dr. Carlos Zúñiga (SCCP), trayectoria y enfoque en seguridad quirúrgica.
4. **`#ubicacion`**: Tarjeta a 2 columnas con mapa interactivo georreferenciado en Apartadó (`Cra. 105 #95A - 12, Barrio Nuevo`).

---

## 🛡️ 3. Reglas Obligatorias para cualquier IA
* **Idioma 100% en Español**: Cero textos en inglés residuales procedentes de plantillas o referencias visuales.
* **Mapa de Google Embebido Exacto**:
  `https://maps.google.com/maps?q=Clinica+Dr.+Carlos+Zuniga,+Cra.+105+%2395A-12,+Apartad%C3%B3,+Antioquia&t=&z=16&ie=UTF8&iwloc=&output=embed`
* **Botones WhatsApp**: Todos deben dirigir al enlace de WhatsApp oficial del negocio (`+573337588617`) con mensaje prellenado amigable.
