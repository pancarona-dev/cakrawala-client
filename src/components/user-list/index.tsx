import styles from "./user-list.module.css";

const UserList = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default UserList;
