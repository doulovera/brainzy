import React, { useEffect, useState } from 'react';
import Button from '@components/shared/button';
import Input from '@components/shared/input';
import Modal from '@components/shared/Modal';
import { addTitle, getTitle, searchTitle } from '@services/movies';
import MovieResultCard from './MovieResultCard';
import Select from '@components/shared/select';
import { MagnifyingGlass, SmileySad } from 'phosphor-react';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  onAddMovie: ({ newTitle }: { newTitle: string }) => void;
  userId: string;
}

export default function SearchMovie ({ showModal, setShowModal, onAddMovie, userId }: Props) {
  const [term, setTerm] = useState('');
  const [type, setType] = useState<'movie' | 'series'>('movie');

  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [found, setFound] = useState<boolean | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const data = await searchTitle({ term, type });

      setSearchResults(data.titles.slice(0, 5));
      setFound(data.results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!showModal) {
      setTerm('');
      setSearchResults([]);
    }
  }, [showModal]);

  const handleAddMovie = async (titleId: string) => {
    await addTitle({
      titleId,
      userId,
    });
    const newTitle = await getTitle({ id: titleId });
    onAddMovie({ newTitle: newTitle.title });
  };

  return (
    <Modal title="Add new Movie or Show" open={showModal} handleClose={() => setShowModal(false)}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 my-4">
        <div className="flex gap-2 flex-col sm:flex-row">
          <div className="w-full sm:w-4/5">
            <Input
              name="title"
              type="text"
              placeholder="Enter the title"
              value={term}
              onChange={(event) => setTerm(event.target.value)}
            />
          </div>
          <div className="w-full sm:w-1/5">
            <Select
              name="type"
              value={type}
              onChange={(event) => setType(event.target.value as 'movie' | 'series')}
              options={['movie', 'series']}
            />
          </div>
        </div>
        <div>
          <p className="mb-4 text-gray-400">
            {
              searchResults.length > 0 && `Showing ${searchResults.length} results`
            }
          </p>
          {
            found === false && (
              <p className="flex flex-row items-center justify-center gap-3 text-gray-300 text-center">
                <span>
                  No results found
                </span>
                <SmileySad size={28} />
              </p>
            )
          }
          <div className={`flex flex-col gap-1 max-h-[400px] overflow-y-auto ${isLoading ? 'opacity-30' : ''}`}>
            {
              searchResults.length > 0 && searchResults.map((result) => (
                <MovieResultCard
                  key={result.imdbID}
                  cover={result.Poster}
                  title={result.Title}
                  year={result.Year}
                  imdbID={result.imdbID}
                  onClick={() => handleAddMovie(result.imdbID as string)}
                />
              ))
            }
          </div>
        </div>
        <Button type="submit" isLoading={isLoading}>
          <span className="flex justify-center items-center gap-3">
            <MagnifyingGlass size={18} />
            Search
          </span>
        </Button>
      </form>
    </Modal>
  );
}
