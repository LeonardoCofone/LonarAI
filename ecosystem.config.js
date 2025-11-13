module.exports = {
  apps: [
    {
      name: "lexor-backend",
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
      name: "lexor-refresh",
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