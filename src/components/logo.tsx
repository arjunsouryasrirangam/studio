import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 32"
    width="100"
    height="32"
    {...props}
    className={`font-headline ${props.className || ''}`}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <g className="fill-[url(#grad1)]">
      <text x="0" y="24" fontSize="28" fontWeight="bold">
        E
      </text>
      <text x="45" y="24" fontSize="28" fontWeight="bold">
        A
      </text>
    </g>
    <path
      d="M28 10C28 6.68629 30.6863 4 34 4C37.3137 4 40 6.68629 40 10V18C40 21.3137 37.3137 24 34 24C30.6863 24 28 21.3137 28 18V10Z"
      className="stroke-primary"
      strokeWidth="2"
      fill="none"
    />
    <path d="M34 24V28" className="stroke-primary" strokeWidth="2" />
    <path d="M30 28H38" className="stroke-primary" strokeWidth="2" />
  </svg>
);

export default Logo;
