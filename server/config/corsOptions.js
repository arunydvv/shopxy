import dotenv from "dotenv";

dotenv.config();

const isProd = process.env.NODE_ENV === "production";

const corsOptions = {
  origin: isProd ? process.env.CLIENT_URL_PROD : process.env.CLIENT_URL_DEV,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma",
  ],
  credentials: true,
};

export default corsOptions;
