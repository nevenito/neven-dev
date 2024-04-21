import { cn } from "../utils/cn";

type Button = JSX.IntrinsicElements["button"];

const Button = ({ children, className, ...props }: Button) => {
  return (
    <button
      className={cn([
        "rounded-md bg-red-500 px-4 py-2 text-white  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50",
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
