import React from 'react';
import RandomAvatar from './RandomAvatar';

export default ({
  nickname = "visitante",
  avatar,
  level = "Principiante"
}) => {
  return (
    <React.Fragment>
      <div className="welcome-bar">
        {!avatar && <RandomAvatar />}
        { avatar && <img width="52px" src={avatar} /> }
        <div className="info">
          <div className="nickname">{nickname}</div>
          <div className="level">Nivel {level}</div>
        </div>
      </div>
      <style jsx>{`
        .welcome-bar {
          display: flex;
          align-items: center;
          color: #fff;
          margin: 0 0 10px;
        }
        .info{
          text-align: left;
          padding-left: 10px;
          font-size: 12px;
        }
        .nickname {
          font-size: 16px;
        }
      
      `}</style>
    </React.Fragment>
  )
}
