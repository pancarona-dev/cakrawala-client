import styles from "./question-wrapper.module.css";

const QuestionWrapper = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default QuestionWrapper;
