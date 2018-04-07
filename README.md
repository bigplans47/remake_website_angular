A Project to make a website using Angular

Remake the Trip Advisor website using the Javascript Angular 5 framework. This site is meant to focus on showing the user local destinations in Budapest and can collect additional places in Budapest to add to its database of places to see.

To Test Locally

git clone to your desktop, in terminal go to the root directory $ npm install -y to install all required packages.

Note you also have to have a Firebase account and setup a database for the site to show. Go to firebase, click add project, go to database, click get started, click the 3 vertical dots and select import json, import budapest-site-export.json, go to rules menu at add in the following:

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

then go to project overview, click add Firebase to your web app, copy the var confir object:

var config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "https://xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
  };

now open folder src, open folder app, make a file in app called api-keys.ts and type 'export var masterFirebaseConfig={ }' paste in the object properties from above between the curly brackets, see below:

export var masterFirebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "https://xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx"
}

To see the site in terminal type the 2 words $ng serve    and in your browser go to url http://localhost:4200/

Specifications:
Has directives (practice with ngIf, ngFor, and more).
Has Full CRUD functionality that changes your models.
Has Firebase (a noSQL database) instead of a hard-coded dataset.
Has Seed data for your database.
No Pipes for filtering data.
Has A router for adding additional pages.
No Authentication and route guards.
Has Deployment (as a dry run for next week). https://budapest-site.firebaseapp.com
No API calls.
Has CSS styling.
No user created tests using Jasmine and Protractor.

Technologies Used

Angular, API, Node, JS, Firebase

Support and contact details

Dan Kiss email me as needed at flowfast47@gmail.com

Copyright (c) 2018 Dan Kiss

# RemakeWebsiteAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
