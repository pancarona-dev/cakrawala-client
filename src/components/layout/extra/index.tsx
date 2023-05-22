import { useContext } from "react";
import { TagContext } from "@stores/tag";
import Tag from "@components/tag";
import { Spinner } from "@components/icons";
import styles from "@components/layout/extra/extra.module.css";

const Extra = ({ marginTop = 24 }) => {
  const { tagState } = useContext(TagContext);

  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.tagContainer}
          style={{ marginTop: `${marginTop}px` }}
        >
          <h2>Popular Tags</h2>
          {!tagState && (
            <div className="loading">
              <Spinner />
            </div>
          )}
          <div className={styles.popularTags}>
            {tagState?.map((tag: any) => (
              <Tag key={tag._id} count={tag.count}>
                {tag._id}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Extra;
