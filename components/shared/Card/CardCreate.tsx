import { Plus } from 'phosphor-react';

type CardCreateProps = {
  onClick: () => void;
  title: string;
}

export default function CardCreate ({ onClick, title }: CardCreateProps) {
  return (
    <button
      className="block w-full h-full bg-gray-700 rounded-lg hover:opacity-80 opacity-60 border-dashed border-2 border-gray-400"
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-2 h-full">
        <Plus size={44} />
        <span className="mt-2 text-md font-medium text-gray-200">
          {title}
        </span>
      </div>
    </button>
  );
}
