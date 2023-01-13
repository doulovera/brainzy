import { db } from '../admin'
import { FieldValue } from 'firebase-admin/firestore'

export default async function addMovie (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  const movieItem = {
    id,
    comment,
  }

  return db
    .collection('movies')
    .doc(userId)
    .set(
      {
        movies: FieldValue.arrayUnion(movieItem),
      },
      { merge: true },
    )
    .then(() => {
      console.log('Document written')
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })
}
