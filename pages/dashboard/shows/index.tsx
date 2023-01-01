import type { NextPage } from 'next';
import { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import { getUserTitles } from '@services/movies';
import SearchMovie from '@components/Movies/SearchMovie';
import useAuth from '@hooks/useAuth';
import MovieList from '@components/Movies/MovieList';
import SkeletonMovieList from '@components/Movies/SkeletonMovieList';

const Shows: NextPage<{ titles: string[] }> = (props) => {
  const { user } = useAuth();
  const { userId } = user || {}; // not show if user is not logged in

  const { data, isFetched, isFetching, isError } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getUserTitles({ userId }),
    initialData: [],
    enabled: !!userId,
  });

  const [showModal, setShowModal] = useState(false);

  const [addedMovies, setAddedMovies] = useState<any[] | null>(null);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleAddMovie = async ({ newTitle }: { newTitle: any }) => {
    setAddedMovies((prev) => [...(prev || []), newTitle]);
    setShowModal(false);
  };

  return (
    <DashboardLayout title="Shows">
      <SearchMovie
        showModal={showModal}
        setShowModal={setShowModal}
        onAddMovie={handleAddMovie}
        userId={userId}
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,22rem))] justify-center gap-4 max-w-screen-xl m-auto p-2 pt-5">
        <SkeletonMovieList isFetched={isFetched} isFetching={isFetching} />
        <MovieList
          isFetched={isFetched && !isError}
          handleClick={handleClick}
          list={[...(data.movies || []), ...(addedMovies || [])]}
        />
        {isError && <div>Something went wrong</div>}
      </div>
    </DashboardLayout>
  );
};

export default Shows;
