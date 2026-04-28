import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(SplitText);

interface SplitTextSentenseProps {
    text: string;
    isOverflow?: boolean;
    textclass?: string;
    animation?: 'in' | 'out';
    isStart?: boolean;
    type?: 'lines' | 'words' | 'chars';
}

const SplitTextSentense = ({
    text,
    isOverflow = false,
    textclass = '',
    animation = 'in',
    isStart = false,
    type = 'lines',
}: SplitTextSentenseProps) => {
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current || !isStart) return;

        const ctx = gsap.context(() => {
            // Ensure SplitText is available (it's a Club GSAP plugin)
            if (typeof SplitText === 'undefined') {
                console.error('GSAP SplitText plugin is not loaded. Please ensure it is correctly installed.');
                return;
            }

            const split = new SplitText(textRef.current, {
                type: type,
                linesClass: 'split-line',
            });

            const target = type === 'lines' ? split.lines : type === 'words' ? split.words : split.chars;
            const animate = animation === 'in' ? gsap.from : gsap.to;

            animate(target, {
                yPercent: 100,
                opacity: 0,
                stagger: 0.05,
                duration: 1,
                ease: 'power3.out',
            });
        }, textRef);

        return () => ctx.revert();
    }, [isStart, animation, type]);

    return (
        <div className={`w-full ${isOverflow ? 'overflow-hidden' : ''}`}>
            <h4 ref={textRef} className={`inline-block ${textclass}`}>
                {text}
            </h4>
        </div>
    );
};

export default SplitTextSentense;
