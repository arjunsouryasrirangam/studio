import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="40"
        height="40"
        {...props}
    >
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.8 }} />
            </linearGradient>
        </defs>
        <g 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            {/* 'A' shape */}
            <path d="M 20 80 L 50 20 L 80 80" />
            <path d="M 35 60 L 65 60" />
            {/* 'S' shape merged */}
            <path d="M 85 25 C 70 25, 70 45, 50 45 C 30 45, 30 65, 15 65" />
        </g>
    </svg>
);

export default Logo;
