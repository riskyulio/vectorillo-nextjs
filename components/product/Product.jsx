import classes from "./Product.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Product = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div onClick={showDetailsHandler} className={classes.product}>
      <Image src={props.imageSource} alt={props.title} />
      <h4 className={classes.productName}>{props.title}</h4>
      <p className={classes.productPrice}>USD ${props.price}</p>
    </div>
  );
};

export default Product;
