"use client";
import { createContext, useMemo, useReducer, useState } from "react";
import Base from "./_components/Base";
import useMallReducer, { MallAction } from "./_hooks/useMallReducer";
import { MallContext, defaultContextValue } from "./_hooks/useMallContext";

const GROUND_LEVEL = 8;

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
