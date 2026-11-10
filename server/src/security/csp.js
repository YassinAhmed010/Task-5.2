const development = process.env.NODE_ENV !== 'production';

export const helmetOptions = {
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      scriptSrcAttr: ["'none'"],
      styleSrc: development
        ? ["'self'", "'unsafe-inline'"]
        : ["'self'"],
      imgSrc: ["'self'", 'data:'],
      connectSrc: development
        ? ["'self'", 'http://localhost:4000', 'ws://localhost:5175']
        : ["'self'"],
      objectSrc: ["'none'"],
      baseUri: ["'none'"],
      frameSrc: ["'none'"],
      frameAncestors: ["'none'"],
      formAction: ["'self'"],
      upgradeInsecureRequests: development ? null : []
    }
  },
  strictTransportSecurity: development ? false : undefined
};