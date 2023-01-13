import { db } from '../admin'
import { FieldValue } from 'firebase-admin/firestore'

export default async function editTitle (
  { id, comment, userId }: { id: string, comment?: string, userId: string },
) {
  const movieItem = {
    id,
    comment,
  }

  const movieRef = db.collection('movies').doc(userId)

  // first, remove the existing record
  await movieRef
    .update({
      movies: FieldValue.arrayRemove(movieItem),
    })
    .then(() => {
      console.log('Document written')
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })

  // add the record as new
  await movieRef
    .update({
      movies: FieldValue.arrayUnion(movieItem),
    })
    .then(() => {
      console.log('Document written')
    })
    .catch((error) => {
      console.error('Error adding document: ', error)
    })

  return movieRef.get()
}
