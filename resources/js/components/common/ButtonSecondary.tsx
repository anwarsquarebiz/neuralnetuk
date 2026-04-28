import { Link } from '@inertiajs/react';
import React from 'react';

interface ButtonSecondaryProps {
    title: string;
    icon?: React.ElementType;
    onClick?: () => void;
    className?: string;
    bgWhite?: boolean;
    href?: string;
    download?: boolean | string;
}

const ButtonSecondary = ({ title, icon: Icon, className = '', onClick, bgWhite = true, href, download }: ButtonSecondaryProps) => {
    const commonClasses = `group pointer-events-auto flex h-auto min-h-[40px] w-fit cursor-pointer items-center justify-center rounded-full border transition-all duration-300 md:h-11 ${
        bgWhite
            ? 'border-[#000027]/10 bg-white text-[#000027] hover:border-[#000027]'
            : 'border-white/20 bg-transparent text-white hover:border-white'
    } px-7 py-3 md:px-2 md:py-2 lg:py-1.5 ${className}`;

    const innerContent = (
        <div className="flex h-fit w-fit items-center justify-center gap-0 text-xs leading-normal md:gap-4 md:leading-none">
            <h4 className="text-center tracking-widest uppercase md:ml-4">{title}</h4>
            {Icon && (
                <div
                    className={`icon hidden md:flex ${
                        bgWhite ? 'bg-[#000027]' : 'bg-white'
                    } items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 md:p-1.5`}
                >
                    <Icon
                        className={`size-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 md:size-4 ${
                            bgWhite ? 'text-white' : 'text-[#000027]'
                        }`}
                    />
                </div>
            )}
        </div>
    );

    if (href) {
        if (href.startsWith('#') || download) {
            return (
                <a
                    href={href}
                    className={commonClasses}
                    download={download}
                    onClick={(e) => {
                        if (onClick) onClick();
                        if (href.startsWith('#')) {
                            const target = document.querySelector(href);
                            if (target) {
                                e.preventDefault();
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }
                    }}
                >
                    {innerContent}
                </a>
            );
        }

        return (
            <Link href={href} className={commonClasses}>
                {innerContent}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={commonClasses}>
            {innerContent}
        </button>
    );
};

export default ButtonSecondary;
