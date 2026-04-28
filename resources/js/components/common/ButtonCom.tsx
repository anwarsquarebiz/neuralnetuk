import { Link } from '@inertiajs/react';
import React from 'react';

interface ButtonComProps {
    title: string;
    icon?: React.ElementType;
    className?: string;
    onClick?: () => void;
    bgWhite?: boolean;
    type?: 'button' | 'submit' | 'reset';
    href?: string;
}

const ButtonCom = ({ title, icon: Icon, className = '', onClick, bgWhite = false, type = 'button', href }: ButtonComProps) => {
    const commonClasses = `group button-v1 pointer-events-auto flex h-auto min-h-[40px] w-fit cursor-pointer items-center justify-center rounded-full md:h-11 ${
        bgWhite ? 'bg-white text-[#000027]' : 'bg-[#000027] text-white'
    } px-7 py-3 transition-all duration-300 md:px-2 md:py-2 lg:py-1.5 ${className}`;

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
                        className={`size-8 origin-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 md:size-4 ${
                            bgWhite ? 'text-white' : 'text-[#000027]'
                        }`}
                    />
                </div>
            )}
        </div>
    );

    if (href) {
        if (href.startsWith('#')) {
            return (
                <a
                    href={href}
                    className={commonClasses}
                    onClick={(e) => {
                        if (onClick) onClick();
                        const target = document.querySelector(href);
                        if (target) {
                            e.preventDefault();
                            target.scrollIntoView({ behavior: 'smooth' });
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
        <button type={type} onClick={onClick} className={commonClasses}>
            {innerContent}
        </button>
    );
};

export default ButtonCom;
