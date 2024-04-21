import useMallActions from "../_hooks/useMallActions";
import useMallContext from "../_hooks/useMallContext";

const Console = () => {
  const {
    setWidth,
    addFloor,
    removeFloor,
    addUndergroundFloor,
    removeUndergroundFloor,
  } = useMallActions();
  return (
    <div className="absolute z-50 flex h-20 w-full items-center justify-center">
      <div className="flex gap-4 rounded-xl bg-gray-300 p-2">
        <h1>Width</h1>
        <button onClick={() => setWidth(2)}>2</button>
        <button onClick={() => setWidth(4)}>4</button>
        <button onClick={() => setWidth(6)}>6</button>
        <h1>Floors</h1>
        <button onClick={() => addFloor()}>Add Floor</button>
        <button onClick={() => removeFloor()}>Remove Floor</button>
        <h1>Underground Floors</h1>
        <button onClick={() => addUndergroundFloor()}>Add Floor</button>
        <button onClick={() => removeUndergroundFloor()}>Remove Floor</button>
      </div>
    </div>
  );
};

export default Console;
