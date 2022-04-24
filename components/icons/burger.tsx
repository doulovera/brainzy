import * as React from 'react';
import { SVGProps } from 'react';

const Burger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-menu-2"
    width="1em"
    height="1em"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default Burger;
