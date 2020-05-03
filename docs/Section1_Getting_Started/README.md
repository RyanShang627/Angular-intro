# Section 1: Getting Started

## What is Angular

Angular is a JavaScript Framework which allows you to create reactive Single-Page-Applications (SPAs).

## Understanding Angular Versioning

The Angular version is updated every 6 months.
AngularJS (Angular 1) => Angular 2 (was completely re-written) => Angular 4 => ... => Angular 9 (Most update almost changed nothing)
Angular 2 ~ Angular 9 are all called Angular. This course teaches the Angular.

## Install Angular CLI

Install the Angular CLI globally:

```bash
npm install -g @angular/cli
```

To create a new Angular project, a simple way is to use the command provided by Angular: `ng new`

```bash
ng new my-first-app
```

To run the Angular app, first redirect to the project folder, then:

```bash
ng serve
```

The server will run on localhost:4200 by default.

## TypeScript

More features than vanilla JS (e.g. Types, Classes, Interfaces, ...). But TypeScript will be compiled to JavaScript when it is running. TypeScript is really familiar to JavaScript.

## Install Bootstrap to the project

Install Bootstrap package:

```bash
npm install --save bootstrap@3
```

Use the Bootstrap css:

Add the Bootstrap css file inside the `angular.json` file: Add the following file:

```json
"node_modules/bootstrap/dist/css/bootstrap.min.css"
```
