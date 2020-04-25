import React, {Fragment, useState, useEffect} from "react";
import Timer from "./Timer";
import NumberCard from "./NumberCard";
import StyledContainer from "./styles/container";
import AvatarWithName from "../NumberPattern/AvatarWithName";
import Context from "./Context";
import ReactScoreIndicator from "react-score-indicator";

const Container = (props) => {
    const { lowestNumbers, body } = props;

    const [points, setPoints] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const [emojiImg, setEmojiImg] = useState("/static/img/emojis/good.png");
    useEffect(() => {
        if (points < 100) {
            setEmojiImg("/static/img/emojis/good.png");
        } else if (points > 0 && points <= 200) {
            setEmojiImg("/static/img/emojis/dribble.png");
        } else if (points > 200 && points < 450) {
            setEmojiImg("/static/img/emojis/great.png");
        } else if (points >= 450) {
            setEmojiImg("/static/img/emojis/matrix.png");
        }
    }, [points]);

    if (gameFinished && seconds !== 0) {
        window.alert(seconds)
    }

    return (
        <Fragment>
            <h1 className="text-center">Cuán rápido podes contar?</h1>
            <div className=" d-flex justify-content-between">
                <div
                    className="avatar"
                    style={{width: "25%", marginTop: "15%", marginLeft: "1rem"}}
                >
                    <AvatarWithName
                        avatarImg="/static/img/icon-users/icons8-iron-man.png"
                        name="Pepito Junior"
                    />
                </div>
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
                <div
                    className="score-indicator"
                    style={{width: "25%", marginTop: "15%"}}
                >
                    <div className="">
                        <ReactScoreIndicator value={points} maxValue={50 * body.length} lineWidth={30}/>
                        <div className="">
                            <img alt="No Data" src={emojiImg} className="emoji-score"/>
                        </div>
                    </div>
                </div>
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
