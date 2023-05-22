import { useContext } from "react";
import cn from "classnames";
import ModalContext from "@stores/modal";
import { Close } from "@components/icons";
import Button from "@components/button";
import styles from "./modal.module.css";

const Modal = ({ children, className, ...props }: any) => {
  const { ref, setIsComponentVisible } = useContext(ModalContext);
  return (
    <>
      <div className={cn(styles.modal, className)} {...props}>
        <div ref={ref} className={styles.modalDialog}>
          <Button
            className={styles.closeButton}
            onClick={() => setIsComponentVisible((isOpen: any) => !isOpen)}
          >
            <Close />
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
