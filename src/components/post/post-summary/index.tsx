import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "@stores/auth";
import { FetchContext } from "@stores/fetch";
import Tag from "@components/tag";
import styles from "./post-summary.module.css";
import moment from "moment";

const PostSummary = ({
  tags,
  author,
  created,
  questionId,
  answerId,
  setQuestion,
  children,
}: any) => {
  const { authState, isAdmin } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);
  const router = useRouter();

  const handleDeleteComment = async () => {
    const res = window.confirm("Are you sure delete your post?");
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/answer/${questionId}/${answerId}`
          : `/question/${questionId}`
      );

      if (answerId) {
        setQuestion(data);
      } else {
        router.push("/");
      }
    }
  };

  return (
    <>
      <div className={styles.postCell}>
        <div className={styles.text}>{children}</div>
        <div className={styles.footer}>
          <div className={styles.row}>
            <div className={styles.tagContainer}>
              {tags?.map((tag: any) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className={styles.userDetails}>
              <Link href="/users/[user]" as={`/users/${author.username}`}>
                <Image
                  src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                  alt={author.username}
                  width={32}
                  height={32}
                />
              </Link>
              <div className={styles.info}>
                <span>
                  {tags ? "asked" : "answered"}{" "}
                  {moment(created, "YYYYMMDD").fromNow()}
                </span>
                <Link href="/users/[user]" as={`/users/${author.username}`}>
                  {author.username}
                </Link>
              </div>
            </div>
          </div>
          {(authState.userInfo?.id === author.id || isAdmin()) && (
            <div className={styles.row}>
              <button
                className={styles.delete}
                onClick={() => handleDeleteComment()}
              >
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostSummary;
