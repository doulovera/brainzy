import { db } from './admin';

export default async function getUserMovies (
  { userId }: { userId: string },
) {
  return db
    .collection('movies')
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      }
    })
    .catch((error) => {
      console.error('Error getting document: ', error);
    });
}
