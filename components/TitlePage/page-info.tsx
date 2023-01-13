import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { IconProps } from 'phosphor-react';
import { InfoCard } from '@components/shared/info-card';

type Props = {
  properties: {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
    label: string
    value: string | number | undefined
  }[]
}

export default function PageInfo ({ properties }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4 pt-6 border-t-2 border-gray-600">
      {
        properties.map((property, index) => (
          <InfoCard
            key={index}
            icon={property.icon}
            title={property.label}
            value={property.value}
            color="bg-pink-500"
          />
        ))
      }
    </section>
  );
}
