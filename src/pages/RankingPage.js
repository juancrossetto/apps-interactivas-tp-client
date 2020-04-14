import React, { Fragment } from "react";
import useUserData from "../hooks/useUserData";
import Leaderboard from "../components/ranking/Leaderboard";
import TableWithPagination from "../components/ranking/TableWithPagination";

const RankingPage = () => {
  const { nickname, updateNickname } = useUserData(); // Our data and methods

  // if (!nickname) {
  //     return <Redirect to='/puntajes' />
  // }

  return (
    <Fragment>
      <h1>Ranking</h1>
      <Leaderboard />
    </Fragment>
  );
};

export default RankingPage;
