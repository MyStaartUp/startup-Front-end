import {CorsOptions} from "cors";

const whitelist: string[] = [
    'http://localhost:3000',
];

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin || '') != -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
}

export default corsOptions;