import { useEffect, useRef } from "react";
import cn from "classnames";
import { Search } from "@components/icons";
import styles from "./search-input.module.css";

const SearchInput = ({
  fullWidth,
  autoFocus,
  marginLeft = true,
  isLoading = false,
  className,
  ...props
} : any) => {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus, ref]);

  return (
    <div
      className={cn(
        styles.container,
        fullWidth && styles.fullWidth,
        marginLeft && styles.ml24,
        isLoading && styles.isLoading
      )}
    >
      <input
        ref={ref}
        className={cn(
          styles.input,
          isLoading && styles.paddingRight,
          className
        )}
        {...props}
      />
      <Search className={styles.search} />
    </div>
  );
};

export default SearchInput;
