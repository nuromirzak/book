cd ../book-strapi || exit

npm run build

cd ../book-frontend || exit

npx openapi-typescript-codegen --input ../book-strapi/dist/src/extensions/documentation/documentation/1.0.0/full_documentation.json --output ./api

npm run lint

npm run build
