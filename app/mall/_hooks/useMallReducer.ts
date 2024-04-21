import { useReducer } from "react";
import useMallContext from "./useMallContext";

type MallSchema = {
  width: 2 | 4 | 6;
  floors: number;
  undergroundFloors: number;
};

type Store = {
  row: number;
  column: number;
  width: number;
  id: number;
};

const stores: Store[] = [
  { row: 1, column: 1, width: 1, id: 1 },
  { row: 2, column: 2, width: 1, id: 2 },
  { row: 2, column: 3, width: 2, id: 3 },
  { row: 1, column: 4, width: 1, id: 4 },
];

export type MallAction =
  | { type: "SET_WIDTH"; payload: 2 | 4 | 6 }
  | { type: "ADD_FLOOR" }
  | { type: "REMOVE_FLOOR" }
  | { type: "ADD_UNDERGROUND_FLOOR" }
  | { type: "REMOVE_UNDERGROUND_FLOOR" };

const useMallReducer = (initial: MallSchema) => {
  const mallReducer = (state: MallSchema, action: MallAction): MallSchema => {
    switch (action.type) {
      case "SET_WIDTH":
        return { ...state, width: action.payload };
      case "ADD_FLOOR":
        return { ...state, floors: state.floors + 1 };
      case "REMOVE_FLOOR":
        return { ...state, floors: Math.max(0, state.floors - 1) };
      case "ADD_UNDERGROUND_FLOOR":
        return { ...state, undergroundFloors: state.undergroundFloors + 1 };
      case "REMOVE_UNDERGROUND_FLOOR":
        return {
          ...state,
          undergroundFloors: Math.max(0, state.undergroundFloors - 1),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(mallReducer, initial);
  return [state, dispatch] as const;
};

export default useMallReducer;
