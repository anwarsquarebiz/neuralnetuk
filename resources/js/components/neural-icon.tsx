import { SVGAttributes } from 'react';

export default function NeuralIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v7" />
            <path d="M12 15v7" />
            <path d="M22 12h-7" />
            <path d="M9 12H2" />
            <path d="m19.07 4.93-4.95 4.95" />
            <path d="m9.88 14.12-4.95 4.95" />
            <path d="m19.07 19.07-4.95-4.95" />
            <path d="m9.88 9.88-4.95-4.95" />
        </svg>
    );
}
