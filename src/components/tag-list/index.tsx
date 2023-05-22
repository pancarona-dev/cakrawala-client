import styles from "./tag-list.module.css";

const TagList = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default TagList;
