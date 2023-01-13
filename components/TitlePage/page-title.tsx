import { Trash } from 'phosphor-react'
import Button from '@components/shared/button'
import Dropdown from '@components/shared/dropdown'

type Props = {
  handleDelete: () => void
  title: string
  year: string
}

export default function PageTitle ({ handleDelete, title, year }: Props) {
  const buttons = [
    // {
    //   label: 'Save to Notion',
    // },
    // {
    //   label: 'divider',
    //   divider: true,
    // },
    {
      label: 'Delete',
      color: 'danger',
      handleClick: handleDelete,
    },
  ]

  return (
    <section className="flex flex-row items-start justify-between gap-4 sm:gap-0">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
        {title} ({year})
      </h2>
      <div className="block md:hidden">
        <Dropdown properties={buttons} />
      </div>
      <div className="hidden md:flex justify-end w-2/5 gap-3">
        {
          buttons.map(({ label, handleClick }) => {
            if (label === 'divider') return <></>

            return (
              <div className="aspect-square w-14" key={label}>
                <Button outlined onClick={handleClick}>
                  {
                    label === 'Delete'
                      ? (
                        <Trash size={24} />
                        )
                      : label
                  }
                </Button>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}
