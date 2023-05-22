import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@stores/auth";
import { FetchContext } from "@stores/fetch";
import styles from "./comment-item.module.css";
import moment from "moment";

const CommentItem = ({
  author,
  created,
  isOwner,
  answerId,
  questionId,
  commentId,
  setQuestion,
  children,
}: any) => {
  const { authState, isAdmin } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);

  const handleDeleteComment = async () => {
    const res = window.confirm("Are you sure delete your comment?");
    if (res) {
      const { data } = await authAxios.delete(
        answerId
          ? `/comment/${questionId}/${answerId}/${commentId}`
          : `/comment/${questionId}/${commentId}`
      );

      setQuestion(data);
    }
  };

  return (
    <>
      <div className={styles.commentContainer}>
        <div>{children} –</div> &nbsp;
        <Link
          href="/users/[user]"
          as={`/users/${author}`}
          className={isOwner ? styles.owner : undefined}
        >
          {author}
        </Link>
        &nbsp;
        <div className={styles.dateText}>
          {moment(created).format("MMM Do YY")}
        </div>
        {(authState.userInfo?.username === author || isAdmin()) && (
          <button
            className={styles.delete}
            onClick={() => handleDeleteComment()}
          >
            delete
          </button>
        )}
      </div>
    </>
  );
};

export default CommentItem;
