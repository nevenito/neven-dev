import { createContext, useContext } from "react";
import { MallAction } from "./useMallReducer";

// Create MallContext
type MallContext = {
  width: 2 | 4 | 6;
  floors: number;
  undergroundFloors: number;
  groundGridRow: number;
  getFloorPosition: (floor: number) => {
    gridRowStart: number;
    gridRowEnd: number;
    gridColumnStart: number;
    gridColumnEnd: number;
  };
  getWidthPosition: () => {
    gridColumnStart: number;
    gridColumnEnd: number;
  };
  dispatch: React.Dispatch<MallAction>;
};

const GROUND_LEVEL = 8;

export const defaultContextValue: MallContext = {
  width: 6,
  floors: 3,
  groundGridRow: GROUND_LEVEL,
  undergroundFloors: 1,
  getFloorPosition: () => {
    throw new Error("getFloorPosition not implemented");
  },
  getWidthPosition: () => {
    throw new Error("getWidthPosition not implemented");
  },
  dispatch: () => {
    throw new Error("dispatch not implemented");
  },
};

export const MallContext = createContext<MallContext>(defaultContextValue);

const useMallContext = () => {
  const context = useContext(MallContext);
  return context;
};

export default useMallContext;
