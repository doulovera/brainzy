import { Book, Game, Home, Television, User } from '@components/icons';
import { AsideStyled } from './sidebar.style';
import Item from '@components/Sidebar/Item';

const DASHBOARD_ROUTE = '/dashboard';

const Items = [
  {
    href: `${DASHBOARD_ROUTE}/home`,
    icon: <Home />,
  },
  {
    href: `${DASHBOARD_ROUTE}/books`,
    icon: <Book />,
  },
  {
    href: `${DASHBOARD_ROUTE}/shows`,
    icon: <Television />,
  },
  {
    href: `${DASHBOARD_ROUTE}/games`,
    icon: <Game />,
  },
  {
    href: '/profile',
    icon: <User />,
  },
];

export default function Sidebar () {
  return (
    <AsideStyled>
      {Items.map(({ href, icon }, index) => (
        <Item key={index} href={href}>
          {icon}
        </Item>
      ))}
    </AsideStyled>
  );
}
