import classes from "./FilterWrapper.module.css";

const FilterWrapper = (props) => {
  const { filterName, filterContent } = props;

  const content = filterContent.map((content) => (
    <div key={content.id}>
      {content.checkbox}
      {content.range}
    </div>
  ));

  return (
    <section className={classes.wrapper}>
      <h4 className={classes.filterName}>{filterName}</h4>
      <div className={classes.filterContent}>{content}</div>
    </section>
  );
};

export default FilterWrapper;
