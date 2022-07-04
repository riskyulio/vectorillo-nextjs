import classes from "./Profile.module.css";
import ProfileTabs from "../../components/tabs/Profile/ProfileTabs";
import Image from "next/dist/client/image";
import Link from "next/link";
import avatar from "../../public/images/unsplash_OhKElOkQ3RE.png";

const Profile = () => {
  return (
    <div className={classes.profilePage}>
      <div className={classes.profile}>
        <div className={classes.avatar}>
          <Image src={avatar} alt="avatar" />
        </div>
        <h4 className={classes.name}>John Juansyah</h4>
        <div className={classes.editProfile}>
          <Link href="/edit-profile">Edit Profile</Link>
        </div>
      </div>
      <div>
        <ProfileTabs />
      </div>
    </div>
  );
};

export default Profile;
