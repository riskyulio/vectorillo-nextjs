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
          <main className={classes.sectionContent}>
            <table cellSpacing={8}>
              <tr>
                <th>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-rulers"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                  </svg>
                </th>
                <tb>4000 x 4000 px</tb>
              </tr>
              <tr>
                <th>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="bi bi-file-earmark-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                  </svg>
                </th>
                <tb>.ai</tb>
              </tr>
            </table>
          </main>
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
