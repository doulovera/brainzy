import { useRouter } from 'next/router'
import Image from 'next/image'
import useAuth from '@hooks/useAuth'
import Button from '@components/shared/button'
import Link from 'next/link'

export default function Profile () {
  const router = useRouter()
  const { user } = useAuth()

  if (!user || !user?.displayName) {
    return (
    <div>
      <Button
        onClick={() => router.push('/profile')}
      >
        Login
      </Button>
    </div>
    )
  };

  return (
    <Link href="/profile">
      <a className="block">
        <Image
          src={user?.photoURL}
          width={34}
          height={34}
          className="rounded-full"
          alt={user?.displayName}
        />
      </a>
    </Link>
  )
}
