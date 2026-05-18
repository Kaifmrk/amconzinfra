# IES Modern - Vite Migration

This project has been successfully migrated from Create React App (CRA) to Vite.

## 🚀 What Changed

### Build Tool
- **Before:** Create React App (react-scripts)
- **After:** Vite with @vitejs/plugin-react

### Key Benefits
- ⚡ **Faster dev server** - Hot Module Replacement (HMR) is instant
- 🏗️ **Faster builds** - Production builds are significantly faster
- 📦 **Smaller bundle size** - Better tree-shaking and optimizations
- 🔧 **Modern tooling** - Native ESM, esbuild, and Rollup

### File Structure Changes
1. **index.html** moved from `public/` to root directory
2. **Entry point** renamed from `src/index.js` to `src/index.jsx`
3. **package.json** updated with Vite scripts and dependencies
4. **vite.config.js** created with configuration

### Dependencies
- ✅ Removed: `react-scripts`
- ✅ Added: `vite`, `@vitejs/plugin-react`
- ✅ Kept: All your existing dependencies (@emailjs/browser, lucide-react, etc.)

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server (default port 3000):

```bash
npm run dev
```

The dev server will automatically open in your browser with instant HMR.

## 🏗️ Production Build

Build for production:

```bash
npm run build
```

Output directory: `build/` (configured to match CRA)

## 👀 Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🔧 Configuration

### vite.config.js
- Server port set to 3000 (matches CRA default)
- Build output to `build/` directory (matches CRA)
- Auto-open browser on dev server start
- Source maps enabled for debugging

### Environment Variables
- Vite uses `VITE_` prefix instead of `REACT_APP_`
- Update any `.env` files accordingly
- Access via `import.meta.env.VITE_YOUR_VAR`

## 📝 Migration Notes

### No Code Changes Required
All your React components work as-is. The migration only affects:
- Build configuration
- Development server
- Entry point file extension

### Public Assets
- Static assets can be placed in the `public/` folder
- Referenced as `/filename.ext` in your code
- Vite serves them at the root

### Import Paths
- All relative imports remain the same
- No changes needed to your existing import statements

## 🎯 Scripts Comparison

| CRA Command | Vite Command | Purpose |
|-------------|--------------|---------|
| `npm start` | `npm run dev` | Start dev server |
| `npm run build` | `npm run build` | Production build |
| N/A | `npm run preview` | Preview build locally |

## 🔍 Troubleshooting

### If you see import errors:
- Check that all imports use correct file extensions
- Vite is stricter about imports than CRA

### If environment variables don't work:
- Rename `REACT_APP_*` to `VITE_*` in `.env` files
- Update code to use `import.meta.env.VITE_*`

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [Vite Migration Guide](https://vitejs.dev/guide/migration.html)
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)

---

**Note:** This migration maintains backward compatibility with your existing codebase. All React components, styles, and functionality remain unchanged.
