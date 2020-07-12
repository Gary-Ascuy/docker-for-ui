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



## Configuration


## Summary 

```sh
$ yarn 
```

