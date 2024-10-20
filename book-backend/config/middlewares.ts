import {env} from "@strapi/utils";

const bucket = env('AWS_BUCKET');
const region = env('AWS_REGION');
const bucketUrl = `https://${bucket}.s3.${region}.amazonaws.com`;

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            bucketUrl,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            bucketUrl,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
