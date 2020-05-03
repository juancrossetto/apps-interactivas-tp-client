import { useContext } from "react";
import { Context } from "../Context";

const useUserData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const setLevel = data => {
    setState(prevState => ({
      ...prevState,
      level: data
    }));
  }; // Our methods to update the state

  const setNickname = data => {
    setState(prevState => ({
      ...prevState,
      nickname: data
    }));
  }; // Our methods to update the state

  const setAvatar = data => {
    setState(prevState => ({
      ...prevState,
      avatar: data
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    nickname: state.nickname,
    level: state.level,
    avatar: state.avatar,
    setNickname,
    setLevel,
    setAvatar,
  };
};

export default useUserData;