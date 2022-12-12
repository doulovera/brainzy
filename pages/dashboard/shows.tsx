import type { NextPage } from 'next';
import { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import { useQuery } from '@tanstack/react-query';
import { getUserTitles } from 'services/movies';
import SearchMovie from '@components/Movies/SearchMovie';
import useAuth from '@hooks/useAuth';
import MovieList from '@components/Movies/MovieList';
import SkeletonMovieList from '@components/Movies/SkeletonMovieList';

const Shows: NextPage<{ titles: string[] }> = (props) => {
  const { user } = useAuth();
  const { uid } = user || {}; // not show if user is not logged in

  const { data, refetch, isFetched, isFetching, isError } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getUserTitles({ userId: uid }),
    initialData: [],
    enabled: !!uid,
  });

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleAddMovie = async () => {
    await refetch(); // !! instead of refetching, just add the new movie to the list
    setShowModal(false);
  };

  return (
    <DashboardLayout title="Shows">
      <SearchMovie showModal={showModal} setShowModal={setShowModal} onAddMovie={handleAddMovie} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,22rem))] justify-center gap-4 max-w-screen-xl m-auto p-2 pt-5">
        <SkeletonMovieList isFetched={isFetched} isFetching={isFetching} />
        <MovieList
          isFetched={isFetched}
          handleClick={handleClick}
          data={data}
        />
        {isError && <div>Something went wrong</div>}
      </div>
    </DashboardLayout>
  );
};

export default Shows;
