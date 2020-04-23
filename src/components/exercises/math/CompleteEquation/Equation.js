import React, { Fragment, useState, useEffect } from "react";

const Equation = ({ possAns, answer, points, setPoints }) => {
  const [cardStyle, setCardStyle] = useState("none");

  const setStatusCard = (possAns) => {
    if (possAns != answer) {
      setCardStyle("error-card");
      if (points - 10 >= 0) {
        setPoints(points - 10);
      }
      setTimeout(() => {
        setCardStyle("none");
      }, 1000);
    } else {
      setCardStyle("ok-card");
      if (points < 100) {
        setPoints(points + 10);
      }
      setTimeout(() => {
        setCardStyle("none");
      }, 1000);
    }
    if (points == 100) {
      alert("Ganaste crack");
      setPoints(0);
    }
  };

  return (
    <Fragment>
      <div
        id=""
        className={"card align-items-center number-card " + cardStyle}
        onClick={() => setStatusCard(possAns)}
      >
        <div className={"card-block number " + cardStyle}>
          <p className={"card-text " + cardStyle}>{possAns}</p>
        </div>
      </div>

      <style jsx>{`
        .number-card {
          border: 1px solid #3f8ce8;
          border-radius: 15px;
          width: 150px;
          height: 150px;
          background-color: white;
          margin-left: 1rem;
          margin-right: 1rem;
        }

        .number-card:hover {
          //-webkit-background-clip: text;
          //   width: 302px;
          //   height: 302px;
          //   transition: all 0.25s ease;
          border: 3px solid #3f8ce8;
        }

        .number {
          margin-top: auto;
          margin-bottom: auto;
          //   display: block;
          font-weight: 800;
          font-size: 3rem;
        }

        .card-text {
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            color-stop(0.03, rgba(111, 66, 193, 1)),
            color-stop(0.52, rgba(34, 193, 195, 1)),
            color-stop(0.76, rgba(111, 66, 193, 1))
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .error-card {
          animation-name: error-animation;
          animation-duration: 0.75s;
        }

        .ok-card {
          animation-name: ok-animation;
          animation-duration: 0.75s;
        }

        @keyframes error-animation {
          from {
            background-color: white;
          }
          to {
            background-color: #f70d0d;
          }
        }

        @keyframes ok-animation {
          from {
            background-color: white;
          }
          to {
            background-color: #3fe842;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Equation;
