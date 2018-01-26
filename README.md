# ToDo-Angular4-SpringBoot

Simple demo ToDo app developed using Angular 4, Spring-Boot and MongoDB.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Requirements
To run this project you will have to install following components in your environment.

- Node.js: https://nodejs.org/en/
- MongoDB: https://www.mongodb.com/
- Maven: http://maven.apache.org/

#### Clone the project in your system.
```
$ git clone https://github.com/rehan4me/ToDo-Angular4-SpringBoot.git
```
#### Go to project directory.
```
$ cd ToDo-Angular4-SpringBoot
```
## Step to run the project
#### 1. Build and run the _Spring-Boot_ back-end app using maven
```
$ cd back-end
```
Run this command to build and run the app.
```
$ mvn package 
$ java -jar target/todo-1.0.0.jar
```
Alternatively, you can run the app without packaging it using this command
```
$ mvn spring-boot:run
```
The backend server will start at http://localhost:8080. I have integrated **_Swagger-UI_** with spring boot application so we can see  and test all API end points using this link http://localhost:8080/swagger-ui.html

#### 2. Install dependencies and run _Angular 4_ front-end app
```
$ cd front-end
$ npm install
```
Run this command to open the app.
```
$ ng serve --open
```
Thats it now you can play here http://localhost:4200.
