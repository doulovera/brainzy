import CardCreate from '@components/shared/Card/CardCreate';
import MovieCard from './MovieCard';

type Props = {
  isFetched: boolean;
  handleClick: () => void;
  data: any;
}

export default function MovieList ({ isFetched, handleClick, data }: Props) {
  if (isFetched) {
    return (
    <>
      <div className="w-full h-[290px]">
        <CardCreate title="Add new Movie or Show" onClick={handleClick} />
      </div>
      {
        data.movies?.map((movie, index) => {
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
    </>
    );
  }

  return null;
}
