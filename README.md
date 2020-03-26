# CAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Setup
- Clone the repository
- run npm install
- run ng-serve

## Generating an Angular Component
-   The Angular CLI comes with a lot of power, the CLI enables you to create directives, components, custom pipes among other things.
    To start with we are going to generate a component using the CLI, to generate a component run the following command

    ```
    ng generate component components/post-list
    ```
-   The command will have the following files:
    -   post-list.component.ts
    -   post-list.component.scss
    -   post-list.component.spec.ts
    -   post-list.component.html

-   The HTML and SCSS files are linked to the component.ts file, where we have the styleUrls and templateURL
-   The selector enables the component to be renderered in another component html file.

### working with our post-list.component.ts
-   In the post-list component, we want to have a list of  post, basically we can have a list being a an object with a title, id, and body.
-   To enable us to type each specific object, we are going to declare an interface which is basically a maping that each element should implement.
-   We are going to create a models folder in the app folder where we can have our interfaces.We can the go ahead and create a ```Goal.ts``` file

    ```
    // Goal.ts
    import interface Goal {
        title:string;
        id:number;
        body:string;
    }
    
    ```


