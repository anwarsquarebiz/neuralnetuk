import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { website } from '../utils/constant';
import SplitTextSentense from './common/SplitTextSentense';

const Loader = ({ handleLoadingComplete }) => {
    const stripsRef = useRef([]);
    const [textAnimation, setTextAnimation] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!stripsRef.current) return;

        gsap.to(stripsRef.current, {
            width: 0,
            delay: 3,
            stagger: 0.1,
            ease: 'power3.in',
            onStart: () => {
                setTextAnimation(true);
                handleLoadingComplete();
            },
            onComplete: () => {
                setIsLoaded(true);
            },
        });
    }, []);

    if (isLoaded) return null;

    return (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <SplitTextSentense
                    text={website}
                    animation="out"
                    isOverflow={true}
                    textclass={'text-[31px] text-black ot-jub'}
                    isStart={textAnimation}
                    type="words"
                />
            </div>

            {Array(4)
                .fill('')
                .map((_, index) => {
                    return <div ref={(el) => (stripsRef.current[index] = el)} key={index} className="h-1/4 w-full bg-white"></div>;
                })}
        </div>
    );
};

export default React.memo(Loader);
