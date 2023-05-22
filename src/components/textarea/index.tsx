import React from "react";
import cn from "classnames";
import styles from "./textarea.module.css";

const TextArea = ({
  label,
  inputInfo,
  hasError,
  errorMessage,
  className,
  ...props
}: any) => {
  return (
    <>
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        {inputInfo && <div className={styles.inputInfo}>{inputInfo}</div>}
        <textarea
          className={cn(
            styles.textarea,
            className,
            hasError && styles.hasError
          )}
          {...props}
        />
        {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
      </div>
    </>
  );
};

export default TextArea;
