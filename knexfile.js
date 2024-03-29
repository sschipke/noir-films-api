module.exports = {
  development: {
    client: "pg",
    connection: "pg://localhost/noir_films",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true,
    pool: { min: 0, max: 5 }
  },
  test: {
    client: "pg",
    connection: "pg://localhost/noir_films_test",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },
  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    rejectUnauthorized: false,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  }
};
