import classes from "./ProductDetails.module.css";
import { useId } from "react";
import Aside from "../aside/Aside";
import Image from "next/image";
import imagePreview from "../../public/images/Rectangle 37.png";

const ProductDetails = () => {
  const PersonalLicense = useId();
  const CommercialLicense = useId();
  const ExtendedCommercialLicense = useId();

  return (
    <div className={classes.productDetails}>
      <main className={classes.mainDetails}>
        <div className={classes.imageContainer}>
          <Image src={imagePreview} alt="preview" objectFit="cover" />
        </div>
      </main>
      <Aside>
        <section className={classes.itemsSection}>
          <h4 className={classes.sectionName}>Product Details</h4>
          <main className={classes.sectionContent}>product details</main>
        </section>
        <section className={classes.itemsSection}>
          <h4 className={classes.sectionName}>License</h4>
          <main className={classes.sectionContent}>
            <div className={classes.licenseOption}>
              <input
                id={PersonalLicense}
                type="radio"
                value="Personal Use"
                name="license"
              />
              <label htmlFor={PersonalLicense}>Personal Use</label>
            </div>
            <div className={classes.licenseOption}>
              <input
                id={CommercialLicense}
                type="radio"
                value="Commercial Use"
                name="license"
              />
              <label htmlFor={CommercialLicense}>Commercial Use</label>
            </div>
            <div className={classes.licenseOption}>
              <input
                id={ExtendedCommercialLicense}
                type="radio"
                value="Extended Commercial Use"
                name="license"
              />
              <label htmlFor={ExtendedCommercialLicense}>
                Extended Commercial Use
              </label>
            </div>
          </main>
        </section>
      </Aside>
    </div>
  );
};

export default ProductDetails;
