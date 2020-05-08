import React, {Fragment, useState, useEffect} from "react";
import Timer from "./Timer";
import NumberCard from "./NumberCard";
import StyledContainer from "./styles/container";
import Context from "./Context";
import useStep from "../../../Game/hooks/useStep";
import useUserData from "../../../Game/hooks/useUserData";
import ScreenLoading from "../../../Game/util/screenLoading";

const Container = (props) => {
    const { lowestNumbers, body } = props;

    const { step, setStep } = useStep(); // Our data and methods
    const { scoring, setScoring } = useUserData(); // Our data and methods

    const [isLoading, setIsLoading] = useState(true);
    const [points, setPoints] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, []);

    if (gameFinished && seconds !== 0) {
        setScoring(points);

        setStep(99);
    }

    if (isLoading) return <ScreenLoading/>

    return (
        <Fragment>
            <h1 className="text-center" style={{color: '#fff'}}>Cuán rápido podes contar?</h1>
            <div className=" d-flex justify-content-between">
                <Timer
                    setGameStarted={setGameStarted}
                    gameFinished={gameFinished}
                    onGameFinished={setSeconds}
                >
                    <StyledContainer>
                        <Context.Provider value={{ lowestNumbers, points, setPoints, gameStarted, gameFinished, setGameFinished }}>
                            {body.map(makeNumberCard)}
                        </Context.Provider>
                    </StyledContainer>
                </Timer>
            </div>
        </Fragment>
    )
};

const makeNumberCard = (number) => {
    return (
        <NumberCard
            number={number}
        />
    )
};

export default Container;
