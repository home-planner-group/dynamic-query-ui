# Dynamic Query UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

The application starts on [http://localhost:4200](http://localhost:4200).

## Architecture

### Overview

```
    Browser
       |
    Routing
       |
    Components  ----
       |           |
    Services --> Models
       |
    REST API
```

### Explanation

* Browser = `localhost:4200`
* Routing = [routing module](src/app/app-routing.module.ts)
* Components = [component-package](src/app/components)
* Services = [service-package](src/app/services)
* Models = [model-package](src/app/models)
* REST API = `localhost:8080`

## Dev Requirements

* Download and Install [NodeJS](https://nodejs.org/) v16.14.1+
* Install [Angular CLI](https://github.com/angular/angular-cli) v13.3.0: `npm install -g @angular/cli@13.3.0`
* Download and Install [Docker](https://docs.docker.com/desktop/windows/install/)
  * Build Image: `docker build -t dynamic-query-ui .`

## Dependencies

* [Angular Material](https://material.angular.io/guide/getting-started):
  * `ng add @angular/material`
* [Flex Layout](https://github.com/angular/flex-layout):
  * `npm i -s @angular/flex-layout @angular/cdk`
  * Tool: [Demo](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

## Angular Commands

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
