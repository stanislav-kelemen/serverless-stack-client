const dev = {
  STRIPE_KEY: "pk_test_51IHCWAKp50CzCfTjvdUS4EH0XMQWtDA5AD1cvNXR3Cw4YP12MNwI2frUVCcoSUfaydsmX90KO6a8cfN5yPDtGTJF00hX6kr6bK",
  s3: {
    REGION: "us-east-2",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-gp7tczrtosl2"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://34tizt78vh.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_XZxRd6y2Q",
    APP_CLIENT_ID: "4gd41a2lsp3vvfs1jvg8599836",
    IDENTITY_POOL_ID: "us-east-2:2f442a3a-249e-4396-b529-0c5d517aef48"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IHCWAKp50CzCfTjvdUS4EH0XMQWtDA5AD1cvNXR3Cw4YP12MNwI2frUVCcoSUfaydsmX90KO6a8cfN5yPDtGTJF00hX6kr6bK",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-17m37z5ufpveo"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://zbha2fqswa.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "s-east-2_Dg64g0vKp",
    APP_CLIENT_ID: "17cnavab1lamhg16elapea8ej3",
    IDENTITY_POOL_ID: "us-east-2:06ff73ec-56d5-44af-b873-1bc2a1dd9e2a"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
