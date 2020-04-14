import React, { Fragment } from 'react';
import useUserData from "../hooks/useUserData";
import Leaderboard from '../components/ranking/Leaderboard';
import TableWithPagination from '../components/ranking/TableWithPagination';

import Layout from 'components/Layout'

const RankingPage = () => {

    const { nickname, updateNickname } = useUserData(); // Our data and methods
    
    
    // if (!nickname) {
    //     return <Redirect to='/puntajes' />
    // }
    
    return (
      <Layout isAuth={true}>
            <h1>Ranking</h1>
            <Leaderboard/>
        </Layout>
    );
}

export default RankingPage;