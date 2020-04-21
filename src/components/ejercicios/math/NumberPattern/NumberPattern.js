import React, { Fragment, useState, useEffect } from "react";
import NumberCard from "./NumberCard";
import AvatarWithName from "./AvatarWithName";
import ReactStoreIndicator from "react-score-indicator";

const NumberPattern = (
  {
    /*sequence, numbers, answer*/
  }
) => {
  const sequences = [
    "1, 4, 7, 10, 13, 16, 19, 22, __",
    "1, 2, 3, 5, 8, 13, __, 34, 55",
    "1, 2, 4, __, 16, 32, 64, 128, 256",
  ];
  const numbers = [
    ["21", "22", "23", "24", "25", "26", "27", "28", "29"],
    ["11", "13", "15", "16", "18", "20", "21", "24", "28"],
    ["2", "5", "8", "12", "17", "22", "48", "96", "200"],
  ];

  const answer = ["25", "21", "8"];

  const randomIndex = Math.floor(Math.random() * numbers.length);

  const [points, setPoints] = useState(0);
  const [emojiImg, setEmojiImg] = useState("/static/img/emojis/good.png");
  useEffect(() => {
    if (points < 100) {
      setEmojiImg("/static/img/emojis/good.png");
    } else if (points > 0 && points <= 100) {
      setEmojiImg("/static/img/emojis/dribble.png");
    } else if (points > 100 && points < 250) {
      setEmojiImg("/static/img/emojis/great.png");
    } else if (points >= 250) {
      setEmojiImg("/static/img/emojis/matrix.png");
    }
  }, [points]);

  return (
    <Fragment>
      <h1 className="text-center">Patrón de Números</h1>

      <div className=" d-flex justify-content-between">
        <div
          className="avatar"
          style={{ width: "25%", marginTop: "15%", marginLeft: "1rem" }}
        >
          <AvatarWithName
            avatarImg="/static/img/icon-users/icons8-iron-man.png"
            name="Pepito Junior"
          />
        </div>

        <div className="card-panel" style={{ width: "50%" }}>
          <div id="question">
            <p id="sequence">{sequences[randomIndex]}</p>
          </div>

          <div className="d-flex justify-content-center row-cards">
            <NumberCard
              number={numbers[randomIndex][0]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][1]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][2]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
          </div>
          <div className="d-flex justify-content-center row-cards">
            <NumberCard
              number={numbers[randomIndex][3]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][4]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][5]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
          </div>
          <div
            className="d-flex justify-content-center row-cards"
            style={{ marginBottom: "2rem" }}
          >
            <NumberCard
              number={numbers[randomIndex][6]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][7]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
            <NumberCard
              number={numbers[randomIndex][8]}
              points={points}
              answer={answer[randomIndex]}
              setPoints={setPoints}
            />
          </div>
        </div>

        <div
          className="score-indicator"
          style={{ width: "25%", marginTop: "15%" }}
        >
          <div className="">
            <ReactStoreIndicator value={points} maxValue={500} lineWidth={30} />
            <div className="">
              <img alt="No Data" src={emojiImg} className="emoji-score" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .row-cards {
          margin-top: 1rem;
        }

        .card-panel {
          border: 3px solid black;
          border-radius: 3%;
          background-color: #e8e8e8;
        }
        .emoji-score {
          width: 24%;
          margin-left: 38%;
          margin-top: -62%;
        }

        #question {
          background: #ffffff;
          height: 80px;
          border-radius: 30px;
          border: 1px solid #3f8ce8;
          margin: 1rem 2rem 2rem 2rem;
        }
        #sequence {
          text-align: center;
          margin-top: auto;
          margin-bottom: auto;
          display: block;
          font-weight: 700;
          font-size: 42px;
          color: #3f8ce8;
        }
      `}</style>
    </Fragment>
  );
};

export default NumberPattern;
