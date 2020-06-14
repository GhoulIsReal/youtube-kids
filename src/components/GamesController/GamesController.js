import React, { Suspense } from 'react';

import { ImagesProvider } from "../../contexts/ImagesContext";
import { useTransition, animated } from "react-spring";

const Puzzle = React.lazy(() => {
    return import("../../games/Puzzle/Puzzle");
});

const Shop = React.lazy(() => {
    return import("../../games/Shop/Shop");
});

const Memory = React.lazy(() => {
    return import("../../games/Memory/containers/Memory");
});

const GamesController = ({ currentGame, goBackToVideo }) => {
    return (
        <div className="GamesController">
            <animated.div key={"key"}>
                <Suspense fallback={""}>
                    {"shop" === currentGame && <ImagesProvider
                        r={require.context(
                            "../../games/Shop/images/",
                            true,
                            /\.(png|jpe?g|svg)$/
                        )}
                    >
                        <Shop goBackToVideo={goBackToVideo} />
                    </ImagesProvider>}
                    {"puzzle" === currentGame && <ImagesProvider
                        r={require.context(
                            "../../games/Puzzle/images/",
                            false,
                            /\.(png|jpe?g|svg)$/
                        )}
                    >
                        <Puzzle goBackToVideo={goBackToVideo} />
                    </ImagesProvider>}
                    {"memory" === currentGame && <Memory goBackToVideo={goBackToVideo} />}
                </Suspense>
            </animated.div>
        </div>
    )
}

export default GamesController;
