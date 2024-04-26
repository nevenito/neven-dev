import Image from "next/image";

type Props = {
  className?: string;
};

const Chequy = ({ className = "size-5" }: Props) => (
  <Image
    src="/chequy.png"
    width={24}
    height={24}
    alt="cheq"
    className={className}
  />
);

export default Chequy;
