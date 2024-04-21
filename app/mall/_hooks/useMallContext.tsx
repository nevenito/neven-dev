import { useContext } from "react";
import { MallContext } from "../page";

const useMallContext = () => {
  const context = useContext(MallContext);
  return context;
};

export default useMallContext;
