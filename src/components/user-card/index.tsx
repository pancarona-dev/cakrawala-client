import styles from "./user-card.module.css";

const AvatarCard = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default AvatarCard;
