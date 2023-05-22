import Link from "next/link";
import Image from "next/image";
import styles from "./user-item.module.css";
import moment from "moment";

const UserItem = ({ username, profilePhoto, created }: any) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <Link href="/users/[username]" as={`/users/${username}`}>
            <Image src={profilePhoto} alt={username} width={32} height={32} />
          </Link>
        </div>
        <div className={styles.body}>
          <Link href="/users/[username]" as={`/users/${username}`}>
            {username}
          </Link>
          <div>created {moment(created, "YYYYMMDD").fromNow()}</div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
