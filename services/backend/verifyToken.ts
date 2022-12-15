import { auth } from '@services/backend/admin';

export async function verifyToken (token?: string) {
  const response = {
    error: false,
    message: '',
  };

  if (!token) {
    response.error = true;
    response.message = 'No token provided';
    return response;
  };

  try {
    await auth.verifyIdToken(token);
    return response;
  } catch (error) {
    response.error = true;
    response.message = 'Unauthorized. Not valid Token';
    return response;
  }
};
