import { useContext } from "react";
import Link from "next/link";
import useComponentVisible from "@hooks/use-component-visible";
import ModalContext from "@stores/modal";
import { AuthContext } from "@stores/auth";
import Button from "@components/button";
import NavigationDropdown from "@components/navigation-dropdown";
import { Menu, Close, Logo } from "@components/icons";
import styles from "./header.module.css";
// import DarkModeButton from "@components/dark-mode/dark-mode-button";
import { SiteConfig } from "@configs/site.config";
import { DeviceSize } from "@configs/device.size";
import useWindowSize from "@hooks/use-window-size";
import Image from "next/image";

const Header = () => {
  const { handleComponentVisible } = useContext(ModalContext);
  const { isAuthenticated, authState, logout } = useContext(AuthContext);
  const { ref, toggleRef, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const size = useWindowSize();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div ref={toggleRef} className={styles.menuContainer}>
            <Button
              className={styles.menu}
              onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
            >
              {isComponentVisible ? <Close /> : <Menu />}
            </Button>
          </div>
          <Link href="/" className={styles.logo}>
            <div className="px-3">
              <Image
                src="/icon/icon.svg"
                alt={"sfdf"}
                width={32}
                height={32}
              />
            </div>

            {size.width &&
              size.width > DeviceSize.MOBILE_SIZE &&
              SiteConfig.title}
          </Link>

          {isAuthenticated() ? (
            <div className={styles.userInfo}>
              <div>
                Welcome{" "}
                <Link
                  href="/users/[user]"
                  as={`/users/${authState.userInfo.username}`}
                >
                  {authState.userInfo.username}!
                </Link>
              </div>
              <button onClick={() => logout()}>log out</button>
            </div>
          ) : (
            <>
              <Button
                className={styles.auth}
                secondary
                onClick={() => handleComponentVisible(true, "login")}
              >
                Log in
              </Button>
              <Button
                className={`${styles.auth} bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-400`}
                primary
                onClick={() => handleComponentVisible(true, "signup")}
              >
                Sign up
              </Button>
            </>
          )}
          {/* <DarkModeButton /> */}
        </div>

        <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
      </header>
    </>
  );
};

export default Header;
