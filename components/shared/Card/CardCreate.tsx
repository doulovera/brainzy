import { Plus } from 'phosphor-react'

type CardCreateProps = {
  title: string;
  onClick: () => void;
}

export default function CardCreate ({ title, onClick }: CardCreateProps) {
  return (
    <button
      className="block w-full h-full bg-gray-700 rounded-lg hover:opacity-80 opacity-60 border-dashed border-2 border-gray-400 transition duration-150"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <Plus size={44} />
        <span className="mt-2 text-md font-medium text-gray-200">
          {title}
        </span>
      </div>
    </button>
  )
}
