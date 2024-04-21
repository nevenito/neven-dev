import { useMemo } from "react";
import useMallContext from "../_hooks/useMallContext";
import { cn } from "../../_shared/utils/cn";

type BuildingFloorProps = {
  floor: number;
  isUnderground?: boolean;
};

const BuildingFloor: React.FC<BuildingFloorProps> = ({
  floor,
  isUnderground,
}) => {
  const { getFloorPosition, width } = useMallContext();

  const widthArray = useMemo(
    () => Array.from({ length: width }, (_, i) => i),
    [width]
  );

  return (
    <div
      style={{
        ...getFloorPosition(floor),
      }}
      className={cn(
        "grid-cols-subgrid z-20 grid",
        isUnderground ? "bg-blue-300" : "bg-red-300"
      )}
    >
      {widthArray.map((i) => (
        <div
          key={i}
          className={cn(
            "z-20 ring-[1px] ring-inset",
            isUnderground ? "hover:bg-blue-400" : "hover:bg-red-400"
          )}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default BuildingFloor;
