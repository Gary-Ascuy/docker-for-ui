# Docker For UI

## Software Dependencies 

- NodeJS 14.5
- Docker Latest
- Docker Compose Latest
- Yarn ( `npm install --global yarn` )

## Create & Build Project 

Execute `yarn install` to download dependencies in all projects.

### React

```sh
$ npx create-react-app react-app
$ cd react-app
```

Start Development
```sh
$ yarn start
```

Build
```
$ yarn build
```

by default it leaves build into `./build`

### Angular 

```sh
$ npm install --global @angular/cli
$ ng new angular-app
$ cd angular-app
```

Start Development ( alias from `ng serve` )
```sh
$ yarn start
```

Build ( alias from `ng build` )
```
$ yarn build
```

by default it leaves build into `./dist`

### Vue
```sh
$ npm install --global @vue/cli
$ vue create vue-app
$ cd vue-app
```

Start Development ( alias from `vue-cli-service serve` )
```sh
$ yarn serve
```

Build ( alias from `vue-cli-service build` )
```
$ yarn build
```

by default it leaves build into `./dist`

## Test Production Builds 

Install serve http cli
```sh
$ npm install --global serve
```

React 
```sh
$ cd react-app
$ serve -s build       
```

Angular
```sh
$ cd angular-app
$ serve -s ./dist/angular-app
```

Vue
```sh
$ cd vue-app
$ serve -s ./dist
```

## Basic Docker Images 

Remenber execute install and build scripts in each folder
```sh
$ cd <project> # react-app, angular-app, vue-app
$ yarn install
$ yarn build
```

### React

Dockerfile (./react-app/Dockerfile)
```
FROM nginx:1.19-alpine
WORKDIR /usr/share/nginx/html
COPY ./build .
```

Docker Build
```sh
$ cd react-app
$ docker build --tag garyascuy/dockerforui:react .
```

Test React http://localhost:3666
```sh
$ docker run -d -p 3666:80 garyascuy/dockerforui:react
```

### Angular

Dockerfile (./angular-app/Dockerfile)
```
FROM nginx:1.19-alpine
WORKDIR /usr/share/nginx/html
COPY ./dist/angular-app .
```

Docker Build
```sh
$ cd angular-app
$ docker build --tag garyascuy/dockerforui:angular .
```

Test Angular App http://localhost:4666
```sh
$ docker run -d -p 4666:80 garyascuy/dockerforui:angular
```

### Vue

Dockerfile (./vue-app/Dockerfile)
```
FROM nginx:1.19-alpine
WORKDIR /usr/share/nginx/html
COPY ./dist .
```

Docker Build
```sh
$ cd vue-app
$ docker build --tag garyascuy/dockerforui:vue .
```

Test Vue App http://localhost:5666
```sh
$ docker run -d -p 5666:80 garyascuy/dockerforui:vue
```

## Configuration Variables

## Continuous Integration / Continuous Deployment

- https://gitlab.com/gary.ascuy/ci-as-code

## About

Created by [Gary Ascuy][garyascuygithub] and Follow me in [LinkedIn][garyascuylinkedin] or [GitHub][garyascuygithub] if you want :P.

[garyascuygithub]: https://github.com/gary-ascuy
[garyascuylinkedin]: https://www.linkedin.com/in/gary-ascuy-6619bbb9/
