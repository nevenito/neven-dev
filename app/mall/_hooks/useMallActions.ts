import useMallContext from "./useMallContext";

const useMallActions = () => {
  const { dispatch } = useMallContext();

  const setWidth = (width: 2 | 4 | 6) => {
    dispatch({ type: "SET_WIDTH", payload: width });
  };

  const addFloor = () => {
    dispatch({ type: "ADD_FLOOR" });
  };

  const removeFloor = () => {
    dispatch({ type: "REMOVE_FLOOR" });
  };

  const addUndergroundFloor = () => {
    dispatch({ type: "ADD_UNDERGROUND_FLOOR" });
  };

  const removeUndergroundFloor = () => {
    dispatch({ type: "REMOVE_UNDERGROUND_FLOOR" });
  };

  return {
    setWidth,
    addFloor,
    removeFloor,
    addUndergroundFloor,
    removeUndergroundFloor,
  };
};

export default useMallActions;
