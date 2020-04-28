const DATABASE_FILE = String(process.env.DATABASE_FILE);

const SERVER_PORT = Number(process.env.SERVER_PORT);
const SERVER_HOST = String(process.env.SERVER_HOST);

module.exports = {
  database: {
    filename: DATABASE_FILE
  },
  server: {
    port: SERVER_PORT,
    host: SERVER_HOST
  }
};
