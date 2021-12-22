import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const User: NextPage = () => {
  const router = useRouter();
  const { user } = router.query;

  return (
    <div>
      Welcome, {user}
    </div>
  )
}

export default User