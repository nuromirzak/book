import {OpenAPI} from "@/api";

export function configureOpenAPI() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (!STRAPI_URL) {
    throw new Error("STRAPI_URL is not set");
  }
  OpenAPI.BASE = STRAPI_URL + "/api";
}
