#!/bin/bash

# Project name
PROJECT_NAME="my-vue-ssr-project"

# Create project directory
mkdir $PROJECT_NAME
cd $PROJECT_NAME

# Initialize a new npm project
npm init -y

# Install Vite, Vue 3, vite-plugin-ssr, CSS Normalize, and SCSS
npm install vite vue@next @vitejs/plugin-vue vite-plugin-ssr normalize.css sass

# Create Vite config file
cat <<EOL > vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ssr } from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [
    vue(),
    ssr({ prerender: true })
  ]
})
EOL

# Create main entry file for Vite
mkdir src
cat <<EOL > src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import 'normalize.css'

createApp(App).mount('#app')
EOL

# Create main Vue component
cat <<EOL > src/App.vue
<template>
  <div id="app">
    <h1>Hello, Vite with Vue 3 and SSR!</h1>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
</style>
EOL

# Create index.scss file
cat <<EOL > src/index.scss
/* Import Normalize.css */
@import 'normalize.css';

/* Your custom styles */
body {
  font-family: Arial, sans-serif;
}
EOL

# Create a basic server file for SSR
cat <<EOL > server.js
import express from 'express'
import { createPageRender } from 'vite-plugin-ssr'
const isProduction = process.env.NODE_ENV === 'production'

async function startServer() {
  const app = express()

  if (isProduction) {
    const sirv = (await import('sirv')).default
    app.use(sirv(\`\${__dirname}/dist/client\`))
  } else {
    const vite = await (await import('vite')).createServer({
      server: { middlewareMode: 'ssr' }
    })
    app.use(vite.middlewares)
  }

  const renderPage = createPageRender({ isProduction })
  app.get('*', async (req, res, next) => {
    const result = await renderPage({ url: req.originalUrl })
    if (result.nothingRendered) return next()
    res.status(result.statusCode).send(result.renderResult)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(\`Server running at http://localhost:\${port}\`)
}

startServer()
EOL

echo "Project setup complete!"
echo "Run 'npm run dev' to start the development server."
