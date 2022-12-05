import Card from '@components/shared/Card';
import Image from 'next/image';
import { CalendarBlank, StarHalf, UsersThree } from 'phosphor-react';

type Props = {
  title: string;
  poster: string | undefined;
  year: string;
  type: string;
  imdbRating?: string;
  released?: string;
  rated?: string;
  runtime?: string;
}

const isNA = (value: string | undefined) => value === 'N/A';

export default function MovieCard ({ title, poster, year, type, imdbRating, released, rated, runtime }: Props) {
  const cover = poster === 'N/A' ? undefined : poster;

  const footer = [year, type, runtime];

  const info = [
    {
      icon: <StarHalf size={18} />,
      label: 'IMDb Rating',
      value: `${imdbRating}/10`,
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
    <div className="h-full">
      <Card
        href="/dashboard/shows"
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
                    <strong>{item.value}</strong>
                  </li>
                ))
              }
            </ul>
          </div>
          <footer className="flex flex-row gap-1">
            {
              footer.map((item, index) => (
                isNA(item)
                  ? null
                  : (
                    <span key={index} className="py-1 px-2 bg-zinc-700 rounded-md capitalize text-xs">
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
