import { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FetchContext } from "@stores/fetch";
import TextArea from "@components/textarea";
import Button from "@components/button";
import styles from "./add-comment.module.css";

const AddComment = ({
  questionId,
  answerId,
  setShowAddComment,
  setQuestion,
}: any) => {
  const { authAxios } = useContext(FetchContext);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={async (values, { setStatus, resetForm }) => {
          setLoading(true);
          try {
            const { data } = await authAxios.post(
              `/comment/${questionId}/${answerId ? answerId : ""}`,
              values
            );

            setQuestion(data);

            resetForm({});
            setShowAddComment(false);
          } catch (error: any) {
            setStatus(error.response.data.message);
          }
          setLoading(false);
        }}
        validationSchema={Yup.object({
          comment: Yup.string()
            .required("Comment is missing.")
            .min(5, "Comment must be at least 5 characters.")
            .max(1000, "Comment cannot be longer than 1000 characters."),
        })}
      >
        {({
          values,
          errors,
          touched,
          status,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <TextArea
              name="comment"
              autoComplete="off"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              hasError={touched.comment && errors.comment}
              errorMessage={errors.comment && errors.comment}
            />
            <div className={styles.status}>{status}</div>
            <div>
              <Button
                className={styles.button}
                type="submit"
                primary
                isLoading={loading}
                disabled={isSubmitting}
              >
                Add Comment
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddComment;
