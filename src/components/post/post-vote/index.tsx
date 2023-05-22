import { useContext } from "react";
import { AuthContext } from "@stores/auth";
import { FetchContext } from "@stores/fetch";
import ModalContext from "@stores/modal";
import Button from "@components/button";
import { ArrowUp, ArrowDown } from "@components/icons";
import styles from "./post-vote.module.css";

const PostVote = ({ score, votes, questionId, answerId, setQuestion }: any) => {
  const { authState, isAuthenticated } = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);
  const { handleComponentVisible } = useContext(ModalContext);

  const isUpVoted = () => {
    return votes.find((v :any) => v.user === authState.userInfo?.id)?.vote === 1;
  };

  const isDownVoted = () => {
    return votes.find((v : any) => v.user === authState.userInfo?.id)?.vote === -1;
  };

  const upVote = async () => {
    const { data } = await authAxios.get(
      `/votes/upvote/${questionId}/${answerId ? answerId : ""}`
    );
    setQuestion(data);
  };

  const downVote = async () => {
    const { data } = await authAxios.get(
      `/votes/downvote/${questionId}/${answerId ? answerId : ""}`
    );
    setQuestion(data);
  };

  const unVote = async () => {
    const { data } = await authAxios.get(
      `/votes/unvote/${questionId}/${answerId ? answerId : ""}`
    );
    setQuestion(data);
  };

  return (
    <>
      <div className={styles.voteCell}>
        <Button
          className={styles.voteButton}
          onClick={() =>
            isAuthenticated()
              ? isUpVoted()
                ? unVote()
                : upVote()
              : handleComponentVisible(true, "signup")
          }
        >
          <ArrowUp className={isUpVoted() ? styles.voted : ""} />
        </Button>
        <div className={styles.score}>{score}</div>
        <Button
          className={styles.voteButton}
          onClick={() =>
            isAuthenticated()
              ? isDownVoted()
                ? unVote()
                : downVote()
              : handleComponentVisible(true, "signup")
          }
        >
          <ArrowDown className={isDownVoted() ? styles.voted : ""} />
        </Button>
      </div>
    </>
  );
};

export default PostVote;
