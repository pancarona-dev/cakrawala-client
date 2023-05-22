import cn from "classnames";
import TagsInput from "react-tagsinput";
import { Alert } from "@components/icons";
import styles from "./tag-input.module.css";

const FormInput = ({
  label,
  inputInfo,
  hasError = false,
  errorMessage,
  ...props
}: any) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {inputInfo && <div className={styles.inputInfo}>{inputInfo}</div>}
      <div className={styles.inputContainer}>
        <TagsInput
          onlyUnique
          className={cn("react-tagsinput", hasError && styles.error)}
          focusedClassName={styles.inputFocused}
          {...props}
        />
        {hasError && <Alert className={styles.alert} />}
      </div>
      {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default FormInput;
