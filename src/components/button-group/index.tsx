import cn from "classnames";
import Button from "@components/button";
import styles from "@components/button-group/button-group.module.css";
const ButtonGroup = ({
  buttons,
  selected,
  setSelected,
  borderBottom = false,
}: any) => {
  return (
    <>
      <div
        className={cn(styles.container, borderBottom && styles.borderBottom)}
      >
        {buttons.map((button: any) => (
          <Button
            key={button}
            className={selected === button && styles.active}
            onClick={() => setSelected(button)}
          >
            {button}
          </Button>
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
