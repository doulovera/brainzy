import React from 'react';
import Loader from './loader';

type Props = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  onClick?: () => void;
}

/*
  add onClick prop
  add outlined prop
  add disable prop
*/

export default function Button (
  { type = 'button', children, isLoading, onClick }: Props,
) {
  return (
    <div>
      <button
        type={type}
        className="h-14 w-full px-3 py-2 text-gray-200 bg-pink-600 hover:bg-pink-700 ring-pink-800 rounded-xl focus:ring-4 focus:outline-none"
        onClick={onClick}
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
