import { AsideStyled } from './sidebar.style';
import Item from '@components/shared/Sidebar/Item';
import {
  // BookOpen,
  // GameController,
  House,
  TelevisionSimple,
  User,
} from 'phosphor-react';

const DASHBOARD_ROUTE = '/dashboard';

const Items = [
  {
    href: `${DASHBOARD_ROUTE}/home`,
    icon: House,
  },
  // {
  //   href: `${DASHBOARD_ROUTE}/books`,
  //   icon: BookOpen,
  // },
  {
    href: `${DASHBOARD_ROUTE}/shows`,
    icon: TelevisionSimple,
  },
  // {
  //   href: `${DASHBOARD_ROUTE}/games`,
  //   icon: GameController,
  // },
  {
    href: '/profile',
    icon: User,
  },
];

export default function Sidebar () {
  return (
    <AsideStyled>
      {Items.map(({ href, icon: Icon }, index) => (
        <Item key={index} href={href}>
          <Icon size={24} />
        </Item>
      ))}
    </AsideStyled>
  );
}
