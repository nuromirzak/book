import {OpenAPI} from "@/api";

export function configureOpenAPI() {
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
  const STRAPI_URL = process.env.STRAPI_URL;
  if (!STRAPI_TOKEN || !STRAPI_URL) {
    throw new Error("STRAPI_TOKEN or STRAPI_URL is not set");
  }
  OpenAPI.TOKEN = STRAPI_TOKEN;
  OpenAPI.BASE = STRAPI_URL;
}
