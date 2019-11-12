import * as functions from 'firebase-functions'
// const asyncMiddleware = require('./helper/public.function')
// const Character = require('./models').Character
// const Sequelize = require('sequelize')
require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const cors = require('cors');
const usersRoutes = require('./routes/users.route')


// mount all routes on / path


// require('babel-core/register')
// const COLLECTION_NAME = 'DEMO DATABASE'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cookieParser())
app.use(cors({origin: true}))
app.options('*', cors())
app.use('/users', usersRoutes)

// Add middleware to authenticate requests

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!")
// })

// export const helloOther = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!")
//  })

// export const createMoney = functions.https.onRequest((request, response) => {
//   return firestore.collection(COLLECTION_NAME)
//     .add({ content: 'test', money: '1000000' })
//     .then((doc: any) => {
//       return response.status(200).send(doc)
//     }).catch((err: any) => {
//       console.error(err)
//       return response.status(404).send({ error: 'unable to store', err })
//     })
// })


// export const listTodos = functions.https.onRequest((request, response) => {
//   return firestore.collection('Users').doc('134').collection('todos').get()
//   .then((snapshot: any) => {
//     const todos: any = []
//     snapshot.forEach((doc: any) => {
//       todos.push({id: doc.id, ...doc.data()})
//     })
//     response.send(todos)
//   })
//   .catch((err: any) => {
//     response.send(err)
//   })
// })


// build multiple CRUD interfaces:
// app.get('/:id', (req: any, res: any) => res.send(req.params.id))


// Expose Express API as a single Cloud Function:
exports.app = functions.https.onRequest(app)
   