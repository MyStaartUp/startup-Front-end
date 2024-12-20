import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key] || defaultValue;

    if (value === undefined) {
        throw new Error(`Missing Environment Key: ${key}`);
    }

    return value;
}

export const JWT_SECRET = getEnv('JWT_SECRET', crypto.randomBytes(64).toString('hex'));
export const REFRESH_SECRET = getEnv('REFRESH_SECRET', crypto.randomBytes(64).toString('hex'));
export const NODE_ENV = getEnv('NODE_ENV', 'development');
export const PORT = getEnv('PORT', '3001');
export const DATABASE_URI = getEnv('DATABASE_URI');
export const APP_ORIGIN = getEnv("APP_ORIGIN");