# Dynamic Query UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

The application starts on [http://localhost:4200](http://localhost:4200).

## Docker Image

* __Dockerfile__: [Multistage Dockerfile with Nginx](Dockerfile)
* __Settings:__ [nginx.conf](nginx.conf)
  * Exposes `Port 4200`
  * Uses __API__ at `Port 8088`
* __Pull Image:__
  * `docker pull ghcr.io/home-planner-group/dynamic-query-ui:latest`
* __Run Container:__
  * `docker run -d -p 4202:4200 --name query-ui ghcr.io/home-planner-group/dynamic-query-ui:latest`

## Docker Compose

To start the independent application stack of the Dynamic-Query-Service, run `docker-compose up` with
its [configuration](docker-compose.yml).

## Architecture

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

<details>
  <summary>Explanation</summary>

* Browser = `localhost:4200`
* Routing = [routing module](src/app/app-routing.module.ts)
* Components = [component-package](src/app/components)
* Services = [service-package](src/app/services)
* Models = [model-package](src/app/models)
* REST API = `localhost:8080`

</details>

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

## GitHub Workflows

<details>
  <summary>Docker Image Delivery Workflow</summary>

* [.github/workflows/docker-image.yml](.github/workflows/docker-image.yml)
  * __Trigger:__ manual or on published release
  * Executes `docker build`
  * Execute `docker push` to GitHub Packages

</details>

## Angular Commands

<details>
  <summary>Development server</summary>

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you
change any of the source files.
</details>

<details>
  <summary>Code scaffolding</summary>

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
</details>

<details>
  <summary>Build</summary>
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
</details>

<details>
  <summary>Running unit tests</summary>

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
</details>

<details>
  <summary>Running end-to-end tests</summary>

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a
package that implements end-to-end testing capabilities.
</details>

<details>
  <summary>Further help</summary>

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
</details>
