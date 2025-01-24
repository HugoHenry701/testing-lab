# nest-boilerplate

## features:
- eslint
- docker
- swagger
- mongoose
- logger
- cron-job
- exception-filter
- response-format 
- health-check-module
- auth-module
    - login
    - register
    - refresh-token
    - revoke-token

## technical requirements:
- docker
- docker-compose
- nodejs >=20.9.0
- yarn >=1.22.19

## installation guide:
#### 1. install dependencies:
```
yarn install
```

#### 2. prepare project's configurations:
```
.env.example
docker-compose.yaml
package.json
```

#### 3. copy `.env`
```
cp .env.example .env
```

#### 4. run infrastructure services:
```
docker-compose up redis -d
```

#### 6.1. start in the development environment:
```
yarn start:dev
```

#### 6.2. start in the production environment:
```
yarn build
yarn start:prod
```

## other notes:
#### generate new modules:
```
nest g res ${module-name} modules
```
