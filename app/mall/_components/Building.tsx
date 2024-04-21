import useMallContext from "../_hooks/useMallContext";
import BuildingFloor from "./BuildingFloor";

const Building: React.FC = () => {
  const { floors, undergroundFloors, getWidthPosition, groundGridRow } =
    useMallContext();

  const getFloorNumbers = (floorCount: number, isUnderground?: boolean) => {
    if (isUnderground) {
      return Array.from({ length: floorCount }, (_, i) => i + 1).map(
        (floor) => -floor
      );
    }
    return Array.from({ length: floorCount }, (_, i) => i);
  };

  return (
    <>
      {!!floors && (
        <div
          style={{
            gridRowStart: groundGridRow - floors,
            gridRowEnd: groundGridRow,
            ...getWidthPosition(),
          }}
          className={`ring-b-0 z-20 bg-red-300 ring-2 ring-black`}
        ></div>
      )}
      {!!undergroundFloors && (
        <div
          style={{
            gridRowStart: groundGridRow,
            gridRowEnd: groundGridRow + undergroundFloors,
            ...getWidthPosition(),
          }}
          className={`ring-t-0 z-20 bg-red-300 ring-2 ring-black`}
        ></div>
      )}

      {getFloorNumbers(floors).map((floor) => (
        <BuildingFloor key={floor} floor={floor} />
      ))}
      {getFloorNumbers(undergroundFloors, true).map((floor) => (
        <BuildingFloor key={floor} floor={floor} isUnderground />
      ))}
    </>
  );
};

export default Building;
