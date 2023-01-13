import { ForwardRefExoticComponent, RefAttributes, useState } from 'react'
import { DotsThreeVertical, IconProps } from 'phosphor-react'

const colorDictionary = {
  danger: 'text-red-500',
  success: 'text-green-500',
  default: 'text-white',
}

const getColor = (color = 'default') => {
  if (Object.keys(colorDictionary).includes(color)) {
    return colorDictionary[color as keyof typeof colorDictionary]
  }

  return colorDictionary.default
}

type Property = {
  label: string
  color?: string
  divider?: boolean
  handleClick?: () => void
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export default function Dropdown ({ properties }: { properties: Property[] }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center w-10 aspect-square rounded-md border-2 border-gray-600 focus:outline-none focus:ring-2  focus:ring-offset-gray-800 focus:ring-white"
      >
        <DotsThreeVertical size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg text-white bg-zinc-900 border-2 border-gray-600 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {properties.map((property) => {
              const { label, color, divider, handleClick, icon: Icon } = property

              if (divider) {
                return (
                  <div key={label} className="border-t border-gray-700" />
                )
              }

              return (
                <button
                  key={label}
                  type="button"
                  className={`block w-full text-left px-4 py-2 text-sm ${getColor(color)} hover:bg-zinc-800`}
                  role="menuitem"
                  onClick={handleClick}
                >
                  {Icon && <Icon size={24} className="mr-2" />}
                  {property.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
