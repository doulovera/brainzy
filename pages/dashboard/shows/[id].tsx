import type { NextPage } from 'next';
import DashboardLayout from '@components/DashboardLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { InfoCard } from '@components/shared/info-card';
import { CalendarBlank, FilmSlate, HourglassHigh, Star, Trash, UsersThree } from 'phosphor-react';
import Button from '@components/shared/button';
import { editTitle } from '@services/movies';
import React from 'react';
import useAuth from '@hooks/useAuth';

const Title: NextPage = () => {
  const { user } = useAuth();
  const { userId } = user || {}; // not show if user is not logged in

  const router = useRouter();
  const {
    id: titleId,
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const comment = (event.target as HTMLFormElement).comment.value;

    await editTitle({
      titleId: titleId as string,
      comment,
      userId,
    });
  };

  return (
    <DashboardLayout title="Title">
      <form onSubmit={handleSubmit} className="max-w-screen-lg m-auto p-2 pt-5">
        <article className="relative bg-zinc-800 rounded-lg overflow-hidden">
          <div className="relative w-full h-60 sm:h-80 opacity-40">
            <Image
              src={(poster as string) || '/web3.jpg'}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Movie or Show Poster"
              className=""
            />
          </div>
          <div className="absolute top-8 left-3 shadow-lg">
              <Image
                src={(poster as string) || '/web3.jpg'}
                width={170}
                height={250}
                objectFit="cover"
                objectPosition="center"
                alt="Movie or Show Poster"
                className="rounded-lg"
              />
            </div>
          <div className="px-3 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0"> {/* maybe hide options in three dots when mobile */}
              <h2 className="text-5xl font-bold">
                {title} ({year})
              </h2>
              <div className="flex w-full sm:w-2/5 gap-3">
                <div className="flex-1">
                  <Button disabled>
                    Save to Notion
                  </Button>
                </div>
                <div className="aspect-square w-14">
                  <Button outlined>
                    <Trash size={24} />
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
                    color="bg-pink-500"
                  />
                ))
              }
            </div>
            <div className="mt-6">
              <label htmlFor="comment" className="block mb-2 text-md font-medium text-white">Your comments about the Movie/Show</label>
              <textarea
                id="comment"
                rows={10}
                className="block p-2.5 w-full text-sm rounded-lg border bg-zinc-900 border-gray-600 placeholder-gray-400 text-white focus:outline-none"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="mt-4">
              <Button type="submit">
                Save
              </Button>
            </div>
          </div>
        </article>
      </form>
    </DashboardLayout>
  );
};

export default Title;
