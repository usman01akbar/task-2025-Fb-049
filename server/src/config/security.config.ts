export const SECURITY_CONFIG = {
  CORS: {
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
    optionsSuccessStatus: 200,
  },
  HELMET: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
    crossOriginEmbedderPolicy: false,
  },
  BODY_PARSER: {
    json: {
      limit: '10mb',
      strict: true,
    },
    urlencoded: {
      extended: true,
      limit: '10mb',
      parameterLimit: 100,
    },
  },
  TRUST_PROXY: process.env.TRUST_PROXY === 'true' || false,
};

