# LIBETECH USA — Premium Portfolio Website

Proyecto web premium para portafolio de branding, logos, moodboards, flyers y sistemas visuales.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre el enlace que te dé la terminal, normalmente:

```bash
http://localhost:5173
```

## Cómo subirlo a GitHub

```bash
git init
git add .
git commit -m "Initial Libetech USA portfolio"
git branch -M main
git remote add origin TU_LINK_DE_GITHUB
git push -u origin main
```

## Cómo publicarlo en Vercel

1. Entra a vercel.com
2. New Project
3. Importa el repo de GitHub
4. Framework: Vite
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

## Cambiar WhatsApp

Busca en `src/main.jsx`:

```jsx
https://wa.me/10000000000
```

Reemplázalo por tu número real en formato internacional.

Ejemplo USA:

```jsx
https://wa.me/12145551234
```

## Editar portafolio

En `src/main.jsx`, modifica el arreglo `projects` para cambiar títulos, categorías, imágenes y textos.
