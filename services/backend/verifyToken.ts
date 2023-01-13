import { auth } from '@services/backend/admin'

interface Response {
  error: boolean
  message: string
  user?: {
    uid: string
    name: string,
    picture: string,
    iss: string,
    aud: string,
    auth_time: number,
    user_id: string,
    sub: string,
    iat: number,
    exp: number,
    email: string,
    email_verified: boolean,
    firebase: any,
  }
}

export async function verifyToken (cookies: { token?: string }) {
  const { token } = cookies

  const response: Response = {
    error: false,
    message: '',
  }

  if (!token) {
    response.error = true
    response.message = 'No token provided'
    return response
  };

  try {
    const user = await auth.verifyIdToken(token) as Response['user']

    response.user = user
    return response
  } catch (error) {
    response.error = true
    response.message = 'Unauthorized. Not valid Token'
    return response
  }
};
