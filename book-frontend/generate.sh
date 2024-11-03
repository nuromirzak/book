cd ../book-backend || exit

npm run build

cd ../book-frontend || exit

npx openapi-typescript-codegen --input ../book-backend/dist/src/extensions/documentation/documentation/1.0.0/full_documentation.json --output ./openapi

npm run lint

npm run build
