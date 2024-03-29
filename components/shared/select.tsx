import React from 'react'

type Props = {
  name: string;
  label?: string;
  options: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select ({ name, label, options, value, onChange }: Props) {
  return (
    <>
      {
        label && (
          <label htmlFor={name}>
            {label}
          </label>
        )
      }
      <select
        id={name}
        className="h-14 w-full px-3 py-2 text-gray-200 bg-primary-50 border-2 border-zinc-500 rounded-xl cursor-pointer capitalize"
        onChange={onChange}
        value={value}
      >
        {
          options.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))
        }
      </select>
    </>
  )
}
