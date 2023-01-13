import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { firebaseConfig } from 'utils/firebaseConfig'

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInAuth = async () => auth.signInWithPopup(provider)
export const signOutAuth = () => auth.signOut()

const normalizeGoogleUser = async (user: any) => {
  const { displayName, email, photoURL, uid } = user || {}

  if (!email) return null

  const jwt = await user.getIdToken()

  return {
    displayName,
    email,
    photoURL,
    userId: uid,
    jwt,
  }
}

// replace any with type
export const onAuthChanged = (onChange: (user: any) => void) => {
  return auth.onAuthStateChanged(async (user) => {
    const normalizedUser = await normalizeGoogleUser(user) || null
    onChange(normalizedUser)
  })
}

export const onTokenChanged = (onChange: (user: any) => void) => {
  return auth.onIdTokenChanged(async (user) => {
    const newToken = await user?.getIdToken()
    onChange(newToken)
  })
}

export const generateToken = async () => {
  const user = auth.currentUser
  if (!user) return null
  return await user.getIdToken()
}
