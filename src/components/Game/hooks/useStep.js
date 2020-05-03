import { useContext } from "react";
import { Context } from "../Context";

const useStep = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const setStep = data => {
    setState(prevState => ({
      ...prevState,
      step: data
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    step: state.step,
    setStep
  };
};

export default useStep;