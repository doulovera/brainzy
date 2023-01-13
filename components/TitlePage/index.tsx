import { CalendarBlank, FilmSlate, HourglassHigh, Star, UsersThree } from 'phosphor-react'
import PageHeader from './page-header'
import PageTitle from './page-title'
import PageInfo from './page-info'
import Comments from './comments'
import { isNA } from 'utils/is-na'
import Button from '@components/shared/button'

type Props = {
  handleSubmit: (props: any) => void
  poster: string
  title: string
  year: string
  imdbRating: string
  type: string
  released: string
  rated: string
  runtime: string
  comments: string
}

export default function TitlePage ({
  handleSubmit,
  poster,
  title,
  year,
  imdbRating,
  type,
  released,
  rated,
  runtime,
  comments,
}: Props) {
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
  ]

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-lg m-auto p-2 pt-5">
      <article className="relative bg-zinc-800 rounded-lg overflow-hidden">
        <PageHeader poster={poster} />
        <div className="px-3 py-4">
          <PageTitle title={title} year={year} />
          <PageInfo properties={properties} />
          <Comments comments={comments} />
          <div className="mt-4">
            <Button type="submit">
              Save
            </Button>
          </div>
        </div>
      </article>
    </form>
  )
}
