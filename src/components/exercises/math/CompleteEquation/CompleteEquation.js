import React, { Fragment, useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import Equation from "./Equation";
import { colors } from "@material-ui/core";
import AvatarWithName from "../NumberPattern/AvatarWithName";

const CompleteEquation = (
  {
    /*equation, possAns, answer*/
  }
) => {
  const equation = [
    "2 x ? = 8",
    "14 / ? = 7",
    "2 x ? x 2 = 16",
    "10 - ? = 5",
    "5 + ? = 50",
    "14 - ? = 9",
    "5 + ? = 8",
    "3 x ? - 5 = 13",
    "5 x ? = 25",
    "49 / ? = 7",
  ];

  const possAns = [
    ["5", "10", "4", "2"],
    ["14", "7", "2", "1"],
    ["2", "4", "8", "3"],
    ["5", "3", "2", "10"],
    ["10", "35", "45", "25"],
    ["3", "2", "5", "7"],
    ["3", "5", "2", "10"],
    ["5", "4", "6", "2"],
    ["10", "8", "5", "3"],
    ["7", "14", "21", "10"],
  ];

  const answer = ["4", "2", "4", "5", "45", "5", "3", "6", "5", "7"];

  const randomIndex = Math.floor(Math.random() * equation.length);
  const [points, setPoints] = useState(0);
  const [emojiImg, setEmojiImg] = useState("/static/img/emojis/good.png");
  useEffect(() => {
    if (points == 0) {
      setEmojiImg("/static/img/emojis/good.png");
    } else if (points > 10 && points <= 20) {
      setEmojiImg("/static/img/emojis/dribble.png");
    } else if (points > 20 && points < 70) {
      setEmojiImg("/static/img/emojis/great.png");
    } else if (points >= 70) {
      setEmojiImg("/static/img/emojis/matrix.png");
    }
  }, [points]);

  return (
    <Fragment>
      <h1 className="text-center">Completar Ecuación</h1>

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
            <p id="equation">{equation[randomIndex]}</p>
          </div>

          <div className="d-flex justify-content-center row-cards">
            <Equation
              possAns={possAns[randomIndex][0]}
              answer={answer[randomIndex]}
              points={points}
              setPoints={setPoints}
            />
            <Equation
              possAns={possAns[randomIndex][1]}
              answer={answer[randomIndex]}
              points={points}
              setPoints={setPoints}
            />
            <Equation
              possAns={possAns[randomIndex][2]}
              answer={answer[randomIndex]}
              points={points}
              setPoints={setPoints}
            />
            <Equation
              possAns={possAns[randomIndex][3]}
              answer={answer[randomIndex]}
              points={points}
              setPoints={setPoints}
            />
          </div>
        </div>

        <div
          className="score-indicator"
          style={{ width: "25%", marginTop: "15%" }}
        >
          <div className="">
            <ReactStoreIndicator value={points} maxValue={100} lineWidth={30} />
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

        #equation {
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

export default CompleteEquation;
