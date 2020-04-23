import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";

const AvatarWithName = ({ avatarImg, name }) => {
  return (
    <Fragment>
      <div className="d-flex justify-content-start avatar-box">
        <div className="avatar-img-box">
          <Avatar alt="No Data" src={avatarImg} className="avatar-img" />
        </div>
        <div className="avatar-name-box">
          <p className="avatar-name text-center">{name}</p>
        </div>
      </div>
      <style jsx>{`
        .avatar-box {
        }

        .avatar-img-box {
          //width: 7%;
        }
        .avatar-img {
          width: 160%;
          height: 100%;
          //   margin: 7px auto 0px auto;
          //   left: 80%;
          position: relative;
          border: 1px solid #3f8ce8;
        }

        .avatar-name-box {
          background: #ffffff;
          width: 80%;
          height: 80px;
          border-radius: 30px;
          border: 1px solid #3f8ce8;
          //   margin-bottom: 2rem;
          margin-top: 1rem;
          //   left: 2%;
        }

        .avatar-name {
          text-align: center;
          margin-top: auto;
          margin-bottom: auto;
          display: block;
          font-weight: 700;
          font-size: 35px;
          color: #3f8ce8;
          margin-left: 1rem;
        }
      `}</style>
    </Fragment>
  );
};

export default AvatarWithName;
