import type { NextPage } from 'next';
import { useState } from 'react';
import DashboardLayout from '@components/DashboardLayout';
import CardCreate from '@components/shared/Card/CardCreate';
import MovieCard from '@components/Movies/MovieCard';
import { useQuery } from '@tanstack/react-query';
import { getManyTitles } from 'services/movies';
import SearchMovie from '@components/Movies/SearchMovie';

const TERMS = [
  'The Batman', 'Paw Patrol: the movie', 'Avengers: Age of ultron', 'Teen Titans Go! to the Movies', 'Argentina, 1985',
];

const Shows: NextPage<{ titles: string[] }> = (props) => {
  const { data } = useQuery({
    queryKey: ['titles'],
    queryFn: () => getManyTitles({ terms: TERMS }),
    initialData: props.titles,
  });

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <DashboardLayout title="Shows">
      <SearchMovie showModal={showModal} setShowModal={setShowModal} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,22rem))] justify-center gap-4 max-w-screen-xl m-auto p-2 pt-5">
        <div className="w-full h-[290px]">
          <CardCreate title="Add new Movie or Show" onClick={handleClick} />
        </div>
        {
          data.map((movie, index) => {
            const { Poster, Released, Title, Year, Type, Rated, imdbRating, Runtime } = movie || {};

            return (
              <div className="h-[290px]" key={index}>
                <MovieCard
                  title={Title}
                  poster={Poster}
                  year={Year}
                  type={Type}
                  imdbRating={imdbRating}
                  released={Released}
                  rated={Rated}
                  runtime={Runtime}
                />
              </div>
            );
          })
        }
      </div>
      {/* add something on the right on large screens */}
    </DashboardLayout>
  );
};

export async function getServerSideProps () {
  const titles = await getManyTitles({ terms: TERMS });

  return {
    props: {
      titles,
    },
  };
}

export default Shows;
