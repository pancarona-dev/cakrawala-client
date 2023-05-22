import ButtonGroup from "@components/button-group";
import styles from "./post-list.module.css";

const PostList = ({ postType, setPostType, children }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Last Questions</h2>
        <ButtonGroup
          buttons={["Questions"]}
          selected={postType}
          setSelected={setPostType}
        />
      </div>
      {children}
    </div>
  );
};

export default PostList;
