import db from '../db';
import { FieldValue } from 'firebase-admin/firestore';

export default async function addMovie (
  { id, userId }: { id: string, userId: string },
) {
  return db
    .collection('movies')
    .doc(userId)
    .set(
      {
        movies: FieldValue.arrayUnion(id),
      },
      { merge: true },
    )
    .then(() => {
      console.log('Document written');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}
