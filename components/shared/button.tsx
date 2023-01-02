import React from 'react';
import Loader from './loader';

type Props = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
  outlined?: boolean;
  disabled?: boolean;
}

export default function Button (
  { type = 'button', children, isLoading, onClick, outlined, disabled }: Props,
) {
  return (
    <div>
      <button
        type={type}
        className={`flex justify-center items-center min-h-[3.5rem] h-14 w-full px-3 py-2 text-gray-200 border-2 ${outlined ? 'border-pink-600' : 'bg-pink-600 border-transparent'} hover:bg-pink-700 ring-pink-800 rounded-xl focus:ring-4 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-pink-600`}
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        {
          isLoading
            ? <Loader className='w-full h-auto' iconSize={26} />
            : children
        }
      </button>
    </div>
  );
}
