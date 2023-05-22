import cn from "classnames";
import Navigation from "@components/navigation";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Navigation />
      </div>
    </>
  );
};

export default Sidebar;
