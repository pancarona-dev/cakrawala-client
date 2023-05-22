import { useContext } from "react";
import cn from "classnames";
import { AuthContext } from "@stores/auth";
import styles from "./page-title.module.css";
import Link from "next/link";

const PageTitle = ({ title, button, borderBottom = true, children }: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <div
        className={cn(styles.container, borderBottom && styles.borderBottom)}
      >
        <div className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.buttonContainer}>
            {button && (
              <Link href={isAuthenticated() ? "/questions/ask" : "/auth"}>
                <div className="rounded text-slate-50 p-3 bg-primary-500 hover:bg-primary-400 dark:hover:bg-primary-400">
                  Ask Question
                </div>
              </Link>
            )}
          </div>
        </div>
        {children && <div className={styles.summary}>{children}</div>}
      </div>
    </>
  );
};

export default PageTitle;
