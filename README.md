# Multility

This project mutility(short for multiple utilities) is creatd to practice concepts of angular

Detailed Description: 

1. JSON lint: prettify and validate json
2. jwt decoder: decode jwt and verify signature
3. CSR generator: To be implemented
4. paginate data: To be implemented

Concepts used/covered:
0. String interpolation,local references and basics like property and binding
1. components: every utility is developed as its own components
2. directives: implemented custom directive to add only alpha numeric data in a input field(handled both keypress and paste events). Also created a practice component to do some hands-on on structural directives( ngIf,ngFor,ngSwitch,ngIfThen,ngIfElse etc.)
3. pipe: used in-built pipe and also created a custom pipe used in json lint component
4. routing: all components are accessed via routes
5. forms: template driven and reactive forms with async validator
6. HTTP calls and Interceptor: Implemented interceptor to log outgoing requests and did http calls to read data from backend and display. In Jwt decode component

GOTCHA/s
1. viewChild if used in onInit lifecycle hook, have to add static property inside annotation
2. when using forms espicially template driven if form obj in component and html are not matching, check spellings and hierarchy and see if for all inputs you have mentioned ngModel directive or not

Further:
1. implement a more robust applications using guards modules with lazy loading observable and state management using ngrx
2. implement endpoints of csr generator and paginate data

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
