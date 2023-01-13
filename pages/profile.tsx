import type { NextPage } from 'next'
import DashboardLayout from '@components/DashboardLayout'
import Button from '@components/shared/button'
import useAuth from '@hooks/useAuth'
import { GoogleLogo, SignOut } from 'phosphor-react'

const User: NextPage = () => {
  const { user, signOut, signIn } = useAuth()

  const handleSignIn = () => signIn()
  const handleSignOut = () => signOut()

  return (
    <DashboardLayout title="Profile">
      <div className="w-full mt-10">
        <div className="w-56 mx-auto">
          {
            user?.displayName
              ? (
                <Button onClick={handleSignOut}>
                  <span className="flex gap-2 items-center justify-center">
                    <SignOut size={20} /> Logout
                  </span>
                </Button>
                )
              : (
                <Button onClick={handleSignIn}>
                  <span className="flex gap-2 items-center justify-center">
                    <GoogleLogo size={20} weight="bold" /> Sign in with Google
                  </span>
                </Button>
                )
          }
        </div>
      </div>
    </DashboardLayout>
  )
}

export default User
