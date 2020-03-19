import { useContext } from "react";
import { Context } from "../Context";

const userAccountData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const updateUser = name => {
    setState(prevState => ({
      ...prevState,
      userAccount: name
    }));
  }; // Our methods to update the state

  const updateUserName = name => {
    setState(prevState => ({
      ...prevState,
      userAccount: {
        ...prevState.userAccount,
        name: name
      }
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    user: state.userAccount,
    updateUser,
    updateUserName
  };
};

export default userAccountData;