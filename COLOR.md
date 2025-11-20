# Color Scheme Documentation

## Main Color Scheme Analysis

This document outlines the primary color palette used throughout the react-portfolio-v2 project.

### **Primary Background Palette (Dark Mode)**
- **Main gradient**: `from-slate-900 via-slate-800 to-slate-900` — used on nearly every major section (Hero, Experience, Contact, About, Resume, Skills)
- **Card backgrounds**: `from-slate-800 to-slate-900` with hover states
- **Borders**: `border-gray-700/50` → `border-slate-700/50` with transparency

### **Accent Colors (by Feature)**

| Accent | Usage | Example |
|--------|-------|---------|
| **Blue** (`blue-500` → `cyan-500`) | Professional Experience icon, header dividers | `from-blue-500 to-cyan-500`, `via-blue-500` |
| **Purple** (`purple-500` → `pink-500`) | Contest Experience icon, CTA buttons, form submit | `from-purple-500 to-pink-500`, `bg-linear-to-r from-purple-600 to-pink-600` |
| **Amber/Rose/Sky** | Hero image border (gradient) | `from-amber-800 via-rose-800 to-sky-800` (dark mode), brightens in light mode |
| **Emerald/Teal/Cyan** | About section icons | `from-emerald-500 via-teal-500 to-cyan-500` |
| **Yellow** | Contest award badges | `bg-yellow-500/20 text-yellow-300` |
| **Neutral** (white/gray) | Navbar (light background) | `bg-white`, `text-neutral-900`, `text-neutral-600` |

### **Text Color Scheme**
- **Headings**: `text-white`
- **Body text**: `text-gray-300`, `text-gray-400` (secondary), `text-base-300` (light accents)
- **Links/highlights**: `text-amber-500`, `text-purple-600`, `text-stone-400`

### **Shadow & Depth**
- **Glow effects**: `shadow-blue-500/50`, `shadow-purple-500/50`, `shadow-yellow-500/20`
- **Hover elevations**: `hover:shadow-2xl` with color-matched glow

### **Overall Theme**
- **Dark-first** design (slate-900/800 base)
- **Colorful accent highlights** (blue, purple, amber, cyan families)
- **High contrast** between dark backgrounds and bright text/accents
- **Gradient-heavy** for depth and visual interest
- **Soft shadows & transparency** (using `/50`, `/40`, `/20` opacity modifiers)

## Summary

This is a **modern, professional dark portfolio** with strategic pops of color for visual hierarchy and CTA emphasis.

### Key Takeaways for Development
- Keep backgrounds in the **slate family** (`900`, `800`)
- Use **blue** for informational/professional sections
- Use **purple** for interactive/call-to-action elements
- Add **color-matched shadows** to maintain visual cohesion
- Maintain **high contrast** between text and background for accessibility
- Use **transparency modifiers** (`/50`, `/40`, `/20`) for subtle depth effects
