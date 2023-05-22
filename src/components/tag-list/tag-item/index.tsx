import Tag from "@components/tag";
import styles from "./tag-item.module.css";

const TagItem = ({ count, children }: any) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <Tag>{children}</Tag>
        </div>
        <div>{count} questions</div>
      </div>
    </>
  );
};

export default TagItem;
