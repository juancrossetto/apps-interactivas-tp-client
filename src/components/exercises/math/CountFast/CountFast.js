import React from "react";
import Container from "./Container";

const CountFast = (props) => {
    const {body = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]} = props;

    return (
        <Container
            lowestNumbers={body}
            body={_shuffleNumbers(body)}
        />
    )
};

const _shuffleNumbers = (numbers) => {
    const shuffledNumbers = [...numbers];
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
    }

    return shuffledNumbers;
}

export default CountFast;
