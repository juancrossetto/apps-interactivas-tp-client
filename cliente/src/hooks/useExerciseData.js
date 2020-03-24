import { useContext } from "react";
import { Context } from "../Context";

const useExerciseData = () => {
  const [state, setState] = useContext(Context); // Our values from Context

  const updateLevel = name => {
    setState(prevState => ({
      ...prevState,
      level: name
    }));
  }; // Our methods to update the state

  const updateQuestions = name => {
    setState(prevState => ({
      ...prevState,
      questions: name
    }));
  }; // Our methods to update the state

  // Now we return only the relevant part of the state for the component and the method to update it
  return {
    level: state.userAccount,
    questions: state.questions,
    updateLevel,
    updateQuestions
  };
};

export default useExerciseData;