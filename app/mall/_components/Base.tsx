import Building from "./Building";
import Console from "./Console";
import useMallContext from "../_hooks/useMallContext";

const Base = () => {
  return (
    <div className="grid h-screen w-screen grid-cols-[repeat(10,1fr)] grid-rows-[repeat(10,1fr)]">
      <Console />
      <Building />
      <div className="z-10 col-span-full row-start-7 flex h-full w-full items-end">
        <hr className="h-1 w-full bg-black" />
      </div>
    </div>
  );
};

export default Base;
