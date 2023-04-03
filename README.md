# Cat Shop

# Task 3

# Service is done with FE

# Deploy

https://d1gjzqq39e70nl.cloudfront.net/

# BE PR link

# Swagger

https://agills86v9.execute-api.us-east-1.amazonaws.com/swagger

# All tasks were completed:

Evaluation criteria :

- Product Service Serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- Your own Frontend application is integrated with Product Service (/products API) and products from Product Service are represented on Frontend. AND POINT1 and POINT2 are done.
  Additional (optional) tasks
- +5 - Async/await is used in lambda functions
- +5 - ES6 modules are used for Product Service implementation
- +4 - Custom Webpack/ESBuild/etc is manually configured for Product Service. Not applicable for preconfigured/built-in bundlers that come with templates, plugins, etc.
- +4 - SWAGGER documentation is created for Product Service
- +4 - Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
- +4 - Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- +4 - Main error scenarios are handled by API ("Product not found" error).
