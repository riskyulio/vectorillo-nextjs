import Link from "next/link";
import Image from "next/image";
import LogoSVG from "../../public/images/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoSVG} alt="vectorillo logo" />
    </Link>
  );
};

export default Logo;
