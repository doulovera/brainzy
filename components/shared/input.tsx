import React from 'react'

type Props = {
  label?: string;
  type?:'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/*
  add disable prop
  add error prop
  add icon prop
*/

export default function Input (
  { label, type = 'text', placeholder, name, value, onChange }: Props,
) {
  return (
    <div>
      {
        label && (
          <label htmlFor={name}>
            {label}
          </label>
        )
      }
      <input
        id={name}
        type={type}
        className="h-14 w-full px-3 py-2 text-gray-200 bg-primary-50 border-2 border-zinc-500 rounded-xl"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
