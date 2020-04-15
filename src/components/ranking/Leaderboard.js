import React, { Fragment, useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CardContent, Button } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TableWithPagination from "./TableWithPagination";
import PodiumCard from "./PodiumCard";
import ButtonCard from "./ButtonCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

// const Button = withStyles(theme => ({
//   root: {
//     borderRadius: 12,
//     color: "white",
//     height: 46,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     fontSize: 18,
//     fontWeight: "bold"
//   }
// }))(Button);

const LeaderBoard = () => {
  const classes = useStyles();

  const [rowsFiltered, setRows] = useState([]);
  const [subject, setSubject] = useState("TODOS");
  const [level, setLevel] = useState("TODOS");

  function createData(position, name, score, subject, level, date, avatar) {
    return { position, name, score, subject, level, date, avatar };
  }
  const subjects = [
    {
      url: "static/img/matematica.png",
      title: "MATEMATICA",
      width: "33%"
    },
    {
      url: "/static/img/literatura.png",
      title: "LENGUA",
      width: "34%"
    },
    {
      url: "/static/img/matYlit.png",
      title: "TODOS",
      width: "33%"
    }
  ];

  const levels = [
    {
      url: "static/img/colegio5.png",
      title: "FACIL",
      width: "25%"
    },
    {
      url: "/static/img/colegio6.png",
      title: "MEDIO",
      width: "25%"
    },
    {
      url: "/static/img/colegio7.png",
      title: "DIFICIL",
      width: "25%"
    },
    {
      url: "/static/img/colegio8.png",
      title: "TODOS",
      width: "25%"
    }
  ];

  const rows = [
    createData(
      1,
      "Juan",
      305,
      "Matematica",
      "Facil",
      "10/04/2020",
      "/static/img/icon-users/icons8-jake.png"
    ),
    createData(
      2,
      "Pepe",
      452,
      "Lengua",
      "Dificil",
      "11/04/2020",
      "/static/img/icon-users/icons8-homer-simpson.png"
    ),
    createData(
      3,
      "Claudia",
      262,
      "Matematica",
      "Medio",
      "01/01/2020",
      "/static/img/icon-users/icons8-homer-simpson.png"
    ),
    createData(
      4,
      "ruperto NombreLargo",
      159,
      "Lengua",
      "Facil",
      "10/04/2019",
      "/static/img/icon-users/icons8-iron-man.png"
    ),
    createData(
      5,
      "Yolanda",
      356,
      "Matematica",
      "Facil",
      "05/12/2020",
      "/static/img/icon-users/icons8-iron-man.png"
    ),
    createData(
      6,
      "Brian",
      408,
      "Matematica",
      "Dificil",
      "02/02/2020",
      "/static/img/icon-users/icons8-super-mario.png"
    ),
    createData(
      7,
      "Maria",
      237,
      "Lengua",
      "Facil",
      "10/04/2020",
      "/static/img/icon-users/icons8-super-mario.png"
    ),
    createData(
      8,
      "Pilar",
      375,
      "Matematica",
      "Medio",
      "19/04/2020",
      "/static/img/icon-users/icons8-jake.png"
    ),
    createData(
      9,
      "Manolito",
      518,
      "Lengua",
      "Medio",
      "07/01/2020",
      "/static/img/icon-users/icons8-iron-man.png"
    ),
    createData(
      10,
      "Alberto",
      500,
      "Lengua",
      "Dificil",
      "01/04/2020",
      "/static/img/icon-users/icons8-jake.png"
    ),
    createData(
      11,
      "Carlos",
      199,
      "Matematica",
      "Dificil",
      "19/02/2020",
      "/static/img/icon-users/icons8-super-mario.png"
    ),
    createData(
      12,
      "Cristina",
      360,
      "Lengua",
      "Facil",
      "25/12/2020",
      "/static/img/icon-users/icons8-homer-simpson.png"
    ),
    createData(
      13,
      "Eva",
      437,
      "Lengua",
      "Medio",
      "02/02/2020",
      "/static/img/icon-users/icons8-jake.png"
    )
  ].sort((a, b) => (a.position < b.position ? -1 : 1));

  useEffect(() => {
    if (level === "TODOS" || subject === "TODOS") {
      if (level === "TODOS" && subject !== "TODOS") {
        setRows(
          rows.filter(r => r.subject.toUpperCase() === subject.toUpperCase())
        );
      } else if (level !== "TODOS" && subject === "TODOS") {
        setRows(
          rows.filter(r => r.level.toUpperCase() === level.toUpperCase())
        );
      } else {
        //si no se filtro nada
        setRows(rows);
      }
    } else {
      setRows(
        rows.filter(
          r =>
            r.level.toUpperCase() === level.toUpperCase() &&
            r.subject.toUpperCase() === subject.toUpperCase()
        )
      );
    }
    // eslint-disable-next-line
  }, [level, subject]);

  return (
    <Fragment>
      <div className={classes.root}>
        <ButtonCard images={subjects} setSubject={setSubject} />
        <ButtonCard images={levels} setSubject={setLevel} />
        {/* <ButtonGroup
          size="large"
          aria-label="large contained primary button group"
          variant="text"
          className="button-group"
        >
          <Button onClick={() => setSubject("LENGUA")} className="button-menu">
            LENGUA
          </Button>
          <Button
            onClick={() => setSubject("MATEMATICA")}
            className="button-menu"
          >
            MATEMATICA
          </Button>
          <Button onClick={() => setSubject("TODOS")} className="button-menu">
            TODOS
          </Button>
        </ButtonGroup> */}

        {/* <ButtonGroup
          size="small"
          aria-label="small contained secondary button group"
          variant="text"
          className="button-group"
        >
          <Button onClick={() => setLevel("FACIL")} className="button-menu">
            FACIL
          </Button>
          <Button onClick={() => setLevel("MEDIO")} className="button-menu">
            MEDIO
          </Button>
          <Button onClick={() => setLevel("DIFICIL")} className="button-menu">
            DIFICIL
          </Button>
          <Button onClick={() => setLevel("TODOS")} className="button-menu">
            TODOS
          </Button>
        </ButtonGroup> */}
      </div>
      <CardContent className="d-flex justify-content-center">
        {rowsFiltered[1] ? (
          <PodiumCard
            positionImg="/static/img/silverMedal.png"
            positionDescription="Segunda Posición"
            student={rowsFiltered[1]}
          />
        ) : null}

        {rowsFiltered[0] ? (
          <PodiumCard
            positionImg="/static/img/goldMedal.png"
            positionDescription="Primera Posición"
            student={rowsFiltered[0]}
          />
        ) : null}

        {rowsFiltered[2] ? (
          <PodiumCard
            positionImg="/static/img/bronzeMedal.png"
            positionDescription="Tercera Posición"
            student={rowsFiltered[2]}
          />
        ) : null}
      </CardContent>
      <TableWithPagination
        rows={rowsFiltered.slice(3, rowsFiltered.length )}
      />

      <style jsx>{`
        .button-group {
          background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
          border-radius: 12px;
          color: white;
          padding: 5px 5px 5px 5px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        }

        .button-menu {
          border-radius: 12px;
          color: white;
          height: 46px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </Fragment>
  );
};

export default LeaderBoard;
