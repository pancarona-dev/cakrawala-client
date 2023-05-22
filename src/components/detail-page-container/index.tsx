import Extra from "@components/layout/extra";
import Main from "@components/layout/main";
import styles from "./detail-page-container.module.css";
import useWindowSize from "@hooks/use-window-size";
import { DeviceSize } from "@configs/device.size";

const DetailPageContainer = ({ children }: any) => {
  const size = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <Main border={false}>{children}</Main>
        {size.width && size.width > DeviceSize.TABLET_SIZE && (
          <Extra marginTop={16} />
        )}
      </div>
    </>
  );
};

export default DetailPageContainer;
