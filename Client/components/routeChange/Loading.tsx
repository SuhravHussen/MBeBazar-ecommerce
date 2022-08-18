import { CircularProgress, circularProgressClasses } from '@mui/material';
import { useNProgress } from '@tanem/react-nprogress';
import React from 'react';

const Loading: React.FC<{ isRouteChanging: boolean }> = ({ isRouteChanging }) => {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating: isRouteChanging,
    });

    return (
        <>
            <style jsx>{`
                .container {
                    opacity: ${isFinished ? 0 : 1};
                    pointerevents: none;
                    transition: opacity ${animationDuration}ms linear;
                }
                .bar {
                    background: green;
                    height: 4px;
                    left: 0;
                    margin-left: ${(-1 + progress) * 100}%;
                    position: fixed;
                    top: 0;
                    transition: margin-left ${animationDuration}ms linear;
                    width: 100%;
                    z-index: 403156757577575;
                }
                .spinner {
                    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                    display: block;
                    height: 100%;
                    opacity: 1;
                    position: absolute;
                    right: 0;
                    transform: rotate(3deg) translate(0px, -4px);
                    width: 100px;
                }
            `}</style>
            <div className="container">
                <div className="bar" />
                <div
                    style={{
                        position: 'absolute',
                        right: '10px',
                        bottom: '10px',
                        zIndex: 200000000000000,
                        opacity: isFinished ? 0 : 1,
                    }}
                >
                    <CircularProgress
                        sx={{
                            color: 'green',
                            animationDuration: '150ms',
                            [`& .${circularProgressClasses.circle}`]: {
                                strokeLinecap: 'round',
                            },
                        }}
                        thickness={5}
                        size={20}
                    />
                </div>
            </div>
        </>
    );
};

export default Loading;
