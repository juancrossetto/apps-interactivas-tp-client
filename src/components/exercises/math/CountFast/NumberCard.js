import React, {Fragment, useState, useEffect, useContext} from "react";
import StyledNumberCard from './styles/number-card'
import classNames from 'classnames';
import Context from './Context'

const NumberCard = ({ number }) => {
    const { lowestNumbers, points, setPoints, gameStarted, gameFinished, setGameFinished } = useContext(Context);
    const [ lowestNumber ] = lowestNumbers;
    const initialStyle = number < lowestNumber ? "completed" : "none";
    const [cardStyle, setCardStyle] = useState(initialStyle);

    const setStatusCard = (number) => {
        if (number !== lowestNumber) {
            setCardStyle("error-card");
            if (points - 50 >= 0) {
                setPoints(points - 50);
            }
            setTimeout(() => {
                setCardStyle("none");
            }, 1000);
        } else {
            setCardStyle("ok-card");
            setPoints(points + 50);
            lowestNumbers.shift();
            setTimeout(() => {
                setCardStyle("completed");
                if (lowestNumbers.length === 0) {
                    setGameFinished(true)
                }
            }, 1000);
        }
    };

    // useEffect(() => {}
    // , [cardStyle])

    return (
        <Fragment>
            <StyledNumberCard
                id=""
                className={classNames("align-items-center", "number-card-count-fast", cardStyle, gameStarted ? "started" : "")}
                onClick={() => gameStarted && !gameFinished ? setStatusCard(number) : null}
            >
                <div className={"card-block number " + cardStyle}>
                    <p className={"card-text " + cardStyle}>{number}</p>
                </div>
            </StyledNumberCard>
        </Fragment>
    );
};

export default NumberCard;
