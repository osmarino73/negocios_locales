# 🚀 Guía de Despliegue Continuo: GitHub + Netlify

Esta guía te explica cómo publicar este proyecto en **GitHub** y conectarlo con **Netlify** para tener un **Portal Showroom Hub en Vivo** con despliegue automático.

---

## 1. Publicar en GitHub con 1 Comando

Desde la terminal en la carpeta `c:\Users\Rio Belen\negocios_locales`, puedes crear el repositorio en tu cuenta de GitHub ejecutando:

```bash
gh repo create negocios_locales --public --source=. --push
```

*(Si no has iniciado sesión en GitHub CLI previamente, ejecuta `gh auth login` y sigue los pasos).*

### O con comandos Git tradicionales:
1. Crea un repositorio vacío en GitHub llamado `negocios_locales`.
2. Copia la URL de tu repositorio y ejecuta:
```bash
git remote add origin https://github.com/TU_USUARIO/negocios_locales.git
git branch -M main
git push -u origin main
```

---

## 2. Conectar a Netlify (Despliegue Continuo en 3 Clics)

1. Ingresa a tu panel de [Netlify App](https://app.netlify.com/).
2. Haz clic en **"Add new site"** ➔ **"Import an existing project"**.
3. Selecciona **GitHub** e inicie sesión para autorizar.
4. Elige el repositorio **`negocios_locales`**.
5. Deja los valores por defecto:
   - **Branch**: `main`
   - **Publish directory**: `.` (la raíz)
6. Haz clic en **"Deploy site"**.

¡Listo! Netlify generará automáticamente una URL pública en vivo (ej: `https://negocios-locales-hub.netlify.app`).

---

## 🔄 ¿Cómo agregar un nuevo negocio local en el futuro?

Cada vez que agregues un nuevo negocio local a esta carpeta o hagas modificaciones en los sitios existentes, solo ejecuta:

```bash
git add .
git commit -m "feat: nuevo negocio local agregado"
git push
```

**Netlify detectará el commit automáticamente y actualizará tu Showroom público en 5 segundos.**
