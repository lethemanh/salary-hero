import config from 'config';

export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for Salary Hero API',
    },
    servers: [
      {
        url: `http://localhost:${config.port}/salary-hero`,
        description: 'Localhost server',
      },
    ],
    components: {
      securitySchemes: {
        XToken: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
          description: 'Enter the token with the `X-Token: ` prefix, e.g. "X-Token abcde12345".',
        },
      },
    },
    tags: [
      {
        name: 'Health',
        description: 'check health',
      },
    ],
  },
  apis: ['./**/*.ts'],
};
