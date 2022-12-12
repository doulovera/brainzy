import Image from 'next/image';

type Props = {
  cover: string;
  title: string;
  year: string;
  imdbID: string;
  onClick: () => void;
}

export default function MovieResultCard (
  { cover, title, year, onClick }: Props,
) {
  return (
    <button
      type="button"
      className="flex justify-start gap-2 w-full py-2 hover:bg-primary-50 rounded-xl"
      onClick={onClick}
    >
      <div className="min-w-[25%] w-1/4 h-24 flex items-center justify-center">
        {
          cover !== 'N/A'
            ? (
                <Image
                  src={cover}
                  alt={title}
                  width={64}
                  height={90}
                  className="rounded-lg"
                  objectFit="cover"
                />
              )
            : (
                <div className="w-16 h-24 bg-gray-200 opacity-10 rounded-lg" />
              )
        }
      </div>
      <div className="text-left">
        <h4 className="font-bold text-lg mb-2">{title}</h4>
        <span className="py-1 px-2 bg-pink-900 rounded-md capitalize text-xs">
          {year}
        </span>
      </div>
    </button>
  );
}
