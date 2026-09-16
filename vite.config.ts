import http from 'node:http'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** On macOS, `localhost` often resolves to ::1 only. Also listen on the other loopback. */
function loopbackDualStack(): Plugin {
  return {
    name: 'loopback-dual-stack',
    configureServer(server) {
      const extra = http.createServer(server.middlewares)
      extra.on('upgrade', (req, socket, head) => {
        server.httpServer?.emit('upgrade', req, socket, head)
      })
      server.httpServer?.once('listening', () => {
        const info = server.httpServer?.address()
        if (!info || typeof info === 'string') return
        const bound = info.address
        const other =
          bound === '127.0.0.1' || bound === '::ffff:127.0.0.1' ? '::1' : '127.0.0.1'
        extra.on('error', () => {})
        extra.listen(info.port, other)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // Served at the root of the custom domain lrmqd.xyz
  base: '/',
  plugins: [react(), tailwindcss(), loopbackDualStack()],
  server: {
    host: '127.0.0.1',
  },
})
