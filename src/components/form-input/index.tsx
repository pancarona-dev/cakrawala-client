import React from "react";
import cn from "classnames";
import { Alert } from "@components/icons";
import styles from "@components/form-input/form-input.module.css";

const FormInput = ({
  label,
  inputInfo,
  hasError = false,
  errorMessage,
  ...props
}: any) => {
  return (
    <>
      <div className={styles.container}>
        <label id={label} className={styles.label}>
          {label}
          {inputInfo && <div className={styles.inputInfo}>{inputInfo}</div>}
          <div className={styles.inputContainer}>
            <input
              className={cn(styles.input, hasError && styles.hasError)}
              htmlFor={label}
              {...props}
            />
            {hasError && <Alert className={styles.alert} />}
          </div>
        </label>
        {hasError && <div className={styles.inputMessage}>{errorMessage}</div>}
      </div>
    </>
  );
};

export default FormInput;
