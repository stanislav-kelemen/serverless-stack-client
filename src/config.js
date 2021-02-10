const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-app",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://zbha2fqswa.execute-api.us-east-2.amazonaws.com/prod/",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_MrSnKBLX9",
    APP_CLIENT_ID: "7oh8pdjau65taa8d6f24h83rre",
    IDENTITY_POOL_ID: "us-east-2:03be0e2a-189c-46e2-88c3-de75f8a7d6f7",
  },
};

export default config;
