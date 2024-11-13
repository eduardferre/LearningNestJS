# HOW TO USE NEST.JS

## SETTING UP THE PROJECT

To install the NestJS CLI:

`npm i @nestjs/cli -g`

Then to create the project:

`nest new <project-name>`

Once the project is created, you can start it in development mode by running the following command:

`npm run start:dev`

And now you can access to `localhost:3000`

## PRINCIPAL COMPONENTS

`main.js` :arrow_right: Where the web service is started at port 3000 and the module is initialized

`app.module.ts` :arrow_right: Starting module where the needed imports, controllers and services are stated to be initialized

`app.controller.ts`

`app.service.ts`

## CREATING COMPONENTS

To create a new module: `nest generate module <module-name>` or `nest g module <module-name>`

To create a new controller: `nest generate controller <controller-name>` or `nest g controller <controller-name>`

To create a new service: `nest generate service <service-name>` or `nest g service <service-name>`

## DECORATORS

`@Injectable()` is a decorator to indicate that the given class could be injected wherever in the code to be used.

`@Controller('<controller-prefix>')` indicates that the following class is a controller, so it give the controller context to define the endpoints `api/<controller-prefix>` for the HTTPs requests.
Then, that decorator is indicating that `@Get('<path-prefix>l')`, `Post()` and other HTTP request decorator can be used within that class to create the necessary endpoints.

## ENTITIES

An entity specifies the structure of an object. It is a class with the attributes of a given object. It can help to use classes with databases, by using ORM (database models). It can also help to created certain types of schemas like in GraphQL.
