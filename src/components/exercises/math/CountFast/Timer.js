import React, {useEffect, useState} from 'react';
import Styled from './styles/timer'
import classNames from 'classnames'

import moment from 'moment';

const Timer = ({ children, setGameStarted, gameFinished, onGameFinished }) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    if (gameFinished && isActive) {
        setIsActive(false);
        onGameFinished(seconds)
    }

    function toggle() {
        setIsActive(!isActive)
        setGameStarted(true)
    }

    useEffect(() => {
       let interval;
       if (isActive && !gameFinished) {
           interval = setInterval(() => {
               setSeconds(seconds => seconds + 1)
           }, 1000)
       } else if (!isActive && seconds !== 0) {
           clearInterval(interval)
       }
       return () => clearInterval(interval)
    }, [isActive, seconds]);

    return (
        <Styled>
            <div>{_formatCount(seconds)}</div>
            {children}
            <button className={classNames('start', 'btn-next', isActive ? 'active' : '')} onClick={toggle}>Start</button>
        </Styled>
    )
};

const _formatCount = (seconds) =>
    moment().startOf('day')
        .seconds(seconds)
        .format('mm:ss');

export default Timer;
