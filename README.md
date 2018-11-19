# Simple REST App (Express + PostgreSQL+JWT)

This Template for create REST application using NodeJs and Express

### Library
- [expressjs](https://expressjs.com/ "expressjs")
- [sequelize](http://docs.sequelizejs.com/ "sequelize")
- jwt ([jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme "jsonwebtoken"))
- [passport](https://github.com/jaredhanson/passport "passport") + passport-jwt + passport-local

###Installation
1. create database loginjwt-dev
2. create folder loginjwt any place in your drive, goto into your folder, 
3. run this command

```shell
#clone source
git clone https://github.com/bagus123/simple-express-jwt-template.git
#install library
npm install
#run application
npm run start
```

after run cmd "npm run start" application will run in port 3000

## LIST API
#### 1.  SignUp

`POST /api/auth/signup`

**body**
```json
{
	"email":"bagus@gmail.com",
	"password":"123456"
}

```
**response**

```json
{
    "message": "user createad successfully"
}
```
-------------
#### 2. SignIn
`POST /api/auth/signin`

**body**
```json
{
	"email":"bagus@gmail.com",
	"password":"123456"
}
```

**response**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkQXQiOiIyMDE4LTExLTA5VDA4OjI2OjM5Ljc4MVoiLCJ1cGRhdGVkQXQiOiIyMDE4LTExLTA5VDA4OjI2OjM5Ljc4MVoiLCJpZCI6NCwiZW1haWwiOiJiYWd1c0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQwZVRRazNOQzNOY3d0RFNSbm5EeVVPRDNHRUU0VUI4NmJtY09UNnNSMjE3b01jQk1EN09TQyIsImNyZWF0ZWRfYXQiOiIyMDE4LTExLTA5VDA4OjI2OjM5Ljc4MVoiLCJ1cGRhdGVkX2F0IjoiMjAxOC0xMS0wOVQwODoyNjozOS43ODFaIiwiaWF0IjoxNTQxNzU0NDc4fQ.66IzoHdO8fd080hm5N-fkQ2CZHovca0ru-h-CTeLh54"
}
```
#### 3. User Profile
`GET /api/user/profile`

**header**
Authorization : Bearer [token]

**response**
```json
{
    "id": 4,
    "email": "bagus@gmail.com",
    "password": "$2b$10$0eTQk3NC3NcwtDSRnnDyUOD3GEE4UB86bmcOT6sR217oMcBMD7OSC",
    "created_at": "2018-11-09T08:26:39.781Z",
    "updated_at": "2018-11-09T08:26:39.781Z"
}
```

------------

> #### Wanna ask me, offer project, or hire me, send me email at anwartubagus@gmail dot com

