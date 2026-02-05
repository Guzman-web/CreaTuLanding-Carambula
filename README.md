# CreaTuLanding-Carambula

Landing page de e-commerce creada con React + Vite, con integración de Claude AI para asistencia virtual.

## 🚀 Características

- 🛍️ Catálogo de productos con tarjetas interactivas
- 🤖 Asistente virtual powered by Claude AI
- 📱 Diseño responsive
- ⚡ Desarrollo rápido con Vite y Hot Module Replacement

## 🔧 Configuración

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio
```bash
git clone https://github.com/Guzman-web/CreaTuLanding-Carambula.git
cd CreaTuLanding-Carambula
```

2. Instala las dependencias
```bash
npm install
```

3. Configura tu API key de Claude
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env y añade tu API key de Anthropic
VITE_CLAUDE_API_KEY=tu_api_key_aqui
```

Para obtener una API key:
- Visita [Anthropic Console](https://console.anthropic.com/)
- Crea una cuenta o inicia sesión
- Genera una nueva API key en la sección de configuración

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para producción

```bash
npm run build
```

### Preview de producción

```bash
npm run preview
```

## 🤖 Asistente Virtual Claude

El asistente virtual usa Claude AI de Anthropic para proporcionar:
- Recomendaciones de productos personalizadas
- Respuestas a preguntas sobre productos
- Asistencia durante el proceso de compra
- Atención al cliente en tiempo real

**Nota**: En producción, se recomienda implementar un backend proxy para las llamadas a la API de Claude por razones de seguridad.

## 📦 Tecnologías

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Anthropic SDK](https://www.anthropic.com/)
- ESLint para linting

## 🔌 Plugins de Vite disponibles

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Usa Babel para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Usa SWC para Fast Refresh

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

