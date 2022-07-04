import classes from "./ProfileTabs.module.css";
import { useState } from "react";

const ProfileTabs = () => {
  const [tabActive, setTabActive] = useState("activity");
  //in above tab state, we can use login-signup value, but here I use boolean for fast code reading & execution
  // if true then login, if false then signup

  const activityTabHandler = () => {
    setTabActive("activity");
  };

  const likesTabHandler = () => {
    setTabActive("likes");
  };
  const collectionTabHandler = () => {
    setTabActive("collection");
  };
  const aboutTabHandler = () => {
    setTabActive("about");
  };

  console.log(tabActive);

  return (
    <div className={classes.profilePage}>
      {/* list of tabs */}
      <ul className={classes.nav}>
        <li
          className={tabActive === "activity" ? classes.active : "activity"}
          onClick={activityTabHandler}
        >
          Activity
        </li>
        <li
          className={tabActive === "likes" ? classes.active : "likes"}
          onClick={likesTabHandler}
        >
          Likes
        </li>
        <li
          className={tabActive === "collection" ? classes.active : "collection"}
          onClick={collectionTabHandler}
        >
          Collection
        </li>
        <li
          className={tabActive === "about" ? classes.active : "about"}
          onClick={aboutTabHandler}
        >
          About
        </li>
      </ul>
      {/* content of active tab */}
      <div className={classes.tabContent}>content</div>
    </div>
  );
};
export default ProfileTabs;
