# Threaddumper

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Poor-man's setup from scratch (as on a newly provisioned VM -- assumes you have `git`, `docker`, and `curl` available)

clone this repo somewhere.

## Build it

### Getting Node and Angular cli
I followed the instructions for node here: https://docs.npmjs.com/getting-started/installing-node , and specifically here: https://github.com/creationix/nvm/blob/master/README.md#installation

1. install nvm: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
2. install node: `nvm install node`
3. install angular cli: `npm install -g @angular/cli`

### Actually Build it

go to the directory where you cloned
4. `ng build` (you might need to `npm install` first.)

now it built in the `dist/` directory.

## Running it as a server (using Docker to get httpd):

from the directory where you cloned (which itself contains the dist directory where you built)
Run: `docker run -dit --name thread-dumper-app -p 8080:80 -v "$PWD/dist":/usr/local/apache2/htdocs/ httpd:2.4`
