type Props = {
  label?: string;
  type?:'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  name: string;
}

/*
  add disable prop
  add error prop
  add onChange/value prop
  add icon prop
*/

export default function Input (
  { label, type = 'text', placeholder, name }: Props,
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
      />
    </div>
  );
}
