import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@stores/auth";
import ModalContext from "@stores/modal";
import AddComment from "@components/post/add-comment";
import styles from "./comment-list.module.css";

const CommentList = ({ children, questionId, answerId, setQuestion }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { handleComponentVisible } = useContext(ModalContext);
  const [showAddComment, setShowAddComment] = useState(false);
  const [visibleComments, setVisibleComments] = useState(children.slice(0, 3));
  const [difference, setDiffrence] = useState(0);

  useEffect(() => {
    setVisibleComments(children.slice(0, 3));
  }, [children]);

  useEffect(() => {
    setDiffrence(children.length - visibleComments.length);
  }, [children.length, visibleComments]);

  return (
    <>
      <div className={styles.commentCell}>
        {visibleComments}

        {difference > 0 ? (
          <button
            className={styles.showMore}
            onClick={() => setVisibleComments(children)}
          >
            show <b>{difference}</b> more comments
          </button>
        ) : (
          !showAddComment && (
            <button
              className={styles.addComment}
              onClick={() =>
                isAuthenticated()
                  ? setShowAddComment(true)
                  : handleComponentVisible(true, "signup")
              }
            >
              add comment
            </button>
          )
        )}

        {showAddComment && (
          <AddComment
            questionId={questionId}
            answerId={answerId}
            setShowAddComment={setShowAddComment}
            setQuestion={setQuestion}
          />
        )}
      </div>
    </>
  );
};

export default CommentList;
