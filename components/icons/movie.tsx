import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-movie"
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
    <rect x={4} y={4} width={16} height={16} rx={2} />
    <path d="M8 4v16M16 4v16M4 8h4M4 16h4M4 12h16M16 8h4M16 16h4" />
  </svg>
)

export default SvgComponent
