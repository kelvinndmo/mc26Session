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
-   We are going to create a models folder in the app folder where we can have our interfaces.We can the go ahead and create a ```Post.ts``` file

    ```
    // Goal.ts
    import interface Post {
        title:string;
        id:number;
        body:string;
    }

    ```

### We are then going to use the interface in the post-list.component.ts.
-   First we declare an array of posts of type posts.
-   We initialize the posts in the ```ngOnit``` lifecycle hook,in Angular, a a lifecylce hook is basically a method that represents a certain stage 
    of a components lifecyle, it is mostly an interface that is implemented on component, basically when you have an interface having a method as a field, 
    you have to have that method in the component for your to implement it on the component.
-   A component,in this sense has a life, with the following steps
    
    - when the component is initialized.
    - when the component is updated.
    - when the component is destroyed.

    - Read more about lifecyle hooks here [Angular-lifecycle-hooks](https://angular.io/guide/lifecycle-hooks)


    - To implement the ngOnit interface, you first follow the following steps.
        1.  import OnInit from ```@angular/core```
        2.  implement it on the component by adding after the component class declaration.
        -   The ngOnit on init lifecyle method runs when the component is intialized.

        ```
        import { Component, OnInit } from '@angular/core';
        import { Post } from 'src/app/model/Post';
      

        @Component({
        selector: 'app-post-list',
        templateUrl: './post-list.component.html',
        styleUrls: ['./post-list.component.scss']
        })
        export class PostListComponent implements OnInit {
        tasks: Post[];
        

        constructor() { }

        ngOnInit(): void {
            this.posts = [
                {
                    id:1,
                    title:"kelvin onkundi",
                    body:"a good body for the component"
                }
            ]
        }

        }
    ```
    - ngOnit method above is a lifecyle hook that runs when the component is intialized, so in this case we have done the following;
        -   Implemented the OnInit lifecyle hook.
        -   Inside the ngOnit method, we have initialized the goals which we had declared earlier.
        
