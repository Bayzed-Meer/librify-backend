import * as dotenv from 'dotenv';

dotenv.config();

export interface IConfig {
  port: number;
  dbUrl: string;
  dbName: string;
  nodeEnv: string;
  corsOrigin: string;
  accessTokenSecret: string;
  accessTokenExpiry: string;
  refreshTokenSecret: string;
  refreshTokenExpiry: string;
  resetPasswordSecret: string;
  resetPasswordExpiry: string;
  cloudinaryCloudName: string;
  cloudinaryApiKey: string;
  cloudinaryApiSecret: string;
  smtpUser: string;
  smtpPassword: string;
  companyName: string;
}

const getEnvVariable = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} must be specified`);
  }
  return value;
};

const getAppConfig = (): IConfig => {
  return {
    port: parseInt(getEnvVariable('PORT')),
    dbUrl: getEnvVariable('DB_URL'),
    dbName: getEnvVariable('DB_NAME'),
    nodeEnv: getEnvVariable('NODE_ENV'),
    corsOrigin: getEnvVariable('CORS_ORIGIN'),
    accessTokenSecret: getEnvVariable('ACCESS_TOKEN_SECRET'),
    accessTokenExpiry: getEnvVariable('ACCESS_TOKEN_EXPIRY'),
    refreshTokenSecret: getEnvVariable('REFRESH_TOKEN_SECRET'),
    refreshTokenExpiry: getEnvVariable('REFRESH_TOKEN_EXPIRY'),
    resetPasswordSecret: getEnvVariable('RESET_PASSWORD_SECRET'),
    resetPasswordExpiry: getEnvVariable('RESET_PASSWORD_EXPIRY'),
    cloudinaryCloudName: getEnvVariable('CLOUDINARY_CLOUD_NAME'),
    cloudinaryApiKey: getEnvVariable('CLOUDINARY_API_KEY'),
    cloudinaryApiSecret: getEnvVariable('CLOUDINARY_API_SECRET'),
    smtpUser: getEnvVariable('SMTP_USER'),
    smtpPassword: getEnvVariable('SMTP_PASSWORD'),
    companyName: getEnvVariable('COMPANY_NAME'),
  };
};

export const appConfig = getAppConfig();
