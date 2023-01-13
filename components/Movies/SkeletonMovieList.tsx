import MovieCard from './MovieCard'

type Props = {
  isFetching: boolean;
  isFetched: boolean;
}

export default function SkeletonMovieList ({ isFetching, isFetched }: Props) {
  if (isFetching && !isFetched) {
    return (
      <>
        {
          ['', '', ''].map((_, index) => (
            <div key={index} className="w-full h-[290px]">
              <MovieCard isLoading />
            </div>
          ))
        }
      </>
    )
  };

  return null
}
