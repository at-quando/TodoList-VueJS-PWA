// import { Users } from "../models/Users"
const Firestore = require('@google-cloud/firestore')
const PROJECTID = 'todo-list-pwa-6f02f'

const firestore = new Firestore({
  projectId: PROJECTID,
  timestampsInSnapshots: true
})

const COLLECTION_USERS = 'Users';
const COLLECTION_TODOS = 'Todos';

function convertRecord(doc: any, type = 'single') {
    if(type === 'single') {
      return !doc.exists ? {} : doc.data();
    }
    else {
      const sum: any = [];
      doc.forEach((snap: any) => {
        sum.push({
          id: snap.id,
          ...snap.data()
        });
      });
      return sum;
    }
}

module.exports = {
  authorize: (req: any, res: any, next: any) => {
    return firestore.collection(COLLECTION_USERS)
      .where('access_token', '==', req.headers['access-token'] )
      .get()
      .then((doc: any) => {
        const currentUser = convertRecord(doc, 'multiple')[0];
        if(currentUser) {
          res.locals.header = currentUser;
          next();
        } else {
          return res.status(401).send('Unauthorized');
        }
      }).catch((err: any) => {
        return res.status(404).send({ error: 'unable to store', err });
      });
  },
  showMe: (req: any, res: any) => {
    return firestore.collection(COLLECTION_USERS).doc(res.locals.header.id).get()
      .then((doc: any) => {
        return res.status(200).send(convertRecord(doc));
      }).catch((err: any) => {
        return res.status(404).send({ error: 'unable to store', err });
      });
  },
  register: (req: any, res: any) => {
    return firestore.collection(COLLECTION_USERS).doc(req.params.id).set(req.body).then((doc: any) => {
      return res.status(200).send(doc);
    }).catch((err: any) => {
      return res.status(404).send({ error: 'unable to store', err });
    });
  },
  listTodos: (req: any, res: any) => {
    let ref = firestore
      .collection(COLLECTION_USERS).doc(res.locals.header.id)
      .collection(COLLECTION_TODOS);
    if (req.query.key && req.query.compared && req.query.value) {
      ref = ref.where(req.query.key, req.query.compared, req.query.value)
    }
    ref.get()
      .then((snapshot: any) => {
        return res.send(convertRecord(snapshot, 'multiple'))
    }).catch((err: any) => {
      return res.status(404).send({ error: 'unable to store', err });
    });
  },
  createTodo: (req: any, res: any) => {
    firestore
      .collection(COLLECTION_USERS).doc(res.locals.header.id)
      .collection(COLLECTION_TODOS)
      .add(req.body)
      .then((doc: any) => {
        return res.status(200).send(doc.id)
    }).catch((err: any) => {
      return res.status(404).send({ error: 'unable to store', err })
    })
  },
  editTodo: (req: any, res: any) => {
    firestore
      .collection(COLLECTION_USERS).doc(res.locals.header.id)
      .collection(COLLECTION_TODOS).doc(req.params.todoId)
      .update(req.body)
      .then((doc: any) => {
        return res.status(200).send(doc.id)
    }).catch((err: any) => {
      return res.status(404).send({ error: 'unable to store', err })
    })
  },
  deleteTodo: (req: any, res: any) => {
    firestore
      .collection(COLLECTION_USERS).doc(res.locals.header.id)
      .collection(COLLECTION_TODOS).doc(req.params.todoId)
      .delete()
      .then((doc: any) => {
        return res.status(200).send(doc.id)
    }).catch((err: any) => {
      return res.status(404).send({ error: 'unable to store', err })
    })
  },
}
