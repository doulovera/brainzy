import Image from 'next/image'

type Props = {
  poster: string
}

export default function PageHeader ({ poster }: Props) {
  return (
    <header>
      <div className="relative w-full h-72 sm:h-80 bg-zinc-500 opacity-40">
        {
          poster && (
            <Image
              src={poster}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Movie or Show Poster"
              className=""
            />
          )
        }
      </div>
      {
        poster && (
          <div className="absolute top-8 left-3 shadow-lg">
            <Image
              src={poster}
              width={170}
              height={250}
              objectFit="cover"
              objectPosition="center"
              alt="Movie or Show Poster"
              className="rounded-lg"
            />
          </div>
        )
      }
    </header>
  )
}
