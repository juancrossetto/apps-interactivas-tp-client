import React from 'react';

export default () => {

  let avatares = [
    "icon-users/icons8-futurama-bender.png",
    "icon-users/icons8-homer-simpson.png",
    "icon-users/icons8-iron-man.png",
    "icon-users/icons8-jake.png",
    "icon-users/icons8-super-mario.png",
  ]

  return (
    <React.Fragment>
        <img src={avatares[Math.floor(Math.random() * avatares.length)]} />
    </React.Fragment>
  )
}
