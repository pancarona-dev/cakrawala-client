import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { publicFetch } from "@utils/service";
import { Spinner } from "@components/icons";
import styles from "./avatar-card.module.css";

const UserAvatar = ({ username }: any) => {
  type TUser = {
    id: string;
    name: string;
    price: string;
    created: any;
  };

  const [userInfo, setUserInfo] = useState<Partial<TUser>>({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await publicFetch.get(`/user/${username}`);
      setUserInfo(data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <div>
        <div className={styles.avatarCard}>
          {!userInfo ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className={styles.avatar}>
              <Link href="/users/[username]" as={`/users/${username}`}>
                <Image
                  src={`https://secure.gravatar.com/avatar/${userInfo.id}?s=164&d=identicon`}
                  alt={username}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          )}
          <h2 className={styles.username}>{username}</h2>
          {!userInfo ? (
            <div className="loading">
              <Spinner />
            </div>
          ) : (
            <div className={styles.created}>
              <div>
                Created:
                <span>{moment(userInfo.created, "YYYYMMDD").fromNow()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
