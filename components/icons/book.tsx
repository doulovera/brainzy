import { SVGProps } from 'react';

const Book = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="icon icon-tabler icon-tabler-book"
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
    <path d="M3 19a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0 9 9 0 0 1 9 0M3 6v13M12 6v13M21 6v13" />
  </svg>
);

export default Book;
