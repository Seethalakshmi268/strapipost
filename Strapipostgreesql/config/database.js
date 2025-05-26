    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST','dpg-d0o5e8ali9vc73fmrfpg-a.oregon-postgres.render.com' ),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME','strapiserver' ),
          user: env('DATABASE_USERNAME','admin' ),
          password: env('DATABASE_PASSWORD','LPhx5xRt8T1zANCJ2CQv6LlhoAIOQ6ep'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });