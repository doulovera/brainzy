import type { NextPage } from 'next';
import DashboardLayout from '@components/DashboardLayout';
import Button from '@components/shared/button';
import useAuth from '@hooks/useAuth';

const User: NextPage = () => {
  const { user, signOut, signIn } = useAuth();

  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <DashboardLayout title="Profile">
      <div className="w-full mt-10">
        <div className="w-56 mx-auto">
          {
            user?.displayName
              ? (
                <Button onClick={handleSignOut}>
                  Sign out
                </Button>
                )
              : (
                <Button onClick={handleSignIn}>
                  Sign in with Google
                </Button>
                )
          }
        </div>
      </div>
    </DashboardLayout>
  );
};

export default User;
