import React, { useEffect } from 'react';
import { X } from 'phosphor-react';

type Props = {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  title: string;
}

export default function Modal ({ children, open, handleClose, title }: Props) {
  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999999999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-zinc-800 min-w-[280px] w-5/6 max-w-[660px] min-h-[220px] p-4 rounded-xl">
        <div className="flex justify-between border-b-2 border-zinc-500 pb-4 mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={handleClose}>
            <X size={28} />
          </button>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
