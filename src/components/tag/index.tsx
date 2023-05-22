import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./tag.module.css";

const Tag = ({ children, className, count, ...props }: any) => {
  return count ? (
    <>
      <div>
        <Link
          href={{ pathname: "/", query: { tag: children } }}
          className={cn(styles.tag, className)}
          {...props}
        >
          {children}
        </Link>
        <span className={styles.multiplier}>×</span>
        &nbsp;
        <span className={styles.count}>{count}</span>
      </div>
    </>
  ) : (
    <>
      <Link
        href={{ pathname: "/", query: { tag: children } }}
        className={cn(styles.tag, className)}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default Tag;
