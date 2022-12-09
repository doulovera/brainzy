import useAuth from '@hooks/useAuth';
import { useRouter } from 'next/router';
import Button from '../button';
import { HeaderStyled } from './header.style';

export default function Header () {
  const router = useRouter();
  const { user } = useAuth();

  console.log({ user });

  return (
    <HeaderStyled>
      <h1>🧠 Brainzy</h1>
      {
        user?.displayName
          ? (
            <p>{user?.displayName}</p>
            )
          : (
            <Button onClick={() => router.push('/profile')}>
              Sign in
            </Button>
            )
      }
    </HeaderStyled>
  );
}
