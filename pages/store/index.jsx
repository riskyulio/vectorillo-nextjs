import { useId } from "react";
import classes from "./Store.module.css";
import FilterWrapper from "../../components/filter/FilterWrapper";
import Product from "../../components/product/Product";
import image1 from "../../public/images/Rectangle 37.png";
import Aside from "../../components/aside/Aside";

const DUMMY_PRODUCTS = [
  {
    id: "paint1",
    title: "Random blue painting",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint2",
    title: "BLuePink wall",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint3",
    title: "Blue white and black abstract",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint4",
    title: "Red paint wall",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint5",
    title: "Red paint wall",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint6",
    title: "Red paint wall",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint6",
    title: "Red paint wall",
    price: 25,
    imageSource: image1,
  },
  {
    id: "paint6",
    title: "Red paint wall",
    price: 25,
    imageSource: image1,
  },
];

const Store = (props) => {
  const priceID1 = useId();
  const priceID2 = useId();
  const priceID3 = useId();
  const priceID4 = useId();

  const priceRange = [
    {
      id: priceID1,
      checkbox: <input id={priceID1} type="checkbox" />,
      range: <label htmlFor={priceID1}> $5 - $20</label>,
    },
    {
      id: priceID2,
      checkbox: <input id={priceID2} type="checkbox" />,
      range: <label htmlFor={priceID2}> $21 - $45</label>,
    },
    {
      id: priceID3,
      checkbox: <input id={priceID3} type="checkbox" />,
      range: <label htmlFor={priceID3}> $46 - $60</label>,
    },
    {
      id: priceID4,
      checkbox: <input id={priceID4} type="checkbox" />,
      range: <label htmlFor={priceID4}> &gt;$61</label>,
    },
  ];

  return (
    <div className={classes.storePage}>
      <div className={classes.slider} />
      <div className={classes.productsWrapper}>
        <div className={classes.filterWrapper}>
          <Aside>
            <FilterWrapper
              filterName="Price Range"
              filterContent={priceRange}
            />
          </Aside>
        </div>
        <main className={classes.mainSection}>
          {DUMMY_PRODUCTS.map((productData) => (
            <Product
              key={productData.id}
              id={productData.id}
              title={productData.title}
              price={productData.price}
              imageSource={productData.imageSource}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {}, //will be passed to the page commponent as props
  };
}

export default Store;
