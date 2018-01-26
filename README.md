# ToDo-angular4-springBoot

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

#### Go to project directory and install following dependacies.

```
$ cd ng4-spring-boot-mongodb-demo
```

### Installing Angular 4 project dependencies

```
$ npm install
```

## Step to run the project
#### 1. Build and run the backend app using maven

```
$ mvn package 
$ java -jar target/todo-1.0.0.jar
```
Alternatively, you can run the app without packaging it using this command
```
$ mvn spring-boot:run
```
The backend server will start at http://localhost:8080. After starting backend server you can run front end app.

#### 2. Run frontend app 

```
$ ng serve
```

Thats it now you can play here http://localhost:4200.
