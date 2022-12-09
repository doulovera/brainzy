import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID,
  storageBucket: `${process.env.NEXT_PUBLIC_GOOGLE_PROJECT_ID}.appspot.com`,
  messagingSenderId: '202865496552',
  appId: '1:229023413701:web:ea9075b7e105918075c7ac',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInAuth = () => auth.signInWithPopup(provider);
export const signOutAuth = () => auth.signOut();

const normalizeGoogleUser = (user: any) => {
  const { displayName, email, photoURL, uid } = user || {};

  if (!email) return null;

  return {
    displayName,
    email,
    photoURL,
    uid,
  };
};

// replace any with type
export const onAuthChanged = (onChange: (user: any) => void) => {
  return auth.onAuthStateChanged((user) => {
    // console.log('user', normalizeGoogleUser(user));
    const normalizedUser = normalizeGoogleUser(user) || null;
    onChange(normalizedUser);
  });
};
