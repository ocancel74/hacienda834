# Hacienda834 — Project Context for Claude

## Stack
- **Framework**: React + Vite (SPA)
- **Styling**: Tailwind CSS v3 con tokens personalizados (verde, dorado, crema)
- **Deploy**: Vercel (auto-deploy desde `main`)
- **Backend**: Vercel serverless functions en `api/`
- **Data**: `src/data/gallery.json` como fuente de verdad para galería (editable desde `/admin`)
- **Fonts**: Google Fonts — Montserrat + Playfair Display

## Comandos
```bash
npm run dev      # desarrollo local (puerto 5173)
npm run build    # build de producción
npm run preview  # preview del build
```

## Reglas de trabajo
- Cambios a `main` → Vercel despliega en ~1-2 minutos
- Usar `mcp__github__push_files` para push directo a `main` cuando no hay conflictos
- Las variables de entorno (`ADMIN_PASSWORD`, `GITHUB_TOKEN`) solo existen en Vercel, nunca en el repo

## Skills obligatorias
- **Antes de cualquier trabajo de UI/componentes/estilos**: cargar `.claude/skills/frontend-design.md`
