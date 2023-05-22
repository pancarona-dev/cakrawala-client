import Link from "next/link";
import Image from "next/image";
import slug from "slug";
import Tag from "../../tag";
import styles from "./question-summary.module.css";
import moment from "moment";

const QuestionSummary = ({
  id,
  title,
  tags,
  author,
  createdTime,
  children,
}: any) => {
  return (
    <>
      <div className={styles.container}>
        <Link
          href="/questions/[slug]"
          as={`/questions/${id}-${slug(title)}`}
          className={styles.link}
        >
          {title}
        </Link>
        <div className={styles.excerpt}>{children}</div>
        <div className={styles.footer}>
          <div className={styles.tagContainer}>
            {tags.map((tag: any) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className={styles.userDetails}>
            <Link href="/users/[user]" as={`/users/${author.username}`}>
              <Image
                src={`https://secure.gravatar.com/avatar/${author.id}?s=32&d=identicon`}
                alt={author.username}
                width={32}
                height={32}
              />
            </Link>
            <div className={styles.info}>
              <span>asked {moment(createdTime, "YYYYMMDD").fromNow()}</span>
              <Link href="/users/[user]" as={`/users/${author.username}`}>
                {author.username}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionSummary;
