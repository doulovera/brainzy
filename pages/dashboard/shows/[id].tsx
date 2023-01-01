import type { NextPage } from 'next';
import DashboardLayout from '@components/DashboardLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { InfoCard } from '@components/shared/info-card';
import { CalendarBlank, FilmSlate, HourglassHigh, Star, UsersThree } from 'phosphor-react';
import Button from '@components/shared/button';

const Title: NextPage = () => {
  // get the queries from the url
  const router = useRouter();
  const {
    title,
    poster,
    year,
    type,
    imdbRating,
    released,
    rated,
    runtime,
  } = router.query;

  const isNA = (value: string | string[] | undefined) => value === 'N/A';

  const properties = [
    {
      icon: Star,
      label: 'IMDb Rating',
      value: (isNA(imdbRating) || !imdbRating) ? imdbRating : `${imdbRating}/10`,
    },
    {
      icon: CalendarBlank,
      label: 'Released',
      value: released,
    },
    {
      icon: UsersThree,
      label: 'Rated',
      value: rated,
    },
    {
      icon: HourglassHigh,
      label: 'Runtime',
      value: runtime,
    },
    {
      icon: FilmSlate,
      label: 'Type',
      value: type,
    },
  ];

  return (
    <DashboardLayout title="Title">
      <div className="max-w-screen-lg m-auto p-2 pt-5">
        <article className="bg-zinc-800 rounded-lg overflow-hidden">
          <div className="relative w-full h-60 sm:h-80 opacity-70">
            <Image
              src={(poster as string) || '/web3.jpg'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Movie or Show Poster"
              className=""
            />
          </div>
          <div className="px-3 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0"> {/* maybe hide options in three dots when mobile */}
              <h2 className="text-2xl font-bold">
                {title} ({year})
              </h2>
              <div className="flex w-full sm:w-2/5 gap-4">
                <div className="flex-1">
                  <Button>
                    Sync to Notion
                  </Button>
                </div>
                <div>
                  <Button outlined>
                    Remove
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-6 border-t-2 border-gray-600">
              {
                properties.map((property, index) => (
                  <InfoCard
                    key={index}
                    icon={property.icon}
                    title={property.label}
                    value={property.value}
                    color="bg-pink-600"
                  />
                ))
              }
            </div>
          </div>
        </article>
      </div>
    </DashboardLayout>
  );
};

export default Title;
