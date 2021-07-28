# PayPay-Corporation Coding Challenge

Backend - Nodejs, Nestjs, Typescript, Mongoose & MongoDB | Frontend - Reactjs & Typescript  (Amar Pai Fondekar)

**Features Completed:**
* Backend API for Listing, Details, Create Employee (Note: I have used MongoDB so that i can encapsulate Employee and Performance Review schema in one document, However i am also well versed with relational DB like Postgres, Mysql and Oracle).
* Created DB migration + Seeder
* Created React + Typescript Frontend (I like using Material UI components but due to time constraints i opted for Bootstrap UI)

## API backend endpoints (port 5000)

prerequisite: Nodejs and MongoDB installed on 27017 (default port)

* Steps to Start the Application
1) go to employee-backend
2) npm Install
3) npm run migrate:up (This will created seeding data and Schema for you in MongoDB) seeder File: migrations\20210728183114-initial-employee-schema.js
4) npm run start:dev

MongoBD schema can be checked here : migrations\20210728183114-initial-employee-schema.js

```bash
POST http://localhost:5000/api/v1/employee/create

GET http://localhost:5000/api/v1/employees

GET http://localhost:5000/api/v1/employee/employeeID  (employeeID eg: MongoEmployeePrimaryKey - 6101a4aed63540349c306d56)
```

Postman Collection Export: https://www.getpostman.com/collections/b24961b21ddfcb90b5be

![image](https://user-images.githubusercontent.com/10544557/127397373-7e5b8f95-e92b-47c2-bb2a-c03c1c5298f0.png)

## React Application (port 3000)

* Steps to Start the Application
1) go to employee-frontend
1) npm Install
2) npm start

Page should load on http://localhost:3000/

**Page 1: Employee View to check all assigned Review**
**Assumption:**
 - Login Auth Object should have a field to distinguish Admin or General Employee.
 - Check should be done if employee id from Auth object is present in review_request field from DB.

![image](https://user-images.githubusercontent.com/10544557/127395560-a9583c89-0709-4c17-a509-6f4fc534e116.png)

**Page 2:  Admin can create a new employee.**
**Assumption:**
 - Login Auth Object should have a field to distinguish Admin and only admin should be able to see Create button on the Header

![image](https://user-images.githubusercontent.com/10544557/127395892-f08e142b-059c-4e02-bfd6-4d9d86eacec0.png)

**Page 3: Employee View if you click on a person it will take you to Review page.**
**Assumption:**
 - There should be an update API that takes the object of a employee and appends "review_comments" field from DB.

![image](https://user-images.githubusercontent.com/10544557/127396185-bbda3c8c-99ef-4746-99f5-f079f30f10eb.png)

**Areas of my strength in descending order:**
 - Node.js, java Backend
 - React and Typescript
 - Event Driven and Microservice Architectures using RabbitMQ
 - Python based data crunching. 
