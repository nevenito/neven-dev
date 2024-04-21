"use client";
import { createContext, useMemo, useReducer, useState } from "react";
import Base from "./_components/Base";
import useMallReducer, { MallAction } from "./_hooks/useMallReducer";

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

const defaultContextValue: MallContext = {
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

const Mall = () => {
  const [state, dispatch] = useMallReducer(defaultContextValue);

  const [widthStart, widthEnd] = useMemo(() => {
    const halfWidthScreen = 5;
    const halfWidthBuilding = state.width / 2 - 1;
    const start = halfWidthScreen - halfWidthBuilding;
    return [start, start + state.width];
  }, [state.width]);

  const getFloorPosition = (floor: number) => {
    return {
      gridRowStart: GROUND_LEVEL - floor - 1,
      gridRowEnd: GROUND_LEVEL - floor,
      gridColumnStart: widthStart,
      gridColumnEnd: widthEnd,
    };
  };

  const getWidthPosition = () => {
    return {
      gridColumnStart: widthStart,
      gridColumnEnd: widthEnd,
    };
  };

  return (
    <div className="bg-slate-500">
      <MallContext.Provider
        value={{
          ...defaultContextValue,
          ...state,
          getFloorPosition,
          getWidthPosition,
          dispatch,
        }}
      >
        <Base />
      </MallContext.Provider>
    </div>
  );
};

export default Mall;
