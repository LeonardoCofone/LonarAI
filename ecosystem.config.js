module.exports = {
  apps: [
    {
      name: "lonar-backend",
      script: "./backend/server.js",
      cwd: "./backend",
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    },
    {
      name: "lonar-refresh",
      script: "./backend/refreshTokens.js",
      cwd: "./backend",
      watch: false,
      instances: 1,
      autorestart: true,
      max_memory_restart: "100M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
}