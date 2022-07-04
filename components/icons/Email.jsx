import Image from "next/image";
import email from "../../public/images/email-icon.png";

const EmailIcon = () => {
  return <Image src={email} alt="email" />;
};

export default EmailIcon;
