import { Trash } from 'phosphor-react'
import Button from '@components/shared/button'

type Props = {
  handleDelete: () => void
  title: string
  year: string
}

export default function PageTitle ({ handleDelete, title, year }: Props) {
  return (
    <section className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-0"> {/* maybe hide options in three dots when mobile */}
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
          <Button outlined onClick={handleDelete}>
            <Trash size={24} />
          </Button>
        </div>
      </div>
    </section>
  )
}
