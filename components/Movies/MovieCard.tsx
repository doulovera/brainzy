import Card from '@components/shared/Card';
import Image from 'next/image';
import { CalendarBlank, StarHalf, UsersThree } from 'phosphor-react';

type Props = {
  poster?: string;
  imdbRating?: string;
  released?: string;
  rated?: string;
  runtime?: string;
  isLoading?: boolean;
}

type TruncateProps =
| {
  title: string;
  year: string;
  type: string;
  isLoading?: false;
}
| {
  isLoading: true;
  title?: string;
  year?: string;
  type?: string;
}

const isNA = (value: string | undefined) => value === 'N/A';

const TYPES = {
  movie: '🎬 Movie',
  series: '📺 Series',
};

export default function MovieCard ({ title = '...', poster, year, type, imdbRating, released, rated, runtime, isLoading }: Props & TruncateProps) {
  const cover = poster === 'N/A' ? undefined : poster;

  const footer = [
    TYPES[type as keyof typeof TYPES],
    year,
    runtime,
  ];

  const info = [
    {
      icon: <StarHalf size={18} />,
      label: 'IMDb Rating',
      value: (isNA(imdbRating) || !imdbRating) ? imdbRating : `${imdbRating}/10`,
    },
    {
      icon: <CalendarBlank size={18} />,
      label: 'Released',
      value: released,
    },
    {
      icon: <UsersThree size={18} />,
      label: 'Rated',
      value: rated,
    },
  ];

  return (
    <div className={`h-full ${isLoading ? 'pointer-events-none animate-pulse opacity-80' : ''}`}>
      <Card
        href={isLoading ? '#' : '/dashboard/shows'}
        title={title}
        cover={cover}
        icon={
          cover
            ? (
              <div className="absolute -top-[4.5rem]">
                <Image
                  src={cover}
                  width="64px"
                  height="90px"
                  objectFit="cover"
                  objectPosition="center"
                  alt="Movie or Show Poster"
                  className="rounded-md shadow-lg"
                />
              </div>
              )
            : null
        }
      >
        <div className="flex flex-col min-h-full mt-2">
          <div className="text-sm flex-1">
            <ul className="flex flex-col gap-1">
              {
                info.map((item, index) => (
                  <li key={index} className="flex gap-2">
                    {item.icon}
                    <span>{item.label}:</span>
                    <strong className={isLoading ? 'inline-block h-4 w-20 bg-gray-600 rounded-xl' : ''}>{item?.value}</strong>
                  </li>
                ))
              }
            </ul>
          </div>
          <footer className="flex flex-row gap-2">
            {
              footer.map((item, index) => (
                isNA(item)
                  ? null
                  : (
                    <span key={index} className="py-1 px-2 bg-pink-900 rounded-md capitalize text-xs">
                      {item}
                    </span>
                    )
              ))
            }
          </footer>
        </div>
      </Card>
    </div>
  );
}
