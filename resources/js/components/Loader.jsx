import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { website } from '../utils/constant';
import SplitTextSentense from './common/SplitTextSentense';

const Loader = ({ handleLoadingComplete, show, onCompleteAction, isFirstLoad }) => {
    const stripsRef = useRef([]);
    const [textAnimation, setTextAnimation] = useState(false);
    const [isInternalLoaded, setIsInternalLoaded] = useState(false);

    useEffect(() => {
        if (!stripsRef.current) return;

        if (show) {
            setIsInternalLoaded(false);

            gsap.set(stripsRef.current, {
                scaleX: 0,
                transformOrigin: 'left center',
            });

            gsap.to(stripsRef.current, {
                scaleX: 1,
                stagger: -0.1,
                ease: 'power3.out',
                onStart: () => setTextAnimation(false),
                onComplete: () => {
                    onCompleteAction?.();
                },
            });
        } else {
            gsap.set(stripsRef.current, {
                scaleX: 1,
                transformOrigin: 'right center',
            });

            gsap.to(stripsRef.current, {
                scaleX: 0,
                delay: isFirstLoad ? 3 : 0,
                stagger: -0.1,
                ease: 'power3.in',
                onStart: () => {
                    if (isFirstLoad) setTextAnimation(true);
                },
                onComplete: () => {
                    setIsInternalLoaded(true);
                    handleLoadingComplete?.();
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    return (
        <div
            className={`fixed top-0 left-0 z-1000 flex h-screen w-full origin-left flex-col transition-all will-change-transform ${
                isInternalLoaded ? 'pointer-events-none' : 'pointer-events-auto'
            }`}
        >
            {isFirstLoad && (
                <div className="fixed top-1/2 left-1/2 z-1001 -translate-x-1/2 -translate-y-1/2">
                    <SplitTextSentense
                        text={website}
                        animation="out"
                        isOverflow={true}
                        textclass={'text-[31px] text-white font-semibold'}
                        isStart={textAnimation}
                        type="words"
                    />
                </div>
            )}

            {Array(4)
                .fill('')
                .map((_, index) => {
                    return (
                        <div ref={(el) => (stripsRef.current[index] = el)} key={index} className="relative h-1/4 bg-[#000027] transition-none"></div>
                    );
                })}
        </div>
    );
};

export default React.memo(Loader);
