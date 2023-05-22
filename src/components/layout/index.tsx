import cn from "classnames";
import Sidebar from "./sidebar";
import Main from "./main";
import Extra from "./extra";
import Header from "./header";
import styles from "./layout.module.css";
import Footer from "./footer/";
import { DeviceSize } from "@configs/device.size";
import useWindowSize from "@hooks/use-window-size";

const Layout = ({ extra = true, children }: any) => {
  const size = useWindowSize();

  return (
    <>
      <div
        className={`${styles.layout}bg-white text-black antialiased dark:bg-gray-900 dark:text-white`}
      >
        <Header />
        <div className={styles.container}>
          <div className={cn(styles.body, !extra && styles.main)}>
            {size.width && size.width > DeviceSize.MOBILE_SIZE && <Sidebar />}
            <Main>{children}</Main>
            {size.width && size.width > DeviceSize.TABLET_SIZE && extra && (
              <Extra />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
