const os = require("os");

const CORES = os.cpus().length;
const PROCESSES = CORES / 2 + 1;

module.exports = {
  apps: [
    {
      name: "Bitmedia",
      script: "./src/index.js",
      instances: PROCESSES,
      autorestart: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        DEBUG: "app:*"
        // The rest of variables is passed down by Docker
      }
    }
  ]
};
