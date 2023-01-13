import firebase from 'firebase-admin'
import { db } from '../../admin'

export const MovieModel = (userId: string): firebase.firestore.CollectionReference => db
  .collection('users')
  .doc(userId)
  .collection('movies')
