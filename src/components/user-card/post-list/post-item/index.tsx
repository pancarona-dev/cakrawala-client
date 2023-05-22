import Link from "next/link";
import slug from "slug";
import styles from "./post-item.module.css";
import moment from "moment";

const PostItem = ({ vote, title, created, id }: any) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.vote}>{vote}</div>
        <Link
          href="/questions/[slug]"
          className={styles.title}
          as={`/questions/${id}-${slug(title)}`}
        >
          {title}
        </Link>
        <div className={styles.created}>
          {moment(created, "YYYYMMDD").fromNow()}
        </div>
      </div>
    </>
  );
};

export default PostItem;
