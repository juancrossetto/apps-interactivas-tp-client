import React from 'react';
import RandomAvatar from './RandomAvatar';

export default ({
  nickname = "visitante"
}) => {
  return (
    <React.Fragment>
      <div className="welcome-bar">
        <RandomAvatar />
        <div className="username">Hola <span>{nickname}</span>!</div>
      </div>
      <style jsx>{`
        .welcome-bar {
          display: flex;
          align-items: center;
        }
        .username{
          padding-left: 30px;
          font-size: 2em;
        }
      
      `}</style>
    </React.Fragment>
  )
}
