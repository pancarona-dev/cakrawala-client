import Navigation from "@components/navigation";
import styles from "./navigation-dropdown.module.css";

const NavigationDropdown = () => {
  return (
    <>
      <div className={styles.dialog}>
        <div className={styles.sidebar}>
          <Navigation />
        </div>
      </div>
    </>
  );
};

export default NavigationDropdown;
