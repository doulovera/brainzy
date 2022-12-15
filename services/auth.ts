import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'utils/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInAuth = () => auth.signInWithPopup(provider);
export const signOutAuth = () => auth.signOut();

const normalizeGoogleUser = async (user: any) => {
  const { displayName, email, photoURL, uid } = user || {};

  if (!email) return null;

  const jwt = await user.getIdToken();

  return {
    displayName,
    email,
    photoURL,
    userId: uid,
    jwt,
  };
};

// replace any with type
export const onAuthChanged = (onChange: (user: any) => void) => {
  return auth.onAuthStateChanged(async (user) => {
    const normalizedUser = await normalizeGoogleUser(user) || null;
    onChange(normalizedUser);
  });
};
