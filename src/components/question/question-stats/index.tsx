import styles from "./question-stats.module.css";

const QuestionStats = ({ voteCount, answerCount, view }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.vote}>
          <span>{voteCount}</span>
          <div>votes</div>
        </div>
        <div className={styles.answer}>
          <span>{answerCount}</span>
          <div>answers</div>
        </div>
        <div className={styles.view}>{view} views</div>
      </div>
    </>
  );
};

export default QuestionStats;
